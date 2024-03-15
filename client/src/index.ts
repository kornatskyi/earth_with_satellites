import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(100, 16, 8),
  new THREE.MeshBasicMaterial({ color: "#ffff", wireframe: true })
);
scene.add(earth);

camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
