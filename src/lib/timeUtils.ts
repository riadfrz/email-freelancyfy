/**
 * Format a number of seconds into a human-readable string.
 * @param totalSeconds - Total number of seconds to format.
 * @param format - 'hms' for "00:00:00" or 'short' for "01h 30m"
 */
export const formatSeconds = (
    totalSeconds: number,
    format: 'clock' | 'short' = 'clock'
): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');

    if (format === 'short') {
        if (hours > 0) return `${pad(hours)}h ${pad(minutes)}m`;
        if (minutes > 0) return `${pad(minutes)}m ${pad(seconds)}s`;
        return `${pad(seconds)}s`;
    }

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
