// /**
//  * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
//  */

// //==============================================================================
// // Welcome to scripting in Spark AR Studio! Helpful links:
// //
// // Scripting Basics - https://fb.me/spark-scripting-basics
// // Reactive Programming - https://fb.me/spark-reactive-programming
// // Scripting Object Reference - https://fb.me/spark-scripting-reference
// // Changelogs - https://fb.me/spark-changelog
// //==============================================================================

// // How to load in modules
// const Scene = require('Scene');
// // const Reactive = require('Reactive');
// const Networking = require('Networking');
// // Use export keyword to make a symbol available in scripting debug console
// export const Diagnostics = require('Diagnostics');
// const Materials = require('Materials');
// const Reactive = require('Reactive');
// const Shaders = require('Shaders');
// const gradient = Shaders.gradient({"type" : Shaders.GradientType.HORIZONTAL});
// const color1 = Reactive.pack4(1,0.57,0,1);
// const color2 = Reactive.pack4(1,0.25,1,1);
// // Create the first mix
// const mix1 = Reactive.mix(color1,color2,gradient);
// const material = Materials.get('material0');
// const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;
// // material.setTexture(mix1, {textureSlotName: textureSlot});
// // material.setColor(mix1);
// // material.setColor = color1;
// const light = Scene.root.find('ambientLight0');
// // light.setColor = color1;


// const Locale = require('Locale');

// // Store the unedited locale string (made up of the language_territory)
// const languageAndTerritory = Locale.fromDevice;

// // Log the locale string to the Console
// Diagnostics.log('My location and territory are ' + languageAndTerritory);

// // Create an array by splitting the locale string, this array will have two
// // values, the language [0] and the territory [1]
// const localeAsArray = languageAndTerritory.split('_');

// // Store the first element in the array (the language)
// const language = localeAsArray[0];

// function renderText(txt){

// }
// // Use a switch statement to say hello in the Console in the correct language
// switch (language) {
//   // English
//   case 'en':
//     Diagnostics.log('Hello');
//     break;
//   // Spanish
//   case 'es':
//     Diagnostics.log('Hola');
//     break;
//   // French
//   case 'fr':
//     Diagnostics.log('Bonjour');
//     break;
//   // Other
//   default:
//     Diagnostics.log('Device language is neither English, Spanish nor French');

//     break;
// }