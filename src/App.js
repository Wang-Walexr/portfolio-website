import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import "./css/reset.css"
import "./css/bootstrap-grid.min.css"
import "./css/animations.css"
import "./css/perfect-scrollbar.css"
import "./css/owl.carousel.css"
import "./css/magnific-popup.css"
import "./css/main.css"


function App() {
  return (
    <div className="App">


      <div className="page">
        <div className="page-content">

          <Header />
        </div>

        {/* <!-- Mobile Navigation --> */}
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <!-- End Mobile Navigation --> */}

        {/* <!-- Arrows Nav --> */}
        <div className="lmpixels-arrows-nav">
          <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
          <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
        </div>
        {/* <!-- End Arrows Nav --> */}

        <div className="content-area">
          <div className="animated-sections">
            {/* <!-- Home Subpage --> */}
            <Home />
            {/* <!-- End of Home Subpage --> */}

            {/* <!-- Resume Subpage --> */}
            <Resume />
            {/* <!-- End of Resume Subpage --> */}


            {/* <!-- Portfolio Subpage --> */}
            <Portfolio />
            {/* <!-- End of Portfolio Subpage --> */}

            {/* <!-- Contact Subpage --> */}
            <Contact />
            {/* <!-- End of Contact Subpage --> */}
          </div>
        </div>

      </div>
    </div >


  );
}

export default App;
