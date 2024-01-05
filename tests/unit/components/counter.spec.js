import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => { 

    // test('debe de hacer match con el snapshot', () =>{

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => { 

            const wrapper = shallowMount ( Counter )

            expect(wrapper.find('h2').exists()).toBeTruthy()

            const h2 = wrapper.find('h2').text()

            expect ( h2 ).toBe('Counter')
     })
 })