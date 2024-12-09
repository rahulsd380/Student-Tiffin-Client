// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import Cookies from "js-cookie";

// interface User {
//   _id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   role: string;
// }

// interface UserContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(() => {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   useEffect(() => {
//     // Check for token in cookies
//     const token = Cookies.get("user_auth_token");

//     if (!user && token) {
//       const fetchUser = async () => {
//         try {
//           const { data } = await axiosInstance.get("/auth/me", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(data.data);
//           localStorage.setItem("user", JSON.stringify(data.data));
//         } catch (error) {
//           console.error("Failed to fetch user data:", error);
//           setUser(null);
//           localStorage.removeItem("user");
//         }
//       };

//       fetchUser();
//     }
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };
