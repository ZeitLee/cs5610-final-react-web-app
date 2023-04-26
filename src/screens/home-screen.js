import React, { useEffect, useState } from "react";
import { findAllReviews } from '../services/review-service'
import NewComponent from '../component/news-component'
import WhoToFollow from '../component/who-to-follow-component'
import Recommendation from '../component/recommendation'
import '../index.css'
import { useSelector } from "react-redux";

const HomeComponent = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        const response = await findAllReviews();
        setReviews(response);
    };

    useEffect(() => {
        fetchReviews()
    }, []);

    return (
        <>
            <div className="row border border-white border-5 rounded wd-bg-lightyellow mt-4">
                <h1 className="text-center display-3 py-2 text-white">Welcome To Price Hunter!</h1>
                <Recommendation />
                <div className="row mt-5 border-top border-white ms-1">
                    <div className="col-8">
                        <h2 className="mx-2 my-3 text-white">What news!</h2>
                        {currentUser && <div className="list-group">
                            {
                                reviews?.map(news =>
                                    <NewComponent news={news} key={news._id} />)
                            }
                        </div>}
                        {!currentUser && <h2 className="ps-5 border rounded border-2 py-3 bg-warning ">Login to see more news!</h2>}
                    </div>

                    <div className="col-4">
                        <WhoToFollow />
                    </div>
                </div>
            </div>

        </>
    );
};
export default HomeComponent;