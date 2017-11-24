Package.describe({
  name: 'std:accounts-semantic',
  version: '1.1.8',
  summary: 'Semantic UI – Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/studiointeract/accounts-semantic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('fourseven:scss@4.4.5');
  api.use('std:accounts-ui@1.1.20');

  api.addFiles([
    'styles.scss'
  ], 'client');

  api.mainModule('main.jsx');
});
