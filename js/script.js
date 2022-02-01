const most = document.getElementById("most");
const top250 = document.getElementById("top250");
const reviews = document.getElementById("reviews");



//---------------------------------------------------



// const mostUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_5tc9m3cl";
// const comingUrl = "https://imdb-api.com/en/API/ComingSoon/k_5tc9m3cl"
// const top250Url="https://imdb-api.com/en/API/Top250Movies/k_5tc9m3cl"
// const reviews = "https://imdb-api.com/en/API/Reviews/k_5tc9m3cl/tt1375666"
// const fullTitleUrl ="https://imdb-api.com/tr/API/Title/k_5tc9m3cl/tt1375666/Posters,Ratings,"

const mostUrl = "./json/most.json"
const comingUrl = "./json/comicSoon.json"
const top250Url = "./json/top250.json"
const reviewsUrl = "./json/reviews.json"
const fullTitleUrl = "./json/fullTitle.json"



//---------------------------------------------------





async function vision() {


  let data = await imdbJson(fullTitleUrl)


  most.innerHTML = `<div class="col">
                        <div class="card h-100">
                            <a href="https://www.imdb.com/title/${data.id}/" target="_blank">
                                <img src="${data.image}" class="card-img-top" alt="${data.title}">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${data.fullTitle}</h5>
                                <p class="card-text">${summerize(data.plotLocal,300)}</p>
                            </div>
                        </div>
                    </div>`
}

vision()


//---------------------------------------------------



async function offer(box) {


  let response = await imdbJson(top250Url)
  let data = response.items

  console.log(data)
  console.log(data[0]);

  let item = "";
  let rand = random(box, 250)

  for (let i = 0; i < box; i++) {

    item += `  <div class="col">
                  <div class="card h-100">
                      <a href="https://www.imdb.com/title/${data[rand[i]].id}/" target="_blank">
                          <img src="${data[rand[i]].image}" class="card-img" alt="${data[rand[i]].fullTitle}">
                      </a>
                      <div class="card-body">
                          <h5 class="card-title">${data[rand[i]].title}</h5>
                      </div>
                  </div>
                </div>`;

  }

  top250.innerHTML = item;
}

offer(12)



//---------------------------------------------------


async function reviewFunc(val) {

  let response = await imdbJson(reviewsUrl)
  let data = await response.items

  console.log(response.items)
  console.log(data[0])

  let item = ""
  let rand = random(val,25)

  for (let i = 0; i < val; i++) {

    item += `<div class="col my-2">
  <a href="${data[rand[i]].reviewLink}" class="list-group-item list-group-item-action h-100 d-flex gap-3 py-3" aria-current="true" target="_blank">
      <img src="img/pic1.png" height="32px" alt="">
      <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
              <h6 class="mb-0">${data[rand[i]].title}</h6>
              <p class="mb-0 opacity-75 ">${summerize(data[rand[i]].content,100)}</p>
          </div>
          <small class="opacity-50 text-nowrap">${data[rand[i]].rate?data[rand[i]].rate+'/10':''}</small>
      </div>
  </a>
</div>`
  }

  reviews.innerHTML = item


}

reviewFunc(6)





//---------------------------------------------------

