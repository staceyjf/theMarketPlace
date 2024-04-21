export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload }];
    // filter out the product we don't want
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
