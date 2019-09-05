import { Div, Button, Article, Header, Main, Footer, buildDOM } from '../html';

describe('html', () => {

    it('create an empty div element', () => {
        // arrange
        const div = Div();
        // act
        const el = buildDOM(div);
        // assert
        expect(el.tagName).toBe('DIV');
    });

    it('create a div with text', () => {
        // arrange
        const text = 'some text';
        const div = Div({}, text);
        // act
        const el = buildDOM(div);
        // assert
        expect(el.innerHTML).toBe(text);
    });

    it('create a div with a child', () => {
        // arrange
        const div = Div({},
            Div()
        );
        // act
        const el = buildDOM(div);
        // assert
        expect(el.children.length).toBe(1);
    });

    it('create a div with multiple child', () => {
        // arrange
        const div = Article({},
            Header(),
            Main(),
            Footer()
        )
        // act
        const el = buildDOM(div);
        // assert
        const children = Array.from(el.children).map(e => e.tagName);
        expect(children).toEqual(['HEADER', 'MAIN', 'FOOTER']);
    });

    it('create a clickable button', () => {
        // arrange
        const onclick = jest.fn();
        const button = Button({ onclick }, 'Click here');
        const el = buildDOM(button);
        // act
        el.click();
        // assert
        expect(onclick).toHaveBeenCalledTimes(1);
    });

});