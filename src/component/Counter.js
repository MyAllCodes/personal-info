// src/component/Counter.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../reducers/counterSlice';
import { clearValue, setValue } from '../reducers/dataSlice';

const Counter = () => {
  const[inputValue,setInputValue]=useState('');
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.data.name);

  const setValueInRedux = () => {
    dispatch(setValue({ key: 'name', value: inputValue }));
    console.log("name : "+name);
  };

  const clearNameInRedux = () => {
    dispatch(clearValue({ key: 'name' }));
  };

  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <br />
      <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
      <button className="button" onClick={setValueInRedux}>
        Set Name
      </button>
      <button className="button" onClick={clearNameInRedux}>
        Clear Name
      </button>
    </div>
  );
};

export default Counter;
