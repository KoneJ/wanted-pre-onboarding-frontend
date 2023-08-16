import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoList({ todos, onToggle, onEdit, onDelete }: TodoListProps) {
    return (
        <ul className="space-y-4">
            {todos.map(todo => (
                <li key={todo.id} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                    <TodoItem
                        todo={todo}
                        onToggle={() => onToggle(todo.id)}
                        onEdit={() => onEdit(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
