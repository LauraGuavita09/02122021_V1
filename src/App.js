import {BrowserRouter as Router,Route} from 'react-router-dom';
import SupBarra from './componentes/SupBarra';

import proveedoresver from './componentes/proveedoresver';
import Pendon from './componentes/Pendon';

function App() {
  return (
    <Router>

    <SupBarra/>

    <Pendon/>
    

        <Route path='/proveedoresver'exact component={proveedoresver}/>
       
    
    </Router>
    
  );
}

export default App;
