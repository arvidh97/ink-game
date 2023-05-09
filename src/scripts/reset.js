// import Player from './player';
// import Platform from './platform';
// import Scenery from './scenery';
// import Trap from './trap';
// import concreteImage from '../../assests/concrete.png';
// import drywallImage from '../../assests/drywall.png';
// import skylineImage from '../../assests/cityskyline.png';
// import toonblueeyesImage from '../../assests/toonblueeyes.png';
// import spikesImage from '../../assests/spikes.png';

// export const reset = function reset() {
//     const canvas = document.querySelector("#game-canvas")
//     const ctx = canvas.getContext('2d')
   
//     function createImage (imageSrc) {
//         const image = new Image();
//         image.src = imageSrc;
//         return image;
//     }


//     let platforms = [
//         new Platform({x: -285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
//         new Platform({x: 0, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
//         new Platform({x: 285, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
//         new Platform({x: 870, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
//         new Platform({x: 1155, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),
//         new Platform({x: 1440, y: 427}, ctx, createImage(concreteImage), {width: 300, height: 75}),

//         new Platform({x: 250, y: 300}, ctx, createImage(drywallImage), {width: 150, height: 45} )
//     ]
    
//     let scenery = [
//         new Scenery({x: -200, y: 0}, ctx, createImage(skylineImage), {width: 1800, height: 502}),
//         new Scenery({x: 750, y: 50}, ctx, createImage(toonblueeyesImage), {width: 150, height: 150}),
        
//     ]

//     let traps = [
//         new Trap({x: 585, y: 450}, ctx, createImage(spikesImage), {width: 270, height: 50})
//     ]

//     let keys = {
//         ArrowRight: {
//             pressed: false,
//         },
//         ArrowLeft: {
//             pressed: false,
//         },
//         ArrowUp: {
//             pressed: false,
//         }
//     }

//     let scrollOffset = 0; 
//     }