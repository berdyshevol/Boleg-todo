import React from "react";
import './List.css'
import ItemDummy from "../Item/ItemDummy";

const List = props => (
    <ul className="list">
      { props.values.map( ({ value, uuid, date, isEdit }) =>
        <ItemDummy
          key={uuid}
          data={{value, uuid, date, isEdit}}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
          handleSave={props.handleSave}
        />
        )}
    </ul>
)

export default List