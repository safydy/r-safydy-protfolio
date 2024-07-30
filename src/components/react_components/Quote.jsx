import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Quote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faQuoteLeft, faQuoteRight);

function Quote({ avatar, quote, author }) {
  return (
    <Card className="mention-quote">
      <CardContent className="quote-content">
        <div className="quote-text">
          <FontAwesomeIcon className="quote-icon icon-left" icon="fa-solid fa-quote-left"/>
          <Typography variant="h6" component="div" align="center" style={{ fontStyle: 'italic' }}>
            {quote}
          </Typography>
          <FontAwesomeIcon className="quote-icon icon-right" icon="fa-solid fa-quote-right"/>
        </div>
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

