// import Example from './scripts/example';
import Player from './scripts/player';
import Platform from './scripts/platform';
import Scenery from './scripts/scenery';
import Trap from './scripts/trap';
import concreteImage from '../assests/concrete.png';
import drywallImage from '../assests/drywall.png';
import skylineImage from '../assests/cityskyline.png';
import toonblueeyesImage from '../assests/toonblueeyes.png';
import spikesImage from '../assests/spikes.png';
import { reset } from './scripts/reset';

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

    const player = new Player({
        x: 50,
        y: 200,
    }, canvas, ctx)

    function createImage (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return image;
    }

    let platforms = [
        new Platform({x: -285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
        new Platform({x: 0, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
        new Platform({x: 285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
        new Platform({x: 870, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
        new Platform({x: 1155, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
        new Platform({x: 1440, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),

        new Platform({x: 250, y: 300}, ctx, createImage(drywallImage), {width: 150, height: 45} )
    ]
    
    let scenery = [
        new Scenery({x: -200, y: 0}, ctx, createImage(skylineImage), {width: 1800, height: 502}),
        new Scenery({x: 750, y: 50}, ctx, createImage(toonblueeyesImage), {width: 150, height: 150}),
        
    ]

    let traps = [
        new Trap({x: 590, y: 450}, ctx, createImage(spikesImage), {width: 275, height: 50})
    ]

    let keys = {
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

    let scrollOffset = 0; 

    function reset() {
        platforms = [
            new Platform({x: -285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
            new Platform({x: 0, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
            new Platform({x: 285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
            new Platform({x: 870, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
            new Platform({x: 1155, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
            new Platform({x: 1440, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),

            new Platform({x: 250, y: 300}, ctx, createImage(drywallImage), {width: 150, height: 45} )
        ]
        
        scenery = [
            new Scenery({x: -200, y: 0}, ctx, createImage(skylineImage), {width: 1800, height: 502}),
            new Scenery({x: 750, y: 50}, ctx, createImage(toonblueeyesImage), {width: 150, height: 150}),
            
        ]

        traps = [
            new Trap({x: 585, y: 450}, ctx, createImage(spikesImage), {width: 275, height: 50})
        ]

        keys = {
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

        scrollOffset = 0; 
        }

    function gameUpdate() {
        scenery.forEach(scene => {
          scene.draw();
        })
        traps.forEach(trap => {
          trap.draw();
        })
        platforms.forEach(platform => {
          platform.draw();
        })
      }

    function collisionDetector(collider) {
        for (let i = 0; i < collider.length; i++) {
            const collideObj = collider[i];
            if (player.position.y + player.height <= collideObj.position.y 
                && player.position.y + player.height + player.velocity.y >= collideObj.position.y
                && player.position.x + player.width >= collideObj.position.x
                && player.position.x <= collideObj.position.x + collideObj.dimensions.width) {
                    return true;
            }
        }
        return false;
    }

    function animate() {
        window.requestAnimationFrame(animate)
            ctx.fillStyle = 'lime';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            gameUpdate();
            player.update();

            if (keys.ArrowRight.pressed && player.position.x < 400) {
                player.velocity.x = 5
            }
            else if (keys.ArrowLeft.pressed && player.position.x > 100) {
                player.velocity.x = -5
            }
            else {
                player.velocity.x = 0

                if (keys.ArrowRight.pressed) {
                    scrollOffset += 4
                    platforms.forEach(platform => {
                        platform.position.x -= 4
                    }) 
                    traps.forEach(trap => {
                        trap.position.x -=4
                    })
                    scenery.forEach(scene => {
                        scene.position.x -= 3
                    })}
                else if (keys.ArrowLeft.pressed) {
                    scrollOffset -= 4
                    platforms.forEach(platform => {
                        platform.position.x += 4
                    }) 
                    traps.forEach(trap => {
                        trap.position.x += 4
                    })
                    scenery.forEach(scene => {
                        scene.position.x +=3
                })}
            }

            console.log(scrollOffset);

            if (keys.ArrowUp.pressed) {
                player.jump()
            }

            // platforms.forEach(platform => {
            //     if (player.position.y + player.height <= platform.position.y 
            //         && player.position.y + player.height + player.velocity.y >= platform.position.y
            //         && player.position.x + player.width >= platform.position.x
            //         && player.position.x <= platform.position.x + platform.dimensions.width) {
            //                 player.velocity.y = 0 
            //                 player.isJumping = false
            // } }) 

            if (collisionDetector(platforms)) {
                player.velocity.y = 0 
                player.isJumping = false
            }

            if (collisionDetector(traps)) {
                player.isAlive = false
                player.playerDied(); 
                
                console.log('you lose');
                gameUpdate(); 
                player.update();
                reset();
            }

            // traps.forEach(trap => {
            //     if (player.position.y + player.height <= trap.position.y 
            //         && player.position.y + player.height + player.velocity.y >= trap.position.y
            //         && player.position.x + player.width >= trap.position.x
            //         && player.position.x <= trap.position.x + trap.dimensions.width) {
            //             player.isAlive = false
            //             player.playerDied();
            //             console.log('you lose');
            //             gameUpdate(); 
            //             player.update();
            // }})
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