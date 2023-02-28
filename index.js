const calInputA = document.querySelector(".cal-input-a")
const calInputB = document.querySelector(".cal-input-b")
const calBtn = document.querySelector(".cal-btn")
const calH1 = document.querySelector(".cal-h1")
const calSelect = document.querySelector(".cal-select")

calBtn.addEventListener("click", () =>{
    const a = Number(calInputA.value);
    const b = Number(calInputB.value);
    const operation = calSelect.value;

    const result = calculate({a,b, operation})

    calH1.innerHTML = result
})

calBtn.addEventListener('click', () =>{
    calInputA.value = ''
    calInputB.value = ''
})














