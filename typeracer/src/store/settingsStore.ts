import { writable } from 'svelte/store';

const initialWordsCount = localStorage.getItem('wordsCount') || '10';
const initialDuration = localStorage.getItem('duration') || '15';
const initialTestType = localStorage.getItem('testType') || 'words';
const initialShowRemaining = localStorage.getItem('showRemaining') || 'true';
const intialShowElapsedTime = localStorage.getItem('showElapsedTime') || 'false';
const initialShowErrors = localStorage.getItem('showErros') || 'false';
const initalShowAccuracy = localStorage.getItem('showAccuracy') || 'false';
const initialShowWpm = localStorage.getItem('showWpm') || 'false';

export const wordsCount = writable(initialWordsCount);
export const duration = writable(initialDuration);
export const testType = writable(initialTestType);
export const showRemaining = writable(initialShowRemaining);
export const showElapsedTime = writable(intialShowElapsedTime);
export const showErrors = writable(initialShowErrors);
export const showAccuracy = writable(initalShowAccuracy);
export const showWpm = writable(initialShowWpm);

export function updateWordsCount(newWordsCount: number | any) {
	localStorage.setItem('wordsCount', newWordsCount);
}

export function updateDuration(newDuration: number | any) {
	localStorage.setItem('duration', newDuration);
}

export function updateTestType(newTestType: string | any) {
	localStorage.setItem('testType', newTestType);
}

export function updateShowRemaining(showRemaining: string | any) {
	localStorage.setItem('showRemaining', showRemaining);
}

export function updateShowElapsedTime(showElapsedTime: string | any) {
	localStorage.setItem('showElapsedTime', showElapsedTime);
}

export function updateShowErrors(showErrors: string | any) {
	localStorage.setItem('showErrors', showErrors);
}

export function updateShowAccuracy(showAccuracy: string | any) {
	localStorage.setItem('showAccuracy', showAccuracy);
}

export function updateShowWpm(showWpm: string | any) {
	localStorage.setItem('showWpm', showWpm);
}
