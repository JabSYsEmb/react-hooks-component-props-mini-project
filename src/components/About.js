const About = ({data}) => {
    const {image,about} = data;
    const image_url = image ? image:"https://via.placeholder.com/215"

    return (
        <aside className="aside-about">
            <img src={image_url} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;