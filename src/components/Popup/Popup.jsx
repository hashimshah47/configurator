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
  import { useConfigurator } from "../../context/Configurator";
  import { useEffect, useState } from "react";
  import { useBoxContext } from "../../context/BoxContext";
  export const Popup = () => {
      const {isBoxSelect ,setIsBoxSelect, leftClicked ,setLeftClicked, rightClicked ,setRightClicked} = useBoxContext();

      const RotateRight = (e) => {
        // if(isBoxSelect ){
            e.preventDefault();
            setRightClicked(true);
            // console.log("totateright")
        // }
      }
      const RotateLeft = () => {
        if(isBoxSelect){
        }
      }
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: '50%',
        }}
        p={3}
      >
        <Stack spacing={3}>
          <Typography variant="caption">Table Configurator</Typography>
          <Box className="glass" p={3}>
            <FormControl>
              <FormLabel>Interaction</FormLabel>
                <button onClick={RotateRight}>CLICK</button>
                {/* <FormControlLabel  value={0} control={<Button onClick={RotateRight} />} label="Rotate Right"/> */}
                {/* <FormControlLabel value={1} control={<Button onClick={RotateLeft} />} label="Rotate Left" /> */}
            
            </FormControl>
          </Box>
  
  
  
          <Box className="glass" p={3}>
            <FormControl>
              {/* <Button  
              onClick={()=>addBox(!box)} >
                {addRemove}
              </Button> */}
            </FormControl>
          </Box>

        </Stack>
      </Box>
    );
  };
  