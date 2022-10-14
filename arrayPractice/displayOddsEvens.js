function display(arr, label) {
  let even = 0;
  let odd = 0;

  //loop through every row in the array.
  for (let i = 0; i < arr.length; i++) {
    //if array index modulus 2 equals remainder 1 then add 1 to odd.
    if (arr[i] % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }
  if (odd > even) {
    return (
      "There are " +
      odd +
      " odd " +
      label +
      " and There are " +
      even +
      " even " +
      label
    );
  } else {
    return (
      "There are " +
      even +
      " even " +
      label +
      " and There are " +
      odd +
      " odd " +
      label
    );
  }
}

console.log(display([1, 2, 3, 4, 5], "numbers"));
console.log(display([100, 22, 78, 49, 58], "temperatures"));
