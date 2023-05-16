import React from "react";

const Contact = () => {
	return (
		<div className='flex flex-col gap-5 justify-center tab-content p-10 m-5 rounded-3xl border-2 bg-gray-50/100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<p className="font-extrabold text-4xl">CONTACT US</p>
      <div>
        <p className="font-bold text-xl">Postal Address :</p>
        <p>
          The LNM Institute of Information Technology<br></br>
          Rupa ki Nangal, Post-Sumel,Via-Jamdoli<br></br>
          Jaipur-302031, (Rajasthan) INDIA
        </p>
      </div>
			<div>
        <p className="font-bold text-xl">Post Box Address :</p>
        <p>
          Ordinary/Book-Post- Post Box No. 618 Jawahar Nagar, Head Post Office,
          Jaipur, Pin-302 004(Rajasthan)<br></br>Registered/Speed Post- Gram: Rupa ki
          Nangal, Post-Sumel, Via Jamdoli, Jaipur-302 031(Rajasthan)
        </p>
      </div>
			<div>
        <p className="font-bold text-xl">Contact Information :</p>
        <p>
          Toll Free No. : 1800-180-6566<br></br>B.Tech admission related query:
          0141-2688074, 0141-5191-791/792<br></br>Email: ugadmissions@lnmiit.ac.in<br></br><br></br>
          M.Tech/Ph.D. related query: 1800-180-6566<br></br>Email:
          pgadmissions@lnmiit.ac.in Administrative query: 0141-2688093,
          0141-5191713/720<br></br>Tel: 0141-2688090, 0141-5191851/852<br></br><br></br>any other query
          drop a mail to: info.lnmiit@lnmiit.ac.in
        </p>
      </div>
		</div>
	);
};

export default Contact;
