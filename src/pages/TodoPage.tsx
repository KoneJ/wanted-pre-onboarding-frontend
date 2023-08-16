import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoInput from '../components/Todo/TodoInput';
import TodoList from '../components/Todo/TodoList';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
}

// eslint-disable-next-line no-redeclare
function Todo() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
    const [modifiedTodo, setModifiedTodo] = useState<string>('');
    const token = localStorage.getItem('access_token');

    useEffect(() => {
        if (token) {
            axios.get('https://www.pre-onboarding-selection-task.shop/todos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                setTodos(response.data);
            });
        }
    }, []);

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        if (token) {
            axios.post('https://www.pre-onboarding-selection-task.shop/todos', { todo: newTodo }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                setTodos([...todos, response.data]);
                setNewTodo('');
            });
        }
    };

    const handleUpdateTodo = (id: number) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (!todoToUpdate || !token) return;

        axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, { ...todoToUpdate, isCompleted: !todoToUpdate.isCompleted }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
        });
    };

    const handleDeleteTodo = (id: number) => {
        if (token) {
            axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            });
        }
    };

    const handleEditTodo = (id: number) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        if (todoToEdit) {
            setEditingTodo(todoToEdit);
            setModifiedTodo(todoToEdit.todo);
        }
    };

    const handleCancelEdit = () => {
        setEditingTodo(null);
        setModifiedTodo('');
    };

    const handleSubmitEdit = () => {
        if (editingTodo) {
            if (token) {
                axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${editingTodo.id}`, { ...editingTodo, todo: modifiedTodo }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then((response) => {
                    setTodos(todos.map(todo => todo.id === editingTodo?.id ? response.data : todo));
                    setEditingTodo(null);
                    setModifiedTodo('');
                });
            }
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-700">TODO List</h1>
                        <TodoInput
                            value={newTodo}
                            onChange={e => setNewTodo(e.target.value)}
                            onAdd={handleAddTodo}
                        />
                        <TodoList
                            todos={todos}
                            onToggle={handleUpdateTodo}
                            onEdit={handleEditTodo}
                            onDelete={handleDeleteTodo}
                        />
                        {editingTodo && (
                            <div className="mt-4">
                                <input
                                    data-testid="modify-input"
                                    value={modifiedTodo}
                                    onChange={e => setModifiedTodo(e.target.value)}
                                    className="p-2 border rounded-md"
                                />
                                <button data-testid="submit-button" onClick={handleSubmitEdit} type="button" className="ml-2 bg-blue-500 text-white p-2 rounded-md">제출</button>
                                <button data-testid="cancel-button" onClick={handleCancelEdit} type="button" className="ml-2 bg-red-500 text-white p-2 rounded-md">취소</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
