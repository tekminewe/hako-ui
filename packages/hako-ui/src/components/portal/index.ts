import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /**
   * The class name of the portal container
   * @default root-portal
   * @type string
   * @example "bg-white"
   */
  className?: string;

  /*
   * The element type of the portal container
   * @default div
   * @type string
   * @example "div"
   */
  el?: string;

  /**
   * The children to be rendered inside the portal
   * @type React.ReactNode
   * @example <div>Portal content</div>
   * @required
   */
  children: React.ReactNode;
}

export const Portal = ({ children, className = 'root-portal', el = 'div' }: PortalProps) => {
  const [container] = useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [className, container]);

  return createPortal(children, container);
};
