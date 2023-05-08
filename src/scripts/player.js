const CONSTANTS = {
    gravity: 0.4,
}

class Player {
    
    constructor(position, canvas, ctx) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 50
        this.height = 50
        this.isJumping = false
        this.canvas = canvas
        this.ctx = ctx
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();

        // this.position.x += this.velocity.x
        if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= this.canvas.width) {
            this.position.x += this.velocity.x;
          }
        

        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < this.canvas.height)
            {this.velocity.y += CONSTANTS.gravity}
        else 
            {this.velocity.y = 0; this.isJumping = false}
    }

    jump() {
        if (!this.isJumping) {
            this.velocity.y = -10
            this.isJumping = true
        }
    }
}

export default Player;