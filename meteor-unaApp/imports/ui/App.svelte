<script>
  import { onMount } from 'svelte';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  import { slide, fade, fly } from 'svelte/transition';
  import { LichenCollection } from '../db/LichenCollection';
  import Lichen from './Lichen.svelte';
  import Landing from './Landing.svelte'
  import Introduction, { changeIntroState } from './Introduction.svelte'
  import MapUI, { changeMapState } from './MapUI.svelte'
  import NewLichenUI from './NewLichenUI.svelte'
  import LichenAugmentUI from './LichenAugmentUI.svelte'

  $: lichens = useTracker(() => LichenCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  let state = 0;
  let curLichenID;

  test = () => {
    $lichens.forEach(function(lichen) {
      console.log(lichen);
    });
    state=0;
  }

  changeState = (newState) => {
    console.log('change state to ' + newState);
    if(newState != state) {
      //state 0 = landing
      //state 1 = introduction
      //state 2 = mapUI
      //state 3 = add new lichen
      switch(newState) {
        case 3:
          {changeMapState(1)}
          break;
        case 5:
          {changeIntroState(1)}
          break;
        default:
          {changeMapState(0)}
          {changeIntroState(0)}
          break;
      }

      state = newState;
    }

  }

  goLichenAugment = (lichenID) => {
    //console.log(lichenID);
    curLichenID = lichenID;
    changeState(6);
  }

  onMount(() => {

    //setTimeout(function(){
        const urlParams = new URLSearchParams(window.location.search);
        let setState;
        
        const state_present = urlParams.has('state');
        if(state_present) {
          setState = urlParams.get('state');
          changeState(parseInt(setState));
        }
        console.log('setting state ' + state);

    //},3000);

    

  });


  


</script>

{#if state === 0}

<div class='container'>
  <div class='landing'>
    <Landing />

    <button class='button' on:click|preventDefault={() => {changeState(1)}}><p>Get Started</p></button>
  </div>
</div>

{:else if state === 1}

<div class='container'>
  <div transition:slide class='introduction'>
    <Introduction />

    <button class='button floatright' on:click|preventDefault={() => {changeState(2)}}><p>
    continue</p></button>
  </div>
</div>

{:else if state === 2}

<div class='container'>
  <MapUI />
</div>

{:else if state === 3}

<!-- new lichen map + UI -->
<div class='container'>
  <MapUI />
</div>

{:else if state === 4}

<!-- new lichen UI -->
<div class='container'>
  <div in:slide out:fade class='newLichen'>
    <NewLichenUI />

  </div>
</div>

{:else if state === 5}

<!-- thank you & explanations -->
<div class='container'>
  <div transition:fade class='introduction'>
    <Introduction />

    <button class='button floatright' on:click|preventDefault={() => {changeState(2)}}><p>
    continue</p></button>
  </div>
</div>

{:else if state === 6}

<!-- Lichen Augment UI -->
<div class='container'>
  <div in:fly="{{ y: 400, duration: 500 }}" out:fly="{{ y: 400, duration: 500}}" class='newLichen'>

    <LichenAugmentUI myID={curLichenID} />
    
  </div>
</div>

{/if}


<style>

  .landing {
    height: 100%;
    width: 100%;
    padding: 20px;

    border:0.1em solid #000000;
    border-radius: 0.5em;
  }

  .introduction {
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: auto;

    border:0.1em solid #000000;
    border-radius: 0.5em;
  }

  .newLichen {
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: auto;

    border:0.1em solid #000000;
    border-radius: 0.5em;
  }


</style>


