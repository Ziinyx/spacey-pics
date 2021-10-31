import React from 'react';
import LoaderData from './LoaderData';
import { useFetch } from './useFetch';
import owl from './owl.svg'; 
const Url = 'https://api.nasa.gov/planetary/apod?api_key=TDRCcyaEeGJrMXEpgh8hgNrJcmF2DkArlF16EBRN';

const AstroPic = () => {
	let {loading, info} = useFetch(Url);

	const {title,date,hdurl,explanation,url} = info; 
	return(
	<>	
		<main className='astroPic'>
		{!loading ? (
		<>
			<img className='owl' src={owl} alt='owl' />
			<h2>{title}</h2>
			<p className='date'>{date}</p>
			<div className='picInfo'>
				<div className='containerImg'>
					<a href={hdurl}><img src={hdurl} alt={title}/></a>
				</div>
				<p>{explanation}</p>
			</div>
		</>
		):(
		<>
			<LoaderData />
		</>
		)}
		</main>
	</>
	);
}
export default AstroPic;