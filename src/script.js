const form = document.querySelector("form");
const input = document.querySelector("input");
const span = document.querySelector("#error");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value == "" || !input.value.match(pattern)) {
        span.classList.remove('hidden');
        span.classList.add('block');
    }
    else{
        span.classList.remove('hidden');
        span.classList.add('hidden');

        input.value = "";
    }
})