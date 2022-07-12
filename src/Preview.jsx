export const Preview = ({compile, pdfUrl}) => {
  return (
    <article className="flex flex-col items-left">
      <div>
      <button onClick={compile}>Compile</button><button>Download</button>
      </div>
      {
        pdfUrl !== "" && <embed src={pdfUrl} width="100%" height="500px" type="application/pdf"></embed>
      }
      {pdfUrl === "" && <div className="h-500"></div>}
    </article>
  )
}