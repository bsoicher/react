
import { useState, useEffect } from 'react';



function ColorMode() {
    const [theme, setTheme] = useState('auto');

    useEffect(() => {
        const stored = localStorage.getItem('theme');

        if (stored) {
            localStorage.setItem('theme', 'auto');
        }

        setTheme(stored ? stored : 'auto');
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);

        if (theme === 'auto') {
            const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', preference);
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
 
    }, [theme]);


    const handleClick = (name) => {
        setTheme(name);
        document.documentElement.setAttribute('data-bs-theme', name)
    }


    return (
        <>
            <button onClick={handleClick('light')}>Light</button>
            <button onClick={handleClick('dark')}>Dark</button>
            <button onClick={handleClick('auto')}>Auto</button>
        </>
    );
}


export default ColorMode