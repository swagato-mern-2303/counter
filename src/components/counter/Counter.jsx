import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count === 100) return;
        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <h1 className="counter__header">Count</h1>
            <div className="counter__body">
                <button className="decrement" onClick={decrement}>
                    <i className="fa-solid fa-circle-minus"></i>
                </button>
                <span className="count">{count}</span>
                <button className="increment" onClick={increment}>
                    <i className="fa-solid fa-circle-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default Counter;
