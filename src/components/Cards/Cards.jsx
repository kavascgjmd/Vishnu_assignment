
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Cards.css';
import './ut.jpg'



const MediaControlCard = ({id, title, tag, status})=>  {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require ("./deadjjj.webp")}
          alt="less go"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaControlCard;