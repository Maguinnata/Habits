const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const hbutton = document.querySelector('header button')
const fbutton = document.querySelector('form button')

fbutton.addEventListener('click', remove)
hbutton.addEventListener('click', add)
form.addEventListener('change', save)


function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  //const today = '21/01/2023'
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert('Dia já incluso ❌')
    return
  }
   alert('Adicionado com sucesso ✅')
   nlwSetup.addDay(today)
   
}

function save() {
  localStorage.setItem('NLW@Habits', JSON.stringify(nlwSetup.data))
}

function remove() {
  localStorage.removeItem("NLW@Habits")
}


const data = JSON.parse(localStorage.getItem("NLW@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()





