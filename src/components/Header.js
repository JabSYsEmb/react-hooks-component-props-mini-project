const Header = ({data}) => {
    const {name} = data;
    return (
        <div className="div-header">
            <h1>{name}</h1>
        </div>
    )
}

export default Header;