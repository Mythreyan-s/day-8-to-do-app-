// to add x marks 
var cross =document.getElementsByTagName("LI");
var i;
for(i=0;i<cross.length;i++)
{
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    cross[i].appendChild(span);
}

// cloick on close button to hide
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++)
{
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
} 
//add a checked when clicking on last item
var list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagname === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

//create a new list item
function newElement(){
    var li =document.createElement("li");
    var inputValue =document.getElementById("myInput").value;
    var t =document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '')
    {
        alert("You must write something!");
    }else{
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myInput").value="";

    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++)
    {
        close[i].onclick =function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }
}