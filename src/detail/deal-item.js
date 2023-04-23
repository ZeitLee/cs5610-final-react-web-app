import React, { useState, useEffect } from "react";
import { getStores } from "../services/search-service"
import "../index.css"

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
        return (<li className="list-group-item">
            loading...
        </li>)
    }

    const saving = parseFloat(deal.savings).toFixed(2);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-4">
                    <img src={`https://www.cheapshark.com/${store.images.logo}`} alt="store"></img>
                </div>

                <div className="col-8">
                    <div>
                        Store Name: {store.storeName}
                    </div>
                    <div>
                        Current Price: ${deal.price}
                    </div>
                    <div>
                        Retail Price: ${deal.retailPrice}
                    </div>
                    <div>
                        Saving: {saving}%
                    </div>
                </div>
            </div>
        </li >
    );
};
export default DealItem;