import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainApp/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './MainApp/Store/ConfigureStore';
import ScrollToTop from './MainApp/common/util/ScrollToTop'



const store = ConfigureStore(); 


const rootElement = document.getElementById ('root');
let render = () => 
{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <ScrollToTop>
                <ReduxToastr 
                    position ='bottom-right'
                    transitionIn= 'fadeIn'
                    transitionOut='fadeOut'
                />
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
            <ReduxToastr position ='bottom-right'
            transitionIn= 'fadeIn'
            transitionOut='fadeOut' />
                <App/>
            </ScrollToTop>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
