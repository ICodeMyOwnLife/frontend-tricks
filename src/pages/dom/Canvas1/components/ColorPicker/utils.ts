/* eslint-disable no-unused-expressions */
import {
  useRef,
  DependencyList,
  useCallback,
  useState,
  RefObject,
  useLayoutEffect,
  PointerEventHandler,
  PointerEvent,
} from 'react';
import { BaseColor } from 'utils/colors/BaseColor';

const getDataOnMousePoint = ({
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
};

const htmlToXml = (html: string) => {
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
  const data = `data:image/svg+xml;charset=utf-8,
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <foreignObject width="100%" height="100%">
    ${xml}
    </foreignObject>
    </svg>`;
  const ctx = canvas.getContext('2d')!;
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0);
  img.src = data;
};

const useRenderToCanvas = ({
  canvasRef,
  deps,
  elementRef,
}: {
  canvasRef: RefObject<HTMLCanvasElement>;
  deps: DependencyList;
  elementRef: RefObject<HTMLElement>;
}) =>
  useLayoutEffect(() => {
    if (!elementRef.current || !canvasRef.current) return;
    const { clientWidth, clientHeight, outerHTML } = elementRef.current;
    const xml = htmlToXml(outerHTML);
    xml.replace(/#/g, '%23');
    renderXmlToCanvas(xml, canvasRef.current, clientWidth, clientHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

const usePointerEvents = ({
  canvasRef,
  getMousePoint,
  onChange,
}: {
  canvasRef: RefObject<HTMLCanvasElement>;
  getMousePoint: (position: RelativePosition) => MousePoint;
  onChange: ((color: BaseColor) => void) | undefined;
}) => {
  const pointerIdRef = useRef<number>();
  const [hoverColor, setHoverColor] = useState<BaseColor>();
  const [selectedColor, setSelectedColor] = useState<BaseColor>();
  const [mousePoint, setMousePoint] = useState<MousePoint>();

  const handlePointerDown = useCallback<PointerEventHandler<HTMLDivElement>>(
    e => {
      if (pointerIdRef.current !== undefined) {
        e.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
      e.currentTarget.setPointerCapture(e.pointerId);
      pointerIdRef.current = e.pointerId;

      if (!canvasRef.current) return;

      const { color, x, y } = getDataOnMousePoint({
        canvas: canvasRef.current,
        e,
        getMousePoint,
      });
      setHoverColor(color);
      setMousePoint({ x, y });
    },
    [canvasRef, getMousePoint],
  );

  const handlePointerMove = useCallback<PointerEventHandler>(
    e => {
      if (!canvasRef.current || pointerIdRef.current === undefined) return;
      const { color, x, y } = getDataOnMousePoint({
        canvas: canvasRef.current,
        e,
        getMousePoint,
      });
      setHoverColor(color);
      setMousePoint({ x, y });
    },
    [canvasRef, getMousePoint],
  );

  const handlePointerUp = useCallback<PointerEventHandler<HTMLDivElement>>(
    e => {
      if (pointerIdRef.current !== undefined) {
        e.currentTarget.releasePointerCapture(e.pointerId);
        pointerIdRef.current = undefined;
      }

      if (!canvasRef.current) return;
      const { color } = getDataOnMousePoint({
        canvas: canvasRef.current,
        e,
        getMousePoint,
      });
      setSelectedColor(color);
      onChange?.(color);
    },
    [canvasRef, getMousePoint, onChange],
  );

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    hoverColor,
    mousePoint,
    selectedColor,
  };
};

export const useColorPicker = ({
  deps,
  elementRef,
  getMousePoint,
  onChange,
}: {
  deps: DependencyList;
  elementRef: RefObject<HTMLElement>;
  getMousePoint: (position: RelativePosition) => MousePoint;
  onChange: ((color: BaseColor) => void) | undefined;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    hoverColor,
    mousePoint,
    selectedColor,
  } = usePointerEvents({ canvasRef, getMousePoint, onChange });

  useRenderToCanvas({ canvasRef, deps, elementRef });

  return {
    canvasRef,
    elementRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    hoverColor,
    mousePoint,
    selectedColor,
  };
};

export interface MousePoint {
  x: number;
  y: number;
}

export interface RelativePosition {
  relX: number;
  relY: number;
  width: number;
  height: number;
}
