// var starts from here
var $ = function(a){return document.querySelector(a);};
var $all = function(a){return document.querySelectorAll(a);};

var codeBlock = $all(".code");
var code = $all("code");
//var ends from here

// function this starts here
function syntaxThis() {
    if(code[i].innerHTML.match(/this/g)){
        code[i].innerHTML = code[i].innerHTML.replace(/this/g, "<obj>this</obj>");
    }
}
for(var i = 0; i < code.length; i++){
    syntaxThis();
}
// funtion this ends here

// function fun starts here
function syntaxFun() {
    if(code[i].innerHTML.match(/function/g)){
        code[i].innerHTML = code[i].innerHTML.replace(/function/g, "<fun>function</fun>");
    }
}
for(var i=0; i < code.length; i++){
    syntaxFun();
}
// function fun ends here