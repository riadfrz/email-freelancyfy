import { useState } from 'react';

import { Check, ChevronDown } from 'lucide-react';

interface FilterOption {
    label: string;
    value: string;
    type: string;
}

interface FilterButtonProps {
    filters: Record<string, string>;
    filterOptions: FilterOption[];
    onFilterChange: (type: string, value: string) => void;
}

export function FilterButton({ filters, filterOptions, onFilterChange }: FilterButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const activeFiltersCount = Object.values(filters).filter((value) => value !== 'Tous').length;

    // Obtenir les types de filtres uniques
    const filterTypes = [...new Set(filterOptions.map((option) => option.type))];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/[0.08]"
            >
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F172A] text-xs text-white dark:bg-white dark:text-[#0F172A]">
                        {activeFiltersCount}
                    </span>
                )}
                <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-lg dark:divide-white/[0.06] dark:border-white/[0.06] dark:bg-background">
                        {filterTypes.map((filterType) => (
                            <div key={filterType} className="py-2">
                                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                                    {filterType}
                                </div>
                                {filterOptions
                                    .filter((option) => option.type === filterType)
                                    .map((option) => (
                                        <button
                                            key={`${option.type}-${option.value}`}
                                            className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                                                filters[option.type] === option.value
                                                    ? 'bg-gray-100 font-medium text-gray-900 dark:bg-white/10 dark:text-white'
                                                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/[0.05]'
                                            }`}
                                            onClick={() => {
                                                onFilterChange(option.type, option.value);
                                            }}
                                        >
                                            {option.label}
                                            {filters[option.type] === option.value && (
                                                <Check className="h-4 w-4" />
                                            )}
                                        </button>
                                    ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
