import { FaRegCircleXmark } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// <FaRegCircleXmark /> <IoCheckmarkCircleOutline />

/* eslint-disable react/prop-types */
const PasswordValidationTracker = (props) => {
    return (
        <section className="tracker-box">
            <div
                className={
                    props.lowercase
                        ? "validated form-group"
                        : "not-validated form-group"
                }
            >
                Password needs at least one lowercase letter
                {props.lowercase ? (
                    <span className="list-icon green">
                        <IoCheckmarkCircleOutline />
                    </span>
                ) : (
                    <span className="list-icon red">
                        <FaRegCircleXmark />
                    </span>
                )}
            </div>
            <div
                className={
                    props.uppercase
                        ? "validated form-group"
                        : "not-validated form-group"
                }
            >
                Password needs at least one uppercase letter
                {props.uppercase ? (
                    <span className="list-icon green">
                        <IoCheckmarkCircleOutline />
                    </span>
                ) : (
                    <span className="list-icon red">
                        <FaRegCircleXmark />
                    </span>
                )}
            </div>
            <div
                className={
                    props.number
                        ? "validated form-group"
                        : "not-validated form-group"
                }
            >
                Password needs at least one number
                {props.number ? (
                    <span className="list-icon green extra">
                        <IoCheckmarkCircleOutline />
                    </span>
                ) : (
                    <span className="list-icon red extra">
                        <FaRegCircleXmark />
                    </span>
                )}
            </div>
            <div
                className={
                    props.symbol
                        ? "validated form-group"
                        : "not-validated form-group"
                }
            >
                Password needs at least one symbol
                {props.symbol ? (
                    <span className="list-icon green extra">
                        <IoCheckmarkCircleOutline />
                    </span>
                ) : (
                    <span className="list-icon red extra">
                        <FaRegCircleXmark />
                    </span>
                )}
            </div>
            <div
                className={
                    props.characters
                        ? "validated form-group"
                        : "not-validated form-group"
                }
            >
                Password needs at least 8 characters
                {props.characters ? (
                    <span className="list-icon green extra">
                        <IoCheckmarkCircleOutline />
                    </span>
                ) : (
                    <span className="list-icon red extra">
                        <FaRegCircleXmark />
                    </span>
                )}
            </div>
        </section>
    );
};

export default PasswordValidationTracker;
