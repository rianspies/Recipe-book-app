const key = 'e004d7df456b47dfb405405925412c88';
const url = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${key}`;
let results = document.getElementById('results')

let requiredData = '';


const getData = async () =>{
    try {
        let data = await fetch(url)
        if (data.ok) {
         
         const json =  await data.json([]);
         console.log(json);
         json.map((item, index) => {
            const title = item.recipes[index].title
         })
         requiredData = {
            title: title, 
            image: json.recipes[0].image, 
            instructions: json.recipes[0].instructions,
            readyInMinutes: json.recipes[0].readyInMinutes,
            servings: json.recipes[0].servings,
            sourceurl: json.recipes[0].sourceurl, 
            summary: json.recipes[0].summary};

         let div = document.createElement("p");
         div.textContent = requiredData.title;
         results.appendChild(div);
         
        }
    } catch (error) {
        console.log(error)
    };
    
};


