import { MyVector3Type, SpaceBodyType } from "../../../shared/types";

export class SpaceBody implements SpaceBodyType {
  position: MyVector3Type;
  velocity: MyVector3Type;
  name: string;

  constructor(position: MyVector3Type, velocity: MyVector3Type, name: string) {
    this.position = position;
    this.velocity = velocity;
    this.name = name;
  }
}
