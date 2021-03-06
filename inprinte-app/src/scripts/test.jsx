export const addToCart = (item, itemQuantity) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    let index = cart.findIndex(x => x.id === item);
    if (index === -1) {
        cart.push({
            id: item,
            quantity: itemQuantity
        });
    } else {
        cart[index].quantity += itemQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
}

export const updateCart = (item, itemQuantity) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    let index = cart.findIndex(x => x.id === item);
    if (index === -1) {
        cart.push({
            id: item,
            quantity: itemQuantity
        });
    } else {
        cart[index].quantity = itemQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeOneItemCart = (item) => {
    //remove the item from the cart
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    let index = cart.findIndex(x => x.id === item);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}



