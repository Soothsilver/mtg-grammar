// Generated from ../mtg.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { CardContext } from './mtgParser';
import { AbilityContext } from './mtgParser';
import { ModalContext } from './mtgParser';
import { ModalPromptContext } from './mtgParser';
import { ChooseOneOptionContext } from './mtgParser';
import { KeywordsContext } from './mtgParser';
import { KeywordContext } from './mtgParser';
import { AbilityWordAbilityContext } from './mtgParser';
import { AbilityWordContext } from './mtgParser';
import { ActivatedContext } from './mtgParser';
import { ActivationInstructionsContext } from './mtgParser';
import { ActivationInstructionContext } from './mtgParser';
import { ActivatedAbilitiesContext } from './mtgParser';
import { ActivatedAbilitiesVPContext } from './mtgParser';
import { TriggeredContext } from './mtgParser';
import { TriggerConditionContext } from './mtgParser';
import { TriggerConditionInnerContext } from './mtgParser';
import { InterveningIfClauseContext } from './mtgParser';
import { AdditionalCostToCastSpellContext } from './mtgParser';
import { WeirdAbilityContext } from './mtgParser';
import { StaticOrSpellContext } from './mtgParser';
import { EffectContext } from './mtgParser';
import { SdotContext } from './mtgParser';
import { AdditionalSentencesContext } from './mtgParser';
import { AdditionalSentenceContext } from './mtgParser';
import { SContext } from './mtgParser';
import { SsContext } from './mtgParser';
import { WeirdSentenceContext } from './mtgParser';
import { ForeachClauseContext } from './mtgParser';
import { ConditionContext } from './mtgParser';
import { EntityContext } from './mtgParser';
import { AnyEntityContext } from './mtgParser';
import { PlayerContext } from './mtgParser';
import { PurePlayerContext } from './mtgParser';
import { ObjectContext } from './mtgParser';
import { SuffixContext } from './mtgParser';
import { PureObjectContext } from './mtgParser';
import { ReferencingObjectPrefixContext } from './mtgParser';
import { CumulativeReferencingPrefixContext } from './mtgParser';
import { CommonReferencingPrefixContext } from './mtgParser';
import { PrefixContext } from './mtgParser';
import { ImperativeContext } from './mtgParser';
import { PlayerVerbPhraseContext } from './mtgParser';
import { ObjectVerbPhraseContext } from './mtgParser';
import { ObjectInfinitiveContext } from './mtgParser';
import { IsWhatContext } from './mtgParser';
import { BecomesWhatContext } from './mtgParser';
import { ExceptClauseInCopyEffectContext } from './mtgParser';
import { CopyExceptionContext } from './mtgParser';
import { ItsPossessiveContext } from './mtgParser';
import { AcquiredAbilityContext } from './mtgParser';
import { GetsContext } from './mtgParser';
import { ControlsContext } from './mtgParser';
import { OwnsContext } from './mtgParser';
import { GainsContext } from './mtgParser';
import { DurationContext } from './mtgParser';
import { NumericalCharacteristicContext } from './mtgParser';
import { UntilClauseContext } from './mtgParser';
import { UntilClauseInnerContext } from './mtgParser';
import { DamagePreventionAmountContext } from './mtgParser';
import { DamageNounContext } from './mtgParser';
import { CreateTokenDescriptionContext } from './mtgParser';
import { ColorContext } from './mtgParser';
import { PtContext } from './mtgParser';
import { PtModificationContext } from './mtgParser';
import { NumberDefinitionContext } from './mtgParser';
import { WithClauseContext } from './mtgParser';
import { WithClauseInnerContext } from './mtgParser';
import { CounterKindContext } from './mtgParser';
import { DealsWhatContext } from './mtgParser';
import { DamageRecipientContext } from './mtgParser';
import { DivideAmongDamageTargetsContext } from './mtgParser';
import { EnglishNumberContext } from './mtgParser';
import { NumericalNumberContext } from './mtgParser';
import { NumericalComparisonContext } from './mtgParser';
import { NumberContext } from './mtgParser';
import { CountableCountContext } from './mtgParser';
import { CantClauseInnerContext } from './mtgParser';
import { ZoneContext } from './mtgParser';
import { ActualZoneContext } from './mtgParser';
import { IntoZoneContext } from './mtgParser';
import { InZoneContext } from './mtgParser';
import { FromZoneContext } from './mtgParser';
import { NContext } from './mtgParser';
import { PermanentTypeContext } from './mtgParser';
import { NameContext } from './mtgParser';
import { AnyTypeContext } from './mtgParser';
import { SpellTypeContext } from './mtgParser';
import { AsLongAsClauseContext } from './mtgParser';
import { DoSomethingInsteadOfSomethingElseContext } from './mtgParser';
import { CostsContext } from './mtgParser';
import { CostContext } from './mtgParser';
import { LoyaltyCostContext } from './mtgParser';
import { ManacostContext } from './mtgParser';
import { ManaGroupContext } from './mtgParser';
import { ManaSymbolsContext } from './mtgParser';
import { ManaSymbolContext } from './mtgParser';
import { ManaLetterContext } from './mtgParser';
import { QualifiedPartOfTurnContext } from './mtgParser';
import { TurnQualificationContext } from './mtgParser';
import { PartOfTurnContext } from './mtgParser';
import { PlayersPossessiveContext } from './mtgParser';
import { ReminderTextContext } from './mtgParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mtgParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mtgVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mtgParser.card`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCard?: (ctx: CardContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.ability`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbility?: (ctx: AbilityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.modal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModal?: (ctx: ModalContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.modalPrompt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModalPrompt?: (ctx: ModalPromptContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.chooseOneOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChooseOneOption?: (ctx: ChooseOneOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.abilityWordAbility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbilityWordAbility?: (ctx: AbilityWordAbilityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.abilityWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbilityWord?: (ctx: AbilityWordContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.activated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivated?: (ctx: ActivatedContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.activationInstructions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivationInstructions?: (ctx: ActivationInstructionsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.activationInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivationInstruction?: (ctx: ActivationInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.activatedAbilities`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivatedAbilities?: (ctx: ActivatedAbilitiesContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.activatedAbilitiesVP`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivatedAbilitiesVP?: (ctx: ActivatedAbilitiesVPContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.triggered`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggered?: (ctx: TriggeredContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.triggerCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerCondition?: (ctx: TriggerConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.triggerConditionInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerConditionInner?: (ctx: TriggerConditionInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.interveningIfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterveningIfClause?: (ctx: InterveningIfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.additionalCostToCastSpell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalCostToCastSpell?: (ctx: AdditionalCostToCastSpellContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.weirdAbility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeirdAbility?: (ctx: WeirdAbilityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.staticOrSpell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticOrSpell?: (ctx: StaticOrSpellContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.effect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffect?: (ctx: EffectContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.sdot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSdot?: (ctx: SdotContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.additionalSentences`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalSentences?: (ctx: AdditionalSentencesContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.additionalSentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalSentence?: (ctx: AdditionalSentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.s`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS?: (ctx: SContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.ss`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSs?: (ctx: SsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.weirdSentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeirdSentence?: (ctx: WeirdSentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.foreachClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachClause?: (ctx: ForeachClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity?: (ctx: EntityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.anyEntity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyEntity?: (ctx: AnyEntityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.player`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayer?: (ctx: PlayerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.purePlayer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPurePlayer?: (ctx: PurePlayerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.suffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuffix?: (ctx: SuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.pureObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPureObject?: (ctx: PureObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.referencingObjectPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencingObjectPrefix?: (ctx: ReferencingObjectPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.cumulativeReferencingPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCumulativeReferencingPrefix?: (ctx: CumulativeReferencingPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.commonReferencingPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonReferencingPrefix?: (ctx: CommonReferencingPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix?: (ctx: PrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.imperative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImperative?: (ctx: ImperativeContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.playerVerbPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayerVerbPhrase?: (ctx: PlayerVerbPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.objectVerbPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectVerbPhrase?: (ctx: ObjectVerbPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.objectInfinitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectInfinitive?: (ctx: ObjectInfinitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.isWhat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsWhat?: (ctx: IsWhatContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.becomesWhat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBecomesWhat?: (ctx: BecomesWhatContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.exceptClauseInCopyEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptClauseInCopyEffect?: (ctx: ExceptClauseInCopyEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.copyException`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyException?: (ctx: CopyExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.itsPossessive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItsPossessive?: (ctx: ItsPossessiveContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.acquiredAbility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcquiredAbility?: (ctx: AcquiredAbilityContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.gets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGets?: (ctx: GetsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.controls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControls?: (ctx: ControlsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.owns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwns?: (ctx: OwnsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.gains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGains?: (ctx: GainsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.numericalCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericalCharacteristic?: (ctx: NumericalCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.untilClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntilClause?: (ctx: UntilClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.untilClauseInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntilClauseInner?: (ctx: UntilClauseInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.damagePreventionAmount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDamagePreventionAmount?: (ctx: DamagePreventionAmountContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.damageNoun`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDamageNoun?: (ctx: DamageNounContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.createTokenDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTokenDescription?: (ctx: CreateTokenDescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.pt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPt?: (ctx: PtContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.ptModification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPtModification?: (ctx: PtModificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.numberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberDefinition?: (ctx: NumberDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.withClauseInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClauseInner?: (ctx: WithClauseInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.counterKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCounterKind?: (ctx: CounterKindContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.dealsWhat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDealsWhat?: (ctx: DealsWhatContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.damageRecipient`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDamageRecipient?: (ctx: DamageRecipientContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.divideAmongDamageTargets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideAmongDamageTargets?: (ctx: DivideAmongDamageTargetsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.englishNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnglishNumber?: (ctx: EnglishNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.numericalNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericalNumber?: (ctx: NumericalNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.numericalComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericalComparison?: (ctx: NumericalComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.countableCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCountableCount?: (ctx: CountableCountContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.cantClauseInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCantClauseInner?: (ctx: CantClauseInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.zone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZone?: (ctx: ZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.actualZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualZone?: (ctx: ActualZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.intoZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntoZone?: (ctx: IntoZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.inZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInZone?: (ctx: InZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.fromZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromZone?: (ctx: FromZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.n`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitN?: (ctx: NContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.permanentType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPermanentType?: (ctx: PermanentTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.anyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyType?: (ctx: AnyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.spellType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpellType?: (ctx: SpellTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.asLongAsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsLongAsClause?: (ctx: AsLongAsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.doSomethingInsteadOfSomethingElse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoSomethingInsteadOfSomethingElse?: (ctx: DoSomethingInsteadOfSomethingElseContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.costs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCosts?: (ctx: CostsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.cost`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCost?: (ctx: CostContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.loyaltyCost`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoyaltyCost?: (ctx: LoyaltyCostContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.manacost`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManacost?: (ctx: ManacostContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.manaGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManaGroup?: (ctx: ManaGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.manaSymbols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManaSymbols?: (ctx: ManaSymbolsContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.manaSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManaSymbol?: (ctx: ManaSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.manaLetter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManaLetter?: (ctx: ManaLetterContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.qualifiedPartOfTurn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedPartOfTurn?: (ctx: QualifiedPartOfTurnContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.turnQualification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTurnQualification?: (ctx: TurnQualificationContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.partOfTurn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartOfTurn?: (ctx: PartOfTurnContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.playersPossessive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayersPossessive?: (ctx: PlayersPossessiveContext) => Result;

	/**
	 * Visit a parse tree produced by `mtgParser.reminderText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReminderText?: (ctx: ReminderTextContext) => Result;
}

