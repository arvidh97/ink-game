import inkImage from '../../assests/ink.png';

class Ink {
    constructor(position, ctx, dimensions) {
        this.position = position
        this.ctx = ctx
        this.image = new Image();
        this.image.src = inkImage
        this.dimensions = dimensions
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

}

export default Ink;