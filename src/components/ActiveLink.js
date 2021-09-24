import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function ActiveLink({  to, activeOnlyWhenExact, label }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return <Link to={to} style={match ? { color: '#F24E1E' }: null}>{label}</Link>;
}
export default ActiveLink;
