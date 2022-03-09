let calledCount = 0;

export const add = (numbers) => {
  calledCount += 1;

  if (numbers.trim().length === 0) {
    return 0;
  }

  let regex = numbers.match(/(?<=\/\/)[\s\S]*(?=\n)/g);

  if (regex && regex.length > 0) {
    numbers = numbers.substring(3 + regex[0].length);
    numbers = numbers.replace(regex[0], ",");
  }

  let numArr = numbers.split(/,|\n/);

  numArr = numArr.map((num) => parseInt(num));

  checkNegatives(numArr);

  return numArr.reduce((prev, curr) => {
    if (curr <= 1000) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
};

const checkNegatives = (numArr) => {
  let negatives = numArr.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw `negatives not allowed: ${negatives}`;
  }
};

export const getCalledCount = () => {
  return calledCount;
};
