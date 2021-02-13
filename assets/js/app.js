// helpers
const elQS = (el) => document.querySelector(el);
const elQSA = (el) => document.querySelectorAll(el);
const on = (onEvent, el, func) => el.addEventListener(onEvent, func);

// variables
const URLInput = elQS('.URL');
const downloadBtn = elQS('.download');

// functions
function downloadBtnFunc() {
    if (URLInput.value == '') {
        alert('Field gak boleh kosong!');
    } else {
        sendURL(URLInput.value);
    }
}

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

// app
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {
}

function eventListener() {
    on('click', downloadBtn, downloadBtnFunc);
}