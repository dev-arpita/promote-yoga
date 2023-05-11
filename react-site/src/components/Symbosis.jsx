/* eslint-disable react/prop-types */
function Symbiosis({icon, backgroundColor, expression}) {
    return(
        <div className="symbiosis grid">
            <div className="symbols flex flex-col" style={{background: backgroundColor}}>
                    <span className={icon}></span>
                {expression}
            </div>
        </div>

    )
}
export default Symbiosis
