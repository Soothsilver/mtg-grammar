export default class ContextMenuOption implements IContextMenuOption {
    caption: string;
    doWhat: () => void;
    submenu: IContextMenuOption[];


    constructor(caption: string, doWhat: () => void) {
        this.caption = caption;
        this.doWhat = doWhat;
    }
}