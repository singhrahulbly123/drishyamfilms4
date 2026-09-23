export default function InternalLink({ to, onNavigate, children, ...props }) {
  return (
    <a
      href={to}
      {...props}
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        event.preventDefault();
        onNavigate(to);
      }}
    >
      {children}
    </a>
  );
}
