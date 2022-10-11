import { ShoppingBasketOutlined } from "@material-ui/icons";

export const initialState = {
    basket: [],
}

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            // console.log("action index 1 >>>>>>>> " + action.item)
            // console.log("action index 2 >>>>>>>> " + action.item.id)
            // console.log("action index 3 >>>>>>>> " + state.item.id)
            // console.log("basket id >>>>>> " + state.basket[0].id) //12321341
            // const basketItem = state.basket;
            // const target = (element) => element === 12321341
            // console.log("index >>>>> " + basketItem.findIndex(target))
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );
            // const index = -1;
            // for (var basketItem in state.basket) {
            //     // if(basketItem.id == action.item.id)
            // }

            // console.log('index >>>>>>>>> ' + index)
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;