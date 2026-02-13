interface CarouselControlsProps {
  progress: number;
  onScroll: (dir: 'left' | 'right') => void;
}

export const CarouselControls = ({ progress, onScroll }: CarouselControlsProps) => (
  <div className="flex items-center justify-between mt-8">
    {/* Progress Line */}
    <div className="flex-1 h-[1px] bg-gray-200 mr-8 relative">
      <div 
        className="absolute top-0 left-0 h-full bg-black transition-all duration-300 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
    
    {/* Navigation Buttons */}
    <div className="flex gap-2">
      <button 
        onClick={() => onScroll('left')} 
        className="p-3 border border-black hover:bg-black hover:text-white transition-colors"
        aria-label="Scroll Left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => onScroll('right')} 
        className="p-3 border border-black hover:bg-black hover:text-white transition-colors"
        aria-label="Scroll Right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);