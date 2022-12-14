
const initialCart ={
    cart: []
}
const cartReducer = ( state = initialCart, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                cart: [...state.cart, action.data]
            }
            case "DELETE":
                if(action.data){
                    state.cart.splice(state.cart.indexOf(action.data),1)
                }
                return {
                cart: [...state.cart]

                }
        default: 
        return state;
    } 
}

export {cartReducer};