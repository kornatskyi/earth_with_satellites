import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Body } from "./Body";
import { fetchSatelliteData } from "./queries";
import { initWebSocket } from "./webSocket";
import mapImage from "../public/images/map.jpg";

const socket = initWebSocket();

const EARTH_ACTUAL_RADIUS = 6371;
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = 100;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a spheres
const earthRadius = 50;
const earth = new Body(earthRadius, new THREE.Vector3(0, 0, 0), mapImage);
scene.add(earth.mesh);
console.log(earth.position);

const satellite = new Body(
  1,
  new THREE.Vector3(11, 11, 0),
  null,
  new THREE.Color(THREE.Color.NAMES.chocolate)
);
satellite.updatePositionFromAngularPosition(
  0,
  0,
  0 * (earthRadius / EARTH_ACTUAL_RADIUS), // scale altitude
  earthRadius
);
socket.addEventListener("message", (event) => {
  const parsed = JSON.parse(event.data);
  console.log(parsed);
  

  if (
    parsed.latitude !== undefined &&
    parsed.longitude !== undefined &&
    parsed.altitude !== undefined
  ) {
    satellite.updatePositionFromAngularPosition(
      parsed.latitude,
      parsed.longitude,
      parsed.altitude * (earthRadius / EARTH_ACTUAL_RADIUS), // scale altitude
      earthRadius
    );
  }
});

scene.add(satellite.mesh);

// Create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.3;
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 500;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
