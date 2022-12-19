const conversion = document.querySelector('#conversion')
conversion.addEventListener('submit', procesar)

function procesar(e){
    e.preventDefault();

    const moneda__50 = parseFloat(document.getElementById('moneda-50').value * 50)
    const moneda__100 = parseFloat(document.getElementById('moneda-100').value * 100)
    const moneda__200 = parseFloat(document.getElementById('moneda-200').value * 200)
    const moneda__500 = parseFloat(document.getElementById('moneda-500').value * 500)
    const moneda__1000 = parseFloat(document.getElementById('moneda-1000').value * 1000)
    
    var moneda__50_feit = parseFloat(document.getElementById('feit__moneda-50').value)
    var moneda__100_feit = parseFloat(document.getElementById('feit__moneda-100').value)
    var moneda__200_feit = parseFloat(document.getElementById('feit__moneda-200').value)
    var moneda__500_feit = parseFloat(document.getElementById('feit__moneda-500').value)
    var moneda__1000_feit = parseFloat(document.getElementById('feit__moneda-1000').value)

    moneda__50_feit = moneda__50 - (moneda__50 * moneda__50_feit / 100)
    moneda__100_feit = moneda__100 - (moneda__100 * moneda__100_feit / 100)
    moneda__200_feit = moneda__200 - (moneda__200 * moneda__200_feit / 100)
    moneda__500_feit = moneda__500 - (moneda__500 * moneda__500_feit / 100)
    moneda__1000_feit = moneda__1000 - (moneda__1000 * moneda__1000_feit / 100)

    var neto = moneda__50 + moneda__100 + moneda__200 + moneda__500 + moneda__1000
    var conFiet = moneda__50_feit + moneda__100_feit + moneda__200_feit + moneda__500_feit + moneda__1000_feit
    console.log(neto)
    console.log(conFiet)

    var alerta = document.getElementById('alerta')
    var informe = document.getElementById('informe')
    var informe__metodo = document.getElementById('metodo')
    var informe__valor = document.getElementById('valor')
    var informe__neto = document.getElementById('neto')
    
    alerta.style.display = "block";
    informe.style.display = "block";
    informe__valor.textContent = conFiet
    informe__neto.textContent = neto

    if (document.getElementById('efectivo').checked) {
        alert("El pago será en efectivo. ¡Operación exitosa! (COP $" + conFiet + ")")
        informe__metodo.textContent = "Efectivo"
    }

    if (document.getElementById('transferencia').checked) {
        alert("El pago será por transferencia. ¡Operación exitosa! (COP $" + conFiet + ")")
        informe__metodo.textContent = "Transferencia"
    }
}