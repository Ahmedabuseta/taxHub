import './chat.css'
import logo from '../../assets/Blogs Featured Image.png'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
function Chat(){
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const simulateReceivedMessage = () => {
      setTimeout(() => {
        const receivedMessage = 'This is a received message';
        setMessages([...messages, { text: receivedMessage, type: 'received' }]);
      }, 3000);
    };
  
    useEffect(() => {
      simulateReceivedMessage();
    }, []);
  
    const handleSendMessage = () => {
      if (inputText.trim() !== '') {
        setMessages([...messages, { text: inputText, type: 'sent' }]);
        setInputText('');
      }

    };
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
        <div className='chat p-4 position-relative'>
            <div className='d-flex'>
            <img src={logo}  class="rounded-circle bg-white img"
                alt="" width="50" height="50" />
            <h5 className='my-auto mx-3'>username</h5>
            </div>
            <hr/>
            <div className='msgs'>
            {
                messages.map((message, index) => (
                <div key={index} style={{ padding: '5px', textAlign: message.type === 'sent' ? 'right' : 'left' }}>
                    <div
                    style={{
                        display: 'inline-block',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: message.type === 'sent' ? '#DCF8C6' : '#ECE5DD',
                        color: message.type === 'sent' ? '#000' : '#000',
                        fontSize: '14px',
                        maxWidth: '70%',
                        wordWrap: 'break-word',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                    >
                    {message.text}
                    </div>
                </div>
            ))}

            </div>
            <div className='position-absolute text d-flex px-sm-0 px-md-5'>
                <div className=' w-100 d-flex justify-content-between px-3'>
                <input type='text'
                className='input'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                style={{ marginRight: '10px', padding: '5px' }}
                />
                <button className='' onClick={handleSendMessage} type='button'><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Chat