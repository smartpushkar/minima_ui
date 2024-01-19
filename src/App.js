import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import NavbarMain from './components/NavbarMain';
import IdeaBar from './components/IdeaBar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CardComponent from './components/CardComponent';
import cardData from './components/CardData.json';
import hero_bg from './assets/hero_bg.png';
import Footer from './components/Footer';
import Paginate from './components/Paginate';

function App() {
  const columnGap = '20px'; 
  const [marginTop, setMarginTop] = useState('-100px');

  useEffect(() => {
    const handleResize = () => {

      const newMarginTop = window.innerWidth <= 767 ? '-10px' : '-100px';
      setMarginTop(newMarginTop);
    };


    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavbarMain />
      <IdeaBar />
      <div style={{ position: 'relative' }}>
        <Hero />
        <Box
          bgImage={hero_bg}
          bgSize="cover"
          bgPosition="center"
          bgColor="#08090b"
          position="absolute"
          width="100%"
          top="0px"
          height="722px"
        />
      </div>

      <div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          gap: columnGap,
          flexWrap: 'wrap',
          marginTop,
        }}
      >
        {cardData.map((card, index) => (
          <CardComponent key={index} {...card} style={{ margin: `5px ${columnGap} 5px 5px` }} />
        ))}
      </div>
      <Paginate/>
      <Footer/>
    </>
  );
}

export default App;
