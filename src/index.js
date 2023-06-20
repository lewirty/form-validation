function validarForm() {
    let inputs = document.querySelectorAll("input");
    let textosErro = document.querySelectorAll(".texto-vazio");
    let camposObgt = document.querySelector(".obrigatorio");

    inputs.forEach(function (input, index) {
        if (input.value === "") {
            input.classList.add("borda-vermelha");
            textosErro[index].style.display = "inline";
            input.classList.remove("borda-verde")
        } else {
            input.classList.remove("borda-vermelha");
            textosErro[index].style.display = "none";
            input.classList.add("borda-verde")
        }
        if (inputs[3].value === "") {
            camposObgt.classList.add("erro");
        } else {
            camposObgt.classList.remove("erro")
        }
        input.addEventListener("change", function () {
            if (input.value !== "") {
                input.classList.remove("borda-vermelha");
                textosErro[index].style.display = "none";
                input.classList.remove("borda-verde");
            }
        })
    });
}
