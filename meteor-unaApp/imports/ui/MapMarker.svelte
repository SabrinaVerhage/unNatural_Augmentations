<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from '../api/mapbox.js';
	import { onMount, onDestroy } from 'svelte';

	import { st_coordinates } from './lichenstore.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let number;
	export let description;
	export let coord;
	export let image;
	export let loading;

	export let drag = false;
	let locUpdated = false;

	function goAugment() {
		//console.log(number);
		goLichenAugment(number);
	}

	var thehtml = "<button class='button' id='" + number + "'><p>Augmentation #" + number + "<p></button>"
	const popup = new mapbox.Popup({ className: 'mapbox-popup', offset: 25, closeButton: false })
		.setHTML(thehtml);

	var el = document.createElement('div');
	el.className = 'marker';
	if(!drag) {
		if(loading) {
			el.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR600GHDOVolffesp4-LywZUCMMk13W95EqA&usqp=CAUcTR600GHDOVolffesp4-LywZUCMMk13W95EqA&usqp=CAU)'
		} else {
			el.style.backgroundImage = 'url('+ image + ')';
		}
	
	} else {
		
		el.style.backgroundImage = 'url(http://pngimg.com/uploads/target/target_PNG38.png)'
		
	}
	el.style.width = '50px';
	el.style.height= '50px';
	el.style.backgroundSize= '100%';


	const marker = new mapbox.Marker(el)
		.setLngLat(coord)
		.addTo(map);

	if(!drag && !loading) {
		marker.setPopup(popup);

	} else if(drag) {
		//map.setZoom(17);
		marker.setDraggable(true);
	}

	function onDragEnd() {
		let markercoord = marker.getLngLat();
		//console.log('new coord' + markercoord);
		st_coordinates.set([markercoord.lng, markercoord.lat]);
	}

	marker.on('dragend', onDragEnd);
	popup.on('open', goAugment);

	onDestroy(() => {
		marker.remove();
	});

	export function updateMarkerLocation(newcoord) {
		if(!locUpdated) {
			marker.setLngLat(newcoord);
			// map.setZoom(17);
			map.flyTo({center: newcoord, zoom: 17});
			console.log('updating marker location');	
			st_coordinates.set(newcoord);
			locUpdated = true;
		}
	}


	
</script>

<style>
	.mapbox-popup {
		max-width: 200px;
	}


</style>
