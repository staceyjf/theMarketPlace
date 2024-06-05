export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case "CALCULATE_TOTAL_PRICE":
      const totalPrice = state.cartItems.reduce((acc, product) => {
        return (acc += product.discountedPrice * product.selectedQty);
      }, 0);
      return { ...state, totalPrice };

    case "CALCULATE_TOTAL_QTY":
      const totalQty = state.cartItems.reduce((acc, product) => {
        return (acc += product.selectedQty);
      }, 0);
      return { ...state, totalQty };

    case "CLEAR_CART":
      return {
        cartItems: [],
        totalPrice: 0,
        totalQty: 0,
      };

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
