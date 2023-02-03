import { Flex } from '@chakra-ui/react';

import {
  ChatBody,
  ChatInput,
  GradientOne,
  GradientTwo,
  Header
} from './components';
import './App.css';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { aiResponse } from './api';

const App = (): JSX.Element => {
  const [chatMessage, setChatMessage] = useState<any>([]);
  const mutation = useMutation({
    mutationFn: () => {
      return aiResponse(chatMessage);
    },
    onSuccess: (data) => {
      setChatMessage((prevState: any) => [
        ...prevState,
        { sender: 'ai', message: data.message.replace(/^\n\n/, '') }
      ]);
    }
  });

  const sendMessage = async (message: string) => {
    await Promise.resolve(
      setChatMessage((prevState: any) => [...prevState, message])
    );
    mutation.mutate();
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

      <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
    </Flex>
  );
};

export default App;
