// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
    let arrSum = 0;
    for (arrItem of arr) {
      arrSum = arrSum + arrItem;  
    }
    return arrSum;  
  }
  
  sumArray([1,2,10]);