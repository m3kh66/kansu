interface UIElement {
    readonly tagName: string;
    readonly children: (string | UIElement)[];
    readonly options: UIElementOptions;
}

interface UIElementOptions {
    readonly [key: string]: any;
}

/**
 * 
 * @param children 
 */
export const createElement = (tagName: string) =>
    (options: UIElementOptions = {}, ...children: (string | UIElement)[]): UIElement => ({
        tagName,
        options,
        children
    });

/**
 * 
 * @param element 
 */
export function buildDOM({ tagName, children, options }: UIElement) {
    const el = document.createElement(tagName);
    for (const prop in options) {
        if (!options.hasOwnProperty(prop)) continue;
        if (prop.toLowerCase().startsWith('on')) {
            el.addEventListener(prop.substr(2), options[prop]);
        }
    }
    children.forEach(c => {
        if (typeof c === 'string') el.append(c);
        else el.append(buildDOM(c));
    });
    return el;
}

export const Div = createElement('div');
export const Button = createElement('button');
export const Article = createElement('article');
export const Header = createElement('header');
export const Main = createElement('main');
export const Footer = createElement('footer');