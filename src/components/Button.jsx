export const Button = ({onClick, sticky = false, children}) => {
  // If we want the button to be sticky, flip the colors
  const dynamicBorder = sticky ? `border-dotted hover:border-solid` : `border-solid hover:border-dotted`;

  // Return a styled button, where the text is passed as child prop
  return (<button
    onClick={onClick}
    className={`inline-block py-2 px-3 font-bold text-black border-2 border-black ${dynamicBorder}`}>
      {children}
    </button>
  );
};
