# Sekhmet 3D Viewer
This app is the project I did for my MSc Thesis in Cinema and Media Engineer. You can see a live demo here: https://giuseppegarone.github.io/sekhmet-3d-viewer/.

## Overview
The goal of the whole project was to create low-poly 3D models and use them in a real-time context. The models are statues representing the Sekhmet goddess, and were 3D-scanned by the Turin's Museo Egizio.

## How to use
Use the dropdown list to choose the model you want to display. Once the model is loaded, you can rotate and zoom the camera around it. You can switch to another model at any time. Two orange buttons allows to rotate the model and to toggle some information about the model.

![image1](res/example.jpg "How it works")

## Technologies
Blender is the main 3D DCC tool used for 3D models editing (retopology, uv-mapping, baking... ). The web app is based on Three.js library.

Useful links:
* Blender: https://www.blender.org/
* Three.js: https://threejs.org/
* SweetAlert: https://sweetalert.js.org/
