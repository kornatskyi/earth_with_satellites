import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Body } from "./Body";
import { fetchSatelliteData } from "./queries";
import { initWebSocket } from "./webSocket";

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
const earth = new Body(
  10,
  new THREE.Vector3(0, 0, 0),
  new THREE.Color(THREE.Color.NAMES.aqua)
);
scene.add(earth.mesh);
console.log(earth.position);

const satellite = new Body(
  1,
  new THREE.Vector3(11, 11, 0),
  new THREE.Color(THREE.Color.NAMES.yellowgreen)
);
scene.add(satellite.mesh);

const socket = initWebSocket();

const button = document.createElement("button");
button.style.position = "absolute";
button.style.top = "20px";
button.style.left = "20px";
button.textContent = "Click Me!";
button.addEventListener("click", () => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send("hello from the client!");
  } else {
    console.log("WebSocket connection is not open. Message not sent.");
  }
});
document.body.append(button);

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
