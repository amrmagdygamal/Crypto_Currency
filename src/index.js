import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import centralStore from './app/centralStore'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
  <Provider store={centralStore}>
    <App />
  </Provider>
</Router>
);

