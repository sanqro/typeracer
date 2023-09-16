import { writable } from 'svelte/store';

const initialWordsCount = localStorage.getItem('wordsCount') || '10';
const initialDuration = localStorage.getItem('duration') || '15';
const initialTestType = localStorage.getItem('testType') || 'words';

export const wordsCount = writable(initialWordsCount);
export const duration = writable(initialDuration);
export const testType = writable(initialTestType);

export function updateWordsCount(newWordsCount: number | any) {
	localStorage.setItem('wordsCount', newWordsCount);
}

export function updateDuration(newDuration: number | any) {
	localStorage.setItem('duration', newDuration);
}

export function updateTestType(newTestType: string | any) {
	localStorage.setItem('testType', newTestType);
}
