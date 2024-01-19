import { Box, Center, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import linkdinIcon from '../assets/footer/linkdin.png';
import substackIcon from '../assets/footer/Substack.png';
import youtubeIcon from '../assets/footer/Youtube.png';
import twitterIcon from '../assets/footer/Twitter.png';
import telegramIcon from '../assets/footer/Telegram.png';
import githubIcon from '../assets/footer/github.png';
import discordIcon from '../assets/footer/discord.png';
import coinIcon from '../assets/footer/Coin.png';
import coinGeckoIcon from '../assets/footer/CoinGecko.png'; 

const Footer = () => {
  const isDesktop = window.innerWidth >= 768;
  const footerStyle = {
    height: '144px',
    padding: '48px 152px',
    gap: '40px',
    backgroundColor: '#17191c',
    color: 'white',
  };
  const mobilefooterStyle = {
    height: '221px',
    paddingTop:'40px',
    paddingBottom:'0px',
    gap: '40px',
    backgroundColor: '#17191c',
    color: 'white',

  };

  const iconStyle = {
    width: '45px',
    height: '45px',
  };
  const mobileIconStyle = {
    width: '35px',
    height: '35px',
  };

  const icons = [
    { name: 'Discord', src: discordIcon },
    { name: 'LinkedIn', src: linkdinIcon },
    { name: 'Telegram', src: telegramIcon },
    { name: 'GitHub', src: githubIcon },
    { name: 'Twitter', src: twitterIcon },
    { name: 'Youtube', src: youtubeIcon },
    { name: 'Substack', src: substackIcon },
    { name: 'Coin', src: coinIcon },
    { name: 'CoinGecko', src: coinGeckoIcon },
  ];

  return (
    <>
    <div style={{ display: isDesktop ? 'block' : 'none' }} >
    <div style={footerStyle}>
      <HStack justify="space-between">
        <Text fontWeight="500" lineHeight="48px" letterSpacing="2%" fontSize="32px">
          Join the conversation
        </Text>
        <HStack spacing="24px">
          {icons.map((icon, index) => (
            <Image key={index} src={icon.src} alt={`${icon.name} Icon`} style={iconStyle} />
          ))}
        </HStack>
      </HStack>
    </div>
    </div>

    <div style={{ display: isDesktop ? 'none' : 'block' }}>
      <div style={mobilefooterStyle} >
  <Center>
    <VStack >
      <Text fontWeight="500" marginBottom="20px" textAlign="center" lineHeight="30px" letterSpacing="2%" fontSize="22px">
        Join the conversation
      </Text>
      <Stack alignItems="center" direction="row">
        {icons.slice(0, 5).map((icon, index) => (
          <Image key={index} src={icon.src} alt={`${icon.name} Icon`} style={mobileIconStyle} />
        ))}
      </Stack>
      <Stack justifyContent="center" alignItems="center" direction="row">
        {icons.slice(5).map((icon, index) => (
          <Image key={index} src={icon.src} alt={`${icon.name} Icon`} style={mobileIconStyle} />
        ))}
      </Stack>
    </VStack>
  </Center>
</div>
</div>


  </>
  );
};

export default Footer;
