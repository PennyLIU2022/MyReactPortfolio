import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../assets/resume/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume(){
    return (
        <div>
          <Container fluid className="resume-section">
            <Container className="resume-container">
              <Col size={12} md={12}>
                <Row className="resume">
                  <Document file={resumePDF} className="d-flex justify-content-center">
                    <Page pageNumber={1} renderTextLayer={false} />
                  </Document>
                </Row>
      
                <Row style={{ justifyContent: "center", position: "relative", }}>
                  <Button variant="primary" href={resumePDF} target="_blank" style={{ maxWidth: "250px" }}>
                      <AiOutlineDownload />
                      &nbsp;Download Resume
                  </Button>
                </Row>
              </Col>
            </Container>
          </Container>
        </div>
    );
};

export default Resume;