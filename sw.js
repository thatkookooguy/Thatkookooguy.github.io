self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('achievibit').then(function(cache) {
    return cache.addAll([
      '/',
      '/index.html',
      '/index.html?homescreen=1',
      '/?homescreen=1',
      '/materialIcons.css',
      '/materialize.min.css',
      '/style.css',
      '/jquery.min.js',
      '/three.min.js',
      '/tween.min.js',
      '/Stats.js',
      '/dat.gui.min.js',
      '/leap.min.js',
      '/materialize.min.js',
      '/main.js',
      '/assets/86_trans.webp',
      '/assets/amdocs.webp',
      '/assets/google.webp',
      '/assets/redkix.webp',
      '/assets/leon01.webp',
      '/assets/leon02.webp',
      '/assets/leon03.webp',
      '/assets/leon04.webp',
      '/assets/leon05.webp',
      '/assets/neuman.webp',
      '/assets/pepsi_max.webp',
      '/assets/video_adi.webp',
      '/assets/video_brief_job.webp',
      '/assets/video_brief_psy.webp',
      '/assets/86_trans.png',
      '/assets/amdocs.jpg',
      '/assets/google.png',
      '/assets/redkix.png',
      '/assets/leon01.jpg',
      '/assets/leon02.jpg',
      '/assets/leon03.jpg',
      '/assets/leon04.jpg',
      '/assets/leon05.jpg',
      '/assets/neuman.png',
      '/assets/pepsi_max.jpg',
      '/assets/tel-aviv-university.svg',
      '/assets/video_adi.jpg',
      '/assets/video_ariel.webp',
      '/assets/video_brief_job.jpg',
      '/assets/video_brief_psy.jpg',
      '/assets/video_family.webp',
      '/assets/video_shlem.webp',
      '/assets/video_terr.webp',
      '/fonts/roboto/Roboto-Bold.ttf',
      '/fonts/roboto/Roboto-Bold.woff',
      '/fonts/roboto/Roboto-Bold.woff2',
      '/fonts/roboto/Roboto-Light.ttf',
      '/fonts/roboto/Roboto-Light.woff',
      '/fonts/roboto/Roboto-Light.woff2',
      '/fonts/roboto/Roboto-Medium.ttf',
      '/fonts/roboto/Roboto-Medium.woff',
      '/fonts/roboto/Roboto-Medium.woff2',
      '/fonts/roboto/Roboto-Regular.ttf',
      '/fonts/roboto/Roboto-Regular.woff',
      '/fonts/roboto/Roboto-Regular.woff2',
      '/fonts/roboto/Roboto-Thin.woff',
      '/fonts/roboto/Roboto-Thin.woff2',
      '/github-activity-0.1.5.min.css',
      '/octicons.min.css',
      '/mustache.min.js',
      '/github-activity-0.1.5.min.js',
      '/widget.js',
      '/bbplayer.js',
      '/bbplayer.css',
      '/assets/bars.svg',
      '/assets/vinyl.png',
      '/assets/vinyl.webp',
      '/fonts/octicons/octicons.eot',
      '/fonts/octicons/octicons.svg',
      '/fonts/octicons/octicons.ttf',
      '/fonts/octicons/octicons.woff',
      '/assets/aperco-battle.jpg',
      '/assets/aperco-battle.webp',
      '/assets/bilgo-rewind.jpg',
      '/assets/bilgo-rewind.webp',
      '/assets/carmel-funny.jpg',
      '/assets/carmel-funny.webp',
      '/assets/pancho-pancho.jpg',
      '/assets/pancho-pancho.webp',
      '/assets/toy-croc.jpg',
      '/assets/toy-croc.webp',
      '/assets/toy-roots.jpg',
      '/assets/toy-roots.webp'
    ]);
  })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      console.info('response for ' +
        event.request.url + ' was returned from cache!');
    }

    return response || fetch(event.request);
  }));
});
