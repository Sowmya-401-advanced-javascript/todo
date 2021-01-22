import React, { useContext, useEffect } from 'react';
// https://react-bootstrap.github.io/components/badge/
import {ConfigurationContext} from '../configurationContext'

function TodoList (props) {

  const configuration = useContext(ConfigurationContext)
  const [currentPage, setCurrentPage] = useState(0)

  function onNextClicked(event) {
    setCurrentPage(currentPage++)
  }

  function onPreviousClicked(event) {
    setCurrentPage(currentPage--)
  }

  // useEffect(/* render again */, [currentPage])

  return (
    <div>
    <ul>
      {props.list
      .filter(item => 
        item.complete === configuration.shouldShowCompletedItems)
      .filter((item, index, array) => 
      index >= currentPage * configuration.maxItemsPerScreen)
      .filter((item, index, array) => 
      index < (currentPage + 1) * configuration.maxItemsPerScreen)
      .sort((item1, item2) 
      => item1[configuration.sortBy]
       - item2[configuration.sortBy])
      .map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>

        {(list.length/configuration.maxItemsPerScreen) > currentPage ?
        <button onClick="onNextClicked">Next</button> : null}

        {(list.length/configuration.maxItemsPerScreen) > 0 ?
        <button onClick="onPreviousClicked">Previous</button> : null}
    </div>
  );
}



export default TodoList;