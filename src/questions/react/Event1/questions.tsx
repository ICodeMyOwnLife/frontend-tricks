import React from 'react';
import { QuestionInfo } from 'types/app-common';
import Code from 'components/Code';

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
        <Code language="tsx">
          {`const handleClick = (e: BaseSyntheticEvent<Event>) => {
  e.stopPropagation();
};`}
        </Code>

        <p>
          If parent event is a native <code>Event</code> one (e.g. registered
          using <code>addEventListener</code>) and parent is{' '}
          <code>document</code>: Call <code>stopImmediatePropagation</code> on
          native <code>Event</code> object
        </p>
        <Code language="tsx">
          {`const handleClick = (e: BaseSyntheticEvent<Event>) => {
  e.nativeEvent.stopImmediatePropagation();
};`}
        </Code>

        <p>
          If parent event is a native <code>Event</code> one (e.g. registered
          using <code>addEventListener</code>) and parent is descendant of{' '}
          <code>document</code>: There is no way to stop propagation using React{' '}
          <code>SyntheticEvent</code>, child event must to be registered using{' '}
          <code>addEventListener</code> then call <code>stopPropagation</code>{' '}
          on native <code>Event</code> object
        </p>
        <Code language="tsx">
          {`const handleClick = (e: Event) => {
  e.stopPropagation();
};

element.addEventListener('click', handleClick);`}
        </Code>
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

export default questions;
