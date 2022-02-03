const most = document.getElementById("most");
const top250 = document.getElementById("top250");
const reviews = document.getElementById("reviews");

const w185 = "https://image.tmdb.org/t/p/w185/"
const w500 = "https://image.tmdb.org/t/p/w500/"


//---------------------------------------------------










//---------------------------------------------------


async function vision(box) {


  let id = await topId(trendList)

  console.log(id)

  let rand = random(box, 20)

  console.log(rand[0])
  console.log(id[rand[0]])



  let item = ""

  for (let i = 0; i < box; i++) {

    let data = await apiJson(urlFixer(id[rand[i]]))
    console.log(data)

    item += `<div class="col">
                <div class="card h-100">
                    <a href="${data.homepage?data.homepage:"#"}" target="_blank">
                        <img src="${w500+data.poster_path}" class="card-img-top" alt="${data.original_title}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title" alt="${data.vote_average}">${data.vote_average>0?star(data.vote_average):""}</h5>
                        <h5 class="card-title">${data.title} (${data.release_date.substr(0,4)})</h5>
                        <p class="card-text">${summerize(data.overview,300)}</p>
                    </div>
                </div>
            </div>`
  }

  most.innerHTML = item

}

vision(3)


//---------------------------------------------------



async function offer(box) {


  let response = await apiJson(mostUrl)

  // console.log(response)
  let data = response.results

  // console.log(data)
  // console.log(data[0]);

  let item = "";
  // let rand = random(box, 250)

  for (let i = 0; i < box; i++) {

    item += `  <div class="col">
                  <div class="card h-100">
                  
                      <a href="#" target="_blank">
                          <img src="${w185+data[i].poster_path}" class="card-img" alt="${data[i].original_title}">
                      </a>
                      <div class="card-body text-center">
                          
                          <h5 class="text-warning">${star(data[i].vote_average)}</h5>
                          <p class="card-title fs-6">${data[i].title}</p>
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
  let rand = random(val, 25)

  for (let i = 0; i < val; i++) {

    item += `<div class="col my-2">
                <a href="${data[rand[i]].reviewLink}" class="list-group-item list-group-item-action h-100 d-flex gap-3 py-3" aria-current="true" target="_blank">
                    <img src="img/pic${i}.png" height="32px" alt="">
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

// reviewFunc(6)





//---------------------------------------------------