import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from "./components/renderings";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar";
// import Home from "./pages/Home";
// import Architecture from "./pages/Architecture";
// import Tradeshows from "./pages/Tradeshows";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    // <Router>
    //   <div className="container">
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/Architecture" component={Architecture} />
    //       <Route path="/Tradeshows" component={Tradeshows} />
    //     </Switch>

    //   </div>
    // </Router>
    <div className="container">
      <section>
        <NavBar />
        <Gallery photos={photos} onClick={openLightbox} />

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

      </section>
    </div>

  );
}

export default App;
