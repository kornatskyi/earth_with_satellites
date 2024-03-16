import { MyVector3, SpaceBody } from "../../../shared/types";

export class Body implements SpaceBody {
  position: MyVector3;
  velocity: MyVector3;
  name: string;

  constructor(position: MyVector3, velocity: MyVector3, name: string) {
    this.position = position;
    this.velocity = velocity;
    this.name = name;
  }
}
