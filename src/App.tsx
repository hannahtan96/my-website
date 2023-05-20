import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
// import 'normalize.css';
// import './animate.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './img/icons/css/ionicons.css';
// import './img/font-awesome/css/font-awesome.css';
// import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './libs/easing.js';
// import 'lightbox2/dist/js/lightbox.min.js';

// import * as serviceWorker from './serviceWorker';

//import components
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import BackToTop from './components/Back-top';
// import Preloader from './components/Preloader';

function App() {
  
  return (
    <>
        <Header />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        {/* <BackToTop />
        <Preloader /> */}
    </>
  );
}

export default App;
