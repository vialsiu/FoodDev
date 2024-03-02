const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let fetchedData;
let counter=0;

fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
  .then(response => response.json())
  .then(jsonData => {
    fetchedData = jsonData;

      renderTable();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  function renderTable(){
    counter=0;
    let htmlString = `<table id="tableid">
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
    <th>Edit/Delete</th>
    <th>Special Tags</th>
</tr>`;
fetchedData.forEach(food => {
htmlString += `<tr>
<td class="names" onclick='openModal(${JSON.stringify(food)})'>${food.name}</td>
<td>${food.id}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].energy ? food['nutrition-per-100g'].energy : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].energy ? food['nutrition-per-100ml'].energy : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].protein ? food['nutrition-per-100g'].protein : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].protein ? food['nutrition-per-100ml'].protein : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['saturated-fat'] ? food['nutrition-per-100g']['saturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['saturated-fat'] ? food['nutrition-per-100ml']['saturated-fat'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['trans-fat'] ? food['nutrition-per-100g']['trans-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['trans-fat'] ? food['nutrition-per-100ml']['trans-fat'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['polyunsaturated-fat'] ? food['nutrition-per-100g']['polyunsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['polyunsaturated-fat'] ? food['nutrition-per-100ml']['polyunsaturated-fat'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['mononunsaturated-fat'] ? food['nutrition-per-100g']['monounsaturated-fat'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['monounsaturated-fat'] ? food['nutrition-per-100ml']['monounsaturated-fat'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].carbohydrate ? food['nutrition-per-100g'].carbohydrate : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].carbohydrate ? food['nutrition-per-100ml'].carbohydrate : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sugars ? food['nutrition-per-100g'].sugars : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sugars ? food['nutrition-per-100ml'].sugars : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['dietary-fibre'] ? food['nutrition-per-100g']['dietary-fibre'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['dietary-fibre'] ? food['nutrition-per-100ml']['dietary-fibre'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].sodium ? food['nutrition-per-100g'].sodium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].sodium ? food['nutrition-per-100ml'].sodium : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].potassium ? food['nutrition-per-100g'].potassium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].potassium ? food['nutrition-per-100ml'].potassium : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].calcium ? food['nutrition-per-100g'].calcium : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].calcium ? food['nutrition-per-100ml'].calcium : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g']['vitamin-e'] ? food['nutrition-per-100g']['vitamin-e'] : food['nutrition-per-100ml'] && food['nutrition-per-100ml']['vitamin-e'] ? food['nutrition-per-100ml']['vitamin-e'] : '-'}</td>
<td>${food['nutrition-per-100g'] && food['nutrition-per-100g'].fat ? food['nutrition-per-100g'].fat : food['nutrition-per-100ml'] && food['nutrition-per-100ml'].fat ? food['nutrition-per-100ml'].fat : '-'}</td>
<td id="crudsymbols"><a class="button2" onclick="edit()">
<i class="ri-pencil-fill"></i></a>
<a class="button3"><i class="openModalBtn">x</i></a></td>`
food.tags ? food.tags.forEach(tag => {
switch (tag) {
case "grain":
htmlString += `<td class="tagslabel-brown" onclick="document.getElementById('id01').style.display='block'">${tag}</td>`
break;
case "carb":
htmlString += `<td class="tagslabel-red" onclick="modal2">${tag}</td>`
break;
case "snack":
htmlString += `<td class="tagslabel-purple" onclick="modal2">${tag}</td>`
break;
case "legume":
htmlString += `<td class="tagslabel-yellow" onclick="modal2">${tag}</td>`
break;
case "nut":
htmlString += `<td class="tagslabel-darkbrown" onclick="modal2">${tag}</td>`
break;
case "seed":
htmlString += `<td class="tagslabel-lightorange" onclick="modal2">${tag}</td>`
break;
case "fruit":
htmlString += `<td class="tagslabel-lightgreen">${tag}</td>`
break;
case "vegetable":
htmlString += `<td class="tagslabel-darkgreen" onclick="modal2">${tag}</td>`
break;
case "leafy green vegetable":
htmlString += `<td class="tagslabel-blue" onclick="modal2">${tag}</td>`
break;
case "leafy green vegetable":
htmlString += `<td class="tagslabel-pastelgreen" onclick="modal2">${tag}</td>`
break;
case "superfood":
htmlString += `<td class="tagslabel-pink" onclick="modal2">${tag}</td>`
break;
case "bread":
htmlString += `<td class="tagslabel-orange" onclick="modal2">${tag}</td>`
break;
case "supplement":
htmlString += `<td class="tagslabel-lightpink" onclick="modal2">${tag}</td>`
break;
}
}) : '';
`</tr>`;
counter++;
// console.log(counter)
});

htmlString += `</table><br><div id="recordsfound">[${fetchedData.length} records found.]</div>`;
document.getElementById('json-data').innerHTML = htmlString;
}

function deleteItem(selectedId) {
console.log(selectedId)
  let selectedIndex
    fetchedData.forEach((food, index) => 
    {
        if(food.id === selectedId)
        {
            selectedIndex = index
        }
    })

    fetchedData.splice(selectedIndex, 1)
    renderTable();
}



document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('myModal');

  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});






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



//WIP - SEARCH
let searchName = ""
function search(Name) {
  searchValue = value
  displaySearchedValue()
}

function displaySearchedValue() {
  let namesToDisplay = food.filter(title => (title.food.name.toLowerCase().includes(searchValue.toLowerCase())))
  namesToDisplay.forEach(title => {
    htmlString += `<tr>`

    keys.forEach(key => htmlString += `<td>${title[key]}</td>`)

    htmlString += `</tr>`
  })

  htmlString += `</table>`
  document.getElementById("json-data-container").innerHTML = htmlString
}



  function printfetched()
  {
    console.log(fetchedData);
  }

  document.getElementById('tableid').addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
      var rowId = event.target.closest('tr').id;
      console.log('Delete button clicked in row with ID:', rowId);
    }
  });
  