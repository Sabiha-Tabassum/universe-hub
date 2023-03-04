const loadAiData = async () =>{
  toggleSpinner(true);
   const url = `https://openapi.programming-hero.com/api/ai/tools`
   const res = await fetch(url);
   const data = await res.json();
   showData(data.data.tools.slice(0, 6));
    
      
    
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
              <div ><p id="date" class=""><i class="fa-regular fa-calendar-check me-2"></i>${element.published_in}</p></div>

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
  // const dateButton = async () =>{
  //   const url = `https://openapi.programming-hero.com/api/ai/tools`
  //  const res = await fetch(url);
  //  const data = await res.json();
  //     console.log(data.data.tools);

  // }
 
   
  
  
// })


// modal:

const loadId = async (id) =>{
  
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id} `
   const res = await fetch(url);
   const data = await res.json();
   displayData(data.data);

    
  
}

const displayData = article =>{
      console.log(article)
       const feat = Object.entries(features)
          console.log(feat)

      
      
     
  
  
       document.getElementById('first-modal').innerText = article.description
       document.getElementById('second-modal').innerHTML = `<img class="img-fluid" src="${article.image_link[0]}">`
       
       document.getElementById('first-div').innerText = article.pricing ? article.pricing[0].price : 'Free of cost'
       document.getElementById('second-div').innerText = article.pricing ? article.pricing[1].price : 'Free of cost'
       document.getElementById('third-div').innerText = article.pricing ? article.pricing[2].price : 'Free of cost'

       document.getElementById('basic').innerText = article.pricing ? article.pricing[0].plan : 'basic'
       document.getElementById('pro').innerText = article.pricing ? article.pricing[1].plan : 'pro'
       document.getElementById('enterprise').innerText = article.pricing ? article.pricing[2].plan : 'enterprise'

       

       document.getElementById('first-li').innerText = article.features[1].feature_name
       document.getElementById('second-li').innerText = article.features[2].feature_name
       document.getElementById('third-li').innerText = article.features[3].feature_name

       document.getElementById('first-int').innerText = article.integrations ? article.integrations[0] : 'No data found'
       document.getElementById('second-int').innerText = article.integrations ? article.integrations[1]  : 'No data found'
       document.getElementById('third-int').innerText = article.integrations ? article.integrations[2] : 'No data found'
       

       document.getElementById('accuracy').innerText = article.accuracy.score
       document.getElementById('input').innerText = article.input_output_examples ? article.input_output_examples[0].input : 'No! Not Yet! Take a break!!!'

       document.getElementById('output').innerText = article.input_output_examples ?  article.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'
        
      
}





  







