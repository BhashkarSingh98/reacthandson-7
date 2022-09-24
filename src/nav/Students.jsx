import React, { useState } from "react";
const Details = {
  name: "",
  age: "",
  course: "",
  batch: "",
};

const Students = () => {
  const [store, setStore] = useState(Details);
  const [editData, setEditData] = useState(false);
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);

  const editHandler = (event) => {
    const value = event.target.value;
    setStore((store) => ({ ...store, [event.target.name]: value }));
  };

  const Add = () => {
    if (editData) {
      const updateData = data.map((val) => (val.id === store.id ? store : val));
      setData(updateData);
      setEditData(false);
      setStore(Details);
      setHide(!hide);
    } else {
      let listItems = data;
      const item = {
        id: data.length,
        ...store,
      };

      listItems = [...data, item];
      setData(listItems);
      clearData();
      setHide(!hide);
    }
  };

  const clearData = () => {
    setStore(Details);
  };

  const editRow = (val) => {
    setStore(val);
    setEditData(true);
    setHide(!hide);
  };

  return (
    <>
      {hide ? null : (
        <>
          
          <div className="students">
            <div className="stubox">
              <h1 className="stuheading">Students Details</h1>
              <button
                className="button1"
                onClick={() => {
                  setHide(!hide);
                }}
              >
                Add new student
              </button>
            </div>

            <div className="tablebox">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Change</th>
                </tr>
                {data &&
                  data.map((val) => (
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>{val.course}</td>
                      <td>{val.batch}</td>
                      <td>
                        <button
                          onClick={() => {
                            editRow(val);
                          }}
                          className="editBut"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </>
      )}
      {hide ? (
        <div className="main-input-box">
          <div className="input-box">
            <div className="in-box-1">
              <label className="input-name">Name:</label>
              <input
                type="text"
                Name="name"
                value={store.name}
                required
                onChange={editHandler}
                className="input1"
              />
            </div>

            <div className="in-box-1">
              <label className="input-age">Age: </label>
              <input
                type="number"
                name="age"
                value={store.age}
                required
                onChange={editHandler}
                className="input2"
              />
            </div>

            <div className="in-box-1">
              <label className="input-course">Course:</label>
              <input
                type="text"
                name="course"
                value={store.course}
              required
                onChange={editHandler}
                className="input3"
              />
            </div>

            <div className="in-box-1">
              <label className="input-batch">Batch:</label>
              <input
                type="text"
                name="batch"
                value={store.batch}
                required
                onChange={editHandler}
                className="input4"
              />
            </div>
          </div>
          <div className="btn-box">
            <button onClick={clearData} className="cancel-btn">
              Cancel
            </button>
            <button onClick={Add} className="submit-btn">
              {editData ? "Update" : "submit"}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Students;

// function Students() {
//   return (
//     <>
//       <div className="students">
//         <div className="stubox">
//           <h1 className="stuheading">Students Details</h1>
//           <button className="button1">Add new student</button>
//         </div>

//         <div className="tablebox">
//           <table>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Batch</th>
//               <th>Change</th>
//             </tr>
//             <tr>
//               <td>Jhon</td>
//               <td>24</td>
//               <td>MERN</td>
//               <td>October</td>
//               <td>Edit</td>
//             </tr>
//             <tr>
//               <td>Doe</td>
//               <td>25</td>
//               <td>MERN</td>
//               <td>August</td>
//               <td>Edit</td>
//             </tr>
//             <tr>
//               <td>Biden</td>
//               <td>26</td>
//               <td>MERN</td>
//               <td>January</td>
//               <td>Edit</td>
//             </tr>
//             <tr>
//               <td>Barar</td>
//               <td>27</td>
//               <td>MERN</td>
//               <td>July</td>
//               <td>Edit</td>
//             </tr>
//             <tr>
//               <td>Christ</td>
//               <td>28</td>
//               <td>MERN</td>
//               <td>March</td>
//               <td>Edit</td>
//             </tr>
//             <tr>
//               <td>Rock</td>
//               <td>28</td>
//               <td>MERN</td>
//               <td>June</td>
//               <td>Edit</td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Students;
