import React, { useState } from 'react';
import '../styles/ClientsList.css';

export default function ClientsList({ clients }) {
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'prospect'
  });

  const filteredClients = filter === 'all' 
    ? clients 
    : clients.filter(c => c.status === filter);

  const handleAddClient = (e) => {
    e.preventDefault();
    console.log('Novo cliente:', newClient);
    setNewClient({ name: '', email: '', phone: '', status: 'prospect' });
    setShowForm(false);
  };

  return (
    <div className="clients-list">
      <div className="clients-header">
        <h2>👥 Gerenciar Clientes</h2>
        <button 
          className="btn-add"
          onClick={() => setShowForm(!showForm)}
        >
          + Novo Cliente
        </button>
      </div>

      {showForm && (
        <form className="client-form" onSubmit={handleAddClient}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Nome do cliente"
              value={newClient.name}
              onChange={(e) => setNewClient({...newClient, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) => setNewClient({...newClient, email: e.target.value})}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              placeholder="Telefone"
              value={newClient.phone}
              onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
            />
            <select
              value={newClient.status}
              onChange={(e) => setNewClient({...newClient, status: e.target.value})}
            >
              <option value="prospect">Prospect</option>
              <option value="cliente">Cliente</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-save">Salvar</button>
            <button 
              type="button" 
              className="btn-cancel"
              onClick={() => setShowForm(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="clients-filters">
        <button 
          className={`filter ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos ({clients.length})
        </button>
        <button 
          className={`filter ${filter === 'prospect' ? 'active' : ''}`}
          onClick={() => setFilter('prospect')}
        >
          Prospects ({clients.filter(c => c.status === 'prospect').length})
        </button>
        <button 
          className={`filter ${filter === 'cliente' ? 'active' : ''}`}
          onClick={() => setFilter('cliente')}
        >
          Clientes ({clients.filter(c => c.status === 'cliente').length})
        </button>
      </div>

      <div className="clients-table">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Último Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td><span className={`status ${client.status}`}>{client.status}</span></td>
                <td>{client.lastInteraction}</td>
                <td>
                  <button className="btn-action">✏️ Editar</button>
                  <button className="btn-action btn-danger">🗑️ Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}