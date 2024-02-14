import * as THREE from 'three';
import WEBGL from 'three/examples/jsm/capabilities/WebGL.js';

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
const light=  new THREE.PointLight( 0xffffff, 8,500,0 );
light.position.set( 0, 0, 200 );
scene.add( light );
//Cubo  
    // const geometry = new THREE.BoxGeometry( 100, 100, 100 );
    // const textureLoader = new THREE.TextureLoader( );  // The object used to load textures
    // const material = new THREE.MeshPhongMaterial(
    //    {
    //        map: textureLoader.load( "../textures/brick.jpg" ),
    //        bumpMap: textureLoader.load( "../textures/brick-map.jpg" ),
    //         bumpScale: 0.2

    //    } );
     
    // const box = new THREE.Mesh( geometry, material );
    // box.rotation.set( Math.PI / 5, Math.PI / 5, 0 );
    // scene.add( box );
    // renderer.render( scene, camera );

   //Video
const video = document.getElementById( 'video' );
const image = document.createElement( 'canvas' );
image.width = 480;  // Video width
image.height = 204; // Video height
const imageContext = image.getContext( '2d' );
imageContext.fillStyle = '#000000';
imageContext.fillRect( 0, 0, image.width - 1, image.height - 1 );

//const geometry = new THREE.BoxGeometry( 100, 100, 100 );
const texture = new THREE.Texture( image );   
const material = new THREE.MeshBasicMaterial( { map: texture } );
const wall = new THREE.Mesh( new THREE.PlaneGeometry( image.width, image.height, 4, 4 ), material );    
scene.add( wall );
renderer.render( scene, camera );

const clock = new THREE.Clock();
    animate();
    function animate( ) {

        const delta = clock.getDelta( ); // Elapsed time in seconds
        const rotation = ( delta * Math.PI * 2 ) / 24;
        wall.rotation.y += rotation;
        wall.rotation.y += rotation * 0.95;
        if ( video.readyState === video.HAVE_ENOUGH_DATA ) {

            imageContext.drawImage( video, 0, 0 );
            if ( texture ) texture.needsUpdate = true;
        }
       
        // Render the scene
        renderer.render( scene, camera );
    
        // Request the browser to execute the animation-rendering loop
        requestAnimationFrame( animate );
       
        
    };
    window.addEventListener( 'resize', ( ) => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix( );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.render( scene, camera );
    }, false );

}