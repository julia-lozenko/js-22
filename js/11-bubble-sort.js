const ex4 = [2, 65, 89];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('1', arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log('2', arr[j]);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}
console.log(bubbleSort(ex4));