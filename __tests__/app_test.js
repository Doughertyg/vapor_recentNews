import React from 'react'
import App from '../client/src/app.jsx'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('App', () => {
	it('matches the snapshot', () => {
		const tree = renderer.create(<App />).toJSON()

		expect(tree).toMatchSnapshot()
	})

	// it('should have a header RECENT UPDATES', () => {
	// 	const wrapper = shallow(<View />)
	// 	const text = wrapper.find('Header').text()
	// 	expect(text).toEqual('RECENT UPDATES')
	// })
})