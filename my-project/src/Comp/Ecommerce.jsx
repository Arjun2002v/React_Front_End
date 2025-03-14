import React, { useState } from "react";

export const Ecommerce = () => {
  const [fav, setFav] = useState([]);
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState([]);
  const [cart, setCart] = useState([]);

  const Products = [
    {
      name: "S25 Ultra",
      price: 89000,
      available: "Out of Stock",
      id: "445434",
    },
    { name: "Iphone", price: 99000, available: "Available", id: "44524" },
    { name: "Vivo", price: 59000, available: "Out of Stock", id: "445245" },
    { name: "Nothing", price: 49000, available: "Available", id: "4452" },
  ];

  const addFav = (item) => {
    setFav((prev) => {
      return prev.some((favItem) => favItem.id === item.id)
        ? prev.filter((favItem) => favItem.id !== item.id)
        : [...prev, item];
    });

    setIcon((prev) => {
      return prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id];
    });
  };
  const addToCart = (product) => {
    setCart((prevCart) => {
      return prevCart.some((cartItem) => cartItem.id === product.id)
        ? prevCart.filter((cartItem) => cartItem.id !== product.id) // Remove from cart
        : [...prevCart, product]; // Add to cart
    });
  };

  return (
    <>
      <div>
        <div>
          {Products.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "40px" }}>
              <p>{item.name}</p>
              <p>{item.price}</p>

              {item.available === "Out of Stock" ? null : (
                <button onClick={() => addToCart(item)}>
                  {cart.some((cartItem) => cartItem.id === item.id)
                    ? `🛒 ${cart.length}`
                    : "Add to Cart"}
                </button>
              )}

              <button onClick={() => addFav(item)}>
                {icon.includes(item.id) ? `❤` : "Add to Favourites"}
              </button>
            </div>
          ))}
        </div>

        <button onClick={() => setVisible(!visible)}>See Favourites</button>
        {visible && (
          <>
            <h3>Favourite Items</h3>
            {fav.length > 0 ? (
              fav.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "40px" }}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))
            ) : (
              <p>No favourites added</p>
            )}
          </>
        )}
      </div>
    </>
  );
};
