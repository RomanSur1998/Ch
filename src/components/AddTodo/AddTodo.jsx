import React, { useState } from "react";

const AddTodo = (props) => {
  //todo создали состояние для того чтобы хранить данные таска , который хотим добавить

  const [task, setTask] = useState("");
  console.log(task);
  //todo функия для синхронизации данных инпута и стейта  tasks

  const handkeInput = (e) => {
    setTask(e.target.value);
  };

  //todo срабатываение на кнопку add
  const handleAdd = () => {
    //todo Проверка на заполненость input

    if (!task) {
      alert("input is empty");
      return;
    } else {
      //todo  Создание нового объекта, со статусом false так как пока таск не выполнен , так же задаем id для удаление и  редактирования

      const newTask = {
        task: task,
        status: false,
        id: Date.now(),
      };

      //todo функция для добавления объекта в массив , из которого будем отображать таски

      props.handleTask(newTask);

      //todo очищаем  инпут после добавления таска
      setTask("");
    }
  };
  return (
    <div>
      <h2>TODO COMPONENT</h2>
      <input type="text" onChange={handkeInput} value={task} />
      <button onClick={handleAdd}>ADD </button>
    </div>
  );
};

export default AddTodo;
