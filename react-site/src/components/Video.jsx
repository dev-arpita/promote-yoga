/* eslint-disable react/no-unknown-property */
function Video() {
    return(
        <section className="video">
                <div className="container flex">
                    <h2 className="title video-title">Trending video</h2>

                        <iframe className="video-frame" src="https://www.youtube.com/embed/Z7ZWbk-_jw4"
                            title="Grow Taller With Fun Exercise | Exercise At Home  |Kids Exercise" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen controls aria-label="Trending video">
                        </iframe>

                    <p className="video-lable">Transforming a virtual force to the spiritual level</p>
                    <p className="content video-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam minima delectus culpa dolorum voluptates
                        voluptatem voluptate, velit id beatae blanditiis eum quas, vitae ratione distinctio natus cupiditate maxime.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, eum est beatae ratione voluptatem nulla natus expedita suscipit. Nulla debitis totam error veritatis dolorum cupiditate possimus earum pariatur obcaecati laborum? Itaque suscipit magnam quasi labore necessitatibus at atque ex blanditiis quae qui fugit minus explicabo quaerat quas quibusdam, commodi vitae.
                    </p>

                </div>
            </section>
    )
}
export default Video
