import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 20;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a spheres
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 16, 8),
  new THREE.MeshBasicMaterial({ color: "#038cfc", wireframe: true })
);
scene.add(earth);

const satellite = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 8),
  new THREE.MeshBasicMaterial({ color: "#a89200", wireframe: true })
);

scene.add(satellite);

// Create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 100;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
