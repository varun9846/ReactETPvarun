import { useState, useEffect } from "react"
export const Apifetch = () => {
    const [state, setState] = useState(10);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json();
            setData(res);
        }
        getData();
    }, [state])
    return (
        <div className="Apifetch">
            <h1>Api fetch Function</h1>
            <button onClick={() => setState(state + 5)}>Click Me {state}</button>
            <div className="apidat">
                <div className="apidatval">
                    <div className="apval">   <h4>Index</h4></div>
                    <div className="apval">    <h4>Firstname</h4></div>
                    <div className="apval">   <h4>Lastname</h4></div>
                    <div className="apval">  <h4>Email</h4></div>
                </div>
                {
                    data.map((e, i) => {
                        return (
                            <data className="apidatval">
                                <div className="apval"><h4>{i + 1}</h4></div>
                                <div className="apval"> <h4>{e.firstName}</h4></div>
                                <div className="apval">    <h4>{e.lastName}</h4></div>
                                <div className="apval"><h4>{e.email}</h4></div>
                            </data>
                        )
                    })
                }
            </div>
        </div>
    )
}