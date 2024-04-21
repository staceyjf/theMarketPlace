import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider.jsx";

function CartPage() {
  const { cart, dispatchCart } = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    setIsCartEmpty(cart.length === 0);
    console.log(cart);
  }, [cart]);

  return (
    <div>
      {isCartEmpty && <p>Sorry your cart is empty, please add some items</p>}
      {!isCartEmpty &&
        cart.map((item) => (
          <div key={item.id}>{item.title} has been added</div>
        ))}
    </div>
  );
}

export default CartPage;
