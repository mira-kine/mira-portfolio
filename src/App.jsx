import Home from './views/Home/Home';
import './App.css'; /* Global CSS */

export default function App() {
  // const images = imageData.map((image, index) => )
  return (
    <>
      <div className="main-container">
        <div className="scroll-container">
          <div className="content">
            <div className="gallery">
              {/* <div className="background-text fill">
                Mira Kinebuchi Software Engineer
              </div>
              {/* <div className="background-text outline">
                Mira Kinebuchi Software Engineer
              </div> */}{' '}
              <Home />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
