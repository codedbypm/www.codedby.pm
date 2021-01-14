import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import About from '../components/sections/About';
import Blogs from '../components/sections/Blogs';
import Brandlogos from '../components/sections/Brandlogos';
import Contact from '../components/sections/Contact';
import Experiences from '../components/sections/Experiences';
import Herosection from '../components/sections/Herosection';
import Pricing from '../components/sections/Pricing';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Works from '../components/sections/Works';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/elements/GlobalStyle';
import { light, dark } from '../components/elements/Themes';
import Toggle from '../components/elements/Toggle';

function Home() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  document.body.classList.add('dark');
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <main className='content'>
          <Toggle></Toggle>
          <Element name='section-home'>
            <ReactCursorPosition>
              <Herosection />
            </ReactCursorPosition>
          </Element>
          <Element name='section-about'>
            <About />
          </Element>
          {/* <Element name="section-services">
          <Services />
        </Element> */}
          <Element name='section-experiences'>
            <Experiences />
          </Element>
          <Element name='section-testimoninal'>
            <Testimonials />
          </Element>
          <Element name='section-brandlogos'>
            <Brandlogos />
          </Element>
          <Element name='section-contact'>
            <Contact />
          </Element>
          <div className='spacer' data-height='96'></div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default Home;
