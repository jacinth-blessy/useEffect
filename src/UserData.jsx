import { useState, useEffect } from "react";

function UserData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching user data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!user) return <div>No user data.</div>;

    return (
        <div>
            <h2>User Data</h2>
            <p>User name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default UserData;