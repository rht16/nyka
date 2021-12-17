
import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";


  const MediaCard=({image,width,height})=> {
  return (
    <Card >
      <CardMedia
        component="img"
        width={width}
        height={height}
        image={image}
        alt="green iguana"
      />
    </Card>
  );
}



// const 
export  {MediaCard}


// width="576"
// height="316"