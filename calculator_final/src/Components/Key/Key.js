import "./Key.css";

const Key = ({ symbol, updateOperation }) => {
  return (
    <div className='col-3 key' onClick={() => updateOperation(symbol)}>
      <span>{symbol}</span>
    </div>
  );
};

export default Key;
