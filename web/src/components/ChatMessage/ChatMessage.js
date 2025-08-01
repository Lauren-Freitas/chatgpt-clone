import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar.js";

/**
 * Componente que exibe uma mensagem de chat, estilizada de acordo com o usuário (GPT ou outro).
 *
 * @param {Object} props - As propriedades recebidas pelo componente.
 * @param {Object} props.message - A mensagem a ser exibida, contendo o texto e o usuário.
 * @param {string} props.message.user - O identificador do usuário (ex.: 'gpt').
 * @param {string|JSX.Element|JSX.Element[]} props.message.message - O conteúdo da mensagem.
 */
export const ChatMessage = ({ message }) => {
  const isGptUser = message.user === 'gpt';

  return (
    <div className={`chat-message ${isGptUser ? "chatgpt" : ""}`}>
      <div className="chat-message-center">
        {/* Avatar do GPT */}
        <div className={`avatar ${isGptUser ? "chatgpt" : ""}`}>
          {isGptUser && <Avatar />}
        </div>

        {/* Mensagem */}
        <div className="message">
          {Array.isArray(message.message) ? message.message.map((line, i) => <React.Fragment key={i}>{line}</React.Fragment>) : message.message}
        </div>
      </div>
    </div>
  );
};


