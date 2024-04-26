// import axios from "axios";

// const baseUrl = "http://localhost:5000";

// const getAllToDo = (setToDo) => {
//   axios
//   .get(baseUrl)
//   .then(({data})=> console.log(`Data ---> `, data))
//   setToDo(data);
// };

// export {getAllToDo};\

import axios from "axios";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://fullstack-todo-app-backend-tppq.onrender.com";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl);
    console.log("Data ---> ", response.data);
    setToDo(response.data);
  } catch (err) {
    console.error("Error fetching data: ", err.message);
  }
};

const addToDo = (text, setText, setToDo) => {
  axios
  .post(`${baseUrl}/save`, { text })
  .then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  })
  .catch((err)=> console.log(err))
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.post(`${baseUrl}/update`, { _id: toDoId, text }).then((data) => {
    console.log(data);
    setText("");
    setIsUpdating(false)
    getAllToDo(setToDo);
  })
  .catch((err)=> console.log(err))
};

const  deleteToDo=(_id, setToDo)=>{
  axios
  .post(`${baseUrl}/delete`,{_id} )
  .then((data)=>{
    console.log(data)
    getAllToDo(setToDo)
  })
  .catch((err)=> console.log(err))
}



export { getAllToDo, addToDo, updateToDo, deleteToDo };
