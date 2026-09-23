export default function TicketButton({ className = "", children, ...props }) {
  const classes = className.split(/\s+/).includes("ticket-button")
    ? className
    : [className, "ticket-button"].filter(Boolean).join(" ");
  return (
    <button {...props} className={classes}>
      {children}
      <svg
        className="ticket-default-svg"
        fill="none"
        viewBox="0 0 142 44"
        preserveAspectRatio="none"
        width="100%"
        aria-hidden="true"
      >
        <path
          stroke="white"
          d="M5 1h90c0 1 .6 3 3 3s3-2 3-3h36c0 3.2 2.667 4.144 4 4.216V39c-3.2 0-4 2.667-4 4h-35c0-1.333-.8-4-4-4s-4 2.667-4 4H5c0-3.6-2.667-4.167-4-4V5c3.2 0 4-2.667 4-4Z"
          data-explore=""
        />
        <path
          stroke="currentColor"
          d="M98 4.5v34"
          strokeDasharray="4"
          data-explore-line=""
        />
      </svg>
    </button>
  );
}
