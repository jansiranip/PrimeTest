
const EDIT_PROGRESS_BAR = 'EDIT_PROGRESS_BAR';
const ADD_PROGRESS_BAR = 'ADD_PROGRESS_BAR';

export default function reducer(state, action) {
    switch (action.type) {
    case ADD_PROGRESS_BAR:
        return Object.assign({}, state, {
            barList: [{
                completed: parseInt(action.completed),
                id: action.id,
            }, ...state.barList],
        });

    case EDIT_PROGRESS_BAR:
        const barList = state.barList.map(bar =>
            ((bar.id === parseInt(action.id))
                ? (Object.assign(bar, { completed: ((parseInt(action.completed) + bar.completed)) <= 0 ? 0 : (parseInt(action.completed) + bar.completed) }))
                : bar));
        return Object.assign({}, state, { barList: [...barList] });

    default:
        return state;
    }
}
