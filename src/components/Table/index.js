import TableRow from "../TableRow";

function Table({ employees }) {
  return (
    <div>
      <table
        className="table sortable"
        id="sortTable"
        style={{ width: "80%", margin: "auto" }}
      >
        <thead>
          <tr style={{ background: "rebeccapurple" }} className="text-light">
            <th style={{ cursor: "pointer" }}>First Name</th>
            <th style={{ cursor: "pointer" }}>Last Name</th>
            <th style={{ cursor: "pointer" }}>Email</th>
          </tr>
        </thead>
        <TableRow employees={employees}></TableRow>
      </table>
    </div>
  );
}

export default Table;
