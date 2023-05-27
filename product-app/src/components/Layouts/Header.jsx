import PropTypes from "prop-types";

function Header(props)
{
    return (
        <>
        <nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Welcome to Stock System</span>
    <small>You are the customer number {props.customers}</small>
  </div>
</nav>
        </>
    )
}
Header.propTypes = {
    customers: PropTypes.number
}
export default Header;