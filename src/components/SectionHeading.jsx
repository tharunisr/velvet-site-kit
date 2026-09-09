import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  const titleTone = tone === "dark" ? "text-primary-foreground" : "text-foreground";
  const descTone = tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-4xl leading-[1.1] sm:text-5xl ${titleTone}`}>{title}</h2>
      {description ? (
        <p className={`text-base leading-relaxed ${descTone}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
