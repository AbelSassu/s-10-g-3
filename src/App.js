import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import MyNavbar from "./components/MyNavbar";
import MyHomePage from "./components/MyHomePage";
import MyFooter from "./components/MyFooter";
import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
	const [searchString, setSearchString] = useState("")
	const getNewSearch = (newSearch) =>{
		setSearchString(newSearch);
	}
    return (
        <BrowserRouter>
            <div>
                <MyNavbar getNewSearch={getNewSearch} />
                <Routes>
					<Route/>
				</Routes>
                <MyFooter />
            </div>
        </BrowserRouter>
    );
};

export default App;
