export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur.price;
  }, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    case 'REMOVE_FROM_BASKET':
      console.log(action.payload);
      return { ...state, basket: state.basket.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;
