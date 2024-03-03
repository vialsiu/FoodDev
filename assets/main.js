let foods = [];
let lastSortColumnName = "Name";
let sortAscendingOrder = true;
//!! checkboxes for nutritions and tags !!
let nutritions = ['Energy', 'Protein', 'Sat Fat', 'Trans Fat', 'Poly Fat', 'Mono Fat', 'Carbohydrates', 'Sugars', 'Fibre', 'Sodium', 'Potassium', 'Calcium', 'Vit E', 'Fat', 'Magnesium'];
let nutritionsCheckboxes = nutritions.sort();
let foodTags = ['Grain', 'Carb', 'Snack', 'Legume', 'Nut', 'Seed', 'Fruit', 'Vegetable', 'Superfood', 'Leafy Green Vegetable', 'Bread', 'Supplement'];
let foodTagsCheckboxes = foodTags.sort();

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

let counter=0;

let searchValue = "";
function search(value) {
    searchValue = value;
    displayTable(foods);
}
function displayNutrsCheckboxes() {
  let htmlString = "<h1 class='filterby'>Filter by nutrition label:</h1>&nbsp&nbsp";

  nutritionsCheckboxes.forEach(nutrition => {
      htmlString += `<label for="${nutrition}">${nutrition}:</label>
                              <input id="${nutrition}" type="checkbox" checked="true" onclick="displayTable(foods)"/>&nbsp&nbsp`;
  });
  document.getElementById("Nutrscheckbox-container").innerHTML = htmlString;
}
function displayFTagCheckboxes() {
  let htmlString = "<h1 class='filterby2'>Delete Tag:</h1>&nbsp&nbsp";

  foodTagsCheckboxes.forEach(foodTag => {
      htmlString += `<label for="${foodTag}">${foodTag}</label>
                              <input id="${foodTag}" value="${foodTag}" type="checkbox" checked="true" onclick="search(this.value)"/>&nbsp&nbsp`;
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
      initializeModal();
      initializeModal2();
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });

  function displayTable(selectedFoods) {
      counter=0;

      let keys = Object.keys(foods[0]);

      let htmlString = `<table>
      <tr id="labels_table">
      <th onclick=sort("Name")>Name `;
      if (lastSortColumnName === 'Name') {
          htmlString += sortAscendingOrder ? "▲" : "▼";
      }
      htmlString += `</th>

      <th onclick=sort("ID")>ID`;
      if (lastSortColumnName === 'ID') {
          htmlString += sortAscendingOrder ? "▲" : "▼";
      }
      htmlString += `</th>`;

      if (document.getElementById("Energy").checked) {
          htmlString += `<th>Energy (kJ)</th>`;
      }

      if (document.getElementById("Protein").checked) {  
          htmlString += `<th>Protein (g)</th>`;
      }

      if (document.getElementById("Sat Fat").checked) {
          htmlString += `<th>Saturated Fat (g)</th>`;
      }

      if (document.getElementById("Trans Fat").checked) {
          htmlString += `<th>Trans Fat (g)</th>`;
      }

      if (document.getElementById("Poly Fat").checked) {
          htmlString += `<th>Poly Fat (g)</th>`;
      }

      if (document.getElementById("Mono Fat").checked) {
          htmlString += `<th>Mono Fat (g)</th>`;
      }

      if (document.getElementById("Carbohydrates").checked) {
          htmlString += `<th>Carbohydrate (g)</th>`;
      }

      if (document.getElementById("Sugars").checked) {
          htmlString += `<th>Sugars (g)</th>`;
      }

      if (document.getElementById("Fibre").checked) {
          htmlString += `<th>Fibre (g)</th>`;
      }

      if (document.getElementById("Sodium").checked) {
          htmlString += `<th>Sodium (mg)</th>`;
      }

      if (document.getElementById("Potassium").checked) {
          htmlString += `<th>Potassium (mg)</th>`;
      }

      if (document.getElementById("Calcium").checked) {
          htmlString += `<th>Calcium (mg)</th>`;
      }

      if (document.getElementById("Vit E").checked) {
          htmlString += `<th>Vit E (mg)</th>`;
      }

      if (document.getElementById("Fat").checked) {
          htmlString += `<th>Fat (g)</th>`;
      }

      htmlString += `<th>Edit/Delete</th>
      <th>Special Tags</th>
</tr>`;

selectedFoods.forEach(food => {
htmlString += `<tr>
<td class="names">${food.name}
<dialog class="modalnutrition">
<h1>Nutritional Information for: ${food.name}.</h1>
<h2 id="esckey">(Press ESC.)</h2>
<h2 class="nutriinfo">Energy (kJ): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].energy ? food['nutrition-per-100g'].energy : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].energy ? food['nutrition-per-100ml'].energy : '0'}kJ</h2>
<h2 class="nutriinfo">Protein (g):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].protein ? food['nutrition-per-100g'].protein : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].protein ? food['nutrition-per-100ml'].protein : '0'}g</h2>
<h2 class="nutriinfo">Saturated Fat (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['saturated-fat'] ? food['nutrition-per-100g']['saturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['saturated-fat'] ? food['nutrition-per-100ml']['saturated-fat'] : '0'}g</h2>
<h2 class="nutriinfo">Trans Fat (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['trans-fat'] ? food['nutrition-per-100g']['trans-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['trans-fat'] ? food['nutrition-per-100ml']['trans-fat'] : '0'}g</h2>
<h2 class="nutriinfo">Polyunsaturated Fat (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['polyunsaturated-fat'] ? food['nutrition-per-100g']['polyunsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['polyunsaturated-fat'] ? food['nutrition-per-100ml']['polyunsaturated-fat'] : '0'}g</h2>
<h2 class="nutriinfo">Monounsaturated Fat (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['mononunsaturated-fat'] ? food['nutrition-per-100g']['monounsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['monounsaturated-fat'] ? food['nutrition-per-100ml']['monounsaturated-fat'] : '0'}g</h2>
<h2 class="nutriinfo">Carbohydrate (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].carbohydrate ? food['nutrition-per-100g'].carbohydrate : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].carbohydrate ? food['nutrition-per-100ml'].carbohydrate : '0'}g</h2>
<h2 class="nutriinfo">Sugars (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].sugars ? food['nutrition-per-100g'].sugars : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sugars ? food['nutrition-per-100ml'].sugars : '0'}g</h2>
<h2 class="nutriinfo">Dietary Fibre (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['dietary-fibre'] ? food['nutrition-per-100g']['dietary-fibre'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['dietary-fibre'] ? food['nutrition-per-100ml']['dietary-fibre'] : '0'}g</h2>
<h2 class="nutriinfo">Sodium (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].sodium ? food['nutrition-per-100g'].sodium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sodium ? food['nutrition-per-100ml'].sodium : '0'}mg</h2>
<h2 class="nutriinfo">Potassium (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].potassium ? food['nutrition-per-100g'].potassium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].potassium ? food['nutrition-per-100ml'].potassium : '0'}mg</h2>
<h2 class="nutriinfo">Calcium (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].calcium ? food['nutrition-per-100g'].calcium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].calcium ? food['nutrition-per-100ml'].calcium : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin e (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e'] ? food['nutrition-per-100g']['vitamin-e'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-e'] ? food['nutrition-per-100ml']['vitamin-e'] : '0'}mg</h2>
<h2 class="nutriinfo">Fat (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].fat ? food['nutrition-per-100g'].fat : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].fat ? food['nutrition-per-100ml'].fat : '0'}g</h2>
<h2 class="nutriinfo">Omega 3 Fatty acid (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['omega-3-fatty-acid'] ? food['nutrition-per-100g']['omega-3-fatty-acid'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['omega-3-fatty-acid'] ? food['nutrition-per-100ml']['omega-3-fatty-acid'] : '0'}g</h2>
<h2 class="nutriinfo">Starch (g): ${food['nutrition-per-100g'] && food['nutrition-per-100g'].starch ? food['nutrition-per-100g'].starch : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].starch ? food['nutrition-per-100ml'].starch : '0'}g</h2>
<h2 class="nutriinfo">Iron (mg):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].iron ? food['nutrition-per-100g'].iron : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].iron ? food['nutrition-per-100ml'].iron : '0'}mg</h2>
<h2 class="nutriinfo">Phosphorus (mg):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].phosphorus ? food['nutrition-per-100g'].phosphorus : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].phosphorus ? food['nutrition-per-100ml'].phosphorus : '0'}mg</h2>
<h2 class="nutriinfo">Zinc (mg):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].zinc ? food['nutrition-per-100g'].zinc : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].zinc ? food['nutrition-per-100ml'].zinc : '0'}mg</h2>
<h2 class="nutriinfo">Manganese (mg):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].manganese ? food['nutrition-per-100g'].manganese : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].manganese ? food['nutrition-per-100ml'].manganese : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin A (μg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-a'] ? food['nutrition-per-100g']['vitamin-a'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-a'] ? food['nutrition-per-100ml']['vitamin-a'] : '0'}μg</h2>
<h2 class="nutriinfo">Vitamin B1 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b1'] ? food['nutrition-per-100g']['vitamin-b1'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b1'] ? food['nutrition-per-100ml']['vitamin-b1'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B2 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b2'] ? food['nutrition-per-100g']['vitamin-b2'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b2'] ? food['nutrition-per-100ml']['vitamin-b2'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B3 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b3'] ? food['nutrition-per-100g']['vitamin-b3'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b3'] ? food['nutrition-per-100ml']['vitamin-b3'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B5 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b5'] ? food['nutrition-per-100g']['vitamin-b5'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b5'] ? food['nutrition-per-100ml']['vitamin-b5'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B6 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b6'] ? food['nutrition-per-100g']['vitamin-b6'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b6'] ? food['nutrition-per-100ml']['vitamin-b6'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B6 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b6'] ? food['nutrition-per-100g']['vitamin-b6'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b6'] ? food['nutrition-per-100ml']['vitamin-b6'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin B9 (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-b9'] ? food['nutrition-per-100g']['vitamin-b9'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-b9'] ? food['nutrition-per-100ml']['vitamin-b9'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin E (mg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e'] ? food['nutrition-per-100g']['vitamin-e'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-e'] ? food['nutrition-per-100ml']['vitamin-e'] : '0'}mg</h2>
<h2 class="nutriinfo">Vitamin K (μg): ${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-k'] ? food['nutrition-per-100g']['vitamin-k'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-k'] ? food['nutrition-per-100ml']['vitamin-k'] : '0'}μg</h2>
<h2 class="nutriinfo">Manganese (mg):  ${food['nutrition-per-100g'] && food['nutrition-per-100g'].magnesium ? food['nutrition-per-100g'].magnesium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].magnesium ? food['nutrition-per-100ml'].magnesium : '0'}mg</h2>
</dialog></td>`;


// I had <button class="closeit">CLOSE</button> - didn't work so left it out

htmlString += `<td>${food.id}</td>`;
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
htmlString += `<td id="crudsymbols"><a class="button2" onclick="edit()">
<i class="ri-pencil-fill"></i></a>
<button class="open-modal">X</button>
          <dialog class="data-modal">
            <h1>Would you like to delete this row?</h1>
          <button class="close-modal">Close</button>
          <button class="deleterow-modal">Confirm</button>
          </dialog></td>`;
food.tags ? food.tags.forEach(tag => {
    if (document.getElementById("Grain").checked) {
        if (tag === "grain") {
            htmlString += `<td class="tagslabel-brown" onclick="document.getElementById('id01').style.display='block'">${tag}</td>`
        }
    }
    if (document.getElementById("Carb").checked) {
        if (tag === "carb") {
            htmlString += `<td class="tagslabel-red" onclick="modal2">${tag}</td>`
        }
    }
    if (document.getElementById("Snack").checked) {
        if (tag === "snack") {
            htmlString += `<td class="tagslabel-purple" onclick="modal2">${tag}</td>`
        }
    }
    if (document.getElementById("Legume").checked) {
        if (tag === "legume") {
            htmlString += `<td class="tagslabel-yellow" onclick="modal2">${tag}</td>`
        }
    }
    if (document.getElementById("Nut").checked) {
        if (tag === "nut") {                        
            htmlString += `<td class="tagslabel-darkbrown" onclick="modal2">${tag}</td>`
        }                        
    }                                                                        
    if (document.getElementById("Seed").checked) {
        if (tag === "seed") {                        
            htmlString += `<td class="tagslabel-lightorange" onclick="modal2">${tag}</td>`
        }                       
    }                                                
    if (document.getElementById("Fruit").checked) {
        if (tag === "fruit") {                        
            htmlString += `<td class="tagslabel-lightgreen">${tag}</td>`
        }                                                
    }                                                
    if (document.getElementById("Vegetable").checked) {
        if (tag === "vegetable") {                        
            htmlString += `<td class="tagslabel-darkgreen" onclick="modal2">${tag}</td>`
        }                                               
    }                                                
    if (document.getElementById("Leafy Green Vegetable").checked) {
        if (tag === "leafy green vegetable") {                       
            htmlString += `<td class="tagslabel-blue" onclick="modal2">${tag}</td>`
        }                                                
    }                                                
    if (document.getElementById("Leafy Green Vegetable").checked) {
        if (tag === "leafy green vegetable") {
            htmlString += `<td class="tagslabel-pastelgreen" onclick="modal2">${tag}</td>`
        }
    }                                                                                                                        
    if (document.getElementById("Superfood").checked) {
        if (tag === "superfood") {
            htmlString += `<td class="tagslabel-pink" onclick="modal2">${tag}</td>`
        }
    }
    if (document.getElementById("Bread").checked) {
        if (tag === "bread") {
            htmlString += `<td class="tagslabel-orange" onclick="modal2">${tag}</td>`
        }
    }
    if (document.getElementById("Supplement").checked) {
        if (tag === "supplement") {
            htmlString += `<td class="tagslabel-lightpink" onclick="modal2">${tag}</td>`
        }
    }                                                                                                                                                                                                                                                                                                                                              
}) : '';                    
`</tr>`;
//console.log(food);
//console.log(food.name);
//console.log(food.id);
//console.log('nutrition-per-100g:', food['nutrition-per-100g']);
//console.log('nutrition-per-100ml:', food['nutrition-per-100ml']);
//console.log('nutrition-per-100g:', food['nutrition-per-100g'], 'nutrition-per-100ml:', food['nutrition-per-100ml']);
//console.log(food.tags);
counter++;
});

htmlString += `</table><br><div id="recordsfound">[${selectedFoods.length} records found.]</div>`;
document.getElementById('json-data').innerHTML = htmlString;
}

function sort(key)
{
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

function addFood() {
    const foodName = document.getElementById("foodName").value;
    const foodID = document.getElementById("foodID").value;

    //make sure only alphabet letters
    if (!foodName.match(/^[A-Za-z]+$/) || !foodID.match(/^[A-Za-z-]+$/)) {
        alert("please only alphabetic characters !");
        return;
    }

    //make sure none of the boxes are empty
    if (foodName && foodID) {
        //create newFood object
        const newFood = {name: foodName, id: foodID};

    //add new input to table
    foods.push(newFood);

    displayTable(foods);

    //empty boxes
    document.getElementById("foodName").value = "";
    document.getElementById("foodID").value = "";

    //close modal
    const addModal = document.querySelector('.addmodal');
    addModal.close();
    }
    else { //doesnt work lmaoo
        alert("please enter both name and id !");
    }
}

function modifyFood() {
    const modifyName = document.getElementById("modifyName").value;
    const modifyID = document.getElementById("modifyID").value;

    if (!modifyName.match(/^[A-Za-z]+$/) || !modifyID.match(/^[A-Za-z-]+$/)) {
        alert("please only alphabetic characters !");
        return;
    }

    //make sure food or id exists
    const existingFood = foods.find(food => food.name === modifyName || food.id === modifyID);
    if (!existingFood) {
        alert("food with the entered name or id does not exist ;(");
        return;
    }

    // Update the existing food item
    if (modifyName) {
        existingFood.name = modifyName;
    }
    if (modifyID) {
        existingFood.id = modifyID;
    }

    // Display the updated table
    displayTable(foods);

    // Clear input fields
    document.getElementById("modifyName").value = "";
    document.getElementById("modifyID").value = "";

//    const modifyModal = document.querySelector('.modifymodal');
//    modifyModal.close();
}

function deleteItem(selectedId) {
    console.log(selectedId);
    let selectedIndex;
    foods.forEach((food, index) => 
    {
        if(food.id === selectedId) {
            selectedIndex = index;
        }
    });
    foods.splice(selectedIndex, 1);
    displayTable(foods);
}


function initializeModal() {
  const openButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.data-modal');
  const deleteRowButtons = document.querySelectorAll('.deleterow-modal');

  openButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      modals[index].showModal();
    });
  });

  closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      modals[index].close();
    });
  });
  deleteRowButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const selectedId = foods[index].id;
      deleteItem(selectedId);
      modals[index].close();
      initializeModal();
    });
  });
  // const opens = document.querySelectorAll('.names');
  // const closethemodal = document.querySelectorAll('.closeit');
  // const modalnutri = document.querySelectorAll('.modalnutrition');

  // opens.forEach((button, index) => {
  //   button.addEventListener('click', () => {
  //     modalnutri[index].showModal();
  //   });
  // });

  // closethemodal.forEach((button, index) => {
  //   button.addEventListener('click', () => {
  //     modalnutri[index].close();
  //     initializeModal2();
  //   });
  // });
}


function initializeModal2(){
  const opens = document.querySelectorAll('.names');
  const closethemodal = document.querySelectorAll('.closeit');
  const modalnutri = document.querySelectorAll('.modalnutrition');

  opens.forEach((button, index) => {
    button.addEventListener('click', () => {
      modalnutri[index].showModal();
    });
  });

  closethemodal.forEach((button, index) => {
    button.addEventListener('click', () => {
      modalnutri[index].close();
      initializeModal2();
    });
  });
}

// HERE IS THE MODAL FOR ADDING LOL 
function openAddModal() {
  const addModal = document.querySelector('.addmodal');
  addModal.showModal();
}

function initializeModal3() {
  console.log('.adding')
  const addingOpenButtons = document.querySelectorAll('.adding');
  const addModals = document.querySelectorAll('.addmodal');

  addingOpenButtons.forEach(button => {
      button.addEventListener('click', () => {
          let index = Array.from(addingOpenButtons).indexOf(button);
          addModals[index].showModal();
      });
  });
}
initializeModal3(); 

//function openModifyModal() { doesnt work lmao
//    const modifyModal = document.querySelector('.modifymodal');
//    modifyModal.showModal();
//}
//
//function initializeModal4() {
//    const modifyOpenButtons = document.querySelectorAll('.ri-pencil-fill');
//    const modifyModals = document.querySelectorAll('.modifymodel');
//    
//    modifyOpenButtons.forEach(button => {
////        button.addEventListener('click', openModifyModal);
//       button.addEventListener('click', () => {
//          index = Array.from(modifyOpenButtons).indexOf(button);
//          modifyModals[index].showModal();
//      });
//    });
//}
//initializeModal4();


//WIP - SEARCH

// function search(value) {
//   searchValue = value.toLowerCase();
//   renderTable();
// }

// function filterData() {
//   if (!searchValue) {
//     return fetchedData;
//   } else {
//     return fetchedData.filter(food => {
//       return Object.values(food).some(val =>
//         typeof val === 'string' && val.toLowerCase().includes(searchValue)
//       );
//     });
//   }
// }

// function renderTable() {
//   const filteredData = filterData(); 
//   let htmlString = `<table id="tableid">
//     <tr id="labels_table">
//     <!-- Table header -->
//     </tr>`;

//   filteredData.forEach(food => {
//     // Generate HTML for each row based on filtered data
//     // Append to htmlString
//   });

//   htmlString += `</table><br><div id="recordsfound">[${filteredData.length} records found.]</div>`;
//   document.getElementById('json-data').innerHTML = htmlString;
// }








// let searchValue = ""
// function search(value) {
// searchValue = value

//   const searchValue = foods.filter(afood => afood.name === name);
//   return searchValue;

// }
// let searchValue = search("Red")

// function displaySearchedValue() {
//   let namesToDisplay = food.filter(title => (title.food.name.toLowerCase().includes(searchValue.toLowerCase())))
//   namesToDisplay.forEach(title => {
//     htmlString += `<tr>`

//     keys.forEach(key => htmlString += `<td>${title[key]}</td>`)

//     htmlString += `</tr>`
//   })

//   htmlString += `</table>`
//   document.getElementById("json-data-container").innerHTML = htmlString
// }
// function searchCarsByColour(colour)
// {
//     const selectedCars = cars.filter(car => car.colour === colour)
//     return selectedCars
// }


// // Example
// let selectedCars = searchCarsByColour("Red")


//   function printfetched()
//   {
//     console.log(fetchedData);
//}

  // document.getElementById('tableid').addEventListener('click', function(event) {
  //   if (event.target.classList.contains('deleteBtn')) {
  //     var rowId = event.target.closest('tr').id;
  //     console.log('Delete button clicked in row with ID:', rowId);
  //   }
  // });


// const openButton = document.querySelector("[openmodal]")
// const closeButton = document.querySelector("[closemodal]")
// const modal = document.querySelector("[datamodal]")

// openButton.addEventListener("click",() => {
//   modal.showModal()
// })

// closeButton.addEventListener("click", () =>{
// modal.close()
// })





// function openModal(item){
//     console.log(item)
//     document.getElementById("nitrition-form").innerHTML = item.id
// }
// var modal = document.getElementById("modal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// // span.onclick = function() {
// //   modal.style.display = "none";
// // }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// document.addEventListener("DOMContentLoaded", function() {
//   const openModalBtn = document.getElementById('openModalBtn');
//   const closeModalBtn = document.getElementById('closeModalBtn');
//   const modal = document.getElementById('myModal');

//   openModalBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
//   });

//   closeModalBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', function(event) {
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   });
// const deleteButtons = document.querySelectorAll('.delete-button');
// deleteButtons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     modal.style.display = 'block';
//     // Here you can handle the delete functionality
//     // You might want to have some logic to identify which row's delete button was clicked
//     // and then proceed accordingly
//   });
// });
// });