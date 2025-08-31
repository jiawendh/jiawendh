"use client"

import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from 'react';

const TypewriterTexts: string[] = [
  "Building interactive & scalable applications",
  // "Upgrading my humble abode in Minecraft...",
  // "Brb, trying something new!"
]

export default function Typewriter(props: { speed?: number, pause?: number, className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);
  // const [displayedTextIndex, setDisplayedTextIndex] = useState(-1);
  const speed = props.speed ?? 100;
  const startPause = 500;
  const endPause = props.pause ?? 2000;

  const typewriterTimeout = useCallback((text: string, delay: number) => {
    if (letterIndex < text.length) { // && displayedTextIndex != textIndex
      setTimeout(() => {
        setDisplayText(prevText => prevText + text.charAt(letterIndex));
        setLetterIndex(prevIndex => prevIndex + 1);
      }, speed + delay);
    }
    else {
      // setTimeout(() => {
      //   setDisplayedTextIndex(textIndex);
      //   setLetterIndex(prevIndex => prevIndex - 1);
      //   setDisplayText(prevText => prevText.substring(0, prevText.length - 1));
      // }, endPause + delay);
    }
  }, [letterIndex, speed]);

  const typewriterMap = useCallback((texts: string[]) => {
    texts.map((text: string, textIndex: number) => {
      let prevWordsDelay = 0;
      for(let i = 1; i <= textIndex; ++i) {
        prevWordsDelay += texts[i-1].length*speed;
      }
      typewriterTimeout(text, (prevWordsDelay*2) + (endPause*textIndex) + (startPause*textIndex));
    })
  }, [endPause, speed, typewriterTimeout]);
  
  useEffect(() => {
    // if(displayedTextIndex === TypewriterTexts.length - 1 && displayText.length === 0) {
    //   setLetterIndex(0);
    // }
    typewriterMap(TypewriterTexts);
  }, [typewriterMap]);

  return (
    <div className="w-full xl:min-w-[400px]">
      <p
        className={cn("text-xs md:text-sm font-semibold inline",
        "bg-gray-500/[.15] px-2.5 py-0.5 rounded hover:cursor-default",
        props.className)}
      >
        {displayText}<span className="animate-blink">|</span>
      </p>
    </div>
  );
}
