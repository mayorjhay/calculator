let result = document.getElementById("inputext");
let calculate = (number) => {
  result.value += number
}

let Result = () => {
  try {
    result.value = eval(result.value)
  } catch (e) {
    alert("enter a valid operation")
  }
}
function clr() {
  // body...
  result.value = ' '
}
function del() {
  // body...
  result.value = result.value.slice(0,-1)
}
