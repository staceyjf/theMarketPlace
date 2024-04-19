import { useReducer, createContext } from "react";
import {cartReducer} from "../reducers/cartReducer.js";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  // takes reducer function, initial state, initializer function (optional - don't need one as its empty to start with)
  const [cart, dispatchCart] =  useReducer(cartReducer, []);

  // don't need a useEffect as its empty when it starts

  // provide all components with cart and dispatchCart
  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
