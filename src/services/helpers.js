// Add zero to number if it is less than 10
const addZeroToNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

export { addZeroToNumber };
