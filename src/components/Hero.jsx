import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import hero_bg from '../assets/hero_bg.png';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <>
      <Box
        bgPosition="center"
        bgColor="#08090b"
        height={{ base: 'auto', md: '522px' }} 
      >
        <Container maxW={'3xl'} width="100%" px={{ base: 4, md: 0 }}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 0 }}
            pt={{ base: 20, md: 10 }}
          >
            <Heading
              fontFamily={'Manrope'}
              fontSize={{ base: '36px', md: '56px' }}
              fontWeight={500}
              lineHeight={{ base: '48px', md: '72px' }}
              letterSpacing={'0.3px'}
              mb={4}
              zIndex={1}
              position="relative"
              color="white"
              paddingTop={{ base: '20px', md: '40px' }}
            >
              Give me a cool title
            </Heading>
            <Text
              textAlign={'center'}
              fontFamily={'Manrope'}
              fontSize={{ base: '14px', md: '16px' }}
              fontWeight={500}
              lineHeight={{ base: '24px', md: '30px' }}
              letterSpacing={'0.32px'}
              color={'gray.500'}
              color="white"
              zIndex={1}
              maxW={{ base: '100%', md: '622px' }}
              mx="auto"
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
          </Stack>
        </Container>
        <SearchBar />
      </Box>
    </>
  );
}
