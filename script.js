const btns = document.querySelectorAll("button") ;
const inputEl = document.querySelector("#result")

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(btn.textContent)
        if(btn.textContent === "C"){
            clearContent();
        }else if(btn.textContent === "="){
            isEqualsTo();
        }
        else{
            inputVal(btn)
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


