'use strict';
let arrCopy = arr => {
    let newArr = [];
    arr.forEach((element, index) => {
        newArr[index] = element;
    });
    return newArr;
}
console.log('-------------arrCopy--');
let arr1_Old = [1, 2, 3];
let arr2_Old = [1, 2, 3, [10, 20]];
const arr1 = arrCopy(arr1_Old);
console.log(arr1_Old, arr1);
const arr2 = arrCopy(arr2_Old);
console.log(arr2_Old, arr2);
/*------------------------------------------------------- */




let arrToString = arr => {
    let newArr = [];
    arr.forEach((element, index) => {
        newArr[index] = '' + element;
    });
    return newArr;
}
console.log('-------------arrToString--');
arr1_Old = [1, 2, 3];
arr2_Old = [10, 200, 3333];
const arr1_txt = arrToString(arr1_Old);
console.log(arr1_Old, arr1_txt);
const arr2_txt = arrToString(arr2_Old);
console.log(arr2_Old, arr2_txt);
/*------------------------------------------------------- */






let getLength = arr => {
    let newArr = [];
    arr.forEach((element, index) => {
        newArr[index] = element.length;
    });
    return newArr;
}
console.log('-------------getLength--');
arr1_Old = ['Ivan', 'Pavlo', 'Ira'];
arr2_Old = ['Oleksiy', 'Andriana'];
const arr1_len = getLength(arr1_Old);
console.log(arr1_Old, arr1_len);
const arr2_len = getLength(arr2_Old);
console.log(arr2_Old, arr2_len);
/*------------------------------------------------------- */







let removeDublicates = arr => {
    let newArr = [];
    arr.forEach((element, index) => {
        arr[index] = element.toLowerCase();
    });

    while (arr.length > 1) {
        let origin = arr[0];
        let tmp_arr = arr.slice(1);
        while (tmp_arr.includes(origin)) {
            tmp_arr.splice(tmp_arr.indexOf(origin), 1)
        }
        newArr.push(origin);
        arr = tmp_arr;
    }
    newArr.push(arr[0]);
    return newArr;
}
console.log('-------------removeDublicates--');
arr1_Old = ['Html', 'css', 'html', 'js'];
arr2_Old = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'];
const arr1_dub = removeDublicates(arr1_Old);
console.log(arr1_Old, arr1_dub);
const arr2_dub = removeDublicates(arr2_Old);
console.log(arr2_Old, arr2_dub);