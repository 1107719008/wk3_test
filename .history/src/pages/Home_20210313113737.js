import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Navbar/>
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
