import { expect, describe, it } from 'vitest'
import component from '../atoms/TheButton.vue'
import {mount} from "@vue/test-utils";

describe('TheButton.vue', () => {
    describe('when mounted', () => {
        it('renders properly', () => {
            const wrapper = mount(component, {});
            expect(wrapper.html()).toContain('button');
        });
        it('default to light theme', () => {
            const wrapper = mount(component, {});
            expect(wrapper.classes()).toContain('light');
        });
    });

    it('when theme props is set, it modify its style', () => {
        const wrapper = mount(component, {
            props: {
                theme: 'dark'
            }
        });
        expect(wrapper.classes()).toContain('dark');
    });
});