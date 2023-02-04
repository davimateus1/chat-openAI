import { Flex, Text, Tooltip } from '@chakra-ui/react';

export const Header = (): JSX.Element => {
  return (
    <Flex>
      <Tooltip
        hasArrow
        label={
          <Text color="gradientTwo" fontWeight="600" fontSize="1rem" p="0.5rem">
            Made with {'</>'} and ♡ by Davi Mateus
          </Text>
        }
        bg="gradientOne03"
        borderRadius="1rem"
      >
        <Text
          color="white"
          zIndex="1"
          fontWeight="bold"
          m="1rem"
          fontSize="1.8rem"
          cursor="default"
        >
          Chat OpenAI - 1.0
        </Text>
      </Tooltip>
    </Flex>
  );
};
