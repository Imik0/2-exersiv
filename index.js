let div= document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
document.body.append(div);
div.append(textNode);
div.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.margin = "50px";
function multi(){
    let inp1 = document.getElementById('inp1').value,
    inp2 = document.getElementById('inp2').value;

    console.log(inp1*inp2);
}