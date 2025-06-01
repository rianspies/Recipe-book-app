const key = 'e004d7df456b47dfb405405925412c88';
const url = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${key}`;
let results = document.getElementById('results')

let requiredData = {};


const getData = async () =>{
    try {
        let data = await fetch(url)
        if (data.ok) {
         
         const json =  await data.json();
         console.log(json);
         json.recipes.map((item) => {
            const title = item.title;
            const image = item.image;
            const readyInMinutes = item.readyInMinutes;
            const servings = item.servings;
            const sourceurl = item.sourceUrl;

            requiredData = {
                title: title, 
                image: image, 
                readyInMinutes: readyInMinutes,
                servings: servings,
                sourceurl: sourceurl, 
            };

            let titlep = document.createElement("p");
            titlep.textContent = requiredData.title;
            results.appendChild(titlep);

            let imagec = document.createElement('img');
            imagec.src = requiredData.image;
            imagec.style.width = '15%';
            results.appendChild(imagec);

            let readyInMinutesp = document.createElement('p');
            readyInMinutesp.textContent = `Ready in ${requiredData.readyInMinutes} minutes`;
            results.appendChild(readyInMinutesp);

            let servingsp = document.createElement('p');
            servingsp.textContent = `Serves: ${requiredData.servings}`;
            results.appendChild(servingsp);

            let sourceurlp = document.createElement('a');
            sourceurlp.textContent = 'view recipe';
            sourceurlp.href = requiredData.sourceurl;
            sourceurlp.target = '_blank'
            results.appendChild(sourceurlp);
        });
         
            

         
         
        }
    } catch (error) {
        console.log(error)
    };
    
};


