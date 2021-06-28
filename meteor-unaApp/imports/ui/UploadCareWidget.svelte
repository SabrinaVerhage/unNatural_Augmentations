<script>
import { onMount } from 'svelte';
import uploadcare from 'meteor/uploadcare:uploadcare-widget'


let widget;
let theinput;
export let thefilename = '';
export let thefileuuid = '';

onMount(() => {
	widget = new uploadcare.Widget(theinput);

	widget.onUploadComplete(info => {

	    thefilename = info.cdnUrl;
	    thefileuuid = info.uuid;
	    //console.log(info);
	});

});

</script>

<input bind:this={theinput} type="hidden" id="file-show" role="uploadcare-uploader" />