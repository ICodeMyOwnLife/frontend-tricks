/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        What do <code>rel="noopener"</code> and <code>rel="noreferrer"</code>{' '}
        do?
      </span>
    ),
    answer: (
      <div>
        <p>
          <code>window.opener</code> can be used to access the window element of
          the page which opens the current page in an a{' '}
          <code>target="_blank"</code> element.
        </p>

        <CodeViewer language="typescript">
          {`export const useOpener = () => {
  const [opener, setOpener] = useState<Window>();

  const handleNavigate = useMemo(
    () =>
      opener &&
      opener.location &&
      (() => opener.location.replace('https://google.com')),
    [opener],
  );

  useEffect(() => {
    if (window.opener) {
      setOpener(window.opener);
    }
  }, []);

  return { handleNavigate, opener };
};`}
        </CodeViewer>

        <p>
          Modern browsers all support the <code>rel="noopener"</code> property
          which will set the <code>window.opener</code> to null in the new
          opened page, hence the opener cannot be used anymore.
        </p>

        <CodeViewer language="tsx">
          {`<Link href={referrerUrl} rel="noopener" target="_blank">
  Open with rel="noopener"
</Link>`}
        </CodeViewer>

        <p>
          However, The new opened site can still identify the source of the site
          through Referrer property in HTTP Header or{' '}
          <code>document.referrer</code>.
        </p>

        <CodeViewer language="typescript">
          {`app.get("/with-referrer", (req, res) => {
  const referrer = req.header("referrer");
  const redirect = req.query.redirect;
  res.redirect(referrer ? \`$\{redirect}?referrer=$\{referrer}\` : redirect);
});`}
        </CodeViewer>

        <CodeViewer language="typescript">
          {`export const useReferrer = () => {
  const { referrer } = useSearchObject<{ referrer: string }>();
  return referrer || document.referrer;
};`}
        </CodeViewer>

        <p>
          Setting <code>rel="noreferrer"</code> property prevents Referrer
          header from sending.
        </p>

        <CodeViewer language="tsx">
          {`<Link href={referrerUrl} rel="noreferrer" target="_blank">
  Open with rel="noreferrer"
</Link>`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `The danger of target=_blank and opener`,
        url: `https://www.pixelstech.net/article/1537002042-The-danger-of-target%3D_blank-and-opener`,
      },
      {
        name: `Explained: noopener, noreferrer, and nofollow Values`,
        url: `https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/`,
      },
      {
        name: `[MDN] Window.opener`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Window/opener`,
      },
      {
        name: `[MDN] document.referrer`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer`,
      },
    ],
  },
];

export default questions;
