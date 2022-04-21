interface Script {
    name: string;
    url: string;
    loaded?: boolean;
}

export default class InjectableScript {
    readonly MAXIMUM_WAIT = 3;
    private scripts: Script[];

    constructor(...scripts: Script[]) {
        this.scripts = scripts;
    }

    public async run(func: () => void): Promise<void> {
        this.loadScripts();
        for(var i = this.MAXIMUM_WAIT; i > 0; i--) {
            if(this.scripts.filter(script => !script.loaded).length == 0) {
                func();
                break;
            }
            await new Promise(r => setTimeout(r, 500));
        }
    }

    private loadScripts() {
        this.scripts.forEach(script => {
            let element = document.createElement('script');
            element.src = script.url;
            element.onload = () => console.log(`Finished loading ${script.name}`);
            document.head.appendChild(element);
            script.loaded = true;
        });
    }
}

const JQUERY_SCRIPT: Script = {
    name: "jquery",
    url: "//code.jquery.com/jquery-latest.min.js"
}

export { JQUERY_SCRIPT };