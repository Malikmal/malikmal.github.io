// import axios from 'axios'
// import Axios from 'axios'
import axios from 'axios'
import userSWR from 'swr'

// const DISPATCH_GITHUB_TOKEN = process.env.DISPATCH_GITHUB_TOKEN;
// const fetcher = (...args) => fetch(...args).then(res => res.json())
const url = "https://api.github.com/repos/malikmal/malikmal.github.io/actions/workflows/dispatch.yml/dispatches";
const fetcher = (url) => fetch(url, {
    method: 'POST',
    headers: {
         'Content-Type': 'application/json',
         'Authorization' : `token ${process.env.DISPATCH_GITHUB_TOKEN}`,
         'Accept' : "application/vnd.github.v3+json",
    },
    body: JSON.stringify({ 'ref': 'master' })
}).then(res => res.json())

// const fetcher = url => axios.post(url, {"ref":"master"}, {
//     headers : {
//         Authorization : `token ${process.env.DISPATCH_GITHUB_TOKEN}`,
//         Accept : "application/vnd.github.v3+json",
//         // "Content-Type" : "application/json",
//         // "Content-Length" : "1024",
//         // Host : "malikmal98.github.io",
//         // "User-Agent" : "Malikmal",
//         // "Accept-Encoding" : "gzip, deflate, br",
//         // Connection : "keep-alive",
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Credentials" : "true",
//         // "Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
//         // "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
//     }
// }).then(res => res.data)
// .catch(err => {
//     console.log(err);
// })


export default function dispatch(){
    // console.log(process.env.DISPATCH_GITHUB_TOKEN);
    const {data, error} = userSWR(url, fetcher)

    if (error) return <div>failed to load </div>
    if (!data) return <div>loading...</div>
    // render data
    return <div>hello !</div>
    //////

    // console.log(process.env.WORDPRESS_API_URL);
    // if (!process.env.WORDPRESS_API_URL) {
    //     throw new Error("Github Token Required");
    //   }

    // const url = "https://api.github.com/repos/malikmal/malikmal.github.io/actions/workflows/dispatch.yml/dispatches";
    // const res = Axios.post(url, {"ref":"master"},{
    //     headers: {
    //         Authorization: `token ${process.env.DISPATCH_GITHUB_TOKEN}`,
    //         Accept : "application/vnd.github.v3+json"
    //     }
    // })   
    // // return res.status;
    // return <h1>successs</h1>

    // const headers = { 
    //     'Content-Type': 'application/json',
    //     'Accept' : 'application/vnd.github.v3+json'

    // }

    // if (process.env.process.env.DISPATCH_GITHUB_TOKEN) {
    //   headers[
    //     'Authorization'
    //   ] = `Bearer ${process.env.process.env.DISPATCH_GITHUB_TOKEN}`
    // }
  
    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify({"ref":"master"}),
    // })

    // const json = await res.json()
    
    // return json


}