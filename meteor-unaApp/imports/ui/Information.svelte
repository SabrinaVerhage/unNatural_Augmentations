<script context="module">
	export let infostate = 0;

	export function changeInfoState(newState) {
		if(infostate != newState) {
			infostate = newState;
		}
	}

</script>

<div class='info-panel'>
	<div class='inside-info'>

		{#if infostate == 0}
			<p>
			  These are the lichens near you. White markers show augmentations in progress, other markers you can explore by clicking on them.
			</p>
			<button class='button floatright' on:click|preventDefault={() => {changeState(1)}}><p>more info</p></button>
		{:else if infostate === 1}
			<p>
			  Drag the cross to the location of your lichen - confirm the location with the 'confirm' button. Just pinch to zoom in or out.
			</p>
		{/if}
	</div>

</div>

<style>

	.info-panel {
		position: fixed;
		padding: 20px 20px 0px 20px;
		width: 100%;
		left: 0px;
		top: 0px;
		height: 150px;
		background: white;

		z-index: 10;
	}

	.inside-info {
		/*position: inline;*/
		display:  block;
		height: 100%;
		/*width: 100%;*/
		padding: 20px;


		border:0.1em solid #000000;
		border-radius: 0.5em;
	}

</style>


