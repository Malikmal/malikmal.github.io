
import axios from 'axios'
import userSWR from 'swr'

// const DISPATCH_GITHUB_TOKEN = process.env.DISPATCH_GITHUB_TOKEN;
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// const url = "https://api.github.com/repos/malikmal/malikmal.github.io/actions/workflows/dispatch.yml/dispatches";
const url = "https://api.github.com/repos/Malikmal/malikmal.github.io/dispatches"

const fetcher = url => axios.post(
    url, 
    {
        "event_type": "run-ping",
            client_payload: {
                command: "ping"
            }
    }, 
    {
    headers : {
        Authorization : `token ${process.env.DISPATCH_GITHUB_TOKEN}`, // Bearer/token 
        Accept : "application/vnd.github.v3+json",

        "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
    }
}).then(res => res.data)
.catch(err => {
    console.log(err);
})


export default function dispatch(){
    // console.log(process.env.DISPATCH_GITHUB_TOKEN);
    const {data, error} = userSWR(url, fetcher, {revalidateOnFocus:false})

    if (error) return <div>failed to load </div>
    if (!data) return <div>loading...</div>
    // render data
    return <div>hello !</div>

    // Axios.post(url, {"ref":"master"},{
    //     headers: {
    //         Authorization: `token ${process.env.DISPATCH_GITHUB_TOKEN}`,
    //         Accept : "application/vnd.github.v3+json",
    //         "Content-Type" : "application/json",
    //     }
    // }).then(res => {
    //     console.log("ok");
    // })

    // axios.post(url, {"ref":"master"},{
    //     headers: {
    //         Authorization: `token fd895ef3226d30f8ff18f7e27b2d839da246283a`,
    //         Accept : "application/vnd.github.v3+json"
    //     }
    // })
    // .then(res => {
    //     console.log(res)
    // })
    // .catch(err => {
    //     console.error(err); 
    // })

    // return <h2>ok</h2>;
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
    // return res.status;
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