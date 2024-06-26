import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {
    const context = useContext(CartContext)

    if (!context) throw Error('useCartContext must be used in an CartContextProvider')

    return context
}