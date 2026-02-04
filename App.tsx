import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { TitleSlide, MarketSlide, PortersSlide, PortersAnalysisSlide, ExpertsSlide, KeyLearningsSlide, DetailedCompetitiveTableSlide, ActionableFrameworkSlide, StrategicAnalysisSlide, BuyerPersonasSlide, DataValidationSlide, PainPointsSlide, MarketPainsSlide, GoodbyeSlide } from './components/Slides';
import { SlideIndex } from './types';

const TOTAL_SLIDES = 14;

// List of slides in order for PDF generation
const SLIDE_COMPONENTS = [
  TitleSlide, 
  MarketSlide, 
  PortersSlide, 
  PortersAnalysisSlide, 
  ExpertsSlide, 
  KeyLearningsSlide, 
  DetailedCompetitiveTableSlide, 
  ActionableFrameworkSlide, 
  StrategicAnalysisSlide, 
  BuyerPersonasSlide, 
  DataValidationSlide, 
  PainPointsSlide, 
  MarketPainsSlide, 
  GoodbyeSlide
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) < TOTAL_SLIDES ? prev + 1 : prev);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1) >= 0 ? prev - 1 : prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGeneratingPdf) return; // Disable navigation during generation
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isGeneratingPdf]);

  const handleGeneratePdf = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    try {
      // 1. Create a container element
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '-10000px';
      container.style.left = '0';
      container.style.width = '1280px'; // 720p width
      container.style.height = '720px'; // 720p height
      container.style.zIndex = '-1';
      document.body.appendChild(container);

      // 2. Initialize PDF
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1280, 720]
      });

      // 3. Create Root for rendering
      const root = createRoot(container);

      // 4. Iterate and capture
      for (let i = 0; i < SLIDE_COMPONENTS.length; i++) {
        const SlideComponent = SLIDE_COMPONENTS[i];

        await new Promise<void>((resolve) => {
           // Render specific slide into container
           // We wrap it to match the main styling
           root.render(
             <div className="w-[1280px] h-[720px] bg-navy-900 text-slate-100 flex flex-col relative overflow-hidden p-16">
                 {/* Force desktop view styling */}
                 <style>{`
                    .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
                    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
                    .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
                    .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
                    .lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
                    .lg\\:col-span-2 { grid-column: span 2 / span 2 !important; }
                    .lg\\:col-span-3 { grid-column: span 3 / span 3 !important; }
                 `}</style>
                 <SlideComponent active={true} />
             </div>
           );
           // Wait for render and potential animations (recharts)
           setTimeout(resolve, 1500); 
        });

        const canvas = await html2canvas(container, {
          scale: 1.5, // Reasonable quality/size balance
          useCORS: true,
          logging: false,
          backgroundColor: '#0a192f',
          windowWidth: 1280,
          windowHeight: 720
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        
        if (i > 0) pdf.addPage([1280, 720], 'landscape');
        pdf.addImage(imgData, 'JPEG', 0, 0, 1280, 720);
      }

      // 5. Save
      pdf.save('UniEdu-Presentation.pdf');

      // 6. Cleanup
      root.unmount();
      document.body.removeChild(container);

    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("An error occurred while generating the PDF.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-navy-900 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-navy-800 z-50">
        <div 
          className="h-full bg-teal-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>

      {/* Slide Container */}
      <div className="flex-1 relative w-full h-full">
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center p-8 md:p-16">
            {currentSlide === SlideIndex.Title && <TitleSlide active={true} />}
            {currentSlide === SlideIndex.Market && <MarketSlide active={true} />}
            {currentSlide === SlideIndex.Porters && <PortersSlide active={true} />}
            {currentSlide === SlideIndex.Analysis && <PortersAnalysisSlide active={true} />}
            {currentSlide === SlideIndex.Experts && <ExpertsSlide active={true} />}
            {currentSlide === SlideIndex.KeyLearnings && <KeyLearningsSlide active={true} />}
            {currentSlide === SlideIndex.DetailedCompetitive && <DetailedCompetitiveTableSlide active={true} />}
            {currentSlide === SlideIndex.ActionableFramework && <ActionableFrameworkSlide active={true} />}
            {currentSlide === SlideIndex.StrategicAnalysis && <StrategicAnalysisSlide active={true} />}
            {currentSlide === SlideIndex.BuyerPersonas && <BuyerPersonasSlide active={true} />}
            {currentSlide === SlideIndex.DataValidation && <DataValidationSlide active={true} />}
            {currentSlide === SlideIndex.PainPoints && <PainPointsSlide active={true} />}
            {currentSlide === SlideIndex.MarketPains && <MarketPainsSlide active={true} />}
            {currentSlide === SlideIndex.Goodbye && <GoodbyeSlide active={true} />}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 z-50">
        <span className="text-slate-400 text-sm font-mono">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </span>
        
        {/* PDF Download Button */}
        <button
          onClick={handleGeneratePdf}
          disabled={isGeneratingPdf}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-navy-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider"
        >
          {isGeneratingPdf ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {isGeneratingPdf ? 'Generating...' : 'PDF'}
        </button>

        <div className="w-px h-6 bg-navy-700 mx-2"></div>

        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0 || isGeneratingPdf}
            className="p-2 rounded-full bg-navy-800 hover:bg-teal-500 hover:text-navy-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === TOTAL_SLIDES - 1 || isGeneratingPdf}
            className="p-2 rounded-full bg-navy-800 hover:bg-teal-500 hover:text-navy-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-6 left-6 text-slate-500 text-xs tracking-widest uppercase">
        UniEdu &bull; Governance-First EdTech
      </div>

      {/* Loading Overlay for PDF */}
      {isGeneratingPdf && (
         <div className="absolute inset-0 z-[100] bg-navy-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <Loader2 size={64} className="text-teal-400 animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-white">Generating PDF...</h2>
            <p className="text-slate-400 mt-2">Please wait while we capture all slides.</p>
         </div>
      )}
    </div>
  );
};

export default App;