import {useState,useEffect} from 'react'
//creating custom hook,using  Promise  and  forEach


  interface Users {
    id: number;
    name: string;
    role: string;
    status: string;
  }
export const useUsers = () => {
    const [users, setUsers] = useState<Users[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [active, setActiveCount] = useState<number>(0);
      const [error, setError] = useState<String | null>(null);

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
          setError(error as string);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  return {users,loading,active,error}
}

