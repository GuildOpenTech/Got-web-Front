import { Box, Link, Rating } from "@mui/material"
import { Colors} from "../../core/colors";
import { makeStyles } from '@mui/styles';
import "./Experience.css"
const useCard= makeStyles({
      root: {
      //paddingTop:"24px",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:'flex',
      borderRadius: "0 0 40% 40%",
      TextOverflow: "ellipsis",
      width:'400px',
      height:"510px",
      position: "static",
      background : "linear-gradient(#071520,#0D2D45)",
      border:"solid 3px #0F5C73"
  }
});

const useText = makeStyles({
  root: {
    width:"100%",
    paddingTop:"20px",
    height:"70px",
    paddingLeft:"35px",
    paddingRight:"35px",
    display:"flex",
    gap: "150px",
    background:"radial-gradient(50px at 50% -20%,#0D2D45,#071520)"
  }
})

export default function ExperienceCard({ experience, key }: Props,) 
  {
    const classCard = useCard();
    const classText = useText();
  return (
   
    <Box className={classCard.root} key={key}>
      <Box className={classText.root }
      >
       <img src="/src/assets/img/Experiences/Guillemets.png" alt=""/>
       <Rating name="read-only" value={experience.rating}  precision={0.5}
       readOnly/>
      </Box>
      
      <Box
        width='50%'
        paddingTop="20px"
        paddingLeft="20px"
        
      >
        <h3
          style={{
            color: Colors.ORANGE,
            fontFamily: 'Cabin',
            fontSize: '28px',
            //fontWeight: "22px",
            lineHeight: '29px',
            fontWeight: "bold",
          }}
        >{experience.title}</h3>
      </Box>
      <Box
      paddingTop="30px"
      fontSize= '22px'
      fontFamily="Cabin"
      fontWeight="0"
      lineHeight="31px"
      paddingX="30px"
      height="250px"
      textAlign= "start"
      >
      «{experience.commentary}»
      </Box>

      <Box 
      display="flex"
      paddingLeft="70px"
      gap="30px"
      textAlign= "start"
      fontFamily= 'Cabin'
      >
      <img
        src={`/src/assets/img/Experiences/${experience.imageUrl}`}
        alt={'${experience.title}'}
        style={{
          width: '70px'
        }}
        className='logo'
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