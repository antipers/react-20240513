import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
    return (<ul>
        {reviews.map((r) => <li><Review review={r.text} /></li>)}
    </ul>
    )
}

