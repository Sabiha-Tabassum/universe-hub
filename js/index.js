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
              <p class="d-none">${element.published_in}</p>
              <button class="bg-danger-secondary border border-0 rounded-pill"><i class="fa-solid fa-arrow-right"></i></button>

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


