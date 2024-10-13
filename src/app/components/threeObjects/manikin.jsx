'use client'

import * as THREE from 'three';

const manikinGeometry = new THREE.OctahedronGeometry(1, 1);
const manikinMaterial = new THREE.MeshLambertMaterial({ color: 0x546fb3, flatShading: true });

export default function getManikin() {
    const manikin = new THREE.Object3D();
    manikin.add(getBody());
    manikin.add(getHead());
    manikin.add(getLeftLeg());
    manikin.add(getRightLeg());
    manikin.add(getLeftArm());
    manikin.add(getRightArm());
    manikin.receiveShadow = true;

    const planeMaterial = new THREE.MeshBasicMaterial({transparent: true})
    const planeMesh = new THREE.Mesh(new THREE.BoxGeometry(6, 8, 3), planeMaterial);
    planeMesh.material.opacity = 0;
    planeMesh.layers.set(1);
    manikin.add(planeMesh)

    return manikin
}

function getHead() {
    const head = new THREE.Mesh(manikinGeometry, manikinMaterial);
    head.position.y = 2.5;
    head.layers.set(1);
    return head;
}

function getBody() {
    const bodyGeometry = new THREE.DodecahedronGeometry(1,0)
    const body = new THREE.Mesh(bodyGeometry, manikinMaterial);
    body.scale.x = 1.2;
    body.scale.y = 2;
    body.scale.z = 0.75;
    body.layers.set(1);
    return body;
}

function getLeftArm() {
    const leftArm = new THREE.Mesh(manikinGeometry, manikinMaterial);
    // leftArm.position.y = -2.45;
    leftArm.position.x = -1.5;
    leftArm.scale.x = -0.35;
    leftArm.scale.y = 1.75;
    leftArm.scale.z = -0.5;
    leftArm.rotation.z = -0.55;
    leftArm.layers.set(1);
    return leftArm;
}

function getRightArm() {
    const rightArm = new THREE.Mesh(manikinGeometry, manikinMaterial);
    // rightArm.position.y = -2.45;
    rightArm.position.x = 1.5;
    rightArm.scale.x = -0.35;
    rightArm.scale.y = 1.75;
    rightArm.scale.z = -0.5;
    rightArm.rotation.z = 0.55;
    rightArm.layers.set(1);
    return rightArm;
}

function getLeftLeg() {
    const leftLeg = new THREE.Mesh(manikinGeometry, manikinMaterial);
    leftLeg.position.y = -2.75;
    leftLeg.position.x = -0.5;
    leftLeg.scale.x = -0.5;
    leftLeg.scale.y = 1.75;
    leftLeg.scale.z = -0.5;
    leftLeg.rotation.z = -0.15;
    leftLeg.layers.set(1);
    return leftLeg;
}

function getRightLeg() {
    const rightLeg = new THREE.Mesh(manikinGeometry, manikinMaterial);
    rightLeg.position.y = -2.75;
    rightLeg.position.x = 0.5;
    rightLeg.scale.x = -0.5;
    rightLeg.scale.y = 1.75;
    rightLeg.scale.z = -0.5;
    rightLeg.rotation.z = 0.15;
    rightLeg.layers.set(1);
    return rightLeg;
}

export function animateManikin(manikin) {
    manikin.rotation.x += 0.002;
    manikin.rotation.y += 0.002;

    if (manikin.rotation.x >= 2 * Math.PI) {
        manikin.rotation.x = 0;
    }

    if (manikin.rotation.y >= 2 * Math.PI) {
        manikin.rotation.y = 0;
    }
}
