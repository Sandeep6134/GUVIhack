/* you need to install spotify-web-api-node npm package before you can execute the following node js file.
to do changes to your spotify account replace userId with your following userId and you can copy the track or playlist link to do the operation on the given functions
[my user id:adbigkliqq0zdccc7vtim6wsp] which i have used everywhere i have also added my client id and client_Secret id*/


var axios = require('axios'); 
var spotify = require('spotify-web-api-node');

var spotifyApi = new spotify();

var client_id = '372c803cbb164510b47decdfd13e460c';
var client_secret = 'a10b8d1d3c1649d6846160ab8036a482'; 

const headers ={
  headers: {
    Accept: 'application/json'
  },
  auth: {
    username: client_id,
    password: client_secret,
  },
}

axios.post(
  'https://accounts.spotify.com/api/token',
  'grant_type=client_credentials',
  headers
).then(res =>{
  console.log(res.data.access_token);
  addplaylist(res.data.access_token);
  removeplaylist(res.data.access_token);
  reorder(res.data.access_token);
  followP();
  unfollowP()
  spotifyApi.setAccessToken(res.data.access_token);
  
  var userId = 'adbigkliqq0zdccc7vtim6wsp'
  spotifyApi.getUserPlaylists(userId)
  .then(function(data) {
    gett(data.body.items);
  },function(err) {
    console.log('Something went wrong!', err);
  });

  
})

function gett(dat){
  dat.forEach(function (playlist) {
    console.log(playlist.name);
    console.log(playlist.tracks);
  });
}

function addplaylist(acctoken)
{
spotifyApi.addTracksToPlaylist('adbigkliqq0zdccc7vtim6wsp', acctoken, ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
  {
    position : 5
  })
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

}

function removeplaylist(acctoken){
spotifyApi.removeTracksFromPlaylistByPosition('adbigkliqq0zdccc7vtim6wsp', acctoken, [0, 2, 130], "2qO3jZJY6TtPCW3v6QoD3Q")
  .then(function(data) {
    console.log('Tracks removed from playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

function reorder(acctoken)
{
  var number_of_songs_to_reorder = 2;
  var options = { "range_length" : number_of_songs_to_reorder};
  spotifyApi.reorderTracksInPlaylist('adbigkliqq0zdccc7vtim6wsp', acctoken, 0, 10, options, '2qO3jZJY6TtPCW3v6QoD3Q')
  .then(function(data) {
    console.log('Tracks reordered in playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

function followP(){
  spotifyApi.followPlaylist('adbigkliqq0zdccc7vtim6wsp', '5ieJqeLJjjI8iJWaxeBLuK',
  {
  }).then(function(data) {
     console.log('Playlist successfully followed');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}
function unfollowP(){
  spotifyApi.unfollowPlaylist('adbigkliqq0zdccc7vtim6wsp', '5ieJqeLJjjI8iJWaxeBLuK')
  .then(function(data) {
     console.log('Playlist successfully unfollowed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}





