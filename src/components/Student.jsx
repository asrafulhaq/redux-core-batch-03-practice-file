import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentData,
  studentCreate,
  studentDelete,
  studentUpdate,
} from "../redux/student/actions";

const Student = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);

  const [editMode, setEditMode] = useState(false);

  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    photo: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle student deleye
  const handleStudentDelete = (id) => {
    dispatch(studentDelete(id));
  };

  // handle
  const handleEditModeChange = (item) => {
    setEditMode(true);
    setInput(item);
  };

  // handle create studentr
  const handleStudentCreate = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(studentUpdate(input));
      setEditMode(false);
    } else {
      dispatch(studentCreate(input));
    }

    setInput({
      name: "",
      roll: "",
      email: "",
      photo: "",
    });
  };

  useEffect(() => {
    dispatch(getStudentData());
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <h1>{loading && "Loading . . . "}</h1>
                <form onSubmit={handleStudentCreate}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Roll"
                    value={input.roll}
                    name="roll"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={input.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Photo"
                    value={input.photo}
                    name="photo"
                    onChange={handleInputChange}
                  />
                  <button type="submit"> {editMode ? "Update" : "Add"}</button>
                </form>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Roll</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students && students.length > 0
                      ? students.map((item, index) => {
                          return (
                            <tr className="align-middle" key={index}>
                              <td>1</td>
                              <td>
                                <img
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                  }}
                                  src={item.photo}
                                  alt=""
                                />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.roll}</td>
                              <td>{item.email}</td>
                              <td>
                                <button className="btn btn-sm btn-info">
                                  view
                                </button>
                                <button
                                  className="btn btn-sm btn-warning mx-2"
                                  onClick={() => handleEditModeChange(item)}
                                >
                                  edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleStudentDelete(item.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : "No Data found"}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
