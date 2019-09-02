import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Tradeshows from "./pages/Tradeshows";

function App() {
  return (
    <Router>
      <div className="container">
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Architecture" component={Architecture} />
          <Route exact path="/Tradeshows" component={Tradeshows} />
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

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
