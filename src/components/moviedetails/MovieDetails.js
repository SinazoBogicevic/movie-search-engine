import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Container, BgContainer} from "../Hero/hero.elements";
import {DETAILS_API } from "../../utils/constants";
import DetailsCard from "../detailsCard/DetailsCard";

const MovieDetails = () => {
  const {id} = useParams();
  const moviedetailsApi = DETAILS_API + id + '?api_key='+ process.env.REACT_APP_API_KEY;

  const [bg, setBg] = useState("");
    
    //const {backdrop_path} = details;
    const styles = {
      height: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${bg})`,
    };

  const fetchMovieDetails = async () => {
      
     const req = await fetch(moviedetailsApi);
 
     try{
 
       if(req.status === 200){
         const res = await req.json();
         const url = `https://image.tmdb.org/t/p/w1280/${res.backdrop_path}`;
         setBg(url);

       }
 
     }catch(e){
       console.log(e)
     }
 
  };
 
    useEffect(() => {
      fetchMovieDetails()
    }, []);

    return (
        <Container styles={{height: 'fit-content'}}>
            <BgContainer style={styles}>
              <DetailsCard />
            </BgContainer>
        </Container>
    )
};

export default MovieDetails;