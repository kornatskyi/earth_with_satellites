export interface MyVector3Type {
  x: number;
  y: number;
  z: number;
}

export interface SpaceBodyType {
  position: MyVector3Type;
  velocity: MyVector3Type;
  name: string;
}
