import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider.jsx";

function CartPage() {
  const { cart, dispatchCart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>{item.title} has been added</div>
      ))}
    </>
  );
}

export default CartPage;
