import Symbiosis from "./Symbosis"
import symbosisArray from "../../symbosis"
import HealthValues from "./HealthValues"

function Health() {
    const symbiosisEl = symbosisArray.map( symbols => {
        return(
            <Symbiosis
                key={symbols.expression}
                icon = {symbols.icon}
                backgroundColor= {symbols.backgroundColor}
                expression= {symbols.expression}
            />
        )
    })
    return(
        <section className="health">
            <div className="values grid">
            <div className="symbiosis grid">
                {symbiosisEl}
            </div>
            <HealthValues/>
            </div>
        </section>
    )
}
export default Health
