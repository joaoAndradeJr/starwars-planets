import React from 'react';
import '../App.css';

function TableHead() {
  return (
    <thead className="table-head">
      <tr>
        <th>Name</th>
        <th>Rotation period</th>
        <th>Orbital period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </thead>
  );
}

export default TableHead;
