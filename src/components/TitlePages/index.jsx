import './titlePages.css'

const TitlePages = ({numberPage, descriptionPage}) => {

    return (
        <h3 className="titulo-pages"> <span>{numberPage}</span> {descriptionPage} </h3>
    )
}

export default TitlePages