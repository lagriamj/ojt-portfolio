import "./App.css";
// import logo from "./assets/logo2.png";
import About from "./sections/About";
import ArtifactsContent from "./sections/ArtifactsContent";
import Artificats from "./sections/Artificats";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import CvPage from "./sections/CvPage";
import EndorsementAndAcceptance from "./sections/EndorsementAndAcceptance";
import Home from "./sections/Home";
import Works from "./sections/Works";

function App() {
  return (
    <div className="drawer overflow-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-main text-white">
        {/* Navbar */}
        <div className="w-full navbar bg-main text-white fixed top-0 z-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">lagriamj.portfolio</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#cv">CV and Cover Letter</a>
              </li>
              <li>
                <a href="#letters">Letters</a>
              </li>
              <li>
                <a href="#artificats">Artifacts</a>
              </li>
              <li>
                <a href="#certificates">Certificates</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="mt-16 h-auto" id="home">
          <Home />
        </div>
        <div className="h-auto" id="about">
          <About />
        </div>
        <div className="h-auto" id="cv">
          <CvPage />
        </div>
        <div className="h-auto" id="letters">
          <EndorsementAndAcceptance />
        </div>
        <div className="h-auto" id="artificats">
          <Artificats />
        </div>
        <div className="h-auto">
          <ArtifactsContent />
        </div>
        <div className="h-auto" id="certificates">
          <Certificates />
        </div>
        <div className="h-auto" id="works">
          <Works />
        </div>
        <div className="h-auto" id="contact">
          <Contact />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-main text-white">
          {/* Sidebar content here */}
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#cv">CV and Cover Letter</a>
          </li>
          <li>
            <a href="#letters">Letters</a>
          </li>
          <li>
            <a href="#artificats">Artifacts</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
