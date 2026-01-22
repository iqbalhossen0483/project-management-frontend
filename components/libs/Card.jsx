import clsx from "clsx";

const Card = ({ children, className = "" }) => {
  return (
    <section
      className={clsx("bg-card rounded-2xl p-3 md:p-5 space-y-3", className)}
    >
      {children}
    </section>
  );
};

export default Card;
