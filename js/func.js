const urlFixer = (id) => titleUrl + id + "?api_key=" + key + "&language=tr-TR"
const urlReview = (id) => titleUrl + id + "/reviews?api_key=" + key

//---------------------------------------------------


async function apiJson(url) {

    try {
        let json = await fetch(url);

        if (json.ok) {
            let data = await json.json();
            return data
        }

    } catch (error) {
        console.log(error);
    }
}


//---------------------------------------------------


async function idFunc(url) {

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