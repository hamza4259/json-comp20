// for global access inside of filterByGenre
let jsonObject;

// mimic api call
$(document).ready(() => {
  $.get(
    "https://raw.githubusercontent.com/hamza4259/json-comp20/main/setlist.json",
    function(data) {
      jsonObject = JSON.parse(data);
      let jsonString = JSON.stringify(jsonObject);
      const rawElemSelector = document.querySelector("#raw-json-string");
      rawElemSelector.innerHTML = jsonString;

      // by default we want to display all of the cards
      filterByGenre(onclick);
	});
});


const filterByGenre = (e) => {
  const selectedGenre = $("#genres").val();
  const allCardsSelector = document.querySelector("#all-cards");
  allCardsSelector.innerHTML = "";

  // for each object in the JSON check to see if its of appropriate genre
  // then just add to the div created in the html
  jsonObject.forEach((song) => {
    if (song.Genre == selectedGenre || selectedGenre == "All") {
      let songCard = document.createElement("div");
      songCard.className = "song-card";
      songCard.innerHTML = `<div>Title: ${song.Artist}</div><div>Artist: ${song.Title}</div>`;
      songCard.innerHTML += `<div>Genre: ${song.Genre}</div><div>Year: ${song.Year}</div>`;
      allCardsSelector.appendChild(songCard);
    }
  });
};