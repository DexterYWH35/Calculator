function display(item){
    document.getElementById("display").value +=item
    console.log(item)
}

function clr(){
    document.getElementById("display").value = ''
}

function calc(){
    var result = document.getElementById("display").value
    let final = eval(result)

    document.getElementById("display").value = final 

    console.log(final)

}