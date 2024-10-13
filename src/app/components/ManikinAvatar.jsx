'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import getManikin from './threeObjects/manikin';

export default function ManikinAvatar() {

    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            //scene
            const scene = new THREE.Scene({ color: 0xffffff });
            scene.fog = new THREE.Fog(0xcccccc);



            //camera
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1500);
            camera.layers.enable(1)
            camera.position.z = 8;


            //renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
            renderer.setSize(window.innerWidth/3, window.innerWidth/3);
            renderer.setClearColor( 0x000000, 0 );
            if (containerRef.current) {
                containerRef.current.replaceChildren(renderer.domElement);
            }

            //light
            const pointLight = new THREE.PointLight(0xffffff, 10, 500, 0.25);
            pointLight.position.set(-3, 3, 5);
            scene.add(pointLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 3, 1000, 0.25);
            directionalLight.position.set(16, 16, 20)
            scene.add(directionalLight);

            const manikin = getManikin(); scene.add(manikin);

            renderer.render(scene, camera);

            // //resize
            // const handleResize = () => {
            //     const width = 300;
            //     const height = 400;

            //     camera.aspect = width / height;
            //     camera.updateProjectionMatrix();
            //     renderer.setSize(width, height);
            // };
            // window.addEventListener('resize', handleResize);
            // return () => {
            //     window.removeEventListener('resize', handleResize);
            // };
        }
    }, [])

    return <div className='manikinAvatar' ref={containerRef} />;
}