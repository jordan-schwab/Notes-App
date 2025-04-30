import { useState } from 'react';

export default function NoteApp() {
  const [title, setTitle] = useState('My Notes');
  const [note, setNote] = useState('');
  const [fontSize, setFontSize] = useState('medium');
  const [fontColor, setFontColor] = useState('black');
  
  const fontSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };
  
  const fontColors = {
    black: 'text-black',
    blue: 'text-blue-600',
    red: 'text-red-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  return (
    <div className="flex flex-col p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Simple Note Taking App</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Note Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter note title"
        />
      </div>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-1">Font Size:</label>
          <select
            value={fontSize}
            onChange={handleFontSizeChange}
            className="p-2 border rounded"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
            <option value="2xl">XXL</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Font Color:</label>
          <select
            value={fontColor}
            onChange={handleFontColorChange}
            className="p-2 border rounded"
          >
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={`w-full p-3 border rounded h-64 ${fontSizes[fontSize]} ${fontColors[fontColor]}`}
          placeholder="Start typing your notes here..."
        />
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className={`whitespace-pre-wrap ${fontSizes[fontSize]} ${fontColors[fontColor]}`}>
          {note || 'Your note will appear here as you type.'}
        </div>
      </div>
    </div>
  );
}