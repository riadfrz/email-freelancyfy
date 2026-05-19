export interface TableColumn<T = unknown> {
    /** Unique key for the column */
    key: string;
    /** Column header title */
    title: string;
    /** Icon to display in header (optional) */
    icon?: React.ReactNode;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Enable sorting */
    sortable?: boolean;
    /** Custom cell renderer */
    render?: (row: T, rowIndex: number) => React.ReactNode;
    /** Truncate text if too long */
    truncate?: boolean;
    /** Custom class for cells */
    className?: string;
}

export interface DeclarativeTableProps<T = unknown> {
    /** Column definitions */
    columns: TableColumn<T>[];
    /** Data rows */
    data: T[];
    /** Function to get unique row key */
    getRowKey?: (row: T, index: number) => string;
    /** Row click handler */
    onRowClick?: (row: T, index: number) => void;
    /** Loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: string;
    /** Table variant */
    variant?: 'default' | 'striped';
    /** Container class */
    containerClassName?: string;
    /** Custom sort handler */
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
    /** Current sort state */
    sortKey?: string;
    sortDirection?: 'asc' | 'desc' | null;
}
