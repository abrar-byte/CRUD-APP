import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [tanggalPasang, setTanggalPasang] = useState("");
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");
  const [noId, setNoId] = useState("");
  const [paket, setPaket] = useState("hemat");
  const [alamat, setAlamat] = useState("");

  const [jatuhTempoPembayaran, setJatuhTempoPembayaran] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState("");
  const [jumlahTagihan, setJumlahTagihan] = useState(0);
  const [hargaPembayaran, setHargaPembayaran] = useState(0);
  const [tanggalPembayaran, setTanggalPembayaran] = useState("");
  const [sisaPiutang, setSisaPiutang] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    console.log('tes');
    try {
      await axios.post("http://localhost:5000/users", {
        tanggalPasang,
        name,
        noHp,
        noId,
        paket,
        alamat,
        // jatuhTempoPembayaran,
        // buktiPembayaran,
        // jumlahTagihan,
        // hargaPembayaran,
        // tanggalPembayaran,
        // sisaPiutang,
        keterangan,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto p-10  mt-5">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3 ">
            <form onSubmit={saveUser}>
              <div className="shadow overflow-hidden sm:rounded-md ">
                <div className="px-4 py-5 bg-gray-300 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="nama"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tanggal
                      </label>
                      <input
                        type="date"
                        value={tanggalPasang}
                        onChange={(e) => setTanggalPasang(e.target.value)}
                        name="tanggal"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-4">
                <label for="first-name" className="block text-sm font-medium text-gray-700">Keterangan</label>
                <textarea name="first-name" id="first-name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div> */}

<div className="col-span-6">
                      <label
                        for="alamat"
                        className="block text-sm font-medium text-gray-700"
                      >
                        alamat
                      </label>
                      <textarea
                        type="text"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        name="alamat"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        for="keterangan"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Keterangan
                      </label>
                      <textarea
                        type="text"
                        value={keterangan}
                        onChange={(e) => setKeterangan(e.target.value)}
                        name="keterangan"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="hp"
                        className="block text-sm font-medium text-gray-700"
                      >
                        No Hp
                      </label>
                      <input
                        type="number"
                        name="hp"
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="id"
                        className="block text-sm font-medium text-gray-700"
                      >
                        No Id
                      </label>
                      <input
                        type="number"
                        value={noId}
                        onChange={(e) => setNoId(e.target.value)}
                        name="id"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="paket"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Paket
                      </label>
                      <input
                        type="text"
                        value={paket}
                        onChange={(e) => setPaket(e.target.value)}
                        name="paket"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="columns mt-5 is-centered">
    //   <div className="column is-half">
    //     <form onSubmit={saveUser}>
    //     <div className="field">
    //         <label className="label">Tanggal Pasang</label>
    //         <div className="control">
    //           <input
    //             type="date"
    //             className="input"
    //             value={tanggalPasang}
    //             onChange={(e) => setTanggalPasang(e.target.value)}
    //             placeholder="Tanggal Pasang"
    //           />
    //         </div>
    //       <div className="field">
    //         <label className="label">Name</label>
    //         <div className="control">
    //           <input
    //             type="text"
    //             className="input"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="Name"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">No Hp</label>
    //         <div className="control">
    //           <input
    //             type="number"
    //             className="input"
    //             value={noHp}
    //             onChange={(e) => setNoHp(e.target.value)}
    //             placeholder="NoHp"
    //           />
    //         </div>
    //       </div>
    //       {/* <div className="field">
    //         <label className="label">No ID</label>
    //         <div className="control">
    //           <input
    //             type="text"
    //             className="input"
    //             value={noid}
    //             onChange={(e) => setNoid(e.target.value)}
    //             placeholder="Noid"
    //           />
    //         </div>
    //       </div> */}
    //       </div>
    //       <div className="field">
    //         <label className="label">Paket</label>
    //         <div className="control">
    //           <div className="select is-fullwidth">
    //             <select
    //               value={paket}
    //               onChange={(e) => setPaket(e.target.value)}
    //             >
    //               <option value="Hemat">Hemat</option>
    //               <option value="Mantap">Mantap</option>
    //               <option value="Jitu">Jitu</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Jatuh Tempo Pembayaran</label>
    //         <div className="control">
    //           <input
    //             type="text"
    //             className="input"
    //             value={jatuhTempoPembayaran}
    //             onChange={(e) => setJatuhTempoPembayaran(e.target.value)}
    //             placeholder="JatuhTempoPembayaran"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Bukti Pembayaran</label>
    //         <div className="control">
    //           <div className="select is-fullwidth">
    //             <select
    //               value={buktiPembayaran}
    //               onChange={(e) => setBuktiPembayaran(e.target.value)}
    //             >
    //               <option value="Cash">Cash</option>
    //               <option value="Livin">Livin</option>
    //               <option value="Qris">Qris</option>
    //               <option value="Gopay">Gopay</option>
    //               <option value="Link">Link</option>
    //               <option value="Dana">Dana</option>
    //               <option value="Shopee Pay">Shopee Pay</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Jumlah Tagihan</label>
    //         <div className="control">
    //           <div className="select is-fullwidth">
    //             <select
    //               value={jumlahTagihan}
    //               onChange={(e) => setJumlahTagihan(e.target.value)}
    //             >
    //               <option value={116500}>Rp.116.500</option>
    //               <option value={277500}>Rp.277.500</option>
    //               <option value={438500}>Rp.438.500</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Harga Pembayaran</label>
    //         <div className="control">
    //           <input
    //             type="number"
    //             className="input"
    //             value={hargaPembayaran}
    //             onChange={(e) => setHargaPembayaran(e.target.value)}
    //             placeholder="hargaPembayaran"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Tanggal Pembayaran</label>
    //         <div className="control">
    //           <input
    //             type="date"
    //             className="input"
    //             value={tanggalPembayaran}
    //             onChange={(e) => setTanggalPembayaran(e.target.value)}
    //             placeholder="tanggalPembayaran"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Sisa Piutang</label>
    //         <div className="control">
    //           <input
    //             type="number"
    //             className="input"
    //             value={sisaPiutang}
    //             onChange={(e) => setSisaPiutang(e.target.value)}
    //             placeholder="SisaPiutang"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Keterangan</label>
    //         <div className="control">
    //           <input
    //             type="text"
    //             className="input"
    //             value={keterangan}
    //             onChange={(e) => setKeterangan(e.target.value)}
    //             placeholder="Keterangan"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <label className="label">Upload</label>
    //         <div className="control">
    //           <input
    //             type="text"
    //             className="input"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="Name"
    //           />
    //         </div>
    //       </div>
    //       <div className="field">
    //         <button type="submit" className="button is-success">
    //           Save
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default AddUser;
