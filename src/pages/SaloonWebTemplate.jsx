import React, { useState } from 'react'
import Button from '../assets/utils/reuseComponents/Button'
import HeaderAndDescription from '../components/HeaderAndDescription'
import templateUtils from '../assets/utils/templatesUtils/data.json'
import { useNavigate } from 'react-router'
import { saveTemplateTesterContact } from '../services/contactAPI'

export default function SaloonWebTemplate() {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const scrollIntoForm = () => {

        navigate("/saloon-template");
        setTimeout(() => {
            const el = document.getElementById("salon-template-access");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500);

    }

    const handleSubmitTesterContact = async (e) => {

        e.preventDefault()

        const payload = {
            first_name: firstname,
            last_name: lastname,
            email,
            origin: "salon template"
        }

        if (!firstname || !lastname || !email) {
            alert("all fields are required")
            return
        }

        setLoading(true)

        try {
            const res = await saveTemplateTesterContact(payload);
            if (res) {
                alert(res.data.message);
                setFirstname('');
                setLastName('');
                setEmail('')
            }
        } catch (error) {
            console.error('There was an error processing your submission:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className=' min-w-full min-h-screen bg-gradient-to-tr from-[#4e2946] via-[#4e2946] 
                        to-[#f58634] pt-[100px] px-2 md:px-10'>
            <div className=' hero-section grid md:grid-cols-2 gap-5 max-w-[1400px] my-5 mx-auto  '>
                <div className=" block rounded-xl p-4 hover:shadow-lg transition relative mx-auto ">
                    <img src="/barber-shop.jpg" alt="Salon Template" className="rounded-lg mb-3 blur" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h3 className="uppercase text-5xl font-semibold text-white transition">
                            coming soon!
                        </h3>
                    </div>
                </div>
                <div className=' flex flex-col justify-center gap-3 '>
                    <h1 className=' nextLevel text-white text-4xl md:text-5xl lg:text-6xl capitalize 
                        font-semibold text-center md:text-left '>
                        salon & hairstylist website template
                    </h1>
                    <p className=' text-white text-center md:text-left '>
                        a mordern and responsive website template designed specifically for salons and hair
                        stylists to showcase their work and attract new clients.
                    </p>
                    {/* Mobile only */}
                    <div className="flex md:hidden">
                        <Button
                            buttonText="get free access after launch"
                            performFunction={scrollIntoForm}
                        />
                    </div>

                    {/* Tablet and up */}
                    <div className=" templateButtonWrapper ">
                        <Button buttonText="get free access after launch"
                            performFunction={scrollIntoForm}
                        />
                    </div>

                </div>
            </div>

            <div className=' py-16 '>
                <div>
                    <HeaderAndDescription header={"what to expect"}
                        desc={"this template will provide a seamless experience for both salon/barbershop owners and their clients. here is what you can expect"}
                        paraAlign={"center"}
                        paraMargin={"auto"} />
                </div>
                <div className='  '>
                    {
                        templateUtils.salon.expectations.map((exp, ind) => {
                            return (
                                <div className=' text-white grid grid-cols-[1fr_10fr] gap-2 max-w-[1400px] 
                                        m-2 md:mx-auto md:my-2 py-2 px-2 border rounded hover:translate-x-1
                                        hover:font-semibold cursor-default '>
                                    <div className=' flex justify-end items-center '>
                                        <i className=' pi pi-check-square '></i>
                                    </div>
                                    <div className='  '>
                                        <p>
                                            {`${exp.title}: ${exp.content}.`}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className=' flex flex-col gap-5 ' id='salon-template-access' >
                <div>
                    <HeaderAndDescription
                        header={"Be First. Be Free."}
                        desc={<p>
                            Get exclusive early access to our new template by signing up below! We're selecting 10 lucky users to enjoy lifetime access — absolutely free — as part of our official tester program.
                            👉 Don’t miss your chance to shape the future of this tool.
                            Winners will be chosen at random. Terms apply. Follow-up details will be sent via email.
                        </p>}
                        paraAlign={"center"}
                        paraMargin={"auto"} />
                </div>
                <form className=' max-w-[400px] mx-auto flex flex-col gap-5 '>
                    <div className=' grid grid-cols-2 gap-5 '>
                        <input
                            type="text"
                            placeholder='first name'
                            className='px-3 rounded bg-transparent text-white border '
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)} />
                        <input
                            type="text"
                            placeholder='last name'
                            className='px-3 rounded bg-transparent text-white border '
                            value={lastname}
                            onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className=' '>
                        <input
                            type="email"
                            placeholder="email"
                            required
                            pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                            className="bg-transparent border border-white rounded text-white px-3 w-full"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                    </div>
                    <div className=' flex '>
                        <Button
                            buttonText={loading ? "loading...." : "get access"}
                            buttonWidth={"w-full"}
                            performFunction={e => handleSubmitTesterContact(e)} />
                    </div>
                </form>
            </div>
        </div>
    )
}
