const btn = document.querySelector('#btn'); ///DOM
const input = document.querySelector('#guess'); ///DOM
const anwswer = Math.floor(Math.random() * 20) + 1; //Data


input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        play()
    }
})

btn.addEventListener('click', play);           ///Handler


function play() {                                /// Logic+DOM
    const userNumber = Number(input.value);
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
        icon: "error",
        title: "ОЙ...",
        text: "Введіть число від 1 до 20!"
});
    }

    else if (isNaN(userNumber)) {
             Swal.fire({
             icon: "error",
             title: "ОЙ...",
             text: "Введіть число!"
});
    }
    else {
        if (userNumber < anwswer) {
           Swal.fire({
           icon: "error",
           title: "ОЙ...",
           text: "Треба трішки більше:)))"
});
        }
        else if (userNumber > anwswer) {
           Swal.fire({
           icon: "error",
           title: "ОЙ...",
           text: "Треба трішки менше:)))"
});
        }
        else  {
            Swal.fire({
            title: "Sweet WIN!",
            text: "Вітаємо з перемогою.",
            imageUrl: "./img/public-domain-vectors-TbtjNwgDgxU-unsplash.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
});
        }
    }
    input.value = ''; 
    input.focus();
}


console.log(anwswer);