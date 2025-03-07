function cariMedian(arr) {
    arr.sort((a, b) => a - b);

    const arrLength = arr.length;
    const mid = Math.floor(arrLength / 2);

    if (arrLength % 2 == 0){
        return (arr[mid] + arr[mid-1]) / 2;
        
    }
    else{
        return arr[mid];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5