// import React, { useState } from 'react'
// import HeaderAndDescription from './HeaderAndDescription'
// import myContact from '../assets/utils/contactDetailsUtils/contact.json'
// import IconHeadingParagraph from './IconHeadingParagraph'
// import { saveContact } from '../services/contactAPI'

// export default function ContactMe() {

//     const [inside, setInside] = useState('#a1368f')
//     const [outside, setoutside] = useState('#f58634')

//     const [fName, setFname] = useState("")
//     const [lName, setLname] = useState("")
//     const [email, setEmail] = useState("")
//     const [pNumber, setPnumber] = useState(0)
//     const [subject, setSubject] = useState("")
//     const [message, setMessage] = useState("")


//     const handleContactSubmit = async (e) => {

//         e.preventDefault()

//         const payload = {
//             fName,
//             lName,
//             email,
//             pNumber,
//             subject,
//             message
//         }

//         if (!fName || !email || !subject || !message) {
//             return ()=>{
//                 alert("please fillout all required fields")
//             }
//         }

//         try {
//            const res = await saveContact(payload)
//            if (res) {
//             alert(res.data.message)
//            }
//         } catch (error) {
            
//         }
        
//     }

//     return (
//         <main className=' grid sm:grid-cols-2 ' >
//             <section className=' px-2 py-10 sm:p-10 rounded-xl bg-[#4e2946] '>
//                 <div className=' mb-5 '>
//                     <HeaderAndDescription header={"Let’s work together!"}
//                         desc={"I design and code beautifully simple things and i love what i do. Just simple like that!"}
//                         paraAlign={"center"} />
//                 </div>
//                 <div>
//                     <form action=""
//                         className=' flex flex-col gap-3 '
//                         onSubmit={(e) => handleContactSubmit(e)}>
//                         <div className=' grid sm:grid-cols-2 gap-3 '>
//                             <input type="text" placeholder='First name'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded '
//                                 onChange={e=>setFname(e.target.value)} />
//                             <input type="text" placeholder='Last name'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded '
//                                 onChange={e=>setLname(e.target.value)} />
//                         </div>
//                         <div className=' grid sm:grid-cols-2 gap-3 '>
//                             <input type="text" placeholder='Email address'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded '
//                                 onChange={e=>setEmail(e.target.value)} />
//                             <input type="text" placeholder='Phone number'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded '
//                                 onChange={e=>setPnumber(e.target.value)} />
//                         </div>
//                         <div className=''>
//                             <input type="text" placeholder='Subject'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full '
//                                 onChange={e=>setSubject(e.target.value)} />
//                         </div>
//                         <div>
//                             <textarea name="" id="" placeholder='Message'
//                                 className=' border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full h-[150px] '
//                                 onChange={e=>setMessage(e.target.value)}>
//                             </textarea>
//                         </div>
//                         <div>
//                             <input
//                                 type="submit"
//                                 value="Send Message"
//                                 onMouseEnter={() => { setInside("#f58634"); setoutside("#a1368f") }}
//                                 onMouseLeave={() => { setInside("#a1368f"); setoutside("#f58634") }}
//                                 className="border p-5 rounded-full text-white font-bold my-auto cursor-pointer 
//                                         px-5 py-2 text-2xl sm:text-lg transition-all duration-500 ease-in-out"
//                                 style={{ background: `linear-gradient(to right, ${outside}, ${inside})` }}
//                             />
//                         </div>

//                     </form>
//                 </div>
//             </section>
//             <section className=' px-2 py-10 sm:p-10 rounded-xl flex justify-center '>
//                 <div className=' my-auto flex flex-col gap-5 '>
//                     {
//                         myContact.info.map((item, index) => {
//                             return (
//                                 <div key={index}>
//                                     <IconHeadingParagraph icon={item.icon}
//                                         heading={item.title}
//                                         paragraph={item.value} />
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </section>
//         </main>
//     )
// }


import React, { useState } from 'react';
import HeaderAndDescription from './HeaderAndDescription';
import myContact from '../assets/utils/contactDetailsUtils/contact.json';
import IconHeadingParagraph from './IconHeadingParagraph';
import { saveContact } from '../services/contactAPI';

export default function ContactMe() {
  const [inside, setInside] = useState('#a1368f');
  const [outside, setOutside] = useState('#f58634');

  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pNumber, setPnumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!fName || !email || !subject || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const payload = {
      fName,
      lName,
      email,
      pNumber,
      subject,
      message
    };

    setLoading(true);

    try {
      const res = await saveContact(payload);
      if (res) {
        alert(res.data.message);

        // Reset form
        setFname('');
        setLname('');
        setEmail('');
        setPnumber('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grid sm:grid-cols-2">
      <section className="px-2 py-10 sm:p-10 rounded-xl bg-[#4e2946]">
        <div className="mb-5">
          <HeaderAndDescription
            header="Let’s work together!"
            desc="I design and code beautifully simple things and I love what I do. Just simple like that!"
            paraAlign="center"
          />
        </div>
        <div>
          <form className="flex flex-col gap-3" onSubmit={handleContactSubmit}>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                value={fName}
                onChange={(e) => setFname(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone number"
                value={pNumber}
                onChange={(e) => setPnumber(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border bg-[#3d2638f3] text-white py-3 px-2 rounded w-full h-[150px]"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value={loading ? 'Sending...' : 'Send Message'}
                disabled={loading}
                onMouseEnter={() => {
                  setInside('#f58634');
                  setOutside('#a1368f');
                }}
                onMouseLeave={() => {
                  setInside('#a1368f');
                  setOutside('#f58634');
                }}
                className={`border p-5 rounded-full text-white font-bold my-auto cursor-pointer 
                  px-5 py-2 text-2xl sm:text-lg transition-all duration-500 ease-in-out ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                style={{
                  background: `linear-gradient(to right, ${outside}, ${inside})`
                }}
              />
            </div>
          </form>
        </div>
      </section>

      <section className="px-2 py-10 sm:p-10 rounded-xl flex justify-center">
        <div className="my-auto flex flex-col gap-5">
          {myContact.info.map((item, index) => (
            <div key={index}>
              <IconHeadingParagraph
                icon={item.icon}
                heading={item.title}
                paragraph={item.value}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
