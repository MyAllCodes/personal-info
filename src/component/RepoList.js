import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RepoDetails from './RepoDetails';
import token from '../Secret.json';
export default function RepoList() {
    const[repoList,setRepoList]=useState([]);
    // const headers = {
    //     'Authorization': 'token '+token.REACT_APP_GITHUB_TOKEN
    //   };
    // useEffect(()=>{
    //     axios.get(`https://api.github.com/user/repos?type=public`,{ headers })
    //     .then(res => {
    //       setRepoList(res.data);
    //     }).catch(error=>{
    //       console.log("error : "+error);
    //     })
    // },[])
  return (
  <>
    <RepoDetails repoList={repoList}/>
  </>
  )
}
