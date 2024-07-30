import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faAward, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faAward, faTrophy, faMedal);

const Award = ({ title, year, faIcon }) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <FontAwesomeIcon icon={faIcon ?? "fa-solid fa-award"} />
      <Box>
        <Typography variant="h5" fontWeight="bold">{title}</Typography>
        <Typography variant="h6" color="textSecondary">{year}</Typography>
      </Box>
    </Box>
  );
};

export default Award;