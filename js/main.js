let scene, camera, renderer, object;
let cube, tetrahedron, sphere, octahedron;
let geometry;
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000);
    let canvas = document.querySelector('[data-geo="square"]');
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    // renderer.setSize(window.innerWidth * .25, window.innerHeight * .25);
    // document.querySelector('[data-render]').appendChild(renderer.domElement);
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);

    light.position.set(-1, 2, 4);
    scene.add(light);

    geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    scene.add(cube);
    camera.position.z = 5;
}
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
}

init();
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * .25, window.innerHeight * .25);
});