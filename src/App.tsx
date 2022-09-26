import React, { useState, useEffect } from "react";
import { MainLayout } from "./layouts/MainLayout.component";

import { Navbar } from "./components/navbar/Navbar.component";
import { Hero } from "./components/hero/Hero.component";
import { Main } from "./components/main/Main.component";
import { Section } from "./components/section/Section.component";

function App() {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MainLayout>
      <Navbar offset={offset} />
      <Hero />
      <Main />
      <Section />
    </MainLayout>
  );
}

export default App;
