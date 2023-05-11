function Health() {
    return(
        <section className="health">
               <div className="values grid">
                <div className="symbiosis grid">
                        <div className="symbols flex flex-col" style={{background: rgb(207, 170, 156)}}>
                                <span className="fa-regular fa-face-laugh-beam"></span>
                            Felling Good
                        </div>
                        <div className="symbols flex flex-col" style={{background: pink}}>
                            <span className="fa-solid fa-dumbbell"></span>
                            Excercise More
                        </div>

                        <div className="symbols flex flex-col" style={{background: skyblue}}>
                            <span className="fa-solid fa-spa"></span>
                            Bright Mind
                        </div>
                        <div className="symbols flex flex-col" style={{background: rgb(147, 211, 147)}}>
                            <span className="fa-solid fa-feather-pointed"></span>
                            Symbiosis Always
                        </div>
                    </div>

                <div className="content values-content">
                    <h2 className="title health-title">Health values</h2>
                    <p className="content health-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam minima delectus culpa dolorum voluptates
                        voluptatem voluptate, velit id beatae blanditiis eum quas, vitae ratione distinctio natus cupiditate maxime.
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a vel similique dolore accusamus magnam
                        autem eaque libero debitis, eius, exercitationem hic natus labore doloremque sit dolorum molestias repudiandae non!
                    </p>
                </div>
               </div>
            </section>
    )
}
export default Health
