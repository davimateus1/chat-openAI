import { Flex } from '@chakra-ui/react';

import {
  ChatBody,
  ChatInput,
  GradientOne,
  GradientTwo,
  Header
} from './components';
import './App.css';
import { SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';
import { aiResponse } from './api';
import { Chat, Message } from './types';

const App = (): JSX.Element => {
  const [chatMessage, setChatMessage] = useState<Chat[]>([]);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      return await aiResponse(chatMessage);
    },
    onSuccess: (data) => {
      setChatMessage((prevState) => [
        ...prevState,
        { sender: 'ai', message: data.message.replace(/^\n\n/, '') }
      ]);
    }
  });

  const sendMessage = async (message: Message): Promise<void> => {
    await Promise.resolve(
      setChatMessage((prevState: SetStateAction<Chat[]>) => [
        ...(prevState as Chat[]),
        message
      ])
    );
    mutate();
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="backgroundChat"
      overflow="hidden"
      direction="column"
      justify="space-between"
      align="center"
      position="relative"
    >
      <GradientOne />
      <GradientTwo />

      <Header />

      <ChatBody chat={chatMessage} />

      <ChatInput sendMessage={sendMessage} loading={isLoading} />
    </Flex>
  );
};

export default App;
