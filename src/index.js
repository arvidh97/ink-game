// import Example from './scripts/example';
import Player from './scripts/player';
import Platform from './scripts/platform';
import Scenery from './scripts/scenery';
import Trap from './scripts/trap';
import Ink from './scripts/ink';
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

    let platforms 
    let scenery
    let traps
    let inks

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

    const maxInkLevel = 100;
    let inkLevel = 0;
    let scrollOffset;

    function reset() {

        platforms = [
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

        inks = [
            new Ink({x: 275, y: 250}, ctx, {width: 30, height: 30}),
            new Ink({x: 350, y: 250}, ctx, {width: 30, height: 30})
        ]

        scrollOffset = 0; 
        }

    function gameUpdate() {
        scenery.forEach(scene => {
          scene.draw();
        })
        traps.forEach(trap => {
          trap.draw();
        })
        inks.forEach(ink => {
            ink.draw();
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
            else if ((keys.ArrowLeft.pressed && player.position.x > 100) 
                    || (keys.ArrowLeft.pressed && scrollOffset === 0 && player.position.x > 0)) {
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
                    inks.forEach(ink => {
                        ink.position.x -=4
                    })
                    scenery.forEach(scene => {
                        scene.position.x -= 3
                    })}
                else if (keys.ArrowLeft.pressed && scrollOffset > 0) {
                    scrollOffset -= 4
                    platforms.forEach(platform => {
                        platform.position.x += 4
                    }) 
                    traps.forEach(trap => {
                        trap.position.x += 4
                    })
                    inks.forEach(ink => {
                        ink.position.x +=4
                    })
                    scenery.forEach(scene => {
                        scene.position.x +=3
                })}
            }

            if (keys.ArrowUp.pressed) {
                player.jump()
            }

            if (collisionDetector(platforms)) {
                player.velocity.y = 0 
                player.isJumping = false
            }

            if (collisionDetector(traps)) {
                player.isAlive = false
                player.playerDied(); 
                console.log('you lose');
                reset();
            }

            for (let i = 0; i < inks.length; i++) {
                const ink = inks[i];
                if (player.position.x < ink.position.x + ink.dimensions.width 
                    && player.position.x + player.width > ink.position.x 
                    && player.position.y < ink.position.y + ink.dimensions.height
                    && player.position.y + player.height > ink.position.y) {
                  console.log("ink touch");
                  inks.splice(i, 1);
                  if (inkLevel < maxInkLevel) inkLevel += 10;
                }
              }
              const percentageRemaining = (inkLevel / maxInkLevel) * 100;
              const inkFull = document.querySelector('.ink-full');
              inkFull.style.width = `${percentageRemaining}%`;
        }

    reset();
    animate();

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