import React, { useRef, useEffect, useState } from 'react';

interface TracingCanvasProps {
  template: string;
  width?: number;
  height?: number;
  color?: string;
  onComplete?: () => void;
}

const TracingCanvas: React.FC<TracingCanvasProps> = ({
  template,
  width = 300,
  height = 300,
  color = 'var(--primary)',
  onComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Load template image
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw template (placeholder - in a real app, you'd use an actual template image)
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 20;
    ctx.beginPath();
    
    // Example: Draw a simple shape based on the template parameter
    // In a real app, you would load an actual image for each letter or number
    if (template === 'circle') {
      ctx.arc(width / 2, height / 2, 80, 0, Math.PI * 2);
    } else if (template === 'square') {
      ctx.rect(width / 4, height / 4, width / 2, height / 2);
    } else {
      // Default: draw a line
      ctx.moveTo(width / 4, height / 2);
      ctx.lineTo(width * 3 / 4, height / 2);
    }
    
    ctx.stroke();
    
    // Reset progress
    setProgress(0);
  }, [template, width, height]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    
    // Get position
    let x, y;
    if ('touches' in e) {
      // Touch event
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Get position
    let x, y;
    if ('touches' in e) {
      // Touch event
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
    
    // Update progress (simplified - in a real app, you'd use more sophisticated tracking)
    setProgress(prev => {
      const newProgress = Math.min(prev + 1, 100);
      if (newProgress === 100 && onComplete) {
        onComplete();
      }
      return newProgress;
    });
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="tracing-canvas bg-white mb-2"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={endDrawing}
      />
      <div className="w-full progress-bar">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TracingCanvas;