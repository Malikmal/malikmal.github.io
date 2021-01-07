// import React from 'react'
import { useState } from "react";
import useSWR, { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json()); 

export default function LearnSWR(){
    return (
        <SWRConfig value={{ revalidateOnFocus:false,fetcher }}>
            <Crimes/>   
        </SWRConfig>
    )
}

function Crimes(){
    const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const {data, error} = useSWR(url);

    // console.log(data);
    if (error) return error;
    if (!data) return "loading";

    return <DisplayCrimes data={data} categories={[...new Set(data.map((crime) => crime.category)) ]} />;
}

function DisplayCrimes({ data, categories }){

    // console.log(categories)
    const [filterCateogory, setFilterCateogory] = useState(null);

    data = filterCateogory 
        ? data.filter(crime => crime.category === filterCateogory)
        : data ;
    
    return (
        <> 
            <div>
                {categories.map( category => (
                    <button onClick={() => setFilterCateogory(category)} key={category}>{category}</button> 
                ))}
            </div>
            <br/>
            <div>
                {
                    (filterCateogory) && <button onClick={() => setFilterCateogory(null)} key="reset">reset</button> 
                }
            </div>
            <br/>   
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    ) 
}