import { React, useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut, updateCurrentUser } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { getTodaysDate } from '../../utils/common-computes';

const Home = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [kormocari, setKormocari] = useState([]);
    const [getIp, setGetIp] = useState([]);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [force, setForce] = useState(false);
    const [isMatch, setIsmatch] = useState(false);

    useEffect(() => {
        //Date & Time
        var dateObject = getTodaysDate()
        //date
        var date = dateObject.date
        //time
        var time = dateObject.time

        setDate(date)
        setTime(time)
        setForce(!force)


        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => {
                setKormocari(data)
            });

        fetch('https://geolocation-db.com/json/')
            .then(res => res.json())
            .then(data => {
                
                // let res = data.result
                //setIsmatch('mehedi' == "mehedi" ? true : false)
                setGetIp(data)
                console.log(data)
                
                
            });
            
    }, []);



    const onSubmit = data => {

        const Ip ='103.242.217.94';

        if(Ip == getIp.IPv4){
            const users = {
                name: name,
                email: email,
                time: time,
                date: date,
                IP: getIp.IPv4
            }
            const url = 'http://localhost:5000/addservice'
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(users)
    
            })
                .then(res => res.json())
                .then(result => {
    
                })
    
        }else{
            alert("Go To Office Fast");
        }

        


    }



    const logout = () => {
        signOut(auth);
        navigate('/login');
    };



    return (
        <div className='container w-full mx-10 my-10 h-screen '>
            <form onSubmit={handleSubmit(onSubmit)}>


                {/* <input placeholder='time' type="text" {...register("time")} />
                <input placeholder='time' type="date" {...register("date")} /> */}

                <input className='bg-orange-600 mx-2 px-3 py-2 text-white rounded-md' type="submit" value='Labbaik' />
            </form>


            {/* <div className='w-11/12 '>
                <div className='flex flex-wrap'>
                {
                    kormocari.map((service, idx) => <ul className='my-2 mx-2 bg-black text-white w-auto px-2 py-2 rounded-lg'
                        key={service._id}
                    //Ever service data  send to the service card from there
                    >
                        <li key={`kormocariName${idx}`}>{service.name}</li>
                        <li key={`kormocariEmail${idx}`}>{service.email}</li>
                        <li key={`kormocariTime${idx}`}>{service.time}</li>
                        <li key={`kormocariDate${idx}`}>{service.date}</li>
                        <li key={`kormocariIp${idx}`}>{service.IP}</li>
                    
                    </ul>)
                }
                </div>
            </div> */}




<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">LABBAIK SIR</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Count</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Time</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">IP Address</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        
       {<tbody >
         {kormocari.map((service, idx) =>  <tr key={service._id}>
            <td  className='px-3 py-2'key={`kormocariid${idx}`}>{idx+1}</td>
            <td  className='px-3 py-2'key={`kormocariName${idx}`}>{service.name}{idx}</td>
            <td  className='px-3 py-2'key={`kormocariEmail${idx}`}>{service.email}</td>
            <td  className='px-3 py-2'key={`kormocariTime${idx}`}>{service.time}</td>
            <td className='px-3 py-2' key={`kormocariDate${idx}`}>{service.date}</td>
            <td className='px-3 py-2' key={`kormocariIP${idx}`}>{service.IP}</td>
            
          </tr>)}
  
        </tbody>
}
      </table>
    </div>
    
  </div>
</section>

































            {/* {isMatch ?(<div>
                Is working
            </div>):null} */}

            

            <button className='bg-orange-600 mx-2 px-3 py-2 text-white rounded-md'  WonClick={logout}>Log out</button>

        </div>

    )
}

export default Home