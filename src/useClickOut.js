import { useEffect, useState } from "react";

const useClickOut = (ref) => {
  const [active, setActive] = useState(false);

  const onClickOutside = (evt) => {
    if (ref.current && !ref.current.contains(evt.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () =>
      document.removeEventListener("mousedown", onClickOutside);
  });

  return [ active, setActive ];
};

export default useClickOut;

