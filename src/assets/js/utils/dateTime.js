import DateTime from '../../../../node_modules/luxon/src/datetime.js';

const dateTimeNow = DateTime.now().toFormat('MMMM d yyyy, h:mm:ss a');

document.querySelector('[data-date-time-holder]').textContent = dateTimeNow;
