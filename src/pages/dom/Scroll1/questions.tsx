import React from 'react';
import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to implement scroll spy?`,
    answer: (
      <div>
        <p>
          Create an <code>IntersectionObserver</code> with options{' '}
          <code>{`{ threshold: 1 }`}</code>, use it to observe targets and
          announce when at least one target comes into view.
        </p>

        <CodeViewer language="tsx">
          {`const defaultGetId = <TElement extends Element>(element: TElement) =>
  element?.getAttribute('id');

const isElement = <TElement extends Element>(o: unknown): o is TElement =>
  o instanceof Element;

const useScrollSpy = <TElement extends Element = Element>(
  { getId = defaultGetId, ...options }: UseScrollSpyOptions<TElement> = {
    threshold: 1,
  },
) => {
  const [id, setId] = useState<string>();
  const elementMapRef = useRef(new Map<TElement, string>());
  const intersectingElementsRef = useRef(new Set<TElement>());

  const register = useCallback(
    (arg: string | TElement) => {
      if (typeof arg === 'string') {
        const elementId = arg;

        return (element: TElement) => {
          elementMapRef.current.set(element, elementId);
        };
      }

      if (isElement<TElement>(arg)) {
        const element = arg;
        const elementId = getId(element);

        if (elementId) {
          elementMapRef.current.set(element, elementId);
        }
      }

      return undefined;
    },
    [getId],
  ) as UseScrollSpyRegister<TElement>;

  useIntersectionObserverEffect(
    () => Array.from(elementMapRef.current.keys()),
    entries => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          intersectingElementsRef.current.add(target as TElement);
        } else {
          intersectingElementsRef.current.delete(target as TElement);
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
        elementMapRef.current.get(selectedElement) || getId(selectedElement);

      if (typeof newId === 'string') {
        setId(newId);
      }
    },
    options,
  );

  return [id, register] as const;
};

export default useScrollSpy;

export interface UseScrollSpyOptions<TElement extends Element>
  extends IntersectionObserverInit {
  getId?: (element: TElement) => string | null | undefined;
}

export interface UseScrollSpyRegister<TElement extends Element> {
  (element: TElement): void;
  (id: string): (element: TElement) => void;
}`}
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
  {
    question: `How to implement lazy load?`,
    answer: (
      <div>
        <p>
          Create an <code>IntersectionObserver</code>, use it to observe{' '}
          <code>img</code> elements and set <code>src</code> of those coming
          into view.
        </p>

        <CodeViewer language="typescript">
          {`const defaultGetSrc = (image: HTMLImageElement) => image.dataset.src;

const useLazyLoad = ({
  getSrc = defaultGetSrc,
  ...options
}: UseLazyLoadOptions = {}) => {
  const imageMapRef = useRef(new Map<HTMLImageElement, string>());

  const register = useCallback(
    (arg: string | HTMLImageElement) => {
      if (typeof arg === 'string') {
        const src = arg;

        return (image: HTMLImageElement) => {
          imageMapRef.current.set(image, src);
        };
      }

      if (arg instanceof HTMLImageElement) {
        const image = arg;
        const src = getSrc(image);

        if (src) {
          imageMapRef.current.set(image, src);
        }
      }

      return undefined;
    },
    [getSrc],
  ) as UseLazyLoadRegister;

  useIntersectionObserverEffect(
    () => Array.from(imageMapRef.current.keys()),
    (entries, currentObserver) =>
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting || !(target instanceof HTMLImageElement)) return;

        const src = imageMapRef.current.get(target) || getSrc(target);

        if (src) {
          target.src = src;
        }

        currentObserver.unobserve(target);
      }),
    options,
  );

  return register;
};

export default useLazyLoad;

export interface UseLazyLoadOptions extends IntersectionObserverInit {
  getSrc?: (image: HTMLImageElement) => string | null | undefined;
}

export interface UseLazyLoadRegister {
  (image: HTMLImageElement): void;
  (src: string): (image: HTMLImageElement) => void;
}
`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`export const LazyLoadComponent: FC = () => {
  const classes = useStyles();
  const register = useLazyLoad();

  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 1"
          className={classes.img}
          data-src={src1}
          height={480}
          ref={register}
          width={648}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 2"
          className={classes.img}
          data-src={src2}
          height={400}
          ref={register}
          width={504}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 3"
          className={classes.img}
          data-src={src3}
          height={520}
          ref={register}
          width={350}
        />
        <img
          alt="Food 4"
          className={classes.img}
          data-src={src4}
          height={520}
          ref={register}
          width={330}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 5"
          className={classes.img}
          data-src={src5}
          height={460}
          ref={register}
          width={832}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
      <div className={classes.imgContainer}>
        <img
          alt="Food 6"
          className={classes.img}
          data-src={src6}
          height={540}
          ref={register}
          width={364}
        />
        <img
          alt="Food 7"
          className={classes.img}
          data-src={src7}
          height={540}
          ref={register}
          width={409}
        />
      </div>
      <p className={classes.paragraph}>{loremIpsum.generateParagraphs(1)}</p>
    </div>
  );
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Implementing Infinite Scroll And Image Lazy Loading In React`,
        url: `https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/`,
      },
      {
        name: `[GitHub] use-lazyload`,
        url: `https://github.com/BKJang/use-lazyload`,
      },
      {
        name: `[GitHub] react-use-lazy-load-image`,
        url: `https://github.com/robcalcroft/react-use-lazy-load-image`,
      },
      {
        name: `[MDN] Intersection Observer API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`,
      },
    ],
  },
  {
    question: `How to implement infinite scroll?`,
    answer: (
      <div>
        <p>
          Create an <code>IntersectionObserver</code>, use it to observe an
          element placed at the bottom of a list and call some{' '}
          <code>loadMore()</code> function when this element comes into view.
        </p>

        <CodeViewer language="typescript">
          {`const isIntersectingObserverInit = (
  o: unknown,
): o is IntersectionObserverInit => o instanceof Object;

const useInfiniteScroll: UseInfiniteScroll = (
  elementRef: RefObject<Element>,
  loadMore: () => void | Promise<unknown>,
  ...args: any[]
) => {
  const loadingRef = useRef<boolean>(false);
  const loading: boolean | undefined =
    typeof args[0] === 'boolean' ? args[0] : undefined;
  const options:
    | IntersectionObserverInit
    | undefined = isIntersectingObserverInit(args[0])
    ? args[0]
    : isIntersectingObserverInit(args[1])
    ? args[1]
    : undefined;

  useIntersectionObserverEffect(
    () => elementRef.current && [elementRef.current],
    async entries => {
      if (
        loading ||
        loadingRef.current ||
        entries.every(({ isIntersecting }) => !isIntersecting)
      ) {
        return;
      }

      loadingRef.current = true;

      try {
        await Promise.resolve(loadMore());
      } catch {
        // Do nothing
      }

      loadingRef.current = false;
    },
    options,
  );
};

export default useInfiniteScroll;

export interface UseInfiniteScroll {
  (
    elementRef: RefObject<Element>,
    loadMore: () => Promise<unknown>,
    options?: IntersectionObserverInit,
  ): void;
  (
    elementRef: RefObject<Element>,
    loadMore: VoidFunction,
    loading: boolean,
    options?: IntersectionObserverInit,
  ): void;
}`}
        </CodeViewer>

        <CodeViewer language="tsx">
          {`const reducer: Reducer<Product[], ProductAction> = (
  state,
  { type, payload },
) => {
  switch (type) {
    case 'loadDone':
      return [...state, ...payload];

    default:
      return state;
  }
};

export const InfiniteScrollComponent: FC = () => {
  const classes = useStyles();
  const [products, dispatch] = useReducer(reducer, []);
  const [{ loading }, loadMore] = usePromiseCallback(() =>
    load(20).then(moreProducts =>
      dispatch({ type: 'loadDone', payload: moreProducts }),
    ),
  );
  const targetRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(targetRef, loadMore, loading);

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {products.map(({ id, name, description }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <FontIcon type="image" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={id}
              secondary={
                <>
                  <Typography
                    className={classes.listItemText}
                    color="textPrimary"
                    component="span"
                    variant="body2"
                  >
                    {name}
                  </Typography>{' '}
                  - {description}
                </>
              }
            />
          </ListItem>
        ))}
        <div className={classes.loadMore} ref={targetRef}>
          {loading && (
            <div>
              <Typography>Loading more</Typography>
              <LinearProgress className={classes.progress} />
            </div>
          )}
        </div>
      </List>
    </div>
  );
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `Implementing Infinite Scroll And Image Lazy Loading In React`,
        url: `https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/`,
      },
      {
        name: `[MDN] Intersection Observer API`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`,
      },
    ],
  },
];

export default questions;
