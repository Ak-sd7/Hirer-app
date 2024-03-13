import "../Styles/count.css"
import airtable from "../assets/airtable-ar21.svg"
const Infinite_scroller = () => {
  return (
    <div className="imain">
        <div className="scroller">
            <div>
                <img src={airtable}/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
                <img/>
            </div>
        </div>
    </div>
  )
}

export default Infinite_scroller