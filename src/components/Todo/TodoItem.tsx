import React from 'react';

interface TodoItemProps {
    todo: {
        id: number;
        todo: string;
        isCompleted: boolean;
    };
    onToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
    return (
        <li className="flex items-center space-x-4">
            <label htmlFor={`todo-${todo.id}`} className="flex items-center space-x-2">
                <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={onToggle}
                    className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={`text-lg ${todo.isCompleted ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {todo.todo}
                </span>
            </label>
            <button
                data-testid="modify-button"
                onClick={onEdit}
                type="button"
                className="px-3 py-1 bg-yellow-500 text-white rounded-md"
            >
                수정
            </button>
            <button
                data-testid="delete-button"
                onClick={onDelete}
                type="button"
                className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
                삭제
            </button>
        </li>
    );
}


export default TodoItem;
