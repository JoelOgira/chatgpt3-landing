import './App.css'

import { Article, Brand, CTA, Feature, Navbar } from "./components";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div className="App bg-colorBg text-white">
      <div className="bg-gradientBar">
        <Navbar />
        <Header />
      </div>
    </div>
  )
}

export default App;