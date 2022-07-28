import './Pagination.css'

const Pagination = (props) => {
    const {data,pageHandler} = props

    const pageNumArray = []
    for(let i = 1 ; i < Math.ceil(data.length/10) + 1 ; i++){
        pageNumArray.push(i)
    }

    return(
        <div className="page-numbers-container">
            {pageNumArray.map(num => <button key={num} className="page-num-btn" onClick={() => pageHandler(num)}>{num}</button>)}
        </div>
    )
}

export default Pagination