import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function ActiveLink({ to, activeOnlyWhenExact, label, className, onClick }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link
      className={className}
      to={to}
      style={match ? { color: "#F24E1E" } : null}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
export default ActiveLink;
