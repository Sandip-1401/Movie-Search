import API_KEY from './config.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';



const getTrendingMovies = async () => {
   console.log("Fetching data......!!");
   let URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
   let response = await fetch(URL);
   let data = await response.json();
   const movies = data.results;
   console.log(movies);

   const imgs = document.querySelector(".imgs");
   const allImg = document.querySelector(".allImg");

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
// getTrend();

const SearchBtn = document.querySelector(".SearchBtn");
const searchMovie = async () => {
   const SearchInp = document.querySelector(".SearchInp");
   let movieName = SearchInp.value;
   let URLSEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
   let response = await fetch(URLSEARCH);
   let data = await response.json();
   const movies = data.results;
   console.log(movies);
   
   

   data.forEach((movie) => {
      let URLIMG = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
      let imgs = document.createElement("img");
      imgs.src = URLIMG;
   });
};

SearchBtn.addEventListener("click", () => {
   searchMovie();
});



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


function updateConnectionStatus(){
   if(navigator.onLine){
      if(document.querySelector("#offline-div")){
         const alertDiv = document.createElement("div");
         alertDiv.innerHTML = "You are back Online...";
         alertDiv.id = `online-div`;
         alertDiv.style.cssText = 
         `
         position: fixed;
         top: 0; left: 0; right: 0;
         background-color: #4CAF50;
         color: white;
         font-size: 18px;
         padding: 10px;
         text-align: center;
         z-index: 1000;
         transition: opacity 5s ease-in-out;
         `;

         if(document.querySelector("#offline-div")){
            document.querySelector("#offline-div").remove();
         };
         document.body.appendChild(alertDiv);

         setTimeout(() => {
            const onlineDiv = document.querySelector("#online-div");
            if(onlineDiv){
               onlineDiv.remove();
            }
         }, 3000)
      }
   }else{
      if(!document.querySelector("#offline-div")){
         const alertDiv = document.createElement("div");
         alertDiv.id = "offline-div";
         alertDiv.innerHTML = `You are offline. Please check yout network...!`;
         alertDiv.style.cssText = `
         position: fixed;
         top: 0; left: 0; right: 0;
         background-color: #f44336;
         color: white;
         text-align: center;
         padding: 10px;
         z-index: 1000;
         font-size: 18px;
         transition: opacity 5s ease-in-out;
         `;
         document.body.appendChild(alertDiv);
      }
     
   }
}
updateConnectionStatus();
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

const microphone = document.querySelector(".microphone");
const SearchInp = document.querySelector(".SearchInp");
const audio = new Audio("Images/google.mp3");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
   const recognition = new SpeechRecognition();
   recognition.lang = 'en-US';
   recognition.interinResults = false;
   recognition.contionuous = false;

   microphone.addEventListener("click", () => {
      audio.play();
      SearchInp.value = "";
      recognition.start();
   });
     
   recognition.onresult = ((event) => {
      const transcript = event.results[0][0].transcript;
      SearchInp.value = transcript;
   });

}
