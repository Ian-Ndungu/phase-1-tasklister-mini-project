document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit" , draw);
  function draw (e){
    e.preventDefault()
    record(e.target[0].value)
    form.reset()

  }
});

function record(text){
  var display = document.createElement("li")
  var store = document.createElement("button")
  store.addEventListener("click",Delete)
  store.textContent = "delete"
  store.style.marginLeft = "10px"
  display.append(text)
  display.appendChild(store)
  const task = document.getElementById("tasks")
  task.appendChild(display)
}
function Delete(e){
  e.target.parentNode.remove()
}
