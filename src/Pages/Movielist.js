import movies from './movies.json'
export const Movielist=()=>{
return (
   <div className="Movlmain">
      <h1>this is list of Movies</h1>
      <div className="movie">
        {
            movies.map((e,i)=>{
                return(
                    <div className="movies" key={i}>
                      <img src={e.Poster} alt="" />  
                      <p>Title:{e.Title}</p>
                      <p>Year:{e.Year}</p>
                    </div>
                )
            })
        }
      </div>
   </div> 
)
};