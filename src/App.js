
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import CardView from './CardView';
import {HeroLayout3} from './ui-components';

function App() {

  return (
    <div className="App">
      <CardView/>
      <HeroLayout3/>
    </div>
  );
}

export default App;
