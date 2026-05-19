import { useRef, useState } from 'react';

import {
    Bell,
    Calendar,
    ChevronLeft,
    ChevronRight,
    CreditCard,
    FileText,
    Filter,
    Folder,
    LayoutGrid,
    type LucideIcon,
    MessageSquare,
    MoreHorizontal,
    Plus,
    Search,
    Settings,
    Users,
    Zap,
} from 'lucide-react';

import { InteractiveStarfield } from '@/components/ui/InteractiveStarfield';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

import LandingSection from './LandingSection';
import { EmailForm } from '@/components/landing/EmailForm';

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    badge?: string;
}

interface ProjectCardProps {
    number: string;
    tag: string;
    tagStyles: string;
    title: string;
    freelancer: string;
    updated: string;
    status: string;
    statusStyles?: string;
    users: number;
    icon: LucideIcon;
    iconBg: string;
}

interface ApprovalCardProps {
    tag: string;
    title: string;
    due: string;
    days: string;
    color: string;
    tagStyles?: string;
}

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<{
        x: number | null;
        y: number | null;
    }>({ x: null, y: null });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <LandingSection
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: null, y: null })}
            className="relative overflow-hidden pb-32 pt-16 lg:pt-24"
            backgroundElement={
                <InteractiveStarfield mousePosition={mousePosition} containerRef={containerRef as React.RefObject<HTMLDivElement>} />
            }
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[1000px] -translate-x-1/2 bg-landing-gradient opacity-40 blur-3xl" />

            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <div className="mx-auto flex max-w-4xl animate-fade-in-up flex-col items-center text-center">
                            <div className="mb-8 inline-flex cursor-pointer items-center gap-1 rounded-full border border-landing-border bg-landing-surface/50 px-3 py-1 text-xs font-medium text-landing-secondary transition-colors hover:border-landing-secondary/40">
                                <span className="text-landing-accent">New</span>
                                <span className="mx-2 h-3 w-px bg-landing-border" />
                                <span>Freelancyfy 2.0 is here</span>
                                <ChevronRight className="ml-1 h-3 w-3 text-landing-secondary" />
                            </div>

                            <h1 className="mb-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[80px] lg:leading-[1]">
                                Freelance business <br />
                                operating system
                            </h1>

                            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-landing-secondary">
                                Manage projects, clients, and finance in one unified workspace.{' '}
                                <br className="hidden sm:block" />
                                Stop stitching together fragmented tools and focus on shipping work.
                            </p>

                            <div className="mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
                                <EmailForm />
                            </div>
                        </div>
                    }
                >
                    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/50">
                        {/* Browser Chrome */}
                        <div className="flex h-10 shrink-0 items-center justify-between border-b border-slate-100 bg-slate-50 px-4">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                <div className="h-3 w-3 rounded-full bg-green-400/80" />
                            </div>
                            <div className="flex h-6 flex-1 items-center justify-center px-4">
                                <div className="h-5 w-2/3 max-w-sm rounded bg-slate-200/50" />
                            </div>
                            <div className="w-16" />
                        </div>

                        {/* Light UI Mock */}
                        <div className="relative z-20 flex h-full bg-white font-sans text-slate-600 antialiased selection:bg-blue-100">
                            {/* 1. Sidebar */}
                            <div className="hidden w-64 flex-col gap-6 border-r border-slate-100 bg-slate-50 p-4 sm:flex">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                                        <Zap size={16} fill="currentColor" />
                                    </div>
                                    <span className="font-bold text-slate-900">Freelancyfy</span>
                                </div>

                                <div className="mt-4 space-y-1">
                                    <SidebarItem icon={LayoutGrid} label="Overview" active />
                                    <SidebarItem icon={Folder} label="Projects" />
                                    <SidebarItem icon={Users} label="Freelancers" />
                                    <SidebarItem icon={FileText} label="Documents" />
                                    <SidebarItem icon={Calendar} label="Schedule" />
                                    <SidebarItem icon={MessageSquare} label="Messages" badge="2" />
                                </div>

                                <div className="mt-8 space-y-1">
                                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Settings and News
                                    </div>
                                    <SidebarItem icon={Zap} label="What's New" />
                                    <SidebarItem icon={Settings} label="Settings" />
                                </div>

                                <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="User"
                                        className="h-8 w-8 rounded-full bg-slate-200 object-cover"
                                    />
                                    <div className="text-xs">
                                        <div className="font-medium text-slate-900">
                                            Client User
                                        </div>
                                        <div className="text-slate-500">Client Portal</div>
                                    </div>
                                    <div className="ml-auto">
                                        <ChevronRight size={14} className="text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* 2. Main Content */}
                            <div className="flex flex-1 flex-col overflow-hidden bg-white">
                                {/* Header */}
                                <header className="flex items-center justify-between border-b border-slate-100 px-8 py-5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <span>Dashboard</span>
                                            <ChevronRight size={12} />
                                            <span className="font-medium text-slate-600">
                                                Overview
                                            </span>
                                        </div>
                                        <h1 className="text-2xl font-bold text-slate-900">
                                            Overview
                                        </h1>
                                        <p className="text-sm text-slate-500">
                                            Welcome back! Here&apos;s the status of your requested
                                            projects.
                                        </p>
                                    </div>
                                    <div className="hidden items-center gap-5 md:flex">
                                        <Search
                                            size={20}
                                            className="cursor-pointer text-slate-400 hover:text-slate-600"
                                        />
                                        <Bell
                                            size={20}
                                            className="cursor-pointer text-slate-400 hover:text-slate-600"
                                        />
                                        <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800">
                                            <Plus size={16} /> Request Project
                                        </button>
                                    </div>
                                </header>

                                {/* Content & Right Sidebar Grid */}
                                <div className="flex flex-1 overflow-hidden">
                                    {/* Center Column */}
                                    <div className="flex-1 overflow-y-auto p-8">
                                        <div className="mb-6 flex items-center justify-between">
                                            <h2 className="text-lg font-bold text-slate-900">
                                                Active Projects
                                            </h2>
                                            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                                                <Filter size={12} /> Filter
                                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
                                                    3
                                                </span>
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <ProjectCard
                                                number="1"
                                                tag="Web Dev"
                                                tagStyles="bg-indigo-100 text-indigo-700"
                                                title="Website Redesign"
                                                freelancer="Alice Freeman"
                                                updated="Updated 8:00 am"
                                                status="In Progress"
                                                users={4}
                                                icon={LayoutGrid}
                                                iconBg="bg-indigo-50 text-indigo-600"
                                            />
                                            <ProjectCard
                                                number="2"
                                                tag="UI/UX"
                                                tagStyles="bg-orange-100 text-orange-700"
                                                title="Mobile App Design"
                                                freelancer="Bob Smith"
                                                updated="Updated 9:00 am"
                                                status="Pending Review"
                                                users={3}
                                                statusStyles="bg-orange-50 text-orange-700"
                                                icon={FileText}
                                                iconBg="bg-orange-50 text-orange-600"
                                            />
                                            <ProjectCard
                                                number="3"
                                                tag="Branding"
                                                tagStyles="bg-pink-100 text-pink-700"
                                                title="Brand Identity"
                                                freelancer="Charlie Brown"
                                                updated="Updated 2:00 pm"
                                                status="In Review"
                                                users={2}
                                                icon={CreditCard}
                                                iconBg="bg-pink-50 text-pink-600"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Sidebar - Calendar */}
                                    <div className="hidden w-80 flex-col gap-8 border-l border-slate-100 bg-white p-6 xl:flex">
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <ChevronLeft
                                                        size={14}
                                                        className="cursor-pointer text-slate-400 hover:text-slate-600"
                                                    />
                                                    <h3 className="text-sm font-bold text-slate-900">
                                                        February
                                                    </h3>
                                                    <ChevronRight
                                                        size={14}
                                                        className="cursor-pointer text-slate-400 hover:text-slate-600"
                                                    />
                                                </div>
                                                <button className="flex items-center gap-1 rounded border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                                                    <Filter size={10} /> Filter
                                                    <div className="flex h-3 w-3 items-center justify-center rounded-full bg-slate-900 text-[8px] text-white">
                                                        2
                                                    </div>
                                                </button>
                                            </div>
                                            <CalendarWidget />
                                        </div>

                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <h3 className="text-sm font-bold text-slate-900">
                                                    Pending Approvals
                                                </h3>
                                                <Filter
                                                    size={12}
                                                    className="cursor-pointer text-slate-400 hover:text-slate-600"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <ApprovalCard
                                                    tag="Design"
                                                    title="Homepage Mockup"
                                                    due="Due: 10 Feb - 10:00am"
                                                    days="4 Days to review"
                                                    color="indigo"
                                                />
                                                <ApprovalCard
                                                    tag="Milestone"
                                                    title="Logo Concepts"
                                                    due="Due: 11 Feb - 5:00pm"
                                                    days="5 Days to review"
                                                    color="emerald"
                                                    tagStyles="bg-emerald-100 text-emerald-700"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fade to black overlay */}
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    </div>
                </ContainerScroll>
            </div>
        </LandingSection>
    );
};

// --- Subcomponents for Mock UI ---

const SidebarItem = ({ icon: Icon, label, active, badge }: SidebarItemProps) => (
    <div
        className={`group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:bg-white hover:text-slate-900'}`}
    >
        <div className="flex items-center gap-3">
            <Icon
                size={18}
                className={active ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}
            />
            <span>{label}</span>
        </div>
        {badge && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
                {badge}
            </span>
        )}
    </div>
);

const ProjectCard = ({
    number,
    tag,
    tagStyles,
    title,
    freelancer,
    updated,
    status,
    statusStyles,
    users,
    icon: Icon,
    iconBg,
}: ProjectCardProps) => (
    <div className="group flex cursor-pointer items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-white hover:shadow-md hover:ring-1 hover:ring-slate-200">
        <span className="mt-1 text-xs font-medium text-slate-400">{number}</span>
        <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
                <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tagStyles}`}
                >
                    {tag}
                </span>
                <span className="text-xs text-slate-400">{updated}</span>
            </div>

            <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
                    <Icon size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-xs text-slate-500">Freelancer: {freelancer}</p>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200/50 pt-3">
                <div className="flex items-center gap-2">
                    <span
                        className={`inline-flex items-center rounded text-[10px] font-medium ${statusStyles || 'bg-slate-100 text-slate-600'} px-2 py-1`}
                    >
                        {status}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Users size={12} /> {users}
                    </div>
                </div>
                <MoreHorizontal size={16} className="text-slate-300 hover:text-slate-500" />
            </div>
        </div>
    </div>
);

const CalendarWidget = () => (
    <div className="w-full text-xs">
        <div className="mb-2 grid grid-cols-7 text-center text-slate-400">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                <div key={d}>{d}</div>
            ))}
        </div>
        <div className="grid grid-cols-7 gap-y-3 text-center font-medium text-slate-600">
            {/* Week 1 */}
            <div className="text-slate-300">27</div>
            <div className="text-slate-300">28</div>
            <div className="text-slate-300">29</div>
            <div className="text-slate-300">30</div>
            <div className="text-slate-300">31</div>
            <div>1</div>
            <div>2</div>

            {/* Week 2 */}
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>

            {/* Week 3 */}
            <div>10</div>
            <div>11</div>
            <div className="relative mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                12
            </div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>

            {/* Week 4 */}
            <div>17</div>
            <div>18</div>
            <div className="relative">
                19
                <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-400" />
            </div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
        </div>
        <div className="mt-4 rounded bg-slate-50 px-3 py-2 text-center text-[10px] text-slate-500">
            <span className="font-bold text-slate-700">3 Milestones</span> this month
        </div>
    </div>
);

const ApprovalCard = ({ tag, title, due, days, color, tagStyles }: ApprovalCardProps) => {
    const bg =
        color === 'indigo' ? 'bg-indigo-50 border-indigo-100' : 'bg-emerald-50 border-emerald-100';
    const tagBg = tagStyles || 'bg-indigo-100 text-indigo-700';

    return (
        <div className={`rounded-lg border ${bg} p-3 transition-all hover:shadow-sm`}>
            <div className="flex items-start justify-between">
                <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${tagBg}`}>
                    {tag}
                </span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-slate-600 shadow-sm">
                    {days}
                </span>
            </div>
            <h4 className="mt-2 text-sm font-bold text-slate-900">{title}</h4>
            <p className="text-[10px] text-slate-500">{due}</p>
            <button className="mt-3 w-full rounded border border-white bg-white py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                Review
            </button>
        </div>
    );
};

export default HeroSection;
