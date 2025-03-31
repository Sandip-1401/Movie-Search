import API_KEY from './config.js';


const imgs = document.querySelector(".imgs");
const allImg = document.querySelector(".allImg");


const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


const getTrendingMovies = async () => {
   console.log("Fetching data......!!");
   let URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
   let response = await fetch(URL);
   let data = await response.json();
   const movies = data.results;
   console.log(movies);

   movies.forEach((movie) => {
      
      let URLIMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      let imgs = document.createElement("img");
      imgs.src = URLIMG;
      imgs.classList.add('h-56', 'imgs', 'rounded-md', 'w-auto', 'cursor-pointer', 'hover:opacity-90', 'hover:scale-105', 'duration-200');
      let outDiv = document.createElement("div");
      outDiv.classList.add('h-72', 'w-fit', 'outDiv');
      let infoDiv = document.createElement("div");
      infoDiv.classList.add('h-fit', 'w-40', 'flex', 'flex-wrap', 'infoDiv');
      let Title = document.createElement("p");
      Title.innerHTML = `${movie.title}`;
      Title.classList.add('Title', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
      let ReleasData = document.createElement("p");
      ReleasData.innerHTML = `${parseFloat(movie.vote_average.toFixed(1))}/10`;
      ReleasData.classList.add('Title', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
      infoDiv.append(Title);
      infoDiv.append(ReleasData);
      outDiv.appendChild(imgs);
      outDiv.appendChild(infoDiv);
      allImg.appendChild(outDiv);
   });
}

const getTrend = () => {
   getTrendingMovies();
}


// const getMovies = async () => {
//    let URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//    let response = await fetch(URL);
//    let data = await response.json();
//    const movies = data.results;
//    console.log(movies);

//    movies.forEach((movie) => {
      
//       let URLIMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//       let imgs = document.createElement("img");
//       imgs.classList.add('h-72', 'imgs', 'rounded-3xl', 'w-auto');
//       imgs.src = URLIMG;
//       allImg.appendChild(imgs);
//    });

// }

// const get = () => {
//    getMovies();
// }
