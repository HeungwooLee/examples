export default class InjectableCss {

    private cssDefinitions: string

    constructor(cssDefinitions: string) {
        this.cssDefinitions = cssDefinitions;
    }

    public inject(): void {
        let css = document.createElement("style");
        css.innerText = this.cssDefinitions;
        document.head.appendChild(css);
    }
}

// var styles = `
//     .qwebirc-qui .ircwindow div { 
//         font-family: Georgia,Cambria,"Times New Roman",Times,serif;
//         margin: 26px auto 0 auto;
//         max-width: 650px;
//     }
//     .qwebirc-qui .lines {
//         font-size: 18px;
//         line-height: 1.58;
//         letter-spacing: -.004em;
//     }
    
//     .qwebirc-qui .nicklist a {
//         margin: 6px;
//     }
// `

// var styleSheet = document.createElement("style")
// styleSheet.innerText = styles
// document.head.appendChild(styleSheet)