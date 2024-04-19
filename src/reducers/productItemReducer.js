export function createInitialState(product) {
return {
    ...product,
    selectedSize: 'S',
    selectedQty: 1,
    discountedPrice: 0
}
}

export function productItemReducer(state, action) {
    // common to write them as switches
    // state is like 'this' (can use whatever we want as a term)
    // actions are like instructions you pass to the reducer function 
    // don't modify objects or arrays in state, always return a new object


  switch (action.type) {
    case 'SET_FINAL_PRICE':
      return {
        ...state,
        discountedPrice: (Math.round(
          state.price * ((100 - state.discountPercentage) / 100) * 100
        ) / 100),
      };
    // case 'INCREMENT_QTY': 
    //   return {
    //       ...state
    //   }  
    // case 'DECREMENT_QTY': 
    //   return {
    //       ...state,
    //       // logic  
    //   }  
    case 'UPDATE_PRODUCT': 
      return {
          ...state,
          selectedSize: action.selectedSize,
          selectedQty: action.selectedQty
      } 
    default: {
      throw Error('Unknown action: ' + action.type);
    }
    }
    
}