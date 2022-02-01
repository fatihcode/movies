// const mostUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_5tc9m3cl";
// const comingUrl = "https://imdb-api.com/en/API/ComingSoon/k_5tc9m3cl"
// const fullTitleUrl ="https://imdb-api.com/tr/API/Title/k_5tc9m3cl/tt1375666/Posters,Ratings,"
// const top250Url="https://imdb-api.com/en/API/Top250Movies/k_5tc9m3cl"
// const reviews = "https://imdb-api.com/en/API/Reviews/k_5tc9m3cl/tt1375666"

const mostUrl = "./json/most.json"
const comingUrl = "./json/comicSoon.json"
const fullTitleUrl = "./json/fullTitle.json"
const top250Url = "./json/top250.json"
const reviews = "./json/reviews.json"



const most = document.getElementById("most");
const top250 = document.getElementById("top250");

async function imdbJson() {

  try {

    let json = await fetch(mostUrl);
    console.log(json);

    if (json.ok) {

      let data = await json.json();
      console.log(data);
      top250func(data.items);

    }
  } catch (error) {

    console.log(error);

  }

}

imdbJson();




async function top250func(data) {


  console.log(data[0]);

  let item = "";

  for (let i = 0; i < 12; i++) {

    item += `  <div class="col">
                  <div class="card">
                      <a href="#">
                          <img src="${data[i].image}" class="card-img" alt="${data[i].fullTitle}">
                      </a>
                      <div class="card-body">
                          <h5 class="card-title">${data[i].title}</h5>
                      </div>
                  </div>
                </div>`;

  }

  top250.innerHTML = item;
}


async function vision(data) {



}





{
  /* <div class="col">
        <div id="${data[i].id}" class="card h-100">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${data[i].fullTitle}</h5>
                <p class="card-text">${data[i].crew}</p>
                <p class="card-text">${data[i].imDbRating}</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-primary btn-sm w-100">Film Detayları</button>
            </div>
        </div>
    </div> */
}