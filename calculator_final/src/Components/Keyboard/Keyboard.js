import './Keyboard.css';
import Key from '../Key/Key';

/*

1 2 3 +
4 5 6 -
7 8 9 *
C 0 = /

*/


const Keyboard = ({calcul, setOperation, operation}) => {
    const updateOperation = (symbol) => {
        if(symbol === '=') {
            operation === '0' ? console.log() : calcul();
        } else if(symbol === 'C') {
            setOperation("0");
        } else {
            let newOperation = operation === "0" || operation === "ERR" ? "" : operation;
            newOperation += symbol;
            setOperation(newOperation)
        }
    }

    return (
        <div className='keyboard'>
            <div className='row'>
                <Key symbol={1} updateOperation={updateOperation} />
                <Key symbol={2} updateOperation={updateOperation} />
                <Key symbol={3} updateOperation={updateOperation} />
                <Key symbol={"+"} updateOperation={updateOperation} />
            </div>
            <div className='row'>
                <Key symbol={4} updateOperation={updateOperation} />
                <Key symbol={5} updateOperation={updateOperation} />
                <Key symbol={6} updateOperation={updateOperation} />
                <Key symbol={"-"} updateOperation={updateOperation} />
            </div>
            <div className='row'>
                <Key symbol={7} updateOperation={updateOperation} />
                <Key symbol={8} updateOperation={updateOperation} />
                <Key symbol={9} updateOperation={updateOperation} />
                <Key symbol={"*"} updateOperation={updateOperation} />
            </div>
            <div className='row'>
                <Key symbol={"C"} updateOperation={updateOperation} />
                <Key symbol={0} updateOperation={updateOperation} />
                <Key symbol={"="} updateOperation={updateOperation} />
                <Key symbol={"/"} updateOperation={updateOperation} />
            </div>
        </div>
    )
}

export default Keyboard;