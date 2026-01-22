import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
