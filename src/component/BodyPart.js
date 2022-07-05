import React from 'react';
import { Stack, Typography,Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import Images  from '../utils/images';


const BodyPart = ({  data,  setBodyPart, bodyPart }) => (

 
  <Stack display="flex"
  flexDirection= 'row'
  flexWrap= 'wrap'
  >
    {data.map((item) => (
      
     
      
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
       <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? 
      { borderTop: '4px solid #FF2625', background: '#fff', 
      borderBottomLeftRadius: '20px', width: '150px', 
      height: '152px', cursor: 'pointer', gap: '37px',mb: '20px' } 
      : { background: '#fff', borderBottomLeftRadius: '20px', 
      mb: '20px', width: '150px', 
      height: '152px', cursor: 'pointer', gap: '47px',
      
     }}
     onClick= {() =>
      { setBodyPart(item)

      }
    }

  >
  
  <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
     
     
       

    
    
     
    <Typography fontSize="16px" fontWeight="bold" fontFamily="Alegreya" 
    color="#3A1212" 
    textTransform="capitalize"> {item}</Typography>
    </Stack>
      </Box>
    ))}
  </Stack>
 
);

export default BodyPart;
