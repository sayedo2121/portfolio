'use client'

import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import HelveticaFont from 'three/examples/fonts/droid/droid_sans_bold.typeface.json'

const NUMBEROFROCKS = 15;
let nextJSText:THREE.Object3D;
let BuiltWithText:THREE.Object3D;
let reactText:THREE.Object3D;

export default function getRocks(){
    let rocks = new THREE.Object3D();
    for(let r=0; r<NUMBEROFROCKS; r++){
        let rock = createRock(r*30, Math.floor(Math.random()*75) - 35, 0);
        rocks.add(rock);
    }

    let bigRock = createRock(100, 0, 50);
    rocks.add(bigRock);

    BuiltWithText = createText('BUILT WITH', 130, 10, 0);
    //rocks.add(BuiltWithText);

    nextJSText = createText('NEXT.JS + REACT', 170, 20, 0);
    //rocks.add(nextJSText);

    reactText = createText('THREE.JS', 210, 5, 0);
    //rocks.add(reactText);

    

    rocks.position.z = -40;
    rocks.position.x = 15;
    rocks.layers.set(1)

    return rocks;
}

function createRock(x: number, y: number, z: number){
    let rockGeometry = new THREE.TetrahedronGeometry(Math.floor(Math.random() * 6) + 1.5, Math.floor(Math.random() * 2) + 1);
    let rockMaterial = new THREE.MeshLambertMaterial({ color: 0x222d4a, flatShading: true });

    let rock = new THREE.Mesh(rockGeometry, rockMaterial);
    rock.position.set(x, y, z);
    return rock;
}

function createText(text:string, x: number, y: number, z: number){
    const loader = new FontLoader();
    const bigTextFont = loader.parse(HelveticaFont);

    const textGeometry = new TextGeometry(text, {
        font: bigTextFont,
        size: 2,
        depth: 1
    });
    const textMaterial = new THREE.MeshLambertMaterial({ color: 0x222d4a, flatShading: true, transparent: true });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(x, y, z);
    return textMesh;
}

export function animateRocks(rocks: THREE.Object3D){
    rocks.children.forEach((rock: THREE.Object3D) => {
        if(nextJSText && nextJSText != rock
            && reactText && reactText != rock
            && BuiltWithText && BuiltWithText != rock
        ){
            rock.rotation.x += 0.002;
            rock.rotation.y += 0.002;
        }
    })
    rocks.position.x -= 0.01
}

export function scrollRocks(rocks: THREE.Object3D, delta: number){
    rocks.position.x -= delta*0.005;
}