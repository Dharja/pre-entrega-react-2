import React from 'react';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';


const App = () => {
	return (
			<Router>
			<div className="App">
			<Navbar />
			<ItemListContainer />
			<Switch>
				<Route exact path="/" component={Catalog} />
				<Route path="/product/:id" component={ProductDetail} />
			</Switch>
			</div>
		</Router>
	);
}

export default App;
