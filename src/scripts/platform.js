class Platform {
    constructor(position, ctx, image, dimensions) {
        this.position = position
        this.ctx = ctx
        this.image = image
        this.dimensions = dimensions
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }
}

export default Platform;