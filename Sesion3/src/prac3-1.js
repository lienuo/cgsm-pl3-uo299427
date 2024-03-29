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
    const geometry = new THREE.BoxGeometry( 100, 100, 100 );
    const textureLoader = new THREE.TextureLoader( );  // The object used to load textures
    const material = new THREE.MeshPhongMaterial(
       {
           map: textureLoader.load( "../textures/brick.jpg" ),
           bumpMap: textureLoader.load( "../textures/brick-map.jpg" ),
            bumpScale: 0.2

       } );
     
    const box = new THREE.Mesh( geometry, material );
    box.rotation.set( Math.PI / 5, Math.PI / 5, 0 );
    scene.add( box );
    renderer.render( scene, camera );
    
    
    const clock = new THREE.Clock();

    animate();
    function animate( ) {

        const delta = clock.getDelta( ); // Elapsed time in seconds
        const rotation = ( delta * Math.PI * 2 ) / 24;
        box.rotation.y += rotation;
        box.rotation.y += rotation * 0.95;
       
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