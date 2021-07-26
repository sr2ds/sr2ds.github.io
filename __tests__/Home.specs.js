import Header from '../src/components/Header.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('pagina Home', () => {

  it('garante que header esteja como no snapshot', () => {

    const wrapper = shallowMount(Header, { localVue, router })
    expect(wrapper.html()).toMatchSnapshot()
  });

});