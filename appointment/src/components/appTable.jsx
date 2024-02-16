import DocNameDropdown from "./docNameDropDown";
import LogicalNot from "./toggle";

function AppTable() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">Doctor’s Name</th>
            <th scope="col">Department</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><DocNameDropdown/></td>
            <td>Otto</td>
            <td>
              <LogicalNot toggle={true} />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><DocNameDropdown/></td>
            <td>Thornton</td>
            <td>
              <LogicalNot toggle={false} />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><DocNameDropdown/></td>
            <td>ASD</td>
            <td>
              <LogicalNot toggle={true} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AppTable;
