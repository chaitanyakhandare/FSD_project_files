import React from 'react'

function Calculator() {

    function add() {
        const num1 = parseFloat(document.getElementById("firstNumber").value);
        const num2 = parseFloat(document.getElementById("secondNumber").value);
        const resultEle = document.getElementById('result');
        var result = num1 + num2;
        resultEle.textContent = result;
        console.log(result);
    }

    function sub() {
        const num1 = parseFloat(document.getElementById("firstNumber").value); // Corrected here
        const num2 = parseFloat(document.getElementById("secondNumber").value); // Corrected here
        const resultEle = document.getElementById('result');
        var result = num1 - num2;
        resultEle.textContent = result;
        console.log(result);
    }

    function multiply() {
        const num1 = parseFloat(document.getElementById("firstNumber").value); // Corrected here
        const num2 = parseFloat(document.getElementById("secondNumber").value); // Corrected here
        const resultEle = document.getElementById('result');
        var result = num1 * num2;
        resultEle.textContent = result;
        console.log(result);
    }

    function division() {
        const num1 = parseFloat(document.getElementById("firstNumber").value); // Corrected here
        const num2 = parseFloat(document.getElementById("secondNumber").value); // Corrected here
        const resultEle = document.getElementById('result');
        var result = num1 / num2;
        resultEle.textContent = result;
        console.log(result);
    }

    function clearfnc() {
        console.log("clear got clicked");

        // Get the input elements by their IDs
        const num1 = document.getElementById("firstNumber");
        const num2 = document.getElementById("secondNumber");

        // Get the result element
        const resultEle = document.getElementById('result');

        // Clear the input fields
        num1.value = "";
        num2.value = "";

        // Set the result message
        const result = "Click on button to show result.";
        resultEle.textContent = result;

        // Log the result to the console
        console.log(result);
    }

    return (
        <div className="w-full min-h-screen bg-zinc-900 flex flex-col text-white">

            <section className="w-full px-16 py-10 grid grid-cols-5 gap-5">
                <div className="col-span-2 flex flex-col px-10 py-7 border border-zinc-500 rounded-xl space-y-5">
                    <h3 className="w-full self-start text-lg text-end font-semibold tracking-wider text-zinc-600">input-section
                    </h3>
                    <label htmlFor="firstNumber" className="text-sm font-medium text-zinc-600">Enter First Number</label>
                    <input className="bg-transparent border-2 border-zinc-800 outline-none px-5 py-2 rounded-lg" type="number"
                        name="firstNumber" id="firstNumber" placeholder="Enter first number" />
                    <label htmlFor="secondNumber" className="text-sm font-medium text-zinc-600">Enter Second Number</label>
                    <input className="bg-transparent border-2 border-zinc-800 outline-none px-5 py-2 rounded-lg" type="number"
                        name="secondNumber" id="secondNumber" placeholder="Enter second number" />
                    <div className="col-span-2 flex flex-col items-start justify-center rounded-lg space-y-3">
                        <button onClick={() => { add() }}
                            className="px-5 py-2 w-full bg-violet-700 rounded-lg hover:bg-violet-800">Addition</button>
                        <button onClick={() => { sub() }}
                            className="px-5 py-2 w-full bg-violet-700 rounded-lg hover:bg-violet-800">Subtraction</button>
                        <button onClick={() => { multiply() }}
                            className="px-5 py-2 w-full bg-violet-700 rounded-lg hover:bg-violet-800">Multiplication</button>
                        <button onClick={() => { division() }}
                            className="px-5 py-2 w-full bg-violet-700 rounded-lg hover:bg-violet-800">Division</button>
                        <button onClick={() => { clearfnc() }}
                            className="px-5 py-2 w-full bg-yellow-500 text-black font-medium tracking-wider rounded-lg hover:bg-yellow-700">Clear</button>
                    </div>
                </div>

                <div
                    className="col-span-3 w-full px-10 py-7 border border-zinc-500 rounded-xl flex flex-col items-center justify-between">
                    <h3 className="w-full text-lg text-end font-semibold tracking-wider text-zinc-600 mb-4">result-section</h3>

                    <div className="w-full flex-grow flex items-center justify-center space-x-7">
                        <h3 id="result" className="text-xl text-end font-semibold tracking-wider text-zinc-100">Click on button
                            to show result.</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculator;
