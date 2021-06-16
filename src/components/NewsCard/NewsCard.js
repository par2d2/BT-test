import './newsCard.css';
import { shortString } from '../../utils/stringFormatters';

const NewsCard = ({title, url, content, source:{name}}, index) => (
    <div key={`${title}-${index}`} className="newsCardHolder">
        <a href={url} target='_blank' rel="noopener noreferrer">

            <div>
                <h2>{title}</h2>
            </div>

            <div className="newsCardContent">
                <p>{shortString(content, 150)}</p>
            </div>

            <div className="newsCardSource">{name}</div>
        </a>
    </div>
)



export default NewsCard;