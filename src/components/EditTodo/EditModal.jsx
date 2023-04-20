import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  // * создали состояние для отредактированного таска , в качестве начального состояния указали объект с редактируемыми данными
  const [item, setItem] = useState(props.editTodo);
  console.log(item);
  //  * функция для синхронизации данных из input и состояния item
  const handleEditInput = (e) => {
    // * копирование item
    let newObj = { ...item };
    // * в newObj  под коючем task пеомещаем значение из инпута
    newObj.task = e.target.value;
    // * обновляем  состояние item
    setItem(newObj);
  };
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          type="text"
          className="inp-edit"
          value={item.task}
          onChange={handleEditInput}
        />
        <button onClick={() => props.handleSaveTask(item)}>Save Edit</button>
      </div>
    </div>
  );
};

export default EditModal;
