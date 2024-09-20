"use client";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { useCallback, useState } from "react";
import { CopyButton } from "./copy-button";
import { useTheme } from "next-themes";

type Lines = {
  edit?: (number | string)[];
  add?: number[];
  remove?: number[];
};

interface Props {
  code: string;
  language: string;
  filename?: string;
  copyButtonVisible?: boolean;
  lines?: Lines;
  words?: string[];
}

export function UICodeBlock({
  code,
  language,
  filename,
  copyButtonVisible = true,
  lines,
  words,
}: Props) {
  const [copied, setCopied] = useState<string>();
  const { theme } = useTheme();

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
    } catch (error: any) {
      console.error(error);
    }
  };

  const defineLineColor = useCallback(
    (isLineHighlighted: boolean, lineNumber: number): string => {
      const { add = [], remove = [] } = lines || {};
      if (add.includes(lineNumber) && remove.includes(lineNumber)) {
        // if conflict between remove & add
        return "blue";
      }
      if (add.includes(lineNumber)) {
        return "green";
      }
      if (remove.includes(lineNumber)) {
        return "red";
      }
      if (isLineHighlighted) {
        return "blue";
      }
      return "";
    },
    [lines],
  );

  return (
    <CodeBlock
      code={code}
      language={language}
      theme={theme === "dark" ? themes.dracula : themes.github}
      lines={lines?.edit}
      words={words}
    >
      <div className="relative  border border-gray-200 rounded-xl">
        {filename ? (
          <div className="bg-gray-100 text-sm text-gray-500 border-b p-4 rounded-t-xl">
            {filename}
          </div>
        ) : null}
        <CodeBlock.Code className="overflow-y-auto p-4">
          {({ isLineHighlighted, lineNumber }) => {
            const lineColor = defineLineColor(isLineHighlighted, lineNumber);
            return (
              <div className={`table-row bg-${lineColor}-100`}>
                <CodeBlock.LineNumber
                  className={`table-cell pr-4 text-xs text-gray-400 text-right select-none ${
                    lineColor
                      ? `text-gray-900 border-l-2 border-${lineColor}-500`
                      : "text-gray-500"
                  }`}
                />
                <CodeBlock.LineContent className="table-cell w-full">
                  <CodeBlock.Token>
                    {({ isTokenHighlighted, children }) => (
                      <span
                        className={
                          isTokenHighlighted
                            ? `bg-blue-100 rounded-md px-1 py-0.5`
                            : ""
                        }
                      >
                        {children}
                      </span>
                    )}
                  </CodeBlock.Token>
                </CodeBlock.LineContent>
              </div>
            );
          }}
        </CodeBlock.Code>
        <CopyButton
          className="absolute top-4 right-4 cursor-pointer"
          onClick={copyCode}
          isCopied={!!copied}
          visible={copyButtonVisible}
        />
      </div>
    </CodeBlock>
  );
}
