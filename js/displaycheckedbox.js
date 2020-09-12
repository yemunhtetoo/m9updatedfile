let items = new Set();
// reference to the dumping container
let resultContainer= document.getElementById('result')

// onclick event handler
function updateItems(e){
  // value of the  clicked checkbox
  let value = e.target.value;
  // if value is already in the Set, remove it (input unchecked)
  if(items.has(value)) items.delete(value)
  // if value is not in in the set, insert it (input checked)
  else items.add(value)
  //
  // set updated ! now dump its contents...
  //
  // empty string
  let result = '';
  // iterate Set, and generate string with selected values
  
  items.forEach(i=> result += '<li>' + i +'<button type="button" class="btn-x"></button></li>')
  // dump string
  resultContainer.innerHTML=result;
  showChecked();

}

// select all checkboxes and assign the onclick event handler
let inputs = Array.from (document.querySelectorAll('input') )

inputs.forEach(i => i.onclick=updateItems )

function getCheckboxCount() {
  return document.querySelectorAll('input[name=phone]:checked').length;
}

function showChecked(){
  document.getElementById('selectedvalue').textContent = "("+getCheckboxCount()+")";
}
