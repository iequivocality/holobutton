import React, { useEffect, useState } from 'react';
import Members from '../pages/Members';

export default function MembersPage() {
  let [ members, setMembers ] = useState([]);
  
  useEffect(() => {
    fetch('data/members.json').then(res => {
      res.json().then(members => {
        console.log("members", members);
      })
    });
  }, []);

  return <Members />;
}
