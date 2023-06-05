import { DateTime } from './luxon.js';

const dateTimeNow = DateTime.now().toFormat('MMMM d yyyy, h:mm:ss a');

document.querySelector('[data-date-time-holder]').textContent = dateTimeNow;
