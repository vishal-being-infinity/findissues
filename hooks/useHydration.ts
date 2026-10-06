import { useEffect, useState } from "react";

export function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    console.log('in the controller');
    setHydrated(true);
  }, []);

  return hydrated;
}
