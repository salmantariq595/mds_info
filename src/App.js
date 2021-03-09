import { BrowserRouter } from 'react-router-dom';


// Imported Componets and Files
import Main from './Components/Main'



function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
