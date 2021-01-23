import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row';

function Table(){
	
	const [vals,setVals] = useState(['']);
	
	const [index,setIndex] = useState(0);
	
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				setVals(response.data);
			})
			.catch(error => {
				alert('Axios GET request failed');
			})
	},[]);
	
	
	const firstEvent = () => {
		var a = index + 1;
		if(a < vals.length){
			setIndex(a);
		}
		else{
			alert('You reached the end of the list');
		}
	}
	
	
	return(
		<div className='Table'>
			<h1>Hi there</h1>
			<button onClick={firstEvent}>Click here</button>
			<Row key={vals[index].id} name={vals[index].name} username={vals[index].username} email={vals[index].email} phone={vals[index].phone} />
			
		</div>
	);
}


export default Table;