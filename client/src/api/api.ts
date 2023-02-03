const apiKey = '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';

export const aiResponse = async (chat: any) => {
  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: chat.map((message: any) => message.message).join(' \n ')
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
