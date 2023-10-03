import './Calculator.css';
import Display from '../Display/Display';
import Keyboard from '../Keyboard/Keyboard';
import { useState } from 'react';

const Calculator = () => {

    const [operation, setOperation] = useState("0");

    const calcul = () => {
        try {
            // eslint-disable-next-line no-eval
            setOperation(eval(operation).toFixed(2));
        }
        catch(e) {
            console.log(e);
            setOperation("ERR");
        }
    }

    return (
        <div className='calculator'>
            <Display operation={operation} />
            <Keyboard calcul={calcul} setOperation={setOperation} operation={operation} />
        </div>
    )
}

export default Calculator;