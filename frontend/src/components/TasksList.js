import React, { useState } from 'react';
import '../styles/TasksList.css';

export default function TasksList() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Ligar para João Silva', status: 'pendente', priority: 'alta', dueDate: '2026-09-15' },
    { id: 2, description: 'Enviar proposta para Maria Santos', status: 'pendente', priority: 'média', dueDate: '2026-09-16' },
    { id: 3, description: 'Acompanhamento com Pedro Costa', status: 'concluída', priority: 'média', dueDate: '2026-09-14' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    description: '',
    priority: 'média',
    dueDate: ''
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      ...newTask,
      status: 'pendente'
    };
    setTasks([...tasks, task]);
    setNewTask({ description: '', priority: 'média', dueDate: '' });
    setShowForm(false);
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(t => 
      t.id === id 
        ? { ...t, status: t.status === 'pendente' ? 'concluída' : 'pendente' }
        : t
    ));
  };

  const pendingTasks = tasks.filter(t => t.status === 'pendente');
  const completedTasks = tasks.filter(t => t.status === 'concluída');

  return (
    <div className="tasks-list">
      <div className="tasks-header">
        <h2>✓ Tarefas</h2>
        <button 
          className="btn-add"
          onClick={() => setShowForm(!showForm)}
        >
          + Nova Tarefa
        </button>
      </div>

      {showForm && (
        <form className="task-form" onSubmit={handleAddTask}>
          <textarea
            placeholder="Descrição da tarefa..."
            value={newTask.description}
            onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            required
          />
          <div className="form-row">
            <select
              value={newTask.priority}
              onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
            >
              <option value="baixa">Baixa</option>
              <option value="média">Média</option>
              <option value="alta">Alta</option>
            </select>
            <input
              type="date"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-save">Adicionar</button>
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

      <div className="tasks-container">
        <div className="tasks-section">
          <h3>Pendentes ({pendingTasks.length})</h3>
          <div className="tasks-list-items">
            {pendingTasks.map(task => (
              <div key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => toggleTaskStatus(task.id)}
                  className="task-checkbox"
                />
                <div className="task-content">
                  <p className="task-description">{task.description}</p>
                  <div className="task-meta">
                    <span className={`priority ${task.priority}`}>{task.priority}</span>
                    <span className="due-date">📅 {task.dueDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tasks-section">
          <h3>Concluídas ({completedTasks.length})</h3>
          <div className="tasks-list-items">
            {completedTasks.map(task => (
              <div key={task.id} className="task-item completed">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => toggleTaskStatus(task.id)}
                  className="task-checkbox"
                />
                <div className="task-content">
                  <p className="task-description">{task.description}</p>
                  <div className="task-meta">
                    <span className={`priority ${task.priority}`}>{task.priority}</span>
                    <span className="due-date">📅 {task.dueDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}