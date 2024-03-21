import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import PasswordValidationTracker from "../components/PasswordValidationTracker";

function Register() {
    const [passwordIsRevealed, setPasswordIsRevealed] = useState(false);
    const [passwordConfirmIsRevealed, setPasswordConfirmIsRevealed] =
        useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    // validation cases
    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [characters, setCharacters] = useState(false);
    const { name, email, password, password2 } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading } = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

        validateEntry(e.target.value);
    };

    const validateEntry = (entry) => {
        const lower = new RegExp("(?=.*[a-z])");
        const upper = new RegExp("(?=.*[A-Z])");
        const number = new RegExp("(?=.*[0-9])");
        const special = new RegExp("(?=.*[!@#$%^&*])");
        const length = new RegExp("(?=.{8,})");

        // validate lowercase
        lower.test(entry) ? setLowercase(true) : setLowercase(false);
        // validate uppercase
        upper.test(entry) ? setUppercase(true) : setUppercase(false);
        // validate number
        number.test(entry) ? setNumber(true) : setNumber(false);
        // validate symbol
        special.test(entry) ? setSymbol(true) : setSymbol(false);
        // validate length
        length.test(entry) ? setCharacters(true) : setCharacters(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                name,
                email,
                password,
            };

            dispatch(register(userData))
                .unwrap()
                .then((user) => {
                    toast.success(`Registered new user - ${user.name}`);
                    navigate("/");
                })
                .catch(toast.error);
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group input-with-icon">
                        <input
                            type={passwordIsRevealed ? "text" : "password"}
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter password"
                            required
                        />
                        {passwordIsRevealed ? (
                            <span
                                className="icon-span"
                                onClick={() => setPasswordIsRevealed(false)}
                            >
                                <FaRegEyeSlash size={26} className="icons" />
                            </span>
                        ) : (
                            <span
                                className="icon-span"
                                onClick={() => setPasswordIsRevealed(true)}
                            >
                                <FaRegEye size={26} className="icons" />
                            </span>
                        )}
                    </div>
                    <div className="form-group input-with-icon">
                        <input
                            type={
                                passwordConfirmIsRevealed ? "text" : "password"
                            }
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            onChange={onChange}
                            placeholder="Confirm password"
                            required
                        />
                        {passwordConfirmIsRevealed ? (
                            <span
                                className="icon-span"
                                onClick={() =>
                                    setPasswordConfirmIsRevealed(false)
                                }
                            >
                                <FaRegEyeSlash size={26} className="icons" />
                            </span>
                        ) : (
                            <span
                                className="icon-span"
                                onClick={() =>
                                    setPasswordConfirmIsRevealed(true)
                                }
                            >
                                <FaRegEye size={26} className="icons" />
                            </span>
                        )}
                    </div>
                    <PasswordValidationTracker
                        lowercase={lowercase}
                        uppercase={uppercase}
                        number={number}
                        symbol={symbol}
                        characters={characters}
                    />
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;
