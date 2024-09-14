import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function HorizontalExample() {
  return (
    <div className="d-flex justify-content-center flex-wrap ">
      <div className="p-2">
        <FontAwesomeIcon icon={faReact} size="4x"  />
      </div>
      <div className="p-2">
        <FontAwesomeIcon icon={faBootstrap} size="4x" />
      </div>
      <div className="p-2">
        <FontAwesomeIcon icon={faHtml5} size="4x" />
      </div>
      <div className="p-2">
        <FontAwesomeIcon icon={faCss3} size="4x" />
      </div>
      <div className="p-2">
        <FontAwesomeIcon icon={faJs} size="4x" />
      </div>
    </div>
  );
}

export default HorizontalExample;
