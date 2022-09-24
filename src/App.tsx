import React, { useState } from "react";
import { MainLayout } from "./layouts/MainLayout.component";

import { Navbar } from "./components/navbar/Navbar.component";
import { Hero } from "./components/hero/Hero.component";
import { Main } from "./components/main/Main.component";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <Main />
    </MainLayout>
  );
}

export default App;
