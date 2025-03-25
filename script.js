const form = document.getElementById('contact_us');
const name = form.querySelector('#name_input')
const phone = form.querySelector('#phone_input')



const sendData = async (e) => {
    e.preventDefault();
    const messageText = `Новая запись на пробный урок. \nИмя: ${name.value}\nНомер: ${phone.value}`;
    const botToken = '6455030953:AAFc1ZgC3b8ROqgFPke4BDAp7GzPCuVtSF0';
    const chatId = '1384687782';
    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: messageText,
      } );
      // await console.log('Message sent:', response.data);
    
      // await alert('Сообщение отправлено!')
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
 


