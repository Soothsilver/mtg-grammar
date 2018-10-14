export default class ContextMenuSubmenu implements IContextMenuOption {
    caption: string;
    doWhat: () => void;
    submenu: IContextMenuOption[];


    constructor(caption: string, submenu: IContextMenuOption[]) {
        this.caption = caption;
        this.submenu = submenu;
    }
}