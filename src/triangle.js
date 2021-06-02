


class Triangle {
    constructor(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    containsPoint(v) {
        return (
            this.v1.pos.area(this.v2.pos, this.v3.pos) ==
            v.area(this.v2.pos, this.v3.pos) +
            this.v1.pos.area(v, this.v3.pos) +
            this.v1.pos.area(this.v2.pos, v)
        );
    }

    textureCoordinate(v) {
        let a = this.v1.pos.area(this.v2.pos, this.v3.pos);
        let a1 = v.area(this.v2.pos, this.v3.pos) / a;
        let a2 = this.v1.pos.area(v, this.v3.pos) / a;
        let a3 = this.v1.pos.area(this.v2.pos, v) / a;
        return new Vec2(
            this.v1.uv.x * a1 + this.v2.uv.x * a2 + this.v3.uv.x * a3,
            this.v1.uv.y * a1 + this.v2.uv.y * a2 + this.v3.uv.y * a3,
        );
    }

    ind(ind) {
        if(ind == 0) return this.v1;
        if(ind == 1) return this.v2;
        if(ind == 2) return this.v3;
        return null;
    }
}