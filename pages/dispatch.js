// import axios from 'axios'
import Axios from 'axios'

export default function dispatch(){
    const url = "https://api.github.com/repos/malikmal/malikmal.github.io/actions/workflows/dispatch.yml/dispatches";
    const res = Axios.post(url, {"ref":"master"},{
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            Accept : "application/vnd.github.v3+json"
        }
    })   
    // return res.status;
    return <h1>successs</h1>
}