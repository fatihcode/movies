const most = document.getElementById("most");
const top250 = document.getElementById("top250");
const reviews = document.getElementById("reviews");
const slider = document.getElementById("slider");
const crousel = document.getElementById("crousel")
const person = document.getElementById("person")

//---------------------------------------------------

const key = "fa900fc690bf9cc2e346b75e332beb4a"
const choice = ["512195","524434","634649","644495","617653","337404","370172","438631","550988","451048","588228","436969","774741","497698","646380","566525","299536","615457","16869","8392"]
const mostUrl = "https://api.themoviedb.org/3/movie/popular?api_key=fa900fc690bf9cc2e346b75e332beb4a&language=tr-TR";
const trendList = "https://api.themoviedb.org/3/trending/movie/day?api_key=fa900fc690bf9cc2e346b75e332beb4a"
const comingList = "https://api.themoviedb.org/3/movie/upcoming?api_key=fa900fc690bf9cc2e346b75e332beb4a&language=tr-TR"
const artistUrl = "https://api.themoviedb.org/3/person/popular?api_key=fa900fc690bf9cc2e346b75e332beb4a&language=tr-TR"
const titleUrl = "https://api.themoviedb.org/3/movie/"

//---------------------------------------------------

const w185 = "https://image.tmdb.org/t/p/w185"
const w500 = "https://image.tmdb.org/t/p/w500"
const w1280 = "https://image.tmdb.org/t/p/w1280"
const face = "https://www.themoviedb.org/t/p/w220_and_h330_face"
const best = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
const art = "https://www.themoviedb.org/t/p/w138_and_h175_face"