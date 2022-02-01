
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

  
async function top250Id() {

    let response = await imdbJson(top250Url)
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
  
  top250Id()
  
  
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