// const publicKey ="pk_qqnsponebxed9indw"

// const mostUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_5tc9m3cl";
// const comingUrl = "https://imdb-api.com/en/API/ComingSoon/k_5tc9m3cl"
// const top250Url="https://imdb-api.com/en/API/Top250Movies/k_5tc9m3cl"
// const reviews = "https://imdb-api.com/en/API/Reviews/k_5tc9m3cl/tt1375666"
// const fullTitleUrl ="https://imdb-api.com/tr/API/Title/k_5tc9m3cl/"

// https://imdb-api.com/en/API/Title/k_5tc9m3cl/tt1375666/Posters,Ratings,



//---------------------------------------------------


const mostUrl = "./json/most.json"
const comingUrl = "./json/comicSoon.json"
const top250Url = "./json/top250.json"
const reviewsUrl = "./json/reviews.json"
const fullTitleUrl = "./json/fullTitle.json"


//---------------------------------------------------


async function imdbJson(url) {

    try {

        let json = await fetch(url);
        // console.log(json);

        if (json.ok) {
            let data = await json.json();
            // console.log(data);
            return data

        }
    } catch (error) {
        console.log(error);
    }
}


//---------------------------------------------------


async function topId(url) {

    let response = await imdbJson(url)
    let data = response.items

    // console.log(data)
    // console.log(data.id)

    let id250 = []

    data.forEach(item => {

        id250.push(item.id)

    });

    // console.log(id250)

    return id250
}

topId()


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
        // console.log(val)
        return val
    } else {
        let arr = val.split(" ")

        for (let i = 0; i < arr.length; i++) {

            sum += arr[i].length
            if (sum <= max) {
                ozet.push(arr[i])
            }
        }
        // console.log(ozet.join(" ") + "...")

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

document.querySelector("#str").innerHTML=star(8.4)