const key = "fa900fc690bf9cc2e346b75e332beb4a"
const mostUrl = "https://api.themoviedb.org/3/movie/popular?api_key=fa900fc690bf9cc2e346b75e332beb4a&language=tr-TR&page=1";
const trendList = "https://api.themoviedb.org/3/trending/movie/day?api_key=fa900fc690bf9cc2e346b75e332beb4a"
const comingList = "https://api.themoviedb.org/3/movie/upcoming?api_key=fa900fc690bf9cc2e346b75e332beb4a&language=tr-TR&page=1"
const reviewsUrl = "https://imdb-api.com/en/API/Reviews/k_5tc9m3cl/tt1375666"
const titleUrl = "https://api.themoviedb.org/3/movie/"


//---------------------------------------------------


// const mostUrl = "./json/most.json"
// const trendList = "./json/trendday.json"
// const upcomingList = "./json/upcoming.json"
// const comingUrl = "./json/comicSoon.json"
// const top250Url = "./json/top250.json"
// const reviewsUrl = "./json/reviews.json"
// const fullTitleUrl = "./json/fullTitle.json"


//----------------------------------------------------


function urlFixer(url) {
    return titleUrl + url + "?api_key=" + key + "&language=tr-TR"
}


//---------------------------------------------------


async function apiJson(url) {

    try {

        let json = await fetch(url);
        // console.log(json);

        if (json.ok) {
            let data = await json.json();
            // console.log(data);
            // console.log(data.results[0]);

            return data
        }
    } catch (error) {
        console.log(error);
    }
}

// apiJson()
//---------------------------------------------------


async function topId(url) {

    let response = await apiJson(url)
    let data = response.results
    let trend = []
    data.forEach(item => trend.push(item.id));
    return trend
}


//----------------------------------------------------


function random(val, max) {

    let arr = []

    for (let i = 0; i < val; i++) {

        let rand = Math.floor(Math.random() * max)

        if (arr.indexOf(rand) == -1) {
            arr.push(rand)
        } else {
            i--
        }
    }
    return arr
}


//----------------------------------------------------


function summerize(val, max) {
    let ozet = []
    let sum = 0

    if (val.length <= max) {
        return val
    } else {
        let arr = val.split(" ")

        for (let i = 0; i < arr.length; i++) {

            sum += arr[i].length
            if (sum <= max) {
                ozet.push(arr[i])
            }
        }
        return ozet.join(" ") + "..."
    }
}


//----------------------------------------------------


function star(str) {

    let val = str / 2
    let item = ""

    for (let i = 0; i < Math.floor(val); i++) item += `<i class="bi bi-star-fill"></i>`

    if (Math.round(val) > val) {
        item += `<i class="bi bi-star-half"></i>`
        val++
    }

    for (let i = 0; i < 5 - Math.floor(val); i++) item += `<i class="bi bi-star"></i>`

    return item
}