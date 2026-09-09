import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const { ref, shown } = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
