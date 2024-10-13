"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import getManikin, { animateManikin } from "./threeObjects/manikin";
import getBackground from "./threeObjects/background";
import getBigText, {
  animateBigTextIn,
  animateBigTextOut,
} from "./threeObjects/bigText";
import getRocks, { animateRocks, scrollRocks } from "./threeObjects/rocks";
import { usePathname, useRouter } from "next/navigation";
import Links from "./Links";

function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manikinClicked, setManikinClicked] = useState(false);
  const path = usePathname();
  const mobileBreakpoint = 640;

  useEffect(() => {
    if (typeof window !== "undefined") {
      //global vars
      let scrollDelta = 0;
      let scrollAmount = 0;
      let mouseOverManikin = false;
      let manikinClickedLocal = false;
      let manikinAnimate = true;
      let soundEffect = new Audio("./audio/Elixer.wav");

      //scene
      const scene = new THREE.Scene({ color: 0xffffff });
      scene.fog = new THREE.Fog(0xcccccc);

      //camera
      const camera = new THREE.PerspectiveCamera(
        45 + window.innerWidth * 0.00025,
        window.innerWidth / window.innerHeight,
        0.1,
        1500
      );
      camera.position.z = 30;
      camera.layers.enable(1);

      //renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor("#0c101c");
      if (containerRef.current) {
        containerRef.current.replaceChildren(renderer.domElement);
      }

      //raycasting
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      raycaster.layers.set(1);
      pointer.x = -1;
      pointer.y = -1;

      //light
      const pointLight = new THREE.PointLight(0xffffff, 10, 500, 0.25);
      pointLight.position.set(-3, 3, 5);
      scene.add(pointLight);

      const directionalLight = new THREE.DirectionalLight(
        0xffffff,
        3,
        1000,
        0.25
      );
      directionalLight.position.set(16, 16, 20);
      scene.add(directionalLight);
      // const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
      // scene.add( helper );

      //objects
      const manikin = getManikin();
      scene.add(manikin);
      manikin.layers.set(1);
      const background = getBackground();
      scene.add(background);
      const rocks = getRocks();
      scene.add(rocks);
      rocks.layers.set(1);

      //text
      const bigText = getBigText(scene);
      if (window.innerWidth > mobileBreakpoint) {
        scene.add(bigText);
        bigText.layers.set(0);
      }

      //animate
      const animate = () => {
        //manikin
        if (manikinAnimate === true) {
          animateManikin(manikin);
        }

        //rocks
        animateRocks(rocks);
        if (path == "/home") {
          scrollDelta *= 0.9; //drift the motion
          scrollRocks(rocks, scrollDelta);
        }

        //linkRocks

        // calculate objects intersecting the picking ray
        camera.updateMatrixWorld();

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        if (intersects.length > 0) {
          if (
            path == "/home" ||
            (path != "/home" && document.documentElement.scrollTop < window.innerHeight / 7)
          ) {
            //manikin hover
            if (intersects[0].object.parent == manikin) {
              // if (
              //   (window.innerWidth > mobileBreakpoint &&
              //     !mouseOverManikin &&
              //     !manikinClicked) ||
              //   (window.innerWidth < mobileBreakpoint &&
              //     !mouseOverManikin &&
              //     manikinClicked)
              // ) {
              //   //first condition so it doesn't do the sound over and over
              //   try {
              //     soundEffect.play();
              //   } catch {
              //     console.log(
              //       "Sound is off. User is yet to interact with the webpage"
              //     );
              //   }
              // }
              mouseOverManikin = true;

              if (
                manikinClickedLocal == false &&
                window.innerWidth > mobileBreakpoint
              )
                animateBigTextIn(bigText);
            } else {
              mouseOverManikin = false;

              if (manikinClickedLocal == false) manikinAnimate = true;

              if (window.innerWidth > mobileBreakpoint)
                animateBigTextOut(bigText);
            }
          }
        }

        if (
          (window.innerWidth > mobileBreakpoint && mouseOverManikin) ||
          (window.innerWidth < mobileBreakpoint && manikinClickedLocal)
        ) {
          manikin.rotation.x *= 0.9;
          manikin.rotation.y *= 0.9;
          manikinAnimate = false;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();

      // mouseclick
      const onMouseClick = (event: any) => {
        if (window.innerWidth > mobileBreakpoint) {
          if (mouseOverManikin) {
            setManikinClicked(true);
            manikinClickedLocal = true;
            animateBigTextOut(bigText);
          } else {
            manikinClickedLocal = false;
            setManikinClicked(false);
          }
        } else {
          if (manikinClickedLocal) {
            manikinClickedLocal = false;
            setManikinClicked(false);
          } else {
            setManikinClicked(true);
            manikinClickedLocal = true;
          }
        }
      };
      let threeContainer = document.querySelector(".threeSceneContainer");
      threeContainer?.addEventListener("click", onMouseClick, true);

      //mousemove
      const onPointerMove = (event: any) => {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components

        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", onPointerMove);

      //scroll
      const onMouseScroll = (event: WheelEvent) => {
        scrollDelta = event.deltaY;
        scrollAmount += scrollDelta;
      };
      window.addEventListener("wheel", onMouseScroll);

      let last_pos_x = window.innerWidth;
      //resize
      const handleResize = (event: Event) => {
        let diff_x = window.innerWidth - last_pos_x;
        last_pos_x = window.innerWidth;

        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;

        if (diff_x > 0) {
          camera.fov -= window.innerWidth * 0.00025;
        } else {
          camera.fov += window.innerWidth * 0.00025;
        }

        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="threeSceneContainer flex flex-col items-center">
      <Links
        manikinClicked={manikinClicked}
        setManikinClicked={setManikinClicked}
      />
      <div className="threeScene fixed w-full" ref={containerRef} />
    </div>
  );
}

export default ThreeScene;
