import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100; 

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <>
    <Flex
      align="center"
      justify="center"
      bg="black"
      color="white"
      padding="10px"


    >

      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Page"
        backgroundColor="transparent"
        color="white"
        onClick={handlePrevPage}
        isDisabled={currentPage === 1}
        mr="2"
        _hover={{
          color: 'orange.500',
        }}
      />
      <Text>
      <Box
    backgroundColor="white"
    color="black"
    paddingX="4"
    paddingY="2"
    marginRight="2px"
    borderRadius="md"
    display="inline"
  >
    {currentPage}
  </Box> of  {totalPages}
      </Text>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Page"
        backgroundColor="transparent"
        color="white"
        onClick={handleNextPage}
        isDisabled={currentPage === totalPages}
        ml="2"
        _hover={{
          color: 'orange.500',
        }}
      />

    </Flex>
    <Flex align="center"
      justify="center"
      bg="black"
      color="white"
      >
        <Button
        marginLeft="20px"
        marginBottom="40px"
        marginTop="20px"
          width="200px"
          height="48px"
          fontFamily="Manrope"
          fontSize="14px"
          fontWeight="600"
          lineHeight="24px"
          letterSpacing="0.02em"
          textAlign="center"
          color="black"
          bg="white"
          borderRadius="md"
        >
          Submit an Idea
        </Button>
      </Flex>
    </>
  );
};

export default Paginate;
