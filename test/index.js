let rootDiv = document.querySelector(".root")

const songs = [
  {
    name: "promises",
    duration: "2:00",
  },
  {
    name: "deadbeat girl",
    duration: "3:00",
  },
  {
    name: "total zombie",
    duration: "2:34",
  },
  {
    name: "gone",
    duration: "2:34",
  },
  {
    name: "promises",
    duration: "2:34",
  },
]

songs.forEach((song, index) => {
  rootDiv.innerHTML += 
  `<div class="song-container">
        <div class="song">
            <button class="play-button" onclick="handlePlayButtonClick(this, '${song.duration}', ${index})">Play ${index}</button>
            <p>${song.name}</p>
        </div>
    </div>`
})

function handlePlayButtonClick(button, duration, index) {
  let parentSongContainer = button.closest(".song-container")
  existingProgressBar = document.querySelector(".progressbar-container")
  if (existingProgressBar !== null) {
    existingProgressBar.remove()
  }
  let progressBarContainerDiv = document.createElement("div")
  progressBarContainerDiv.innerHTML += `<p>${duration} ${index}</p>`
  progressBarContainerDiv.classList.add("progressbar-container")
  parentSongContainer.appendChild(progressBarContainerDiv)
}
