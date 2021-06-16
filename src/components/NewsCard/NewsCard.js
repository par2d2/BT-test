const NewsCard = ({title, url, author, content}, index) => {
    return (<div key={`${title}-${index}`}>
        <a href={url} target='_blank' rel="noopener noreferrer">

            <div>
                <h2>{title}gfhgfhgfh</h2>
            </div>

            <div>{author}</div>

            <div>
                {content}
            </div>

        </a>
    </div>
    )
}


export default NewsCard;