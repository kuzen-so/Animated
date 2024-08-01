import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import Test from "./Test.tsx";

const App = () => {
  return <div>
    <section id="主页">
      <Navbar />
      <Hero/>
    </section>
    <section id="博客">
      <Parallax type="services"/>
    </section>
    <section id="项目">
      <Services />
    </section>
    <Portfolio />
    <section id="留言">Portfolio2</section>
    {/* <section id="homepage">Portfolio3</section> */}
    <section id="关于">Contact</section>
    {/* <Test />
    <Test /> */}
  </div>
}
 
export default App;
