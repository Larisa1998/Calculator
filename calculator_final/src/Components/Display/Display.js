import './Display.css';

const Display = ({operation}) => {
    return (
        <div className='display'>
            <p>
            {operation}
            </p>
        </div>
    )
}

export default Display;