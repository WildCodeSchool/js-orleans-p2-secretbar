import './App.css';
import Formevent from './components/event/Formevent';
import Popevent from './components/event/Popevent';
import ServiceList from './components/services/ServiceList';

function App() {
  return (
    <main className="container">
      <Formevent />       
      <ServiceList />
    </main>
  );
}

export default App;
