import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
// right after your imports
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
     <Document
  file={{ url: "https://cors-anywhere.herokuapp.com"+ "//www.tutorialspoint.com/python3/python_tutorial.pdfm"}}
  onLoadSuccess={onDocumentLoadSuccess}
>
 
</Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default Test;