import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {DETAILS_API, IMDB, PLOT} from "../..//utils/constants";
import {DetailsCardContainer, CardImageContainer, Details, Image,Generics, RatingTypography,
    Circle, DetailsInnerContainer, DetailsPlot, GenericContainer, GenericTitle,
    Typography, DetailsTitle, DetailsPlotTitle} from "./DetailsCard.elements";

const DetailsCard = () => {
    const {id} = useParams();
  const moviedetailsApi = DETAILS_API + id + '?api_key='+ process.env.REACT_APP_API_KEY;
  const [details, setDetails] = useState({
      imgUrl:'',
      title: '',
      plot: '',
      rating: 0,
      director: ''
  })  

  const fetchMovieDetails = async () => {
      
     const req = await fetch(moviedetailsApi);
 
     try{
 
       if(req.status === 200){
         const res = await req.json();
         
         const {poster_path, title, overview, vote_average, } = res;
         
         const url = `https://image.tmdb.org/t/p/w500/${res.poster_path}`;
         setDetails((prevState) => ({
             ...prevState,
             imgUrl: url,
             title: title,
             plot: overview,
             rating: vote_average
         }));
         console.log(details.plot);

       }
 
     }catch(e){
       console.log(e)
     }
 
  };
 
    useEffect(() => {
      fetchMovieDetails()
    }, []);
    return (
        <DetailsCardContainer>
            <CardImageContainer>
                <Image src={details.imgUrl} alt={details.title + " poster"}/>
            </CardImageContainer>
            <Details>
                <DetailsInnerContainer>
                    <DetailsTitle>{details.title}</DetailsTitle>
                    <DetailsPlotTitle>{PLOT}</DetailsPlotTitle>
                    <DetailsPlot>{details.plot}</DetailsPlot>
                    <Generics>
                    <GenericContainer>
                        <GenericTitle>{IMDB}</GenericTitle>
                        <Circle>
                        <RatingTypography>{details.rating}</RatingTypography>
                        </Circle>
                    </GenericContainer>
                    <GenericContainer>
                        <GenericTitle>Director</GenericTitle>
                        <Typography>name</Typography>
                    </GenericContainer>
                    </Generics>
                </DetailsInnerContainer>
            </Details>
        </DetailsCardContainer>
    )
}

export default DetailsCard;