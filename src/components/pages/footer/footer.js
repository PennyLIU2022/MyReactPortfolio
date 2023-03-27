import GithubLogo from "../../../assets/images/github.png";
import LinkedinLogo from "../../../assets/images/linkedin.png";
import StackLogo from "../../../assets/images/stack-overflow.png";
import "./footer.css"

function footer(){
    return (
      <footer class="d-flex justify-content-around" style={{ backgroundColor: "lightgrey",}}>
        <div className="footer-icon">
          <a
            href="https://github.com/PennyLIU2022"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubLogo} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/liqiong-liu-317b99179/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinLogo} alt="linkedin" />
          </a>
          <a
            href="https://stackoverflow.com/users/20145599/pennyliu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={StackLogo} alt="stack-overflow" />
          </a>
        </div>
      </footer>
    )
}

export default footer;