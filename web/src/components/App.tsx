/// <reference path="../external/typings.d.ts" />
import * as React from 'react';
import setData from '../GRN.json'
import {ANTLRErrorListener, ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {mtgLexer} from "../generated/mtgLexer";
import {CardContext, mtgParser} from "../generated/mtgParser";
import {ParseTree, ParseTreeListener, ParseTreeWalker, TerminalNode} from "antlr4ts/tree";
import {instanceOf} from "prop-types";

class MyParseListener implements ParseTreeListener {
    visitTerminal?: (node: TerminalNode) => void;

}

class MyErrorListener implements ANTLRErrorListener<Symbol> {
    private app: App;
    constructor(app: App) {
        this.app =app;
    }

    syntaxError(recognizer : any, offendingSymbol : any, line : any, charPositionInLine : any, msg : any, e : any) {
        this.app.errorMessages += (`Line ${line}, column ${charPositionInLine}, ${msg}` + "\n");
    }
}

class App extends React.Component {

    public cards : { [name : string]  : string } = {};
    public cardNames : any[] = [];

    componentDidMount(): void {
        for (let jsonCard of setData.cards) {
            this.cards[jsonCard.name] = this.adaptText(jsonCard.text, jsonCard.name);
            this.cardNames.push((<option>{jsonCard.name}</option>));
        }
        this.forceUpdate();
        this.cardNameChanged = this.cardNameChanged.bind(this);
        this.rulesTextChanged = this.rulesTextChanged.bind(this);
        this.testAllCards = this.testAllCards.bind(this);
    }


    private testAllCards() : void {
        $("#tree").html("");
        for (let key in this.cards) {
            $("#tree").append(key + " ... ");
            this.parseIntoResult(this.cards[key]);
            if (this.errorMessages) {
                $("#tree").append("<b>Parsing failed.</b> " + this.errorMessages);
            } else {
                $("#tree").append("OK");
            }
            $("#tree").append("<br>");
        }
    }

    private adaptText(text: string, cardname: string) : string {
        if (!text) {
            return "";
        }
        if (cardname.indexOf("(") != -1) {
            cardname = cardname.substring(0, cardname.indexOf("(") - 1);
        }
        let ret = this.replaceWithTilde(cardname, text);
        if (cardname.indexOf(",") != -1) {
            let legendName = cardname.substring(0, cardname.indexOf(","));
            ret = this.replaceWithTilde(legendName, ret);
        }

        return ret;

    }

    private replaceWithTilde(needle: string, haystack: string) {
        let regex = new RegExp(this.escapeRegExp(needle), 'g');
        return haystack.replace(regex, "~");
    }

    private escapeRegExp(str : string) : string {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    public cardNameChanged() {
        let name = (document.getElementById("cardNameBox") as HTMLInputElement).value;
        if (name in this.cards) {
            let rt = (document.getElementById("rulesText") as HTMLTextAreaElement);
            rt.value = this.cards[name];
            this.rulesTextChanged();
            return;
        }
    }

    public rulesTextChanged() {
        let rt = (document.getElementById("rulesText") as HTMLTextAreaElement);
        this.parseRulesText(rt.value);
    }

    public errorMessages : string;
    private parseRulesText(rulesText: string) {
        let result = this.parseIntoResult(rulesText);

        if (this.errorMessages) {
            $("#tree").html("<b>Errors:</b><br>" + this.errorMessages.replace(/\n/g, "<br>") + "<hr><br>" + this.createHtmlFromParse(result));
        } else {
            $("#tree").html(this.createHtmlFromParse(result));
        }
        var toggler = $(".ccaret");
        toggler.on('click', function() {
            $(this).parent().children(".nested").toggleClass("nestedActive");
            $(this).toggleClass("caret-down");
        });

    }

    private parseIntoResult(rulesText: string) : CardContext {
        this.errorMessages = "";
        let inputStream = new ANTLRInputStream(rulesText);
        let lexer = new mtgLexer(inputStream);
        lexer.addErrorListener(new MyErrorListener(this));
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new mtgParser(tokenStream);
        parser.addErrorListener(new MyErrorListener(this));

        let result = parser.card();
        if (result.text.length < rulesText.replace(/ ?\([^)]+\)/g, "").length) {
            this.errorMessages += "Not all rules text was parsed. Try reformulating.";
        }
        return result;
    }

    private hideSingles: boolean;

    private createHtmlFromParse(result: CardContext) : string {
        this.hideSingles = (document.getElementById("hideSingles") as HTMLInputElement).checked;
        console.log(this.hideSingles);
        return "<ul id='fullParseTree'>"
            + "<li>"
            + this.createHtmlFromNode(result)
            + "</li>"
            + "</ul>";
    }

    private createHtmlFromNode(node: ParseTree): string {
        if (node.childCount == 0) {
            return "<b>" +  node.text + "</b>";
        } else {
            if (node.childCount == 1 && this.hideSingles
                && !(node.getChild(0) instanceof TerminalNode)) {
                return this.createHtmlFromNode(node.getChild(0));
            }
            let childrenText = "";
            for (let i = 0; i < node.childCount; i++) {
                childrenText += "<li>" + this.createHtmlFromNode(node.getChild(i)) + "</li>";
            }
            return "<span class='ccaret'>" + this.getNonTerminalName(node) +
                "</span>" +
                "<ul class='nested nestedActive'>"
                + childrenText
                + "</ul>";
        }
    }

    private getNonTerminalName(node: ParseTree): string {
        let nm = node.constructor.name;
        if (nm.endsWith("Context")) {
            return nm.substr(0, nm.length - 7);
        } else {
            return nm;
        }
    }

    public render() {
        return [
           (
                <div>
                    Select a <i>Guilds of Ravnica</i> card:&nbsp;&nbsp;
                    <input id="cardNameBox" placeholder="e.g. Venerated Loxodon" list="guilds" autoComplete="off" style={{ width: 400 }} onChange={this.cardNameChanged} />
                    <br />
                    Or type in rules text (use "~" instead of the card name):
                    <br />
                    <textarea onChange={this.rulesTextChanged} placeholder="e.g. When ~ enters the battlefield, destroy target creature with flying." id="rulesText" rows={8} cols={80} ></textarea>
                    <br />
                    <input type="checkbox" onChange={this.rulesTextChanged} id="hideSingles"/><label htmlFor="hideSingles" style={{ fontWeight: "normal" }}>Hide nodes with only a single child</label>
                    <br />
                    <div id="tree">
                    </div>
                    <hr/>
                    <small>To download the grammar file, go to <a href="https://raw.githubusercontent.com/Soothsilver/mtg-grammar/master/mtg.g4">https://raw.githubusercontent.com/Soothsilver/mtg-grammar/master/mtg.g4</a>.<br /><a onClick={this.testAllCards}>Click here to test all <i>Guilds of Ravnica</i> cards for syntax errors.</a>
                    </small>
                    <datalist id="guilds">
                        {
                           this.cardNames
                        }
                    </datalist>
                </div>
            )];
    }
}

export default App;
