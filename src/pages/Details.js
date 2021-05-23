import React, {useState, useEffect} from "react"
import MovieDetails from "../components/moviedetails/MovieDetails"
import MovieInfoBar from "../components/movieInfoBar/MovieInfoBar"
import Nav from "../components/Nav/Nav"
import NavigationContent from "../components/navigationContent/NavigationContent"
import {useParams} from "react-router-dom";
import {DETAILS_API} from "../utils/constants"

const Details = () => {
  let copy;
    const {id} = useParams();
    const [details, setDetails] = useState({});
    const moviedetailsApi = DETAILS_API + id + '?api_key='+ process.env.REACT_APP_API_KEY;

    const fetchMovieDetails = async () => {
        
       const req = await fetch(moviedetailsApi);
   
       try{
   
         if(req.status === 200){
           const res = await req.json();
           setDetails(res);
           
         }
   
       }catch(e){
         console.log(e)
       }
   
    };
   
      useEffect(() => {
        fetchMovieDetails()
      }, []);

    return (
        <>
           <Nav />
           <NavigationContent />
           <MovieDetails />
           <MovieInfoBar details={details}/>
        </>
    )
}


export default Details;