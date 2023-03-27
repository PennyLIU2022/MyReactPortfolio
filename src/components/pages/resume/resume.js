import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../assets/resume/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume(){
    return (
        <div>
          <Container fluid className="resume-section">
            <Container className="resume-container">
              <Row className="resume">
                <Document file={resumePDF} className="d-flex justify-content-center">
                  <Page pageNumber={1} renderTextLayer={false} />
                </Document>
              </Row>
    
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button variant="primary" href={resumePDF} target="_blank" style={{ maxWidth: "250px" }}>
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
              </Row>

            </Container>
          </Container>
        </div>
    );
};

export default Resume;