import { createContext, useReducer } from 'react';
const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (item) => { },
    incrementItem: (item) => { },
    clearAll: () => { },
})
function cartReducer(state, action) {
    if (action.type == 'ADD_ITEM') {
        // UPDATE STATE
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        // jika tidak ditemukan
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            });
        }
        return { ...state, items: updatedItems }
    }

    if (action.type === 'INCREMENT_ITEM') {
        const existingIndex = state.items.findIndex(item => item.id === action.id);
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingIndex];

        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1 // Tambah jumlah
        };

        updatedItems[existingIndex] = updatedItem;
        return { ...state, items: updatedItems };
    }
    if (action.type === 'DECREMENT_ITEM') {
        const existingIndex = state.items.findIndex(item => item.id === action.id);
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingIndex];

        if (existingItem.quantity === 1) {
            updatedItems.splice(existingIndex, 1); // Hapus jika sisa 1
        } else {
            updatedItems[existingIndex] = {
                ...existingItem,
                quantity: existingItem.quantity - 1 // Kurangi jumlah
            };
        }
        return { ...state, items: updatedItems };
    }
    if (action.type === 'CLEAR_ALL') {
        return { ...state, items: [] };
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        incrementItem,
        clearAll
    }
    function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        })
    }
    function removeItem(id) {
        dispatchCartAction({
            type: 'DECREMENT_ITEM',
            id
        })
    }
    function incrementItem(id) {
        dispatchCartAction({
            type: 'INCREMENT_ITEM',
            id
        })
    }
    function clearAll() {
        dispatchCartAction({
            type: 'CLEAR_ALL'
        })
    }
    console.log(cartContext)
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext;