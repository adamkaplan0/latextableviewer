export const SplitPane = ({children}) => {
  // Split the pane in half and add the children to it
  return (
    <article className="flex flex-col self-stretch gap-4 md:grid md:grid-cols-2 md:place-content-stretch">
      {children}
    </article>
  )
};