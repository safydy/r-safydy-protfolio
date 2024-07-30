import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Quote.css';

function Quote({ avatar, quote, author }) {
  return (
    <Card className="mention-quote">
      <CardContent>
        <Typography variant="h6" component="div" align="center" style={{ fontStyle: 'italic' }}>
          " {quote} "
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body2" component="div" sx={{ mr: 2 }}>
            {author}&nbsp;&nbsp;-
          </Typography>
          <Avatar alt={author} src={avatar} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Quote;

