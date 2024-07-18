import { Box, Link, Rating } from "@mui/material"
import { Colors} from "../../core/colors";
import "./Experience.css"


export default function ExperienceCard({ experience, key }: Props,) 
  {
  
  return (
   
    <Box 
    sx={{
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:'flex',
      borderRadius: "0 0 40% 40%",
      TextOverflow: "ellipsis",
      width:'387px',
      height:"489px",
      position: "static",
      background : "linear-gradient(#071520,#0D2D45)",
      border:"solid 3px #0F5C73"
    }}
     
    key={key}>
      <Box 
      sx={{width:"100%",
            paddingTop:"15px",
            height:"70px",
            paddingLeft:"30px",
            paddingRight:"30px",
            display:"flex",
            gap: "150px",
            background:"radial-gradient(50px at 50% -20%,#0D2D45,#071520)"}}
      >
       <img src="/src/assets/img/Experiences/Guillemets.png" style={{ height:"48px"}} alt=""/>
       <Rating name="read-only" value={experience.rating}  precision={0.5}
       readOnly/>
      </Box>
      
      <Box
        width='50%'
        paddingTop="20px"
        paddingLeft="30px"
        
      >
        <h3
          style={{
            color: Colors.ORANGE,
            fontFamily: 'Cabin',
            fontSize: '28px',
            lineHeight: '29px',
            fontWeight: "bold",
          }}
        >{experience.title}</h3>
      </Box>
      <Box
      paddingTop="30px"
      paddingLeft="30px"
      fontSize= '22px'
      fontFamily="Cabin"
      lineHeight="31px"
      paddingX="30px"
      height="230px"
      textAlign= "start"
      >
      «{experience.commentary}»
      </Box>

      <Box 
      display="flex"
      paddingLeft="70px"
      paddingRight="60px"
      gap="20px"
      textAlign= "start"
      fontFamily= 'Cabin'
      >
      <img
        src={`/src/assets/img/Experiences/${experience.imageUrl}`}
        alt={'${experience.title}'}
        style={{
          width: '50px',
          height:"50px",
        }}
      />
      <div className="bloc">
      <div className="name">
        {experience.username}
      </div>
      <div className="metier">  
        {experience.metier}<br/>
        {experience.specialite}
      </div>
      </div>
      </Box>
      <Box>

      </Box>

  </Box>
    
    )
}



export interface ExperienceProps {
  
  imageUrl?:   string,
  title?:      string,
  commentary?: string ,
  username?:   string,
  rating?:     number,
  metier?:     string,
  specialite?: string
}

interface Props {
  experience: ExperienceProps
  key: number
}