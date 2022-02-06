async function sliderFunc(box) {

  let id = choice
  let rand = random(box, 25)
  let item = ""
  let slide = ""

  for (let i = 0; i < box; i++) {

    let data = await apiJson(urlMovie(id[rand[i]]))

    item += `<div class="carousel-item ${i==0?"active":""}">
                <a href="${data.homepage?data.homepage:"#"}" target="_blank">
                    <img src="${image+"w1280"+data.backdrop_path}" class="d-block w-100" title="${data.tagline}">
                    <div class="carousel-caption d-none d-md-block">
                        <h3 class="shade">${data.title} (${data.release_date.substr(0,4)})</h3>
                        <h6 class="shade">${data.genres.map(item=>item.name).join(", ")} | ${Math.floor(data.runtime/60)+"h "+(data.runtime%60)+"m"}</h6>
                    </div>
                </a>
            </div>`

    slide += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${i==0?`class="active" aria-current="true"`:""} aria-label="Slide ${i}"></button>`
  }
  crousel.innerHTML = slide
  slider.innerHTML = item + `<div class="d-none d-md-block position-absolute bottom-0 bg-light w-100 bg-opacity-25" style="height: 125px;"></div>`
}

//---------------------------------------------------

async function trendFunc(box) {

  let id = await idFunc(urlTrend())
  let item = ""
  let m = 0

  for (let i = 0; i < box; i++) {

    let rand = random(40, 40)
    let data = await apiJson(urlMovie(id[rand[m]]))
    m++

    if (data.overview !== "") {

      item += `<div class="col">
                  <div class="card h-100">
                      <a href="${data.homepage?data.homepage:"#"}" target="_blank">
                          <img src="${best+data.poster_path}" class="card-img-top h-100" title="${data.original_title}" style="object-fit: cover;">
                      </a>
                      <div class="card-body">
                          <h5 class="card-title text-warning" alt="${data.vote_average}">${data.vote_average>0?star(data.vote_average):""}</h5>
                          <h5 class="card-title">${data.title} (${data.release_date.substr(0,4)})</h5>
                          <p class="card-text">${summerize(data.overview,200)}</p>
                      </div>
                  </div>
              </div>`

    } else {
      i--
    }
  }
  trend.innerHTML = item
}

//---------------------------------------------------

async function featuredFunc(box) {

  let response = await apiJson(urlPopular())
  let data = response.results
  let item = "";
  let rand = random(box, 20)

  for (let i = 0; i < box; i++) {

    item += `  <div class="col">
                  <div class="card h-100">
                      <a href="${tmdb+"movie/"+data[rand[i]].id}" target="_blank">
                          <img src="${face+data[rand[i]].poster_path}" class="card-img" title="${data[rand[i]].original_title}">
                      </a>
                      <div class="card-body">
                          <h6 class="card-title text-warning" alt="${data[rand[i]].vote_average}">${data[rand[i]].vote_average>0?star(data[rand[i]].vote_average):""}</h6>
                          <h6 class="card-title">${data[rand[i]].title} (${data[rand[i]].release_date.substr(0,4)})</h6>
                      </div>
                  </div>
                </div>`;
  }
  featured.innerHTML = item;
}

//---------------------------------------------------

async function artistFunc(box) {

  let response = await apiJson(urlArtist())
  let data = response.results
  let item = "";

  for (let i = 0; i < box; i++) {

    item += `<div class="d-flex m-2">
                <div class="card c140">
                    <a href="${tmdb+"person/"+data[i].id}" class="text-muted text-decoration-none" target="_blank">
                        <img src="${art+data[i].profile_path}" class="card-img gray" title="${data[i].name}">
                        <div class="text-center p-2">
                            <span class="fw-bold">${data[i].name}</span>
                        </div>
                    </a>
                </div>
             </div>`;
  }
  artist.innerHTML = item;
}

//---------------------------------------------------

async function reviewFunc(box) {

  let response = await apiJson(urlReview(278))
  let data = await response.results
  let item = ""
  let img = ""

  data.length < box ? box = data.length : ""

  for (let i = 0; i < box; i++) {

    if (data[i].author_details.avatar_path != null) {

      if (data[i].author_details.avatar_path.substr(1, 4) == "http") {
        img = data[i].author_details.avatar_path.substr(1)
      } else {
        img = image + "w185" + data[i].author_details.avatar_path
      }

    } else {
      img = `img/pic${i}.png`
    }


    item += `<div class="col my-2">
                <a href="${data[i].url?data[i].url:"#"}" class="list-group-item list-group-item-action h-100 d-flex gap-3 py-3" aria-current="true" target="_blank">
                    <img src="${img}" class="rounded-circle" height="40px" alt="">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 class="mb-0">${data[i].author} <small class="opacity-50 text-nowrap">${data[i].created_at.substr(11,8)}</small></h6>
                            <h6 class="mb-0 text-muted">${data[i].author_details.rating>0?star(data[i].author_details.rating):""}</h6>
                            <p class="mb-0 opacity-75 ">${summerize(data[i].content,150)}</p>
                        </div>
                    </div>
                </a>
             </div>`
  }
  reviews.innerHTML = item
}

//---------------------------------------------------

sliderFunc(10)
trendFunc(3)
featuredFunc(12)
artistFunc(8)
reviewFunc(6)