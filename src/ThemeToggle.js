import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';

function ThemeToggle() {
    const store = localStorage.getItem('theme');
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState(store || preference);
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);

        if (theme === preference) {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <Button variant="link" onClick={toggleTheme} title="Change theme" className="py-0">
            { theme === 'dark' ? (
                <SunIcon size={24} className="text-light" />
            ) : (
                <MoonIcon size={24} className="text-dark" />
            )}
        </Button>
    );
}

export default ThemeToggle