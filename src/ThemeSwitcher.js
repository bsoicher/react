import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@primer/octicons-react';

import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

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
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Switch theme</Tooltip>}>
            <Nav.Link href="#" onClick={toggleTheme} className={className}>
                {theme === 'dark' ? (
                    <SunIcon size={22} className="text-light" />
                ) : (
                    <MoonIcon size={22} className="text-dark" />
                )}
            </Nav.Link>
        </OverlayTrigger>
    );
}

export default ThemeSwitcher;