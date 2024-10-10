import React from "react"

const Pagination= (p) =>{ 
    let pages = []
    // const pagesLength = Math.ceil(p.eventLength/p.eventPerPage)


    for(let i=1;i<= p.totalPages;i++){
        pages.push(i)
    }
    return(
        <div>
            {
    pages.map((page, i) =>{
                return <button className="button-pagination btn btn-light" key={i} onClick={() => p.setPage(page)}>{page}</button>
            })}
        </div>
    )
}

export default Pagination