import { Container, Col, Row } from "react-bootstrap";
import "./portfolio.css";
import PortfolioCard from "./portfolioCard";
import Coffee from "../../../assets/images/coffee.png";
import Blog from "../../../assets/images/blog.png";
import Weather from "../../../assets/images/weather.png";
import Note from "../../../assets/images/note.png";
import Schedule from "../../../assets/images/schedule.png";
import Quiz from "../../../assets/images/quiz.png";

function portfolio() {
  return (
    <Container fluid className="portfolio" id="portfolio">
      <Container className="projectContainer">
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Coffee}
              title="Larry's Coffee Shop"
              info="It's a website for a local coffee shop, where users can look at all the coffee products offered and place an order through the inquiry tab to get coffee grounds delivered at home. This site is built on Vanilla JS, tailwind components, Node, Expess, MySQL & HTML-CSS."
              ghLink="https://github.com/PennyLIU2022/larry-coffee-shop"
              appLink="https://larry-coffee.herokuapp.com/"
            />
          </Col>

          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Blog}
              title="Tech Blog"
              info="This application is a CMS-style blog site, where developers can publish their blog posts and comment on other posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
              ghLink="https://github.com/PennyLIU2022/Tech-Blog"
              appLink="https://tech-blog-s.herokuapp.com/"
            />
          </Col>

          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Readme}
              title="Better GitHub Readme"
              info="An application that allows developers the ability to write and edit ReadMe files and push them directly to GitHub. It combines a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused platform."
              ghLink="https://github.com/WeitheFang/better-github-readme"
              appLink="https://better-github-readme.herokuapp.com/"
            />
          </Col>

          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Weather}
              title="Weather Dashboard"
              info="It's a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Besides, it requires to use third-party APIs, where we have access to their data and functionality by making requests with specific parameters to a URL."
              ghLink="https://github.com/PennyLIU2022/Weather-Dashboard"
              appLink="https://pennyliu2022.github.io/Weather-Dashboard/"
            />
          </Col>

          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Note}
              title="Note Taker"
              info="This application, Note Taker, can be used to write and save notes. It uses an Express.js back end and will save and retrieve note data from a JSON file. Also, it allows users to create a note by entering title and notes in the home page and click save, or through the + sign in the navbar. "
              ghLink="https://github.com/PennyLIU2022/Note-Taker"
              appLink="https://note-taker2023.herokuapp.com/"
            />
          </Col>

          <Col size={12} sm={6} md={4} className="card">
            <PortfolioCard
              img={Schedule}
              title="Work Schedule"
              info="It's a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. Also, it uses the Day.js library to work with date and time."
              ghLink="https://github.com/PennyLIU2022/Work-Day-Scheduler"
              appLink="https://pennyliu2022.github.io/Work-Day-Scheduler/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default portfolio;
