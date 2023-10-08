function calc(num) {
  if (num < 10) {
    num += 1;
    console.log(num);
    calc(num);
  }
}

calc(0);

