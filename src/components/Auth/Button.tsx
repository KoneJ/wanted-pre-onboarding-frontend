import React from 'react';

interface ButtonProps {
    testId: string;
    text: string;
    onClick: () => void;
    // eslint-disable-next-line react/require-default-props
    disabled?: boolean;
}

function Button({ testId, text, onClick, disabled = false }: ButtonProps) { // disabled에 기본값을 false로 설정
    return (
        <button
            type="button" // 버튼 유형을 지정
            data-testid={testId}
            onClick={onClick}
            disabled={disabled}
            className="bg-blue-500 text-white p-2 rounded"
        >
            {text}
        </button>
    );
}

export default Button;
