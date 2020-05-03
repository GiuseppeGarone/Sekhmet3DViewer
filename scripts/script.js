// DOM elements
var modelSelection = document.querySelector('#model-selection');
var animateBtn = document.querySelector('#animate-btn');
var toggleInfoPanel = document.querySelector('#info-panel-btn');
var infoPanel = document.querySelector('.info-panel-wrapper');
var statueName = document.querySelector('#statue-name');
var statueTris = document.querySelector('#statue-tris');

// Variables
var rotDeg = 0;
var currentModel = '';
var oldModel = '';
var statues = [];

// Load JSON file
var url = '../json/statues.json';
var request = new XMLHttpRequest();

request.open('GET', url);
request.responseType = 'text';
request.send();

request.onload = function () {
  if (request.status === 200) {
    statues = JSON.parse(request.response);

    // Dynamically create the dropdown list
    for (var i = 0; i < statues.length; i++) {
      var n = statues[i].name;
      var option = document.createElement('option');
      
      option.setAttribute('value', n);
      option.textContent = 'Sekhmet ' + n;
      modelSelection.appendChild(option);
    }
  } else {
    console.log('Network request for statues.json failed with response ' + request.status + ': ' + request.statusText)
  }
}

// Start/stop animation button
animateBtn.onclick = function() {
  if (rotDeg === 0) {
    rotDeg = 0.005;
  } else {
    rotDeg = 0;
  }
}

// Display/hide footer button
toggleInfoPanel.onclick = function() { 
  if (infoPanel.style.display === 'block') {
    infoPanel.style.display = 'none';
  } else {
    infoPanel.style.display = 'block';
  }
}

// Load the selected model
modelSelection.onchange = function() { 
  var n = modelSelection.value;
  var loader = new THREE.JSONLoader();
  var path = '../res/models/sekhmet-' + n + '.json';

  loader.load(path, createModel);

  function createModel(geometry, material) {
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0x222222,
      shininess: 25,
      map: new THREE.TextureLoader().load('../res/tex/sekhmet-' + n +'-color.jpg'),
      normalMap: new THREE.TextureLoader().load('../res/tex/sekhmet-' + n + '-normal.jpg'),
      normalScale: new THREE.Vector2(1, 1)
    });

    var model = new THREE.Mesh(geometry, material);
    model.position.set(0, -1, 0);
    replaceModel(model);
  }

  // Replace current model
  function replaceModel(model) {
    oldModel = currentModel;
    currentModel = model;

    scene.remove(oldModel);
    scene.add(model);  
  }

  updateInfo(n);
};

// Update model's information
function updateInfo(n) {
  statueName.textContent = 'Sekhmet ' + n;

  for (var i = 0; i < statues.length; i++) {
    if (statues[i].name === n) {
      statueTris.textContent = statues[i].tris;
    }
  }
}

// Create the scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var lights = [];
lights[0] = new THREE.AmbientLight(0x404040);
lights[1] = new THREE.DirectionalLight(0xd4f4ff, 1.0);
lights[2] = new THREE.DirectionalLight(0xe8debe, 0.75);
lights[3] = new THREE.DirectionalLight(0xffffff, 1.0);
lights[4] = new THREE.DirectionalLight(0xd4f4ff, 0.5);

lights[1].position.set(-100, 0, 0);
lights[2].position.set(100, 0, 100);
lights[3].position.set(100, 0, -100).normalize();
lights[4].position.set(0, 100, 0).normalize();

for (var i = 0; i < lights.length; i++) {
  scene.add(lights[i]);  
}

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xfff4cb);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup user controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableKeys = false;
controls.enableDamping = true;
controls.dampingFactor = 1.5;
controls.enableZoom = true;
controls.minDistance = 1;
controls.maxDistance = 5;
controls.update();

// Manage window resizing
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  if (currentModel != '') {
    currentModel.rotation.y += rotDeg;
  }  
  controls.update();
	renderer.render(scene, camera);
}
animate();