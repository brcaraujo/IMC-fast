let form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcIMC();
});

function calcIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let altura2 = altura * altura;
    let result = peso / altura2;

    document.getElementById('result').innerText = `Seu IMC é -> ${result.toFixed(2)}`;

    let renderAlert = document.getElementById('renderAlert');
    renderAlert.classList.remove('disable');
    setTimeout(() => {
        renderAlert.classList.add('disable');
    }, 5000);

    setTimeout(() => {
        window.location.reload();
    }, 15000);
}