import React from 'react';
import Navbar from "./components/NavBar/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';


const App = () => {
	return (
			<BrowserRouter>
			<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={ItemListContainer} />
				<Route exact path="/catalog/:id" element={Catalog} />
				<Route path="/item/:id" element={ItemDetailContainer} />
			</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
