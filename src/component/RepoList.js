import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RepoDetails from './RepoDetails';
export default function RepoList() {
    const[repoList,setRepoList]=useState([]);
    const headers = {
        'Authorization': 'token PERSONAL_ACCESS_TOKEN'
      };
    useEffect(()=>{
        axios.get(`https://api.github.com/user/repos?type=public`,{ headers })
        .then(res => {
          setRepoList(res.data);
          console.log("data :"+JSON.stringify(res.data));
        })
    },[])
  return (
  <>
    <RepoDetails repoList={repoList}/>
  </>
  )
}
