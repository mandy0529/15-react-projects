import {CLEAR, DEL, MINUS, PLUS} from './controlType';
import cartItems from './data';

export const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      console.log(state, state);
      return {...state, cart: []};
    case DEL:
      const filterItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filterItem,
      };
    case PLUS:
      const selectedItem = state.cart.map((cart) => {
        if (cart.id === action.payload) {
          return {...cart, amount: cart.amount + 1};
        }
        return cart;
      });
      return {...state, cart: selectedItem};

    case MINUS:
      const minusItem = state.cart
        .map((item) => {
          return item.id === action.payload
            ? {...item, amount: item.amount - 1}
            : item;
        })
        .filter((item) => item.amount !== 0);
      console.log(minusItem, '마이너스');

      return {
        ...state,
        cart: minusItem,
      };

    default:
      throw new Error('no match any types');
  }
};

export default reducer;
