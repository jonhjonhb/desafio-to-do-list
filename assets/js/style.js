const tasksAddedDiv = document.querySelector('#tasksAdded')

const listTask = [
  {id: 1, name: 'Revisar'},
  {id: 2, name: 'Teste'},
  {id: 3, name: 'Analisar'},
  {id: 4, name: 'Implementar'}
]

const addTaskIntoDom = tasksAdded => {
  const div = document.createElement('div')
  div.classList.add("form-check")
  div.id = `check${tasksAdded.id}`
  div.innerHTML = `<input type="checkbox" class="form-check-input" placeholder="Task" onclick="changeMode('check${tasksAdded.id}')"><label class="form-check-label"> ${tasksAdded.name}</label>`
  tasksAddedDiv.prepend(div)
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