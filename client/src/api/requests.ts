import { Chat, Params } from '../types';
import { api } from './api';

export const aiResponse = async (chat: Params): Promise<Chat> => {
  const response = await api.post('/', {
    message: chat.map((message) => message?.message).join(' \n ')
  });

  return response.data;
};
