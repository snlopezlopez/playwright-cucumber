const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'test-results',
  reportPath: './',
  reportName: 'Playwright Automation Report',
  pageTitle: 'Playwright App',
  displayDuration: false,
  metadata: {
    browser: {
      name: 'chrome',
      version: '120',
    },
    device: 'PC',
    platform: {
      name: 'Windows',
      version: 'xx',
    },
  },
  customData: {
    title: 'Test Info',
    data: [
      { label: 'Project', value: 'Playwright App' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'Smoke-1' },
    ],
  },
});
