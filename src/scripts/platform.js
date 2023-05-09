class Platform {
    constructor(position, ctx, image, dimensions) {
        this.position = position
        this.ctx = ctx
        this.image = image
        // this.width = 300
        // this.height = 75
        this.dimensions = dimensions
    }

    draw() {
        // this.ctx.fillStyle = 'blue'
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // // console.log("plat draw was here")
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }
}

export default Platform;