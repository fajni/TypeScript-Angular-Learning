export class ListTemplate {
    /*
        1. register a list container (ul) from html in the constructor,
        2. create render method to render a new 'li' to the container
            -- accepts arguments: invoice or payment, a heading, a position,
            -- create the html template (li, h4, p),
            -- add the 'li' template to the start/end of the list
    */
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li); // at start of the tag
        }
        else {
            this.container.append(li);
        }
    }
}
