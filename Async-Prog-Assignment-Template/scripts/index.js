// For Slider
let flag = 0;
 function slider(x){
     flag = flag + x;
     slideshow(flag);
 }
 slideshow(flag)
function slideshow(num){
    let slides = document.querySelectorAll('.slide');
   
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length -1;
        num = slides.length -1;
    }

    for(let i of slides){
        i.style.display = "none";
    }
    slides[num].style.display = "block";
}
setInterval("slider(1)",2000);
// slider end

var moviesData = [
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 8.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 5.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 6.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 9,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 10,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 9.0,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 9.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 8.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
    {
        poster: "https://www.gujaratheadline.com/wp-content/uploads/2014/12/PK-Poster-4.jpg",
        rating: 7.2,
        name:"The Godfather",
        releaseDate:"1972",
    },
]

var filteredData = JSON.parse(JSON.stringify(moviesData));

var movieData = JSON.parse(localStorage.getItem("movieData")) || [];

document.querySelector('#sort-hl').addEventListener('click', function() {
  var sortTypehl = document.querySelector('#sort-hl').value;
    filteredData.sort(function(a, b) {
      if(sortTypehl === 'HighToLow') {
        return b.rating - a.rating;
      }
    });
    displayData(filteredData);
});
document.querySelector('#sort-lh').addEventListener('click', function() {
  var sortType = document.querySelector('#sort-lh').value;
    filteredData.sort(function(a, b) {
      if(sortType === 'lowToHigh') {
        return a.rating - b.rating;
      }
    });
    displayData(filteredData);
});



function displayData(moviesData) {
 document.querySelector('#movies').innerHTML = '';
 moviesData.forEach(function(movieData){
     var movies = document.createElement("div");
     var movie = document.createElement('div');
      movie.setAttribute('id', 'movie');

     var poster = document.createElement("img");
     poster.src = movieData.poster;

     var rating = document.createElement('p');
     rating.innerText = movieData.rating;

     var name = document.createElement('p');
     name.innerText = movieData.name;

     var releaseDate = document.createElement("p");
     releaseDate.innerText = movieData.releaseDate;
      
     movie.append(poster, rating, name, releaseDate);
     movies.append(movie);
     document.querySelector("#movies").append(movies);
     
 })
  movieData.push(moviesData);
      localStorage.setItem("movieData",JSON.stringify(movieData))

}
displayData(moviesData);


