import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
export default function RepoDetails(props) {
  function handleClick(url) {
    return function () {
      window.open(url, "_blank");
    };
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.repoList.map((item) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
          key={item.id}
          style={{ flex: '0 0 auto', margin: '10px' }}
        >
          <div className="px-6 py-4">
            <div class="row">
                <div className="col-6">{item.language==='Java'?<i class="fa-brands fa-java fa-2x text-orange-500"></i>:<i class="fa-brands fa-react fa-2x text-blue-500"></i>}</div>
                <div className="col-6"><div className="font-bold text-xl mb-2">{item.name}</div></div>
            </div>
            <p className="text-gray-700 text-base">
            </p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick(item.svn_url)}>Code</button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View</button>
          </div>
        </div>
      ))}
    </div>
  );
}
