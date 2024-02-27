fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
  .then(response => response.json())
  .then(jsonData => {
    let htmlString = `<table>
                        <tr id="labels_table">                            <th>Name</th>

                            <th>ID</th>
                            <th>Energy</th>
                            <th>Protein</th>
                            <th>Sat Fat</th>
                            <th>Trans Fat</th>
                            <th>Poly Fat</th>
                            <th>Mono Fat</th>
                            <th>Carb</th>
                            <th>Sugars</th>
                            <th>Fibre</th>
                            <th>Sodium</th>
                            <th>Potassium</th>
                            <th>Calcium</th>
                            <th>Vit E</th>
                            <th>Fat</th>
                            <th>Magnesium</th>
                        </tr>`;

    jsonData.forEach(food => {
      htmlString += `<tr>
                        <td>${food.name}</td>
                        <td>${food.id}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].energy? food['nutrition-per-100g'].energy : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].energy? food['nutrition-per-100ml'].energy : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].protein? food['nutrition-per-100g'].protein : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].protein? food['nutrition-per-100ml'].protein : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['saturated-fat']? food['nutrition-per-100g']['saturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['saturated-fat']? food['nutrition-per-100ml']['saturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['trans-fat']? food['nutrition-per-100g']['trans-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['trans-fat']? food['nutrition-per-100ml']['trans-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['polyunsaturated-fat']? food['nutrition-per-100g']['polyunsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['polyunsaturated-fat']? food['nutrition-per-100ml']['polyunsaturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['mononunsaturated-fat']? food['nutrition-per-100g']['monounsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['monounsaturated-fat']? food['nutrition-per-100ml']['monounsaturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].carbohydrate? food['nutrition-per-100g'].carbohydrate : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].carbohydrate? food['nutrition-per-100ml'].carbohydrate : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sugars? food['nutrition-per-100g'].sugars : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sugars? food['nutrition-per-100ml'].sugars : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['dietary-fibre']? food['nutrition-per-100g']['dietary-fibre'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['dietary-fibre']? food['nutrition-per-100ml']['dietary-fibre'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sodium? food['nutrition-per-100g'].sodium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sodium? food['nutrition-per-100ml'].sodium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].potassium? food['nutrition-per-100g'].potassium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].potassium? food['nutrition-per-100ml'].potassium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].calcium? food['nutrition-per-100g'].calcium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].calcium? food['nutrition-per-100ml'].calcium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e']? food['nutrition-per-100g']['vitamin-e'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-e']? food['nutrition-per-100ml']['vitamin-e'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].fat? food['nutrition-per-100g'].fat : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].fat? food['nutrition-per-100ml'].fat : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].magnesium? food['nutrition-per-100g'].magnesium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].magnesium? food['nutrition-per-100ml'].magnesium : '-'}</td>
                    </tr>`;
    });

    htmlString += `</table><br>${jsonData.length} records found.`;
    document.getElementById('json-data').innerHTML = htmlString;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
