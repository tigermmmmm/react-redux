import React, { PureComponent } from 'react';
import Home from "./pages/home-4-redux-thunk使用";
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