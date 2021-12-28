import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/logo192.png";

function Home() {
  const list = [
    { id: 0, name: "Macbook Air M1" },
    { id: 1, name: "Mac Mini M1" },
    { id: 2, name: "iPhone 12" },
  ];

  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>login </Link>
      <br />
      <div>
        {list.map((p, i) => {
          return (
            <p key={i}>
              <Link to={`/product/${p.id}`}>
                Produto {p.id}: {p.name}
              </Link>
            </p>
          );
        })}
      </div>

      <img className="spin-logo" src={logo} alt="img" />
    </div>
  );
}

export default Home;
