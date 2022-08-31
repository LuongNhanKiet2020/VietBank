import { useEffect,useState } from 'react';
import customerAPI from '../../api/customer';
import useCustomers from '../../hooks/customers'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UseAPI = () =>{
    //const {data : customers=[]} = useCustomers()
    const [user, setUser] = useState([]);
    const [inputValue, setInputVale] = useState();
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const response = await customerAPI.getCustomerAPI();
        setUser(response.data.lstthongtin)
        console.log(user)
    }
    // const handleInput = (e) =>{
    //     setInputVale(e.target.value);
    //     console.log(inputValue)
    // }
    return (
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=>setInputVale(e.target.value)} />
         <Button variant="outlined">Check</Button>
         { inputValue===user.maKH ? user.map(item =>{
             <TextField id="outlined-basic" label={item.tenKH} variant="outlined" />
            })
            :
            console.log(user)
         }
         </div>
    )
}

export default UseAPI;