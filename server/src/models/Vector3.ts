import { MyVector3Type } from "../../../shared/types";

export class Vector3 implements MyVector3Type {
  x: number;
  y: number;
  z: number;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Add two vectors
  add(v: MyVector3Type) {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  // Subtract two vectors
  sub(v: MyVector3Type) {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  // Scale a vector by a scalar value
  scale(scalar: number) {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  // Calculate the dot product of two vectors
  dot(v: MyVector3Type) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  // Calculate the cross product of two vectors
  cross(v: MyVector3Type) {
    return new Vector3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  // Calculate the magnitude (length) of the vector
  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  // Normalize the vector (set its magnitude to 1)
  normalize() {
    const mag = this.magnitude();
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }
}
