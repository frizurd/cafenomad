// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8000/',
  specs: ['spec.js', 'spec2.js', 'spec3.js', 'homeViewE2e.js'],
  baseUrl: 'http://localhost:8000/',
    // directConnect: true

};
