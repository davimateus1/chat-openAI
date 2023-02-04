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
import { Chat, Message, Sender } from './types';

const App = (): JSX.Element => {
  const [chatMessage, setChatMessage] = useState<Chat[]>([]);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      return await aiResponse(chatMessage);
    },
    onSuccess: (data) => {
      setChatMessage((prevState) => [
        ...prevState,
        { sender: Sender.AI, message: data.message.replace(/^\n\n/, '') }
      ]);
    }
  });

  const sendMessage = async (message: Message): Promise<void> => {
    const newChat = (prevState: SetStateAction<Chat[]>): Chat[] => [
      ...(prevState as Chat[]),
      message
    ];
    await Promise.resolve(setChatMessage(newChat));
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
