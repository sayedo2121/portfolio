'use client'

import * as THREE from 'three';

const bgGeometry = new THREE.OctahedronGeometry(100, 1);
const bgMaterial = new THREE.MeshLambertMaterial({ color: 0x090c14, flatShading: true, fog: false});

const meshColumns = 17;
const meshRows = 17;
export default function getBackground() {
    let firstMesh = getMesh(-400, 800, -500);
    for (let r = 0; r < meshRows; r++) {
        for (let c = 0; c < meshColumns; c++) {
            let mesh = getMesh(100 * c, -100 * r, -50 * c);
            mesh.layers.set(1);
            firstMesh.add(mesh);
        }
    }

    firstMesh.children.forEach((c) => {
        c.rotation.x = Math.floor(Math.random() * 10);
        let scaleRandom = Math.floor(Math.random() * 2) + 1;
        c.scale.x += scaleRandom == 1? 0: 0.1;
        c.scale.y += scaleRandom == 1? 0: 0.1;
        c.scale.z += scaleRandom == 1? 0: 0.1;
    });

    return firstMesh;
}

function getMesh(x, y, z) {
    let mesh = new THREE.Mesh(bgGeometry, bgMaterial);
    mesh.position.set(x, y, z);
    return mesh;
}