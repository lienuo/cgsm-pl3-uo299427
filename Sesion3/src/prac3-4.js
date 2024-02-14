import * as THREE from 'three';
import WEBGL from 'three/examples/jsm/capabilities/WebGL.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import Stats from 'three/examples/jsm/libs/stats.module';

if ( WEBGL.isWebGLAvailable() ) {
     //WebGL is available
    console.log('Soporta WebGL');
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const camera = new THREE.PerspectiveCamera ( 45, window.innerWidth / window.innerHeight, 1, 4000 );
    camera.position.set( 0, 0, 300 );
// luz
// const light=  new THREE.PointLight( 0xffffff, 8,500,0 );
// light.position.set( 0, 0, 200 );
// scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 10,500,0 );
directionalLight.position.set(0, 0.5, 100);
scene.add( directionalLight );

const helper = new THREE.GridHelper( 800, 40, 0x444444, 0x444444 );
helper.position.y = 0.1;



// //Cubo  
//     const geometry = new THREE.BoxGeometry( 100, 100, 100 );
//     const textureLoader = new THREE.TextureLoader( );  // The object used to load textures
//     const material = new THREE.MeshPhongMaterial(
//        {
//            map: textureLoader.load( "../textures/brick.jpg" ),
//            bumpMap: textureLoader.load( "../textures/brick-map.jpg" ),
//             bumpScale: 0.2

//        } );
     
//     const box = new THREE.Mesh( geometry, material );
//     box.rotation.set( Math.PI / 5, Math.PI / 5, 0 );
//     scene.add( box );
//     renderer.render( scene, camera );
//     const controlData = {
//     bumpScale: material.bumpScale
//     }
//     const stats = new Stats( );
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.top = '0px';
//     document.body.appendChild( stats.domElement );

//     const gui = new GUI( );
//     gui.add( controlData, 'bumpScale', -4, 4 ).step(0.1).name( 'bumpScale' );
//     const clock = new THREE.Clock();

//     animate();
//     function animate( ) {

//         const delta = clock.getDelta( ); // Elapsed time in seconds
//         const rotation = ( delta * Math.PI * 2 ) / 24;
//         box.rotation.y += rotation;
//         box.rotation.y += rotation * 0.95;
//         material.bumpScale = controlData.bumpScale;//
//         stats.update( );
//         // Render the scene
//         renderer.render( scene, camera );
    
//         // Request the browser to execute the animation-rendering loop
//         requestAnimationFrame( animate );
        
//     };
    window.addEventListener( 'resize', ( ) => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix( );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.render( scene, camera );
    }, false );

}