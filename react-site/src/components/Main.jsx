import Hero from "./Hero"
import About from "./About"
import Positions from "./Positions"
import Breathing from "./Breathing"
import Health from "./Health"
import Video from "./Video"
function Main() {

    return(
        <main className="main-section">
            <Hero/>
            <About/>
            <Positions/>
            <Breathing/>
            <Health/>
            <Video/>
        </main>
    )
}
export default Main
