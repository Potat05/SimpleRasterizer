


class Vec3 {
    constructor(x=0, y=0, z=0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}


class Vec2 {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    area(v2, v3) {
        return Math.abs((this.x*(v2.y-v3.y) + v2.x*(v3.y-this.y)+ v3.x*(this.y-v2.y))/2.0);
    }
}
