'use strict';

const dom = {
    create(
        content = false,
        parent = false,
        typ = 'div',
        cls = false,
        id = false,
        toEnd = true
    ) {
        const newElement = document.createElement(typ);
        if (content) newElement.innerHTML = content;
        if (cls) newElement.className = cls;
        if (id) newElement.id = id;
        if (parent) {
            if (toEnd) parent.append(newElement);
            else parent.prepend(newElement);
        }
        return newElement;
    },
    sel(selector) {
        return document.querySelector(selector);
    },
    selAll(selector) {
        return Array.from(document.querySelectorAll(selector));
    },
}