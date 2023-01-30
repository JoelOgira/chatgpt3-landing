import { Brand, CTA, Navbar } from "./components";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div className="App bg-colorBg text-white scroll-smooth">
      <div className="bg-gradientBar bg-gradient-to-r from-[rgba(0, 40, 83, 1)] to-[rgba(4, 12, 24, 1)]">
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