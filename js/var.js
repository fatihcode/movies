const slider = document.getElementById("slider");
const crousel = document.getElementById("crousel");
const trend = document.getElementById("trend");
const featured = document.getElementById("featured");
const artist = document.getElementById("artist")
const reviews = document.getElementById("reviews");

//---------------------------------------------------

const choice = ["329865","207703","374720","335984","181808","512195", "508442", "634649", "644495", "617653", "337404", "370172", "438631", "550988", "451048", "588228", "577922", "546554", "497698", "646380", "566525", "539885", "337401", "615457", "509967", "8392", "497582", "530915", "354912", "414906"]
const key = "fa900fc690bf9cc2e346b75e332beb4a"
const tmdb = "https://www.themoviedb.org/"
const api = "https://api.themoviedb.org/3/"
const image = "https://image.tmdb.org/t/p/"

//---------------------------------------------------

const urlMovie = (id) => api + "movie/" + id + "?api_key=" + key + "&language=tr-TR"
const urlReview = (id) => api + "movie/" + id + "/reviews?api_key=" + key
const urlArtist = () => api + "person/popular?api_key=" + key + "&language=tr-TR"
const urlPopular = () => api + "movie/popular?api_key=" + key + "&language=tr-TR"
const urlTrend = () => api + "trending/movie/day?api_key=" + key
const urlComing = () => api + "movie/upcoming?api_key=" + key

//---------------------------------------------------

const face = tmdb + "t/p/w220_and_h330_face"
const best = tmdb + "t/p/w300_and_h450_bestv2"
const art = tmdb + "t/p/w138_and_h175_face"