


class Texture {
    constructor(img) {
        this.loadImage(img);
    }

    loadImage(imgsrc=null) {
        let img = new Image();
        img.addEventListener("load", () => {
            // Once image has loaded get raw data
            let canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            this.image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        });
        img.setAttribute("src", imgsrc);
    }

    /**
     * Gets pixel at position in texture
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Vec3} Pixel color
     */
    get(uv) {
        let ind = (Math.floor(uv.x) + Math.floor(uv.y) * this.image.width) * 4;
        return new Vec3(
            this.image.data[ind+0],
            this.image.data[ind+1],
            this.image.data[ind+2],
        );
    }
}