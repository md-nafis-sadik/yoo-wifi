import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateCardDetails } from "@/services";
import { setUserPaymentCard } from "@/store/module/auth/slice";
import { useDispatch, useSelector } from "react-redux";

function UserPaymentForm({ handler = () => {} }) {
  const { userPaymentCards } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const cardNumber = form?.cardNumber?.value;
    const cvc = form?.cvc?.value;
    const expireDate = form.expireDate.value;

    const { error } = validateCardDetails({
      cardNumber: cardNumber,
      cvc: cvc,
      expireDate: expireDate,
    });

    if (error) {
      return alert(error);
    }

    const data = {
      id: userPaymentCards?.length + 1,
      username,
      cardNumber,
      cvc,
      expireDate,
    };
    dispatch(setUserPaymentCard(data));
    handler();
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-3 sm:p-6 border border-main-600 rounded-xl gap-6 mt-6"
      >
        <h4 className="text-lg text-black-900 font-semibold">
          Add Credit/Debit
        </h4>
        <div className="flex flex-col gap-2 sm:gap-4 ">
          <Input
            label="Cardholder Name*"
            placeholder="Enter full name"
            name="username"
            required
          />
          <Input
            type="number"
            label="Card No.*"
            placeholder="Enter Number"
            name="cardNumber"
            className="appearance-none"
            required
          />
          <Input
            type="number"
            label="CVC/CVV2*"
            placeholder="Enter CVC code"
            name="cvc"
            required
          />
          <Input
            label="Expiry Date"
            placeholder="MM/YY"
            name="expireDate"
            required
          />
        </div>
        <div className="mt-4 sm:mt-6 flex justify-end">
          <Button type="submit">Save Address</Button>
        </div>
      </form>
    </div>
  );
}

export default UserPaymentForm;
