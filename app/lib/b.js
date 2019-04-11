(function() {
  'use strict';
  const path = require('path');
  console.log('b.js', path.resolve(__filename));

  const div = document.querySelector('#output_b');
  div.innerText = `b.js: ${path.resolve(__filename)}`;
})();

