interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="2.139" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextjsIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.93 14.36L8.8 8.25h-1.3v7.5h1.25v-5.49l6.56 8.67c-.41.17-.85.29-1.31.37zM15.5 8.25h1.25v7.5H15.5v-7.5z"
        fill="white"
      />
    </svg>
  );
}

export function TailwindIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C13.29 10.53 14.355 11.7 16.5 11.7c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C15.21 7.17 14.145 6 12 6zM7.5 11.7C5.1 11.7 3.6 12.9 3 15.3c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C8.79 16.23 9.855 17.4 12 17.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C10.71 12.87 9.645 11.7 7.5 11.7z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M13.25 13.25V18h-1.625v-4.75H9.5V12h6v1.25h-2.25zM16 12h1.75c0 .75.5 1.375 1.25 1.375.688 0 1.125-.375 1.125-.938 0-.625-.5-.875-1.375-1.187C17.5 10.813 16.375 10.25 16.375 8.875 16.375 7.563 17.375 7 18.625 7c1.375 0 2.25.813 2.375 2.063H19.25c-.063-.563-.438-.938-1-.938-.5 0-.875.25-.875.75 0 .5.5.75 1.375 1.063 1.375.5 2.5 1 2.5 2.562C21.25 14 20.125 14.875 18.688 14.875 17.063 14.875 16 13.875 16 12z" fill="white" />
    </svg>
  );
}

export function ViteIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21.035 3.13L12.613 19.216a.393.393 0 01-.696-.006L2.948 3.13a.393.393 0 01.415-.573l9.138 1.697a.39.39 0 00.143 0l8.976-1.696a.393.393 0 01.415.573z" fill="url(#vite-grad1)" />
      <path d="M15.185 2.013L8.604 3.29a.196.196 0 00-.158.18l-.412 6.878a.196.196 0 00.226.205l1.7-.308a.196.196 0 01.225.232l-.505 2.445a.196.196 0 00.25.23l1.05-.32a.196.196 0 01.25.232l-.803 3.886 2.533-4.785.137-.258-1.729.314a.196.196 0 01-.225-.236l.713-3.1a.196.196 0 01.224-.15l1.71.308a.196.196 0 00.224-.204l-.27-4.538a.196.196 0 00-.16-.187z" fill="url(#vite-grad2)" />
      <defs>
        <linearGradient id="vite-grad1" x1="12" y1="2.5" x2="12" y2="21.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-grad2" x1="12" y1="2.5" x2="12" y2="21.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3E00" />
          <stop offset="1" stopColor="#FF9900" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SupabaseIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M13.997 2.06a1.192 1.192 0 00-2.057.821v9.117H3.77a1.192 1.192 0 00-.847 2.036l8.231 8.231a1.192 1.192 0 002.04-.847V12.1h8.24a1.192 1.192 0 00.847-2.036L13.997 2.06z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

export function CloudflareIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16.5 15.75c.207-.712.131-1.369-.225-1.856-.328-.45-.862-.713-1.519-.744l-8.381-.113a.178.178 0 01-.15-.094.188.188 0 010-.187.178.178 0 01.169-.094l8.456-.112c1.003-.047 2.1-.863 2.484-1.857l.487-1.275a.281.281 0 00.01-.188A7.5 7.5 0 003.75 12a7.5 7.5 0 00.056.863A3 3 0 015.25 18.75h10.688a.375.375 0 00.375-.319c.056-.216.112-.45.15-.675h.037z"
        fill="#F6821F"
      />
      <path
        d="M18.994 9.956a.544.544 0 00-.038.131c-.375 1.219-1.425 2.082-2.625 2.082-.187 0-.356-.019-.525-.056l-.188-.038a.468.468 0 00-.431.169.469.469 0 00-.075.45c.113.3.169.619.169.956 0 1.519-1.238 2.775-2.756 2.775a2.775 2.775 0 01-2.756-2.775c0-.113 0-.225.019-.338h-5.4a3.019 3.019 0 000 6.038h15.956c1.462 0 2.65-1.05 2.65-2.344a2.35 2.35 0 00-4.0-1.65z"
        fill="#FBAD41"
      />
    </svg>
  );
}

export function GitIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 11-1.1 1.04l-2.48-2.48v6.532a1.838 1.838 0 11-1.51-.05V9.64a1.838 1.838 0 01-.997-2.41L7.617 4.503 .452 11.668a1.55 1.55 0 000 2.187l10.478 10.478a1.55 1.55 0 002.188 0l10.427-10.427a1.55 1.55 0 000-2.185z"
        fill="#F05033"
      />
    </svg>
  );
}

export function VercelIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L2 19.778h20L12 2z" fill="white" />
    </svg>
  );
}

export function VSCodeIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
        fill="#007ACC"
      />
    </svg>
  );
}
