import React from 'react';

interface InputProps {
    type: string;
    testId: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, testId, value, onChange }: InputProps) {
    return <input type={type} data-testid={testId} value={value} onChange={onChange} className="border p-2 rounded" />;
}

export default Input;
