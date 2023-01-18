import './App.css'

import { Article, Brand, CTA, Navbar } from "./components";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div className="App bg-colorBg text-white scroll-smooth">
      <div className="bg-gradientBar">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App;