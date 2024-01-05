import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => { 

    let wrapper;

    beforeEach(() =>{
        wrapper = shallowMount( Counter )
    })

    // test('debe de hacer match con el snapshot', () =>{

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => { 

            expect(wrapper.find('h2').exists()).toBeTruthy()

            const h2 = wrapper.find('h2').text()

            expect ( h2 ).toBe('Counter')
     })

     test('el valor por defecto debe de ser 1 en el p', ()=>{

        // pTags
        const pTags = wrapper.findAll('p')

        // expect segundo p === 1
        expect( pTags[1].text()).toBe('1')

     })

     test('debe de incrementar y decrementar el contador', async () =>{

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        
        let value = wrapper.find('[data-testid="counter"]').text()

        expect (value).toBe('2')
        //TODO Tarea
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()

        expect (value).toBe('0')
     })


     test('debe de establecer el valor por defecto', () =>{

        const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value)).toBe( start )

     })

     test('debe de mostrar la prop title', () => {

        const wrapper = shallowMount( Counter, {
            props:{
                title: 'Hola Mundo'
            }

        })

        expect(wrapper.find('h2').text()).toBe('Hola Mundo')
     })



 })