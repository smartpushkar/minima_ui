import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Button,
  Divider,
  HStack,
  Center,
  Tag,
  TagLabel,
  VStack,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
// Import your images
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

import starIcon from '../assets/star.png';
import counterIcon from '../assets/counter.png';
import timerIcon from '../assets/timer.png';
import lightbulbIcon from '../assets/lightbulb.png';
import verifiedIcon from '../assets/verified.png';
import thumbIcon from '../assets/thumb.png';
import favoriteIcon from '../assets/favorite.png';

const CardComponent = ({
  name,
  imgSrc,
  subheading,
  isstarIcon,
  iscounterIcon,
  istimerIcon,
  islightbulbIcon,
  isverifiedIcon,
  isthumbIcon,
  isfavoriteIcon,
  submittedText,
  projectTitle,
  projectDescription,
  upvoteNumber,
  financeText,
  categoryText,
  countText,
  statusText,
}) => {
  const footerTextStyle = {
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.02em',
    textAlign: 'left',
  };
  const headingFontSize = useBreakpointValue({ base: '22px', md: '22px' });
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Center>
      <Card
        zIndex={5}
        marginBottom={{ base: '40px', md: '40px' }}
        width={{ base: '369px', md: '556px' }}
        height={{ base: 'auto', md: '453px' }}
        backgroundColor="#282be"
        borderBottomRadius={5}
        borderTopEndRadius={5}
        borderTopLeftRadius={24}
      >
        {/* Section 1: Card Header */}
        <CardHeader
          bg="#282b2e"
          color="white"
          paddingY="24px"
          borderTopLeftRadius={24}
          borderTopEndRadius={5}
        >
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <HStack>
              <Avatar height="64px" width="64px" name={name} src={imgSrc} />
              <div>
                <VStack alignItems="left" >
                  <HStack>
                  <Heading


                    style={{
                      fontFamily: 'Manrope',
                      fontSize: headingFontSize,
                      fontWeight: 500,
                      lineHeight: '36px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                    }}
                  >
                    {name}
                  </Heading>
                  {!isMobile && <HStack spacing="6px">
                      {isstarIcon && (
                        <Image src={starIcon} alt="Star Icon" boxSize="25px" />
                      )}
                      {iscounterIcon && (
                        <Image
                          src={counterIcon}
                          alt="Counter Icon"
                          boxSize="25px"
                        />
                      )}
                      {istimerIcon && (
                        <Image
                          src={timerIcon}
                          alt="Timer Icon"
                          boxSize="25px"
                        />
                      )}
                      {islightbulbIcon && (
                        <Image
                          src={lightbulbIcon}
                          alt="Lightbulb Icon"
                          boxSize="25px"
                        />
                      )}
                      {isverifiedIcon && (
                        <Image
                          src={verifiedIcon}
                          alt="Verified Icon"
                          boxSize="25px"
                        />
                      )}
                      {isthumbIcon && (
                        <Image
                          src={thumbIcon}
                          alt="Thumb Icon"
                          boxSize="25px"
                        />
                      )}
                      {isfavoriteIcon && (
                        <Image
                          src={favoriteIcon}
                          alt="Favorite Icon"
                          boxSize="25px"
                        />
                      )}
                    </HStack> }

                  </HStack>
                  <HStack>
                  <Text
                    style={{
                      fontFamily: 'Manrope',
                      color: '#BDBDC4',
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                    }}
                  >
                    {submittedText}
                  </Text>
                  <Tag
                    size="md"
                    color="black"
                    backgroundColor="white"
                    borderRadius="full"
                  >
                    <TagLabel
                      fontSize="12px"
                      fontWeight="600"
                      letterSpacing="2%"
                    >
                      New
                    </TagLabel>
                  </Tag>
                  </HStack>
                </VStack>
              </div>
              </HStack>

              {isMobile && <Divider />}
      {isMobile && (
        <HStack spacing="6px">
          {isstarIcon && (
            <Image src={starIcon} alt="Star Icon" boxSize="25px" />
          )}
          {iscounterIcon && (
            <Image src={counterIcon} alt="Counter Icon" boxSize="25px" />
          )}
          {istimerIcon && (
            <Image src={timerIcon} alt="Timer Icon" boxSize="25px" />
          )}
          {islightbulbIcon && (
            <Image
              src={lightbulbIcon}
              alt="Lightbulb Icon"
              boxSize="25px"
            />
          )}
          {isverifiedIcon && (
            <Image src={verifiedIcon} alt="Verified Icon" boxSize="25px" />
          )}
          {isthumbIcon && (
            <Image src={thumbIcon} alt="Thumb Icon" boxSize="25px" />
          )}
          {isfavoriteIcon && (
            <Image
              src={favoriteIcon}
              alt="Favorite Icon"
              boxSize="25px"
            />
          )}
        </HStack>
      )}

             
            </Flex>

          </Flex>
        </CardHeader>

        {/* Section 2: Card Body */}
        <CardBody bg="#17191c" color="white">
          {/* Updated Card Body Text */}
          <Text>
            <Heading
              size="16px"
              marginBottom="10px"
              fontFamily="Manrope"
              lineHeight="28px"
              letterSpacing="2%"
            >
              {projectTitle}
            </Heading>
            <Text
              fontSize="15px"
              fontFamily="Manrope"
              lineHeight="28px"
              letterSpacing="2%"
            >
              {projectDescription}
            </Text>
            <Text
              color="#FF691D"
              fontSize="14px"
              fontFamily="Manrope"
              lineHeight="28px"
              letterSpacing="2%"
              cursor="pointer"
            >
              See more...
            </Text>
          </Text>
        </CardBody>

        <Box backgroundColor="#17191c" paddingLeft="16px" paddingRight="16px">
          <Divider borderColor="#52535B" borderWidth="1px" />
        </Box>

        {/* Section 3: Footer - Section A */}
        <CardFooter
          bg="#17191c"
          color="white"
          padding="10px"
          justify="space-between"
          flexWrap="wrap"
        >
          <Text
            marginLeft="10px"
            fontFamily="Manrope"
            lineHeight="28px"
            letterSpacing="2%"
          >
            {statusText}
          </Text>
        </CardFooter>
        <Box backgroundColor="#17191c" paddingLeft="16px" paddingRight="16px">
          <Divider borderColor="#52535B" borderWidth="1px" />
        </Box>
        {/* Section 4: Footer - Section B */}
        <CardFooter
          paddingLeft="0"
          paddingTop="10px"
          paddingBottom="10px"
          paddingRight="0"
          bg="#17191c"
          width="100%"
          color="white"
          justify="space-between"
          flexWrap="wrap"
        >
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="30px"
                height="30px"
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                }}
                src={card1}
              />
            }
            mr="2"
          >
            <Text
              width="100%"
              style={{
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0.02em',
              }}
            >
              {countText}
            </Text>
          </Button>
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="20px"
                height="20px"
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                }}
                src={card2}
              />
            }
            mr="2"
          >
            <Text
              width="100%"
              style={{
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0.02em',
              }}
            >
              {financeText}
            </Text>
          </Button>
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="30px"
                height="30px"
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                }}
                src={card3}
              />
            }
            mr="2"
          >
            <Text
              style={{
                fontFamily: 'Manrope',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0.02em',
              }}
            >
              {upvoteNumber}
            </Text>
          </Button>
        </CardFooter>
        <Box backgroundColor="#17191c" paddingLeft="16px" paddingRight="16px">
          <Divider borderColor="#52535B" borderWidth="1px" />
        </Box>
        {/* Section 5: Footer - Section C */}
        <CardFooter
          borderBottomRadius={5}
          paddingLeft="0"
          paddingTop="10px"
          paddingBottom="10px"
          paddingRight="0"
          bg="#17191c"
          color="white"
          justify="space-between"
          flexWrap="wrap"
        >
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="30px"
                height="30px"
                style={footerTextStyle}
                src={card4}
              />
            }
            mr="2"
          >
            <Text width="100%" style={footerTextStyle}>
              Upvote
            </Text>
          </Button>
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="30px"
                height="30px"
                style={footerTextStyle}
                src={card5}
              />
            }
            mr="2"
          >
            <Text width="100%" style={footerTextStyle}>
              Join
            </Text>
          </Button>
          <Button
            flex="1"
            variant="ghost"
            color="white"
            leftIcon={
              <Image
                width="30px"
                height="30px"
                style={footerTextStyle}
                src={card6}
              />
            }
            mr="2"
          >
            <Text style={footerTextStyle}>Fund</Text>
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default CardComponent;
