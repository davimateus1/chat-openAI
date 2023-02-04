export enum Sender {
  AI = 'ai',
  USER = 'user'
}

export type ChatBodyProps = {
  chat: Chat[];
};

export type Chat = {
  sender: Sender | string;
  message: string;
};

export type Message = {
  sender: string;
  message: string;
};

export type ChatInputProps = {
  sendMessage: (message: Chat) => void;
  loading: boolean;
};
