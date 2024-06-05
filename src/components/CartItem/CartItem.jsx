import { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";

import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  const { cart, dispatchCart } = useContext(CartContext);

  const handleClick = () => {
    dispatchCart({
      type: "REMOVE_FROM_CART",
      payload: {
        id: item.id,
      },
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={item.thumbnail}
          alt="product image"
        />
      </div>
      <div className={styles.desc}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.text}>{item.brand}</p>
        <p className={styles.link}>Selected Size: {item.selectedSize}</p>
        <p className={styles.text}>Quantity: {item.selectedQty}</p>
        <p className={styles.text}>
          $ {item.discountedPrice * item.selectedQty}
        </p>
        <p onClick={handleClick} className={styles.button}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;
