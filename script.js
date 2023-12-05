const xhr = new XMLHttpRequest();
const url = `https://picsum.photos/v2/list`;
xhr.open('GET', url, true);
xhr.onload = function() {
    if(xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        renderLaptopok(response);
    }
    xhr.open("GET", url, true);
    xhr.send();

};

function renderLaptopok(laptopok) {
    const Laptopok = document.getElementById("laptopok");
    laptopok.array.forEach(function(laptop){
        const card = `
        <div class="col-lg-3 col-md-4 mb-3">
        <div class="card">
            <img src="${laptop.url}" class="card-img-top" alt="Film poszter">
            <div class="card-body">
                <h5 class="card-title">${laptop.author}</h5>
            </div>
        </div>
    </div>
        `;
    });
    Laptopok.innerHTML = card;
}