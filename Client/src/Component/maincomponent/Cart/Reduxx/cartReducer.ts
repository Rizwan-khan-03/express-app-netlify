import * as action_type from '../../../../store/Constant';

interface AuthenticationState {
  loading: boolean;
  redirect: boolean;
  cart: any[];
  error?: string;
}

const initialState: AuthenticationState = {
  loading: false,
  redirect: true,
  cart: [],
};

export const cartReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    //ADD TO CART
    case action_type.ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.data]
      };
    case action_type.ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
