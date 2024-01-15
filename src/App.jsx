import {Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/AddProduct/AddProduct";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
	return (
		<>
			<Navbar />
			
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/addProduct" element={<AddProduct />}></Route>
					<Route path="/product-detail/:id" element={<ProductDetails />}/>
					<Route path="*" element={<p>Not Found</p>}></Route>

				</Routes>
			
		</>
	);
}
export default App;
