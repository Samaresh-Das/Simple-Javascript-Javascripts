function display(value){
    document.getElementById('textarea').value += value; //to get the values side by side in the text field

}

function calculate(){
    let value = document.getElementById('textarea').value;
    let answer = eval(value);
    document.getElementById('textarea').value = answer;
}

function clr(){
    document.getElementById('textarea').value = null;
}