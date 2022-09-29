// Dependencies
import { Component, CustomElement, CustomElementOptions } from "super-custom-elements";

export interface BodyTextOptions extends CustomElementOptions {
    children: HTMLElement;
}

@Component({
    tag: "body-text",
    template: import("./body-text.html"),
    style: import("./body-text.scss")
})
export class BodyText extends CustomElement {

    constructor(props) {
        super();
        console.log(props);
    }

    setup(options?: BodyTextOptions): void {}
}
