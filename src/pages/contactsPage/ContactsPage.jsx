import {useMemo, useState} from 'react';
import MainPage from "../mainPage/MainPage";

function ContactsPage(props) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const result = useMemo(() => {
        return 10 + 2
    },[])
    function increment () {
        setCount(count + 1)
    }
    function increment2 () {
        setCount2(count2 + 2)
    }
    return (
        <div>
            <h2>{count } - {count2}</h2>
            <button onClick={increment}>+</button>
            <button onClick={increment2}>+2</button>
        </div>
    );
}

export default ContactsPage;