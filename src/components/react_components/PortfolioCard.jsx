import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';
import './PortfolioCard.css'

export default function PortfolioCard({ project }) {
  const { data, slug } = project;

  return (
    <Card className="portfolio-card">
      <Link href={`/work/${slug}`} underline="none" color="inherit">
        <CardActionArea>
          <CardMedia
            component="img"
            image={data.img}
            alt={data.img_alt || ''}
          />
          <CardContent className="portfolio-card-content">
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
