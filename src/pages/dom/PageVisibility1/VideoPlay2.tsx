import React, { FC, memo } from 'react';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useTextInput, useCheckInput, usePageVisibilityState } from 'cb-hooks';
import useStyles from './styles';

export const VideoPlay2Component: FC = () => {
  const classes = useStyles();
  const [url, , handleChangeUrl] = useTextInput(
    'https://www.youtube.com/watch?v=q0hyYWKXF0Q',
  );
  const [playing, , handleChangePlaying] = useCheckInput(false);
  const [backgroundPlaying, , handleChangeBackgroundPlaying] = useCheckInput(
    false,
  );
  const visibilityState = usePageVisibilityState();

  return (
    <div>
      <div className={classes.playerInputs}>
        <TextField
          className={classes.urlInput}
          label="URL"
          onChange={handleChangeUrl}
          value={url}
        />
        <FormControlLabel
          control={
            <Checkbox checked={playing} onChange={handleChangePlaying} />
          }
          label="Playing"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={backgroundPlaying}
              onChange={handleChangeBackgroundPlaying}
            />
          }
          label="Playing on background"
        />
      </div>

      <div className={classes.player2Container}>
        <ReactPlayer
          className={classes.player2}
          height="100%"
          loop
          playing={
            playing && (backgroundPlaying || visibilityState === 'visible')
          }
          playsinline
          url={url}
          width="100%"
        />
      </div>
    </div>
  );
};

const VideoPlay2 = memo(VideoPlay2Component);
VideoPlay2.displayName = 'VideoPlay2';
export default VideoPlay2;
