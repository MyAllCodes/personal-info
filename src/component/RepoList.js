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
        }).catch(error=>{
          console.log("error : "+error);
        })
    },[])
  return (
  <>
    <RepoDetails repoList={repoList}/>
  </>
  )
}
