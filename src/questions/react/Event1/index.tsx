import React, { FC, memo, useState } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import classes from './styles.module.scss';
import {
  useClickSyncHandler,
  useClickAsyncHandler,
  useClickAsyncPersistedHandler,
  useChangeTextSyncHandler,
  useChangeTextAsyncHandler,
  useChangeTextAsyncPersistedHandler,
} from './hooks';

const questions: QuestionInfo[] = [
  {
    question: `What is the difference between React event object and DOM event object?`,
    answer: (
      <div>
        <p>
          <code>SyntheticEvent</code> is a cross-browser wrapper around the
          browser’s native event. It has the same interface as the browser’s
          native event, including <code>stopPropagation()</code> and{' '}
          <code>preventDefault()</code>, except the events work identically
          across all browsers.
        </p>
        <p>
          The <code>SyntheticEvent</code> is pooled. This means that the{' '}
          <code>SyntheticEvent</code> object will be reused and all properties
          will be nullified after the event callback has been invoked.
        </p>
        <p>
          If you want to access the event properties in an asynchronous way, you
          should call <code>event.persist()</code> on the event, which will
          remove the synthetic event from the pool and allow references to the
          event to be retained by user code.
        </p>
        <p>
          There is a <b>single global handler</b>: Whenever we use the on*
          attributes (<code>onClick</code>, <code>onChange</code>, etc), we are
          describing to React the behavior we want to achieve, but the library
          does not attach the actual event handler to the underlying DOM nodes.
          What it does instead is attach a single event handler to the root
          element, which listens to all the events, thanks to the{' '}
          <b>event bubbling</b>. When an event we are interested in is fired by
          the browser, React calls the handler on the specific components on its
          behalf. This technique is called <b>event delegation</b> and is used
          for memory and speed optimization.
        </p>
      </div>
    ),
    references: [
      {
        name: `[React] SyntheticEvent`,
        url: `https://reactjs.org/docs/events.html`,
      },
      {
        name: `[React Design Patterns and Best Practices] Events`,
        url: `https://www.amazon.com/React-Design-Patterns-Best-Practices/dp/1786464535/`,
      },
      {
        name: `[Medium] React SyntheticEvent reuse`,
        url: `https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6`,
      },
    ],
  },
];

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

  return (
    <Question title="Event 1" questions={questions}>
      <div className={classes.Group}>
        <button type="button" onClick={handleClickSync}>
          Handle Click Sync
        </button>
        <button type="button" onClick={handleClickAsync}>
          Handle Click Async
        </button>
        <button type="button" onClick={handleClickAsyncPersisted}>
          Handle Click Async Persisted
        </button>
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
    </Question>
  );
};

const Event1 = memo(Event1Impl);
Event1.displayName = 'Event1';
export default Event1;
