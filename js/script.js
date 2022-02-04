slide(10)
vision(3)
offer(12)
artist(12)
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
                        <h3 class="shade">${data.title} (${data.release_date.substr(0,4)})</h3>
                        <h6 class="shade">${data.tagline?data.tagline+" | ":""}${data.genres.map(item=>item.name).join(", ")} | ${Math.floor(data.runtime/60)+"h "+(data.runtime%60)+"m"}</h6>        
                    </div>
                </a>
            </div>`

    caro += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${i==0?`class="active" aria-current="true"`:""} aria-label="Slide ${i}"></button>`
  }
  crousel.innerHTML = caro
  slider.innerHTML = item + `<div style="position: absolute; z-index: 0; bottom: 0px; height: 125px;" class="bg-light w-100 bg-opacity-25 justify-content-center"></div>`
}


//---------------------------------------------------


async function vision(box) {

  let id = await idFunc(trendList)
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
                        <h5 class="card-title text-warning" alt="${data.vote_average}">${data.vote_average>0?star(data.vote_average):""}</h5>
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

  let response = await apiJson(urlReview(634649))
  let data = await response.results
  let item = ""
  let img = ""

  data.length < val ? val = data.length : ""

  for (let i = 0; i < val; i++) {

    if (data[i].author_details.avatar_path != null) {

      if (data[i].author_details.avatar_path.substr(1, 4) == "http") {
        img = data[i].author_details.avatar_path.substr(1)
      } else {
        img = w185 + data[i].author_details.avatar_path
      }

    } else {
      img = `img/pic${i}.png`
    }


    item += `<div class="col my-2">
                <a href="${data[i].url?data[i].url:"#"}" class="list-group-item list-group-item-action h-100 d-flex gap-3 py-3" aria-current="true" target="_blank">
                    <img src="${img}" class="rounded-circle" height="32px" alt="">
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

{
  /* <small class="opacity-50 text-nowrap">${data[i].created_at}</small> */
}

//---------------------------------------------------