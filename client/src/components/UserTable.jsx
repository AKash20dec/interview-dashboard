import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers= async () => {
        const res = await axios.get("http://localhost:8080/api/v1/users");
        setUsers(res.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
        await fetchUsers();
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main>
            <div className="px-12">
                <table className="table table-zebra table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={user._id}>

                                    <td>
                                        <Link to={`/user-detail/${user._id}`}>
                                            <div className="flex items-center space-x-3">
                                                {/* <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={user.image}
                                                            alt="Product Image" />
                                                    </div>
                                                </div> */}
                                                {user.name}
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        {user.dob.substring(0, 10)}
                                    </td>        
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.contactNumber}
                                    </td>
                                    <td>
                                        {user.userDescription}
                                    </td>
                                    <td>
                                        <Link to={`link too modify form`}>
                                            <button className="btn btn-outline btn-primary btn-sm">Modify</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(user._id)}
                                            className="btn btn-outline btn-error btn-sm">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* <Pagination/> */}

        </main>
    )
}

export default UserTable;