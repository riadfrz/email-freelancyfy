import type React from 'react';

import { cn } from '@/lib/utils';

export interface TabItem {
    id: string;
    label: string;
    disabled?: boolean;
    icon?: React.ElementType;
}

interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (tabId: string) => void;
    className?: string;
    tabsClassName?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    inactiveTabClassName?: string;
    iconClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    activeTab,
    onChange,
    className = '',
    tabsClassName = '',
    tabClassName = '',
    activeTabClassName = '',
    inactiveTabClassName = '',
    iconClassName = 'h-4 w-4',
}) => {
    return (
        <div className={cn('border-b border-gray-200 dark:border-white/10', className)}>
            <nav className={cn('flex flex-wrap gap-6', tabsClassName)}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            disabled={tab.disabled}
                            onClick={() => onChange(tab.id)}
                            className={cn(
                                'flex items-center gap-2 border-b-2 pb-4 text-sm font-medium transition-colors',
                                tabClassName,
                                isActive
                                    ? cn('border-primary text-primary', activeTabClassName)
                                    : cn(
                                          'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-white/20 dark:hover:text-gray-300',
                                          inactiveTabClassName
                                      ),
                                tab.disabled && 'cursor-not-allowed opacity-50'
                            )}
                        >
                            {Icon && <Icon className={iconClassName} />}
                            {tab.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};
