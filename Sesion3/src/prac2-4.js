import * as THREE from 'three';
import WEBGL from 'three/examples/jsm/capabilities/WebGL.js';

if ( WEBGL.isWebGLAvailable() ) {
    // WebGL is available
    console.log('Soporta WebGL');
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const camera = new THREE.PerspectiveCamera ( 45, window.innerWidth / window.innerHeight, 1, 4000 );
    camera.position.set( 0, 0, 200 );
   
// luz
const light=  new THREE.PointLight( 0xffffff, 1,1000,0 );
light.position.set( 0, 0, 120 );
scene.add( light );
//Tierra
const mapUrl = "../textures/tierra.gif";   // The file used as texture
const textureLoader = new THREE.TextureLoader( );  // The object used to load textures
const map = textureLoader.load( mapUrl, ( loaded ) => { renderer.render( scene, camera ); } );
const material1 = new THREE.MeshPhongMaterial( { map: map } );
const geometryesfera = new THREE.SphereGeometry( 50, 50, 50 ); 
const sphere = new THREE.Mesh( geometryesfera, material1 ); 


//Atmósfera
const Nube = "../textures/Nube.png";   
const textureLoader1 = new THREE.TextureLoader( );  
const mapNube = textureLoader.load( Nube, ( loaded ) => { renderer.render( scene, camera ); } );
var atmosphereMaterial = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, map: mapNube, transparent: true } );
const geometrynube = new THREE.SphereGeometry( 51, 51, 51 ); 
const sphere1 = new THREE.Mesh( geometrynube, atmosphereMaterial ); 


// Creando el Objeto.
const object = new THREE.Object3D();
object.add( sphere );
object.add( sphere1 );
object.rotation.z=0.36; 
scene.add( object );
//Rotoacion de Objeto.


renderer.render( scene, camera );
    window.addEventListener( 'resize', ( ) => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix( );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.render( scene, camera );
    }, false );
}
