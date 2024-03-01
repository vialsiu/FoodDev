let foods = [];
let lastSortColumnName = "Name";
let sortAscendingOrder = true;
//!! checkboxes for nutritions and tags !!
let nutritions = ['Energy', 'Protein', 'Sat Fat', 'Trans Fat', 'Poly Fat', 'Mono Fat', 'Carbohydrates', 'Sugars', 'Fibre', 'Sodium', 'Potassium', 'Calcium', 'Vit E', 'Fat', 'Magnesium'];
let nutritionsCheckboxes = nutritions.sort();
let foodTags = ['Grain', 'Carb', 'Snack', 'Legume', 'Nut', 'Seed', 'Fruit', 'Vegetable', 'Superfood', 'Leafy Green Vegetable', 'Bread', 'Supplement'];
let foodTagsCheckboxes = foodTags.sort();

let searchValue = "";
function search(value) {
    searchValue = value;
    displayTable(foods);
}
function displayNutrsCheckboxes() {
    let htmlString = "";

    nutritionsCheckboxes.forEach(nutrition => {
        htmlString += `<label for="${nutrition}">${nutrition}</label>
                                <input id="${nutrition}" type="checkbox" checked="true" onclick="displayTable(foods)"/>`;
    });
    document.getElementById("Nutrscheckbox-container").innerHTML = htmlString;
}
function displayFTagCheckboxes() {
    let htmlString = "";

    foodTagsCheckboxes.forEach(foodTag => {
        htmlString += `<label for="${foodTag}">${foodTag}</label>
                                <input id="${foodTag}" value="${foodTag}" type="checkbox" checked="true" onclick="search(this.value)"/>`;
        console.log(foodTag);
    });
    document.getElementById("FTagcheckbox-container").innerHTML = htmlString;
}

fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
        .then(response => response.json())
        .then(jsonData => {
            foods = jsonData;
            displayNutrsCheckboxes();
            displayFTagCheckboxes();
            displayTable(foods);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

function displayTable(selectedFoods) {
    let keys = Object.keys(foods[0]);

    let htmlString = `<table>
                        <tr id="labels_table">
                            <th onclick=sort("Name")>Name `;
    if (lastSortColumnName === 'Name')
    {
        htmlString += sortAscendingOrder ? "▲" : "▼";
    }
    htmlString += `</th>

                            <th onclick=sort("ID")>ID`;
    if (lastSortColumnName === 'ID')
    {
        htmlString += sortAscendingOrder ? "▲" : "▼";
    }
    htmlString += `</th>`;

    if (document.getElementById("Energy").checked) {
        htmlString += `<th>Energy</th>`;
    }
    if (document.getElementById("Protein").checked) {
        htmlString += `<th>Protein</th>`;
    }
    if (document.getElementById("Sat Fat").checked) {
        htmlString += `<th>Sat Fat</th>`;
    }
    if (document.getElementById("Trans Fat").checked) {
        htmlString += `<th>Trans Fat</th>`;
    }
    if (document.getElementById("Poly Fat").checked) {
        htmlString += `<th>Poly Fat</th>`;
    }
    if (document.getElementById("Mono Fat").checked) {
        htmlString += `<th>Mono Fat</th>`;
    }
    if (document.getElementById("Carbohydrates").checked) {
        htmlString += `<th>Carbohydrates</th>`;
    }
    if (document.getElementById("Sugars").checked) {
        htmlString += `<th>Sugars</th>`;
    }
    if (document.getElementById("Fibre").checked) {
        htmlString += `<th>Fibre</th>`;
    }
    if (document.getElementById("Sodium").checked) {
        htmlString += `<th>Sodium</th>`;
    }
    if (document.getElementById("Potassium").checked) {
        htmlString += `<th>Potassium</th>`;
    }
    if (document.getElementById("Calcium").checked) {
        htmlString += `<th>Calcium</th>`;
    }
    if (document.getElementById("Vit E").checked) {
        htmlString += `<th>Vit E</th>`;
    }
    if (document.getElementById("Fat").checked) {
        htmlString += `<th>Fat</th>`;
    }
    if (document.getElementById("Magnesium").checked) {
        htmlString += `<th>Magnesium</th>`;
    }
    htmlString += `<th>Tags</th>
                            </tr>`;

    selectedFoods.forEach(food => {
        htmlString += `<tr>
                        <td id="names">${food.name}</td>
                        <td>${food.id}</td>`;
        if (document.getElementById("Energy").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].energy ? food['nutrition-per-100g'].energy : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].energy ? food['nutrition-per-100ml'].energy : '-'}</td>`;
        }
        if (document.getElementById("Protein").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].protein ? food['nutrition-per-100g'].protein : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].protein ? food['nutrition-per-100ml'].protein : '-'}</td>`;
        }
        if (document.getElementById("Sat Fat").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['saturated-fat'] ? food['nutrition-per-100g']['saturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['saturated-fat'] ? food['nutrition-per-100ml']['saturated-fat'] : '-'}</td>`;
        }
        if (document.getElementById("Trans Fat").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['trans-fat'] ? food['nutrition-per-100g']['trans-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['trans-fat'] ? food['nutrition-per-100ml']['trans-fat'] : '-'}</td>`;
        }
        if (document.getElementById("Poly Fat").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['polyunsaturated-fat'] ? food['nutrition-per-100g']['polyunsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['polyunsaturated-fat'] ? food['nutrition-per-100ml']['polyunsaturated-fat'] : '-'}</td>`;
        }
        if (document.getElementById("Mono Fat").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['mononunsaturated-fat'] ? food['nutrition-per-100g']['monounsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['monounsaturated-fat'] ? food['nutrition-per-100ml']['monounsaturated-fat'] : '-'}</td>`;
        }
        if (document.getElementById("Carbohydrates").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].carbohydrate ? food['nutrition-per-100g'].carbohydrate : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].carbohydrate ? food['nutrition-per-100ml'].carbohydrate : '-'}</td>`;
        }
        if (document.getElementById("Sugars").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sugars ? food['nutrition-per-100g'].sugars : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sugars ? food['nutrition-per-100ml'].sugars : '-'}</td>`;
        }
        if (document.getElementById("Fibre").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['dietary-fibre'] ? food['nutrition-per-100g']['dietary-fibre'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['dietary-fibre'] ? food['nutrition-per-100ml']['dietary-fibre'] : '-'}</td>`;
        }
        if (document.getElementById("Sodium").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sodium ? food['nutrition-per-100g'].sodium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sodium ? food['nutrition-per-100ml'].sodium : '-'}</td>`;
        }
        if (document.getElementById("Potassium").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].potassium ? food['nutrition-per-100g'].potassium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].potassium ? food['nutrition-per-100ml'].potassium : '-'}</td>`;
        }
        if (document.getElementById("Calcium").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].calcium ? food['nutrition-per-100g'].calcium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].calcium ? food['nutrition-per-100ml'].calcium : '-'}</td>`;
        }
        if (document.getElementById("Vit E").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e'] ? food['nutrition-per-100g']['vitamin-e'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-e'] ? food['nutrition-per-100ml']['vitamin-e'] : '-'}</td>`;
        }
        if (document.getElementById("Fat").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].fat ? food['nutrition-per-100g'].fat : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].fat ? food['nutrition-per-100ml'].fat : '-'}</td>`;
        }
        if (document.getElementById("Magnesium").checked) {
            htmlString += `<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].magnesium ? food['nutrition-per-100g'].magnesium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].magnesium ? food['nutrition-per-100ml'].magnesium : '-'}</td>`;
        }

        food.tags ? food.tags.forEach(tag => {

            if (document.getElementById("Grain").checked) {
                if (tag === "grain") {
                    htmlString += `<td class="tagslabel-brown">${tag}</td>`
                }
            }
            if (document.getElementById("Carb").checked) {
                if (tag === "carb")
                {
                    htmlString += `<td class="tagslabel-red">${tag}</td>`
                }
            }
            if (document.getElementById("Snack").checked) {
                if (tag === "snack")
                {
                    htmlString += `<td class="tagslabel-purple">${tag}</td>`
                }
            }
            if (document.getElementById("Legume").checked) {
                if (tag === "legume")
                {
                    htmlString += `<td class="tagslabel-yellow">${tag}</td>`
                }
            }
            if (document.getElementById("Nut").checked) {
                if (tag === "nut")
                {
                    htmlString += `<td class="tagslabel-darkbrown">${tag}</td>`
                }
            }
            if (document.getElementById("Seed").checked) {
                if (tag === "seed")
                {
                    htmlString += `<td class="tagslabel-lightorange">${tag}</td>`
                }
            }
            if (document.getElementById("Fruit").checked) {
                if (tag === "fruit")
                {
                    htmlString += `<td class="tagslabel-lightgreen">${tag}</td>`
                }
            }
            if (document.getElementById("Vegetable").checked) {
                if (tag === "vegetable")
                {
                    htmlString += `<td class="tagslabel-darkgreen">${tag}</td>`
                }
            }
            if (document.getElementById("Leafy Green Vegetable").checked) {
                if (tag === "leafy green vegetable")
                {
                    htmlString += `<td class="tagslabel-blue">${tag}</td>`
                }
            }
            if (document.getElementById("Leafy Green Vegetable").checked) {
                if (tag === "leafy green vegetable")
                {
                    htmlString += `<td class="tagslabel-pastelgreen">${tag}</td>`
                }
            }
            if (document.getElementById("Superfood").checked) {
                if (tag === "superfood")
                {
                    htmlString += `<td class="tagslabel-pink">${tag}</td>`
                }
            }
            if (document.getElementById("Bread").checked) {
                if (tag === "bread")
                {
                    htmlString += `<td class="tagslabel-orange">${tag}</td>`
                }
            }
            if (document.getElementById("Supplement").checked) {
                if (tag === "supplement")
                {
                    htmlString += `<td class="tagslabel-lightpink">${tag}</td>`
                }
            }
        }) : '';
        `</tr>`;

//        console.log(food);
//        console.log(food.name);
//        console.log(food.id);
//        console.log(food.tags);

    });
    htmlString += `</table><br>${selectedFoods.length} records found.`;
    document.getElementById('json-data').innerHTML = htmlString;

}
function sort(key)
{
    //check is it pulling through the correct key
    //does lastSortColumnName match whatever has been passed
    if (lastSortColumnName === key)
    {
        sortAscendingOrder = !sortAscendingOrder;
    } else
    {
        lastSortColumnName = key;
        sortAscendingOrder = true;
    }
    //sort array
    if (sortAscendingOrder)
    {
        //ascending order
        foods.sort((a, b) => a[key] < b[key] ? -1 : 1);
    } else
    {
        //descending order
        foods.sort((a, b) => a[key] < b[key] ? 1 : -1);
    }

    //display array
    displayTable(foods);
}