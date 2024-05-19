
import { Footer } from "../footer/component";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurants = ({ restaurants }) => {
    return (
        <div>
            <h2>{restaurants.name}</h2>
            <h3>Меню</h3>
            <Menu menu={restaurants.menu}/>
            <h3>Отзывы</h3>
            <Reviews reviews={restaurants.reviews}/>
            
        </div>
    )
}
