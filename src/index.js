// import Example from './scripts/example';
import Player from './scripts/player';

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hello world')
    
    // const main = document.getElementById('main');
    // new Example(main);
    const canvas = document.querySelector("#game-canvas")
    const ctx = canvas.getContext('2d')

    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight
    canvas.width = 950
    canvas.height = 502

    // const CONSTANTS = {
    //     gravity: 0.4,
    // }

    // class Player {
    //     constructor(position) {
    //         this.position = position
    //         this.velocity = {
    //             x: 0,
    //             y: 1
    //         }
    //         this.width = 50
    //         this.height = 50
    //         this.isJumping = false
    //     }
    
    //     draw() {
    //         ctx.fillStyle = 'red'
    //         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    //     }

    //     update() {
    //         this.draw();

    //         // this.position.x += this.velocity.x
    //         if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= canvas.width) {
    //             this.position.x += this.velocity.x;
    //           }
            

    //         this.position.y += this.velocity.y
    //         if (this.position.y + this.height + this.velocity.y < canvas.height)
    //             {this.velocity.y += CONSTANTS.gravity}
    //         else 
    //             {this.velocity.y = 0; this.isJumping = false}
    //     }

    //     jump() {
    //         if (!this.isJumping) {
    //             this.velocity.y = -10
    //             this.isJumping = true
    //         }
    //     }
    // }

    const player = new Player({
        x: 0,
        y: 0,
    }, canvas, ctx)


    // class Platform {
    //     constructor() {

    //     }
    // }

    const keys = {
        ArrowRight: {
            pressed: false,
        },
        ArrowLeft: {
            pressed: false,
        },
        ArrowUp: {
            pressed: false,
        }
    }

    function animate() {
        window.requestAnimationFrame(animate)
            ctx.fillStyle = 'lime';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            player.update();  
            
            player.velocity.x = 0
            if (keys.ArrowRight.pressed) {
                player.velocity.x = 3
            }
            else if (keys.ArrowLeft.pressed) {
                player.velocity.x = -3
            }

            if (keys.ArrowUp.pressed) {
                player.jump()
            }
    }

    animate()

    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = true
                break;
        }
    })

    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = false
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = false
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = false
                break;
        }
    })
    
})