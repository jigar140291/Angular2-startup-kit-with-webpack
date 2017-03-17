import {dashBoardComponent} from './dashboard.component';

describe('dashBoardComponent', () => {
    let component: dashBoardComponent;

    beforeAll(() => {
        component = new dashBoardComponent();
    });

    it('should have a defined component', () => {
        expect(component).toBeTruthy();
    });
});

