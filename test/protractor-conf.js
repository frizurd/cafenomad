// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'spec2.js', 'spec3.js'],
  baseUrl: 'http://localhost:8000/'
};
