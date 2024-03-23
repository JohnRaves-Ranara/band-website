const albums = [
  {
    name: "BETWEEN DAYS",
    releaseDate: "November 19 2018",
    albumCover: "assets/ab67616d0000b273e7a1fbcf9266e0650624328c.jpg",
    songs: [
      {
        name: "Between Days",
        duration: "3:10",
        songLink: "assets/albums/BetweenDays-Album/Between-Days.mp3"
      },
      {
        name: "Blue",
        duration: "3:25",
        songLink: "assets/albums/BetweenDays-Album/Blue.mp3"
      },
      {
        name: "The Place",
        duration: "4:17",
        songLink: "assets/albums/BetweenDays-Album/The-Place.mp3"
      },
      {
        name: "Lets Go Outside",
        duration: "4:30",
        songLink: "assets/albums/BetweenDays-Album/Lets-Go-Outside.mp3"
      },
      {
        name: "Finding My Way Home",
        duration: "4:30",
        songLink: "assets/albums/BetweenDays-Album/Finding-My-Way-Home.mp3"
      },
    ],
  },
  {
    name: "THE HEIGHTS",
    releaseDate: "June 17 2019",
    albumCover: "assets/ab67616d0000b273d719efe995867ffaa24dbcb8.jpg",
    songs: [
      {
        name: "Conversations",
        duration: "3:19",
        songLink: "assets/albums/TheHeights-Album/Conversations.mp3"
      },
      {
        name: "Astoria",
        duration: "4:06",
        songLink: "assets/albums/TheHeights-Album/Astoria.mp3"
      },
      {
        name: "A Dream of You",
        duration: "4:18",
        songLink: "assets/albums/TheHeights-Album/A-Dream-of-You.mp3"
      },
      {
        name: "These Times",
        duration: "3:11",
        songLink: "assets/albums/TheHeights-Album/These-Times.mp3"
      },
      {
        name: "The Heights",
        duration: "3:14",
        songLink: "assets/albums/TheHeights-Album/The-Heights.mp3"
      },
    ],
  },
];

let lastPlayedButton = null
let lastPlayedAudio = null
let lastVinyl = null

function togglePlayPause(button, name, duration) {
  let progressBar = document.createElement("div")
  let progressRange = document.createElement("input")
  let songContainerRef = button.closest(".song-container")
  let currentPlayingAudio = songContainerRef.querySelector("audio")
  let albumContainer = button.closest(".album-container")
  let coverContainer = albumContainer.previousElementSibling
  let currentVinyl = coverContainer.querySelector(".vinyl")
  progressBar.value = 0
  //THIS CHECKS FOR EXISTING PROGRESSBAR AND REMOVES IT
  //THEN ADDS A NEW PROGRESSBAR
  let existingProgressBar = document.querySelector(".progressbar-container")
  if(existingProgressBar!==null){
    existingProgressBar.remove()
  }
  progressBar.classList.add("progressbar-container")
  progressRange.setAttribute("type", "range")
  progressBar.appendChild(progressRange)
  songContainerRef.appendChild(progressBar)

  //THIS SETS THE PREVIOUSLY SELECTED SONG'S ICON TO PAUSE
  //WHEN SELECTING A NEW SONG TO PLAY
  if (lastPlayedButton === null) {
    // console.log("lastPlayedButton is initially null")
    lastPlayedButton = button;
    // console.log(lastPlayedButton)
  } else {
    // console.log("lastPlayedButton is NOT null")
    if(button!==lastPlayedButton){
      lastPlayedButton.classList.remove("pause-icon")
      lastPlayedButton.classList.add("play-icon")
      lastPlayedButton = button
      // console.log(lastPlayedButton)
    }
  }

  //IF USER IS TOGGLING THE SAME SONG, THIS PLAYS/PAUSES THE SELECTED SONG 
  //IF USER PLAYS A NEW SONG, THIS PLAYS THAT SONG AND PAUSES THE PREVIOUSLY PLAYED SONG 
  if(lastPlayedAudio === null){
    // console.log("lastPlayedAudio is initially null")
    currentPlayingAudio.play()
    lastPlayedAudio = currentPlayingAudio
    // console.log(lastPlayedAudio)
  } else{
    // console.log("lastPlayedAudio is NOT null")
    if(currentPlayingAudio!==lastPlayedAudio){
      lastPlayedAudio.pause()
      // console.log(lastPlayedAudio)
      currentPlayingAudio.play()
      lastPlayedAudio = currentPlayingAudio
      // console.log(lastPlayedAudio)
    }else{
      currentPlayingAudio.paused ? currentPlayingAudio.play() : currentPlayingAudio.pause()
    }
  }
  
  if(lastVinyl===null){
    currentVinyl.classList.add("vinyl-spin")
    lastVinyl = currentVinyl
  } else {
    if(currentVinyl!==lastVinyl){
      lastVinyl.classList.remove("vinyl-spin")
      currentVinyl.classList.add("vinyl-spin")
      lastVinyl = currentVinyl
    } else {
      currentPlayingAudio.paused ? lastVinyl.classList.remove("vinyl-spin") : lastVinyl.classList.add("vinyl-spin")
    }
  }

  //THIS IS FOR SONG PROGRESS BAR MOVEMENT
  progressRange.max = Math.round(currentPlayingAudio.duration)

    setInterval(() => {

        if(progressRange.value < currentPlayingAudio.duration){
          progressRange.value = currentPlayingAudio.currentTime
          console.log(`${progressRange.value} ${progressRange.max}`)
        }
        else{
          button.classList.remove("pause-icon")
          button.classList.add("play-icon")
          // lastVinyl.classList.remove("vinyl-spin")
        }
        
      
    }, 300);


  
  //THIS IS FOR SEEKING
  progressRange.onchange = () => {
    // currentPlayingAudio.play()
    currentPlayingAudio.currentTime = progressRange.value
  }

  //THIS TOGGLES THE SELECTED SONG'S PLAY-PAUSE ICON
  if (button.classList.contains("play-icon")) {
    
    button.classList.remove("play-icon")
    button.classList.add("pause-icon")
  } else {
    button.classList.remove("pause-icon")
    button.classList.add("play-icon")
  }
}



function buildAlbums() {
  albums.forEach((album, index) => {
    let albumWrapper = document.createElement("section");
    if (index % 2 === 0) {
      albumWrapper.classList.add("album-wrapper", "flex-row");
    } else {
      albumWrapper.classList.add("album-wrapper", "flex-row-reverse");
    }

    albumWrapper.innerHTML += `
      <section class="cover-container flex-1 flex-row ${
        index % 2 !== 0 ? "flex-end" : ""
      }">
          <div class="cover">
              <img src="${album.albumCover}">
              <div class="vinyl"></div>
          </div>
      </section>
      <section class="album-container flex-1">
          <div class="heading">
              <h2 class="font-urban-medium">${album.name}</h2>
              <p class="font-urban-italic">Released ${album.releaseDate}</p>
          </div>
          <div class="songs flex-col gap-3">
              ${album.songs
                .map((song) => {
                  return `
                <div class="song-container">
                    <div class="song flex-row">
                        <div onclick="togglePlayPause(this, '${song.name}', '${song.duration}')" class="play-icon"></div>
                        <p class="font-urban-italic flex-1">${song.name}</p>
                        <p class="font-urban-italic">${song.duration}</p>
                    </div>
                    <!-- add diri tong play bar -->
                    <audio>
                        <source src=${song.songLink}>
                    </audio>
                </div>
                `;
                })
                .join("")}
          </div>
      </section>
      `;

    mainAlbumsContainer.appendChild(albumWrapper);
  });
}

let mainAlbumsContainer = document.querySelector(".main-albums-container");

buildAlbums();
