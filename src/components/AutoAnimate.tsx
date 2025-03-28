import {Children, cloneElement, isValidElement, PropsWithChildren} from "react";

export interface AutoAnimateProps {
  unmatched?: boolean;
}

export const AutoAnimate = ({children, unmatched}: PropsWithChildren<AutoAnimateProps>) => {
  const id = crypto.randomUUID();
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          const extraProps = {
            "data-auto-animate": true,
            "data-auto-animate-id": id,
            "data-auto-animate-unmatched": unmatched,
          };

          return cloneElement(child, extraProps);
        } else return child;
      })}
    </>
  );
};
