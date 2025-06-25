import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'presence'), (snapshot) => {
      setUsers(snapshot.docs.map(doc => doc.data()));
    });
    return unsub;
  }, []);

  return (
    <div className="bg-white border rounded p-2 mb-3">
      <h6 className="mb-2">🟢 Online Users</h6>
      {users.map((user, index) =>
        user.status === 'online' && (
          <div key={index} className="d-flex align-items-center mb-2">
            <img src={user.photoURL} alt="avatar" width="24" height="24" className="rounded-circle me-2" />
            <small>{user.displayName}</small>
          </div>
        )
      )}
    </div>
  );
};

export default UserList;
