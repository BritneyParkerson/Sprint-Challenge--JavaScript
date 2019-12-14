// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CuboidMaker{
    constructor (attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    }
}
    volume = function () {
    return this.length * this.width * this.height
    }
    surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attributes) {
    super(attributes);
    this.side = attributes.side;
    }
    boxvolume() {
    return `cube volume formula`;
    }
    boxsurfaceArea() {
    return `cube surface area formula`;
    } 
    }
    const boxTest = new CubeMaker ({
        side: 3
    });
    console.log(boxTest.boxvolume());
console.log(boxTest.boxsurfaceArea());