<script>

import { st_description, st_filename, st_filename_overview, st_coordinates, st_fileuuid, st_fileuuid_overview } from './lichenstore.js';
import { LichenCollection } from '../db/LichenCollection';
import UploadCareWidget from './UploadCareWidget.svelte';

let UIstate = 0;

let txtdescript;
let fileName;
let fileName_overview;
let fileUUID;
let fileUUID_overview;

function submitLichen() {
  //setting this all here in one place for oversight
  st_description.set(txtdescript);
  console.log('this is filename ' + fileName);
  st_filename.set(fileName + '-/preview/-/quality/smart/');
  st_filename_overview.set(fileName_overview);
  st_fileuuid.set(fileUUID + '-/preview/-/quality/smart/');
  st_fileuuid_overview.set(fileUUID_overview);

  updateDB();
  changeState(5);
}

function updateDB() {

  // console.log($st_coordinates);
  // console.log($st_description);
  // console.log($st_filename);
  
  let uniqueID = LichenCollection.insert({
    coordinates: $st_coordinates,
    description: $st_description,
    image: $st_filename,
    image_overview: $st_filename_overview,
    iuuid: $st_fileuuid,
    iuuid_overview: $st_fileuuid_overview,
    loading: true,
  });

  console.log('sumitted ' + uniqueID);
}



</script>


<div style='height: 3vmin'></div>
<h4>Augmentation #001</h4>

<p style='margin-top: 20px; margin-bottom: 20px;'>
  Please share where you found this lichen
</p>

<form class='lichen-form'>
  <label class='label'>Description:</label><br>
<!--   <input class='input'
    type='text'
    name='descriptiontry'
    placeholder='describe where you found the lichen so that other people can find it too'
  /> -->

  <textarea class='textinput' name="txtdescript" placeholder="Describe where you found the lichen so that other people can find it too" rows="5" bind:value={txtdescript} ></textarea>

  <p style='margin-top: 20px; margin-bottom: 20px;'>
    We will add pictures to help other people find the lichen!
  </p>

  <p style='margin-top: 20px; margin-bottom: 20px;'>
    Make a picture of the location of the lichen. Make sure the location is clearly visible. Do not use a flash. 
  </p>

  <label class='label'>Photograph Overview:</label><br>
  <UploadCareWidget bind:thefilename={fileName_overview} bind:thefileuuid={fileUUID_overview} />

  <p style='margin-top: 20px; margin-bottom: 20px;'>
    Now make a picture of the lichen itself. Make sure the lichen is clearly visible. Do not use a flash. 
  </p>

  <label class='label'>Photograph Lichen:</label><br>
  <UploadCareWidget bind:thefilename={fileName} bind:thefileuuid={fileUUID} />

  <p style='margin-top: 20px; margin-bottom: 20px;'>
    Hit 'Add Lichen' when you are finished.
  </p>

  <button class='button' on:click|preventDefault={() => {changeState(3)}}>Cancel</button>
  <button class='button floatright' on:click|preventDefault={() => {submitLichen()}}>Add Lichen</button>

</form>
<div style='height: 6vmin'></div>




<style>

.lichen-form {
  width: 100%;

}

.label {
  font-size: 2vw;
  color: black;
}

.textinput {
  width: 100%;
  padding:0.46em 0.9em;
  border:0.1em solid #000000;
  border-radius: 0.5em;
  background: transparent;
}

.fileinput {
  width: 100%;
  padding:0.46em 0.9em;
  border:0.1em solid #000000;
  border-radius: 0.5em;
  background: transparent;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
    label {
      font-size: 5vw;
    }
  }

</style>

