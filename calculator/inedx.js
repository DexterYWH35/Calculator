//global
let ans = document.getElementById("display");

function display(item){
    ans.value +=item;
}

function clr(){
    ans.value = "";
}

function calc(){
    const result = ans.value;
    let final = eval(result);

    ans.value = final;
}