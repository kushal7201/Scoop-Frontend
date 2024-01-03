
import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme.js';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CategoryCarousel from './components/PopularPost.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Signinform from './pages/SignInForm.js'
import AccountManagementPage from './components/AccountManagementPage.js';
import ComposeScoopPage from './ComposeScoopPage.js'

import Signup from './pages/Signup.js';
import Profile from './components/Profile.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import LatestNews from './components/LatestNews.js';

import Scoop from './pages/Scoop.js';

import { Allnews } from './pages/Allnews.js';


function App() {
 
 return (
   <> 
   <ThemeProvider theme={theme}>
     <CssBaseline>
       {/* <Navbar />  */}
      <BrowserRouter>
      <ToastContainer />
      <Routes>
       
       <Route path="/" element={<><Home /><Footer /></>} />
       <Route path="*" element={<NotFound></NotFound>} />
       <Route path="/compose" element={<ComposeScoopPage></ComposeScoopPage>}/>
       <Route path="/signin" element={<Signinform></Signinform>}/>
       <Route path='/scoop/:scoopId' element={<Scoop />} />
       <Route path='/scoop' element={<Scoop />} />
       <Route path="/allnews" element={<Allnews/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountManagementPage/>} />
      </Routes>
      </BrowserRouter>
      </CssBaseline>

      </ThemeProvider>
    </>
  );
}

export default App;
