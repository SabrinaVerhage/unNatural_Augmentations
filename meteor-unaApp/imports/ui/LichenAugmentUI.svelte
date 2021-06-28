<script>
	import { onMount } from 'svelte';
 	import { useTracker } from 'meteor/rdb:svelte-meteor-data';
	import { LichenCollection } from '../db/LichenCollection';
	import { view_current } from './lichenstore.js';

	export let myID;
	export let myState = 0;

  	const thisLichen = LichenCollection.findOne({ _id: myID });


  	changeMyState = (newState) => {
		if(myState != newState) {
			myState = newState;
		}
	}

	goToStaticAugment = () => {
		let the_elid = event.srcElement.id;
		console.log(the_elid);
		let theart_ID;
		let insideGrey = 0;

		theart_ID = thisLichen.iuuid;

		if(typeof the_elid !== 'undefined') {
			insideGrey = the_elid;

			for(var i = 1; i < 22; i++) {
				if(the_elid == ('00' + i) || the_elid == ('0' + i)) {
					
					theart_ID = thisLichen.numbers[i-1];
					//console.log('yes this happened ' + the_elid);
					//console.log('and this is the art id ' + theart_ID);
				}
			}
			
		}

		location.href="/augmentation.html" + "?artID=" + theart_ID + "&grey=" + insideGrey;
	}

	onMount(() => {
		console.log(myID);
  		if(myID == "RW3sprHTkfWP8wSae" || myID == "gChQKGSfr768T8GyT"){
  			//this is The Grey Space in the Middle!
  			changeMyState(1);
  		}
  	});



</script>


{#if myState === 0} 

    <button class='button' on:click|preventDefault={() => {changeState(2)}}>
    return</button>

	<div style='height: 4vmin'></div>
	<h2>** title **</h2>
	<h5>Augmentation #{ myID }</h5>
	<div style='height: 3vmin'></div>
	<div class='textwidth'>
		<h5>GPS coordinates:</h5>
		<p>
		{thisLichen.coordinates}
		</p>
		<h5>This is where you will find this Lichen:</h5>
		<p>
		{thisLichen.description}
		</p>
		<h5>Pictures</h5>
		<p>Look for this place:</p>
	</div>

	<img src={thisLichen.image_overview} alt="Lichen Overview Picture">

	<div class='textwidth'>
		<p>This is what the lichen looks like:</p>
	</div>

	<img src={thisLichen.image} alt="Lichen Picture">

	<div style='height: 3vmin'></div>

	<div class='textwidth'>
		<h5>Identification :</h5>
		<p>
		{thisLichen.identification}
		</p>
	</div>

	<div style='height: 4vmin'></div>

	<div class='textwidth'>
		<!-- <h5>(un)natural augmentation</h5> -->
		<p><i>To augment this lichen: find the lichen, hit 'Augment Live' below and hold your camera up to the lichen!</i></p>
	</div>


	<div class='thebb'>
		<button class='button full' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT LIVE</button>
	</div>



{:else if myState === 1}

	<button class='button' on:click|preventDefault={() => changeState(2)}>
    return</button>

    <div style='height: 4vmin'></div>
    <h4>This is The Grey Space in the Middle</h4>
	<div style='height: 3vmin'></div>
    <p><i>The lichens in the exhibition space are numbered. Please select the number of the lichen you want to see augmented below.</i></p>
    <p><i>As the camera turns on, hold it up to the corresponding lichen until you see the augmentation.</i></p>
    <div style='height: 1vmin'></div>
    <div class='thebb'>
		<button id='001' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #001</button>
		<button id='002' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #002</button>
		<button id='003' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #003</button>
		<button id='004' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #004</button>
		<button id='005' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #005</button>
		<button id='006' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #006</button>
		<button id='007' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #007</button>
		<button id='008' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #008</button>
		<button id='009' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #009</button>
		<button id='010' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #010</button>
		<button id='011' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #011</button>
		<button id='012' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #012</button>
		<button id='013' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #013</button>
		<button id='014' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #014</button>
		<button id='015' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #015</button>
		<button id='016' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #016</button>
		<button id='017' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #017</button>
		<button id='018' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #018</button>
		<button id='019' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #019</button>
		<button id='020' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #020</button>
		<button id='021' class='button full bspace' on:click|preventDefault={() => goToStaticAugment()}>AUGMENT #021</button>
	</div>



{/if}

<style>
	h5 {
		margin-bottom: 1vmin;
		margin-top: 1vmin;
	}

	p {
		/*margin-top:  3vmin;*/
		margin-bottom: 3vmin;
	}

	img {
		width: 100%
	}

	.textwidth {
		width: 60vmin;
	}

	.thebb {
		width: 100%;
	}

	.full {
		width: 100%;
		font-size: 5vw;
	}

	.bspace {
		margin-top:  1.5vmin;
	}

	@media only screen and (max-width: 600px) {
		.textwidth {
	  		width: 100%;
		}
	}

	button {
	  position: relative;
	  z-index: 1;
	}


</style>


