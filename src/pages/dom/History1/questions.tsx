import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to listen to session history change?`,
    answer: (
      <div>
        <p>
          Native History API does not raise events when calling{' '}
          <code>pushState</code> and <code>replaceState</code>. To work around
          this, we use{' '}
          <a href="https://github.com/ReactTraining/history">
            <code>history</code>
          </a>{' '}
          library which provides a minimal API that lets us manage the history
          stack, navigate, and persist state between sessions.
        </p>

        <p>
          We create a session history wrapper by creating a new browser history
          object: <code>const history = createBrowserHistory()</code>
        </p>

        <p>
          <code>history</code> objects may be used to programmatically change
          the current location using the following methods:
        </p>

        <ul>
          <li>
            <code>history.push(path, [state])</code>
          </li>
          <li>
            <code>history.replace(path, [state])</code>
          </li>
          <li>
            <code>history.go(n)</code>
          </li>
          <li>
            <code>history.goBack()</code>
          </li>
          <li>
            <code>history.goForward()</code>
          </li>
        </ul>

        <p>
          We can listen for changes to the current location using{' '}
          <code>history.listen</code>:
        </p>

        <CodeViewer language="typescript">
          {`const createHistoryListenHook = (history: History) => (
  listener: LocationListener<unknown>,
) => {
  const listenerRef = useUpdatedRef(listener);

  useEffect(() => {
    const unlisten = history.listen((location, action) =>
      listenerRef.current?.(location, action),
    );
    return () => unlisten();
  }, [listenerRef]);
};

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

const useHistoryListen = createHistoryListenHook(history);`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] history: Intro`,
        url: `https://github.com/ReactTraining/history/blob/master/docs/GettingStarted.md`,
      },
      {
        name: `[GitHub] history: Navigation`,
        url: `https://github.com/ReactTraining/history/blob/master/docs/Navigation.md`,
      },
    ],
  },
  {
    question: `How to block history navigation in some circumstances?`,
    answer: (
      <div>
        <p>
          <code>history</code> lets you register a prompt message that will be
          shown to the user before location listeners are notified. This allows
          you to make sure the user wants to leave the current page before they
          navigate away.
        </p>

        <CodeViewer language="typescript">
          {`const createHistoryBlockHook = (history: History) => (
  handler: TransitionPromptHook<unknown>,
) => {
  const handlerRef = useUpdatedRef(handler);

  useEffect(() => {
    const unblock = history.block((location, action) =>
      handlerRef.current?.(location, action),
    );
    return () => unblock();
  }, [handlerRef]);
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[GitHub] history: Blocking Transitions`,
        url: `https://github.com/ReactTraining/history/blob/master/docs/Blocking.md`,
      },
    ],
  },
  {
    question: `How to make sure the user wants to leave the current page before they navigate away either using history navigation or full page reload or close the browser tab?`,
    answer: (
      <div>
        <p>
          We combine using <code>history.block</code> with{' '}
          <code>beforeunload</code> event listener.
        </p>

        <CodeViewer language="typescript">
          {`const useWindowBeforeUnload = (message?: string, enabled = true) =>
  useEvent(
    window,
    'beforeunload',
    e => {
      e.preventDefault();
      if (message) e.returnValue = message;
      return message;
    },
    { enabled },
  );
  
  const createBeforeLeaveHook = (history: History) => (
    enabled = true,
    message?: string,
  ) => {
    const useHistoryBlock = createHistoryBlockHook(history);
    useHistoryBlock(() => (enabled ? message || false : undefined));
    useWindowBeforeUnload(message, enabled);
  };`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] Window: beforeunload event`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`,
      },
    ],
  },
];

export default questions;
