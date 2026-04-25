import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ChevronDown, MapPin, Clock, Phone, Globe, Ticket } from 'lucide-react';
import { itineraryData } from '../data/itinerary';
import { IconRenderer } from './IconRenderer';
import { highlightPrePaid } from '../lib/utils';

export const DirectoryModal = ({ isOpen, onClose, onSelectDay }: { isOpen: boolean, onClose: () => void, onSelectDay: (day: number) => void }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('day');

    const allDirectoryItems = useMemo(() => {
        const items: any[] = [];
        itineraryData.forEach(day => {
            day.activities.forEach(act => {
                if (act.info) {
                    items.push({
                        title: act.title,
                        type: act.type,
                        icon: act.icon,
                        dayNum: day.dayNumber,
                        info: act.info
                    });
                }
            });
        });
        return items;
    }, []);

    const filteredAndSortedItems = useMemo(() => {
        let filtered = allDirectoryItems.filter(item => {
            const searchStr = `${item.title} ${item.type} ${item.info.address || ''}`.toLowerCase();
            return searchStr.includes(searchTerm.toLowerCase());
        });

        filtered.sort((a, b) => {
            if (sortBy === 'name') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'type') {
                return a.type.localeCompare(b.type) || (a.dayNum - b.dayNum);
            } else {
                return a.dayNum - b.dayNum;
            }
        });

        return filtered;
    }, [allDirectoryItems, searchTerm, sortBy]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 bg-theme-bg flex flex-col"
                >
                    <div className="p-6 md:p-10 border-b border-theme-border flex items-center justify-between bg-theme-surface">
                        <div>
                            <h2 className="font-serif text-3xl text-theme-text">Directory</h2>
                            <div className="text-[10px] tracking-widest text-theme-muted uppercase mt-2">Quick Reference Guide</div>
                        </div>
                        <button onClick={onClose} className="text-theme-text hover:text-theme-pink transition-colors w-12 h-12 flex items-center justify-center border border-theme-border hover:border-theme-pink rounded-full cursor-pointer">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <div className="px-6 md:px-10 py-4 border-b border-theme-border bg-theme-surface/60 flex flex-col sm:flex-row gap-4 justify-between items-center backdrop-blur-sm z-10">
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-muted w-3 h-3" />
                            <input 
                                type="text" 
                                placeholder="Search locations, activities..." 
                                className="w-full bg-theme-bg border border-theme-border pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-theme-pink transition-colors text-theme-text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                            <span className="text-[9px] uppercase tracking-widest font-semibold text-theme-muted whitespace-nowrap">Sort by:</span>
                            <div className="relative w-full sm:w-auto">
                                <select 
                                    className="w-full sm:w-auto bg-theme-bg border border-theme-border pl-4 pr-10 py-2.5 text-xs focus:outline-none focus:border-theme-pink transition-colors text-theme-text appearance-none cursor-pointer"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="day">Day (Chronological)</option>
                                    <option value="name">Name (A-Z)</option>
                                    <option value="type">Category (Accommodation, Attraction, Dining)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-theme-muted w-3 h-3 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-10">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredAndSortedItems.length === 0 ? (
                                <div className="col-span-full py-16 text-center text-theme-muted font-serif italic text-lg">No locations found matching "{searchTerm}".</div>
                            ) : (
                                filteredAndSortedItems.map((item, idx) => {
                                    let typeLabel = 'Location';
                                    let badgeColor = 'bg-theme-bg border-theme-border text-theme-text';
                                    let cardClass = 'bg-theme-surface border border-theme-border shadow-sm hover:-translate-y-1 hover:border-theme-pink transition-all cursor-pointer flex flex-col h-full p-6 text-left w-full focus:outline-none group/dircard';
                                    let iconClass = 'text-theme-gold';

                                    if (item.type === 'meal') {
                                        typeLabel = 'Dining';
                                        badgeColor = 'bg-theme-pink text-white border-theme-pink';
                                    } else if (item.type === 'attraction') {
                                        typeLabel = 'Attraction';
                                    } else if (item.type === 'hotel') {
                                        typeLabel = 'Accommodation';
                                        badgeColor = 'bg-theme-gold text-white border-theme-gold shadow-sm';
                                        cardClass = 'bg-gradient-to-br from-theme-surface to-theme-gold/10 border-2 border-theme-gold shadow-lg hover:-translate-y-2 hover:border-theme-pink transition-all cursor-pointer flex flex-col h-full p-6 ring-4 ring-theme-gold/20 text-left w-full focus:outline-none group/dircard';
                                    }

                                    return (
                                        <button key={idx} onClick={() => onSelectDay(item.dayNum)} className={cardClass}>
                                            <div className="flex justify-between items-start mb-4 w-full pointer-events-none">
                                                <span className={`px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold border rounded-sm ${badgeColor}`}>
                                                    {typeLabel}
                                                </span>
                                                <span className="text-[10px] tracking-widest text-theme-muted uppercase font-semibold group-hover/dircard:text-theme-pink transition-colors">Day {item.dayNum}</span>
                                            </div>
                                            <h4 className="font-serif text-lg text-theme-text mb-4 border-b border-theme-border pb-3 flex items-center w-full group-hover/dircard:text-theme-pink transition-colors">
                                                <IconRenderer name={item.icon} className={`mr-2 ${iconClass} w-4 h-4`} />
                                                {item.title}
                                            </h4>
                                            
                                            <div className="space-y-3 mt-auto w-full">
                                                {item.info.address && <div className="flex items-start text-xs"><MapPin className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{item.info.address}</span></div>}
                                                {item.info.hours && <div className="flex items-start text-xs"><Clock className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{item.info.hours}</span></div>}
                                                {item.info.tel && item.info.tel !== 'N/A' && item.info.tel !== 'No Phone' && <div className="flex items-start text-xs"><Phone className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80">{item.info.tel}</span></div>}
                                                {item.info.web && item.info.web !== 'N/A' && <div className="flex items-start text-xs"><Globe className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <a href={`https://${item.info.web.replace(/^https?:\/\//, '')}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-theme-pink underline hover:text-theme-gold transition-colors">{item.info.web}</a></div>}
                                                {item.info.budget && <div className="flex items-start text-xs"><Ticket className="w-4 h-4 text-theme-gold mt-0.5 opacity-80 shrink-0 mr-2" /> <span className="text-theme-text/80" dangerouslySetInnerHTML={{ __html: highlightPrePaid(item.info.budget) || '' }}></span></div>}
                                            </div>
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};