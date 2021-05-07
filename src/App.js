import React, { PureComponent } from 'react';
import Home from "./pages/home3";
import About from "./pages/about3";

class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <About />
            </div>
        );
    }
}

export default App;