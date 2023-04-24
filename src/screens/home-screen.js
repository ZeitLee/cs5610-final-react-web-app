import React, { useEffect, useState } from "react";
import { getNews } from '../services/search-service'
import { findAllReviews } from '../services/review-service'
import NewComponent from '../component/news-component'

const HomeComponent = () => {
    // const [news, setNews] = useState(null);
    const [reviews, setReviews] = useState([]);

    // // const fetchNews = async () => {
    // //     const response = await getNews();
    // //     setNews(response);
    // // };

    const fetchReviews = async () => {
        const response = await findAllReviews();
        setReviews(response);
    };

    useEffect(() => {
        fetchReviews()
    }, []);


    return (
        <>
            <h1>Home </h1>
            <div className="border rounded ">
                <h2 className="mx-2">What is news!</h2>

                <div className="list-group">
                    {
                        reviews?.map(news =>
                            <NewComponent news={news} />)
                    }
                </div>

            </div>

        </>
    );
};
export default HomeComponent;