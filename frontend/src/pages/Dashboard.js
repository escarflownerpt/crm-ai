import React, { useState } from 'react';
import '../styles/Dashboard.css';
import ClientsList from '../components/ClientsList';
import TasksList from '../components/TasksList';
import AIChat from '../components/AIChat';

export default function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [clients, setClients] = useState([
    { id: 1, name: 'João Silva', email: 'joao@email.com', status: 'cliente', lastInteraction: '2026-09-14' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', status: 'prospect', lastInteraction: '2026-09-13' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', status: 'cliente', lastInteraction: '2026-09-15' }
  ]);

  const stats = {
    totalClients: clients.length,
    activeLeads: clients.filter(c => c.status === 'prospect').length,
    interactions: 15,
    tasksToday: 5
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>🤖 CRM com AI</h1>
          <p>Bem-vindo, {user.name}!</p>
        </div>
        <div className="header-right">
          <button className="btn-logout" onClick={onLogout}>
            Sair
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <button 
          className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Visão Geral
        </button>
        <button 
          className={`nav-item ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => setActiveTab('clients')}
        >
          👥 Clientes
        </button>
        <button 
          className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tasks')}
        >
          ✓ Tarefas
        </button>
        <button 
          className={`nav-item ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          🧠 IA Assistant
        </button>
      </nav>

      {/* Content */}
      <main className="dashboard-content">
        
        {activeTab === 'overview' && (
          <div className="overview">
            <h2>Visão Geral</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>{stats.totalClients}</h3>
                  <p>Total de Clientes</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <h3>{stats.activeLeads}</h3>
                  <p>Leads Ativos</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💬</div>
                <div className="stat-info">
                  <h3>{stats.interactions}</h3>
                  <p>Interações</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <h3>{stats.tasksToday}</h3>
                  <p>Tarefas Hoje</p>
                </div>
              </div>
            </div>

            <div className="overview-section">
              <h3>Clientes Recentes</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Último Contato</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.id}>
                      <td>{client.name}</td>
                      <td>{client.email}</td>
                      <td><span className={`status ${client.status}`}>{client.status}</span></td>
                      <td>{client.lastInteraction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <ClientsList clients={clients} />
        )}

        {activeTab === 'tasks' && (
          <TasksList />
        )}

        {activeTab === 'ai' && (
          <AIChat />
        )}

      </main>
    </div>
  );
}