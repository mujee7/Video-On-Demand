import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import DApp from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MoviePage from './MoviePage';
import LoginSingup from './LoginSingup';
import AlonePages from "./Alonepages"
import Video from './video';
const AnotherComponent = React.lazy(() => import('./slidercarousel.js'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>

    <Routes>
    <Route path='/Movies/:id' element={<MoviePage/>}></Route>
    <Route path='/video' element={<Video/>}/>
      <Route path='/' element={<DApp/>}/>
      <Route path='/Live' element={<AlonePages data={"live"} />}/>
      <Route path='/Movies' element={<AlonePages data={"movies"}/>}/>
      <Route path='/Shows' element={<AlonePages data={"shows"}/>}/>
      <Route path='/Kids' element={<AlonePages data={"kids"}/>}/>
      <Route path='/ComingSoon' element={<AlonePages data={"coming"}/>}/>
      
      <Route path='/Login' element={<LoginSingup/>}/>
    </Routes>
  </BrowserRouter>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
