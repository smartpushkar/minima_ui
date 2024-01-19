import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Spacer,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button as ChakraButton,
  Input,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/Logo.png';

interface Props {
  children: React.ReactNode;
}

const Links = ['Build a Dapp', 'Grants', 'Projects', 'Register', 'Sign in'];

const NavLink = (props: Props) => {
  const { children, style, onClick } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      color={style?.color || 'white'}
      _hover={{
        textDecoration: 'none',
        color: 'orange.500',
      }}
      fontWeight="500"
      fontSize="15px"
      lineHeight="28px"
      letterSpacing="0.35px"
      whiteSpace="nowrap"
      display="inline-block"
      flexShrink={0}
      href={'#'}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default function NavbarMain() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const mobileStyles = {
    height: '72px',
    width: '100%',
    padding: '15px',
    justifyContent: 'space-between',
  };

  const desktopStyles = {
    height: useBreakpointValue({ base: 'auto', md: '81px' }),
    width: 'auto',
    padding: '0',
    justifyContent: 'space-around',
  };

  const styles = isMobile ? mobileStyles : desktopStyles;

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const buttonStyle = {
    width: "270px",
    height: "44px",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid",
  };

  return (
    <>
      <Box
        bg={useColorModeValue('black', 'black')}
        display="flex"
        alignItems="center"
        {...styles}
        borderBottom="2px solid #282b2e"
      >
        <Flex
          h="100%"
          alignItems={'center'}
          position="relative"
          width="100%"
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={8} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            backgroundColor={'transparent'}
            color={'white'}
            onClick={isOpen ? onClose : onOpen}
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            right="10px"
          />
          <HStack
            spacing={2}
            marginLeft={isMobile ? '0' : '80px'}
            alignItems={isMobile ? 'flex-start' : 'center'}
            justify={isMobile ? 'flex-start' : 'space-between'}
            color="white"
            flex="1"
          >
            <Box padding={isMobile ? '20px' : ''}>
              <img
                src={logo}
                alt="Logo"
                width={isMobile ? '130px' : '177.1px'}
                height="32.486px"
                style={{ flexShrink: 0 }}
              />
            </Box>
            {!isMobile && <Spacer />}
          </HStack>
          <Flex
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
            spacing={2}
          >
            <Box
              width={isMobile ? '100%' : '462px'}
              height="28px"
              marginTop="-8px"
              marginRight="5px"
            >
              <Stack
                direction={isMobile ? 'column' : 'row'}
                alignItems={isMobile ? 'flex-start' : 'center'}
                justifyContent={isMobile ? 'flex-start' : 'flex-end'}
                spacing="17.5px"
                marginRight={isMobile ? '0' : '60px'}
              >
                {Links.map((link) => (
                  <NavLink
                    key={link}
                    onClick={link === 'Sign in' ? openSignInModal : undefined}
                  >
                    {link}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Center>
            <Box
              pb={4}
              position="absolute"
              top="70px"
              left="0px"
              zIndex="1000"
              width="100%"
              bgColor="black"
              display={{ md: 'none' }}
            >
              <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                  <NavLink
                    key={link}
                    onClick={link === 'Sign in' ? openSignInModal : undefined}
                  >
                    {link}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          </Center>
        ) : null}

        <Modal isCentered isOpen={isSignInModalOpen} onClose={closeSignInModal}>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent
            bg="#282b2e"
            color="white"
            width="366px"
            height="auto"
            padding="32px 24px"
            borderRadius="5px"
            gap="32px" 
          >
           <ModalBody>
  <Center>
    <VStack >
      <Text
        fontFamily="Manrope"
        fontSize="16px"
        fontWeight="600"
        lineHeight="19px"
        letterSpacing="0.02em"
        textAlign="center"
      >
        Create an account to join a team.
      </Text>
      <Text
        as="span"
        fontFamily="Manrope"
        fontSize="16px"
        fontWeight="600"
        lineHeight="19px"
        letterSpacing="0.02em"
        textAlign="center"
        color="#BDBDC4"


      >
        Already have an account? <chakra.a textDecoration= 'underline' _hover={{

          cursor: 'pointer',
        }} color="white">Sign in</chakra.a>
      </Text>
    </VStack>
  </Center>
</ModalBody>

            <ModalFooter>
              <Center>
              <VStack marginTop="-16px" spacing='16px' justifyContent="center" marginLeft="auto" marginRight="auto" alignItems="center" >
              <ChakraButton
                    backgroundColor="white"
                    {...buttonStyle}

                  >
                    Apply
                  </ChakraButton>
                  <ChakraButton

                    variant="flat"
                    color="white"
                    background="#282b2e"

                    border="5px solid white"
                    {...buttonStyle}
                  >
                    Clear
                  </ChakraButton>
              </VStack>

              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
