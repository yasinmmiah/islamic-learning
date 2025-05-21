import React, { useRef, useEffect, useState } from 'react';

interface ColoringCanvasProps {
  template: string;
  width?: number;
  height?: number;
  onComplete?: () => void;
}

const ColoringCanvas: React.FC<ColoringCanvasProps> = ({
  template,
  width = 600,
  height = 600,
  onComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#4CAF50');
  const [progress, setProgress] = useState(0);

  const colors = [
    '#4CAF50', // Green
    '#2196F3', // Blue
    '#9C27B0', // Purple
    '#FF9800', // Orange
    '#F44336', // Red
    '#FFEB3B', // Yellow
    '#795548', // Brown
    '#607D8B', // Gray
    '#000000', // Black
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
    
    // Draw template outline
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    // Example: Draw a simple Islamic geometric pattern
    // In a real app, you would load actual pattern templates
    const drawPattern = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      const size = Math.min(width, height) * 0.4;
      
      // Draw an 8-pointed star
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI / 4) * i;
        const x = centerX + size * Math.cos(angle);
        const y = centerY + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
      
      // Draw inner pattern
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle1 = (Math.PI / 4) * i;
        const angle2 = (Math.PI / 4) * ((i + 2) % 8);
        const x1 = centerX + size * 0.5 * Math.cos(angle1);
        const y1 = centerY + size * 0.5 * Math.sin(angle1);
        const x2 = centerX + size * 0.5 * Math.cos(angle2);
        const y2 = centerY + size * 0.5 * Math.sin(angle2);
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();
    };

    // Draw different patterns based on template
    switch (template) {
      case 'geometric':
        drawPattern();
        break;
      case 'mosque':
        // Draw mosque outline
        ctx.beginPath();
        ctx.arc(width/2, height*0.6, width*0.3, Math.PI, 0);
        ctx.lineTo(width*0.8, height*0.2);
        ctx.lineTo(width*0.5, height*0.1);
        ctx.lineTo(width*0.2, height*0.2);
        ctx.closePath();
        ctx.stroke();
        break;
      case 'flower':
        // Draw flower pattern
        for (let i = 0; i < 8; i++) {
          const angle = (Math.PI / 4) * i;
          ctx.beginPath();
          ctx.ellipse(
            width/2 + Math.cos(angle) * 100,
            height/2 + Math.sin(angle) * 100,
            50, 20,
            angle,
            0, Math.PI * 2
          );
          ctx.stroke();
        }
        break;
      default:
        drawPattern();
    }
  }, [template, width, height]);

  const fill = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    // Simple flood fill algorithm
    const startPos = (y * canvas.width + x) * 4;
    const startR = pixels[startPos];
    const startG = pixels[startPos + 1];
    const startB = pixels[startPos + 2];

    const matchStartColor = (pos: number) => {
      return (
        pixels[pos] === startR &&
        pixels[pos + 1] === startG &&
        pixels[pos + 2] === startB
      );
    };

    const colorR = parseInt(currentColor.slice(1, 3), 16);
    const colorG = parseInt(currentColor.slice(3, 5), 16);
    const colorB = parseInt(currentColor.slice(5, 7), 16);

    const stack = [startPos];
    while (stack.length) {
      const pos = stack.pop()!;

      if (pos < 0 || pos >= pixels.length) continue;
      if (!matchStartColor(pos)) continue;

      pixels[pos] = colorR;
      pixels[pos + 1] = colorG;
      pixels[pos + 2] = colorB;
      pixels[pos + 3] = 255;

      stack.push(
        pos + 4,        // right
        pos - 4,        // left
        pos + canvas.width * 4,  // down
        pos - canvas.width * 4   // up
      );
    }

    ctx.putImageData(imageData, 0, 0);
    
    // Update progress
    setProgress(prev => {
      const newProgress = Math.min(prev + 5, 100);
      if (newProgress === 100 && onComplete) {
        onComplete();
      }
      return newProgress;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      fill(x, y);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      fill(x, y);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      fill(x, y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      fill(x, y);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full ${
              color === currentColor ? 'ring-2 ring-offset-2 ring-black' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
      
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-2 border-[var(--neutral-200)] rounded-lg touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      
      <div className="w-full mt-4">
        <div className="progress-bar">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ColoringCanvas;