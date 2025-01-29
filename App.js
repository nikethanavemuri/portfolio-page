import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            
            {/* Works Section */}
            <div style={{ marginBottom: "3rem" }}>
                <Works />
            </div>

            {/* Contact Section */}
            <div style={{ marginTop: "3rem" }}>
                <Contact />
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
