import InjectableCss from "./injectableCss";

export default class DomHighlighter {
    private highlighted?;
    private highlightCss = new InjectableCss(`
        .ic_highlighted {
            background-color: antiquewhite;
        }
        .ic_selected {
            background-color: aquamarine;
        }
    `);

    constructor() {
        this.highlightCss.inject();
        this.addHandlers();
    }

    private addHandlers() {
        document.body.addEventListener('mouseover', this.mouseOverHandler, false);
        document.body.addEventListener('click', this.mouseClickHandler, false);
    }

    private mouseClickHandler(event: MouseEvent): void {
        if (event.target === document.body) {
            return;
        }
        let current:any = event.target;
        if(current.classList.contains("ic_selected")) {
            current.classList.remove("ic_selected");
        } else {
            current.classList.add("ic_selected");
        }
    }

    private mouseOverHandler(event: MouseEvent): void {
        if (event.target === document.body || this.highlighted === event.target) {
            return;
        }
        if (this.highlighted) {
            this.highlighted.classList.remove("ic_highlighted");
        }        
        this.highlighted = event.target;
        this.highlighted.classList.add("ic_highlighted");
    }

}