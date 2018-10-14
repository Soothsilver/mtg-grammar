interface IContextMenuOption {
    caption: string;
    doWhat?: () => void;
    submenu?: IContextMenuOption[];
}
