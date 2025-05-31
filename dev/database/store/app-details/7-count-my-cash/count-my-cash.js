// count-my-cash-data.js
const countMyCashData = {
  id: "7",
  title: "Count My Cash",
  featureIconLg: "https://play-lh.googleusercontent.com/J2FGSoqpnfldbIhRD3zNLLrvrOD4zA8fQ5knaxko2UTFPnPfNhL1mrOHtN82iNBLfw=w480-h960-rw",
  featureIconSm: "https://play-lh.googleusercontent.com/J2FGSoqpnfldbIhRD3zNLLrvrOD4zA8fQ5knaxko2UTFPnPfNhL1mrOHtN82iNBLfw=w480-h960-rw",
  iconLg: "https://raw.githubusercontent.com/Dhiman-Paras/dhimanp-assets/main/dev/images/apps/count-my-cash/count-my-cash-icon.webp",
  version: "2.0.3",
  rating: 5,
  developer: "dhimanp",
  lastUpdate: "2025-05-31T05:30:00.000Z",
  publishedDate: "2022-03-31T18:30:00.000Z",
  whatsnew: "...", // shortened for brevity
  longDescription: "..." // shortened for brevity
};

// Respond to fetch requests
self.addEventListener('fetch', function (event) {
  if (event.request.url.endsWith('/count-my-cash-data.js')) {
    event.respondWith(new Response(JSON.stringify(countMyCashData), {
      headers: { 'Content-Type': 'application/json' }
    }));
  }
});
