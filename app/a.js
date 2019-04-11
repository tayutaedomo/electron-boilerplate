(function() {
  'use strict';
  const path = require('path');
  console.log(path.resolve(__filename));

  const div = document.querySelector('#output_a');
  div.innerText = path.resolve(__filename);
})();

