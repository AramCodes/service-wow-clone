import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="service">
                    ServiceW<span className="green-O">o</span>w
                </Link>
            </div>
            <ul>
                {user === null ? (
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;
