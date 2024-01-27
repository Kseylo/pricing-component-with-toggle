import clsx from "clsx";
interface CardProps {
  title: string;
  price: number;
  features: string[];
  featured?: boolean;
}
export function Card(props: CardProps) {
  const { title, price, features, featured } = props;
  return (
    <section
      className={clsx(
        "bg-white p-8 rounded-md flex flex-col gap-4 w-full max-w-sm shadow",
        {
          "bg-gradient-to-br from-gradient-from to-gradient-to py-12": featured,
        },
      )}
    >
      <h2
        className={clsx("text-grayish-blue text-center text-xl", {
          "text-very-light-grayish-blue": featured,
        })}
      >
        {title}
      </h2>
      <p
        className={clsx("text-dark-grayish-blue text-6xl text-center", {
          "text-very-light-grayish-blue": featured,
        })}
      >
        {`$${price}`}
      </p>
      <hr className={clsx("mt-6", { "border-light-grayish-blue": featured })} />
      {features.map((feature) => (
        <>
          <p
            className={clsx("text-grayish-blue text-center", {
              "text-very-light-grayish-blue": featured,
            })}
          >
            {feature}
          </p>
          <hr className={clsx({ "border-light-grayish-blue": featured })} />
        </>
      ))}
      <button
        className={clsx(
          `mt-6 transition rounded-md p-3 uppercase tracking-widest  border border-transparent`,
          {
            "bg-none bg-very-light-grayish-blue hover:border-very-light-grayish-blue text-gradient-to hover:text-very-light-grayish-blue hover:bg-transparent":
              featured,
            "text-very-light-grayish-blue bg-gradient-to-br from-gradient-from to-gradient-to hover:bg-none hover:border-gradient-to hover:text-gradient-to":
              !featured,
          },
        )}
      >
        Learn more
      </button>
    </section>
  );
}
