import React, { PureComponent } from 'react';
import Home from "./pages/home";
import About from "./pages/about";

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