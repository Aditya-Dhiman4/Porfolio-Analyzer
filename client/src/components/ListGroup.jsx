import { useState } from "react";
import PropTypes from 'prop-types'

function ListGroup({ items, heading, onSelectItem }) {   
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    
  
    return (
      <>
        <h1>{heading}</h1>
        {items.length == 0 && <p>No Item Found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default ListGroup