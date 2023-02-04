import { Flex, Text } from '@chakra-ui/react';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';
import { ChatBodyProps, Message, Sender } from '../types';

const aiStyle = {
  backgroundColor: 'rgbaWhite04',
  backdropFilter: 'blur(30px)',
  dropShadow: 'shadow',
  color: 'black'
};

export const ChatBody = ({ chat }: ChatBodyProps): JSX.Element => {
  const isAi = (message: Message): boolean => message?.sender === Sender.AI;

  const reference = useRef<HTMLDivElement>(null);
  const bottomReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reference.current && autoAnimate(reference.current);
    bottomReference.current?.scrollIntoView({ behavior: 'smooth' });
  }, [reference, chat]);

  return (
    <Flex
      gap="4"
      w="full"
      direction="column"
      overflow="auto"
      h="90%"
      minW="20rem"
      p="3rem 2rem 0 2rem"
      ref={reference}
    >
      {chat.map((message, index) => (
        <Flex
          align={isAi(message) ? 'start' : 'end'}
          direction="column"
          key={index}
        >
          <Flex
            justify="center"
            border="1px solid"
            borderColor="grayColor"
            wordBreak="break-word"
            maxW="80%"
            p="2rem"
            borderRadius="1rem"
            backdropFilter="blur(30px)"
            sx={isAi(message) ? { ...aiStyle } : {}}
          >
            <Text color="white">{message?.message}</Text>
          </Flex>
        </Flex>
      ))}
      <Flex ref={bottomReference} h="3rem"></Flex>
    </Flex>
  );
};
