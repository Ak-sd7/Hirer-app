import "../Styles/count.css";
import airtable from "../assets/airtable-ar21.svg";
import ifttt from "../assets/ifttt-ar21.svg";
import postmate from "../assets/postmates-ar21.svg";
import paypal from "../assets/paypal-ar21.svg";
import gs from "../assets/goldmansachs-ar21.svg";
import ibm from "../assets/ibm-ar21.svg";
import apple from "../assets/apple-ar21.svg";
import mi from "../assets/mi-ar21.svg";

const Infinite_scroller = () => {
  return (
    <div className="imain">
      <div className="scroll-parent">
        <div className="scroller_inner scroll-element primary">
          <img src={airtable} />
          <img src={ifttt} />
          <img src={postmate} />
          <img src={paypal} />
          <img src={gs} />
          <img src={ibm} />
          <img src={apple} />
          <img src={mi} />
        </div>
        <div className="scroller_inner scroll-element secondary">
          <img src={airtable} />
          <img src={ifttt} />
          <img src={postmate} />
          <img src={paypal} />
          <img src={gs} />
          <img src={ibm} />
          <img src={apple} />
          <img src={mi} />
        </div>
      </div>
    </div>
  );
};
// faebd7
export default Infinite_scroller;
