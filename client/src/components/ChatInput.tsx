import { Flex, Textarea, Icon } from '@chakra-ui/react';

import { IoSendSharp } from 'react-icons/io5';

export const ChatInput = (): JSX.Element => {
  return (
    <Flex w="full" minW="20rem" h="auto" alignSelf="center" p="1rem">
      <Flex
        direction="column"
        w="full"
        bg="rgba(255,255,255, 0.1)"
        maxH="40rem"
        overflow="auto"
        position="relative"
        borderRadius="1rem"
      >
        <Textarea
          border="none"
          bg="transparent"
          outline="none"
          rows={3}
          resize="none"
          color="white"
        />
        <Icon
          as={IoSendSharp}
          color="white"
          position="absolute"
          right="1.5rem"
          top="1rem"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.2)',
            transition: 'all 0.2s ease-in-out'
          }}
          zIndex={20}
        />
      </Flex>
    </Flex>
  );
};
