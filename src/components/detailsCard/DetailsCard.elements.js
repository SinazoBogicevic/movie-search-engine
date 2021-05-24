import styled from "styled-components";


export const DetailsCardContainer = styled.div`
display: grid;
grid-template-columns: 25% 1fr;
max-width: 95%;
background: rgba(0, 0, 0, 0.7);
border-radius: 20px;
color: var(--white);
font-family: 'Abel', sans-serif;
margin: 40px 20px;
@media screen and (max-width: 900px){
    grid-template-columns: 100%;
    max-width: 80%
}
`;

export const CardImageContainer = styled.div`
width: 100%;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
transition: all 0.3s ease 0s;
object-fit: cover;
border-radius: 20px;
`;

export const Details = styled.div`
display: flex;
align-items: center;
`;

export const DetailsInnerContainer = styled.div`
padding: 40px 20px;
`;

export const  DetailsPlot = styled.p`
margin-bottom: 12px
`;

export const DetailsTitle = styled.h1`
font-size: 2rem;
font-weight: 700;
margin-bottom: 12px
`;

export const DetailsPlotTitle = styled.h3`
font-size: 1.4rem;
font-weight: 600;
margin-bottom: 12px
`;

export const Generics = styled.div`
display: flex;
margin-bottom: 12px
`

export const GenericContainer =styled.div`
display: flex;
flex-direction: column;
margin-right: 1.5rem;
`;

export const GenericTitle = styled.h4`
margin-bottom: 8px
`;
 
export const Typography = styled.p``;

export const Circle = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--white);
color: transparent;
border-radius: 50%;
width: 30%;
padding: 4px 12px;
`;

export const RatingTypography = styled(Typography)`
color: rgba(0,0,0,0.9)

`