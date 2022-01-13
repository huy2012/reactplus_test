import React, {Component} from "react";
import Menu from "./components/canon/header/Menu";
import TextEven from "./components/canon/header/TextEven";

export class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <img src={"https://reactplus.com/images/slideShow/slide1.jpg"} style={{width : "100%"}} />
            </div>
        )
    }
}

export default App;
