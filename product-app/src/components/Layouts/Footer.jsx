import PropTypes from "prop-types";

function Footer(props)
{
    return (
        <>
        <div className="container">
        <center><p>@{props.year} - Copyright</p></center>
        </div>
        </>
    )
}
Footer.propTypes = {
    year: PropTypes.number
}
export default Footer;