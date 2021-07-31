let SCENE, CAMERA, RENDERER, CUBE, OBJECT;

function init() {
    SCENE = new THREE.Scene();
    CAMERA = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000);

    RENDERER = new THREE.WebGLRenderer({ antialias: true });

    RENDERER.setSize(window.innerWidth * .8, window.innerHeight * .8);
    document.querySelector('[data-render]').appendChild(RENDERER.domElement);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);

    light.position.set(-1, 2, 4);
    SCENE.add(light);

    const GEOMETRY = new THREE.BoxGeometry(1, 1, 1);
    const MATERIAL = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

    CUBE = new THREE.Mesh(GEOMETRY, MATERIAL);

    SCENE.add(CUBE);
    CAMERA.position.z = 5;
}
function animate() {
    requestAnimationFrame(animate);
    CUBE.rotation.x += 0.02;
    CUBE.rotation.y += 0.02;
    RENDERER.render(SCENE, CAMERA);
}

init();
animate();

window.addEventListener('resize', () => {
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    CAMERA.updateProjectionMatrix();
    RENDERER.setSize(window.innerWidth * .8, window.innerHeight * .8);
});