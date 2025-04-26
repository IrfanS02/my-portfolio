import React, { useEffect, useState } from 'react';
import './theme-switcher.css';
import { IoMdColorPalette } from "react-icons/io";

const ThemeSwitcher = () => {
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  // Available theme colors
  const themes = [
    { name: 'default', primary: '#4db5ff', background: '#1f1f38' },
    { name: 'navyGold', primary: '#ffd700', background: '#000080' },
    { name: 'blackRed', primary: '#ff0000', background: '#000000' },
    { name: 'whiteBlack', primary: '#ffffff', background: '#121212' },
    { name: 'blueEmerald', primary: '#2ecc71', background: '#0066cc' },
    { name: 'grayPink', primary: '#ff69b4', background: '#2c2c2c' },
    { name: 'purpleYellow', primary: '#ffdf00', background: '#6a0dad' },
    { name: 'yellowBlack', primary: '#ffff00', background: '#000000' }
  ];

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleThemeOptions = () => {
    setShowThemeOptions(!showThemeOptions);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
    setShowThemeOptions(false);
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-switcher-btn" 
        onClick={toggleThemeOptions}
        title="Change Theme"
      >
        <IoMdColorPalette />
      </button>
      
      {showThemeOptions && (
        <div className="theme-options">
          {themes.map((theme) => (
            <button
              key={theme.name}
              className={`theme-option ${currentTheme === theme.name ? 'active' : ''}`}
              style={{ 
                backgroundColor: theme.background,
                borderColor: theme.primary 
              }}
              onClick={() => handleThemeChange(theme.name)}
              title={theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
            >
              <span 
                className="theme-color" 
                style={{ backgroundColor: theme.primary }}
              ></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;