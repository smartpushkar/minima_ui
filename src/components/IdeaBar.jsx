import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Menu, MenuButton, MenuList, MenuItem,
  Select,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SearchBar from './SearchBar';

const IdeaBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });
  const mobileStyles = {
    height: '72px',
    width: '100%',
    padding: '15px',
    justifyContent: 'space-between',
  };
  return (
    <>
      <Box
        bg={useColorModeValue('black', 'black')}
        display="flex"
        alignItems="center"
        height={useBreakpointValue({ base: '60px', md: '75px' })}
        px={4}

      >
        <Flex
          h="100%"
          alignItems={'center'}
          position="relative"
          width="100%"
          justifyContent={'space-between'}
        >

          <Select width="110px"
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            // onClick={isOpen ? onClose : onOpen}
            position="absolute"
            top="20px"


            right="0px"
            variant='unstyled'
            placeholder='Ideas hub'
            color="#ff691d"
            bg="black"

            >

<option  value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
          </Select>

          <HStack
            spacing={32}
            marginLeft={isMobile ? '10px' : '80px'}
            alignItems={'center'}
            justify={isMobile ? 'flex-start' : 'space-between'}
            color="white"
            flex="1"
          >
            <Box padding={isMobile ? '20px': ''} fontWeight="500" letterSpacing="1px" fontSize={isMobile ? '18px': '22px'} >

              <span  aria-label="Idea">Ideas</span>
            </Box>
          </HStack>
          <Flex
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
            spacing={10}
          >

            <Box width={isMobile ? '100%' : '462px'} height="28px" marginTop="-8px" marginRight="5px">
              <Stack
                direction={isMobile ? 'column' : 'row'}
                alignItems="center"
                justifyContent={isMobile ? 'center' : 'flex-end'}
                spacing="17.5px"
                marginRight="60px"
              >

                <Box as="a" marginRight="12px" color="#FF691D" px={2} py={1}  fontWeight="500" fontSize="14px" lineHeight="28px" letterSpacing="0.35px" whiteSpace="nowrap" display="inline-block" flexShrink={0} href={'#'}>
                  Ideas hub
                </Box>
                <Box as="a" marginRight="12px" px={2} py={1} color="white" fontWeight="500" fontSize="14px" lineHeight="28px" letterSpacing="0.35px" whiteSpace="nowrap" display="inline-block" flexShrink={0} href={'#'}>
                  Ideas leaderboard
                </Box>
                <Box as="a" marginRight="12px" px={2} py={1} color="white" fontWeight="500" fontSize="14px" lineHeight="28px" letterSpacing="0.35px" whiteSpace="nowrap" display="inline-block" flexShrink={0} href={'#'}>
                  Submit an idea
                </Box>
                <Box as="a"  px={2} py={1} color="white" fontWeight="500" fontSize="14px" lineHeight="28px" letterSpacing="0.35px" whiteSpace="nowrap" display="inline-block" flexShrink={0} href={'#'}>
                  Community projects
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
              <Box as="a" px={2} py={1} color="white" fontWeight="500" fontSize="16px" lineHeight="28px" letterSpacing="0.35px" whiteSpace="nowrap" display="inline-block" flexShrink={0} href={'#'}>
                Your Idea Mobile Link
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>


    </>
  );
};

export default IdeaBar;
