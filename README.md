# Sekhmet 3D
This app is the final part of the project I did for MSc Thesis in Cinema and Media Engineer.

## Overview
The goal of the whole project was to create lightweight 3D models and add them to an interactive context, such as a web app. The models are statues representing the Sekhmet goddess, and were 3D-scanned by the Turin's Museo Egizio. The project started with the creation of the 3D models via Retopology, and ended with the implementation of them in a web app. I worked on 17 models, but for this app I only used 3 of them. But it doesn't matter, the logic is still the same for all the models.

## How it works
Use the dropdown list to choose the model you want to display. After the model is loaded, you can rotate/pan/zoom the camera around it. You can switch to another model at any time. The two orange buttons allows, respectively, to rotate the model and to toggle some information about the model. Those information are displayed on bottom of the screen, and concern the name of the statue and the tris count.

## Technologies
To create the models, I used several tools such as Blender and SketchRetopo. The implementation    part of the project is mainly based on Three.js library, that allows to create web apps based on 3D contents. Some data are fetched from a JSON file, via XHR.

## Resources
I used many programs, tools and plugins to complete the entire work. However the most important are:
* Blender: https://www.blender.org/
* SketchRetopo: http://igl.ethz.ch/projects/sketch-retopo/
* Three.js: https://threejs.org/
* Three.js Blender Export: https://github.com/mrdoob/three.js/tree/dev/utils/exporters/blender

## License
(c) 2018 Giuseppe Garone. All rights reserved.