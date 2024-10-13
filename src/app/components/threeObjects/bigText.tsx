'use client'

import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import HelveticaFont from 'three/examples/fonts/droid/droid_sans_bold.typeface.json'
import {gsap} from 'gsap';

export default function getBigText(scene: any) {
    const loader = new FontLoader();
    const bigTextFont = loader.parse(HelveticaFont);

    const textGeometry = new TextGeometry('SAYED', {
        font: bigTextFont,
        height: 10,
        size: 8,
        depth: 0
    });
    const textMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, transparent: true});
    const bigText = new THREE.Mesh(textGeometry, textMaterial);
    bigText.position.x = -16;
    bigText.position.y = -5;
    bigText.position.z = 50;
    bigText.material.opacity = 0.0;
    return bigText;

}

export function animateBigTextIn(bigText: THREE.Object3D){
    gsap.to(bigText.position, {z: -15, ease: "Power2.out"})
    gsap.to(bigText.material, {opacity: 1.0, ease: "Power2.out", delay: 0.1})
}

export function animateBigTextOut(bigText: THREE.Object3D){
    gsap.to(bigText.position, {z: 50, ease: "Power4.in", delay: 0.05})
    gsap.to(bigText.material, {opacity: 0.0, ease: "expo.out"})
}