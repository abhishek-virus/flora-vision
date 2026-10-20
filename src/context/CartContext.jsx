import {
  createContext,
  useContext,
  useState
} from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add a plant to cart
  function addToCart(plant) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...plant,
          quantity: 1
        }
      ];
    });
  }

  // Remove a plant from cart
  function removeFromCart(plantId) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== plantId)
    );
  }

  // Update plant quantity
  function updateQuantity(plantId, quantity) {
    if (quantity < 1) {
      removeFromCart(plantId);
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === plantId
          ? { ...item, quantity }
          : item
      )
    );
  }

  // Total quantity of all plants
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price of all plants
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Clear cart after demo checkout
  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
}