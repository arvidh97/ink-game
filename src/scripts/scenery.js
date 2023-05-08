class Scenery {
    constructor(position, ctx, image, dimensions) {
        this.position = position
        this.ctx = ctx
        this.image = image
        // this.width = 1500
        // this.height = 502
        this.dimensions = dimensions
    }

    draw() {
        // this.ctx.fillStyle = 'blue'
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // // console.log("plat draw was here")
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }
}

export default Scenery;