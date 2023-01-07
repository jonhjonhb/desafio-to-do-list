const tasksAddedDiv = document.querySelector('#tasksAdded')

const listTask = []

const addTaskIntoDom = tasksAdded => {
  const div = document.createElement('div')
  div.classList.add("form-check")
  div.id = `check${tasksAdded.id}`
  div.innerHTML = `<input type="checkbox" class="form-check-input" placeholder="Task" onclick="changeMode('check${tasksAdded.id}')"><label class="form-check-label"> ${tasksAdded.name}</label>`
  tasksAddedDiv.append(div)
}

const init = () => {
  listTask.forEach(addTaskIntoDom)
}

init()

function changeMode(IdElement) {
  const element = document.querySelector(`#${IdElement} input`)
  const elementLabel = document.querySelector(`#${IdElement} label`)
  if(element.checked == true) {
    theCheckboxIsTrue(elementLabel)
  } else {
    theCheckboxIsFalse(elementLabel)
  }
}

function theCheckboxIsTrue(elementLabel) {
  elementLabel.classList.add("complete")
}


function theCheckboxIsFalse(elementLabel) {
  elementLabel.classList.remove("complete")
}

function addTask() {
  var texto = document.getElementById("newTask").value
  if(texto === ""){
    alert("Favor digitar a sua tarefa!")
    return
  }
  document.getElementById("newTask").value = ""
  tamanho = listTask.length
  listTask.push({id: tamanho + 1, name: texto})
  addTaskIntoDom(listTask[tamanho])
}