import React, { forwardRef, useState } from 'react';

import { Check, ChevronDown } from 'lucide-react';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label: string;
    name: string;
    error?: string;
    options: SelectOption[];
    value?: string;
    required?: boolean;
    onChange?: (value: string) => void;
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
    (
        {
            label,
            name,
            error,
            options,
            value = '',
            onChange,
            className = '',
            required = false,
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false);

        const selectedOption = options.find((opt) => opt.value === value);

        const handleOptionSelect = (optionValue: string) => {
            if (disabled) return;
            if (onChange) onChange(optionValue);
            setIsOpen(false);
        };

        return (
            <div className="relative">
                {label && (
                    <label
                        htmlFor={name}
                        className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        {label}
                        {required && <span className="ml-1 text-red-500">*</span>}
                    </label>
                )}

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`flex w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/[0.04] ${error ? 'border-red-500' : ''} ${className}`}
                >
                    <span
                        className={
                            !value
                                ? 'text-gray-500 dark:text-gray-500'
                                : 'text-gray-900 dark:text-white'
                        }
                    >
                        {selectedOption?.label || 'Select...'}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>

                {isOpen && !disabled && (
                    <>
                        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
                        <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-lg dark:border-white/[0.08] dark:bg-[#1c1c1f]">
                            <div className="py-1">
                                {options.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                                            value === option.value
                                                ? 'bg-gray-100 font-medium text-gray-900 dark:bg-white/[0.08] dark:text-white'
                                                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/[0.05]'
                                        }`}
                                        onClick={() => handleOptionSelect(option.value)}
                                    >
                                        {option.label}
                                        {value === option.value && <Check className="h-4 w-4" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                <input type="hidden" name={name} ref={ref} value={value} {...props} />
            </div>
        );
    }
);

SelectInput.displayName = 'SelectInput';
