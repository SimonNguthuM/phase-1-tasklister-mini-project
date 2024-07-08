document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    func(document.getElementById("new-task-description").value)
    form.reset()
})
})

function func(todo){
  let par = document.createElement('p')
  let bt = document.createElement('button')
  bt.addEventListener("click", del)
  par.textContent = `${todo} `
  bt.textContent = "❌"
  par.appendChild(bt)
  document.querySelector("#tasks").appendChild(par)
  let sel = document.createElement('select')
  par
  console.log(par)
}

function del(e) {
  e.target.parentNode.remove()
}


