import React from 'react';

function Row({ name, username, email, phone }){
	return(
		<div className='Row'>
			<table>
				<tbody>
					<tr>
						<td style={{color: 'red'}}>NAME: {name}</td>
						<td style={{color: 'green'}}>USERNAME: {username}</td>
						<td style={{color: 'blue'}}>EMAIL: {email}</td>
						<td style={{color: 'pink'}}>PHONE NO.:{phone}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}


export default Row;