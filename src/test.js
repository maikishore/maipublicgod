import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Navbar from "./Commons/Navbar/Navbar";
import pdfss from "./ml.pdf";
import Notecard from "./Pages/Editor/components/Notecard";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default class Test extends Component {
  state = { numPages: null, pageNumber: 1, scales:1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

    scaleUp= () =>
    this.setState((state) => ({ scales: state.scales+0.1}));   
    goToPage = (pagenumber) =>
    this.setState((state) => ({ pageNumber: pagenumber }));
    





  render() {
    const { pageNumber, numPages,scales } = this.state;

    return (
        <div>
            <Navbar />
            <div> 

            <div className="flex flex-col justify-center items-baseline">

<div style={{ width: 600, }} className="flex justify-center items-baseline bg-green-400">
  <button  className="btn btn-square btn-ghost" onClick={this.goToPrevPage}>Prev</button>
  <button className="btn btn-square btn-ghost"  onClick={this.goToNextPage}>Next</button>

</div>

<div
  className="  flex items-center  justify-center"

>
  <Document
    className=""
    file={{url:"http://tdc-www.harvard.edu/Python.pdf"}}
    onLoadSuccess={this.onDocumentLoadSuccess}
  >
    <Page pageNumber={pageNumber} width={600} scale={scales} />
  </Document>

  <Notecard entityList={["a"]}/>
</div>

<p>
  Page {pageNumber} of {numPages}
</p>
<button onClick={this.scaleUp} className="btn btn-ghost">+</button>
<button
  onClick={(e) => {
    console.log(window.getSelection().toString());
  }}
>
  jkasbkbg
</button>
</div>
            </div>
     

      </div>
    );
  }
}
