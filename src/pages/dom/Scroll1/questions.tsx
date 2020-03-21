import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to create a ScrollSpy?`,
    answer: (
      <div>
        <p>
          Create a new <code>IntersectionObserver</code> with options{' '}
          <code>{`{ threshold: 1 }`}</code> and observe headings with ids
        </p>

        <CodeViewer language="tsx">
          {`const useScrollSpy = () => {
  const [id, setId] = useState<string>();
  const elementMapRef = useRef(new Map<Element, string>());
  const intersectingElementsRef = useRef(new Set<Element>());

  const register = useCallback((arg: string | Element) => {
    if (typeof arg === 'string') {
      const elementId = arg;
      return (element: Element) => {
        elementMapRef.current.set(element, elementId);
      };
    }
    const element = arg;
    const elementId = arg.getAttribute('id');
    if (elementId) {
      elementMapRef.current.set(element, elementId);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            intersectingElementsRef.current.add(target);
          } else {
            intersectingElementsRef.current.delete(target);
          }
        });

        if (!intersectingElementsRef.current.size) return;

        const selectedElement = Array.from(
          intersectingElementsRef.current,
        ).reduce((prev, curr) =>
          prev.getBoundingClientRect().top < curr.getBoundingClientRect().top
            ? prev
            : curr,
        );

        const newId =
          elementMapRef.current.get(selectedElement) ??
          selectedElement.getAttribute('id');

        if (typeof newId === 'string') {
          setId(newId);
        }
      },
      { threshold: 1 },
    );

    elementMapRef.current.forEach((_, element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return [id, register] as [string, ScrollSpyRegister];
};`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const ScrollSpyComponent: FC = () => {
  const classes = useStyles();
  const [scrollId, register] = useScrollSpy();

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        {sections.map(({ paragraphs, heading, id }) => (
          <Fragment key={id}>
            <Typography
              className={classes.heading}
              id={id}
              innerRef={register}
              variant="h4"
            >
              {heading}
            </Typography>
            {paragraphs.map(paragraph => (
              <Typography className={classes.paragraph} key={paragraph}>
                {paragraph}
              </Typography>
            ))}
          </Fragment>
        ))}
      </div>
      <div className={classes.navContainer}>
        <List component="nav">
          {sections.map(({ heading, id }) => (
            <ListItem
              button
              className={clsx(classes.navLink, { active: scrollId === id })}
              component="a"
              href={\`#$\{id}\`}
              key={id}
            >
              <ListItemText primary={heading} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[CSS-TRICKS] Sticky Table of Contents with Scrolling Active States`,
        url: `https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/`,
      },
      {
        name: `[MDN] Intersection Observer API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`,
      },
    ],
  },
];

export default questions;
