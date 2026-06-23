import { useCartFacade } from "../hooks/facade/useCartFacade";

const Cart = () => {
  const { items, total, discount } = useCartFacade();

  return (
    <div>
      <h1>Cart</h1>

      <div className="">
        {items.map((el) => (
          <div className="">
            <div className="">{el.name}</div>
            <div className="">{el.price}</div>
          </div>
        ))}
      </div>

      <div className="">
        Discount: {discount}
      </div>
      <div className="">
        Total: {total}
      </div>
    </div>
  );
};

export default Cart;
