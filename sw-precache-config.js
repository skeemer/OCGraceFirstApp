module.exports = {
  cacheId: 'ocg1app-v2',
  runtimeCaching: [
    {
      urlPattern: new RegExp('/bower_components/app-storage/app-indexeddb-mirror/common-worker-scope.js\\?.*'),
      handler: 'networkFirst'
    },
    {
      urlPattern: new RegExp('/images/app-icon-.*'),
      handler: 'cacheFirst'
    }
  ],
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js'
  ],
  navigateFallback: '/index.html'
};

function escape_slash(path) {
  return new RegExp(path);
}