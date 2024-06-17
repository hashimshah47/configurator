import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
  Button
} from "@mui/material";
import { useConfigurator } from "../context/Configurator";
import { useEffect, useState } from "react";
import boxImage from '../assets/images/box.jpg'
import sphereImage from '../assets/images/sphere.jpg'
import { useBoxContext } from "../context/BoxContext";

export const Interface = () => {
  // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    const { legs, setLegs, box, addBox, shape, setShape} = useConfigurator();
    // const [addRemove, setAddRemove] = useState("");

    const {isBoxSelect ,setIsBoxSelect, removeBox ,setRemoveBox} = useBoxContext();

    const isBox = () => {
      addBox(true);
      setShape("box");
    } 
    const isSphere = () => {
      addBox(true);
      setShape("sphere");
    } 

    const remove_Box = () =>{
      setRemoveBox(!removeBox);
    }

    // useEffect(() => {
    //   if(!box){
    //     setAddRemove("Add Box")
    //   }
    //   else{
    //     setAddRemove("Remove Box")
    //   }
    // },[box, addBox])
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Table Configurator</Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
            value={legs}
            onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box>



        <Box className="glass" p={3}>
          <FormControl>
            <Button  onClick={isBox} >
              <img src={boxImage}
              style={{height: '50px'}}
              />
            </Button>
            <Button  onClick={isSphere} >
            <img src={sphereImage}
              style={{height: '50px'}}
              />
            </Button>
          </FormControl>
        </Box>


{ isBoxSelect && (<>
        <Box className="glass" p={3}>
          <FormControl>
            <Button onClick={remove_Box}>
              Remove
            </Button>
            {/* <Button  >
              Replace
            </Button> */}
          </FormControl>
        </Box>
        </>)
        }
        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup
            // value={legsColor}
            // onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box> */}
      </Stack>
    </Box>
  );
};
