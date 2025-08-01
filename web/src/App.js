import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    {
      user: 'gpt',
      message: 'Como posso te ajudar hoje?',
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    try {
      const response = await makeRequest({ prompt: input });

      const formattedResponse = response.data
        .split('\n')
        .map((line, index) => <p key={index}>{line}</p>);

      setChatlog([
        ...chatlog,
        { user: 'me', message: input },
        { user: 'gpt', message: formattedResponse },
      ]);

      setInput("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error.message);
    }
  }

  return (
    <div className="App">
      <SideMenu />
      <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              autoFocus
            />
            <button type="submit" style={{ display: 'none' }}>Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;







