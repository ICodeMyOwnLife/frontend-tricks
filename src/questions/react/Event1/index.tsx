/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, memo, useState } from 'react';
import Question, { QuestionInfo } from 'components/Question';
import Button from 'components/Button';
import classes from './styles.module.scss';
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
  {
    question: `How to stop an event from propagating to its parent?`,
    answer: (
      <div>
        <p>
          If parent event is a <code>SyntheticEvent</code> one (e.g. registered
          using <code>onClick</code>): Call <code>stopPropagation()</code> on{' '}
          <code>SyntheticEvent</code> object
        </p>
        <pre>
          <code>
            {`const handleClick = (e: BaseSyntheticEvent<Event>) => {
  e.stopPropagation();
};`}
          </code>
        </pre>

        <p>
          If parent event is a native <code>Event</code> one (e.g. registered
          using <code>addEventListener</code>) and parent is{' '}
          <code>document</code>: Call <code>stopImmediatePropagation</code> on
          native <code>Event</code> object
        </p>
        <pre>
          <code>
            {`const handleClick = (e: BaseSyntheticEvent<Event>) => {
  e.nativeEvent.stopImmediatePropagation();
};`}
          </code>
        </pre>

        <p>
          If parent event is a native <code>Event</code> one (e.g. registered
          using <code>addEventListener</code>) and parent is descendant of{' '}
          <code>document</code>: There is no way to stop propagation using React{' '}
          <code>SyntheticEvent</code>, child event must to be registered using{' '}
          <code>addEventListener</code> then call <code>stopPropagation</code>{' '}
          on native <code>Event</code> object
        </p>
        <pre>
          <code>
            {`const handleClick = (e: Event) => {
  e.stopPropagation();
};

element.addEventListener('click', handleClick);`}
          </code>
        </pre>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] ReactJS SyntheticEvent stopPropagation() only works with React events`,
        url: `https://stackoverflow.com/questions/24415631/reactjs-syntheticevent-stoppropagation-only-works-with-react-events`,
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
