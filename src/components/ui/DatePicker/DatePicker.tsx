import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { formatDate } from '@shared/utils';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
    label: string;
    value?: Date;
    onChange: (date: Date) => void;
    error?: string;
    required?: boolean;
    className?: string;
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
    ({ label, value, onChange, error, required = false, className = '' }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [view, setView] = useState<'days' | 'years'>('days');
        const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
        const [calendarStyle, setCalendarStyle] = useState<React.CSSProperties>({});
        const inputWrapperRef = useRef<HTMLDivElement>(null);
        const calendarRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    calendarRef.current &&
                    !calendarRef.current.contains(event.target as Node) &&
                    inputWrapperRef.current &&
                    !inputWrapperRef.current.contains(event.target as Node)
                ) {
                    setIsOpen(false);
                    setView('days');
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        useEffect(() => {
            if (isOpen && inputWrapperRef.current) {
                const rect = inputWrapperRef.current.getBoundingClientRect();
                const calendarHeight = 300;
                const spaceBelow = window.innerHeight - rect.bottom;
                const openUpward = spaceBelow < calendarHeight && rect.top > calendarHeight;

                setCalendarStyle({
                    position: 'fixed',
                    left: rect.left,
                    width: rect.width < 256 ? 256 : rect.width,
                    zIndex: 9999,
                    ...(openUpward
                        ? { bottom: window.innerHeight - rect.top + 4 }
                        : { top: rect.bottom + 4 }),
                });
            }
        }, [isOpen]);

        const getDaysInMonth = (year: number, month: number): number =>
            new Date(year, month + 1, 0).getDate();

        const getStartDayOfMonth = (year: number, month: number): number => {
            const day = new Date(year, month, 1).getDay();
            return day === 0 ? 6 : day - 1;
        };

        const handlePrevMonth = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentMonth((prev) => {
                const d = new Date(prev);
                d.setMonth(d.getMonth() - 1);
                return d;
            });
        };

        const handleNextMonth = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentMonth((prev) => {
                const d = new Date(prev);
                d.setMonth(d.getMonth() + 1);
                return d;
            });
        };

        const handlePrevYear = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentMonth((prev) => {
                const d = new Date(prev);
                d.setFullYear(d.getFullYear() - 1);
                return d;
            });
        };

        const handleNextYear = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentMonth((prev) => {
                const d = new Date(prev);
                d.setFullYear(d.getFullYear() + 1);
                return d;
            });
        };

        const handleSelectYear = (selectedYear: number) => {
            setCurrentMonth((prev) => {
                const d = new Date(prev);
                d.setFullYear(selectedYear);
                return d;
            });
            setView('days');
        };

        const handleSelectDate = (day: number) => {
            onChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
            setIsOpen(false);
        };

        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const renderCalendar = () => {
            const daysInMonth = getDaysInMonth(year, month);
            const startDay = getStartDayOfMonth(year, month);
            const days = [];

            for (let i = 0; i < startDay; i++) {
                days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
            }

            for (let i = 1; i <= daysInMonth; i++) {
                const isSelected =
                    value &&
                    value.getDate() === i &&
                    value.getMonth() === month &&
                    value.getFullYear() === year;

                days.push(
                    <button
                        key={i}
                        type="button"
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            isSelected
                                ? 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]'
                                : 'text-gray-900 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-white/10'
                        }`}
                        onClick={() => handleSelectDate(i)}
                    >
                        {i}
                    </button>
                );
            }

            return days;
        };

        const renderYearPicker = () => {
            const years = [];
            const startYear = year - 5;
            for (let i = 0; i < 12; i++) {
                const y = startYear + i;
                const isCurrentYear = y === year;
                years.push(
                    <button
                        key={y}
                        type="button"
                        onClick={() => handleSelectYear(y)}
                        className={`flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                            isCurrentYear
                                ? 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]'
                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10'
                        }`}
                    >
                        {y}
                    </button>
                );
            }
            return years;
        };

        return (
            <div className="relative">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>

                <div className="relative" ref={inputWrapperRef}>
                    <input
                        ref={ref}
                        type="text"
                        readOnly
                        value={formatDate(value)}
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setView('days');
                        }}
                        className={`relative block w-full cursor-pointer appearance-none rounded-lg border-2 border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-gray-500 sm:text-sm ${error ? 'border-red-500' : ''} ${className}`}
                        placeholder="MM/DD/YYYY"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Calendar size={20} className="text-gray-400 dark:text-gray-500" />
                    </div>
                </div>

                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

                {isOpen &&
                    createPortal(
                        <div
                            ref={calendarRef}
                            style={calendarStyle}
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-xl border border-gray-200 bg-white text-gray-900 shadow-lg dark:border-white/[0.06] dark:bg-[#111113] dark:text-white"
                        >
                            <div className="p-3">
                                {view === 'days' ? (
                                    <>
                                        {/* Header with Year navigation (Click year to toggle view) */}
                                        <div className="mb-2 flex items-center justify-between px-1">
                                            <button
                                                type="button"
                                                onClick={handlePrevYear}
                                                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                            >
                                                <ChevronLeft size={14} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setView('years')}
                                                className="rounded-lg px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-white/10"
                                            >
                                                {year}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNextYear}
                                                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                            >
                                                <ChevronRight size={14} />
                                            </button>
                                        </div>

                                        {/* Month navigation */}
                                        <div className="mb-4 flex items-center justify-between">
                                            <button
                                                type="button"
                                                onClick={handlePrevMonth}
                                                className="rounded-full p-1.5 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white">
                                                {MONTHS[month]}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleNextMonth}
                                                className="rounded-full p-1.5 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </div>

                                        {/* Day headers */}
                                        <div className="mb-1 grid grid-cols-7 gap-1">
                                            {DAYS.map((day) => (
                                                <div
                                                    key={day}
                                                    className="flex h-8 items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-gray-400 dark:text-slate-500"
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Day grid */}
                                        <div className="grid grid-cols-7 gap-1">
                                            {renderCalendar()}
                                        </div>
                                    </>
                                ) : (
                                    <div className="duration-200 animate-in fade-in zoom-in-95">
                                        <div className="mb-4 flex items-center justify-between px-1">
                                            <button
                                                type="button"
                                                onClick={() => handleSelectYear(year - 12)}
                                                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                                                Select Year
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => handleSelectYear(year + 12)}
                                                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                            >
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {renderYearPicker()}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setView('days')}
                                            className="mt-4 w-full rounded-lg py-2 text-xs font-bold text-gray-500 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-white/10"
                                        >
                                            Back to Calendar
                                        </button>
                                    </div>
                                )}

                                {/* Footer */}
                                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2 dark:border-white/5">
                                    <button
                                        type="button"
                                        className="text-xs font-bold text-gray-600 hover:underline dark:text-slate-200"
                                        onClick={() => {
                                            onChange(new Date());
                                            setIsOpen(false);
                                            setView('days');
                                        }}
                                    >
                                        Today
                                    </button>
                                    <button
                                        type="button"
                                        className="text-xs font-bold text-gray-500 hover:underline dark:text-slate-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        );
    }
);

DatePicker.displayName = 'DatePicker';
