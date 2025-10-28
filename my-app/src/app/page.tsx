"use client";
//https://fakestoreapi.com/products

//fetch from the api
//take a look at the data and see how its structure { id: name}

//display the text id on the screen
//display image, title, price

//add a button /delete button
//adding/deleting incrase/decrease the cart total
//ternay if its not inthe cart show add if it is show delete and udapte thecart

//use state cart use reduce to sum up the total of the items and display in the top right
//display the cart total at the top right

//cart total will have a running total based on what was clicked

//clicking will add the item to the cart to

import { useState, useEffect } from "react";

export default function Home() {
  type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
  };

  const [clothes, setClothes] = useState<Product[]>([]);
  //type with clothes item id, title, price
  //map id=> cart item
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");

      const parsedData: Product[] = await data.json();

      setClothes(parsedData);
    };
    fetchData();
  }, []);

  const handleAddToCart = (item: Product) => {
    console.log("item", item);

    setCart(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (id: number) => {
    console.log("id", id);

    setCart(prev => prev.filter(cartItem => cartItem.id !== id));
  };
  console.log("cat", cart);
  // i'm goign to display the button and set the on click and then just log clicked with the id

  //adding right now

  //remove the + ternary if its inthe cart show - instead otherwise show +

  //cart is an array

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          border: "5px solid white",
          position: "relative",
        }}
      >
        <h2 style={{ fontSize: "50px", color: "white", position: "absolute", right: "10px", top: "10px" }}>
          {cart.reduce((acc, cur) => +cur.price + acc, 0).toFixed(2)}
        </h2>
        {clothes.map(item => {
          const inCart = cart.find(cartItem => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                flexDirection: "column",
              }}
            >
              <div style={{ margin: "5px" }}>
                <p> {item.title}</p>
                <p>{item.price}</p>
              </div>
              <img src={item.image} style={{ width: "150px" }} />
              {inCart ? (
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={{
                    width: "100%",
                    borderRadius: "4%",
                    fontSize: "40px",
                  }}
                >
                  {" "}
                  -
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart({ id: item.id, price: item.price, title: item.title })}
                  style={{
                    width: "100%",
                    borderRadius: "4%",
                    fontSize: "40px",
                  }}
                >
                  {" "}
                  +
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
