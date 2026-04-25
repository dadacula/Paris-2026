import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Clock, ArrowLeft, ArrowRight, Flag, MapPin, Info, Phone, Globe, Ticket } from 'lucide-react';
import { itineraryData } from '../data/itinerary';
import { IconRenderer } from './IconRenderer';
import { calculateDayDuration, calculateActivityDuration, highlightPrePaid, getDayOfWeek } from '../lib/utils';

const TransitIcon = ({ transitStr }: { transitStr: string }) => {
    const t = transitStr.toLowerCase();
    let iconName = 'fa-taxi';
    if (t.includes('walk')) iconName = 'fa-road';
    else if (t.includes('metro') || t.includes('rer')) iconName = 'fa-train-subway';
    else if (t.includes('train')) iconName = 'fa-train';
    else if (t.includes('flight') || t.includes('plane')) iconName = 'fa-plane-departure';
    
    return <IconRenderer name={iconName} className="w-3.5 h-3.5" />;
};

export const AppView: React.FC<{ currentDay: number, onExit: () => void, onOpenDirectory: () => void, onGoToDay: (day: number) => void }> = ({ currentDay, onExit, onOpenDirectory, onGoToDay }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentDay]);

    const day = itineraryData.find(d => d.dayNumber === currentDay);
    if (!day) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col md:flex-row z-40 bg-theme-bg"
        >
            <div className="w-full md:w-80 h-auto md:h-full flex-shrink-0 border-b md:border-b-0 md:border-r border-theme-border flex flex-col bg-theme-surface z-20">
                <div className="p-6 md:p-8 flex items-center justify-between">
                    <div>
                        <h2 className="font-serif text-2xl text-theme-text">Paris</h2>
                        <div className="text-[9px] tracking-widest text-theme-muted uppercase mt-1">2026 Itinerary</div>
                    </div>
                    <button onClick={onExit} className="text-theme-muted hover:text-theme-pink transition-colors cursor-pointer">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pb-6 px-6 md:px-8 flex flex-row md:flex-col gap-4 md:gap-0">
                    {itineraryData.map(d => (
                        <button 
                            key={d.dayNumber} 
                            onClick={() => onGoToDay(d.dayNumber)} 
                            className={`cursor-pointer group flex flex-col py-3 px-4 border-b border-theme-border/50 last:border-0 min-w-[120px] md:min-w-0 transition-colors text-left w-full focus:outline-none ${d.dayNumber === currentDay ? 'border-l-2 border-theme-pink bg-theme-bg' : 'border-l-0 bg-transparent'}`}
                        >
                            <div className="flex items-center justify-between mb-1 w-full pointer-events-none">
                                <span className="text-[10px] tracking-widest text-theme-gold uppercase font-semibold group-hover:text-theme-pink transition-colors">Day {d.dayNumber} &bull; {getDayOfWeek(d.date)}</span>
                                <span className="text-[10px] font-semibold text-theme-text hidden md:block">€{d.stats.budget}</span>
                            </div>
                            <span className="font-serif text-theme-text text-sm md:text-base truncate group-hover:text-theme-pink transition-colors mb-1 w-full pointer-events-none">{d.title}</span>
                            <div className="text-[9px] tracking-widest text-theme-muted uppercase opacity-80 flex items-center w-full pointer-events-none">
                                <Clock className="w-3 h-3 mr-1.5" /> {calculateDayDuration(d.activities)}
                            </div>
                        </button>
                    ))}
                    <button onClick={onExit} className="cursor-pointer group flex flex-col py-3 px-4 mt-4 border-t border-theme-border min-w-[120px] md:min-w-0 text-left w-full focus:outline-none bg-transparent">
                        <span className="text-[10px] tracking-widest text-theme-gold uppercase font-semibold group-hover:text-theme-pink transition-colors pointer-events-none">Return</span>
                        <span className="font-serif text-theme-text text-sm md:text-base truncate group-hover:text-theme-pink transition-colors pointer-events-none">Cover & Summary</span>
                    </button>
                </div>
                
                <div className="p-6 border-t border-theme-border hidden md:block">
                    <button onClick={onOpenDirectory} className="w-full group flex items-center justify-center space-x-3 text-theme-text hover:text-theme-pink transition-colors cursor-pointer bg-theme-bg px-4 py-3 border border-theme-border hover:border-theme-pink rounded-none">
                        <BookOpen className="w-4 h-4" />
                        <span className="tracking-widest text-[10px] uppercase font-semibold">View Directory</span>
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="flex-1 h-full w-full overflow-y-auto scroll-smooth bg-theme-bg">
                <div className="max-w-3xl mx-auto py-12 px-6 sm:px-12 lg:px-20 min-h-screen w-full">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentDay}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="pb-16"
                        >
                            <div className="mb-10 sm:mb-12 border-b border-theme-border pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <div className="text-theme-gold tracking-mega text-[10px] sm:text-xs font-semibold uppercase mb-2">Day {day.dayNumber} &bull; {day.date}</div>
                                    <h3 className="text-3xl sm:text-4xl font-serif text-theme-text mb-3">{day.title}</h3>
                                    <p className="text-sm text-theme-muted font-light max-w-lg leading-relaxed">{day.description}</p>
                                </div>
                                <div className="flex gap-6 sm:gap-8 text-right">
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-serif text-theme-text">€{day.stats.budget}</div>
                                        <div className="text-[8px] sm:text-[9px] tracking-widest text-theme-muted uppercase mt-1">Subtotal</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-serif text-theme-text">{day.stats.kmWalked}</div>
                                        <div className="text-[8px] sm:text-[9px] tracking-widest text-theme-muted uppercase mt-1">Km Walk</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                {day.activities.map((act, idx) => {
                                    const isTransit = act.type === 'transit';
                                    const iconColor = isTransit ? 'text-theme-muted' : (act.type === 'meal' ? 'text-theme-pink' : 'text-theme-gold');
                                    const bgClass = isTransit ? 'bg-theme-bg/50 border border-theme-border/50' : 'bg-theme-surface border border-theme-border shadow-sm';
                                    const duration = calculateActivityDuration(act.time);

                                    return (
                                        <div key={idx} className="relative pl-10 sm:pl-16 py-4 group">
                                            <div className="absolute left-[7px] top-8 bottom-[-2rem] w-px bg-theme-border group-last:hidden"></div>
                                            <div className="absolute left-0 top-8 w-[15px] h-[15px] rounded-full bg-theme-bg border-2 border-theme-border timeline-dot z-10 flex items-center justify-center transition-colors group-hover:border-theme-gold">
                                                <div className="w-[5px] h-[5px] bg-theme-border rounded-full group-hover:bg-theme-gold"></div>
                                            </div>

                                            <div className="absolute left-10 sm:left-16 top-0 flex items-center space-x-2">
                                                <span className="text-[10px] tracking-widest font-semibold text-theme-pink whitespace-nowrap">
                                                    {act.time}
                                                </span>
                                                {duration && (
                                                    <span className="text-[8px] font-semibold text-theme-muted bg-theme-border/40 px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
                                                        {duration}
                                                    </span>
                                                )}
                                            </div>

                                            <div className={`mt-4 p-5 sm:p-6 rounded-none ${bgClass} transition-transform hover:-translate-y-1 duration-300`}>
                                                <div className="flex justify-between items-start mb-2 gap-4">
                                                    <h4 className="text-base sm:text-lg font-serif text-theme-text font-medium leading-snug flex items-center">
                                                        <IconRenderer name={act.icon} className={`mr-2 w-4 h-4 ${iconColor}`} />
                                                        {act.title}
                                                    </h4>
                                                    {act.cost > 0 && (
                                                        <div className="inline-flex items-center justify-center px-2 py-1 bg-theme-bg border border-theme-border rounded text-[10px] font-semibold text-theme-text ml-3 whitespace-nowrap">
                                                            €{act.cost}
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                <div className="text-[10px] tracking-widest uppercase text-theme-muted mb-3 flex flex-wrap items-center gap-4">
                                                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1.5 opacity-70" />{act.location}</span>
                                                </div>

                                                <p className="text-xs sm:text-sm text-theme-text/80 leading-relaxed font-light mb-3">
                                                    {act.description}
                                                </p>

                                                {act.tip && (
                                                    <div className="mt-3 text-xs bg-theme-pink/5 text-theme-text p-3 border-l-2 border-theme-pink italic">
                                                        <span className="font-semibold text-theme-pink not-italic mr-1">💡 Tip:</span> 
                                                        <span dangerouslySetInnerHTML={{ __html: highlightPrePaid(act.tip) || '' }}></span>
                                                    </div>
                                                )}

                                                {act.info && (act.info.address || act.info.hours || act.info.tel || act.info.web || act.info.budget) && (
                                                    <div className="mt-4 bg-theme-bg/30 border border-theme-border/50 p-4 rounded-sm">
                                                        <div className="text-[9px] tracking-widest uppercase font-semibold text-theme-muted mb-3 flex items-center">
                                                            <Info className="w-3 h-3 mr-2 opacity-70 text-theme-gold" /> Practical Info
                                                        </div>
                                                        <div className="space-y-2.5">
                                                            {act.info.address && <div className="flex items-start text-xs"><MapPin className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{act.info.address}</span></div>}
                                                            {act.info.hours && <div className="flex items-start text-xs"><Clock className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{act.info.hours}</span></div>}
                                                            {act.info.tel && act.info.tel !== 'N/A' && act.info.tel !== 'No Phone' && <div className="flex items-start text-xs"><Phone className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{act.info.tel}</span></div>}
                                                            {act.info.web && act.info.web !== 'N/A' && <div className="flex items-start text-xs"><Globe className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <a href={`https://${act.info.web.replace(/^https?:\/\//, '')}`} target="_blank" rel="noreferrer" className="text-theme-pink underline hover:text-theme-gold transition-colors">{act.info.web}</a></div>}
                                                            {act.info.budget && <div className="flex items-start text-xs"><Ticket className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80" dangerouslySetInnerHTML={{ __html: highlightPrePaid(act.info.budget) || '' }}></span></div>}
                                                        </div>
                                                    </div>
                                                )}

                                                {act.transit && (
                                                    <div className="flex items-center text-[10px] sm:text-xs text-theme-muted mt-5 pt-3 border-t border-theme-border/50 font-medium tracking-wide">
                                                        <span className="bg-theme-border/30 p-1.5 rounded-full mr-2 text-theme-muted">
                                                            <TransitIcon transitStr={act.transit} />
                                                        </span>
                                                        {act.transit}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-theme-border pt-10 mt-16 gap-4">
                                {day.dayNumber > 1 ? (
                                    <button onClick={() => onGoToDay(day.dayNumber - 1)} className="cursor-pointer group flex items-center space-x-3 text-theme-text hover:text-theme-pink transition-colors border border-theme-border px-5 py-3 hover:border-theme-pink bg-theme-surface w-full sm:w-40 justify-center">
                                        <ArrowLeft className="w-4 h-4" />
                                        <span className="text-[10px] tracking-widest uppercase font-semibold">Day {day.dayNumber - 1}</span>
                                    </button>
                                ) : (
                                    <div className="hidden sm:block sm:w-40"></div>
                                )}
                                
                                {day.dayNumber < itineraryData.length ? (
                                    <button onClick={() => onGoToDay(day.dayNumber + 1)} className="cursor-pointer group flex items-center space-x-3 text-theme-text hover:text-theme-pink transition-colors border border-theme-gold px-5 py-3 hover:border-theme-pink bg-theme-surface w-full sm:w-40 justify-center">
                                        <span className="text-[10px] tracking-widest uppercase font-semibold">Day {day.dayNumber + 1}</span>
                                        <ArrowRight className="w-4 h-4 text-theme-gold group-hover:text-theme-pink transition-colors" />
                                    </button>
                                ) : (
                                    <button onClick={onExit} className="cursor-pointer group flex items-center space-x-3 text-theme-text hover:text-theme-pink transition-colors border border-theme-gold px-5 py-3 hover:border-theme-pink bg-theme-surface w-full sm:w-40 justify-center">
                                        <span className="text-[10px] tracking-widest uppercase font-semibold">Finish</span>
                                        <Flag className="w-4 h-4 text-theme-gold group-hover:text-theme-pink transition-colors" />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};