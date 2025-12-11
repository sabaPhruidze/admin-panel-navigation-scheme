import React, { useState, useEffect } from "react";
//using Promise ,&& operator and forEach, table element as well
const Users = () => {
  interface Users {
    id: number;
    name: string;
    role: string;
    status: string;
  }

  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActiveCount] = useState<number>(0);

  useEffect(() => {
    const mockApiCall = new Promise<Users[]>((resolve, reject) => {
      setTimeout(() => {
        // only in order to test reject as well and.catch I am writing this
        const isSuccess = Math.random() > 0.2;
        if (isSuccess) {
          resolve([
            { id: 1, name: "George", role: "Admin", status: "Active" },
            { id: 2, name: "Ana", role: "Editor", status: "Inactive" },
            { id: 3, name: "Anderson", role: "Viewer", status: "Active" },
            { id: 4, name: "Elene", role: "Editor", status: "Active" },
          ]);
        } else {
          reject("No connection with server");
        }
      }, 2000);
    });
    //Promise chain
    mockApiCall
      .then((data) => {
        setUsers(data);
        //counting people who are active
        let count = 0;
        data.forEach((user) => {
          if (user.status === "Active") {
            count++;
          }
        });
        setActiveCount(count);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>Users</div>;
};

export default Users;
