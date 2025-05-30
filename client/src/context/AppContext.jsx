import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dummyAddress, dummyproducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;

  const navigate = useNavigate();
  //Navbar
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  //ProductCard
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  //Allproducts page
  const [searchQuery, setSearchQuery] = useState({});
  //Cart
  const [addresses, setAddresses] = useState([]);

  //Set products
  const fetchproducts = async () => {
    setProducts(dummyproducts);
  };

  //Add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  //Update cart item quantity
  const updateCartItems = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  //Remove item from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Items removed from cart");
    setCartItems(cartData);
  };

  //Total Cart item count
  const getCartCount = ()=> {
    let totalCount= 0;
    for(const item in cartItems ){
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  
  //Get total cart Amount
  const getCartAmount = ()=> {
    let totalAmount = 0;
    for( const items in cartItems){
      let itemInfo = products.find((product)=> product._id = items);
      if(cartItems[items] > 0){
        totalAmount += itemInfo.offerPrice * cartItems[items]
      }
    } 
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  //Set Address
const fetchAddresses = async ()=> {
  setAddresses(dummyAddress);
};

useEffect(() => {
  fetchAddresses();
}, [])


  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    currency,
    products,
    cartItems,
    addToCart,
    updateCartItems,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    addresses
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
