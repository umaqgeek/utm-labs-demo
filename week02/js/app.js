task10();

function task10() {
    var a = confirm("Please confirm that you are ok.");
    console.log(a);
};

function task9() {
    var arr1 = [5, 4, 2, 6, 10, 5];
    var arr2 = [];
    var a = prompt("Please enter num 1");
    arr2.push(parseInt(a));
    var b = prompt("Please enter num 2");
    arr2.push(parseInt(b));
    var c = prompt("Please enter num 3");
    arr2.push(parseInt(c));
    console.log(arr1);
    console.log(arr2);
    var arr3 = arr1.concat(arr2);
    var arr4 = arr1.join(" & ");
    console.log(arr3, typeof arr3);
    console.log(arr4, typeof arr4);
    document.write("Array elements: " + arr4)
};

function task8() {
    var arr = [5, 4, 2, 6, 10, 5];
    console.log('before sort', arr); // [5, 4, 2, 6, 10, 5]
    arr.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    console.log('after sort', arr); // [2, 4, 5, 5, 6, 10]
    console.log('min: ' + arr[0]);
    console.log('max: ' + arr[arr.length - 1]);
};

function task7() {
    var arr = new Array();
    arr.push(5); // [5]
    arr.push(9); // [5, 9]
    arr.push("haha"); // [5, 9, 'haha']
    var a = arr.pop();
    console.log(a); // 'haha'
    console.log(arr); // [5, 9]
    arr.pop();
    console.log(arr); // [5]
};

function task6() {
    var arr = new Array();
    arr.push(5);
    arr.push(9);
    arr.push("haha");
    // for (var i = 0; i < arr.length; i++) {
    //     document.write(arr[i] + "<br />");
    // }
    arr.map(function (elem) {
        document.write(elem + "<br />");
    });
};

function task5() {
    var a = prompt("Enter a value");
    var b = typeof a;
    console.log(a, b);
    (a === "") ? document.write("correct") : document.write("wrong")
    if (a === "") {
        document.write("correct");
    } else {
        document.write("wrong");
    }
};

function task4() {
    var a = prompt("Enter a number:");
    if (parseInt(a) % 2 == 0) {
        document.write("Even number");
    } else {
        document.write("Odd number");
    }
};

function task3() {
    var i; // i = null
    i = 2 + 5; // i = 7
    document.write("<br />" + i); // i = 10
    i = "5ha3ha"; // i = "NaN"
    document.write("<br />" + i);
    document.write("<br />" + parseInt(i));
    i = parseInt(i) + 3; // i = 27
    document.write("<br />" + i);
};

function task1() {
    alert("Wazzup World!");
    console.error("normal log");
};

function task2() {
    var a = prompt("a?");
    var b = prompt("b?");
    var c = parseInt(a) / parseInt(b);
    c = Math.pow(c, 2);
    console.log(a + " + " + b + " = " + c);
};