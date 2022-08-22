const element = document.getElementById("main");// Write your code here!
element.remove()
const newHeader = document.createElement("h1")
document.body.appendChild(newHeader)
newHeader.setAttribute('id','victory')

newHeader.innerHTML="Justin is the champion"
