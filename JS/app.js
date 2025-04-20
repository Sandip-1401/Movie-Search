import API_KEY from './config.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// setTimeout(() => {
//    let splash = document.getElementById("splashScreen");
//    splash.style.opacity = "0"; // Fade effect
//    setTimeout(() => {
//        splash.style.display = "none"; // Remove after fade-out
//    }, 500); // Wait for transition to complete
// }, 1000); // Show splash for 3 sec

const getTrendingMovies = async () => {
   let URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
   let response = await fetch(URL);
   let data = await response.json();
   const movies = data.results;
   console.log(movies);

   const imgs = document.querySelector(".imgs");
   const allImg = document.querySelector(".allImg");

   movies.forEach((movie) => {

      const a = document.createElement("a");
      a.href = `https://www.google.com/search?sca_esv=dcef92e01162e678&sxsrf=AHTn8zopuydS86cPYNhP7NhEtyHWy4BeMQ:1745178774921&q=${movie.original_title}&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcrJ5Ab4RKLuubEKce5_0WFIkTtBv0jWoMVlgF0K8zBpkS5MPN8if8EiVqRXe3oF9JtF1zDaoALraPXIohOsUTyOpbp7Hg9DeJjHb1GyVGr4UopvkcWpSplweXOPetMVMnx8-azGtI8U2AePUDxmoN7UZpqHdw&sa=X&ved=2ahUKEwimoMvHseeMAxUz4DgGHat9IVEQtKgLegQIFxAB&biw=1254&bih=616&dpr=1.09`;

      
      let URLIMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      let imgs = document.createElement("img");
      imgs.src = URLIMG;
      imgs.classList.add('h-56', 'imgs', 'rounded-md', 'w-auto', 'cursor-pointer', 'hover:opacity-90', 'hover:scale-105', 'duration-200');

      let outDiv = document.createElement("div");
      outDiv.classList.add('h-72', 'w-fit', 'outDiv');

      let infoDiv = document.createElement("div");
      infoDiv.classList.add('h-fit', 'w-40', 'flex', 'flex-wrap', 'infoDiv');

      let Title = document.createElement("p");
      Title.innerHTML = `${movie.original_title}`;
      Title.classList.add('Title', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');

      let ReleasData = document.createElement("p");
      ReleasData.innerHTML = `${parseFloat(movie.vote_average.toFixed(1))}/10`;
      ReleasData.classList.add('Title', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');

      infoDiv.append(Title);
      infoDiv.append(ReleasData);
      a.appendChild(imgs);
      outDiv.appendChild(a);
      outDiv.appendChild(infoDiv);
      allImg.appendChild(outDiv);
   });
}

const getTrend = () => {
   getTrendingMovies();
}
getTrend();

const SearchBtn = document.querySelector(".SearchBtn");
const searchMovie = async () => {
   const SearchInp = document.querySelector(".SearchInp");
   let movieName = SearchInp.value;
   let URLSEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
   let response = await fetch(URLSEARCH);
   let data = await response.json();
   const movies = data.results;
   console.log(movies);
   
   const searchOutput = document.querySelector(".searchOutput");
   searchOutput.classList.remove('searchOutputDisplayNone');
   searchOutput.classList.add('searchOutputDisplay');
   searchOutput.innerHTML = "";

   movies.forEach((movie) => {


      const a = document.createElement("a");
      a.href = `https://www.google.com/search?sca_esv=dcef92e01162e678&sxsrf=AHTn8zopuydS86cPYNhP7NhEtyHWy4BeMQ:1745178774921&q=${movie.original_title}&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcrJ5Ab4RKLuubEKce5_0WFIkTtBv0jWoMVlgF0K8zBpkS5MPN8if8EiVqRXe3oF9JtF1zDaoALraPXIohOsUTyOpbp7Hg9DeJjHb1GyVGr4UopvkcWpSplweXOPetMVMnx8-azGtI8U2AePUDxmoN7UZpqHdw&sa=X&ved=2ahUKEwimoMvHseeMAxUz4DgGHat9IVEQtKgLegQIFxAB&biw=1254&bih=616&dpr=1.09`;



      let URLIMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      let imgs = document.createElement("img");
      imgs.src = URLIMG;
      const searchDetail = document.createElement("div");
      searchDetail.classList.add('searchDetail', 'm-1.5', 'flex', 'shadow-2xl', 'w-[90%]', 'mx-auto', 'rounded-md', 'bg-red-100', 'backdrop-blur-3xl', 'mb-5');

      imgs.classList.add('h-40', 'searchImg', 'rounded-md', 'shadow-3xl', 'w-30', 'cursor-pointer','hover:opacity-90', 'hover:scale-105', 'duration-200', 'rounded-tr-none', 'rounded-br-none');

      const searchText = document.createElement("div");
      searchText.classList.add('searchText', 'pt-2.5', 'pr-2', 'flex', 'flex-col', 'gap-3.5');

      const searchTwo = document.createElement("div");
      searchTwo.classList.add('searchTwo');

      const searchTitle = document.createElement("h4");
      searchTitle.classList.add('searchTitle', 'text-xl','cursor-pointer', 'pl-5');
      searchTitle.innerHTML = `${movie.original_title}`;

      const searchDate = document.createElement("h6");
      searchDate.classList.add('searchDate','font-bold');
      searchDate.innerHTML = `${movie.release_date}`;

      const searchDescribtion = document.createElement("p");
      searchDescribtion.classList.add('searchDescribtion', 'mb-2.5', 'indent-4');
      searchDescribtion.innerHTML = `${movie.overview.split('. ').slice(0, 3).join('. ') + "."}`;

      searchTwo.appendChild(searchTitle);
      searchTwo.appendChild(searchDate);

      searchText.appendChild(searchTwo);
      searchText.appendChild(searchDescribtion);
     
      searchDetail.appendChild(imgs);
      searchDetail.appendChild(searchText);

      searchOutput.appendChild(searchDetail);
       // a.appendChild(imgs);
   });
};

SearchBtn.addEventListener("click", () => {
   const SearchInp = document.querySelector(".SearchInp");
   if(SearchInp.value){
      searchMovie();
      SearchInp.value = "";
   }
});

const getTopRated = async () => {
   let URLTOP = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
   const response = await fetch(URLTOP);
   const data = await response.json();
   const movies = data.results;
   console.log(movies);

   const topMovies = document.querySelector(".topMovies");
   
   movies.forEach((movie) => {


      const a = document.createElement("a");
      a.href = `https://www.google.com/search?sca_esv=dcef92e01162e678&sxsrf=AHTn8zopuydS86cPYNhP7NhEtyHWy4BeMQ:1745178774921&q=${movie.original_title}&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcrJ5Ab4RKLuubEKce5_0WFIkTtBv0jWoMVlgF0K8zBpkS5MPN8if8EiVqRXe3oF9JtF1zDaoALraPXIohOsUTyOpbp7Hg9DeJjHb1GyVGr4UopvkcWpSplweXOPetMVMnx8-azGtI8U2AePUDxmoN7UZpqHdw&sa=X&ved=2ahUKEwimoMvHseeMAxUz4DgGHat9IVEQtKgLegQIFxAB&biw=1254&bih=616&dpr=1.09`;


      let URLTOPIMG = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      let imgs = document.createElement("img");
      imgs.src = URLTOPIMG;
      imgs.classList.add('h-56', 'topImgs', 'rounded-md', 'w-auto', 'cursor-pointer', 'hover:opacity-90', 'hover:scale-105', 'duration-200');

      const topOutDiv = document.createElement("div");
      topOutDiv.classList.add('h-72', 'w-fit', 'topOutDiv');

      const topInfoDiv = document.createElement("div");
      topInfoDiv.classList.add('h-fit', 'w-40', 'flex', 'flex-wrap', 'topInfoDiv', 'mt-1.5');

      const topTitle = document.createElement("p");
      topTitle.classList.add('topTitle', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
      topTitle.innerHTML = `${movie.original_title}`;

      const topReleasData = document.createElement("p");
      topReleasData.classList.add('topReleasData', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
      topReleasData.innerHTML = `${parseFloat(movie.vote_average.toFixed(1))}/10`;

      topInfoDiv.appendChild(topTitle);
      topInfoDiv.appendChild(topReleasData);
      a.appendChild(imgs);
      topOutDiv.appendChild(a);
      topOutDiv.appendChild(topInfoDiv);

      topMovies.appendChild(topOutDiv);
   })
}
const getTopRatedFun = () => {
   getTopRated();
};
getTopRatedFun();
let number = 3; 
let page = 1;
   
const getMovies = async () => {
   
   let URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
   let response = await fetch(URL);
   let data = await response.json();
   // console.log(number);
   const movies = data.results.slice(0, number);
   console.log(movies);

   
   const popmovies = document.querySelector(".popmovies");
   const popbox = document.querySelector(".popbox");

   movies.forEach((movie) => {
      
      

      const popsingle = document.createElement("div");
      popsingle.classList.add('popsingle');

     
      popbox.classList.add('popbox');

      const a = document.createElement("a");
      a.href = `https://www.google.com/search?sca_esv=dcef92e01162e678&sxsrf=AHTn8zopuydS86cPYNhP7NhEtyHWy4BeMQ:1745178774921&q=${movie.original_title}&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBtmuEdhfywyzhendkLDnhcrJ5Ab4RKLuubEKce5_0WFIkTtBv0jWoMVlgF0K8zBpkS5MPN8if8EiVqRXe3oF9JtF1zDaoALraPXIohOsUTyOpbp7Hg9DeJjHb1GyVGr4UopvkcWpSplweXOPetMVMnx8-azGtI8U2AePUDxmoN7UZpqHdw&sa=X&ved=2ahUKEwimoMvHseeMAxUz4DgGHat9IVEQtKgLegQIFxAB&biw=1254&bih=616&dpr=1.09`;

      let POPURLIMG = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      let popimg = document.createElement("img");
      popimg.src = `${POPURLIMG}`;
      popimg.classList.add('popimg', 'h-52', 'w-fit', 'bg-center', 'rounded-xl', 'mb-2', 'cursor-pointer', 'hover:opacity-90', 'hover:scale-105', 'duration-200');

      const popdes = document.createElement("div");
      popdes.classList.add('popdes', 'flex', 'flex-col', 'gap-1');

     const poptitle = document.createElement("h5");
     poptitle.classList.add('poptitle' ,'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
     poptitle.innerHTML = `${movie.original_title}`;

     const poprating = document.createElement("h5");
     poprating.classList.add('poprating', 'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full', 'opacity-70');
     poprating.innerHTML = `${parseFloat(movie.vote_average.toFixed(1))}/10`;

     const popdate = document.createElement("h5");
     popdate.classList.add('popdate' ,'font-semibold', 'leading-4', 'break-words', 'whitespace-normal', 'mt-1', 'cursor-pointer', 'hover:text-red-950', 'w-full');
     popdate.innerHTML = `${movie.release_date}`;

     popdes.appendChild(poptitle);
     popdes.appendChild(poprating);
     popdes.appendChild(popdate);

     a.appendChild(popimg);

     popsingle.appendChild(a);
     popsingle.appendChild(popdes);

     popbox.appendChild(popsingle);

   });

   const showmore = document.querySelector(".showmore");
   showmore.addEventListener("click", () => {
      popmovies.classList.remove('h-96');
      popmovies.classList.add('h-fit');
      popbox.classList.add('h-fit');
     
      page++;
      getMovies();
      // console.log(number);
   });

}

getMovies();


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
