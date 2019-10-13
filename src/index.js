import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainApp/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './MainApp/Store/ConfigureStore';
import ScrollToTop from './MainApp/common/util/ScrollToTop'

const rootElement = document.getElementById ('root');
const store = ConfigureStore(); 
console.log(store.getState());
let render = () => 
{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
            
            </BrowserRouter>
        </Provider>
        
    , rootElement)
}
if(module.hot)
{
    module.hot.accept('./MainApp/App.jsx', () => {
        setTimeout(render);
    })
}

ReactDOM.render(
<Provider store={store}>
            <BrowserRouter>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
