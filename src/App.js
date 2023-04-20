import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import EditModal from './components/EditTodo/EditModal'

const App = () => {

//todo создаем состояние в котором будут храниться все таскии и из которого будет производиться отображение 
  const [todos,setTodos]=useState([])
  // todo создадим состояние в котором будут храниться состояние редактируемый объект
  const [editTodo , setEditTodo]=useState({})
//todo состояние для модального окна  
  const[modal, setModal]=useState(false )

  // todo функция для обновления массива с тасками , (todos)
  const handleTask=(newObj)=>{

    //todo копируем все что было в начальном состоянии , todos - то есть все  таски 
    let newTodos = [...todos];

    //todo добавили новый таск , в массив newTodos
    newTodos.push(newObj);
    
    //todo обновили состояние 
    setTodos(newTodos);
  }
 //todo функция для изменения статуса таска 
  const ChangeStatus = (id)=>{
    //todo перебираем todos при помощи map , если id у какого-то элемента из массива , совпадает с тем id ,который приходит в функцию при вызове , то статус меняеться на противоположный
const newTodos = todos.map((item)=>{
  if(item.id ==  id){
    item.status = !item.status;
  };

  return item;
});
//todo Обновляем 
setTodos(newTodos);
  }
//todo функция для удаления тасков , которая при вызове ожидает id элемента , который хотим удалить
  const handleDelete = (id)=>
{
  // todo фильтруем todos у которых id не совпадает с тем id который предели при вызове функции ы
  let newTodos = todos.filter((item)=> item.id !== id )
  // todo обновили состояние todos 
  setTodos(newTodos);
}

// ! отображение модального окна 
const nadlerEdit = (taskToEdit)=>{
  setModal(true);
  // *ы в состояние editTodo , закидываем редактируемый объект, который получаем при вызове функции 
  setEditTodo(taskToEdit)

};
console.log(editTodo);
// * функция для закрытия модалки 
const handleCloseModal=()=>{
  setModal(false)
}
// todo функция сохранения  отредактированного таска 
const handleSaveTask=(updatedTasks)=>{
  // * перебираем todos если и возвращаем все объекты который не равны тому объекту который мы передаем , при вызове функции 
  const newTodos =todos.map((item)=>{
    if(item.id === updatedTasks.id){
      return updatedTasks
    }
    return item;
  })
  // * обновляем состояние , для отображения в браузере 
  setTodos(newTodos);
  handleCloseModal();

}

  return (
    <div> <AddTodo handleTask={handleTask}/>
    <TodoList todos={todos} 
    handleDelete={handleDelete}
    ChangeStatus={ChangeStatus} 
    nadlerEdit={ nadlerEdit}
   />
   {modal?<EditModal 
   handleSaveTask={handleSaveTask}
   editTodo={editTodo}
   handleCloseModal={handleCloseModal}/>:null}
   </div>
  
   
  )
}

export default App 

