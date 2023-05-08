class Platform {
    constructor(position, ctx, image) {
        this.position = position
        this.ctx = ctx
        this.image = image
        this.width = 300
        this.height = 75
    }

    draw() {
        // this.ctx.fillStyle = 'blue'
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // // console.log("plat draw was here")
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

export default Platform;