import { useState } from "react";
import data from '../data.json'
export const Searchq = () => {
    const [searchterm, setsearchterm] = useState("");
    const handlechange = (event) => {
        setsearchterm(event.target.value);
    }
    return (
        <div className="sqit">
            <input type="text"
                placeholder='search...'
                id='search'
                value={searchterm}
                onChange={handlechange} />
            <div className="stt">

                {

                    data.filter((val) => {
                        if (searchterm === "") {
                            return val;
                        }
                        else if (val.firstName.toLowerCase().includes(searchterm.toLowerCase())) {
                            return val;
                        }
                        else {
                            return false;
                        }
                    }).map((val, i) => {
                        return (
                            <div className="st" key={i}>
                                <div className="st1">
                                    <p>{val.firstName}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    );
}
