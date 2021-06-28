<script>
  import { onMount, setContext } from 'svelte';
  import { mapbox, key } from '../api/mapbox.js';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  import { LichenCollection } from '../db/LichenCollection';
  import Lichen from './Lichen.svelte';
  import MapMarker from './MapMarker.svelte';
  import { st_userlocation } from './lichenstore.js';


  $: lichens = useTracker(() => LichenCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  setContext(key, {
    getMap: () => map
  });

  let container;
  let map;
  let geolocate;

  export let mapstate;

  let lat = 0;
  let lon = 0;
  let startLocation = [4.311919781979336, 52.07442987672321]; //The Grey Space
  let userLocation;
  let markerLocation;

  let marker;

  //onMount allows to run javascript code after the HTML elements have been loaded
  onMount(() => {

    userLocation = $st_userlocation;
    
    map = new mapbox.Map({
      container,
      style: 'mapbox://styles/srverhage/ckp2uavy44km817qiwf4x56x3',
      center: userLocation,
      zoom: 15,
      //interactive: false,
      //dragPan: false
    });

    geolocate = new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showAccuracyCircle: false
    })

    //add the geolocate button
    map.addControl(geolocate);

    map.on('load', function() {
      geolocate.trigger(); //but turn it off again after?
    });

    // Set an event listener that fires when a geolocate event occurs.
    geolocate.on('geolocate', function(e) {
      lon = e.coords.longitude;
      lat = e.coords.latitude;
      userLocation = [lon, lat];
      st_userlocation.set(userLocation);
      //console.log(lat + " " + lon);
      if(marker) {
        marker.updateMarkerLocation(userLocation);
      }

    });


    return () => {
      var center = map.getCenter();
      st_userlocation.set(center);
      map.remove();

    };

  });


</script>


{#if mapstate === 0}
  <div bind:this={container} style="width: 100%; height: 100%;">
    {#if map}
      <!-- <slot></slot> -->
      {#each $lichens as lichen (lichen._id)}
        <MapMarker 
          number={lichen._id}
          coord={lichen.coordinates} 
          description={lichen.description} 
          loading={lichen.loading} 
          image={lichen.image} />
      {/each}
    {/if}

  </div>
{:else if mapstate === 1}
  <div bind:this={container} style="width: 100%; height: 100%;">
    {#if map}
      <!-- <slot></slot> -->
      {#if userLocation}
      <MapMarker 
        bind:this={marker}
        coord={userLocation} 
        drag={true} />
      {/if}
    {/if}

  </div>


{/if}


<style>
  .overlaybutton {
    width: 100%;
    position: fixed;
    bottom: 100px;
    left: 50px;
  }

  .stickright {
    position: absolute;
    right: 100px;
  }

</style>

