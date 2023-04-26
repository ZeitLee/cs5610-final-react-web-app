import React, { useState, useEffect } from "react";
import { getStores } from "../services/search-service"
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const DealItem = ({ deal }) => {
    const [store, setStore] = useState(null);

    useEffect(() => {
        const fetchStore = async () => {
            const response = await getStores();
            const store = await response.find(store => store.storeID === deal.storeID);
            setStore(store);
        };
        fetchStore();
    }, []);

    if (store === null) {
        return (<div className="list-group-item">
            loading...
        </div>)
    }

    const saving = parseFloat(deal.savings).toFixed(0);

    return (
        <div className="list-group-item mx-3">
            <div className="row mb-3">
                <div className="col-8">
                    <div className="ms-2 my-2">
                        <div className="fw-bold fs-3">
                            Store Name: {store.storeName}
                        </div>
                        <div className="row">
                            <div className="col-4 mt-3">
                                <span className="wd-bg-lightgreen d-inline py-3 px-3">
                                    <span className="d-none d-xl-inline pe-1">
                                        <FontAwesomeIcon icon={faCaretDown} className="pe-3" />
                                        Saving:
                                    </span>
                                    {saving}%
                                </span>

                            </div>

                            <div className="col-8">
                                <div>
                                    Retail Price:
                                    <span className="text-decoration-line-through ps-2 text-muted">
                                        ${deal.retailPrice}
                                    </span>
                                </div>
                                <div>
                                    Current Price: ${deal.price}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-4">
                    <img src={`https://www.cheapshark.com/${store.images.logo}`} alt="store" width="100px" className="float-end"></img>
                </div>
            </div>
        </div >
    );
};
export default DealItem;