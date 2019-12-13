/*
Team oinkyDucks -- Albert Wan and Tammy Chen
SoftDev1 pd9
K29: Sequential Progression III: Season of the Witch
2019-12-12
*/

var original = document.getElementById("h").innerHTML;

var changeHeading = function(e) {
    var h = document.getElementById("h");
    // target property of the event is a reference to the object that dispatched the event
    // in this case, it would be the header
    h.innerHTML = e['target']['innerHTML'];
};

var removeItem = function(e) {
    // accesses the element with given ID and removes the child at that reference of the object
    document.getElementById('thelist').removeChild(e['target'])
};

var restoreText = function(e){
    // allows header to return to original "Hello World"
    var h = document.getElementById("h")
    h.innerHTML = original;
};

var lis = document.getElementsByTagName("li");

for (var i=0; i < lis.length; i++) {
    // given the action, will know what function to do
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', restoreText);
    lis[i].addEventListener('click', removeItem);
};

var addItem = function(e) {
    // adds new element "WØ‰D" into list
    var list = document.getElementById('thelist');
    var item = document.createElement("li");
    item.innerHTML = "WORD";
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', restoreText);
    item.addEventListener('click', removeItem);
    list.appendChild( item );
};

// every time button with id 'b' is pressed, add new item
var button = document.getElementById("b");
button.addEventListener('click', addItem);

// fibonacci function from last assignment
var fibonacci = function(n){
    if (n < 2) return n;
    if (n == 2) return 1;
    return (fibonacci(n-1) + fibonacci(n-2));
};

var fib
var addFib = function(e){
    // adds next fibonacci into the list
    var fiblist = document.getElementById('fiblist');
    var newfib = document.createElement('li');
    newfib.innerHTML = fibonacci(fib_counter);
    fib_counter++;
    fiblist.appendChild( newfib );
};

var addFib2 = function(e){
    // allows for fib not to have a delay
    var fiblist = document.getElementById('fiblist');
    var newfib = document.createElement('li');
    var children = fiblist.childNodes;
    var length = children.length;
    if (length < 3){
      newfib.innerHTML = 1;
    }
    else{
      // gets the last two fibs from the list (rather than a recursive loop, runs simple addition)
      newfib.innerHTML = parseInt(children[length - 1].innerHTML , 10) + parseInt(children[length - 2].innerHTML, 10);
    }
    //console.log(children); 
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
