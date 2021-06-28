<script context="module">
	import Information, { changeInfoState } from './Information.svelte';
	import Map from './Map.svelte';


	let themapstate = 0;
	let theinfostate = 0;

	let selectedID;

	test = () => {
		console.log('button is pressed');
	}

	function changeAppState(newState) {
		changeState(newState);
	}

	confirmLocation = () => {
		console.log('confirming location');
		//change state to new window
	}

	export function changeMapState(newState) {
		if(themapstate != newState) {
			if(newState == 1) {
				{changeInfoState(1)}
			} else {
				{changeInfoState(0)}
			}
			themapstate = newState;
		}
	}

</script>

<Information bind:infostate={theinfostate} />

<div class='themap'>
	<Map bind:mapstate={themapstate} />

	<!--     <dl class='list'>
	  {#each $lichens as lichen (lichen._id)}
	    <p><Lichen key={lichen._id} lichen={lichen} /></p>
	  {/each}
	</dl> -->


</div>

{#if themapstate === 0}
	<div class='overlaybutton'>
		<button class='button' on:click|preventDefault={() => changeAppState(3)}><p>+ Add New Lichen</p></button>
	</div>
{:else if themapstate === 1}
	<div class='overlaybutton'>
		<button class='button' on:click|preventDefault={() => changeAppState(2)}><p>Cancel</p></button>
		<button class='button stickright' on:click|preventDefault={() => changeAppState(4)}><p>Confirm</p></button>

	</div>
{/if}

<style>
	.overlaybutton {
		width: 100%;
		position: fixed;
		bottom: 60px;
		left: 50px;
	}

	.stickright {
		position: absolute;
		right: 100px;
	}

	p {
		font-size: 2vmin;
	}

	@media only screen and (max-width: 600px) {
		p {
			font-size: 5vw;
		}
	}


	.themap {
		height: 100%;
		width: 100%;
		border:0.1em solid #000000;
		border-radius: 0.5em;
	}

</style>
