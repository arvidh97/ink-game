// import Example from './scripts/example';
import Player from './scripts/player';
import Platform from './scripts/platform';
import Scenery from './scripts/scenery';
import concreteImage from '../assests/concrete.png';
import skylineImage from '../assests/cityskyline.png';
import toonblueeyesImage from '../assests/toonblueeyes.png';

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
        x: 0,
        y: 0,
    }, canvas, ctx)

    function createImage (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return image;
    }

    const platforms = [
        new Platform({x: -285, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 0, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 285, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 570, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 855, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 1140, y: 427}, ctx, createImage(concreteImage)),
        new Platform({x: 1425, y: 427}, ctx, createImage(concreteImage))
    ]
    
    const scenery = [
        new Scenery({x: 0, y: 0}, ctx, createImage(skylineImage), {width: 1600, height: 502}),
        new Scenery({x: 750, y: 50}, ctx, createImage(toonblueeyesImage), {width: 150, height: 150})
    ]

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

    let scrollOffset = 0; 

    function animate() {
        window.requestAnimationFrame(animate)
            ctx.fillStyle = 'lime';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // scenery.draw();
            // toonBlueEyes.draw();
            scenery.forEach(scene => {
                scene.draw();
            })
            platforms.forEach(platform => {
                platform.draw(); 
            }) 
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
                scenery.forEach(scene => {
                    scene.position.x -= 3
                })}
                else if (keys.ArrowLeft.pressed) {
                    scrollOffset -= 4
                    platforms.forEach(platform => {
                        platform.position.x += 4
                    }) 
                scenery.forEach(scene => {
                    scene.position.x +=3
                })}
            }

            console.log(scrollOffset)

            if (keys.ArrowUp.pressed) {
                player.jump()
            }

            platforms.forEach(platform => {
                if (player.position.y + player.height <= platform.position.y 
                    && player.position.y + player.height + player.velocity.y >= platform.position.y
                    && player.position.x + player.width >= platform.position.x
                    && player.position.x <= platform.position.x + platform.width) {
                            player.velocity.y = 0 
                            player.isJumping = false
            } }) 
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