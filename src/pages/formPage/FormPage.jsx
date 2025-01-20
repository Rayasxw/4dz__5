import React from 'react';

function FormPage() {
    function changeInput(event) {
        const {value} = event.target
        console.log(value)
    }
    function send (event) {
        event.preventDefault()
        console.log("Данные отправлены")

    }
    function clicker () {
        console.log("clicked")
    }
    return (
        <div>
            <form onSubmit={send}>
                <input type="text" onInput={changeInput} placeholder="onInput"/>
                <input type="text" onInput={changeInput} placeholder="onInput"/>
                <input type="text" onInput={changeInput} placeholder="onInput"/>
                <button >send</button>
                <button type='button' onClick={clicker}>click</button>
                <button type="reset">reset</button>
            </form>
        </div>
    );
}

export default FormPage;