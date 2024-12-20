import React, { useReducer } from 'react';

const initialState = { name: '', email: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Form (useReducer)</h2>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
      />
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

export default Form;
