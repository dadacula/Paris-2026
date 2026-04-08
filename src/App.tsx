import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { CoverView } from './components/CoverView';
import { AppView } from './components/AppView';
import { DirectoryModal } from './components/DirectoryModal';

export default function App() {
  const [view, setView] = useState<'cover' | 'app'>('cover');
  const [currentDay, setCurrentDay] = useState(1);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  const handleEnterJourney = (day: number) => {
    setCurrentDay(day);
    setView('app');
    setIsDirectoryOpen(false);
  };

  const handleExitApp = () => {
    setView('cover');
    setIsDirectoryOpen(false);
  };

  const handleOpenDirectory = () => {
    setIsDirectoryOpen(true);
  };

  const handleCloseDirectory = () => {
    setIsDirectoryOpen(false);
  };

  const handleGoToDay = (day: number) => {
    setCurrentDay(day);
    setView('app');
    setIsDirectoryOpen(false);
  };

  return (
    <div className="w-full h-full">
      <AnimatePresence mode="wait">
        {view === 'cover' && (
          <CoverView 
            key="cover" 
            onEnterJourney={handleEnterJourney} 
            onOpenDirectory={handleOpenDirectory} 
          />
        )}
        {view === 'app' && (
          <AppView 
            key="app" 
            currentDay={currentDay} 
            onExit={handleExitApp} 
            onOpenDirectory={handleOpenDirectory}
            onGoToDay={handleGoToDay}
          />
        )}
      </AnimatePresence>
      
      <DirectoryModal 
        isOpen={isDirectoryOpen} 
        onClose={handleCloseDirectory} 
        onSelectDay={handleGoToDay} 
      />
    </div>
  );
}
