import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Detail User</h1>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default UserDetail;
