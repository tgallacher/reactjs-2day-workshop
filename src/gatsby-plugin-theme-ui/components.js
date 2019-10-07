/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
import Prism from '@theme-ui/prism';
import {
  Appear,
  Notes,
  FullScreenCode,
  Image as BgSlideImage,
} from 'gatsby-theme-mdx-deck';

import ReactSpinner from '../components/SpinReactLogo.jsx';
// import Callout from '../components/Callout.jsx';

const Emoji = ({ className, sx, ...props }) => (
  <div
    sx={{ mt: 4, fontSize: 6, ...sx }}
    className={'em '.concat(className)}
    {...props}
  />
);

const Callout = ({ sx, ...props }) => (
  <div
    sx={{
      borderWidth: 0,
      borderLeftColor: 'secondary',
      borderLeftWidth: 6,
      borderStyle: 'solid',
      backgroundColor: 'muted',
      p: 4,
      mt: 4,
      fontWeight: 'bold',
      ...sx,
    }}
    {...props}
  />
);

const Div = ({ sx, ...props }) => <div sx={sx} {...props} />;

export default {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  //
  // MDX Deck: Aliases
  //
  Appear,
  Notes,
  FullScreenCode,
  BgSlideImage,
  //
  // Shortcodes
  //
  ReactSpinner,
  Callout,
  Emoji,
  Div,
};
