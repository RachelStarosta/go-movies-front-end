import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
      <div className = "container">
        <div className = "row">
          <div className = "col">
            <h1 className = "mb-3"> Go Watch A Movie</h1>
          </div>
          <div className = "col text-end">
            <Link to= "/login"><span className = "badge badge-success"> Login </span></Link>
          </div>
          <hr className = "mb-3"></hr>   {/**This cannot have a space between*/}
        </div>
        <div className = "row">
          <div className = "col-md-2">
            <nav>
              <div className="list-group">
                <Link to= "/" className="list-group-item list-group-item-action">Home</Link>
                <Link to= "/movies" className="list-group-item list-group-item-action">Movies</Link>
                <Link to= "/genres" className="list-group-item list-group-item-action">Genres</Link>
                <Link to= "/admin/movie/0" className="list-group-item list-group-item-action">Add Movie</Link>
                <Link to= "/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                <Link to= "/graphql" className="list-group-item list-group-item-action">Use GraphQL</Link>
              </div>
            </nav>
          </div>
          <div className="col-md-10"> 
            <Outlet/> 
          </div>
        </div>
      </div>
  );
}

export default App;