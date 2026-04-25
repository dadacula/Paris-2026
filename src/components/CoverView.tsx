import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, BookOpen, ArrowRight, CalendarDays, Euro, Footprints, TrainFront } from 'lucide-react';
import { itineraryData, grandSummaryData } from '../data/itinerary';
import { getDayOfWeek } from '../lib/utils';

const coverImages = [
    "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
    "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
    "url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
    "url('https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
];

export const CoverView: React.FC<{ onEnterJourney: (day: number) => void, onOpenDirectory: () => void }> = ({ onEnterJourney, onOpenDirectory }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prev) => (prev + 1) % coverImages.length);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    const totalKmWalked = itineraryData.reduce((acc, day) => acc + day.stats.kmWalked, 0);
    const totalKmTraveled = itineraryData.reduce((acc, day) => acc + day.stats.kmTraveled, 0);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full z-40 overflow-y-auto bg-theme-bg"
        >
            <div className="relative min-h-screen flex flex-col justify-end p-8 sm:p-16 overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentImgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: coverImages[currentImgIndex] }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/60 to-transparent z-10"></div>

                <div className="relative z-20 max-w-4xl mx-auto w-full">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="h-px bg-theme-gold w-12 sm:w-24"></div>
                        <span className="text-theme-gold tracking-mega text-xs sm:text-sm uppercase font-semibold">Amos & Marlene</span>
                    </div>
                    
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif mb-4 leading-none text-theme-text">Paris</h1>
                    <h2 className="text-xl sm:text-3xl font-light tracking-widest text-theme-text mb-8 flex items-center gap-3">
                        June 15 – June 24, 2026
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-beat inline-block drop-shadow-md fill-current" />
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-theme-border pt-8 mt-8 gap-8">
                        <div className="grid grid-cols-2 gap-8 mb-8 sm:mb-0">
                            <div>
                                <div className="text-[10px] tracking-widest text-theme-muted uppercase mb-1">Travelers</div>
                                <div className="font-serif italic text-xl text-theme-text">2 Adults</div>
                            </div>
                            <div>
                                <div className="text-[10px] tracking-widest text-theme-muted uppercase mb-1">Duration</div>
                                <div className="font-serif italic text-xl text-theme-text">10 Days</div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={onOpenDirectory} className="group flex items-center justify-center space-x-3 text-theme-text hover:text-theme-pink transition-colors cursor-pointer bg-theme-surface/50 backdrop-blur px-6 py-3 border border-theme-border rounded-none">
                                <BookOpen className="w-4 h-4" />
                                <span className="tracking-widest text-xs uppercase font-semibold">Directory</span>
                            </button>
                            <button onClick={() => onEnterJourney(1)} className="group flex items-center justify-center space-x-4 text-theme-surface bg-theme-text hover:bg-theme-pink transition-colors cursor-pointer px-6 py-3 border border-theme-text hover:border-theme-pink rounded-none">
                                <span className="tracking-widest text-xs uppercase font-semibold">Enter Journey</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-24 px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <div className="bg-theme-surface border border-theme-border p-5 text-center shadow-sm">
                        <CalendarDays className="w-6 h-6 mx-auto text-theme-gold mb-3" />
                        <div className="text-2xl font-serif text-theme-text">10</div>
                        <div className="text-[9px] tracking-widest text-theme-muted uppercase mt-1">Days</div>
                    </div>
                    <div className="bg-theme-surface border border-theme-border p-5 text-center shadow-sm">
                        <Euro className="w-6 h-6 mx-auto text-theme-gold mb-3" />
                        <div className="text-2xl font-serif text-theme-text">{grandSummaryData.total}</div>
                        <div className="text-[9px] tracking-widest text-theme-muted uppercase mt-1">Est. Total</div>
                    </div>
                    <div className="bg-theme-surface border border-theme-border p-5 text-center shadow-sm">
                        <Footprints className="w-6 h-6 mx-auto text-theme-gold mb-3" />
                        <div className="text-2xl font-serif text-theme-text">{totalKmWalked.toFixed(1)}</div>
                        <div className="text-[9px] tracking-widest text-theme-muted uppercase mt-1">Km Walked</div>
                    </div>
                    <div className="bg-theme-surface border border-theme-border p-5 text-center shadow-sm">
                        <TrainFront className="w-6 h-6 mx-auto text-theme-gold mb-3" />
                        <div className="text-2xl font-serif text-theme-text">{totalKmTraveled.toFixed(0)}</div>
                        <div className="text-[9px] tracking-widest text-theme-muted uppercase mt-1">Km Transit</div>
                    </div>
                </div>

                <div className="mb-24">
                    <div className="flex items-center space-x-4 mb-10 text-center justify-center">
                        <div className="h-px bg-theme-border w-16"></div>
                        <h3 className="text-3xl font-serif text-theme-text">Daily Summary</h3>
                        <div className="h-px bg-theme-border w-16"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {itineraryData.map(day => (
                            <button key={day.dayNumber} onClick={() => onEnterJourney(day.dayNumber)} className="group text-left bg-theme-surface border border-theme-border p-6 hover:border-theme-pink transition-colors shadow-sm flex flex-col h-full cursor-pointer w-full focus:outline-none">
                                <div className="flex justify-between items-center mb-3 w-full pointer-events-none">
                                    <span className="text-[10px] tracking-widest text-theme-gold uppercase font-semibold">Day {day.dayNumber} &bull; {getDayOfWeek(day.date)}</span>
                                    <span className="text-xs text-theme-muted font-medium">{day.date}</span>
                                </div>
                                <h4 className="font-serif text-lg text-theme-text group-hover:text-theme-pink transition-colors mb-2 w-full pointer-events-none">{day.title}</h4>
                                <p className="text-xs text-theme-muted line-clamp-2 mt-auto w-full pointer-events-none">{day.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-8">
                    <div className="flex items-center space-x-4 mb-10 text-center justify-center">
                        <div className="h-px bg-theme-border w-16"></div>
                        <h3 className="text-3xl font-serif text-theme-text">Budget Overview</h3>
                        <div className="h-px bg-theme-border w-16"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                        <div className="space-y-4 bg-white/80 backdrop-blur-md p-8 border border-theme-border shadow-sm">
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Flights <span className="text-theme-pink">(Pre-paid)</span></span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.flight}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Hotels <span className="text-theme-pink">(9 Nights Pre-paid)</span></span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.accommodation}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Food & Dining</span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.food}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Culture & Museums</span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.culture}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Transport (Trains, Taxis, Metro)</span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.transport}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-theme-border/50 pb-2">
                                <span className="text-xs tracking-widest uppercase text-theme-muted font-semibold">Leisure & Shopping</span>
                                <span className="font-serif text-lg text-theme-text">€{grandSummaryData.leisure}</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center p-10 bg-white/80 backdrop-blur-md border border-theme-border shadow-sm">
                            <div className="text-[10px] tracking-mega uppercase text-theme-gold font-semibold mb-4">Estimated Total</div>
                            <div className="text-6xl font-serif text-theme-text mb-4">€{grandSummaryData.total}</div>
                            <p className="text-xs text-theme-muted text-center max-w-[200px] leading-relaxed">
                                Flight+Hotel pre-paid. Approx €174/day required for activities, food & transit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};