export const Button = ({onClick, sticky = false, children}) => {
  // The two colors to switch between
  const inactiveColor = "bg-inactive", activeColor = "bg-active";
  // Base classes
  const baseClasses = "inline-block py-2 px-5 font-bold text-white";
  // If we want the button to be sticky, flip the colors
  const color = sticky ? `${activeColor} hover:${inactiveColor}` : `${inactiveColor} hover:${activeColor}`;

  // Return a styled button, where the text is passed as child prop
  return <button onClick={onClick} className={`${baseClasses} ${color}`}>{children}</button>;
};
