import dataArray from "../data"
import Article from "./Article"

function About() {
    const renderarticle = dataArray.map(data => {
            return(
              <Article
                    key={data.title}
                    {...data}
                />
                )
        })
    return(
          <section id="about" className="about">
                <div className="container grid grid1x3">
                    {renderarticle}
                </div>
        </section>
    )
}
export default About
