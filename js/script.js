const most = document.getElementById("most");
const top250 = document.getElementById("top250");
const reviews = document.getElementById("reviews");



//---------------------------------------------------



async function vision(box) {

  
  
  let id = await topId(mostUrl)
  console.log(id)
  
  let rand = random(box, 100)


  
  console.log(rand[0])
  console.log(id[rand[0]])
  
  let item = ""

  for (let i = 0; i < box; i++) {
    
    //let data = await imdbJson(`${fullTitleUrl}${id[rand[i]]}/Posters,Ratings,`)
    let data = await imdbJson(fullTitleUrl)

    item += `<div class="col">
                        <div class="card h-100">
                            <a href="https://www.imdb.com/title/${data.id}/" target="_blank">
                                <img src="${data.image}" class="card-img-top" alt="${data.title}">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title" alt="${data.imDbRating}">${star(data.imDbRating)}</h5>
                                <h5 class="card-title">${data.fullTitle}</h5>
                                <p class="card-text">${summerize(data.plotLocal,300)}</p>
                            </div>
                        </div>
                    </div>`
  }

  most.innerHTML = item

}

vision(3)


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
                      <div class="card-body text-center">
                          
                          <h5 class="text-warning">${star(data[rand[i]].imDbRating)}</h5>
                          <p class="card-title fs-6">${data[rand[i]].title}</p>
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

reviewFunc(6)





//---------------------------------------------------