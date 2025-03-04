import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';

export default function SearchEvent() {

  const [eventName, setEventName] = useState();

  const searchItem = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("item--->" + eventName);
    axios.get("http://localhost:8080/cse/dept/sports/search?eventName="+eventName)
    .then(
      (res:any)=>{
        console.log("res--->"+res.data);
        console.log("res   name--->"+res.data.eventDate);
        
      }
    )

  }

  const getEventName = (e: any) => {
    setEventName(e.target.value);
  }
  return (
    <div>
      <NavBar />
      <div>

        <form onSubmit={searchItem}>
          <input type="text"
            onChange={getEventName} />
          <input type="submit" />

        </form>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   </tbody>
</table>

      </div></div>
  )
}
