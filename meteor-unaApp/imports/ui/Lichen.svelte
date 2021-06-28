<script>
	import { LichenCollection } from '../db/LichenCollection';

	export let key;
	export let lichen;
	export let coordinates;
	export let description;
	export let image;
	export let image_overview;
	export let iuuid;
	export let iuuid_overview;
	export let identification;
	export let loading;

	export let numbers = []

 
	const deleteThisLichen = () => {
		LichenCollection.remove(lichen._id);
	};

</script>


