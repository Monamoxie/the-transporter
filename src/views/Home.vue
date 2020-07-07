<template>
     <main>
			<div class="content">
				<div id="runway" style="border: 2px solid red"></div>

				<div class="content__title-wrap">
					<span class="content__pretitle">Indy Crossroads</span>
					<h2 class="content__title">Voltage Race</h2>
					<a class="content__link" href="#">Join us</a>
				</div>
			</div>
		</main>
</template> 
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' 
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
        // let script = document.createElement('script');
        // script.src = '../assets/js/three.js';
        // document.head.appendChild(script);

        // script = document.createElement('script');
        // script.src = '../assets/js/postprocessing.js';
        // document.head.appendChild(script);

        // script = document.createElement('script');
        // script.src = '../assets/js/InfiniteLights.js';
        // document.head.appendChild(script);

        // script = document.createElement('script');
        // script.src = '../assets/js/Distortions.js';
        // document.head.appendChild(script);

        
 
        (function() {

			const container = document.getElementById('runway');

			const options = {
				onSpeedUp: (ev) => {					
				},
				onSlowDown: (ev) => {
				},
				// mountainDistortion || LongRaceDistortion || xyDistortion || turbulentDistortion || turbulentDistortionStill || deepDistortionStill || deepDistortion
				distortion: LongRaceDistortion, 
				
				length: 400,
				roadWidth: 10,
				islandWidth: 5,
				lanesPerRoad: 3,

				fov: 90,
				fovSpeedUp: 150,
				speedUp: 2,
				carLightsFade: 0.4,

				totalSideLightSticks: 20,
				lightPairsPerRoadWay: 20,

				// Percentage of the lane's width
				shoulderLinesWidthPercentage: 0.05,
				brokenLinesWidthPercentage: 0.1,
				brokenLinesLengthPercentage: 0.5,

				/*** These ones have to be arrays of [min,max].  ***/
				lightStickWidth: [0.12, 0.5],
				lightStickHeight: [1.3, 1.7],

				movingAwaySpeed: [60, 80],
				movingCloserSpeed: [-120, -160],

				/****  Anything below can be either a number or an array of [min,max] ****/

				// Length of the lights. Best to be less than total length
				carLightsLength: [400 * 0.05, 400 * 0.15],
				// Radius of the tubes
				carLightsRadius: [0.05, 0.14],
				// Width is percentage of a lane. Numbers from 0 to 1
				carWidthPercentage: [0.3, 0.5],
				// How drunk the driver is.
				// carWidthPercentage's max + carShiftX's max -> Cannot go over 1. 
				// Or cars start going into other lanes 
				carShiftX: [-0.2, 0.2],
				// Self Explanatory
				carFloorSeparation: [0.05, 1],

				colors: {
					roadColor: 0x080808,
					islandColor: 0x0a0a0a,
					background: 0x000000,
					shoulderLines: 0x131318,
					brokenLines: 0x131318,
					/***  Only these colors can be an array ***/
					leftCars: [0xff102a, 0xEB383E, 0xff102a],
					rightCars: [0xdadafa, 0xBEBAE3, 0x8F97E4],
					sticks: 0xdadafa,
				}
			};

			const myApp = new App(container, options);
			myApp.loadAssets().then(myApp.init)
		})()
    }
}
</script>
