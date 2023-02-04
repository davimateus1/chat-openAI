import { Flex, Textarea, Icon, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { ChatInputProps } from '../types';

export const ChatInput = ({
  sendMessage,
  loading
}: ChatInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmitMessage = (): void => {
    if (inputValue.trim() === '') return;
    sendMessage({ sender: 'user', message: inputValue });
    setInputValue('');
  };

  return (
    <Flex w="full" minW="20rem" h="auto" alignSelf="center" p="1rem">
      <Flex
        direction="column"
        w="full"
        bg="rgbaWhite"
        maxH="40rem"
        overflow="auto"
        position="relative"
        borderRadius="1rem"
      >
        {loading ? (
          <Flex w="full" justify="center" p="2rem">
            <Spinner color="white" />
          </Flex>
        ) : (
          <>
            <Textarea
              border="none"
              bg="transparent"
              outline="none"
              rows={3}
              resize="none"
              color="white"
              value={inputValue}
              typeof="text"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  handleSubmitMessage();
                }
              }}
            />
            <Icon
              onClick={handleSubmitMessage}
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
          </>
        )}
      </Flex>
    </Flex>
  );
};
