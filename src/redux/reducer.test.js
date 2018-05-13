import reducer from './reducer';
import { except } from 'chai';

describe('reducer', () => {
    it('should  handle inital ADD_PROGRESS_BAR', () => {
        const state = {};
        state.barList = {};
        const received = { barList: {} };
        expect(reducer(state, {})).toEqual(received);
    });
    it('should  ADD_PROGRESS_BAR', () => {
        const state = {};
        const barList = [{ completed: 50, id: 1 }, { completed: 80, id: 3 }, { completed: 100, id: 2 }];
        state.barList = barList;
        const received = { barList: [{ completed: 20, id: 4 }, { completed: 50, id: 1 }, { completed: 80, id: 3 }, { completed: 100, id: 2 }]}
        expect(reducer(state,{
                type: 'ADD_PROGRESS_BAR',
                completed: 20,
                id: 4,
            }),).toEqual(received);
    });

    it('should  EDIT_PROGRESS_BAR', () => {
        let state={};
        const barList=[{completed:50,id:1},{completed:80,id:3},{completed:100,id:2}];
        state.barList = barList; 
        const received={"barList":[{completed:70,id:1},{completed:80,id:3},{completed:100,id:2}]}
        expect(reducer(state,{
                type: 'EDIT_PROGRESS_BAR',
                completed: 20,
                id: 1,
            }),).toEqual(received);
    });
})
