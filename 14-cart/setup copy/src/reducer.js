import {CAL, CLEAR, DEL, LOADING, MINUS, NUM, PLUS, SHOW} from './controlType';
import cartItems from './data';

export const initialState = {
  loading: true,
  cart: cartItems,
  price: 0,
  amount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return {...state, cart: []};

    case DEL:
      const filterItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filterItem,
      };

    case CAL:
      let {price, amount} = state.cart.reduce(
        (acc, cur) => {
          const {price, amount} = cur;
          acc.amount += amount;
          acc.price += price * amount;
          return acc;
        },
        {
          price: 0,
          amount: 0,
        }
      );
      price = parseFloat(price.toFixed(2));
      return {...state, price, amount};

    case NUM:
      const calculatedCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return action.payload.type === 'inc'
              ? {...item, amount: item.amount + 1}
              : {...item, amount: item.amount - 1};
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {...state, cart: calculatedCart};

    case LOADING:
      return {...state, loading: true};

    case SHOW:
      return {...state, loading: false, cart: action.payload};

    default:
      throw new Error('no match any types');
  }
};

export default reducer;
