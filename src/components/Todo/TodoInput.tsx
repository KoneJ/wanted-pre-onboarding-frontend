import React from 'react';

interface TodoInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
}

function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
    return (
        <div className="flex items-center border-b border-teal-500 py-2">
            <input
                data-testid="new-todo-input"
                value={value}
                onChange={onChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="할 일을 입력하세요..."
                type="text"
            />
            <button
                data-testid="new-todo-add-button"
                onClick={onAdd}
                type="button"
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
                추가
            </button>
        </div>
    );
}

export default TodoInput;
