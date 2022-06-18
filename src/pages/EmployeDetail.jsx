import React from 'react';
import '../css/EmployeDetail.css';
// import person from '../image/person.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EmployeDetail extends React.Component {
  generateEmployeeId(data) {
    return (
      <div className="container-em-d">
        <div className="borderbox-em-d">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png"
            className="img-em-d"
          />
          <p>{this.props.Employe.Name}</p>
          <Link className="btn-list-em-d" to="/Employeid">
            back
          </Link>
        </div>
      </div>
    );
  }
  // displayEmployeid() {
  //   return
  // }
  // backToList(){
  //     this.props.dispatch
  // }
  Employe = {
    Name: 'Aurora',
    Age: 53,
    Email: 'ante.blandit@disparturient.ca',
    Street: '493 Iaculis Rd.',
    City: 'Lewiston',
    Zip: '42591-180',
    Region: 'Maine',
    Country: 'Sudan',
    Info: 'est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia',
    EmployeeID: 101,
    DateOfJoining: '10/06/2019',
    PhoneNumber: '1628101902299',
  };
  generateRow(data) {
    return <tr>{data}</tr>;
  }
  displayRow(data) {
    let heading = Object.keys(data);
    let diplayEachRow = heading.map((eachKey) => this.generateData(eachKey));
    return this.generateRow(diplayEachRow);
  }
  // generateHeader(data) {
  //   return (
  //     <td className="table-th" key={'head' + data}>
  //       {data}
  //     </td>
  //   );
  // }
  // displayHeader() {
  //   let headers = Object.keys(this.Employe);
  //   let displayheaders = headers.map((eachhead) =>
  //     this.generateHeader(eachhead)
  //   );
  //   return displayheaders;
  // }
  generateData(data) {
    return (
      <div>
        <th className='table-head'>{data}</th>
        <td className='table-data'>{this.props.Employe[data]}</td>
      </div>
    );
  }
  displayData() {
    let data1 = this.displayRow(this.props.Employe);
    return data1;
  }

  render() {
    return (
      <div className="list">
        {this.generateEmployeeId()}
        <table>
          {/* <thead>{this.displayHeader()}</thead> */}
          <tbody>{this.displayData()}</tbody>
        </table>
        <div className="space"></div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Employe: state.employe.Employe,
  };
}
export default connect(mapStateToProps)(EmployeDetail);
// export default EmployeeDetail
