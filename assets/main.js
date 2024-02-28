fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
  .then(response => response.json())
  .then(jsonData => {
    let htmlString = `<table>
                        <tr id="labels_table">
                        <th>Name</th>
                            <th>ID</th>
                            <th>Energy (kJ)</th>
                            <th>Protein (g)</th>
                            <th>Saturated Fat (g)</th>
                            <th>Trans Fat (g)</th>
                            <th>Poly Fat (g)</th>
                            <th>Mono Fat (g)</th>
                            <th>Carbohydrate (g)</th>
                            <th>Sugars (g)</th>
                            <th>Fibre (g)</th>
                            <th>Sodium (mg)</th>
                            <th>Potassium (mg)</th>
                            <th>Calcium (mg)</th>
                            <th>Vit E (mg)</th>
                            <th>Fat (g)</th>
                            <th>Magnesium (mg)</th>
                            <th>Tags</th>
                        </tr>`;

    jsonData.forEach(food => {
      htmlString += `<tr>
                        <td id="names">${food.name}</td>
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
                        <td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].magnesium? food['nutrition-per-100g'].magnesium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].magnesium? food['nutrition-per-100ml'].magnesium : '-'}</td>`
                        food.tags ? food.tags.forEach(tag =>{
                          switch (tag) {
                            case "grain":
                              htmlString+= `<td class="tagslabel-brown">${tag}</td>`
                              break;
                            case "carb":
                              htmlString+= `<td class="tagslabel-red">${tag}</td>`
                              break;
                            case "snack":
                              htmlString+= `<td class="tagslabel-purple">${tag}</td>`
                              break;
                            case "legume":
                              htmlString+= `<td class="tagslabel-yellow">${tag}</td>`
                              break;
                            case "nut":
                              htmlString+= `<td class="tagslabel-darkbrown">${tag}</td>`
                              break;
                            case "seed":
                              htmlString+= `<td class="tagslabel-lightorange">${tag}</td>`
                              break;
                            case "fruit":
                              htmlString+= `<td class="tagslabel-lightgreen">${tag}</td>`
                              break;
                              case "vegetable":
                                htmlString+= `<td class="tagslabel-darkgreen">${tag}</td>`
                                break;
                                case "leafy green vegetable":
                                  htmlString+= `<td class="tagslabel-blue">${tag}</td>`
                                  break;
                                  case "leafy green vegetable":
                                    htmlString+= `<td class="tagslabel-pastelgreen">${tag}</td>`
                                    break;
                                    case "superfood":
                                      htmlString+= `<td class="tagslabel-pink">${tag}</td>`
                                      break;
                                      case "bread":
                                        htmlString+= `<td class="tagslabel-orange">${tag}</td>`
                                        break;
                                        case "supplement":
                                          htmlString+= `<td class="tagslabel-lightpink">${tag}</td>`
                                          break;
                          }
                     /*     htmlString+= `<td class="tagslabel">${tag}</td>`*/
                        }) : '';
                        `</tr>`;
    });



    htmlString += `</table><br><div id="recordsfound">(${jsonData.length} records found.)</div>`;
    document.getElementById('json-data').innerHTML = htmlString;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

