// 1. start up auth server
// 2. start client
// 3. npm start in the server folder to start up backend server


// to set up mongoose to the appropriate link, go to mongodb atlas, create account, set up free cluster, check challenge readme, need to whitelist my ip, check the readme in the challenge for this step

//on the front end i would need to create a fetch request http://localhost:5000

//http://localhost:5000?term=rap



//how do we bring the frontend in to communicate with the back end?
//if i wanna do all of this on the homepage everything would be to the '/' end point yes?
//i should be able to go back and purge out all the files from the create react app? and then re-do it with webpack yes? best way to do this? save the currently working file and then save a copy and do it with webpack?


//in the model file

//i also assume we have to start mongo up somehow...
//I've seen this model setup two different ways, which is better or is it preference?


//in the playlist controller file

//tbh do we even need a controller file? this will keep things cleaner in the router file but is it necessary?
//error bringing in spotify for some reason?
//can we fill the new collection we're storing with the response we're getting from the spotify database?
//if we can figure out just the adding the new song, that should be enough to figure out the rest of the controller functions
//how can we check the incoming request body? how exactly would we add this information to the collection / model?

//controller role is to: 
//playlist.js role is to: routers telling us what to do when we get a certain request to a specific endpoint 

//search bar for multiple things: to add a song, to update a song, to delete a song