import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
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
    <section id="项目">Portfolio1</section>
    <section id="留言">Portfolio2</section>
    {/* <section id="homepage">Portfolio3</section> */}
    <section id="关于">Contact</section>
    {/* <Test />
    <Test /> */}
  </div>
}

export default App;
