const apiKey = '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';

export const aiResponse = async (chat: any) => {
  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
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
