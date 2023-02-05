import { useState } from "react";

export const HamburgerMenu = ({children}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <label htmlFor="hamburger" className="md:hidden">
                <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} id="hamburger" className="peer hidden"/>
                <span className="block m-1 h-1 w-8 bg-black rounded-lg peer-checked:rotate-[135deg] peer-checked:translate-x-[2.5px] peer-checked:translate-y-[10px] ease-in-out duration-[250ms]"></span>
                <span className="block m-1 h-1 w-8 bg-black rounded-lg peer-checked:opacity-0 ease-in-out duration-[250ms]"></span>
                <span className="block m-1 h-1 w-8 bg-black rounded-lg peer-checked:rotate-[-135deg] peer-checked:translate-x-[3px] peer-checked:translate-y-[-6px] ease-in-out duration-[250ms]"></span>
            </label>
            {/* The navigation bar on mobile-sized screens, hidden behind a hamburger menu */}
            {checked && (
                // TODO: Style this as a half-page overlay
                <nav className="md:hidden">
                    <ul className="list-none inline-flex justify-around items-center gap-12 text-xl text-center">
                        {children}
                    </ul>
                </nav>
            )}
            {/* The navigation bar on desktop-sized screens */}
            <nav className="hidden md:block">
                <ul className="list-none inline-flex justify-around items-center gap-12 text-xl text-center">
                    {children}
                </ul>
            </nav>
        </div>
    );
};