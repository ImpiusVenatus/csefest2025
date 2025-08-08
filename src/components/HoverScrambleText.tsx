"use client";

import {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import type { JSX as ReactJSX } from "react";

const DEFAULT_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export interface HoverScrambleTextProps {
  text: string;
  as?: keyof ReactJSX.IntrinsicElements;
  speedMs?: number; // interval speed
  step?: number; // how many indices to advance per tick (e.g., 1/3)
  letters?: string; // character set to scramble from
  resetOnLeave?: boolean; // reset to original text on mouse leave
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface HoverScrambleTextRef {
  triggerMouseEnter: () => void;
  triggerMouseLeave: () => void;
}

const HoverScrambleText = forwardRef<
  HoverScrambleTextRef,
  HoverScrambleTextProps
>(
  (
    {
      text,
      as = "h1",
      speedMs = 30,
      step = 1 / 3,
      letters = DEFAULT_LETTERS,
      resetOnLeave = false,
      className = "",
      style,
      onMouseEnter: externalOnMouseEnter,
      onMouseLeave: externalOnMouseLeave,
    },
    ref
  ) => {
    const [displayText, setDisplayText] = useState<string>(text);
    const intervalIdRef = useRef<number | null>(null);
    const targetTextRef = useRef<string>(text);

    // Keep target and displayed text in sync with prop changes
    useEffect(() => {
      targetTextRef.current = text;
      setDisplayText(text);
    }, [text]);

    const clearRunningInterval = () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };

    const handleMouseEnter = () => {
      let localIteration = 0;

      clearRunningInterval();

      intervalIdRef.current = window.setInterval(() => {
        setDisplayText(() => {
          const target = targetTextRef.current;
          const scrambled = target
            .split("")
            .map((_, index) => {
              if (index < localIteration) {
                return target[index];
              }
              const randomIndex = Math.floor(Math.random() * letters.length);
              return letters[randomIndex] ?? target[index];
            })
            .join("");

          return scrambled;
        });

        if (localIteration >= targetTextRef.current.length) {
          clearRunningInterval();
        }

        localIteration += step;
      }, speedMs);

      // Call external handler if provided
      externalOnMouseEnter?.();
    };

    const handleMouseLeave = () => {
      if (resetOnLeave) {
        clearRunningInterval();
        setDisplayText(targetTextRef.current);
      }

      // Call external handler if provided
      externalOnMouseLeave?.();
    };

    // Expose handlers via ref
    useImperativeHandle(ref, () => ({
      triggerMouseEnter: handleMouseEnter,
      triggerMouseLeave: handleMouseLeave,
    }));

    // Cleanup on unmount
    useEffect(() => {
      return () => clearRunningInterval();
    }, []);

    const Tag = as as any;

    return (
      <Tag
        data-value={text}
        className={className}
        style={style}
        aria-label={text}
      >
        {displayText}
      </Tag>
    );
  }
);

HoverScrambleText.displayName = "HoverScrambleText";

export default HoverScrambleText;
