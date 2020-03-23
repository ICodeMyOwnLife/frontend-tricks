/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, memo } from 'react';
import { IconButton } from '@material-ui/core';
import FontIcon from 'components/FontIcon';
import { useVideo } from './utils';
import useStyles from './styles';

export const VideoPlay1Component: FC = () => {
  const classes = useStyles();
  const { pause, play, videoRef } = useVideo();

  return (
    <div className={classes.videoPlay1}>
      <video
        autoPlay
        className={classes.player1}
        loop
        ref={videoRef}
        src="https://www.sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4"
      />

      <div>
        <IconButton color="primary" onClick={play}>
          <FontIcon type="play_arrow" />
        </IconButton>
        <IconButton color="secondary" onClick={pause}>
          <FontIcon type="pause" />
        </IconButton>
      </div>
    </div>
  );
};

const VideoPlay1 = memo(VideoPlay1Component);
VideoPlay1.displayName = 'VideoPlay1';
export default VideoPlay1;
