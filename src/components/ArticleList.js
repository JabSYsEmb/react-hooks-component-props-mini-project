import Article from "./Article";

const ArticleList = ({data}) => {
    const {posts} = data;
    return (
        <main className="main-articlelist">
            {posts.map(article => <Article key={article.id} article={article}/>)}
        </main>
    )
}

export default ArticleList;