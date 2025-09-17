//a. Console output will be "you just clicked #4 button"
//This is because hoisting and the function-scoped nature of the var keyword. The for loop completes its execution, and the variable i is set to its final value of 4. Each click event listener forms a closure that shares the same reference to this single i variable. Therefore, by the time any of the buttons are clicked, the value of i has already become 4.

//b.Before ES6
for (var i = 1; i <= 3; i++) {
    (function(j) {
        document.getElementById('btn' + j).addEventListener('click', function() {
            console.log('you just clicked #' + j + ' button');
        });
    })(i);
}

//After ES6
for (let i = 1; i <= 3; i++) {
    document.getElementById('btn' + i).addEventListener('click', function() {
        console.log('you just clicked #' + i + ' button');
    });
}