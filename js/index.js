const loadAiData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(response => response.json())
      .then(data => showData(data.data.tools.slice(0, 6)))
      toggleSpinner(true);
}

const showData = Elements =>{
       
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';
        const seeMore = document.getElementById('footer-btn')
        if(Elements.length > 6){
          seeMore.classList.add('d-none')

        }
        else{
          seeMore.classList.remove('d-none')
        }
        
    Elements.forEach(element => {
          console.log(element);
        const cardDiv = document.createElement('card')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card h-100">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">Features</h3>
          <p>1.${element.features[0]}</p>
          <p>2.${element.features[1]}</p>
          <p>3.${element.features[2]}</p>
          <h3 class="card-title">${element.name}</h3>
          <div class="d-flex justify-content-between">
              <div ><p id="date" class="">${element.published_in}</p></div>

              <button onclick="loadId('${element.id}')" type="button" class="bg-danger-secondary border border-0 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
             

          </div>
          
        </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
        
    });
    toggleSpinner(false);

    
};




// see more button :

const seeMore = () =>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response => response.json())
    .then(data => showData(data.data.tools))
};

// toggle spinner :



 const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('spinner');
    if(isLoading === true){
      loaderSection.classList.remove('d-none')

    }
    else{
      loaderSection.classList.add('d-none')
    }


 };


// date button :

// document.getElementById('dateButton').addEventListener('click', function(){
//   const date = document.getElementById('date');
//   date.classList.remove('d-none');
  
  
// })


// modal:

const loadId = id =>{
  
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id} `
     fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.data))
  
}

const displayData = article =>{
      console.log(article)
       const feat = Object.entries(features)
          console.log(feat)

      
      
     
  
  
       document.getElementById('first-modal').innerText = article.description
       document.getElementById('second-modal').innerText = article.image_link[0]
       document.getElementById('first-div').innerText = article.pricing[0].price
       document.getElementById('second-div').innerText = article.pricing[1].price
       document.getElementById('third-div').innerText = article.pricing[2].price

       document.getElementById('basic').innerText = article.pricing[0].plan
       document.getElementById('pro').innerText = article.pricing[1].plan
       document.getElementById('enterprise').innerText = article.pricing[2].plan

       

       document.getElementById('first-li').innerText = article.features[1].feature_name
       document.getElementById('second-li').innerText = article.features[2].feature_name
       document.getElementById('third-li').innerText = article.features[3].feature_name
       
        
      
}





  







