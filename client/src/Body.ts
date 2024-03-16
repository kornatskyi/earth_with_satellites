import {
  Color,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  TextureLoader,
  Vector3,
} from "three";

export class Body {
  mesh: Mesh;
  constructor(
    radius: number,
    initPosition: Vector3,
    image: string | null = null,
    color: Color | null = null
  ) {
    this.mesh = new Mesh(
      new SphereGeometry(radius, 200, 200), // !TODO: number of segments later
      image
        ? new MeshBasicMaterial({
            map: new TextureLoader().load(image),
            // wireframe: true,
          })
        : new MeshBasicMaterial({
            color: color?.getHex(),
            wireframe: true,
          })
    );
    [this.mesh.position.x, this.mesh.position.y, this.mesh.position.z] = [
      ...initPosition,
    ];
  }

  get position() {
    return this.mesh.position;
  }

  updatePositionFromAngularPosition(
    latitude: number,
    longitude: number,
    altitude: number,
    earthRadius: number
  ) {
    [this.mesh.position.x, this.mesh.position.y, this.mesh.position.z] =
      latLonAltToXYZ(latitude, longitude, altitude, earthRadius);
  }
}

function latLonAltToXYZ(
  lat: number,
  lon: number,
  alt: number,
  earthRadius: number
): [number, number, number] {
  const latRad = lat * (Math.PI / 180);
  const lonRad = lon * (Math.PI / 180);

  const x = (earthRadius + alt) * Math.cos(latRad) * Math.cos(lonRad);
  const y = (earthRadius + alt) * Math.cos(latRad) * Math.sin(lonRad);
  const z = (earthRadius + alt) * Math.sin(latRad);

  return [x, y, z];
}
