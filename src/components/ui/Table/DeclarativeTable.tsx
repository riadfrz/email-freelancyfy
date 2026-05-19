import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './';
import type { DeclarativeTableProps } from './types';

export function DeclarativeTable<T extends Record<string, unknown>>({
    columns,
    data,
    getRowKey,
    onRowClick,
    loading = false,
    emptyMessage = 'No data found',
    variant = 'default',
    containerClassName = '',
    onSort,
    sortKey,
    sortDirection,
}: DeclarativeTableProps<T>) {
    if (loading) {
        return (
            <Table variant={variant} containerClassName={containerClassName}>
                <TableHeader>
                    <tr>
                        {columns.map((col) => (
                            <TableHead
                                key={col.key}
                                align={col.align}
                                icon={col.icon}
                                sortable={col.sortable}
                                sortDirection={sortKey === col.key ? sortDirection : null}
                                onClick={
                                    col.sortable && onSort
                                        ? () => {
                                              const newDir =
                                                  sortKey === col.key && sortDirection === 'asc'
                                                      ? 'desc'
                                                      : 'asc';
                                              onSort(col.key, newDir);
                                          }
                                        : undefined
                                }
                            >
                                {col.title}
                            </TableHead>
                        ))}
                    </tr>
                </TableHeader>
                <TableBody>
                    {['loading-1', 'loading-2', 'loading-3'].map((key) => (
                        <TableRow key={key} hover={false}>
                            {columns.map((col) => (
                                <TableCell key={col.key} align={col.align}>
                                    <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-white/10" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }

    if (data.length === 0) {
        return (
            <Table variant={variant} containerClassName={containerClassName}>
                <TableBody>
                    <TableRow hover={false}>
                        <TableCell colSpan={columns.length}>
                            <div className="flex flex-col items-center justify-center py-12">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {emptyMessage}
                                </p>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

    return (
        <Table variant={variant} containerClassName={containerClassName}>
            <TableHeader>
                <tr>
                    {columns.map((col) => (
                        <TableHead
                            key={col.key}
                            align={col.align}
                            icon={col.icon}
                            sortable={col.sortable}
                            sortDirection={sortKey === col.key ? sortDirection : null}
                            onClick={
                                col.sortable && onSort
                                    ? () => {
                                          const newDir =
                                              sortKey === col.key && sortDirection === 'asc'
                                                  ? 'desc'
                                                  : 'asc';
                                          onSort(col.key, newDir);
                                      }
                                    : undefined
                            }
                        >
                            {col.title}
                        </TableHead>
                    ))}
                </tr>
            </TableHeader>
            <TableBody>
                {data.map((row, rowIndex) => {
                    const rowKey = getRowKey
                        ? getRowKey(row, rowIndex)
                        : 'id' in row && typeof row.id === 'string'
                          ? row.id
                          : `row-${rowIndex}`;

                    return (
                        <TableRow
                            key={rowKey}
                            onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
                        >
                            {columns.map((col) => (
                                <TableCell
                                    key={col.key}
                                    align={col.align}
                                    truncate={col.truncate}
                                    className={col.className}
                                >
                                    {col.render
                                        ? col.render(row, rowIndex)
                                        : String(row[col.key] ?? '—')}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
