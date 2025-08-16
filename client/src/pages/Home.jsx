import About from '../components/Home/About';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';

const Home = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <About/>
      <Footer
      footer1 = "Privacy Policy"
      footer2="Terms of Service"
      footer3="Contact"/>
    </div>
  )
}

export default Home
