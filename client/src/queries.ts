// Fetch satellite data from the backend server
export async function fetchSatelliteData() {
  try {
    const response = await fetch("http://localhost:3000/api/satellites");
    const data = await response.json();
    console.log(data);

    // Process the retrieved satellite data and update the scene
    // ...
  } catch (error) {
    console.error("Error fetching satellite data:", error);
  }
}
