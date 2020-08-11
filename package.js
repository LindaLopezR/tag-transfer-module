Package.describe({
  name: 'igoandtag:tag-transfer',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('react-template-helper');
  api.use('blaze-html-templates@1.0.4');
  api.use('react-meteor-data');
  api.use('ecmascript');
  api.use('templating');
  api.mainModule('tag-transfer.js', 'client');
});

Npm.depends({
  'react' : '16.8.6',
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('igoandtag:tag-transfer');
  api.mainModule('tag-transfer-tests.js');
});
