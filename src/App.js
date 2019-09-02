import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Tradeshows from "./pages/Tradeshows";

function App() {
  return (
    <Router basename={'/directory-name'}>
      <div className="container">
      <NavBar />
        <Switch>
          <Route exact path="/3dportfolio/" component={Home} />
          <Route path="/3dportfolio/Architecture" component={Architecture} />
          <Route path="/3dportfolio/Tradeshows" component={Tradeshows} />
        </Switch>

      </div>
    </Router>
    // <div className="container">
    //   <section>
    //     <Gallery photos={photos} onClick={openLightbox} />

    //     <ModalGateway>
    //       {viewerIsOpen ? (
    //         <Modal onClose={closeLightbox}>
    //           <Carousel
    //             currentIndex={currentImage}
    //             views={photos.map(x => ({
    //               ...x,
    //               srcset: x.srcSet,
    //               caption: x.title
    //             }))}
    //           />
    //         </Modal>
    //       ) : null}
    //     </ModalGateway>

    //   </section>
    // </div>

  );
}

export default App;
