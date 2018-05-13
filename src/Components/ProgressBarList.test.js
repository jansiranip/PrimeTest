import React from 'react';
import { except } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import ProgressBarList from './ProgressBarList';
import ProgressBar from './ProgressBar';

describe('ProgressBarList', () => {
    it('renders', () => {
        const barList = [{completed:50,id:1},{completed:80,id:3},{completed:100,id:2}];
        const wrapper = mount(<ProgressBarList barList={barList} />);
        expect(wrapper.find('option').length).toEqual(3);
      });
})
