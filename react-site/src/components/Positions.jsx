import PositionProcess from "./PositionProcess"
import PositionDetails from "./PositionDetails"
import PositionImage from "./PositionImage"
function Positions() {
    return (
        <section className="yoga-positions grid">
            <PositionImage/>
            <div className="pose-details">
                <PositionDetails/>
                <hr/>
                <PositionProcess/>
            </div>
        </section>
    )
}
export default Positions
