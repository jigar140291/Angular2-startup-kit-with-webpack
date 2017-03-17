import {pageComponent} from "./page.component";

describe('pageComponent', () => {
    let component: pageComponent;

    beforeAll(() => {
        component = new pageComponent();
    });

    it('should have a defined component', () => {
        expect(component).toBeTruthy();
    });
});

