/*
Team oinkyDucks -- Albert Wan and Tammy Chen
SoftDev1 pd9
K29: Sequential Progression III: Season of the Witch
2019-12-12
*/

var original = document.getElementById("h").innerHTML;

var changeHeading = function(e) {
  var h = document.getElementById("h");
  h.innerHTML = e['target']['innerHTML'];
};

var removeItem = function(e) {
  document.getElementById('thelist').removeChild(e['target'])
};

var restoreText = function(e){
  var h = document.getElementById("h")
  h.innerHTML = original;
};

var lis = document.getElementsByTagName("li");

for (var i=0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', restoreText);
    lis[i].addEventListener('click', removeItem);
};

var addItem = function(e) {
    var list = document.getElementById('thelist');
    var item = document.createElement("li");
    item.innerHTML = "WORD";
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', restoreText);
    item.addEventListener('click', removeItem);
    list.appendChild( item );
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fibonacci = function(n){
  if (n < 2) return n;
  if (n == 2) return 1;
  return (fibonacci(n-1) + fibonacci(n-2));
};

var fib
var addFib = function(e){
  var fiblist = document.getElementById('fiblist');
  var newfib = document.createElement('li');
  newfib.innerHTML = fibonacci(fib_counter);
  fib_counter++;
  fiblist.appendChild( newfib );
};

var addFib2 = function(e){
  var fiblist = document.getElementById('fiblist');
  var newfib = document.createElement('li');
  var children = fiblist.childNodes;
  var length = children.length;
  if (length < 3){
    newfib.innerHTML = 1;
  }
  else{
    newfib.innerHTML = parseInt(children[length - 1].innerHTML , 10) + parseInt(children[length - 2].innerHTML, 10);
  }
  console.log(children);
  fiblist.appendChild( newfib );
 };

var fb = document.getElementById("fb");
fb.addEventListener("click", addFib2);

/*

var removeItem = function(e){

}

var lis = document.getElementByTagName
*/

// button.addEventListener( 'click', function(e) {console.log(e);})
