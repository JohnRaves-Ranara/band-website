const albums = [
  {
    name: "BETWEEN DAYS",
    releaseDate: "November 19 2018",
    albumCover: "assets/ab67616d0000b273e7a1fbcf9266e0650624328c.jpg",
    songs: [
      {
        name: "Between Days",
        duration: "3:10",
        test: () => console.log("bruh"),
      },
      {
        name: "Blue",
        duration: "3:25",
      },
      {
        name: "The Place",
        duration: "4:17",
      },
      {
        name: "Lets Go Outside",
        duration: "4:30",
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
      },
      {
        name: "Astoria",
        duration: "4:06",
      },
      {
        name: "A Dream of You",
        duration: "4:18",
      },
      {
        name: "These Times",
        duration: "3:11",
      },
      {
        name: "The Heights",
        duration: "3:14",
      },
    ],
  },
];

let lastPlayedButton = '';

function togglePlayPause(button, name, duration) {

  if (lastPlayedButton === '') {
    console.log("lastPlayedButton is null")
    lastPlayedButton = button;

  } else {
    console.log("lastPlayedButton is NOT null")
    if(button!==lastPlayedButton){
      lastPlayedButton.classList.remove("pause-icon")
      lastPlayedButton.classList.add("play-icon")
      lastPlayedButton = button
    }
  }

  //this toggles the images under the div from play-pause vice versa
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
      <section class="songs-container flex-1">
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
