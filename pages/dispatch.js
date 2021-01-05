// import axios from 'axios'
import Axios from 'axios'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export default function dispatch(){
    const url = "https://api.github.com/repos/malikmal/malikmal.github.io/actions/workflows/dispatch.yml/dispatches";
    const res = Axios.post(url, {"ref":"master"},{
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept : "application/vnd.github.v3+json"
        }
    })   
    // return res.status;
    return <h1>successs</h1>
}