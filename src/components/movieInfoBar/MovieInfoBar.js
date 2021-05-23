import React, {useState, useEffect} from "react";
import { InfoBar } from "./movieInfoBar.elements";
import {Space} from "../../GlobalStyles";
import {DETAILS_API} from "../../utils/constants";
import {useParams} from "react-router-dom";


const MovieInfoBar = () => {
    const {id} = useParams();
    const [runtime, setRuntime] = useState(1);
    const [budget, setBudget] = useState(1);
    const [revenue, setRevenue] = useState(1)
    const moviedetailsApi = DETAILS_API + id + '?api_key='+ process.env.REACT_APP_API_KEY;
  
    const fetchMovieDetails = async () => {
        
       const req = await fetch(moviedetailsApi);
   
       try{
   
         if(req.status === 200){
           const res = await req.json();
           const {budget, runtime, revenue} = res;
           setRuntime(runtime);
           setBudget(budget);
           setRevenue(revenue);
  
         }
   
       }catch(e){
         console.log(e)
       }
   
    };
   
      useEffect(() => {
        fetchMovieDetails()
      }, []);
    
    return(
        <InfoBar>
            <p>Running time:<Space>{runtime}</Space> </p>
            <p>Budget: <Space>{budget}</Space></p>
            <p>Revenue: <Space>{revenue}</Space></p>
        </InfoBar>
    )
}


export default MovieInfoBar;