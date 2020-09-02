


function CartReducer((state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item=action.payload;
            const product=state.cartItems.filter(x=>x.product===item.product);
    }
})