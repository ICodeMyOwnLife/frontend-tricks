const size = 30;
let isObtrusive: boolean | undefined;

export const isObtrusiveScrollbar = () => {
  if (typeof isObtrusive !== 'boolean') {
    const parent = document.createElement('div');
    Object.assign(parent.style, {
      position: 'absolute',
      left: '-1000px',
      width: `${size}px`,
      height: `${size}px`,
      overflow: 'scroll',
    });
    const child = document.createElement('div');
    Object.assign(child.style, { width: '100%', height: `${size + 10}px` });
    parent.appendChild(child);
    document.body.appendChild(parent);
    isObtrusive = size - child.clientWidth > 0;
    parent.remove();
  }

  return isObtrusive;
};
