export const initialState = {
    basket: [],
};

export const getBasketTotal = React.useMemo(() => {
    return basket.reduce((amount, item) => item.price + amount, 0);
  }, [basket]);
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return { ...state, 
            basket: [...state.basket, action.item]
    }
    }

}

export default reducer;