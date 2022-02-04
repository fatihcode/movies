const most = document.getElementById("most");
const top250 = document.getElementById("top250");
const reviews = document.getElementById("reviews");
const slider = document.getElementById("slider");
const crousel = document.getElementById("crousel")
const person = document.getElementById("person")

const w185 = "https://image.tmdb.org/t/p/w185"
const w500 = "https://image.tmdb.org/t/p/w500"
const w1280 = "https://image.tmdb.org/t/p/w1280"
const face = "https://www.themoviedb.org/t/p/w220_and_h330_face"
const best = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
const art = "https://www.themoviedb.org/t/p/w138_and_h175_face"



// slide(10)
// vision(3)
// offer(12)
// artist(12)
reviewFunc(6)
//---------------------------------------------------


async function slide(box) {

  let id = choice
  let rand = random(box, 10)
  let item = ""
  let caro = ""

  for (let i = 0; i < box; i++) {

    let data = await apiJson(urlFixer(id[rand[i]]))

    item += `<div class="carousel-item ${i==0?"active":""}">
                <a href="${data.homepage?data.homepage:"#"}" target="_blank">
                    <img src="${w1280+data.backdrop_path}" class="d-block w-100" title="${data.original_title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${data.title} (${data.release_date.substr(0,4)})</h5>
                        <p>${data.tagline?data.tagline+" | ":""}${data.genres.map(item=>item.name).join(", ")}</p>        
                    </div>
                </a>
            </div>`

    caro += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${i==0?`class="active" aria-current="true"`:""} aria-label="Slide ${i}"></button>`
  }
  crousel.innerHTML = caro
  slider.innerHTML = item + `<div style="position: absolute; z-index: 0; bottom: 0px; height: 120px;" class="bg-light w-100 bg-opacity-25 justify-content-center"></div>`
}


//---------------------------------------------------


async function vision(box) {

  let id = await topId(trendList)
  let rand = random(box, 20)
  let item = ""

  for (let i = 0; i < box; i++) {

    let data = await apiJson(urlFixer(id[rand[i]]))

    item += `<div class="col">
                <div class="card h-100">
                    <a href="${data.homepage?data.homepage:"#"}" target="_blank">
                        <img src="${best+data.poster_path}" class="card-img-top h-100" title="${data.original_title}" style="object-fit: cover;">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title" alt="${data.vote_average}">${data.vote_average>0?star(data.vote_average):""}</h5>
                        <h5 class="card-title">${data.title} (${data.release_date.substr(0,4)})</h5>
                        <p class="card-text">${summerize(data.overview,200)}</p>
                    </div>
                </div>
            </div>`
  }
  most.innerHTML = item
}


//---------------------------------------------------


async function offer(box) {

  let response = await apiJson(mostUrl)
  let data = response.results
  let item = "";
  // let rand = random(box, 250)

  for (let i = 0; i < box; i++) {

    item += `  <div class="col">
                  <div class="card">
                      <a href="#" target="_blank">
                          <img src="${face+data[i].poster_path}" class="card-img" title="${data[i].original_title}">
                      </a>
                      
                  </div>
                </div>`;
  }
  top250.innerHTML = item;
}

{
  /* <div class="card-body text-center">
  <h5 class="text-warning">${star(data[i].vote_average)}</h5>
  <p class="card-title fw-bold">${data[i].title}</p>
  </div> */
}

//---------------------------------------------------

async function artist(box) {

  let response = await apiJson(artistUrl)
  let data = response.results
  console.log(data)
  let item = "";
  // let rand = random(box, 250)

  for (let i = 0; i < box; i++) {

    item += `  <div class="col">
                  <div class="card">
                      <a href="#"  class="text-muted text-decoration-none" target="_blank">
                          <img src="${art+data[i].profile_path}" class="card-img gray" title="${data[i].name}">
                          <div class="text-center p-2">
                          <span class="fw-bold">${data[i].name}</span>
                          </div>
                      </a>
                      
                  </div>
                </div>`;
  }
  person.innerHTML = item;
}




//---------------------------------------------------


async function reviewFunc(val) {

  let id = await topId(trendList)

  console.log(id)

  let rand = random(1, 20).join()
  console.log(rand)

  let response = await apiJson(urlReview(id[rand]))
  console.log(response)
  let data = await response.results
  console.log(data)

  let item = ""
  let img = ""
  data.length < val ? val = data.length : ""


  for (let i = 0; i < val; i++) {




    if (data[i].author_details.avatar_path.length > 50) {
      img = data[i].author_details.avatar_path.substr(1)
    } else {
      img = w185 + data[i].author_details.avatar_path
    }

    item += `<div class="col my-2">
                <a href="${data[i].url?data[i].url:`img/pic${i}.png`}" class="list-group-item list-group-item-action h-100 d-flex gap-3 py-3" aria-current="true" target="_blank">
                    <img src="${img}" class="rounded-circle" height="32px" alt="">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 class="mb-0">${data[i].author}</h6>
                            <h6 class="mb-0">${data[i].author_details.rating>0?star(data[i].author_details.rating):""}</h6>

                            <p class="mb-0 opacity-75 ">${summerize(data[i].content,150)}</p>
                        </div>
                    </div>
                </a>
             </div>`
  }
  reviews.innerHTML = item
}

{
  /* <small class="opacity-50 text-nowrap">${data[i].created_at}</small> */ }

//---------------------------------------------------