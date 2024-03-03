const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let fetchedData;
let counter=0;
let searchValue = ""; 

fetch('https://derek.comp.dkit.ie/java_script/example_code/food.json')
  .then(response => response.json())
  .then(jsonData => {
    fetchedData = jsonData;

      renderTable();
      initializeModal();
      initializeModal2();
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
</dialog></td>`


// I had <button class="closeit">CLOSE</button> - didn't work so left it out

htmlString += `<td>${food.id}</td>
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
<button class="open-modal">X</button>
          <dialog class="data-modal">
            <div>Would you like to delete this row?</div>
          <button class="close-modal">Close</button>
          <button class="deleterow-modal">Yes</button>
          </dialog></td>`
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


function initializeModal() {
  const openButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.data-modal');
  const deleteRowButtons = document.querySelectorAll('.deleterow-modal')

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
      const selectedId = fetchedData[index].id;
      deleteItem(selectedId);
      modals[index].close();
      initializeModal();
    });
  });
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