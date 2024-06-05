import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { updateProductQty } from "../../services/product-services.js";

import CartItem from "../../components/CartItem/CartItem.jsx";
import Button from "../../components/Button/Button.jsx";
import styles from "./CartPage.module.scss";

function CartPage() {
  const navigate = useNavigate();
  const { cart, dispatchCart } = useContext(CartContext);
  const { cartItems, totalPrice, totalQty } = cart;
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
    dispatchCart({ type: "CALCULATE_TOTAL_PRICE" });
    dispatchCart({ type: "CALCULATE_TOTAL_QTY" });
  }, [cartItems, dispatchCart]);

  const handleClickWomens = () => {
    navigate("/womens");
  };

  const handleClickToBuy = () => {
    console.log(cart);
    const purchases = cart.cartItems.map((item) => ({
      id: item.id,
      newAvailableQty: item.stock - item.selectedQty,
    }));
    updateProductQty(purchases);
    dispatchCart({ type: "CLEAR_CART" });
    navigate("/thankyou");
  };

  return (
    <div>
      {isCartEmpty && (
        <div className={styles.container}>
          <h2 className={styles.title}>Cart is empty.</h2>
          <div className={styles.button}>
            <Button
              onClickCB={handleClickWomens}
              buttonText={"Shop women's"}
            ></Button>
          </div>
        </div>
      )}
      {!isCartEmpty && (
        <div className={styles.list}>
          <div className={styles.cart}>
            <h2 className={styles.cart_title}>Your Cart</h2>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className={styles.total}>
            <h2 className={styles.total_title}>Total: ${totalPrice}</h2>
            <Button
              onClickCB={handleClickToBuy}
              buttonText={"Check out"}
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
