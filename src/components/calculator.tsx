import { useState } from "react";

function Calculator() {
    const [data, setDate] = useState(null);
    const [input, setInput] = useState("");
    //const [showError, setShowError] = useState(false);

    



    return (
        <div className="calculator-body">
            <div className="screen">
                <div className="top-screen"></div>
                <div className="bottom-screen"></div>
                <div className="keypad">

                    <button>+/-</button>
                    <button>C</button>
                    <button className="double-space">AC</button>  
                    <button>7</button>

                    <button>8</button>
                        
                    <button>9</button>
                    <button>+</button>

                    <button>4</button>
                    <button>5</button>
                    <button>6</button>

                    <button>-</button>

                    <button>1</button>

                    <button>2</button>
                    <button>3</button>

                    <button>*</button>
                    <button className="double-space">0</button>
                    <button>.</button>

                    <button>÷</button>
                    <button className="double-space" id="empty-button">&nbsp;</button>
                    <button className="double-space">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;