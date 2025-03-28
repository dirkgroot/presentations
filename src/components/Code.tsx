import {PropsWithChildren} from "react";

export interface CodeBlockProps extends PropsWithChildren {
  lineNumbers?: boolean | string;
  language?: "kotlin" | "java";
}

export const Code = ({language, children, lineNumbers}: CodeBlockProps) => (
  <pre data-id="code"><code data-trim={true} data-line-numbers={lineNumbers}
                            className={language ? `language-${language}` : undefined}>
    {children}
  </code></pre>
);
