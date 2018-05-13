import React from 'react';
import { except } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import ProgressBars from './ProgressBars';
import ProgressBar from './ProgressBar';

describe('ProgressBars', () => {
    it('renders', () => {
        const barList = [{ completed: 50, id: 1 }, { completed: 80, id: 3 }, { completed: 100, id: 2 }];
        const limit = parseInt("60");
        const wrapper = mount(<ProgressBars barList={barList} limit={limit} />);
        expect(wrapper.find('span').length).toEqual(3);
    });
});
