const loadAiData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(response => response.json())
      .then(data => showData(data.data.tools))
}

const showData = Elements =>{
        const cardContainer = document.getElementById('card-container');
        Elements = Elements.slice(0, 6);
    Elements.forEach(element => {
        console.log(element);
        
        
    });


}