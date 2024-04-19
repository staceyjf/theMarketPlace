export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: action.payload.id, name: action.payload.name, price: action.payload.price }];
      // filter out the product we don't want
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default: {
      throw Error('Unknown action: ' + action.type);
    }
    }
    
}
