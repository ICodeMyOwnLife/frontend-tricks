import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: (
      <span>
        How to render HTML to a <code>canvas</code>?
      </span>
    ),
    answer: (
      <div>
        <ol>
          <li>
            Convert HTML to XML using <code>XMLSerializer</code>
          </li>
          <li>
            Generate an SVG markup and insert the XML inside a{' '}
            <code>foreignObject</code>
          </li>
          <li>
            Create an <code>Image</code> object and assign the SVG markup as
            data <code>src</code>
          </li>
          <li>
            Draw the image into the <code>canvas</code> using{' '}
            <code>CanvasRenderingContext2D.drawImage</code>
          </li>
        </ol>

        <CodeViewer language="typescript">
          {`const htmlToXml = (html: string) => {
  const doc = document.implementation.createHTMLDocument('');
  doc.write(html);
  doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI!);
  return new XMLSerializer().serializeToString(doc.body.childNodes[0]);
};

const renderXmlToCanvas = (
  xml: string,
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
) => {
  const data = \`data:image/svg+xml;charset=utf-8,
    <svg xmlns="http://www.w3.org/2000/svg" width="$\{width}" height="$\{height}">
    <foreignObject width="100%" height="100%">
    $\{xml}
    </foreignObject>
    </svg>\`;
  const ctx = canvas.getContext('2d')!;
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0);
  img.src = data;
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] Rendering HTML elements to <canvas>`,
        url: `https://stackoverflow.com/questions/12652769/rendering-html-elements-to-canvas#answer-43724114`,
      },
      {
        name: `[MDN] Canvas tutorial > Using images`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images`,
      },
      {
        name: `[MDN] CanvasRenderingContext2D.drawImage()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage`,
      },
    ],
  },
  {
    question: `How to get pixel color from an image?`,
    answer: (
      <div>
        <p>
          Use <code>CanvasRenderingContext2D.getImageData</code>
        </p>

        <CodeViewer language="typescript">
          {`const getDataOnMousePoint = ({
  canvas,
  e: { clientX, clientY, currentTarget },
  getMousePoint,
}: {
  canvas: HTMLCanvasElement;
  e: PointerEvent;
  getMousePoint: (relativePosition: RelativePosition) => MousePoint;
}) => {
  const ctx = canvas.getContext('2d')!;
  const { left, top, width, height } = currentTarget.getBoundingClientRect();
  const relX = clientX - left;
  const relY = clientY - top;
  const { x, y } = getMousePoint({ relX, relY, width, height });
  const { data } = ctx.getImageData(x, y, 1, 1);
  const [r, g, b, a] = data;
  return {
    color: new BaseColor(r / 255, g / 255, b / 255, a / 255),
    x,
    y,
  };
};`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[Stack Overflow] How to get a pixel's x,y coordinate color from an image?`,
        url: `https://stackoverflow.com/questions/8751020/how-to-get-a-pixels-x-y-coordinate-color-from-an-image#answer-8751659`,
      },
      {
        name: `[MDN] Canvas tutorial > Pixel manipulation with canvas`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas`,
      },
      {
        name: `[MDN] CanvasRenderingContext2D.getImageData()`,
        url: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData`,
      },
    ],
  },
];

export default questions;
