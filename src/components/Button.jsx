export const Button = ({onClick, sticky = false, children}) => {
  // The two colors to switch between
  const inactiveColor = "bg-[#13678A]", activeColor = "bg-[#45C4B0]";
  // Base classes
  const className = "inline-block py-2 px-5 font-bold text-white";
  // If we want the button to be sticky, flip the colors
  const color = sticky ? `${activeColor} hover:${inactiveColor}` : `${inactiveColor} hover:${activeColor}`;

  // Return a styled button, where the text is passed as child prop
  return <button onClick={onClick} className={`${className} ${color}`}>{children}</button>;
};
