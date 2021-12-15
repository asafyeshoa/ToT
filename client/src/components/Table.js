import "../styles/Table.css";
import { useState } from "react";
import { Table as MyTable } from "react-bootstrap";
function Table() {
  const [songs, setSongs] = useState(null);

  function getSongs() {
    fetch("/files/readAndSend")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }
  if (songs === null) return <button onClick={getSongs}>Get songs</button>;
  return (
    <div>
      <MyTable striped bordered>
        <thead>
          <tr style={{ background: "#b7bad2" }}>
            <th>#</th>
            <th>Song name</th>
            <th>Band</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(([songName, band, year], index) => (
            <tr key={index}>
              <td>{index}</td>
              <td className="capital">{songName}</td>
              <td className="capital">{band}</td>
              <td>{year}</td>
            </tr>
          ))}
        </tbody>
      </MyTable>
    </div>
  );
}

export default Table;
