
import { useEffect, useState } from "react";
import axios from "axios";



export default function GlobalPresence() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>
     {
    axios.get("http://localhost:5000/api/countries")
      .then(res => setCountries(res.data));
  }, []);


  return (

    <section className="py-24 px-10 bg-black text-white">
      <h2 className="text-3xl font-semibold">Global Presence</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {countries.map((c) => (

          <div key={c._id} className="border border-gray-700 p-6 rounded-xl">
                     <h3 className="text-xl font-bold">{c.name}</h3>
            <p className="text-gray-400">

              Students: {c.studentsPlaced}+
            </p>

          </div>
           
        ))}
      </div>
    </section>
  );
}
