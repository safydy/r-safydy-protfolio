import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import './Quote.css';

function Quote({ avatar, quote, author }) {
  return (
    <Card className="mention-card">
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          " {quote} "
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar alt={author} src={avatar} />
          {/*color="text.secondary"*/}
          <Typography variant="body2" component="div" sx={{ ml: 1 }}>
            - {author}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Quote;

