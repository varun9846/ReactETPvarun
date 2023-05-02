import { useState } from "react";

export const Recordkeep = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({...form,form});
  };
  const remove =(index)=>{
let arr=data;
arr.splice(index,1);
setData([...arr]);
  }

  return (
    <>
    <h1 id="RK">Record keeping form question-3</h1>
    <div >
      <form className="Recordkeep">
        <div className="RKD">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value })}
          />
        </div>
        <div className="RKD">
          <label htmlFor="number">Contact:</label>
          <input
            type="number"
            id="number"
            placeholder="number"
            value={form.number}
            onChange={(e) => setForm({...form, number: e.target.value })}
          />
        </div>
        <div className="RKD">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value })}
          />
        </div>
        <button id="add" onClick={addData}>ADD</button>
      </form>
       <div className="data">
        <div className="datamain">
               <h4>NAME:</h4>
               <h4>CONTACT</h4>
               <h4>EMAIL-ID</h4>
               <h4>Remove</h4>


        </div>
       </div>

      <div className="data">
        {
          data.map((e,i)=>{
            return(
              <div className="datamain" key={i}>
                <h4>{e.name}</h4>
                <h4>{e.number}</h4>
                <h4>{e.email}</h4>
                <button onClick={()=>remove(i)} id="del">X</button>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  );
};
