import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Login } from './components/login/login';
import { Databinding } from './components/data-binding/data-binding';
import { Databinding2 } from './components/data-binding/databinding2';
import { DatabindingNested } from './components/data-binding/databindingNested';
import { TwowayBinding } from './components/data-binding/databindingTwoWay.jsx';
import { NasaComponent } from './components/nasa-api/nasa.component.jsx';
import { NasaAPIcardComponent } from './components/nasa-api/nasaAPIcardStyle.jsx';
import { FakestoreComponent } from './components/fakestoreAPI/fakestoreComponent.jsx';
import { ClassBindingComponent } from './components/style.class.binding/classBInding.jsx';
import { SortComponent } from './components/style.class.binding/classbindingSort.jsx';
import { MouseDemo } from './components/mouse-demo/mousedemo.jsx';
import { MobileNumberValidate } from './components/keydemo/keydemo.jsx';
import { HomeComponent } from './components/home/home.jsx';
import { PureDemo } from './components/class-components/puredemo.jsx';
import { FormValidation } from './components/form-demo/form-demo.jsx';
import { FormikValidate } from './components/formik-demo/formikDemo.jsx';
import { YupDemo } from './components/YUP-demo/YUP-Demo.jsx';
import { FormikComponent } from './components/formik-Component/formik-Component.jsx';
import { Routing } from './components/Routing/tutorialComponent.jsx';
import { ShoppingIndex } from './Shopping-SPA/shopping-index.jsx';
import { ShoppingHome } from './Shopping-SPA/shopping-home.jsx';
import { TutorialIndex } from './tutorial/tutorial-indes.jsx';
import { CookiesProvider } from 'react-cookie';
import { TutorialManage } from './tutorial/tutorial-manage.jsx';
import { MuiDemo } from './components/mui-demo/mui-demo.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <MuiDemo />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
