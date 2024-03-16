import { MyVector3Type } from "../../../shared/types";
import { SpaceBody } from "./SpaceBody";

interface PlanetParams {
  position: MyVector3Type;
  velocity: MyVector3Type;
  name: string;
  radius: number;
  mass: number;
}
export class Planet extends SpaceBody {
  radius: number;
  mass: number;

  constructor(params: PlanetParams) {
    super(params.position, params.velocity, params.name);
    this.radius = params.radius;
    this.mass = params.mass;
  }
}
