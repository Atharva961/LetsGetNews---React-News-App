import React, { useContext, useEffect, useState } from 'react';
import NewsCard from './NewsCard';

export default function News(props) {

    const [newsArray, setNewsArray] = useState([]);
    let [pageSize, setpageSize] = useState(16);
    let [page, setPage] = useState(1);
    let [totalArticles, settotalArticles] = useState(0);
    let [totalPages, setTotalPages] = useState(0);
    let [pageArray, setPageArray] = useState([]);
    const [apiKey1, setapiKey1] = useState("581ba03c744841d3bd6c16bf7c4c208e");
    const [apiKey2, setapiKey2] = useState("0ddd3d2045f34f46a6a6d1a0d7db89f9");

    

    useEffect(() => {
        const getNews = async () => {
            // console.log("API called");
            await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}&category=${props.category}&page=1&pageSize=${pageSize}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    setNewsArray(data.articles);
                    settotalArticles(data.totalResults);
                    setTotalPages(Math.ceil(data.totalResults / pageSize));
                })
            // console.log("Displaying news array", newsArray);

        }

        getNews();
    }, []);

    const handleNextClick = async () => {
        console.log(page);

        console.log(page);
        console.log(props.category);
        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}&category=${props.category}&page=${page + 1}&pageSize=${pageSize}`)
            .then(response => response.json())
            .then(data => {
                setNewsArray(data.articles);
            })
        setPage(page + 1);
    }


    const handlePrevClick = async () => {
        console.log(page);
        if (page > 1) {

            console.log(page);
            await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}&category=${props.category}&page=${page - 1}&pageSize=${pageSize}`)
                .then(response => response.json())
                .then(data => {
                    setNewsArray(data.articles);
                })
            setPage(page - 1);
        }
        else return;
    }


    return (
        <div>
            <h2>LetsGetNews - Top Headlines on {props.category}</h2>
            <div className="row">
                {

                    newsArray.map(news => {
                        // console.log(news.title);
                        return <div key={news.url} className="col-md-3">
                            <NewsCard title={news.title} description={news.description} imgURL={news.urlToImage} url={news.url} theme = {props.theme}/>
                        </div>
                    })
                }
            </div>

            <div className='d-flex justify-content-between m-3'>
                <button className="btn btn-outline-primary" disabled={page === 1 ? true : false} onClick={handlePrevClick}>&larr;Previous</button>
                
                <button className="btn btn-outline-primary" disabled={page + 1 > Math.ceil(totalArticles / pageSize)} onClick={handleNextClick}>Next&rarr;</button>
            </div>
        </div >
    )
}
