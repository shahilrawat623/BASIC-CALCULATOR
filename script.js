const btns = document.querySelectorAll("button") ;
const inputEl = document.querySelector("#result");
const backEl = document.querySelector(".back");

btns.forEach((btn)=>{
    btn.addEventListener("click",() =>{
        if(btn.textContent === "C"){
            clearContent();
        }else if(btn.textContent === "="){
            isEqualsTo();
        }
        else {
            inputVal(btn);
        } 
    })
})

const inputVal = (btn) => {
    inputEl.value += btn.textContent;
}
const isEqualsTo = () => {
    inputEl.value = eval(inputEl.value);
};

const clearContent = () => {
    inputEl.value = "";
};



backEl.addEventListener("click", () => {
  inputEl.value = inputEl.value.slice(0, -1);
});






