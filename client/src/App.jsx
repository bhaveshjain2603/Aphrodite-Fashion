import TShirtCanvas from './canvas/TShirt';
import Customizer from './pages/Customizer';
import TshirtCustomize from './pages/TshirtCustomize'
import About from './pages/About';
import Shirt from './pages/Shirt'
import Hoodie from './pages/Hoodie'
import ZipperJackets from './pages/ZipperJackets'
import JoinCommunity from './pages/JoinCommunity';
import Footer from './pages/Footer'

function App() {
  return (
    <main className="app transition-all ease-in">
      <TshirtCustomize />
      <TShirtCanvas />
      <Customizer />
      <About />
      <Shirt />
      <Hoodie />
      <JoinCommunity />
      <Footer />
      {/* <ZipperJackets /> */}
    </main>
  )
}

export default App
