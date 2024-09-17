import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@primer/octicons-react';

import { Link, Octicon } from '@primer/react';

function ThemeSwitcher({ className }) {
    const store = localStorage.getItem('theme');
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState(store || preference);
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (

        <Link href="#" onClick={toggleTheme} className={className}>
            {theme === 'dark' ? (
                <Octicon icon={SunIcon} size={24} sx={{ mr: 2}} />
            ) : (
                <Octicon icon={MoonIcon} size={24} sx={{ mr: 2}} />
            )}
        </Link>

    );
}

export default ThemeSwitcher;