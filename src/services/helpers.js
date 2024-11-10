// Add zero to number if it is less than 10
const addZeroToNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

function validateCardDetails({ cardNumber = "", cvc = "", expireDate = "" }) {
  const cardNumberRegex = /^\d{13,19}$/;
  const cvcRegex = /^\d{3,4}$/;
  const expireDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  if (!cardNumberRegex.test(cardNumber)) {
    return { error: "Card number must be between 13 and 19 digits." };
  }

  if (!cvcRegex.test(cvc)) {
    return { error: "CVC must be 3 or 4 digits." };
  }

  if (!expireDateRegex.test(expireDate)) {
    return { error: "Expire date must be in the format MM/YY." };
  }

  return { error: null };
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { addZeroToNumber, validateCardDetails, validateEmail };
