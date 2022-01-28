const MinutesToRead = ({minutes}) => {
    const ONE_CUP_FOR_EACH_MIN = 5;
    const ONE_BENTO_BOX_FOR_EACH_MIN = 10;

    const howManyTakesToFinishTheArticle = (minutes) => minutes <= 30
     ? howManyCupIn(minutes,ONE_CUP_FOR_EACH_MIN):howManyBentoBoxIn(minutes,ONE_BENTO_BOX_FOR_EACH_MIN)

    const howManyBentoBoxIn = (minutes, oneBentoBoxFor) => "🍱".repeat(Math.round(minutes/oneBentoBoxFor))
    const howManyCupIn = (minutes, oneCupFor) => "☕".repeat(Math.round(minutes/oneCupFor))

    return (
        <small>
            {howManyTakesToFinishTheArticle(minutes)} {minutes} min read
        </small>
    )
}

const Article = ({title, date, preview, minutes}) => {
    let DEFAULT_DATE = "January 1, 1970";
    return (
        <article className="article-blog">
            <h3>{title}</h3>
            <small>{date ? date:DEFAULT_DATE} • <MinutesToRead minutes={minutes}/></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;