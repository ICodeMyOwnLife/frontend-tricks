/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, memo, useState } from 'react';
import Question from 'components/Question';
import Button from 'components/Button';
import {
  useClickSyncHandler,
  useClickAsyncHandler,
  useClickAsyncPersistedHandler,
  useChangeTextSyncHandler,
  useChangeTextAsyncHandler,
  useChangeTextAsyncPersistedHandler,
  handleReactParentClick,
  handleReactStopPropagationClick,
  handleNativeStopPropagationClick,
  useClickEvents,
  handleNotStopPropagationClick,
} from './hooks';
import questions from './questions';
import classes from './styles.module.scss';

export const Event1Impl: FC = () => {
  const [text, setText] = useState('');
  const [eventInfo, setEventInfo] = useState<any>();
  const handleClickSync = useClickSyncHandler(setEventInfo);
  const handleClickAsync = useClickAsyncHandler(setEventInfo);
  const handleClickAsyncPersisted = useClickAsyncPersistedHandler(setEventInfo);
  const handleChangeTextSync = useChangeTextSyncHandler(setText, setEventInfo);
  const handleChangeTextAsync = useChangeTextAsyncHandler(
    setText,
    setEventInfo,
  );
  const handleChangeTextAsyncPersisted = useChangeTextAsyncPersistedHandler(
    setText,
    setEventInfo,
  );
  useClickEvents();

  return (
    <Question title="Event 1" questions={questions}>
      <div className={classes.Group}>
        <Button onClick={handleClickSync}>Click Sync</Button>
        <Button onClick={handleClickAsync}>Click Async</Button>
        <Button onClick={handleClickAsyncPersisted}>
          Click Async Persisted
        </Button>
      </div>

      <div className={classes.Group}>
        <div className={classes.InputGroup}>
          <label htmlFor="textSync">Sync</label>
          <input
            type="text"
            name="text"
            id="textSync"
            value={text}
            onChange={handleChangeTextSync}
          />
        </div>

        <div className={classes.InputGroup}>
          <label htmlFor="textAsync">Async</label>
          <input
            type="text"
            name="text"
            id="textAsync"
            value={text}
            onChange={handleChangeTextAsync}
          />
        </div>

        <div className={classes.InputGroup}>
          <label htmlFor="textAsyncPersisted">Async Persisted</label>
          <input
            type="text"
            name="text"
            id="textAsyncPersisted"
            value={text}
            onChange={handleChangeTextAsyncPersisted}
          />
        </div>
      </div>

      {eventInfo && <pre>{JSON.stringify(eventInfo, null, 2)}</pre>}

      <div
        className={classes.Group}
        id="parentClick"
        onClick={handleReactParentClick}
      >
        <Button onClick={handleNotStopPropagationClick}>
          Not Stop Propagation
        </Button>

        <Button onClick={handleReactStopPropagationClick}>
          React Stop Propagation
        </Button>

        <Button onClick={handleNativeStopPropagationClick}>
          Native Stop Propagation
        </Button>

        <Button id="domClick">DOM Stop Propagation</Button>
      </div>
    </Question>
  );
};

const Event1 = memo(Event1Impl);
Event1.displayName = 'Event1';
export default Event1;
