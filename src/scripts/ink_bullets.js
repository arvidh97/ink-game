class InkBullets {
    constructor(position, ctx, image) {
        this.position = position
        this.ctx = ctx 
        this.width = 50
        this.height = 50
        this.image = image
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);  
    }
}

export default InkBullets;