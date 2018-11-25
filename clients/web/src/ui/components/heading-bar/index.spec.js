import { mount, shallowMount } from '@vue/test-utils'
import Component from './index.vue'

describe('heading-bar', () => {
    it('shows name if given but not tabs', () => {
        const props = {
            name: 'Testy Mc Test Pants',
            headingTabs: [
                { title: 'Top Selling', category: 'topSellingProducts' },
                { title: 'New Releases', category: 'newProducts' },
                { title: 'Upcoming', category: 'upcomingProducts' }
            ]
        }
        
        const wrapper = shallowMount(Component, {
            propsData: props
        })

        expect(wrapper.find('[jest="name"]').text()).toBe(props.name)
        expect(wrapper.findAll('[jest="tab-item"]').length).toBe(0)
    })

    it('shows tabs if given but not name', () => {
        const props = {
            headingTabs: [
                { title: 'Top Selling', category: 'topSellingProducts' },
                { title: 'New Releases', category: 'newProducts' },
                { title: 'Upcoming', category: 'upcomingProducts' }
            ]
        }

        const wrapper = shallowMount(Component, {
            propsData: props
        })

        expect(wrapper.find('[jest="name"]').exists()).toBe(false)
        expect(wrapper.findAll('[jest="tab-item"]').length).toBe(3)
    })

    it('changes active tab', () => {
        const props = {
            headingTabs: [
                { title: 'Top Selling', category: 'topSellingProducts' },
                { title: 'New Releases', category: 'newProducts' },
                { title: 'Upcoming', category: 'upcomingProducts' }
            ]
        }
        const wrapper = shallowMount(Component, {
            propsData: props,
            // slots: {
            //     'heading-tabs': '<a href="#3">First tab</a><a href="#3" class="active">Second tab</a><a href="#3">Third tab</a>',
            // }
        })

        expect(wrapper.vm.activeTab).toBe(0)

        wrapper.findAll('[jest="tab-item"]').at(1).trigger('click')

        expect(wrapper.vm.activeTab).toBe(1)
    })
})