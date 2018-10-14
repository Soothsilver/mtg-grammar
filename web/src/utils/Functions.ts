
import {func} from "prop-types";

export function showInformationModal(caption : string, text : string) {
    $("#infoheader").text(caption);
    $("#infotext").html(text);
    $("#myModal").modal();
}
export function $id(id : string): JQuery<HTMLElement> {
    return $("#" + id);
}

export function prettifyMessage(fulltext: string) {
    return fulltext.replace(/\n/g, "<br>");
}