import React, { useState } from 'react';
import '../styles/AIChat.css';

export default function AIChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! 👋 Sou o seu assistente IA. Como posso ajudar?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    // Simula resposta da IA
    setTimeout(() => {
      const aiResponses = [
        'Você tem 3 tarefas pendentes hoje. Qual delas você quer priorizar?',
        'Vi que João Silva teve uma interação recente. Quer que eu resuma a conversa?',
        'Suas vendas estão 15% acima da meta este mês! Parabéns! 🎉',
        'Recomendo entrar em contato com Maria Santos. Ela não teve interação há 5 dias.',
        'Quer que eu gere um relatório de clientes por status?'
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage = { id: messages.length + 2, text: randomResponse, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-chat">
      <div className="ai-header">
        <h2>🧠 IA Assistant</h2>
        <p>Seu assistente inteligente para gestão de clientes</p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message ai">
              <div className="message-content loading">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="chat-form">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              disabled={loading}
            />
            <button type="submit" disabled={loading} className="btn-send">
              ➤ Enviar
            </button>
          </div>
        </form>

        <div className="ai-suggestions">
          <h4>Sugestões de perguntas:</h4>
          <button 
            onClick={() => setInput('Resumir minhas conversas de hoje')}
            className="suggestion"
          >
            📝 Resumir conversas
          </button>
          <button 
            onClick={() => setInput('Quais clientes não tive contato recentemente?')}
            className="suggestion"
          >
            👥 Clientes inativos
          </button>
          <button 
            onClick={() => setInput('Gerar relatório de vendas')}
            className="suggestion"
          >
            📊 Relatório de vendas
          </button>
          <button 
            onClick={() => setInput('Sugerir próximos passos')}
            className="suggestion"
          >
            🎯 Próximos passos
          </button>
        </div>
      </div>
    </div>
  );
}