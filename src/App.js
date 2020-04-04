export const add = (x, y) => {
    return x + y;
} 

export const total = (shipping, subTotal) => {
    return 'Ksh. ' +  add(shipping, subTotal);
}