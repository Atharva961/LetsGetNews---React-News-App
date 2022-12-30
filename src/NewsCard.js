import React from 'react'

export default function NewsCard(props) {
    return (
        <div className='m-3'>
            <div className={`card bg-${props.theme}`}>
                <img src= {!props.imgURL?"nullnews.png":props.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.url} target = "_blank" className="btn btn-outline-primary">Go to Main Article</a>
                    </div>
            </div>

        
        </div>
    )
}
