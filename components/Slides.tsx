import React from 'react';
import {
    ShieldCheck,
    TrendingUp,
    Users,
    Lock,
    GraduationCap,
    School,
    Award,
    Database,
    BrainCircuit,
    Wallet,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Scale,
    FileText,
    DollarSign,
    Briefcase,
    Zap,
    ArrowRight,
    ArrowDown,
    ArrowLeft,
    ArrowUp,
    Target,
    Mail,
    BookOpen,
    RefreshCw,
    Laptop,
    Layout,
    Globe,
    Smartphone,
    UserCheck,
    Building2,
    Clock,
    ClipboardCheck,
    Search,
    MapPin,
    ThumbsUp,
    PieChart as PieIcon,
    BarChart as BarChartIcon,
    MessageSquare,
    Mic,
    Lightbulb,
    Wand2,
    FileWarning,
    ScanFace,
    Banknote,
    Receipt,
    Landmark,
    LineChart,
    HelpCircle,
    Settings,
    MessageSquareDashed,
    Phone
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';
import { SlideProps } from '../types';

// --- Slide 1: Title ---
export const TitleSlide: React.FC<SlideProps> = () => (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl animate-fade-in-up">
        <div className="mb-6 p-4 bg-teal-500/10 rounded-full border border-teal-400/30">
            <ShieldCheck size={64} className="text-teal-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            UniEdu
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-teal-300 mb-8">
            The "Governance-First" EdTech Evolution
        </h2>
        <div className="w-24 h-1 bg-teal-500 mb-8"></div>
        <p className="text-xl text-slate-400 max-w-2xl">
            Solving the Trust Crisis in Vietnam’s K-12 and University Tutoring Market
        </p>
    </div>
);

// --- Slide 2: Market Validation ---
const marketData = [
    { year: '2024', total: 1000, ai: 24.0 },
    { year: '2026', total: 1300, ai: 65.0 },
    { year: '2028', total: 1700, ai: 140.0 },
    { year: '2030', total: 2200, ai: 280.0 },
    { year: '2033', total: 3000, ai: 507.8 },
];

export const MarketSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col">
        <h3 className="text-3xl font-bold text-slate-100 mb-2">Market Validation</h3>
        <p className="text-teal-400 mb-6">Transitioning to "Governance-First" Era</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Key Stats Column */}
            <div className="space-y-4 flex flex-col justify-center">
                {/* Total Market */}
                <div className="bg-navy-800 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Total Market (2033)</p>
                    <div className="text-3xl font-bold text-white flex items-center gap-2">
                        $3.0 Billion <TrendingUp className="text-teal-400" size={24} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">CAGR: 12.96% (General)</p>
                </div>

                {/* AI Niche */}
                <div className="bg-navy-800 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">AI Sub-segment (2033)</p>
                    <div className="text-3xl font-bold text-teal-300">$507.8 Million</div>
                    <p className="text-xs text-slate-500 mt-1">Explosive CAGR: <span className="text-white font-bold">35.69%</span></p>
                </div>

                {/* User Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-800 p-4 rounded-lg border-t-4 border-blue-500">
                        <p className="text-slate-400 text-xs uppercase">ARPU (2024)</p>
                        <div className="text-2xl font-bold text-white">$42.69</div>
                        <p className="text-[10px] text-slate-500">High spending power</p>
                    </div>
                    <div className="bg-navy-800 p-4 rounded-lg border-t-4 border-blue-500">
                        <p className="text-slate-400 text-xs uppercase">Users (2029)</p>
                        <div className="text-2xl font-bold text-white">11.8M</div>
                        <p className="text-[10px] text-slate-500">Learners forecast</p>
                    </div>
                </div>

                {/* Regulation */}
                <div className="bg-purple-500/10 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-purple-300 text-xs font-bold uppercase">Regulatory Catalyst</p>
                    <p className="text-white font-semibold text-sm mt-1">Circular 29/2024/TT-BGDDT</p>
                    <p className="text-xs text-slate-400 mt-1">Effective Feb 14, 2025: Mandates fee transparency & registration.</p>
                </div>
            </div>

            {/* Chart */}
            <div className="lg:col-span-2 bg-navy-800/50 p-6 rounded-xl border border-navy-700 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-slate-300">Market Growth Projection (USD Millions)</h4>
                    <div className="text-xs text-teal-400 px-2 py-1 bg-teal-900/30 rounded border border-teal-800">
                        Top 3 in SE Asia
                    </div>
                </div>
                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={marketData}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                            <XAxis dataKey="year" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0a192f', borderColor: '#2dd4bf' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="total" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorTotal)" name="Total Market" />
                            <Area type="monotone" dataKey="ai" stroke="#ffffff" fillOpacity={1} fill="url(#colorAi)" name="AI Niche" />
                            <Legend />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
);

// --- Slide 3: Porter's Five Forces ---
export const PortersSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col items-center justify-start p-4 pt-2">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-2xl shrink-0">
            Porter's Five Forces Analysis
        </h3>

        <div className="w-full max-w-7xl flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">

            {/* Left Column: Suppliers */}
            <div className="md:col-start-1 flex flex-col justify-center relative">
                <div className="bg-emerald-900/30 border border-emerald-500/40 p-4 rounded-xl shadow-lg relative z-10 hover:border-emerald-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2 border-b border-emerald-500/30 pb-2">
                        <Users size={24} className="text-emerald-400" />
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">Suppliers</h4>
                        </div>
                        <span className="text-xs font-bold text-emerald-900 bg-emerald-400 px-2 py-0.5 rounded-full">LOW</span>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-200">
                        <li className="flex gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span><strong className="text-emerald-200">Positioning:</strong> Tutors as Mentors (human connection).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span><strong className="text-emerald-200">Attraction:</strong> "Safe Haven" via Escrow security.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span><strong className="text-emerald-200">Cost:</strong> 10% fee (vs 50% market avg).</span>
                        </li>
                    </ul>
                </div>
                {/* Arrow to Center */}
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-slate-500/80 z-0 hidden md:block">
                    <ArrowRight size={48} strokeWidth={1} />
                </div>
            </div>

            {/* Middle Column: Entrants (Top), Rivalry (Center), Substitutes (Bottom) */}
            <div className="md:col-start-2 flex flex-col justify-center gap-6 h-full py-1">

                {/* Top: New Entrants */}
                <div className="bg-blue-900/30 border border-blue-500/40 p-3 rounded-xl shadow-lg relative hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2 border-b border-blue-500/30 pb-1">
                        <ShieldCheck size={20} className="text-blue-400" />
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-base">New Entrants</h4>
                        </div>
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-400 px-2 py-0.5 rounded-full">MODERATE</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-200">
                        <li className="flex gap-1">
                            <span className="text-blue-400">•</span>
                            <span><strong className="text-blue-200">Barriers:</strong> Double Verification (AI+Human) cost.</span>
                        </li>
                        <li className="flex gap-1">
                            <span className="text-blue-400">•</span>
                            <span><strong className="text-blue-200">Moat:</strong> Exclusive Verified Tutor Database.</span>
                        </li>
                    </ul>
                    {/* Down Arrow */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-500/80 hidden md:block">
                        <ArrowDown size={32} strokeWidth={1} />
                    </div>
                </div>

                {/* Center: Rivalry */}
                <div className="bg-red-900/40 border-2 border-red-500 p-4 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.3)] z-20 relative">
                    <div className="flex flex-col items-center text-center mb-3">
                        <h4 className="font-extrabold text-white text-xl tracking-tight uppercase drop-shadow-lg">Competitive Rivalry</h4>
                        <span className="text-xs font-bold text-white bg-red-600 px-4 py-1 rounded-full shadow-lg mt-2 border border-red-400">INTENSITY: MODERATE</span>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-100 text-left">
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <span><strong className="text-red-200">Blue Ocean:</strong> Ignoring generic matching apps.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <span><strong className="text-red-200">Niche Leader:</strong> Dominate "Trust-based" segment.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <CheckCircle2 size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <span><strong className="text-red-200">USP:</strong> Escrow & Money-Back Guarantee.</span>
                        </li>
                    </ul>
                </div>

                {/* Bottom: Substitutes */}
                <div className="bg-purple-900/30 border border-purple-500/40 p-3 rounded-xl shadow-lg relative hover:border-purple-400 transition-colors">
                    {/* Up Arrow */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-500/80 hidden md:block">
                        <ArrowUp size={32} strokeWidth={1} />
                    </div>
                    <div className="flex items-center gap-2 mb-2 border-b border-purple-500/30 pb-1">
                        <BrainCircuit size={20} className="text-purple-400" />
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-base">Substitutes</h4>
                        </div>
                        <span className="text-[10px] font-bold text-purple-900 bg-purple-400 px-2 py-0.5 rounded-full">LOW</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-200">
                        <li className="flex gap-1">
                            <span className="text-purple-400">•</span>
                            <span><strong className="text-purple-200">Co-opt:</strong> Integrate AI (ChatGPT) as tools.</span>
                        </li>
                        <li className="flex gap-1">
                            <span className="text-purple-400">•</span>
                            <span><strong className="text-purple-200">Differentiation:</strong> Human connection/empathy.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Column: Buyers */}
            <div className="md:col-start-3 flex flex-col justify-center relative">
                <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-slate-500/80 z-0 hidden md:block">
                    <ArrowLeft size={48} strokeWidth={1} />
                </div>
                <div className="bg-orange-900/30 border border-orange-500/40 p-4 rounded-xl shadow-lg relative z-10 hover:border-orange-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2 border-b border-orange-500/30 pb-2">
                        <Wallet size={24} className="text-orange-400" />
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">Buyers</h4>
                        </div>
                        <span className="text-xs font-bold text-orange-900 bg-orange-400 px-2 py-0.5 rounded-full">MODERATE</span>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-200">
                        <li className="flex gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span><strong className="text-orange-200">Lock-in:</strong> Loss of Learning History & Charts.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span><strong className="text-orange-200">Commitment:</strong> "Learning Insurance" creates sunk-cost.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

// --- Slide 4: Analysis (Deep Dive) ---
export const PortersAnalysisSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col items-center p-2 md:p-4">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 text-center">Strategic Market Analysis</h3>
        <p className="text-teal-400 mb-4 text-center">Detailed Strategic Breakdown</p>

        {/* Scroll wrapper with min-h-0 is crucial for scrolling inside a flex container */}
        <div className="flex-1 w-full min-h-0 overflow-y-auto px-2 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full max-w-7xl pb-8 mx-auto">

                {/* 1. Competitive Rivalry */}
                <div className="bg-navy-800 p-4 rounded-xl border border-red-500/30 hover:border-red-500 transition-colors lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-red-900/50 rounded-lg text-red-400">
                            <TrendingUp size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white">Competitive Rivalry</h4>
                    </div>
                    <div className="space-y-3 flex flex-col justify-start">
                        <p className="text-xs text-slate-400 mb-1">Market: $3.2B (2034) | Dissatisfaction: 45%</p>
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-red-500 flex-1">
                            <p className="text-xs font-bold text-red-300 uppercase mb-1">Strategy: Quality Standard</p>
                            <p className="text-slate-300 text-xs">Differentiation via <span className="text-white font-bold">80% AI Testing</span> threshold to separate from low-quality "matching" apps.</p>
                        </div>
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-red-500 flex-1">
                            <p className="text-xs font-bold text-red-300 uppercase mb-1">Trust Gap</p>
                            <p className="text-slate-300 text-xs">Capitalizing on the demand for academic integrity in a fragmented market.</p>
                        </div>
                    </div>
                </div>

                {/* 2. Threat of New Entrants */}
                <div className="bg-navy-800 p-4 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-colors lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400">
                            <Lock size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white">Threat of New Entrants</h4>
                    </div>
                    <div className="space-y-3 flex flex-col justify-start">
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-blue-500 flex-1">
                            <p className="text-xs font-bold text-blue-300 uppercase mb-1">Capital Barrier ($2M)</p>
                            <p className="text-slate-300 text-xs">Bypassing the <span className="text-white font-bold">$2M License</span> requirement via "Partner-First" Escrow (VietinBank), a hurdle for clones.</p>
                        </div>
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-blue-500 flex-1">
                            <p className="text-xs font-bold text-blue-300 uppercase mb-1">Deep Verification</p>
                            <p className="text-slate-300 text-xs">"Clean & Real" system with AI OCR + Interviews creates an operational moat against "get-rich-quick" apps.</p>
                        </div>
                    </div>
                </div>

                {/* 3. Threats of Substitution */}
                <div className="bg-navy-800 p-4 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-colors lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400">
                            <BrainCircuit size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white">Threats of Substitution</h4>
                    </div>
                    <div className="space-y-3 flex flex-col justify-start">
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-purple-500 flex-1">
                            <p className="text-xs font-bold text-purple-300 uppercase mb-1">"Co-opt" Strategy</p>
                            <p className="text-slate-300 text-xs">Repositioning tutors as <span className="text-white font-bold">Academic Mentors</span> (ethics/resilience) to complement, not fight, AI tools.</p>
                        </div>
                        <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-purple-500 flex-1">
                            <p className="text-xs font-bold text-purple-300 uppercase mb-1">AI Proctoring</p>
                            <p className="text-slate-300 text-xs">Using 90% accurate AI to verify integrity, addressing the 68% of parents who oppose full AI control.</p>
                        </div>
                    </div>
                </div>

                {/* 4. Buyer Power */}
                <div className="bg-navy-800 p-4 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-colors lg:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-orange-900/50 rounded-lg text-orange-400">
                            <Wallet size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white">Buyer Power</h4>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xs text-slate-400">Strategy: Reducing high buyer power via switching costs.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-orange-500 h-full">
                                <p className="text-xs font-bold text-orange-300 uppercase mb-1">Data Lock-in</p>
                                <p className="text-slate-300 text-xs">Digital Learning Records store longitudinal performance history, making it "expensive" to switch.</p>
                            </div>
                            <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-orange-500 h-full">
                                <p className="text-xs font-bold text-orange-300 uppercase mb-1">Loss Aversion</p>
                                <p className="text-slate-300 text-xs">Sunk Cost Fallacy: Parents invest in "Escrow Insurance" setup, increasing retention.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Supplier Power */}
                <div className="bg-navy-800 p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-500 transition-colors lg:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-900/50 rounded-lg text-emerald-400">
                            <Users size={20} />
                        </div>
                        <h4 className="text-lg font-bold text-white">Supplier Power</h4>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xs text-slate-400">Strategy: Neutralizing power via financial security.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-emerald-500 h-full">
                                <p className="text-xs font-bold text-emerald-300 uppercase mb-1">Salary Security</p>
                                <p className="text-slate-300 text-xs">Offering Escrow guarantees attracts tutors who fear non-payment, building loyalty.</p>
                            </div>
                            <div className="bg-navy-900 p-3 rounded-lg border-l-2 border-emerald-500 h-full">
                                <p className="text-xs font-bold text-emerald-300 uppercase mb-1">Lowest Fees (10%)</p>
                                <p className="text-slate-300 text-xs">Undercutting traditional centers (40-50%) to convert "gig workers" into long-term partners.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

// --- Slide 5: Experts ---
export const ExpertsSlide: React.FC<SlideProps> = () => (
    <div className="w-full flex flex-col h-full justify-center">
        <div className="mb-8 text-center shrink-0">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">Expert Interviews</h3>
            <p className="text-teal-400 text-xl">Profile and Contact Information of Experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-0">

            {/* Expert 1 */}
            <div className="bg-navy-800 rounded-3xl p-8 border border-navy-600 flex flex-col h-full justify-center hover:border-teal-500/50 transition-all shadow-xl group">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30">
                        <School size={40} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white leading-tight">Hoang Thi Thanh Tuyen</h4>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <span className="text-sm font-bold text-navy-900 bg-teal-400 px-3 py-1 rounded-md">M.Ed.</span>
                            <span className="text-sm font-bold text-slate-300 bg-navy-900 border border-navy-700 px-3 py-1 rounded-md">Vice Principal</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 text-lg text-slate-300 flex-1 flex flex-col justify-center">
                    <div className="flex gap-4">
                        <Briefcase size={24} className="text-teal-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Organization</strong>
                            No Trang Long Primary School
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Award size={24} className="text-teal-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Expertise</strong>
                            Education Management, Student Affairs
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <FileText size={24} className="text-teal-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Relevant Experience (10+ Years)</strong>
                            <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-300/90">
                                <li>Oversaw academic quality and student performance.</li>
                                <li>Collaborated with parents and teachers on learning outcomes.</li>
                                <li>Managed supplementary learning and tutoring activities.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-700 flex items-center gap-3 text-base text-slate-400">
                    <Mail size={20} /> hoangthithanhtuyen268@gmail.com
                </div>
            </div>

            {/* Expert 2 */}
            <div className="bg-navy-800 rounded-3xl p-8 border border-navy-600 flex flex-col h-full justify-center hover:border-purple-500/50 transition-all shadow-xl group">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/30">
                        <GraduationCap size={40} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white leading-tight">Trinh Thi Kieu Ni</h4>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <span className="text-sm font-bold text-navy-900 bg-purple-400 px-3 py-1 rounded-md">Teacher</span>
                            <span className="text-sm font-bold text-slate-300 bg-navy-900 border border-navy-700 px-3 py-1 rounded-md">English</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 text-lg text-slate-300 flex-1 flex flex-col justify-center">
                    <div className="flex gap-4">
                        <School size={24} className="text-purple-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Level</strong>
                            Secondary School
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Award size={24} className="text-purple-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Expertise</strong>
                            English Language Teaching, Communicative Methods
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <FileText size={24} className="text-purple-500 shrink-0 mt-1" />
                        <div>
                            <strong className="text-white block text-xl mb-1">Teaching Experience (10+ Years)</strong>
                            <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-300/90">
                                <li>Taught English to secondary school students.</li>
                                <li>Assessed performance through regular evaluations.</li>
                                <li>Collaborated closely with parents to monitor progress.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-700 flex items-center gap-3 text-base text-slate-400">
                    <Mail size={20} /> kieunitrinh@gmail.com
                </div>
            </div>

        </div>
    </div>
);

// --- Slide 6: Key Learnings ---
export const KeyLearningsSlide: React.FC<SlideProps> = () => (
    <div className="w-full flex flex-col h-full">
        <div className="mb-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Key Learning Points</h3>
            <p className="text-teal-400">Synthesized Insights from Expert Interviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2">

            {/* 1. Market Outlook */}
            <div className="bg-navy-800 rounded-2xl p-6 border border-teal-500/20 hover:border-teal-500 transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-4 border-b border-navy-700 pb-3">
                    <div className="p-2 bg-teal-900/50 rounded-lg text-teal-400">
                        <TrendingUp size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Market Outlook</h4>
                </div>
                <ul className="space-y-4 text-slate-300 text-sm">
                    <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Quality Verification Demand</strong>
                            Parents are shifting from unverified options to platforms guaranteeing tutor expertise.
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Subject-Specific Gaps</strong>
                            Clear opportunity in Math, Physics, and Early Childhood development.
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Centralization</strong>
                            A unified platform for management and tracking is needed in a fragmented market.
                        </div>
                    </li>
                </ul>
            </div>

            {/* 2. Risks & Considerations */}
            <div className="bg-navy-800 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500 transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-4 border-b border-navy-700 pb-3">
                    <div className="p-2 bg-orange-900/50 rounded-lg text-orange-400">
                        <AlertTriangle size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Critical Risks</h4>
                </div>
                <ul className="space-y-4 text-slate-300 text-sm">
                    <li className="flex gap-3">
                        <BookOpen size={18} className="text-orange-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Pedagogical Competency</strong>
                            Degrees don't equal teaching skill. Rigorous screening is mandatory.
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <Scale size={18} className="text-orange-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Curriculum Consistency</strong>
                            Must align with Ministry of Education standards to avoid student confusion.
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <ShieldCheck size={18} className="text-orange-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block">Safety Protocols</strong>
                            Strict background checks are essential for trust in primary/secondary levels.
                        </div>
                    </li>
                </ul>
            </div>

            {/* 3. Customer Behavior */}
            <div className="bg-navy-800 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500 transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-4 border-b border-navy-700 pb-3">
                    <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400">
                        <Users size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Target Customers</h4>
                </div>
                <div className="space-y-4">
                    <div className="bg-navy-900/50 p-3 rounded-lg border-l-2 border-blue-500">
                        <div className="flex items-center gap-2 mb-1">
                            <Wallet size={16} className="text-blue-300" />
                            <strong className="text-blue-200 uppercase text-xs">Parents (Decision Makers)</strong>
                        </div>
                        <p className="text-xs text-slate-300">Value constant communication, progress reports, and measurable outcomes.</p>
                    </div>
                    <div className="bg-navy-900/50 p-3 rounded-lg border-l-2 border-blue-500">
                        <div className="flex items-center gap-2 mb-1">
                            <GraduationCap size={16} className="text-blue-300" />
                            <strong className="text-blue-200 uppercase text-xs">Students (Users)</strong>
                        </div>
                        <p className="text-xs text-slate-300">
                            <span className="text-white font-bold">Primary:</span> Require high engagement.<br />
                            <span className="text-white font-bold">High School:</span> Prioritize exam-solving techniques.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Additional Insights */}
            <div className="bg-navy-800 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500 transition-all shadow-lg">
                <div className="flex items-center gap-3 mb-4 border-b border-navy-700 pb-3">
                    <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400">
                        <Zap size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Strategic Insights</h4>
                </div>
                <div className="space-y-4 text-slate-300 text-sm">
                    <div className="flex gap-3 items-start">
                        <RefreshCw size={24} className="text-purple-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block text-base mb-1">The Three-Way Loop</strong>
                            <p className="text-xs leading-relaxed">Success depends on creating a feedback loop between the <span className="text-purple-300 font-bold">Tutor</span>, <span className="text-purple-300 font-bold">Student</span>, and <span className="text-purple-300 font-bold">Parent</span>.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start pt-2 border-t border-navy-700/50">
                        <Laptop size={24} className="text-purple-500 shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white block text-base mb-1">Digital Transformation</strong>
                            <p className="text-xs leading-relaxed">The platform shouldn't just "find" a tutor but provide tools for <span className="text-purple-300 font-bold">session scheduling</span> and <span className="text-purple-300 font-bold">digital assignment tracking</span>.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

// --- Slide 7: Detailed Competitive Table ---
export const DetailedCompetitiveTableSlide: React.FC<SlideProps> = () => {
    // Data Structure for the Table
    const competitors = [
        "EduBox", "Blacasa", "HOCMAI", "Topica", "Kyna.vn", "Monkey", "CoLearn", "Quanda", "Galaxy"
    ];

    const data = [
        // Company Specifics
        {
            section: "Company Specifics", rows: [
                { name: "Company type", values: ["EdTech (ride-hailing).", "Tutor connections.", "K-12 adaptive.", "English & skill.", "Skills training.", "Early childhood.", "Digital learning.", "Math solving.", "K-12 lifelong."], startup: "Sharing Economy." },
                { name: "Employees", values: ["~10.", "Founder-led.", "Not specified.", "~1,700.", "51-200.", "Not specified.", "Not specified.", "Not specified.", "Not specified."], startup: "Startup phase." },
                { name: "Year founded", values: ["~2019.", "2017.", "2007.", "2008.", "2013.", "2014.", "Not specified.", "Pre-2021.", "2020."], startup: "New venture (2026)." },
                { name: "Funding", values: ["Not specified.", "Not specified.", "Acquired (2020).", "$50M.", "Not specified.", "$100K.", "Not specified.", "Not specified.", "~$10M.",], startup: "Seeking 500M-1B." },
                { name: "Investors", values: ["Not specified.", "Not specified.", "IDG Ventures.", "Private equity.", "Not specified.", "Google Launchpad.", "Not specified.", "Not specified.", "East Ventures."], startup: "TBD." },
                { name: "Acquisitions", values: ["None noted.", "None noted.", "Acquired by Galaxy.", "Incubated startups.", "None noted.", "None noted.", "None noted.", "None noted.", "HOCMAI, FUNiX."], startup: "None." },
                { name: "Customers", values: ["14,000 users.", "Not specified.", "Over 8M learners.", "~1M trained.", "600K+ learners.", "Not specified.", "Not specified.", "65M registered.", "8M+ learners."], startup: "Quality-focused." },
                { name: "S. & W.", values: ["Fast matching.", "High-end service.", "No.1 online K-12.", "Large scale.", "650 courses.", "Early ed focus.", "Digital platforms.", "Instant solving.", "Full ecosystem."], startup: "AI vetting/trust." },
            ]
        },
        // Target Customer
        {
            section: "Target Customer", rows: [
                { name: "Products/Serv.", values: ["Matching app.", "Tutor platform.", "Adaptive tests.", "Online English.", "Professional soft.", "Early English app.", "Digital learning.", "Q&A solving.", "Full Ed-chain."], startup: "AI-vetted tutors." },
                { name: "Primary Buyer", values: ["Parents/students.", "Parents/students.", "Students/parents.", "Learners.", "Professionals.", "Parents/kids.", "Learners.", "Students.", "Learners."], startup: "Parents." },
                { name: "Secondary Buyer", values: ["Tutors.", "Tutors.", "Teachers?", "Tutors.", "Instructors.", "Kids.", "Teachers.", "Teachers.", "Workforce."], startup: "Tutors/students." },
                { name: "Messaging", values: ["Income via share.", "Quality via tech.", "No.1 learning.", "Learn English.", "Learn anywhere.", "Early access.", "Digital training.", "Solve instantly.", "High-quality ed.",], startup: "Trust via AI." },
            ]
        },
        // Product Specifics
        {
            section: "Product Specifics", rows: [
                { name: "Features", values: ["Ride-hailing style.", "Bmentor assistant.", "Course testing.", "Online classes.", "650 courses, LMS.", "App-based ed.", "Online training.", "AI Q&A solving.", "Full K-12 chain."], startup: "AI proctor/vetting." },
                { name: "Pricings", values: ["Not specified.", "Not specified.", "Not specified.", "Not specified.", "Low cost.", "Affordable.", "Not specified.", "Freemium.", "Not specified."], startup: "30-40% comm." },
                { name: "Pre-purchase", values: ["Fast signup.", "Not specified.", "Free lessons.", "Not specified.", "Not specified.", "Not specified.", "Not specified.", "Not specified."], startup: "Free leads." },
                { name: "Strengths", values: ["User-friendly.", "Rigorous.", "Market leader.", "Scale, variety.", "Expert partners.", "Early ed pioneer.", "Digital focus.", "4.5B solved.", "Integration."], startup: "High trust tech." },
                { name: "Weakness", values: ["Weak vetting.", "Manual limits.", "Less personal.", "Variability.", "Niche skills.", "Age-specific.", "Short-term.", "No long-term.", "Less tutor focus."], startup: "New scale." },
                { name: "Reviews", values: ["Post-COVID success.", "Positive mission.", "Leading status.", "1M trained.", "600K users.", "Award-winning.", "Limited info.", "Top rankings.", "Profitable."], startup: "N/A." },
            ]
        },
        // Positioning
        {
            section: "Positioning", rows: [
                { name: "Win Strategy", values: ["AI vetting+escrow.", "Automation+manual.", "Progress tracking.", "Trust barriers.", "Tutor focus.", "Long-term niche.", "Hybrid vetting.", "Long-term tests.", "Specialized trust."], startup: "Quality-first tech." },
                { name: "Reason Prefer", values: ["Solves trust pains.", "Superior quality.", "AI objective.", "Escrow security.", "Direct connect.", "Full cycle.", "Added value.", "Integrity exams.", "Specialized trust."], startup: "Core trust/quality." },
            ]
        }
    ];

    return (
        <div className="w-full flex flex-col h-full overflow-hidden">
            <div className="mb-4 text-center shrink-0">
                <h3 className="text-2xl font-bold text-white mb-1">Detailed Competitive Analysis</h3>
                <p className="text-teal-400 text-sm">Comprehensive Feature Matrix</p>
            </div>

            <div className="flex-1 w-full overflow-auto custom-scrollbar border border-navy-700 rounded-lg bg-navy-800/30">
                <table className="w-full text-left border-collapse min-w-[1500px]">
                    <thead className="sticky top-0 z-20 bg-navy-900 border-b border-navy-600">
                        <tr>
                            <th className="p-3 font-bold text-slate-300 text-xs uppercase tracking-wider sticky left-0 z-30 bg-navy-900 border-r border-navy-700 shadow-[2px_0_5px_rgba(0,0,0,0.3)] min-w-[140px]">
                                Category
                            </th>
                            {competitors.map((comp, i) => (
                                <th key={i} className="p-3 font-bold text-slate-400 text-[10px] uppercase tracking-wider bg-navy-900 min-w-[120px]">
                                    {comp}
                                </th>
                            ))}
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider bg-teal-900/20 border-l border-teal-500 min-w-[140px]">
                                My Startup
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] text-slate-300">
                        {data.map((section, sIndex) => (
                            <React.Fragment key={sIndex}>
                                <tr className="bg-navy-700/50">
                                    <td colSpan={competitors.length + 2} className="p-2 font-bold text-teal-300 text-xs uppercase bg-navy-800 sticky left-0 z-10 border-b border-navy-600 pl-4">
                                        {section.section}
                                    </td>
                                </tr>
                                {section.rows.map((row, rIndex) => (
                                    <tr key={rIndex} className="border-b border-navy-700 hover:bg-navy-700/30 transition-colors">
                                        <td className="p-2 font-semibold text-slate-200 sticky left-0 z-10 bg-navy-800 border-r border-navy-600 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                                            {row.name}
                                        </td>
                                        {row.values.map((val, vIndex) => (
                                            <td key={vIndex} className="p-2 border-r border-navy-700/50">
                                                {val}
                                            </td>
                                        ))}
                                        <td className="p-2 font-bold text-white bg-teal-900/10 border-l border-teal-500/30">
                                            {row.startup}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Slide 8: Actionable Framework Table ---
export const ActionableFrameworkSlide: React.FC<SlideProps> = () => {
    const frameworkData = [
        {
            entity: "Competition #1: EduBox",
            category: "Fast connector",
            persona: "budget parents",
            type: "Vietnam tutor market",
            alternative: "risk fake tutors",
            problem: "info asymmetry + payment risk",
            capability: "connecting students and tutors quickly through a mobile marketplace",
            features: "location-based matching, simple ratings and reviews",
            benefit: "find an affordable tutor near you in a short time"
        },
        {
            entity: "Competition #2: Blacasa",
            category: "Premium broker",
            persona: "affluent parents",
            type: "premium tutoring",
            alternative: "hate high fees",
            problem: "manual scaling limits",
            capability: "curating higher-quality tutors and supporting parents in selection",
            features: "manual screening, consultant support and premium tutor profiles",
            benefit: "feel safer choosing a qualified tutor for your child"
        },
        {
            entity: "Competition #3: HOCMAI",
            category: "K-12 course leader",
            persona: "exam students",
            type: "K-12 education",
            alternative: "need exam prep",
            problem: "broad course focus",
            capability: "providing structured online courses aligned with the school curriculum",
            features: "video lessons, practice tests and exam-focused content",
            benefit: "prepare effectively for key exams at home"
        },
        {
            entity: "Competition #4: Topica Edtech Group",
            category: "English course provider",
            persona: "language learners",
            type: "English learning",
            alternative: "want online English",
            problem: "quality variability",
            capability: "offering flexible online programs for language and professional skills",
            features: "live/online classes, instructor marketplace and certification paths",
            benefit: "upskill and improve your English without going to a physical center"
        },
        {
            entity: "Competition #5: Kyna.vn",
            category: "Skills LMS",
            persona: "professionals",
            type: "professional skills",
            alternative: "seek certifications",
            problem: "indirect learning",
            capability: "delivering practical skill courses at affordable prices",
            features: "an on-demand e-learning platform and a wide course catalog",
            benefit: "quickly gain job-relevant skills at your own pace"
        },
        {
            entity: "Competition #6: Monkey Vietnam",
            category: "Early ed app",
            persona: "toddlers",
            type: "early childhood",
            alternative: "want early English",
            problem: "age-specific",
            capability: "turning early English learning into fun mobile experiences",
            features: "gamified lessons, storytelling and spaced repetition",
            benefit: "help your child build a strong language foundation from home"
        },
        {
            entity: "Competition #7: CoLearn",
            category: "Digital trainer",
            persona: "general learners",
            type: "digital learning",
            alternative: "need digital access",
            problem: "basic platforms",
            capability: "giving students extra practice and explanations in core subjects",
            features: "online exercises, video explanations and digital tracking",
            benefit: "strengthen your understanding beyond what is taught in class"
        },
        {
            entity: "Competition #8: Quanda",
            category: "Homework solver",
            persona: "math students",
            type: "homework help",
            alternative: "struggle with math",
            problem: "short-term focus",
            capability: "providing instant step-by-step solutions to homework questions",
            features: "AI-powered answer search and image recognition",
            benefit: "get quick help when you are stuck on math or other subjects"
        },
        {
            entity: "Competition #9: Galaxy Education",
            category: "Ed ecosystem",
            persona: "all ages",
            type: "lifelong learning",
            alternative: "want full ed path",
            problem: "less tutor-specific",
            capability: "integrating multiple brands and products across the learning journey",
            features: "a portfolio of platforms and shared infrastructure",
            benefit: "access learning resources for every stage of education in one ecosystem"
        },
        {
            entity: "UniEdu (Trusted tutor OS)",
            category: "Trusted tutor OS",
            persona: "quality-focused parents",
            type: "Vietnam EdTech",
            alternative: "fear tutor fraud",
            problem: "trust + quality + finance",
            capability: "eliminating tutor fraud and quality uncertainty while securing tuition",
            features: "dual AI + manual vetting, escrow payments, AI proctoring and progress dashboards",
            benefit: "confidently choose tutors, protect your money and see real learning outcomes for your child",
            highlight: true
        }
    ];

    return (
        <div className="w-full flex flex-col h-full overflow-hidden">
            <div className="mb-4 text-center shrink-0">
                <h3 className="text-2xl font-bold text-white mb-1">Actionables Drawn from Framework</h3>
                <p className="text-teal-400 text-sm">Table 2: Strategic Value Proposition Analysis</p>
            </div>

            <div className="flex-1 w-full overflow-auto custom-scrollbar border border-navy-700 rounded-lg bg-navy-800/30">
                <table className="w-full text-left border-collapse min-w-[1400px]">
                    <thead className="sticky top-0 z-20 bg-navy-900 shadow-md">
                        <tr className="border-b border-navy-700">
                            <th className="p-3 sticky left-0 z-30 bg-navy-900 border-r border-navy-700 w-48"></th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[120px]">Product Category</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[120px]">Buyer/User Persona</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[120px]">Company Type</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[120px]">Alternative</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[120px]">Problem</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[200px]">Capability</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[180px]">Primary Products/Features</th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider min-w-[200px]">Benefit</th>
                        </tr>
                        <tr className="text-[10px] text-slate-500 italic border-b border-navy-600 bg-navy-800/50">
                            <th className="p-1 sticky left-0 z-30 bg-navy-900/90 border-r border-navy-700"></th>
                            <th className="p-1 px-3">We are a</th>
                            <th className="p-1 px-3">for</th>
                            <th className="p-1 px-3">in</th>
                            <th className="p-1 px-3">who</th>
                            <th className="p-1 px-3">which</th>
                            <th className="p-1 px-3">which we solve by</th>
                            <th className="p-1 px-3">using</th>
                            <th className="p-1 px-3">so you can</th>
                        </tr>
                    </thead>
                    <tbody className="text-[11px] text-slate-300">
                        {frameworkData.map((row, index) => (
                            <tr
                                key={index}
                                className={`border-b border-navy-700 hover:bg-navy-700/30 transition-colors ${row.highlight ? 'bg-teal-900/20 border-teal-500/30' : ''}`}
                            >
                                <td className={`p-3 font-bold sticky left-0 z-10 border-r border-navy-700 shadow-[2px_0_5px_rgba(0,0,0,0.3)] ${row.highlight ? 'text-teal-300 bg-navy-800' : 'text-slate-200 bg-navy-800'}`}>
                                    {row.entity}
                                </td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.category}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.persona}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.type}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.alternative}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.problem}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.capability}</td>
                                <td className="p-3 border-r border-navy-700/50 align-top">{row.features}</td>
                                <td className="p-3 align-top font-medium text-white/90">{row.benefit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- Slide 9: Strategic Analysis ---
export const StrategicAnalysisSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col p-2">
        <div className="mb-4 text-center shrink-0">
            <h3 className="text-4xl font-bold text-white mb-2">Strategic Landscape & Opportunity</h3>
            <p className="text-teal-400 text-xl">Market Realities vs. UniEdu's Competitive Advantage</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 min-h-0 overflow-y-auto custom-scrollbar">

            {/* Left Column: Market & Competitors */}
            <div className="space-y-10">
                {/* Market Commonalities */}
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-600">
                    <h4 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                        <Globe size={28} className="text-blue-400" /> Market Commonalities
                    </h4>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Target size={24} className="text-slate-400 shrink-0 mt-1" />
                            <div>
                                <strong className="text-blue-200 text-lg">Niche Specialization</strong>
                                <p className="text-sm text-slate-400">Vertical focus (K-12, English, Early Ed) is standard.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Layout size={24} className="text-slate-400 shrink-0 mt-1" />
                            <div>
                                <strong className="text-blue-200 text-lg">Marketplace Model</strong>
                                <p className="text-sm text-slate-400">Intermediaries connecting students to content/tutors.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Smartphone size={24} className="text-slate-400 shrink-0 mt-1" />
                            <div>
                                <strong className="text-blue-200 text-lg">Digital-First</strong>
                                <p className="text-sm text-slate-400">Heavy reliance on mobile apps and web platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Competitor Performance */}
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-600">
                    <h4 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                        <TrendingUp size={28} className="text-orange-400" /> Competitor Performance
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-navy-900/50 p-4 rounded-lg border-l-4 border-green-500">
                            <strong className="text-green-400 text-sm uppercase block mb-2">Strengths</strong>
                            <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
                                <li>High Scalability (Galaxy, Topica)</li>
                                <li>Instant AI Support (Quanda)</li>
                            </ul>
                        </div>
                        <div className="bg-navy-900/50 p-4 rounded-lg border-l-4 border-red-500">
                            <strong className="text-red-400 text-sm uppercase block mb-2">Critical Gaps</strong>
                            <ul className="text-sm text-slate-300 space-y-2 list-disc pl-4">
                                <li>Weak Vetting & Quality Control</li>
                                <li>"Info Asymmetry" (Fraud Risks)</li>
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2 bg-navy-900/50 p-4 rounded-lg border-l-4 border-yellow-500 flex items-start gap-4">
                            <AlertTriangle size={24} className="text-yellow-500 shrink-0" />
                            <div>
                                <strong className="text-yellow-400 text-sm uppercase block mb-2">Financial Risk</strong>
                                <p className="text-sm text-slate-300">Absence of secure transaction mechanisms (Escrow) leaves both parents and tutors exposed to uncertainty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: UniEdu Opportunity (Highlighted) */}
            <div className="bg-gradient-to-br from-teal-900/20 to-navy-800 rounded-2xl p-8 border-2 border-teal-500/50 flex flex-col relative shadow-2xl h-full">
                <div className="absolute -top-4 right-8 bg-teal-500 text-navy-900 px-4 py-1.5 text-sm font-bold uppercase rounded-full shadow-lg">
                    The Strategic Solution
                </div>
                <h4 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                    <ShieldCheck size={40} className="text-teal-400" />
                    The "Trusted Tutor OS"
                </h4>

                <div className="flex-1 space-y-10 flex flex-col justify-center">
                    {/* 1. Dual Vetting */}
                    <div className="flex gap-6 group">
                        <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-navy-900 transition-all duration-300">
                            <Users size={32} />
                        </div>
                        <div>
                            <h5 className="text-xl font-bold text-teal-200 mb-2">Dual Vetting (AI + Manual)</h5>
                            <p className="text-base text-slate-300 leading-relaxed">
                                Solving the "trust deficit" with a rigorous <span className="text-white font-bold">80%+ vetting standard</span>, unlike competitors prioritizing volume.
                            </p>
                        </div>
                    </div>

                    {/* 2. Escrow System */}
                    <div className="flex gap-6 group">
                        <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-navy-900 transition-all duration-300">
                            <Lock size={32} />
                        </div>
                        <div>
                            <h5 className="text-xl font-bold text-teal-200 mb-2">Escrow Payment System</h5>
                            <p className="text-base text-slate-300 leading-relaxed">
                                Securing tuition fees to eliminate the primary pain point of <span className="text-white font-bold">"Tutor Fraud"</span> identify in the analysis.
                            </p>
                        </div>
                    </div>

                    {/* 3. AI Monitoring */}
                    <div className="flex gap-6 group">
                        <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-navy-900 transition-all duration-300">
                            <BrainCircuit size={32} />
                        </div>
                        <div>
                            <h5 className="text-xl font-bold text-teal-200 mb-2">AI-Powered Monitoring</h5>
                            <p className="text-base text-slate-300 leading-relaxed">
                                Moving from simple "matching" to <span className="text-white font-bold">"Guaranteed Learning Outcomes"</span> via proctoring & dashboards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Slide 10: Competitors' Criteria Table ---
export const CompetitorsCriteriaSlide: React.FC<SlideProps> = () => {
    // Metrics data based on the criteria table
    const metricsData = [
        {
            metric: "Customer Type",
            startup: "Two-sided market: tutors and parents/students",
            direct: "Two-sided but platform-centric",
            indirect: "Parents/students only",
            substitute: "Two-sided",
            newEntrants: "Two-sided",
            startupHighlight: true
        },
        {
            metric: "Tutor Quality Verification",
            startup: "Screening + manual review + competency tests",
            direct: "Basic profile/CV review",
            indirect: "In-person interviews",
            substitute: "No verification",
            newEntrants: "No verification",
            startupHighlight: true
        },
        {
            metric: "Transparency of Tutor Capability",
            startup: "Verified certificates & test scores visible",
            direct: "Limited information",
            indirect: "Internal use only",
            substitute: "None",
            newEntrants: "Limited",
            startupHighlight: true
        },
        {
            metric: "Financial Protection (Escrow)",
            startup: "Full escrow until class confirmation",
            direct: "None",
            indirect: "No escrow",
            substitute: "None",
            newEntrants: "Rare / experimental",
            startupHighlight: true
        },
        {
            metric: "Tutor Fee Protection",
            startup: "High – prevents \"class fee scams\"",
            direct: "Low",
            indirect: "Medium",
            substitute: "None",
            newEntrants: "Low",
            startupHighlight: true
        },
        {
            metric: "Parent Risk Reduction",
            startup: "High – pay after confirmation",
            direct: "Medium",
            indirect: "High",
            substitute: "Very low",
            newEntrants: "Medium",
            startupHighlight: true
        },
        {
            metric: "Learning Progress Measurement",
            startup: "AI-based assessments & dashboards",
            direct: "None",
            indirect: "Manual feedback",
            substitute: "None",
            newEntrants: "Limited",
            startupHighlight: true
        },
        {
            metric: "Exam Integrity / Proctoring",
            startup: "AI proctoring & monitoring",
            direct: "No",
            indirect: "No",
            substitute: "No",
            newEntrants: "No",
            startupHighlight: true
        },
        {
            metric: "Pricing Transparency",
            startup: "Clear platform & service fees",
            direct: "Medium",
            indirect: "Low",
            substitute: "Free",
            newEntrants: "Medium",
            startupHighlight: true
        },
        {
            metric: "Scalability",
            startup: "High – digital marketplace",
            direct: "High",
            indirect: "Low",
            substitute: "High",
            newEntrants: "Medium",
            startupHighlight: true
        },
        {
            metric: "Cost Efficiency",
            startup: "High (low marginal cost)",
            direct: "High",
            indirect: "Low",
            substitute: "Very high",
            newEntrants: "Medium",
            startupHighlight: true
        },
        {
            metric: "Governance & Compliance Readiness",
            startup: "Planned escrow & tax compliance",
            direct: "Limited disclosure",
            indirect: "Formal but rigid",
            substitute: "None",
            newEntrants: "Limited",
            startupHighlight: true
        }
    ];

    return (
        <div className="w-full flex flex-col h-full overflow-hidden">
            <div className="mb-4 text-center shrink-0">
                <h3 className="text-3xl font-bold text-white mb-2">Competitors' Criteria Table</h3>
                <p className="text-teal-400 text-sm">Key decision factors in the tutoring market</p>
            </div>

            {/* Key Decision Factors */}
            <div className="flex flex-wrap gap-3 justify-center mb-4 shrink-0">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-900/30 rounded-full border border-teal-500/30">
                    <ShieldCheck size={14} className="text-teal-400" />
                    <span className="text-xs text-teal-300">Trust & Quality Assurance</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/30">
                    <Lock size={14} className="text-blue-400" />
                    <span className="text-xs text-blue-300">Financial Risk Protection</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-900/30 rounded-full border border-purple-500/30">
                    <LineChart size={14} className="text-purple-400" />
                    <span className="text-xs text-purple-300">Learning Outcome Measurement</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-900/30 rounded-full border border-orange-500/30">
                    <TrendingUp size={14} className="text-orange-400" />
                    <span className="text-xs text-orange-300">Scalability & Governance</span>
                </div>
            </div>

            <div className="flex-1 w-full overflow-auto custom-scrollbar border border-navy-700 rounded-lg bg-navy-800/30">
                <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead className="sticky top-0 z-20 bg-navy-900 border-b border-navy-600">
                        <tr>
                            <th className="p-3 font-bold text-slate-300 text-xs uppercase tracking-wider sticky left-0 z-30 bg-navy-900 border-r border-navy-700 shadow-[2px_0_5px_rgba(0,0,0,0.3)] min-w-[160px]">
                                Metrics
                            </th>
                            <th className="p-3 font-bold text-teal-400 text-xs uppercase tracking-wider bg-teal-900/20 border-l border-teal-500/30 min-w-[180px]">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-teal-400" />
                                    My Startup
                                </div>
                            </th>
                            <th className="p-3 font-bold text-slate-400 text-[10px] uppercase tracking-wider min-w-[120px]">
                                <div className="flex flex-col gap-0.5">
                                    <span>Direct Competitors</span>
                                    <span className="text-[8px] text-slate-500 font-normal">(Blacasa, Edubox)</span>
                                </div>
                            </th>
                            <th className="p-3 font-bold text-slate-400 text-[10px] uppercase tracking-wider min-w-[120px]">
                                <div className="flex flex-col gap-0.5">
                                    <span>Indirect Competitors</span>
                                    <span className="text-[8px] text-slate-500 font-normal">(Gia sư Đức Việt, etc.)</span>
                                </div>
                            </th>
                            <th className="p-3 font-bold text-slate-400 text-[10px] uppercase tracking-wider min-w-[120px]">
                                <div className="flex flex-col gap-0.5">
                                    <span>Substitute</span>
                                    <span className="text-[8px] text-slate-500 font-normal">(YouTube, Zalo groups)</span>
                                </div>
                            </th>
                            <th className="p-3 font-bold text-slate-400 text-[10px] uppercase tracking-wider min-w-[120px]">
                                <div className="flex flex-col gap-0.5">
                                    <span>New Entrants</span>
                                    <span className="text-[8px] text-slate-500 font-normal">(Tutorify, Edumall)</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[11px] text-slate-300">
                        {metricsData.map((row, rIndex) => (
                            <tr key={rIndex} className="border-b border-navy-700 hover:bg-navy-700/30 transition-colors">
                                <td className="p-2.5 font-semibold text-slate-200 sticky left-0 z-10 bg-navy-800 border-r border-navy-600 shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                                    {row.metric}
                                </td>
                                <td className={`p-2.5 font-bold bg-teal-900/10 border-l border-teal-500/30 ${row.startupHighlight ? 'text-teal-300' : 'text-white'}`}>
                                    <div className="flex items-start gap-1.5">
                                        <CheckCircle2 size={12} className="text-teal-500 shrink-0 mt-0.5" />
                                        {row.startup}
                                    </div>
                                </td>
                                <td className="p-2.5 border-r border-navy-700/50">{row.direct}</td>
                                <td className="p-2.5 border-r border-navy-700/50">{row.indirect}</td>
                                <td className="p-2.5 border-r border-navy-700/50">{row.substitute}</td>
                                <td className="p-2.5">{row.newEntrants}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Metric Relevance Note */}
            <div className="mt-4 shrink-0 p-3 bg-navy-800/50 rounded-lg border border-navy-600">
                <p className="text-xs text-slate-400 text-center">
                    <strong className="text-teal-400">Metric relevance:</strong> Trust and verification issues dominate parental decision-making (OECD, 2021).
                    Escrow systems reduce platform transaction risk in digital marketplaces (World Bank, 2020).
                    Learning outcome measurement increases perceived value and willingness to pay (UNESCO, 2022).
                </p>
            </div>
        </div>
    );
};

// --- Slide 11: Competitive Analysis ---
export const CompetitiveAnalysisSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col p-2">
        <div className="mb-4 text-center shrink-0">
            <h3 className="text-3xl font-bold text-white mb-2">Competitive Analysis</h3>
            <p className="text-teal-400 text-sm">Market Landscape & Strategic Positioning</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0 overflow-y-auto custom-scrollbar">

            {/* Left Column: Market Overview & Categories */}
            <div className="space-y-4">
                {/* Overall Market Landscape */}
                <div className="bg-navy-800 rounded-xl p-5 border border-navy-600">
                    <h4 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <Globe size={20} className="text-blue-400" /> Overall Competitive Landscape
                    </h4>
                    <p className="text-sm text-slate-300 mb-3">
                        The Vietnamese tutoring market is <span className="text-white font-bold">fragmented and structurally imbalanced</span>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-navy-900/50 p-3 rounded-lg border-l-2 border-blue-500">
                            <p className="text-xs font-bold text-blue-300 uppercase mb-1">Digital Platforms</p>
                            <p className="text-[10px] text-slate-300">Prioritize speed, convenience, scale. Underinvest in trust, learning outcomes, and financial protection.</p>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-lg border-l-2 border-purple-500">
                            <p className="text-xs font-bold text-purple-300 uppercase mb-1">Traditional Centers</p>
                            <p className="text-[10px] text-slate-300">Prioritize quality control and trust. Suffer from high costs, limited scalability, low tech adoption.</p>
                        </div>
                    </div>
                </div>

                {/* Competitor Categories */}
                <div className="bg-navy-800 rounded-xl p-5 border border-navy-600">
                    <h4 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <Users size={20} className="text-teal-400" /> Competitor Categories
                    </h4>
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded bg-teal-900/50 flex items-center justify-center shrink-0">
                                <Target size={16} className="text-teal-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-teal-300">Direct: Blacasa, Edubox</p>
                                <p className="text-[10px] text-slate-400">Similar tutor-matching, same two-sided market, same trust/matching problems.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded bg-blue-900/50 flex items-center justify-center shrink-0">
                                <Building2 size={16} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-blue-300">Indirect: Gia sư Đức Việt, Gia sư Thành Được</p>
                                <p className="text-[10px] text-slate-400">Same learning needs but offline, labor-intensive models.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded bg-purple-900/50 flex items-center justify-center shrink-0">
                                <BrainCircuit size={16} className="text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-purple-300">Substitute: YouTube, Facebook/Zalo groups</p>
                                <p className="text-[10px] text-slate-400">Compete for same learning time and budget without direct tutoring.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded bg-orange-900/50 flex items-center justify-center shrink-0">
                                <Zap size={16} className="text-orange-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-orange-300">New Entrants: Edumall Tutor</p>
                                <p className="text-[10px] text-slate-400">Experimenting with tutoring but lacking mature trust and quality systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Strategic Gap */}
                <div className="bg-gradient-to-r from-red-900/20 to-navy-800 rounded-xl p-5 border border-red-500/30">
                    <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle size={20} className="text-red-400" />
                        <h4 className="text-lg font-bold text-red-300">Strategic Gap</h4>
                    </div>
                    <p className="text-sm text-white">
                        No single player currently delivers <span className="text-red-300 font-bold">both scalability and institutional trust</span>, leaving a strategic gap in the market (Dione, 2020).
                    </p>
                </div>
            </div>

            {/* Right Column: Strengths, Weaknesses & Strategy */}
            <div className="space-y-4">
                {/* Strengths & Weaknesses Grid */}
                <div className="bg-navy-800 rounded-xl p-5 border border-navy-600">
                    <h4 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                        <Scale size={20} className="text-yellow-400" /> Competitor Strengths & Weaknesses
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-[10px]">
                        <div className="bg-navy-900/50 p-3 rounded-lg">
                            <p className="font-bold text-teal-400 uppercase mb-2">Direct Competitors</p>
                            <p className="text-green-400 text-[9px] font-bold mb-1">✓ Strong digital presence, fast matching</p>
                            <p className="text-red-400 text-[9px]">✗ Weak vetting, no escrow, no outcomes</p>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-lg">
                            <p className="font-bold text-blue-400 uppercase mb-2">Indirect Competitors</p>
                            <p className="text-green-400 text-[9px] font-bold mb-1">✓ High trust, manual screening</p>
                            <p className="text-red-400 text-[9px]">✗ High fees, low scalability, slow</p>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-lg">
                            <p className="font-bold text-purple-400 uppercase mb-2">Substitute Competitors</p>
                            <p className="text-green-400 text-[9px] font-bold mb-1">✓ Free/low-cost, flexible learning</p>
                            <p className="text-red-400 text-[9px]">✗ No accountability, personalization, tracking</p>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-lg">
                            <p className="font-bold text-orange-400 uppercase mb-2">New Entrants</p>
                            <p className="text-green-400 text-[9px] font-bold mb-1">✓ Innovation-oriented, flexible</p>
                            <p className="text-red-400 text-[9px]">✗ Low trust, immature governance</p>
                        </div>
                    </div>
                </div>

                {/* Winning Strategy */}
                <div className="bg-gradient-to-br from-teal-900/30 to-navy-800 rounded-xl p-5 border-2 border-teal-500/40">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-teal-500/20 rounded-lg">
                            <ShieldCheck size={24} className="text-teal-400" />
                        </div>
                        <h4 className="text-lg font-bold text-teal-300">How to Win: Structural Differentiation</h4>
                    </div>
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">1</div>
                            <div>
                                <p className="text-sm font-bold text-white">Escrow-Based Payment System</p>
                                <p className="text-[10px] text-slate-400">Protects both tutors and parents from fraud and disputes.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">2</div>
                            <div>
                                <p className="text-sm font-bold text-white">Standardized Tutor Verification</p>
                                <p className="text-[10px] text-slate-400">AI-supported assessments + manual review for quality consistency.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">3</div>
                            <div>
                                <p className="text-sm font-bold text-white">Learning Progress Measurement</p>
                                <p className="text-[10px] text-slate-400">Data-driven service increasing parental trust and retention.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">4</div>
                            <div>
                                <p className="text-sm font-bold text-white">Learning Infrastructure Positioning</p>
                                <p className="text-[10px] text-slate-400">Not just matching – creates higher switching costs and competitive defensibility.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partnership Opportunities */}
                <div className="bg-navy-800 rounded-xl p-5 border border-navy-600">
                    <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <Briefcase size={16} className="text-purple-400" /> Partnership Opportunities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-[10px] rounded-full border border-purple-500/30">Payment: MoMo, PayOS</span>
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] rounded-full border border-blue-500/30">Content Providers</span>
                        <span className="px-2 py-1 bg-teal-900/30 text-teal-300 text-[10px] rounded-full border border-teal-500/30">Schools & Institutions</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Slide 12: Buyer Personas ---
export const BuyerPersonasSlide: React.FC<SlideProps> = () => (
    <div className="w-full flex flex-col h-full">
        <div className="mb-6 text-center shrink-0">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Buyer Personas</h3>
            <p className="text-teal-400 text-xl">Target Audience Profiles & Needs Analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2">

            {/* Persona 1: Parent */}
            <div className="bg-navy-800 rounded-2xl border border-teal-500/30 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/20 transition-all flex flex-col group h-full">
                <div className="p-8 border-b border-navy-600 bg-teal-900/10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/50 shrink-0">
                            <UserCheck size={40} />
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">Ms. Lan</h4>
                            <span className="text-sm font-bold text-teal-300 uppercase tracking-wide">"The Future Gatekeeper"</span>
                        </div>
                    </div>
                    <p className="text-base text-slate-400 leading-relaxed">Female, 48 • Hanoi/HCMC • High Income<br />Risk-averse due to scams.</p>
                </div>
                <div className="p-8 flex-1 flex flex-col space-y-6">
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <AlertTriangle size={20} className="text-red-400" /> Primary Pain Point
                        </strong>
                        <p className="text-base text-slate-300">
                            "Trust Crisis" – Fear of losing prepaid tuition (e.g., AIES scam) and wasting child's "golden time" on fake teachers.
                        </p>
                    </div>
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <Target size={20} className="text-blue-400" /> Core Goal
                        </strong>
                        <p className="text-base text-slate-300">
                            Secure Top 10 school admission for child while building sustainable character (Ethics).
                        </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-navy-600">
                        <strong className="text-teal-400 text-lg block mb-2">Why UniEdu?</strong>
                        <p className="text-base text-white leading-relaxed">
                            <span className="font-bold block mb-1">• Escrow Safety:</span> Eliminates financial risk.
                            <span className="font-bold block">• AI Monitoring:</span> Relieves supervision burden.
                        </p>
                    </div>
                </div>
            </div>

            {/* Persona 2: Student */}
            <div className="bg-navy-800 rounded-2xl border border-blue-500/30 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/20 transition-all flex flex-col group h-full">
                <div className="p-8 border-b border-navy-600 bg-blue-900/10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/50 shrink-0">
                            <GraduationCap size={40} />
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">Minh</h4>
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-wide">"The Efficiency Hunter"</span>
                        </div>
                    </div>
                    <p className="text-base text-slate-400 leading-relaxed">Male, 20 • University Student • Low Income<br />Tech-savvy, AI-native user.</p>
                </div>
                <div className="p-8 flex-1 flex flex-col space-y-6">
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <Clock size={20} className="text-red-400" /> Primary Pain Point
                        </strong>
                        <p className="text-base text-slate-300">
                            Need for speed and low cost. Specialized subjects are hard to pass; traditional tutoring is too expensive.
                        </p>
                    </div>
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <Target size={20} className="text-blue-400" /> Core Goal
                        </strong>
                        <p className="text-base text-slate-300">
                            "Just-in-time learning" to graduate on time and build a "Verified" competency profile for jobs.
                        </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-navy-600">
                        <strong className="text-blue-400 text-lg block mb-2">Why UniEdu?</strong>
                        <p className="text-base text-white leading-relaxed">
                            <span className="font-bold block mb-1">• 10k VND Mock Exams:</span> Ideal price point.
                            <span className="font-bold block">• Verified Profile:</span> Boosts 2026 job prospects.
                        </p>
                    </div>
                </div>
            </div>

            {/* Persona 3: B2B/HR */}
            <div className="bg-navy-800 rounded-2xl border border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/20 transition-all flex flex-col group h-full">
                <div className="p-8 border-b border-navy-600 bg-purple-900/10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/50 shrink-0">
                            <Building2 size={40} />
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">Ms. Thao</h4>
                            <span className="text-sm font-bold text-purple-300 uppercase tracking-wide">"Talent Developer"</span>
                        </div>
                    </div>
                    <p className="text-base text-slate-400 leading-relaxed">Female, 45 • HR Director • B2B Buyer<br />Focused on ROI & Productivity.</p>
                </div>
                <div className="p-8 flex-1 flex flex-col space-y-6">
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <AlertTriangle size={20} className="text-red-400" /> Primary Pain Point
                        </strong>
                        <p className="text-base text-slate-300">
                            Shortage of AI/Language skills. Manual verification of mentors takes 20+ days, slowing down training.
                        </p>
                    </div>
                    <div>
                        <strong className="text-white text-lg block mb-3 flex items-center gap-2">
                            <Target size={20} className="text-blue-400" /> Core Goal
                        </strong>
                        <p className="text-base text-slate-300">
                            Rapidly upskill workforce to prevent AI obsolescence (44% of skills obsolete in 5 years).
                        </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-navy-600">
                        <strong className="text-purple-400 text-lg block mb-2">Why UniEdu?</strong>
                        <p className="text-base text-white leading-relaxed">
                            <span className="font-bold block mb-1">• Instant Verification:</span> Cuts admin time.
                            <span className="font-bold block">• Measurable Results:</span> Tracks ROI efficacy.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

// --- Slide 11: Data Validation ---
export const DataValidationSlide: React.FC<SlideProps> = () => {
    return (
        <div className="w-full flex flex-col h-full">
            {/* Header */}
            <div className="mb-6 text-center shrink-0">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Survey Methodology & Analysis</h3>
                <p className="text-teal-400 text-xl">Validating Governance Moats (N=101 Quantitative + 30 Qualitative)</p>
            </div>

            {/* Methodology Strip */}
            <div className="flex justify-center gap-4 mb-6 shrink-0 flex-wrap">
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Users size={16} className="text-teal-400" /> N = 101 Primary Sample
                </div>
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Target size={16} className="text-purple-400" /> Method: Google Forms & Interviews
                </div>
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Smartphone size={16} className="text-blue-400" /> Target: Urban Families & Top-Tier Tutors
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2">

                {/* Left Column: Demand Side (The Buyers) */}
                <div className="bg-navy-800 rounded-3xl p-8 border border-blue-500/30 flex flex-col relative overflow-hidden group hover:border-blue-500 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                        <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400">
                            <Wallet size={28} />
                        </div>
                        <div>
                            Demand Side (N = 77)
                            <span className="block text-sm text-blue-300 font-normal">Parents & Students</span>
                        </div>
                    </h4>

                    <div className="space-y-6 flex-1 text-sm text-slate-300">

                        {/* Demographics */}
                        <div className="bg-navy-900/50 p-4 rounded-xl border-l-4 border-blue-500">
                            <strong className="text-blue-300 uppercase text-xs mb-1 block">Demographics</strong>
                            <ul className="list-disc pl-4 space-y-1">
                                <li><span className="text-white font-bold">88.3%</span> in HCMC; <span className="text-white font-bold">70%</span> Income 10M-50M VND.</li>
                                <li>Focus: High School Exam Prep (50.6%), English (74%).</li>
                            </ul>
                        </div>

                        {/* Problems */}
                        <div>
                            <div className="flex items-end gap-2 mb-1">
                                <span className="text-3xl font-bold text-blue-400">81.8%</span>
                                <span className="text-white font-bold">Quality Uncertainty</span>
                            </div>
                            <p className="italic text-slate-400 mb-2">"I worry about being scammed or losing fees."</p>
                            <p>Followed by <span className="text-white font-bold">53.2%</span> Time Loss in Searching.</p>
                        </div>

                        {/* Interest */}
                        <div className="flex gap-4">
                            <div className="flex-1 bg-navy-900/30 p-3 rounded-lg border border-navy-700">
                                <strong className="block text-white mb-1">93.5% Interest</strong>
                                <p className="text-xs">Very Willing or Considering. Driven by Verified Profiles.</p>
                            </div>
                        </div>

                        {/* WTP */}
                        <div className="bg-navy-900/30 p-3 rounded-lg border border-navy-700">
                            <strong className="block text-white mb-1">Willingness to Pay</strong>
                            <p className="mb-1">44.2% accept <span className="text-blue-400 font-bold">150k-250k VND</span> / 90 min.</p>
                            <p className="text-xs text-slate-400"><span className="text-red-400 font-bold">49.4%</span> require "Free Trials" as a zero-risk entry point.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Supply Side (The Providers) */}
                <div className="bg-navy-800 rounded-3xl p-8 border border-purple-500/30 flex flex-col relative overflow-hidden group hover:border-purple-500 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                        <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            Supply Side (N = 24)
                            <span className="block text-sm text-purple-300 font-normal">Tutors & Teachers</span>
                        </div>
                    </h4>

                    <div className="space-y-6 flex-1 text-sm text-slate-300">
                        {/* Demographics */}
                        <div className="bg-navy-900/50 p-4 rounded-xl border-l-4 border-purple-500">
                            <strong className="text-purple-300 uppercase text-xs mb-1 block">Profile</strong>
                            <p><span className="text-white font-bold">87.5%</span> University Students (83.3% Juniors/Seniors).</p>
                        </div>

                        {/* Problems */}
                        <div>
                            <strong className="text-white block mb-1">The "Brokerage Trap"</strong>
                            <ul className="list-disc pl-4 space-y-1 mb-2">
                                <li>Centers take <span className="text-red-400 font-bold">40-50%</span> of 1st-month salary.</li>
                                <li>"Administrative Burnout": ~5 hours/week on manual tasks.</li>
                            </ul>
                        </div>

                        {/* Tools Needed */}
                        <div className="bg-navy-900/30 p-3 rounded-lg border border-navy-700">
                            <strong className="block text-white mb-1">Automation Demand</strong>
                            <ul className="list-disc pl-4 space-y-1 text-xs">
                                <li><span className="text-purple-400 font-bold">AI Auto-grading</span> (Highest Demand).</li>
                                <li>Material Repositories & Exam Banks.</li>
                                <li>Integrated Smart Scheduling.</li>
                            </ul>
                        </div>

                        {/* Commitment */}
                        <div>
                            <strong className="text-white block mb-1">Quality Commitment</strong>
                            <p>Tutors view 80% Test as proof of "Elite" status. <span className="text-white font-bold">62.5%</span> see it as essential for higher rates.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Slide 12: Pain Point Interviews ---
export const PainPointsSlide: React.FC<SlideProps> = () => {
    return (
        <div className="w-full flex flex-col h-full">
            {/* Header */}
            <div className="mb-4 text-center shrink-0">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Pain Point Interviews</h3>
                <p className="text-teal-400 text-xl">Qualitative Deep Dive (N=30)</p>
            </div>

            {/* Methodology Strip */}
            <div className="flex justify-center gap-4 mb-4 shrink-0 flex-wrap">
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Clock size={16} className="text-teal-400" />
                    <span>Duration: <strong>30-40 mins</strong></span>
                </div>
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Mic size={16} className="text-blue-400" />
                    <span>Method: <strong>AI-Assisted Transcription</strong></span>
                </div>
                <div className="bg-navy-800 px-4 py-2 rounded-full border border-navy-600 text-sm text-slate-400 flex items-center gap-2">
                    <Target size={16} className="text-purple-400" />
                    <span>Goal: <strong>Uncover "Magic-Wand Wishes"</strong></span>
                </div>
            </div>

            {/* Stakeholder Grid - Expanded for content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2 mb-4">

                {/* Parents */}
                <div className="bg-navy-800 rounded-3xl p-6 border border-teal-500/30 hover:border-teal-500 transition-all group flex flex-col shadow-lg">
                    <div className="flex items-center gap-4 mb-4 border-b border-teal-500/30 pb-4">
                        <div className="p-3 bg-teal-900/50 rounded-full text-teal-400 shrink-0">
                            <UserCheck size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Parents (10)</h4>
                            <span className="text-teal-300 text-xs font-semibold uppercase">The Decision Makers</span>
                        </div>
                    </div>
                    <div className="space-y-4 flex-1 text-base">
                        <div>
                            <strong className="text-white block mb-1">Primary Focus</strong>
                            <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
                                <li>Safety & Verified Identity (CCCD).</li>
                                <li>Real-time Pedagogical Progress.</li>
                            </ul>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-xl border-l-4 border-teal-500">
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <AlertTriangle size={16} className="text-red-400" /> Explicit Pain
                            </strong>
                            <p className="text-sm text-slate-300 italic">"Black Box Centers." Fragmented across unverified Facebook groups leading to anxiety.</p>
                        </div>
                        <div>
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <Wand2 size={16} className="text-teal-400" /> Magic Wand Wish
                            </strong>
                            <p className="text-sm text-slate-300">"A professional guarantor." Willing to pay a <span className="text-white font-bold">15% premium</span> for verified identity.</p>
                        </div>
                    </div>
                </div>

                {/* Students */}
                <div className="bg-navy-800 rounded-3xl p-6 border border-blue-500/30 hover:border-blue-500 transition-all group flex flex-col shadow-lg">
                    <div className="flex items-center gap-4 mb-4 border-b border-blue-500/30 pb-4">
                        <div className="p-3 bg-blue-900/50 rounded-full text-blue-400 shrink-0">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Students (10)</h4>
                            <span className="text-blue-300 text-xs font-semibold uppercase">The End Users</span>
                        </div>
                    </div>
                    <div className="space-y-4 flex-1 text-base">
                        <div>
                            <strong className="text-white block mb-1">Primary Focus</strong>
                            <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
                                <li>Curriculum Compatibility (SAT, IELTS).</li>
                                <li>Specific Teaching Style Match.</li>
                            </ul>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-xl border-l-4 border-blue-500">
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <AlertTriangle size={16} className="text-red-400" /> Explicit Pain
                            </strong>
                            <p className="text-sm text-slate-300 italic">"Mismatch." Tutors often fail to grasp specific <span className="text-white font-bold">International School</span> requirements.</p>
                        </div>
                        <div>
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <Wand2 size={16} className="text-blue-400" /> Magic Wand Wish
                            </strong>
                            <p className="text-sm text-slate-300">Efficient access to <span className="text-white font-bold">Curriculum-Specific Experts</span> without trial-and-error.</p>
                        </div>
                    </div>
                </div>

                {/* Tutors */}
                <div className="bg-navy-800 rounded-3xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all group flex flex-col shadow-lg">
                    <div className="flex items-center gap-4 mb-4 border-b border-purple-500/30 pb-4">
                        <div className="p-3 bg-purple-900/50 rounded-full text-purple-400 shrink-0">
                            <Briefcase size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Tutors (10)</h4>
                            <span className="text-purple-300 text-xs font-semibold uppercase">The Service Providers</span>
                        </div>
                    </div>
                    <div className="space-y-4 flex-1 text-base">
                        <div>
                            <strong className="text-white block mb-1">Primary Focus</strong>
                            <ul className="list-disc pl-5 text-slate-300 space-y-1 text-sm">
                                <li>Commission Transparency.</li>
                                <li>Administrative Efficiency.</li>
                            </ul>
                        </div>
                        <div className="bg-navy-900/50 p-3 rounded-xl border-l-4 border-purple-500">
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <AlertTriangle size={16} className="text-red-400" /> Explicit Pain
                            </strong>
                            <p className="text-sm text-slate-300 italic">Financial Exploitation. <span className="text-white font-bold">30-40% fees</span> for zero support. Manual scheduling chaos.</p>
                        </div>
                        <div>
                            <strong className="text-white block mb-1 text-sm flex items-center gap-2">
                                <Wand2 size={16} className="text-purple-400" /> Magic Wand Wish
                            </strong>
                            <p className="text-sm text-slate-300">Fair pay and tools for <span className="text-white font-bold">Professional Trust</span> to build long-term careers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Synthesis - Bottom Section - RESIZED */}
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-xl p-4 border border-navy-600 shadow-xl shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                    {/* The Pattern */}
                    <div className="lg:col-span-1 border-r border-navy-600 pr-6">
                        <h4 className="text-sm font-bold text-slate-200 mb-1 flex items-center gap-2">
                            <Lightbulb size={18} className="text-yellow-400" />
                            Core Insight
                        </h4>
                        <p className="text-xl font-bold text-white leading-tight">
                            The "Insecurity of Choice"
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            Stakeholders aren't looking for a match; they are looking for <span className="text-teal-400 font-bold">Risk Mitigation</span>.
                        </p>
                    </div>

                    {/* The Message */}
                    <div className="lg:col-span-2 pl-4">
                        <div className="relative">
                            <MessageSquare size={32} className="absolute -top-3 -left-2 text-navy-700 opacity-50 rotate-180" />
                            <p className="text-base italic text-slate-200 font-light leading-relaxed pl-6 border-l-2 border-teal-500">
                                "UniEdu bridges the <span className="text-white font-bold not-italic">Trust Gap</span> by replacing unverified social media interactions with AI-driven credential verification and automated progress analytics."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Slide 13: Market Pains ---
export const MarketPainsIntroSlide: React.FC<SlideProps> = () => {
    return (
        <div className="w-full flex flex-col h-full">
            {/* Header */}
            <div className="mb-4 text-center shrink-0">
                <h3 className="text-4xl font-bold text-white mb-2">5.1 Market Pains</h3>
                <p className="text-teal-400 text-base max-w-5xl mx-auto">
                    This section synthesizes the key "pain points" in Vietnam's private tutoring/EdTech market using the following logic: (1) what the problem is, (2) how it appears in the evidence, and (3) why it matters for payment decisions and user behavior.
                </p>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full min-h-0 overflow-y-auto custom-scrollbar p-2">
                <div className="space-y-4 max-w-6xl mx-auto">

                    {/* Pain 1: Trust deficit */}
                    <div className="bg-navy-800 rounded-xl p-4 border border-red-500/30 hover:border-red-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-red-900/50 rounded-lg text-red-400 shrink-0">
                                <span className="font-bold text-lg">1</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">
                                    Pain 1 — <span className="text-red-400">Trust deficit and difficulty verifying tutor competence</span>
                                </h4>
                                <p className="text-sm text-slate-300 mb-2">
                                    One major barrier for parents/students is the uncertainty about tutor suitability and competence before starting. While the Vietnamese EdTech market is projected to reach <span className="text-white font-semibold">$3.64 billion by the end of 2024</span>, approximately <span className="text-white font-semibold">45% of users</span> remain dissatisfied with course or tutor quality.
                                </p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li className="flex gap-2">
                                        <span className="text-red-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Evidence:</span> Survey patterns highlight challenges such as "difficulty assessing tutor quality" and "tutor mismatch."</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Insights:</span> Interviews show parents rely on referrals or trial lessons to reduce decision risk.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Implication:</span> Low trust lengthens the search process and weakens willingness to pay upfront.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pain 2: Financial risk */}
                    <div className="bg-navy-800 rounded-xl p-4 border border-orange-500/30 hover:border-orange-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-orange-900/50 rounded-lg text-orange-400 shrink-0">
                                <span className="font-bold text-lg">2</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">
                                    Pain 2 — <span className="text-orange-400">Financial risk of upfront payment and fear of scams</span>
                                </h4>
                                <p className="text-sm text-slate-300 mb-2">
                                    Financial risk directly impacts conversion. Although nearly <span className="text-white font-semibold">$200 million</span> was invested in Vietnamese EdTech in 2023, transaction security remains a primary concern for the estimated <span className="text-white font-semibold">11.8 million users</span> expected in the market by 2029.
                                </p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Evidence:</span> Respondents demand safer payment mechanisms like "hold-the-money" and transparent refunds.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Provider Perspective:</span> Tutors cite concerns over informal channel disputes and upfront fees.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Implication:</span> High perceived risk encourages defensive comparing rather than focusing on learning value.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pain 3: Limited price transparency */}
                    <div className="bg-navy-800 rounded-xl p-4 border border-yellow-500/30 hover:border-yellow-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-yellow-900/50 rounded-lg text-yellow-400 shrink-0">
                                <span className="font-bold text-lg">3</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">
                                    Pain 3 — <span className="text-yellow-400">Limited price transparency and high intermediary costs</span>
                                </h4>
                                <p className="text-sm text-slate-300 mb-2">
                                    Vietnamese families are willing to dedicate <span className="text-white font-semibold">up to 24% of household spending</span> to education, yet opaque pricing remains a friction point.
                                </p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li className="flex gap-2">
                                        <span className="text-yellow-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Evidence:</span> "Unclear pricing" is a primary difficulty; tutors report high, unfair commission rates from centers.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-yellow-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Implication:</span> Lack of clarity pushes the market toward price-based competition rather than quality.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pain 4: Lack of outcome visibility */}
                    <div className="bg-navy-800 rounded-xl p-4 border border-purple-500/30 hover:border-purple-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400 shrink-0">
                                <span className="font-bold text-lg">4</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">
                                    Pain 4 — <span className="text-purple-400">Lack of learning progress measurement and outcome visibility</span>
                                </h4>
                                <p className="text-sm text-slate-300 mb-2">
                                    Parents increasingly demand evidence-based learning. While the online learning platform sector alone is valued at <span className="text-white font-semibold">$228.7 million</span>, visible outcome tracking is rarely integrated.
                                </p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Evidence:</span> Interviews indicate a preference for "knowledge-gap visuals" over raw test scores.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Implication:</span> Invisible outcomes lead to early drop-off and lower long-term retention.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pain 5: Fragmented operations */}
                    <div className="bg-navy-800 rounded-xl p-4 border border-blue-500/30 hover:border-blue-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400 shrink-0">
                                <span className="font-bold text-lg">5</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">
                                    Pain 5 — <span className="text-blue-400">Fragmented and manual operations</span>
                                </h4>
                                <p className="text-sm text-slate-300 mb-2">
                                    Operational friction persists despite the rise of <span className="text-white font-semibold">over 750 EdTech companies</span> in Vietnam.
                                </p>
                                <ul className="space-y-1 text-xs text-slate-400">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Evidence:</span> Both tutors and parents report high demand for automated scheduling, attendance tracking, and unified communication.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><span className="text-slate-300 font-semibold">Implication:</span> Manual management worsens the user experience and increases drop-off risk.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Slide 14: Market Solutions ---
export const MarketSolutionsSlide: React.FC<SlideProps> = () => {
    return (
        <div className="w-full flex flex-col h-full">
            {/* Header */}
            <div className="mb-6 text-center shrink-0">
                <h3 className="text-4xl font-bold text-white mb-2">5.2 Market Solutions</h3>
                <p className="text-teal-400 text-lg max-w-4xl mx-auto">
                    UniEdu differentiates through a bundled value proposition focused on <span className="text-white font-semibold">trust</span>, <span className="text-white font-semibold">financial protection</span>, and <span className="text-white font-semibold">operational efficiency</span>.
                </p>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full min-h-0 overflow-y-auto custom-scrollbar p-2">
                <div className="space-y-5 max-w-6xl mx-auto">

                    {/* Solution A: Trust Stack */}
                    <div className="bg-navy-800 rounded-2xl p-5 border border-teal-500/30 hover:border-teal-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-900/50 rounded-lg text-teal-400 shrink-0">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Solution A — <span className="text-teal-400">"Trust Stack"</span>
                                </h4>
                                <p className="text-slate-300 mb-3">Building a multi-layer verification system:</p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex gap-2">
                                        <span className="text-teal-400 mt-0.5">•</span>
                                        <span>Identity/profile verification (<span className="text-white font-semibold">KYC</span>) and parent-friendly certificate displays.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-teal-400 mt-0.5">•</span>
                                        <span>Standardized competency tests combined with manual screening.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-teal-400 mt-0.5">•</span>
                                        <span>Demo/intro videos + trial lesson options to validate tutor fit quickly.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Solution B: Financial Protection */}
                    <div className="bg-navy-800 rounded-2xl p-5 border border-blue-500/30 hover:border-blue-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-900/50 rounded-lg text-blue-400 shrink-0">
                                <Lock size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Solution B — <span className="text-blue-400">"Financial Protection"</span>
                                </h4>
                                <p className="text-slate-300 mb-3">Core mechanism of escrow/holding funds, where payment is released only upon session delivery.</p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5">•</span>
                                        <span>Clear dispute/refund processes and a quality assurance policy (quick tutor switching).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-400 mt-0.5">•</span>
                                        <span>Fee transparency to eliminate the perception of "hidden charges."</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Solution C: Outcome System */}
                    <div className="bg-navy-800 rounded-2xl p-5 border border-purple-500/30 hover:border-purple-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-900/50 rounded-lg text-purple-400 shrink-0">
                                <LineChart size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Solution C — <span className="text-purple-400">"Outcome System"</span>
                                </h4>
                                <p className="text-slate-300 mb-3">Turning tutoring into an evidence-based experience:</p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5">•</span>
                                        <span>Progress dashboards and visual reports (knowledge gaps/skill progress).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 mt-0.5">•</span>
                                        <span>Positioning as "learning infrastructure" to create high switching costs.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Solution D: Operations */}
                    <div className="bg-navy-800 rounded-2xl p-5 border border-orange-500/30 hover:border-orange-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-900/50 rounded-lg text-orange-400 shrink-0">
                                <Settings size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Solution D — <span className="text-orange-400">"Operations"</span>
                                </h4>
                                <p className="text-slate-300 mb-3">Focus on features reducing operational busywork:</p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5">•</span>
                                        <span>Automated scheduling, reminders, and in-app chat.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 mt-0.5">•</span>
                                        <span>Attendance tracking, session notes, and digital receipts.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Solution E: Partnerships & Compliance */}
                    <div className="bg-navy-800 rounded-2xl p-5 border border-emerald-500/30 hover:border-emerald-500 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-900/50 rounded-lg text-emerald-400 shrink-0">
                                <Landmark size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Solution E — <span className="text-emerald-400">Partnerships & Compliance</span>
                                </h4>
                                <p className="text-slate-300">
                                    Safe implementation of escrow and payments through partnerships with established providers (e.g., <span className="text-white font-semibold">MoMo</span>, <span className="text-white font-semibold">bank gateways</span>) to ensure credibility and scalability readiness.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Slide 14: Goodbye ---
export const GoodbyeSlide: React.FC<SlideProps> = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="mb-8 p-6 bg-teal-500/10 rounded-full border border-teal-400/30">
            <ShieldCheck size={80} className="text-teal-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Thank You
        </h1>
        <p className="text-2xl text-teal-400 mb-12 font-light">
            Let's Build the Future of Trusted Education Together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 flex flex-col items-center hover:border-teal-500 transition-colors cursor-pointer group">
                <Mail size={32} className="text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Contact Us</h3>
                <p className="text-slate-400 text-sm">contact@uniedu.vn</p>
            </div>

            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 flex flex-col items-center hover:border-teal-500 transition-colors cursor-pointer group">
                <Globe size={32} className="text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Visit Website</h3>
                <p className="text-slate-400 text-sm">www.uniedu.vn</p>
            </div>
        </div>

        <div className="mt-16 text-slate-500 text-sm">
            &copy; 2024 UniEdu. All Rights Reserved.
        </div>
    </div>
);
