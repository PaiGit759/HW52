ar = new Array("one", "two", "three", "four", "five");

var el_arr;

var ind = new Number;


sss = "Array content =  " + ar;


var boxElem = document.activeElement.querySelector(".exsample");

boxElem.innerHTML = sss;

function Return_an_array_element_by_index(arr, index) {
    if ((typeof (index) == "number") && (index <= (ar.length - 1))) {
        var boxElem1 = document.activeElement.querySelector(".exsample1");
        boxElem1.innerHTML = boxElem1.innerHTML + " True";
        return ar[index];
    } else {
        var boxElem1 = document.activeElement.querySelector(".exsample1");
        boxElem1.innerHTML = boxElem1.innerHTML + " False";
        return undefined;

    }
};

ind = 2;

el_arr = Return_an_array_element_by_index(ar, ind);


if (el_arr != undefined) {
    var boxElem2 = document.activeElement.querySelector(".exsample2");
    boxElem2.innerHTML = boxElem2.innerHTML + ind + " = " + el_arr;
} else {
    var boxElem2 = document.activeElement.querySelector(".exsample2");
    boxElem2.innerHTML = boxElem2.innerHTML + ind + " = undefined";
}