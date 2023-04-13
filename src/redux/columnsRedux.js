import shortid from "shortid";

// selectors
export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, _listId) => columns.filter(({ listId }) => listId === _listId);

// actions
const createActionName = actionName => `app/columns/${actionName}`;
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
