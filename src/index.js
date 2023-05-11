// import Example from './scripts/example';
import Player from './scripts/player';
import Platform from './scripts/platform';
import Scenery from './scripts/scenery';
import Trap from './scripts/trap';
import Ink from './scripts/ink';
import InkBullets from "./scripts/ink_bullets"
import splatOne from '../assests/splat1.png';
import splatTwo from '../assests/splat2.png';
import ghostRight1 from '../assests/ghost-right1.png';
import ghostRight2 from '../assests/ghost-right2.png';
import ghostLeft1 from '../assests/ghost-left1.png';
import ghostLeft2 from '../assests/ghost-left2.png';
import ghostJump from '../assests/ghost-jump.png';
import concreteImage from '../assests/concrete.png';
import drywallImage from '../assests/drywall.png';
import skylineImage from '../assests/cityskyline.png';
import toonblueeyesImage from '../assests/toonblueeyes.png';
import spikesImage from '../assests/spikes.png';
import clintEast from '../assests/audio/clint_east.mp3';

const ANIMATE_DELAY = 15

document.addEventListener('DOMContentLoaded', () => {
    // console.log('hello world')
    
    // const main = document.getElementById('main');
    // new Example(main);
    const canvas = document.querySelector("#game-canvas")
    const ctx = canvas.getContext('2d')
    canvas.width = 950
    canvas.height = 502

    const hiddenCanvas = document.querySelector("#hidden-canvas")
    const hiddenCtx = hiddenCanvas.getContext('2d')
    hiddenCanvas.width = 950
    hiddenCanvas.height = 502

    const startGameButton = document.getElementById('start-game')
    const gameMusic = new Audio(clintEast)
    gameMusic.autoplay = false
    startGameButton.addEventListener('click', () => {
          gameMusic.play();
    })
  
    const standing_right = [ghostRight1, ghostRight2]
    const standing_left = [ghostLeft1, ghostLeft2]

    function createImage (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return image;
    }   

    const player = new Player({
        x: 50,
        y: 200,
    }, canvas, ctx, createImage(ghostRight1))

    // function shootInk() {
    //     if (player.facing === "right" && player.inkMeter >= 10) {
    //         const inkBullet = new InkBullets({x: player.position.x + 10, y: player.position.y}, hiddenCtx, createImage(splatOne))
    //         inkBullet.draw();
    //     }
    //     else if (player.facing === "left" && player.inkMeter >= 10) {
    //         const inkBullet = new InkBullets({x: player.position.x - 10, y: player.position.y}, hiddenCtx, createImage(splatTwo))
    //         inkBullet.draw();
    //     }
    // }

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
        },
        Space: {
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
            
            new Platform({x: 650, y: 375}, hiddenCtx, createImage(drywallImage), {width: 150, height: 45}),

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
                && player.position.x + player.hitbox.x >= collideObj.position.x
                && player.position.x <= collideObj.position.x + collideObj.dimensions.width
                && collideObj.ctx === ctx) {
                    return true;
            }
        }
        return false;
    }

   

    function animate() {
        window.requestAnimationFrame(animate)
            ctx.fillStyle = 'lime';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // hiddenCtx.fillStyle = 'transparent'
            // hiddenCtx.fillRect(0, 0, hiddenCanvas.width, hiddenCanvas.height)
            hiddenCtx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height)

            gameUpdate();
            player.update();

            if (keys.Space.pressed) {
                if (player.facing === "right" && player.inkMeter >= 10) {
                    const inkBullet = new InkBullets({ x: player.position.x + 95, y: player.position.y + player.height / 3 }, hiddenCtx, createImage(splatOne));
                    inkBullet.draw();
                    setTimeout(() => { keys.Space.pressed = false; }, 1500);
                  } else if (player.facing === "left" && player.inkMeter >= 10) {
                    const inkBullet = new InkBullets({ x: player.position.x - 95, y: player.position.y + player.height / 3}, hiddenCtx, createImage(splatTwo));
                    inkBullet.draw();
                    setTimeout(() => { keys.Space.pressed = false; }, 1500);
                  } else {
                    keys.Space.pressed = false;
                  }
            }

            if (player.facing === "right" && !player.isJumping) {
                player.animationDelay++;
                if (player.animationDelay >= ANIMATE_DELAY) {
                    player.animationDelay = 0;
                    player.animationFrame = (player.animationFrame + 1) % standing_right.length;
                    player.image.src = standing_right[player.animationFrame];
                }
            }
            else if (player.facing === "left" && !player.isJumping) {
                player.animationDelay++;
                if (player.animationDelay >= ANIMATE_DELAY) {
                    player.animationDelay = 0;
                    player.animationFrame = (player.animationFrame + 1) % standing_left.length;
                    player.image.src = standing_left[player.animationFrame];
                }
            }
            if (player.isJumping) {
                player.image.src = ghostJump
            }

            if (keys.ArrowRight.pressed && player.position.x < 400) {
                player.velocity.x = 6
            }
            else if ((keys.ArrowLeft.pressed && player.position.x > 100) 
                    || (keys.ArrowLeft.pressed && scrollOffset === 0)) {
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
                        trap.position.x -= 4
                    })
                    inks.forEach(ink => {
                        ink.position.x -= 4
                    })
                    scenery.forEach(scene => {
                        scene.position.x -= 3
                    })}
                else if (keys.ArrowLeft.pressed && scrollOffset >= 0) {
                    scrollOffset -= 4
                    platforms.forEach(platform => {
                        platform.position.x += 4
                    }) 
                    traps.forEach(trap => {
                        trap.position.x += 4
                    })
                    inks.forEach(ink => {
                        ink.position.x += 4
                    })
                    scenery.forEach(scene => {
                        scene.position.x += 3
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
                inkLevel = 0
            }

            for (let i = 0; i < inks.length; i++) {
                const ink = inks[i];
                if (player.position.x < ink.position.x + ink.dimensions.width 
                    && player.position.x + player.hitbox.x > ink.position.x 
                    && player.position.y < ink.position.y + ink.dimensions.height
                    && player.position.y + player.height > ink.position.y) {
                  inks.splice(i, 1);
                  if (inkLevel < maxInkLevel) {
                    inkLevel += 10;
                    player.inkMeter += 10
                  }
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
                player.facing = "right"
                player.image.src = standing_right[0]
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                player.facing = "left"
                player.image.src = standing_left[0]
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = true
                break;
            case ' ':
                keys.Space.pressed = true;
                // setTimeout(() => {
                //     keys.Space.pressed = false;
                // }, 2000); // 2 seconds delay
                // console.log("space")
                // break;
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
            // case ' ':
            //     keys.Space.pressed = false
            //     break;
        }
    })
    
})