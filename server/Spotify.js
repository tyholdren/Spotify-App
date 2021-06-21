var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '90b604f9725f4733927106dcfbba354b',
  clientSecret: 'd62df28c8b5747b68524f84b1e38a8eb',
  redirectUri: 'http://localhost:8888/callback'
});

module.exports = spotifyApi;
