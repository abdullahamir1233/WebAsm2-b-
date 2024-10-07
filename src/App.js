import logo from './logo.svg';
import './App.css';
import ProfessionalPortfolioForm from './ComplaintForm';

function App() {
  const title="Law";
  const depart = "operations";
  return (
    <ProfessionalPortfolioForm title={title} depart={depart} />
  );
}

export default App;
