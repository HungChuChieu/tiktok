import { useState, useMemo, useRef, useEffect } from "react";

const MeMoo = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [cart, setCart] = useState([]);

  const nameRef = useRef();
  const handleAddCart = () => {
    setCart((prev) => [...prev, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  useEffect(() => {
    console.log(localStorage.getItem("cart"));
    const result =  JSON.parse(localStorage.getItem("cart")) || cart;
    setCart(result);
    console.log(result);
  }, []);

  const handleSave = () => {
    console.log("save thanh cong vao localStorage");
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const total = useMemo(() => {
    const result = cart.reduce((total, product) => {
      console.log("tinh toan lai ...");
      return total + product.price;
    }, 0);
    return result;
  }, [cart]);
  return (
    <div style={{ padding: 20 }}>
      <div>
        <input
          ref={nameRef}
          value={name}
          placeholder="Enter name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={price}
          placeholder="Enter price..."
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <button onClick={handleAddCart}>Add</button>
      <button onClick={handleSave}>Save</button>
      <div>
        <h1>Total: {total}</h1>
        <ol>
          {cart.map((c, index) => (
            <li key={index}>
              {c.name} - {c.price}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MeMoo;
