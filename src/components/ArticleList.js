import Article from "./Article";

const ArticleList = ({posts}) => {
    console.log("posts",posts)
    return (
        <main className="main-articlelist">
            {posts.map(({id,title,date,preview,minutes}) => <Article key={id} 
                                                                   title={title} 
                                                                   date={date} 
                                                                   preview={preview} 
                                                                   minutes={minutes}/>)}
        </main>
    )
}

export default ArticleList;