import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  let filteredTask = [...users];
  if (searchInput?.length > 0) {
    filteredTask = filteredTask.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.paket.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.jatuhTempoPembayaran
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        item.buktiPembayaran
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <div className=" w-full mx-auto">
      <div className="grid text-center justify-center">
        <div>Search</div>
        <div>
          {" "}
          <input
            type="search"
            className="border-2 rounded caret-pink-500 px-1 border-gray-700"
            placeholder=""
            onChange={handleChange}
            value={searchInput}
          />
        </div>
      </div>
      <div className="grid gap-y-10 mt-10 justify-items-center md:flex w-screen justify-center md:justify-start">
       <div>
         <Link
           to={`add`}
           className="cursor-pointer p-3 rounded-md  w-44 mt-10 whitespace-nowrap md:ml-2 text-sm text-gray-900 bg-green-500"
         >
           Tambah Pemasang Baru
         </Link>
       </div>
     
      </div>
      <div className="overflow-x-scroll mt-5">
        <table>
          <thead className="whitespace-nowrap">
            <tr>
              <th className="p-2">No.</th>
              <th className="px-5">Tanggal</th>
              <th className="px-32">Nama</th>
              <th className="px-14">No HP</th>
              <th className="p-2">No ID</th>
              <th
                className="px-10"

              >
                Paket
              </th>
              <th className="px-32">Alamat</th>

              <th className="p-2">Keterangan</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              filteredTask.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.tanggalPasang}</td>
                  <td>{user.name}</td>
                  <td>{user.noHp}</td>
                  <td>{user.noId}</td>
                  <td>{user.paket}</td>
                  <td>{user.alamat}</td>

                  <td>{user.keterangan}</td>

                  <td className="flex justify-between items-center p-2">
                    <Link
                      to={`edit/${user.id}`}
                      className="cursor-pointer py-2 px-4 rounded-md text-sm text-gray-900 bg-green-500 mr-2  hover:bg-blue-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="cursor-pointer p-2 rounded-md text-sm text-gray-900 bg-green-500  hover:bg-blue-500"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
