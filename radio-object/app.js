let station1 = {
  name: "Station1: Pop",
  songs: [
    {
      title: "song1",
      artist: "artist1",
    },
    {
      title: "song2",
      artist: "artist2",
    },
  ],
};

let station2 = {
  name: "Station2: Classic Rock",
  songs: [
    {
      title: "song3",
      artist: "artist3",
    },
    {
      title: "song4",
      artist: "artist4",
    },
  ],
};

let radio = {
  stations: [station1, station2],

  changeStation: () => {
    //get random index for station
    let randomStation = Math.floor(Math.random() * radio.stations.length);

    // get station Name
    let stationName = radio.stations[randomStation].name;

    // get random index for songs
    let randomSong = Math.floor(
      Math.random() * radio.stations[randomStation].songs.length
    );

    // get song name and artist
    let songName = radio.stations[randomStation].songs[randomSong].title;
    let artist = radio.stations[randomStation].songs[randomSong].artist;

    // log the whole sentense
    console.log(
      `Welcome to ${stationName}! Now Playing: ${songName} by ${artist}`
    );
  },
};

//call the function
radio.changeStation();
