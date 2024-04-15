import React , {useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';


function Update() {
    const {userId} = useParams();
    const {register, handleSubmit} = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data});
    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        //alert('record added.....')
        navi('/user/show')

    }
  return (
    <>
        <div className='container'>
            <center><h1>UPDATE FORM:</h1></center>
            <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='no'>PNO:</label>
                <input type='number' id='no' className='form-control'
                {...register('pno')}/>
                <br/><br/>
                <label htmlFor='n'>PNAME:</label>
                <input type='text' id='n' className='form-control'
                {...register('name')}/>
                <br/><br/>
                <label htmlFor='p'>PRICE:</label>
                <input type='number' id='p' className='form-control'
                {...register('price')}/>
                <br/><br/>
                <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='Cancel' className='btn btn-outline-warning col-6 btn-lg'/>
            </form>
        </div>
    </>
  )
}
export default Update