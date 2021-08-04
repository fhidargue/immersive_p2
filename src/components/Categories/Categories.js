import { Link } from "react-router-dom"

const Categories = () => {

    return(
        <section className="categories">
            <div className="categories__wrapper">
                <div className="categories__left">
                    <div className="categories__left--top">  
                        <Link to={`/products/bags`} className="content__left">Bags</Link>
                    </div>
                    <div className="categories__left--bottom">    
                        <Link to={`/products/tees`} className="content__left">Tees</Link>                    
                    </div>
                </div>
                <div className="categories__middle">
                    <img src={`https://i.pinimg.com/originals/98/32/32/983232bbd5eabbb5359dcc08c5dc64b8.jpg`} alt={`Pop Culture Category`} className="categories__middle--img"/>
                    <div className="content__middle">
                        <Link to={`/products/pop-culture`} className="content__middle--link">Pop Culture</Link>
                    </div>
                </div>
                <div className="categories__right">
                    <div className="categories__right--top">
                        <Link to={`/products/band-merch`} className="content__right">Band Merch</Link>
                    </div>
                    <div className="categories__right--bottom">
                        <Link to={`/products/hats`} className="content__right">Hats</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;