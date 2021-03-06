import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import TransactionForm from './components/TransactionForm';

function App() {
  const savings = useSelector(state => state.savings)
  const checking = useSelector(state => state.checking)

  return (
    <div className="App">
      <Account displayName="Savings Account" balance={savings} />
      <Account displayName="Checking Account" balance={checking} />
      <TransactionForm />
    </div>
  );
}

export default App;
