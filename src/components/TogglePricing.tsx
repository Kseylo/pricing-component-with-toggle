import { InputHTMLAttributes, MouseEventHandler } from "react";
import clsx from "clsx";

export function TogglePricing(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={"flex gap-6 items-center"}>
      <label
        htmlFor="pricing-toggle"
        className={"text-light-grayish-blue select-none cursor-pointer"}
      >
        Annually
      </label>
      <div
        className={"relative cursor-pointer group"}
        onClick={
          props.onChange as MouseEventHandler<HTMLDivElement> | undefined
        }
      >
        <input
          type="checkbox"
          id="pricing-toggle"
          className={"sr-only"}
          {...props}
        />
        <div
          className={
            "block h-8 w-14 bg-gradient-to group-hover:bg-gradient-from transition rounded-full"
          }
        ></div>
        <div
          className={clsx(
            "absolute left-1 top-1 h-6 w-6 bg-white rounded-full transition flex items-center justify-center",
            {
              "translate-x-full": props.checked,
              "translate-x-0": !props.checked,
            },
          )}
        ></div>
      </div>
      <label
        htmlFor="pricing-toggle"
        className={"text-light-grayish-blue select-none cursor-pointer"}
      >
        Monthly
      </label>
    </div>
  );
}
