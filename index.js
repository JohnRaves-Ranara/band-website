const albums = [
  {
    name: "Headcase",
    releaseDate: "June 17 2019",
    albumCover: "assets/headcase.jpg",
    songs: [
      {
        name: "Total Zombie",
        duration: "4:15",
        songLink: "assets/albums/headcase/totalzombie.mp3",
      },
      {
        name: "Nothing At All",
        duration: "3:47",
        songLink: "assets/albums/headcase/nothingatall.mp3",
      },
      {
        name: "Drag",
        duration: "3:09",
        songLink: "assets/albums/headcase/drag.mp3",
      },
      {
        name: "We Try but We Dont Fit In",
        duration: "3:38",
        songLink: "assets/albums/headcase/wetrybutwedontfitin.mp3",
      },
      {
        name: "Headcase",
        duration: "4:31",
        songLink: "assets/albums/headcase/headcase.mp3",
      },
    ],
  },
  {
    name: "The Days We Had",
    releaseDate: "May 5 2017",
    albumCover: "assets/thedayswehad.jpg",
    songs: [
      {
        name: "Something Here",
        duration: "4:05",
        songLink: "assets/albums/thedayswehad/somethinghere.mp3",
      },
      {
        name: "Ordinary",
        duration: "3:25",
        songLink: "assets/albums/thedayswehad/ordinary.mp3",
      },
      {
        name: "Bloom",
        duration: "2:33",
        songLink: "assets/albums/thedayswehad/bloom.mp3",
      },
      {
        name: "On Your Side",
        duration: "3:14",
        songLink: "assets/albums/thedayswehad/onyourside.mp3",
      },
      {
        name: "Bring You Down",
        duration: "3:37",
        songLink: "assets/albums/thedayswehad/bringyoudown.mp3",
      },
      {
        name: "Wasting Time",
        duration: "4:06",
        songLink: "assets/albums/thedayswehad/wastingtime.mp3",
      },
      {
        name: "Promises",
        duration: "3:16",
        songLink: "assets/albums/thedayswehad/promises.mp3",
      },
      {
        name: "Disguise",
        duration: "3:13",
        songLink: "assets/albums/thedayswehad/disguise.mp3",
      },
      {
        name: "I'm Still Here",
        duration: "4:21",
        songLink: "assets/albums/thedayswehad/imstillhere.mp3",
      },
    ],
  },
  {
    name: "Hard to Read",
    releaseDate: "June 17 2019",
    albumCover: "assets/hardtoread.jpg",
    songs: [
      {
        name: "Deadbeat Girl",
        duration: "4:43",
        songLink: "assets/albums/hardtoread/deadbeatgirl.mp3",
      },
      {
        name: "Gone",
        duration: "3:41",
        songLink: "assets/albums/hardtoread/gone.mp3",
      },
      {
        name: "Hard to Read",
        duration: "3:09",
        songLink: "assets/albums/hardtoread/hardtoread.mp3",
      },
      {
        name: "Stuck",
        duration: "3:36",
        songLink: "assets/albums/hardtoread/stuck.mp3",
      },
      {
        name: "You",
        duration: "2:47",
        songLink: "assets/albums/hardtoread/you.mp3",
      },
    ],
  },
  {
    name: "Pastlife",
    releaseDate: "June 17 2019",
    albumCover: "assets/pastlife.jpg",
    songs: [
      {
        name: "See You When the End is Near",
        duration: "3:51",
        songLink: "assets/albums/pastlife/seeyouwhentheendsnear.mp3",
      },
      {
        name: "Pastlife",
        duration: "2:31",
        songLink: "assets/albums/pastlife/pastlife.mp3",
      },
      {
        name: "Where Do You Go",
        duration: "3:22",
        songLink: "assets/albums/pastlife/wheredoyougo.mp3",
      },
      {
        name: "Blue",
        duration: "3:45",
        songLink: "assets/albums/pastlife/blue.mp3",
      },
      {
        name: "Loner",
        duration: "2:23",
        songLink: "assets/albums/pastlife/loner.mp3",
      },
      {
        name: "Before We Knew",
        duration: "3:32",
        songLink: "assets/albums/pastlife/beforeweknew.mp3",
      },
      {
        name: "Great Expectations",
        duration: "2:13",
        songLink: "assets/albums/pastlife/greatexpectations.mp3",
      },
      {
        name: "Heart to Rest",
        duration: "2:18",
        songLink: "assets/albums/pastlife/heartorest.mp3",
      },
      {
        name: "Apartment Complex",
        duration: "2:44",
        songLink: "assets/albums/pastlife/apartmentcomplex.mp3",
      },
    ],
  },
];

let lastPlayedButton = null;
let lastPlayedAudio = null;
let lastVinyl = null;

function togglePlayPause(button) {
  let progressBar = document.createElement("div");
  let progressRange = document.createElement("input");
  let songContainerRef = button.closest(".song-container");
  let currentPlayingAudio = songContainerRef.querySelector("audio");
  let albumContainer = button.closest(".album-container");
  let coverContainer = albumContainer.previousElementSibling;
  let currentVinyl = coverContainer.querySelector(".vinyl");
  //THIS CHECKS FOR EXISTING PROGRESSBAR AND REMOVES IT
  //THEN ADDS A NEW PROGRESSBAR
  let existingProgressBar = document.querySelector(".progressbar-container");
  if (existingProgressBar !== null) {
    existingProgressBar.remove();
  }
  progressBar.classList.add("progressbar-container");
  progressRange.setAttribute("type", "range");
  progressBar.appendChild(progressRange);
  songContainerRef.appendChild(progressBar);

  //THIS SETS THE PREVIOUSLY SELECTED SONG'S ICON TO PAUSE
  //WHEN SELECTING A NEW SONG TO PLAY
  if (lastPlayedButton === null) {
    lastPlayedButton = button;
  } else {
    if (button !== lastPlayedButton) {
      lastPlayedButton.classList.remove("pause-icon");
      lastPlayedButton.classList.add("play-icon");
      lastPlayedButton = button;
      // console.log(lastPlayedButton)
    }
  }

  //IF USER IS TOGGLING THE SAME SONG, THIS PLAYS/PAUSES THE SELECTED SONG
  //IF USER PLAYS A NEW SONG, THIS PLAYS THAT SONG AND PAUSES THE PREVIOUSLY PLAYED SONG
  if (lastPlayedAudio === null) {
    currentPlayingAudio.play();
    lastPlayedAudio = currentPlayingAudio;
  } else {
    if (currentPlayingAudio !== lastPlayedAudio) {
      lastPlayedAudio.pause();
      currentPlayingAudio.play();
      lastPlayedAudio = currentPlayingAudio;
    } else {
      currentPlayingAudio.paused
        ? currentPlayingAudio.play()
        : currentPlayingAudio.pause();
    }
  }

  //THIS IS FOR TOGGLING VINYL SPIN ANIMATION
  if (lastVinyl === null) {
    currentVinyl.classList.add("vinyl-spin");
    lastVinyl = currentVinyl;
  } else {
    if (currentVinyl !== lastVinyl) {
      lastVinyl.classList.remove("vinyl-spin");
      currentVinyl.classList.add("vinyl-spin");
      lastVinyl = currentVinyl;
    } else {
      currentPlayingAudio.paused
        ? lastVinyl.classList.remove("vinyl-spin")
        : lastVinyl.classList.add("vinyl-spin");
    }
  }

  //THIS IS FOR SONG PROGRESS BAR MOVEMENT
  progressRange.max = Math.round(currentPlayingAudio.duration);
  progressRange.value = currentPlayingAudio.currentTime;

  let playingSongProgress = setInterval(() => {
    if (progressRange.value < currentPlayingAudio.duration) {
      progressRange.value = currentPlayingAudio.currentTime;
    } else {
      setTimeout(() => {
        clearInterval(playingSongProgress);
      }, 0);
      button.classList.remove("pause-icon");
      button.classList.add("play-icon");
      lastVinyl.classList.remove("vinyl-spin");
    }
  }, 1000);

  //THIS IS FOR SEEKING
  progressRange.onchange = () => {
    currentPlayingAudio.currentTime = progressRange.value;
  };

  //THIS TOGGLES THE SELECTED SONG'S PLAY-PAUSE ICON
  if (button.classList.contains("play-icon")) {
    button.classList.remove("play-icon");
    button.classList.add("pause-icon");
  } else {
    button.classList.remove("pause-icon");
    button.classList.add("play-icon");
  }
}

function buildAlbums() {
  albums.forEach((album, index) => {
    let albumWrapper = document.createElement("section");
    albumWrapper.classList.add("album-wrapper")

    if (index === albums.length - 1) {
      albumWrapper.classList.add("pb-8");
    }

    albumWrapper.innerHTML += `
      <div class="cover-and-songs-container ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}">
      <section class="cover-container flex-1 inline-flex ${
        index % 2 !== 0 ? "flex-end" : ""
      }">
          <img class="album-cover" src="${album.albumCover}">
          
          <div class="vinyl"></div>
          
      </section>
      <section class="album-container flex-1">
          <div class="heading">
              <h2 class="font-urban-medium">${album.name}</h2>
              <p class="font-urban-italic">Released ${album.releaseDate}</p>
          </div>
          <div class="songs flex-col">
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
      </div>
      `;

    mainAlbumsContainer.appendChild(albumWrapper);
  });
}

let mainAlbumsContainer = document.querySelector(".main-albums-container");

buildAlbums();
