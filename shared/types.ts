export interface MyVector3 {
  x: number;
  y: number;
  z: number;
}

export interface SpaceBody {
  position: MyVector3;
  velocity: MyVector3;
  name: string;
}
