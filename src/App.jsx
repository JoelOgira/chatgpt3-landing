import './App.css'

import { Article, Brand, CTA, Feature, Navbar } from "./components";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div className="App bg-colorBg text-white scroll-smooth">
      <div className="bg-gradientBar md:px-8">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Footer />
      
    </div>
  )
}

export default App;