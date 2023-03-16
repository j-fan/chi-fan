import { base } from '$app/paths';
import { writable } from 'svelte/store';

export const soundSrc = writable(`${base}/sound/sugar-cane.mp3`);
