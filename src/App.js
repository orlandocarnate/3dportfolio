import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Tradeshows from "./pages/Tradeshows";
import Threejs from './pages/Threejs';
import VRTours from './pages/VirtualTours';

function App() {
  return (
    <HashRouter basename='/'>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Threejs" component={Threejs} />
          <Route path="/VRTours" component={VRTours} />
          <Route path="/Architecture" component={Architecture} />
          <Route path="/Tradeshows" component={Tradeshows} />
        </Switch>

      </div>
    </HashRouter>
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
