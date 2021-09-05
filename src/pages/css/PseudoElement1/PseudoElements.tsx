/* eslint-disable jsx-a11y/media-has-caption */
import { FC, memo, useRef } from 'react';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { LoremIpsum } from 'lorem-ipsum';
import { useToggleFullscreen, useCurryFunction } from 'cb-hooks';
import { VIDEO_SAMPLE_URL } from 'constants/links';
import useStyles from './styles';
import { useModal } from './utils';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { min: 8, max: 12 },
  wordsPerSentence: { min: 10, max: 20 },
});

export const PseudoElementsComponent: FC = () => {
  const classes = useStyles();
  const fullScreenTargetRef = useRef<HTMLDivElement>(null);
  const toggleFullScreen = useToggleFullscreen(fullScreenTargetRef);
  const enterFullScreen = useCurryFunction(toggleFullScreen, null, true);
  const { closeModal, dialogRef, openModal } = useModal();

  return (
    <div className={classes.text}>
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={enterFullScreen}
          type="button"
        >
          Enter Full Screen
        </button>
      </div>

      <div className={classes.fullScreenTarget} ref={fullScreenTargetRef}>
        <div className={classes.paragraphs}>
          {Array.from({ length: 2 }, (_, index) => (
            <p key={index}>{loremIpsum.generateParagraphs(1)}</p>
          ))}
        </div>
        <div className={classes.lists}>
          <ul>
            {Array.from({ length: 4 }, (_, index) => (
              <li key={index}>{loremIpsum.generateSentences(1)}</li>
            ))}
          </ul>
        </div>
        <div className={classes.inputs}>
          <input
            className={classes.input}
            placeholder="Please input some words"
            type="text"
          />

          <textarea
            className={clsx(classes.input, classes.textarea)}
            placeholder="Please input some sentences"
            rows={8}
          />
        </div>
      </div>

      <video
        autoPlay
        className={classes.video}
        controls
        loop
        src={VIDEO_SAMPLE_URL}
      />

      <div className={classes.actions}>
        <Button color="primary" onClick={openModal} variant="outlined">
          Open Modal
        </Button>
      </div>

      <dialog className={classes.dialog} ref={dialogRef}>
        <form className={classes.modal} method="dialog">
          <div className={classes.modalButtons}>
            <Button
              color="primary"
              onClick={closeModal}
              type="button"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button color="secondary" type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

const PseudoElements = memo(PseudoElementsComponent);
PseudoElements.displayName = 'PseudoElements';
export default PseudoElements;
