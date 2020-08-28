import React from "react";
import InputItem from "../InputItem/InputItem"

import "./Item.css"
import Time from "../Time/Time";

const ItemDummy = ({ data, handleEdit, handleDelete, handleSave}) => (
    <li
      onDoubleClick={() => handleEdit(data.uuid, true)}
      className="todo-item"
    >
      {!data.isEdit
        ?
        <div className="display-item">
          <h2>
            {data.value}
          </h2>
          <div>
            <Time date={data.date} />
            <button onClick={() => handleEdit(data.uuid, true)}>Edit</button>
            <button onClick={() => handleDelete(data.uuid)}>Delete
            </button>
          </div>
        </div>
        :
        <div className="display-item">
          <InputItem
          data={data}
          handleSave={handleSave}
          handleEdit={handleEdit}
          />
        </div>
      }
    </li>
)

export default ItemDummy