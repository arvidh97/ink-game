// import InkBullets from "./ink_bullets"
// import splatOne from '../../assests/splat1.png';
// import splatTwo from '../../assests/splat2.png';

const CONSTANTS = {
    gravity: 0.4,
}

class Player {
    constructor(position, canvas, ctx, image) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 75
        this.height = 75
        this.isJumping = false
        this.isAlive = true
        this.canvas = canvas
        this.ctx = ctx
        this.inkMeter = 0
        this.image = image
        this.animationFrame = 0
        this.animationDelay = 0
        this.hitbox = {
            x: this.width - 30
        }
        this.facing = "right"
    }

    draw() {
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();

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
            this.velocity.y = -11
            this.isJumping = true
        }
    }

    playerDied() {
        if (!this.isAlive) {
            this.position.x = 50
            this.position.y = 200
            this.isAlive = true
        }
    }

    // shootInk() {
    //     if (this.facing === "right" && this.inkMeter >= 10) {
    //         const inkBullet = new InkBullets({x: this.position.x + 10, y: this.position.y},)
    //     }
    //     else if (this.facing === "left" && this.inkMeter >= 10) {
    //         const inkBullet = new InkBullets({x: this.position.x - 10, y: this.position.y})
    //     }
    // }
}

export default Player;