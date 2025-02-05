import { createContext } from "react";
import {products} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = () => {

    const currency = 'Rp';
    const deliveryCost = 17000;

    const value = {
        products
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;