const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const subtotal = document.getElementById("subtotal");

function minus(id, price) {
    let result = parseFloat(document.getElementById(id).value);
    if (result > 1) {
        result--;
        document.getElementById(id).value = result;
        if (price == "price1") {
            document.getElementById('price1').innerText = 1219 * result;
            a = 1219 * result;
            b = parseFloat(document.getElementById('price2').innerText);
            sum(a, b);
        }
        if (price == "price2") {
            document.getElementById('price2').innerText = 59 * result;
            a = parseFloat(document.getElementById('price1').innerText);
            b = 59 * result;
            sum(a, b);
        }
    }
}

function plus(id, price) {
    let result = parseFloat(document.getElementById(id).value);
    if (result > 0) {
        result++;
        document.getElementById(id).value = result;
        if (price == "price1") {
            document.getElementById('price1').innerText = 1219 * result;
            a = 1219 * result;
            b = parseFloat(document.getElementById('price2').innerText);
            sum(a, b);
        }
        if (price == "price2") {
            document.getElementById('price2').innerText = 59 * result;
            a = parseFloat(document.getElementById('price1').innerText);
            b = 59 * result;
            sum(a, b);
        }
    }
}

function sum(a, b) {
    let sum = 0;
    sum = a + b;
    subtotal.innerText = sum;
    total.innerText = sum;
}

btn1.addEventListener("click", () => {
    minus("box1", "price1");
});

btn2.addEventListener("click", () => {
    plus("box1", "price1");
});

btn3.addEventListener("click", () => {
    minus("box2", "price2");
});

btn4.addEventListener("click", () => {
    plus("box2", "price2");
});


document.getElementById("img1").addEventListener("click", () => {
    document.getElementsByClassName("cart-item")[0].style.display = "none";
});

document.getElementById("img2").addEventListener("click", () => {
    document.getElementsByClassName("cart-item")[1].style.display = "none";
});
