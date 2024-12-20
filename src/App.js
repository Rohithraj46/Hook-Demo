import React from 'react';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import Form from './components/Form';
import FocusInput from './components/FocusInput';
import ExpensiveCalculation from './components/ExpensiveCalculation';
import MemoizedCounter from './components/MemoizedCounter';

const App = () => {
  return (
    <div>
      <Counter />
      <DataFetcher />
      <ThemeSwitcher />
      <Form />
      <FocusInput />
      <ExpensiveCalculation />
      <MemoizedCounter />
    </div>
  );
};

export default App;
