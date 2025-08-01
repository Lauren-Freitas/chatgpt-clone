import React from "react";
import './SideMenu.css';

/**
 * Componente que exibe o menu lateral com a opção de iniciar um novo chat.
 *
 * @returns {JSX.Element} - O menu lateral renderizado.
 */
export const SideMenu = () => {
  // Futuramente, você pode adicionar um onClick para resetar o chat aqui
  const handleNewChat = () => {
    window.location.reload(); // ou implementar um reset real
  };

  return (
    <aside className="sidemenu">
      <button className="sidemenu-button" onClick={handleNewChat}>
        <span>+</span>
        Novo chat
      </button>
    </aside>
  );
};
