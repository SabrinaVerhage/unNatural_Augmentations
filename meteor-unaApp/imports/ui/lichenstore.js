import { writable } from 'svelte/store';

export let st_filename = writable('empty.jpg');
export let st_filename_overview = writable('empty.jpg');
export let st_fileuuid = writable('empty');
export let st_fileuuid_overview = writable('empty');
export let st_coordinates = writable([0, 0]);
export let st_loading = writable(true);
export let st_description = writable('empty');
export let st_identification = writable('empty');
export let st_userlocation = writable([4.311919781979336, 52.07442987672321]);