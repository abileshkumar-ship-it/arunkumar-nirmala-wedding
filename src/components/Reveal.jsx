import { useReveal } from '../hooks/useReveal';

/** Fades and slides its children up when scrolled into view (Intersection Observer). */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
