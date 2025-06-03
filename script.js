const key = 'e004d7df456b47dfb405405925412c88';
const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`;


let requiredData = {};
let filled = false


const getData = async () => {
  const existingResults = document.getElementById('results');

  if (filled && existingResults) {

    existingResults.remove();
    filled = false;
    return;
  }

  try {
    const data = await fetch(url);
    if (!data.ok) throw new Error('Network response was not ok');

    const json = await data.json();
    console.log(json);

    json.recipes.forEach((item) => {
      requiredData = {
        title: item.title,
        image: item.image,
        readyInMinutes: item.readyInMinutes,
        servings: item.servings,
        sourceurl: item.sourceUrl,
      };

      const results = document.createElement('div');
      results.id = 'results';
      document.body.appendChild(results);

      const imageContainer = document.createElement('img');
      imageContainer.src = requiredData.image;
      imageContainer.id = 'imageContainer';
      results.appendChild(imageContainer);

      const contentContainer = document.createElement('div');
      contentContainer.id = 'contentContainer';
      results.appendChild(contentContainer);

      const titlep = document.createElement('p');
      titlep.id = 'title';
      titlep.textContent = requiredData.title;
      contentContainer.appendChild(titlep);

      const readyInMinutesp = document.createElement('p');
      readyInMinutesp.textContent = `Ready in ${requiredData.readyInMinutes} minutes`;
      contentContainer.appendChild(readyInMinutesp);

      const servingsp = document.createElement('p');
      servingsp.textContent = `Serves: ${requiredData.servings}`;
      contentContainer.appendChild(servingsp);

      const sourceurlp = document.createElement('a');
      sourceurlp.textContent = 'VIEW RECIPE';
      sourceurlp.href = requiredData.sourceurl;
      sourceurlp.target = '_blank';
      contentContainer.appendChild(sourceurlp);
    });

    filled = true;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};


