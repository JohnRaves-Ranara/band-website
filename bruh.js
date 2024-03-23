const albums = [
  {
    name: "BETWEEN DAYS",
    releaseDate: "October 5th 2015",
    albumCover: "assets/ab67616d0000b273e7a1fbcf9266e0650624328c.jpg",
    songs: [
      {
        name: "Between Days",
        duration: "3:10",
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
        name: "Let's go outside",
        duration: "4:30",
      },
    ],
  },
  {
    name: "THE HEIGHTS",
    releaseDate: "October 5th 2015",
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

albums.forEach((album, index) => {
  let albumWrapper = document.createElement("section");
  console.log(index);

  if (index % 2 === 0) {
    albumWrapper.classList.add("album-wrapper", "flex-row");
  } else {
    albumWrapper.classList.add("album-wrapper", "flex-row-reverse");
  }

  albumWrapper.innerHTML += `
    <section class="cover-container flex-row ${index%2!==0 ? "flex-end" : ""}">
        <div class="cover">
            <img src="${album.albumCover}">
            <div class="vinyl"></div>
        </div>
    </section>
    <section class="songs-container p-3">
        <div class="heading p-3">
            <h2 class="font-urban-medium">${album.name}</h2>
            <p class="font-urban-italic">Released ${album.releaseDate}</p>
        </div>
        <div class="songs flex-col gap-3">
            ${album.songs.map((song) => {
                console.log(song.name)
            return `
            <div class="song-container p-3">
                <div class="song">
                    <p class="font-urban-italic">${song.name}</p>
                    <p class="font-urban-italic">${song.duration}</p>
                </div>
                <!-- add diri tong play bar -->
            </div>
            `;
            }).join('')}
        </div>
    </section>
    `;


  document.body.appendChild(albumWrapper);
});
