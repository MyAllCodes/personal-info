import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RepoDetails from './RepoDetails';
export default function RepoList() {
    const[repoList,setRepoList]=useState([]);
    const headers = {
        'Authorization': 'token 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'
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
