import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function getIsMacSnapshot(): boolean {
  const ua = navigator.userAgent;
  const platform = (navigator as Navigator & { userAgentData?: { platform?: string } })
    .userAgentData?.platform;
  return /Mac|iPhone|iPad|iPod/.test(platform || ua);
}

export function useIsMac(): boolean {
  return useSyncExternalStore(
    subscribe,
    getIsMacSnapshot,
    () => false,
  );
}

export function useMetaKeyLabel(): { symbol: string; verbose: string } {
  const isMac = useIsMac();
  return isMac ? { symbol: "⌘", verbose: "Cmd" } : { symbol: "Ctrl", verbose: "Ctrl" };
}
