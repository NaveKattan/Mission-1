const DOM = {
    prodact: null,
    price: null,
    img: null,
    category: null,
    tableBody: null,
    form: null,
}

const state = { cart: [] }

function init() {
    DOM.prodact = document.getElementById("prodactName")
    DOM.price = document.getElementById("prodactPrice")
    DOM.img = document.getElementById("prodactImg")
    DOM.category = document.getElementById("prodactCategory")
    DOM.tableBody = document.getElementById("tableBody")
    DOM.form = document.getElementById("form")
}

function draw(cart) {
    DOM.tableBody.innerHTML = ""
    for (let index = 0; index < cart.length; index++) {
        const currentProdact = cart[index]
        const currenProdactRow = getProdactRow(currentProdact)
        if (currenProdactRow) DOM.tableBody.append(currenProdactRow)
    }
}

function addProdact() {
    const prodact = {
        prodactName: DOM.prodact.value,
        prodactPrice: DOM.price.value,
        prodactImage: DOM.img.value,
        prodactCategory: DOM.category.value
    }

    if (!prodact.prodactName || !prodact.prodactPrice || !prodact.prodactImage || prodact.prodactCategory === "Category") return alert("Somthing went wrong !!!");

    state.cart.push(prodact)
    draw(state.cart)
    const form = DOM.form
    form.reset()

}

function getProdactRow(prodact) {

    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = prodact.prodactName

    const tdPrice = document.createElement("td");
    tdPrice.innerText = prodact.prodactPrice

    const tdImage = _getImage(prodact.prodactImage)

    const tdCategory = document.createElement("td");
    tdCategory.innerText = prodact.prodactCategory

    tr.append(
        tdName,
        tdPrice,
        tdImage,
        tdCategory,
    );
    return tr

    function _getImage(poster) {
        const tdImage = document.createElement("td");
        const Image = document.createElement("img");
        Image.src = poster;
        Image.classList.add("tableImage");
        tdImage.append(Image);
        return tdImage;
    }
}

init()