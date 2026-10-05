export default function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    back: (
      <>
        <path d="M19 12H5m6-6-6 6 6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />
      </>
    ),
    calculator: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M8 6h8M8 11h1m6 0h1m-8 4h1m6 0h1m-8 4h1m6 0h1" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8m-8 4h8" />
      </>
    ),
    history: (
      <>
        <path d="M3 11a9 9 0 1 1 2 7M3 4v7h7m2-4v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    windows: (
      <>
        <path
          d="M3 5 10 4v7H3V5Zm10-1 8-1v8h-8V4ZM3 14h7v7l-7-1v-6Zm10 0h8v8l-8-1v-7Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    mac: (
      <>
        <path d="M15 6c-1 0-2 .8-3 .8S10 6 9 6C5 6 4 9 5 13s3 8 5 8c1 0 1.5-.7 2.5-.7S14 21 15 21c2 0 3-3 4-5-3-1-4-5-1-7-1-2-2-3-3-3Z" />
        <path d="M12 5c0-2 2-4 4-4 0 2-2 4-4 4Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
