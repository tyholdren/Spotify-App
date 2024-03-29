# Genre Generator

## Overview

Spotify does an excellent job at recommending music based on a user's liked tracks, but oftentimes users favor one or two genres. What if you could see your top artists, genres, and get a breakdown detailing the percentage of each genre you listen to? Now you can! Log in with Spotify, get your stats, and create a playlist of genres you typically don't listen to. <!-- See a quick demo here: [Spotify Application Demo](https://youtu.be/Gx3xeWWrS24) -->

## Who is this application for?

Anyone who wants to broaden their musical scope by discovering new music they typically wouldn't.

## How do I get started?

You will need to create two .env files: one in the auth-server folder and another one in the server folder.

- The .env file in the auth-server folder will require the following fields:

  - client_id (this will be the Spotify API client id)

  - client_secret (this will be the Spotify API client secret)

- The .env file in the server folder will require the following fields:

  - client_id (this will be the Spotify API client id)

  - client_secret (this will be the Spotify API client secret)

  - mongo_link (this will be your MongoDB connection URI)

- In your terminal, navigate to the auth-server folder and run 'npm install', then 'npm start'.
- Open an additional terminal, navigate to the client folder and run 'npm install', then 'npm run dev'.
- Create one last terminal, navigate to the server folder and run 'npm install', then 'npm start'.
- Navigate to 'localhost:3000' and click 'Login with Spotify', follow the instructions on this page, and you should be redirected back to the application. Now the app is up and running.

## How do I get my information?

Click on each section ('See My Top Artists', 'See My Top Genres', etc...) to learn more about your user profile.

## What do I do after I see my genre compositions?

Now you know which genres you don't frequent. Use this information to start creating a playlist with these least-listened-to genres.

## How do I get started with my playlist?

**Add Genre:**

There are thousands of genres available on Spotify. To simplify things, I've created a few general genres you can use as keywords to search for music. Use any of the below keywords to search for a specific genre:

- Rock
- Rap
- Hip Hop
- Jazz
- Country
- Emo
- Folk
- Indie
- R&B
- Funk
- Soul
- Beats
- Psychedelic
- Grunge

Once you've placed in your genre of choice, click 'Add Genre' below the search bar. Your playlist should generate. At any time, you can hover over the image loaded in your playlist and click on the image to listen to the song.

**Update Genre:**

To update a specific genre in your playlist, type the name of the genre you would like to update in the search bar and click 'Update Genre'; this will find the first instance of the specified genre and replace it.

**Delete Artist:**

If you would like to delete an entry in your playlist, type the name of the artist you would like to delete and click 'Delete Artist'.

**Clear Playlist:**

Click 'Clear Playlist' to delete all songs from your playlist.

**View Playlist:**

If, for some reason, you reload your page and your playlist has vanished, you can click 'View Playlist' to retrieve your previously created playlist.

## How Could This App be Improved?

In a further iteration of this application, I would like to gamify the user's experience. Users would be rewarded for listening to music outside of their typical musical genres with a point system. Users would be able to see their ranking amongst other users via a global leaderboard. By implementing a 'reward system,' users would feel a sense of accomplishment when using the application. This would also be an attempt to get users to spend more time on the application.
