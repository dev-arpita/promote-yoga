/* eslint-disable react/prop-types */


function Article({img, title, subtitle}) {

    return(
            <article className="about-articles">
               <img className="about-img"
                    src={img}
                    alt=""/>
                <h2 className="title about-article-title">{title}</h2>
                <p className="about-article-subtitle">{subtitle}</p>
            </article>
    )
}
export default Article
