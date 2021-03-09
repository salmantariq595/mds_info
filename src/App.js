import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


// Imported Componets and Files
import Main from './Components/Main'
import { ConfigureStore } from "./Redux/configureStore";



//making a const for configure Store
const store=ConfigureStore();


function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
