fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
  .then(response => response.json())
  .then(jsonData => {
    let htmlString = `<table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Energy</th>
                            <th>Protein</th>
                            <th>Saturated Fat</th>
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
                            <!-- Add other table headers as needed -->
                        </tr>`;

    jsonData.forEach(food => {
      htmlString += `<tr>
                        <td>${food.id}</td>
                        <td>${food.name}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].energy ? food['nutrition-per-100g'].energy : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].protein ? food['nutrition-per-100g'].protein : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['saturated-fat'] ? food['nutrition-per-100g']['saturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['trans-fat'] ? food['nutrition-per-100g']['trans-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['polyunsaturated-fat'] ? food['nutrition-per-100g']['polyunsaturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['monounsaturated-fat'] ? food['nutrition-per-100g']['monounsaturated-fat'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].carbohydrate ? food['nutrition-per-100g'].carbohydrate : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sugars ? food['nutrition-per-100g'].sugars : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['dietary-fibre'] ? food['nutrition-per-100g']['dietary-fibre'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sodium ? food['nutrition-per-100g'].sodium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].potassium ? food['nutrition-per-100g'].potassium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].calcium ? food['nutrition-per-100g'].calcium : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e'] ? food['nutrition-per-100g']['vitamin-e'] : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].fat ? food['nutrition-per-100g'].fat : '-'}</td>
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].magnesium ? food['nutrition-per-100g'].magnesium : '-'}</td>
                    </tr>`;
    });

    htmlString += `</table><br>${jsonData.length} records found.`;
    document.getElementById('json-data').innerHTML = htmlString;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
