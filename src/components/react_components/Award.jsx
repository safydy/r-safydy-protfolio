import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import './Award.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faAward, faTrophy, faMedal, faUserGraduate, faGem } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faAward, faTrophy, faMedal, faUserGraduate, faGem);

const Award = ({ title, subTitle, faIcon, tooltip }) => {
  return (
    <Tooltip title={tooltip} placement="top" arrow>
      <Box className="award" display="flex" alignItems="center" gap={2}>
        <FontAwesomeIcon icon={faIcon ?? "fa-solid fa-award"} />
        <Box className="award-content">
          <Typography variant="h5" fontWeight="bold" className="content-text">{title}</Typography>
          <Typography variant="h6">{subTitle}</Typography>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default Award;