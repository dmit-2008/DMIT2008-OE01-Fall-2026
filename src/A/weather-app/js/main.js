/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
// 🚨 This is code running in the browser.
// 🚨 Do not do this in real life.
// 🚨 It will leak your secrets to anyone who views your website! ☠️
// 🚨 Secrets should be used/processed on the SERVER only!!!
const {VITE_DEFAULT_CITY, VITE_API_KEY } = import.meta.env;

console.log('Default City:', VITE_DEFAULT_CITY);    // ✅ This is ok
console.log('Fake API Key:', VITE_API_KEY);         // ❌ NOT OK!


// ... we now return you to normal
import { registerEventListener } from './ui/city-selection';

const form = document.querySelector('form');
const outputContainer = document.querySelector('section');
registerEventListener({form, outputContainer, defaultLocation: VITE_DEFAULT_CITY});