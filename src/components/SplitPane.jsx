export const SplitPane = ({children}) => {
  // Split the pane in half and add the children to it
  return (
    <article className="grid grid-cols-2 gap-4 items-left place-content-stretch">
      {children}
    </article>
  )
};