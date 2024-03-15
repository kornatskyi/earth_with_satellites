import { Color, Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";

export class Body {
  mesh: Mesh;
  constructor(
    radius: number,
    initPosition: Vector3,
    color: Color | null = null
  ) {
    this.mesh = new Mesh(
      new SphereGeometry(radius, 16, 8), // !TODO: number of segments later
      new MeshBasicMaterial({ color: color?.getHex(), wireframe: true })
    );
    [this.mesh.position.x, this.mesh.position.y, this.mesh.position.z] = [
      ...initPosition,
    ];
  }

  get position() {
    return this.mesh.position;
  }
}
