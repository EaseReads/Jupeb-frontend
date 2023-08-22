import { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import pdfASimage from "./SOCIAL SCIENCE ART (JUPEB) finish.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfasImage = () => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const prev = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1 >= nextPage ? pageNumber : pageNumber + 1);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full border-[4px] border-blue-950">
        <div className="w-full  flex ">
          <button onClick={prev}>back</button>
          <button onClick={nextPage}>next</button>
        </div>

        <Document file={pdfASimage} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default PdfasImage;
