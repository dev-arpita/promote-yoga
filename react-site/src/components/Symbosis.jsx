/* eslint-disable react/prop-types */
function Symbiosis({icon, backgroundColor, expression}) {
    return(
            <div className="symbols flex flex-col" style={{background: backgroundColor}}>
                    <span className={icon}></span>
                {expression}
            </div>
    )
}
export default Symbiosis
