import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  Center,
  VStack,
  HStack,
  Checkbox,
  Button as ChakraButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

export default function SearchBar() {
  const checkboxOptions = [
    "Finance",
    "Cross chain",
    "Marketplace",
    "Dev tools",
    "NFTs",
    "Social",
    "Gaming",
    "Communications",
    "Layer 2",
    "Other",
  ];

  const chunkedOptions = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const buttonStyle = {
    width: "144px",
    height: "44px",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid",
  };

  const chunkedCheckboxOptions = chunkedOptions(checkboxOptions, 3);

  const handleApply = () => {
    console.log("Apply button clicked");
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  return (
    <Center>
      <VStack>
        <Stack
          marginTop="40px"
          width="100%"
          maxWidth="1136px"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-evenly"
          spacing={2}
          zIndex={3}
        >
           <Center >
          <HStack>

          <InputGroup paddingX={{ base: '10px', md: "16px" }} paddingY="8px" width={{ base: '270px', md: "1009px" }}>
            <InputLeftElement
              pointerEvents="none"
              marginTop="10px"
              marginLeft={{ base: '12px', md: "20px" }}
              children={<FiSearch  color="white" size="20px" />}
            />
            <Input
              placeholder="Search for a submission"
              border="1px solid #464c4f"
              bg="#17191c"
              color="white"
              borderRadius="5px"
              height="45px"
            />
          </InputGroup>

          <Stack direction="row" alignItems="center">
            <Text marginRight="2" color="white">Views</Text>
            <Select

              bg="white"
              color="black"


            >
              <option   value="1">6</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </Stack>
          </HStack>
          </Center>

        </Stack>

        <HStack
          width="100%"
          justifyContent="space-between"
          zIndex="6"
          mb={{ base: '40px', md: '30px' }}

        >
          <Popover placement="bottom" arrowSize={15}>
            <PopoverTrigger>
              <ChakraButton variant="flat" color="white" background="transparent">
                <Text marginRight="2" fontSize="14px" fontWeight="500" color="white">
                  Category
                </Text>
                <FiChevronDown   color="white" size={18} />
              </ChakraButton>
            </PopoverTrigger>
            <PopoverContent
               bg="#282b2e"
              color="white"
              padding="0px"
              borderRadius="4px"
              border="1px solid grey"
              width="100%"
              zIndex={4}
              marginLeft="10px"
            >
              <VStack marginTop="5px"  spacing={2}  >
                {chunkedCheckboxOptions.map((row, rowIndex) => (
                  <HStack key={rowIndex} paddingX={{ base: '5px', md: "8px" }} paddingY={{ base: '2px', md: "3px" }} spacing={{ base: '1', md: "2" }}>
                    {row.map((option, index) => (
                      <Checkbox marginLeft="5px" rounded="full" key={index} radius="full"  size={{ base: 'sm', md: "md" }} color="white">
                        {option}
                      </Checkbox>
                    ))}
                  </HStack>
                ))}
                <HStack padding="10px" spacing={2}>
                  <ChakraButton
                    onClick={handleCancel}
                    variant="flat"
                    color="white"
                    background="#282b2e"

                    border="5px solid white"
                    {...buttonStyle}
                  >
                    Clear
                  </ChakraButton>
                  <ChakraButton
                    backgroundColor="white"
                    {...buttonStyle}
                    onClick={handleApply}
                  >
                    Apply
                  </ChakraButton>
                </HStack>
              </VStack>
            </PopoverContent>
            <PopoverArrow />
          </Popover>

          
          <Menu>
            <MenuButton
              as={ChakraButton}
              variant="flat"
              color="white"
              background="transparent"
              padding={0}
            >
              <HStack padding={0}>
              <Text marginRight="2" fontSize="14px" fontWeight="500" color="white">
                Date Submitted
              </Text>
              <FiChevronDown color="white" size={18} />
              </HStack>

            </MenuButton >
            <MenuList bg="#282b2e">
              <MenuItem bg="#282b2e" color="white">All</MenuItem>
              <MenuItem bg="#282b2e" color="white">Date submitted</MenuItem>
              <MenuItem bg="#282b2e" color="white">A / Z</MenuItem>
              <MenuItem bg="#282b2e" color="white">Highest rated</MenuItem>
              <MenuDivider />
              <MenuItem bg="#282b2e" color="white">Looking for members</MenuItem>
              <MenuItem bg="#282b2e" color="white">Looking for funding</MenuItem>
              <MenuItem bg="#282b2e" color="white">Open source</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </VStack>
    </Center>
  );
}
