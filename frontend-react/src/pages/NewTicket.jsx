import { useState } from "react";
import { useSelector } from "react-redux";

const NewTicket = () => {
    const { user } = useSelector((state) => state.auth);
    const [name] = useState(user.name);
    const [email] = useState(user.email);
    const [product, setProduct] = useState("iphone");
    const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="heading">
                <h1>Create a New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Customer&apos;s Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        disabled
                    />
                    <label htmlFor="name">Customer&apos;s Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        disabled
                    />
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="product">Customer&apos;s Product</label>
                        <select
                            name="product"
                            id="product"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        >
                            <option value="iPhone">iPhone</option>
                            <option value="iPad">iPad</option>
                            <option value="MacBook">MacBook</option>
                            <option value="MacBook Pro">MacBook Pro</option>
                            <option value="iMac">iMac</option>
                            <option value="Apple Watch">Apple Watch</option>
                            <option value="Apple Vision Pro">
                                Apple Vision Pro
                            </option>
                            <option value="Air Pods">Air Pods</option>
                            <option value="MacBook Air">MacBook Air</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Describe the issue</label>
                        <textarea
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default NewTicket;