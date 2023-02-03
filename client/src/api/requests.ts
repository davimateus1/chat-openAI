import { api } from './api';

type Params = Array<{
  sender: string;
  message: string;
}>;

export const aiResponse = async (
  chat: Params
): Promise<{ message: string }> => {
  const response = await api.post('/', {
    message: chat.map((message) => message.message).join(' \n ')
  });

  return response.data;
};
