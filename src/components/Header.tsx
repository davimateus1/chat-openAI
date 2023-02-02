import { Flex, Text } from '@chakra-ui/react';

export const Header = (): JSX.Element => {
  return (
    <Flex>
      <Text
        color="white"
        zIndex="1"
        fontWeight="bold"
        m="1rem"
        fontSize="1.8rem"
      >
        Chat OpenAI - 1.0
      </Text>
    </Flex>
  );
};
