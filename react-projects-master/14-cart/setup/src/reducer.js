const reducer = (state, action) => {

    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === 'REMOVE_CART_ITEM') {
        const newItems = state.cart.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            cart: newItems
        }
    }

    // if (action.type === 'INCREASE_ITEM_COUNT') {
    //     const id = action.payload.id;
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (cartItem.id === id) {
    //             return {
    //                 ...cartItem,
    //                 amount: cartItem.amount + 1
    //             }
    //         }
    //         return cartItem;
    //     })
    //     return {
    //         ...state,
    //         cart: tempCart
    //     }
    // }

    // if (action.type === 'DECREASE_ITEM_COUNT') {
    //     const id = action.payload.id;
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (cartItem.id === id) {
    //             return {
    //                 ...cartItem,
    //                 amount: cartItem.amount - 1
    //             }
    //         }
    //         return cartItem;
    //     }).filter(cartItem => cartItem.amount !== 0);
    //     return {
    //         ...state,
    //         cart: tempCart

    //     }
    // }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.amount += amount;
            cartTotal.total += itemTotal;
            return cartTotal;

        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2));

        return {
            ...state,
            total,
            amount,
        }
    }

    if (action.type === 'LOADING') {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return {
            ...state,
            cart: action.payload,
            loading: false
        }
    }

    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'INC') {
                    return { ...cartItem, amount: cartItem.amount + 1 }

                }
                if (action.payload.type === 'DEC') {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem;
            }
            return cartItem;
        }).filter(cartItem => cartItem.amount !== 0);

        return {
            ...state,
            cart: tempCart
        }
    }


    throw new Error('No matching action type');

}

export default reducer;