import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";

function Home() {

    const [speed] = React.useState(10)

    const list = [
        { id: 0, name: "Macbook Air M1" },
        { id: 1, name: "Mac Mini M1" },
        { id: 2, name: "iPhone 12" },
    ];

    return (
        <div>
            <h1>Home</h1>
            <Link to={'/login'}>login </Link>
            <br />
            <div>
                {list.map(p => {
                    return <p><Link to={`/product/${p.id}`}>Produto {p.id}: {p.name}</Link></p>
                })}
            </div>

            <img style={{ animation: `spin ${speed}s linear infinite` }} src={'/logo512.png'} />
        </div>
    );
}

export default Home;