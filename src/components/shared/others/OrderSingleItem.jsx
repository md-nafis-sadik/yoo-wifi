function OrderSingleItem({ title = "", description = "" }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-base sm:text-lg text-black-700">{title}</span>
      <span className="text-base sm:text-lg text-black-700">{description}</span>
    </div>
  );
}

export default OrderSingleItem;
