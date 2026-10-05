// Browser hints are a convenience. Both download choices always remain visible.
export function detectPlatform(nav) {
  if (!nav) return null;
  const ua = nav.userAgent || "";
  const platform = nav.userAgentData?.platform || nav.platform || "";
  if (/Android|iPhone|iPad|iPod|Windows Phone/i.test(ua)) return null;
  if (/Mac/i.test(platform) && Number(nav.maxTouchPoints || 0) > 1) return null;
  if (/Windows|Win32|Win64/i.test(platform) || /Windows NT/i.test(ua)) return "windows";
  if (/macOS|MacIntel|MacPPC|Macintosh/i.test(platform) || /Macintosh|Mac OS X/i.test(ua))
    return "mac";
  return null;
}

export function resolveDownload(downloads, platform) {
  const download = platform ? downloads?.[platform] : null;
  return download?.url ? download : null;
}
