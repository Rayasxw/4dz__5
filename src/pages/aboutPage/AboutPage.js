import {useRef, useState} from 'react';

function AboutPage() {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    function increment () {
        countRef.current = countRef.current + 1
    }
    function getCount () {
        console.log(countRef.current)
    }
    return (
        <div>
            <h2>{countRef.current}</h2>
            <button onClick={increment}>+</button>
            <button onClick={getCount}>get from useRef</button>
        </div>
    );
}

export default AboutPage;