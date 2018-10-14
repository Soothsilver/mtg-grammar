// Generated from ../mtg.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `mtgParser`.
 */
export interface mtgListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mtgParser.card`.
	 * @param ctx the parse tree
	 */
	enterCard?: (ctx: CardContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.card`.
	 * @param ctx the parse tree
	 */
	exitCard?: (ctx: CardContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.ability`.
	 * @param ctx the parse tree
	 */
	enterAbility?: (ctx: AbilityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.ability`.
	 * @param ctx the parse tree
	 */
	exitAbility?: (ctx: AbilityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.modal`.
	 * @param ctx the parse tree
	 */
	enterModal?: (ctx: ModalContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.modal`.
	 * @param ctx the parse tree
	 */
	exitModal?: (ctx: ModalContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.modalPrompt`.
	 * @param ctx the parse tree
	 */
	enterModalPrompt?: (ctx: ModalPromptContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.modalPrompt`.
	 * @param ctx the parse tree
	 */
	exitModalPrompt?: (ctx: ModalPromptContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.chooseOneOption`.
	 * @param ctx the parse tree
	 */
	enterChooseOneOption?: (ctx: ChooseOneOptionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.chooseOneOption`.
	 * @param ctx the parse tree
	 */
	exitChooseOneOption?: (ctx: ChooseOneOptionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.abilityWordAbility`.
	 * @param ctx the parse tree
	 */
	enterAbilityWordAbility?: (ctx: AbilityWordAbilityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.abilityWordAbility`.
	 * @param ctx the parse tree
	 */
	exitAbilityWordAbility?: (ctx: AbilityWordAbilityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.abilityWord`.
	 * @param ctx the parse tree
	 */
	enterAbilityWord?: (ctx: AbilityWordContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.abilityWord`.
	 * @param ctx the parse tree
	 */
	exitAbilityWord?: (ctx: AbilityWordContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.activated`.
	 * @param ctx the parse tree
	 */
	enterActivated?: (ctx: ActivatedContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.activated`.
	 * @param ctx the parse tree
	 */
	exitActivated?: (ctx: ActivatedContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.activationInstructions`.
	 * @param ctx the parse tree
	 */
	enterActivationInstructions?: (ctx: ActivationInstructionsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.activationInstructions`.
	 * @param ctx the parse tree
	 */
	exitActivationInstructions?: (ctx: ActivationInstructionsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.activationInstruction`.
	 * @param ctx the parse tree
	 */
	enterActivationInstruction?: (ctx: ActivationInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.activationInstruction`.
	 * @param ctx the parse tree
	 */
	exitActivationInstruction?: (ctx: ActivationInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.activatedAbilities`.
	 * @param ctx the parse tree
	 */
	enterActivatedAbilities?: (ctx: ActivatedAbilitiesContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.activatedAbilities`.
	 * @param ctx the parse tree
	 */
	exitActivatedAbilities?: (ctx: ActivatedAbilitiesContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.activatedAbilitiesVP`.
	 * @param ctx the parse tree
	 */
	enterActivatedAbilitiesVP?: (ctx: ActivatedAbilitiesVPContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.activatedAbilitiesVP`.
	 * @param ctx the parse tree
	 */
	exitActivatedAbilitiesVP?: (ctx: ActivatedAbilitiesVPContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.triggered`.
	 * @param ctx the parse tree
	 */
	enterTriggered?: (ctx: TriggeredContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.triggered`.
	 * @param ctx the parse tree
	 */
	exitTriggered?: (ctx: TriggeredContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.triggerCondition`.
	 * @param ctx the parse tree
	 */
	enterTriggerCondition?: (ctx: TriggerConditionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.triggerCondition`.
	 * @param ctx the parse tree
	 */
	exitTriggerCondition?: (ctx: TriggerConditionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.triggerConditionInner`.
	 * @param ctx the parse tree
	 */
	enterTriggerConditionInner?: (ctx: TriggerConditionInnerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.triggerConditionInner`.
	 * @param ctx the parse tree
	 */
	exitTriggerConditionInner?: (ctx: TriggerConditionInnerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.interveningIfClause`.
	 * @param ctx the parse tree
	 */
	enterInterveningIfClause?: (ctx: InterveningIfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.interveningIfClause`.
	 * @param ctx the parse tree
	 */
	exitInterveningIfClause?: (ctx: InterveningIfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.additionalCostToCastSpell`.
	 * @param ctx the parse tree
	 */
	enterAdditionalCostToCastSpell?: (ctx: AdditionalCostToCastSpellContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.additionalCostToCastSpell`.
	 * @param ctx the parse tree
	 */
	exitAdditionalCostToCastSpell?: (ctx: AdditionalCostToCastSpellContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.weirdAbility`.
	 * @param ctx the parse tree
	 */
	enterWeirdAbility?: (ctx: WeirdAbilityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.weirdAbility`.
	 * @param ctx the parse tree
	 */
	exitWeirdAbility?: (ctx: WeirdAbilityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.staticOrSpell`.
	 * @param ctx the parse tree
	 */
	enterStaticOrSpell?: (ctx: StaticOrSpellContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.staticOrSpell`.
	 * @param ctx the parse tree
	 */
	exitStaticOrSpell?: (ctx: StaticOrSpellContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.effect`.
	 * @param ctx the parse tree
	 */
	enterEffect?: (ctx: EffectContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.effect`.
	 * @param ctx the parse tree
	 */
	exitEffect?: (ctx: EffectContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.sdot`.
	 * @param ctx the parse tree
	 */
	enterSdot?: (ctx: SdotContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.sdot`.
	 * @param ctx the parse tree
	 */
	exitSdot?: (ctx: SdotContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.additionalSentences`.
	 * @param ctx the parse tree
	 */
	enterAdditionalSentences?: (ctx: AdditionalSentencesContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.additionalSentences`.
	 * @param ctx the parse tree
	 */
	exitAdditionalSentences?: (ctx: AdditionalSentencesContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.additionalSentence`.
	 * @param ctx the parse tree
	 */
	enterAdditionalSentence?: (ctx: AdditionalSentenceContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.additionalSentence`.
	 * @param ctx the parse tree
	 */
	exitAdditionalSentence?: (ctx: AdditionalSentenceContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.s`.
	 * @param ctx the parse tree
	 */
	enterS?: (ctx: SContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.s`.
	 * @param ctx the parse tree
	 */
	exitS?: (ctx: SContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.ss`.
	 * @param ctx the parse tree
	 */
	enterSs?: (ctx: SsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.ss`.
	 * @param ctx the parse tree
	 */
	exitSs?: (ctx: SsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.weirdSentence`.
	 * @param ctx the parse tree
	 */
	enterWeirdSentence?: (ctx: WeirdSentenceContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.weirdSentence`.
	 * @param ctx the parse tree
	 */
	exitWeirdSentence?: (ctx: WeirdSentenceContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.foreachClause`.
	 * @param ctx the parse tree
	 */
	enterForeachClause?: (ctx: ForeachClauseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.foreachClause`.
	 * @param ctx the parse tree
	 */
	exitForeachClause?: (ctx: ForeachClauseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.entity`.
	 * @param ctx the parse tree
	 */
	enterEntity?: (ctx: EntityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.entity`.
	 * @param ctx the parse tree
	 */
	exitEntity?: (ctx: EntityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.anyEntity`.
	 * @param ctx the parse tree
	 */
	enterAnyEntity?: (ctx: AnyEntityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.anyEntity`.
	 * @param ctx the parse tree
	 */
	exitAnyEntity?: (ctx: AnyEntityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.player`.
	 * @param ctx the parse tree
	 */
	enterPlayer?: (ctx: PlayerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.player`.
	 * @param ctx the parse tree
	 */
	exitPlayer?: (ctx: PlayerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.purePlayer`.
	 * @param ctx the parse tree
	 */
	enterPurePlayer?: (ctx: PurePlayerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.purePlayer`.
	 * @param ctx the parse tree
	 */
	exitPurePlayer?: (ctx: PurePlayerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.suffix`.
	 * @param ctx the parse tree
	 */
	enterSuffix?: (ctx: SuffixContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.suffix`.
	 * @param ctx the parse tree
	 */
	exitSuffix?: (ctx: SuffixContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.pureObject`.
	 * @param ctx the parse tree
	 */
	enterPureObject?: (ctx: PureObjectContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.pureObject`.
	 * @param ctx the parse tree
	 */
	exitPureObject?: (ctx: PureObjectContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.referencingObjectPrefix`.
	 * @param ctx the parse tree
	 */
	enterReferencingObjectPrefix?: (ctx: ReferencingObjectPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.referencingObjectPrefix`.
	 * @param ctx the parse tree
	 */
	exitReferencingObjectPrefix?: (ctx: ReferencingObjectPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.cumulativeReferencingPrefix`.
	 * @param ctx the parse tree
	 */
	enterCumulativeReferencingPrefix?: (ctx: CumulativeReferencingPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.cumulativeReferencingPrefix`.
	 * @param ctx the parse tree
	 */
	exitCumulativeReferencingPrefix?: (ctx: CumulativeReferencingPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.commonReferencingPrefix`.
	 * @param ctx the parse tree
	 */
	enterCommonReferencingPrefix?: (ctx: CommonReferencingPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.commonReferencingPrefix`.
	 * @param ctx the parse tree
	 */
	exitCommonReferencingPrefix?: (ctx: CommonReferencingPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.prefix`.
	 * @param ctx the parse tree
	 */
	enterPrefix?: (ctx: PrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.prefix`.
	 * @param ctx the parse tree
	 */
	exitPrefix?: (ctx: PrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.imperative`.
	 * @param ctx the parse tree
	 */
	enterImperative?: (ctx: ImperativeContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.imperative`.
	 * @param ctx the parse tree
	 */
	exitImperative?: (ctx: ImperativeContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.playerVerbPhrase`.
	 * @param ctx the parse tree
	 */
	enterPlayerVerbPhrase?: (ctx: PlayerVerbPhraseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.playerVerbPhrase`.
	 * @param ctx the parse tree
	 */
	exitPlayerVerbPhrase?: (ctx: PlayerVerbPhraseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.objectVerbPhrase`.
	 * @param ctx the parse tree
	 */
	enterObjectVerbPhrase?: (ctx: ObjectVerbPhraseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.objectVerbPhrase`.
	 * @param ctx the parse tree
	 */
	exitObjectVerbPhrase?: (ctx: ObjectVerbPhraseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.objectInfinitive`.
	 * @param ctx the parse tree
	 */
	enterObjectInfinitive?: (ctx: ObjectInfinitiveContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.objectInfinitive`.
	 * @param ctx the parse tree
	 */
	exitObjectInfinitive?: (ctx: ObjectInfinitiveContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.isWhat`.
	 * @param ctx the parse tree
	 */
	enterIsWhat?: (ctx: IsWhatContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.isWhat`.
	 * @param ctx the parse tree
	 */
	exitIsWhat?: (ctx: IsWhatContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.becomesWhat`.
	 * @param ctx the parse tree
	 */
	enterBecomesWhat?: (ctx: BecomesWhatContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.becomesWhat`.
	 * @param ctx the parse tree
	 */
	exitBecomesWhat?: (ctx: BecomesWhatContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.exceptClauseInCopyEffect`.
	 * @param ctx the parse tree
	 */
	enterExceptClauseInCopyEffect?: (ctx: ExceptClauseInCopyEffectContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.exceptClauseInCopyEffect`.
	 * @param ctx the parse tree
	 */
	exitExceptClauseInCopyEffect?: (ctx: ExceptClauseInCopyEffectContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.copyException`.
	 * @param ctx the parse tree
	 */
	enterCopyException?: (ctx: CopyExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.copyException`.
	 * @param ctx the parse tree
	 */
	exitCopyException?: (ctx: CopyExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.itsPossessive`.
	 * @param ctx the parse tree
	 */
	enterItsPossessive?: (ctx: ItsPossessiveContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.itsPossessive`.
	 * @param ctx the parse tree
	 */
	exitItsPossessive?: (ctx: ItsPossessiveContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.acquiredAbility`.
	 * @param ctx the parse tree
	 */
	enterAcquiredAbility?: (ctx: AcquiredAbilityContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.acquiredAbility`.
	 * @param ctx the parse tree
	 */
	exitAcquiredAbility?: (ctx: AcquiredAbilityContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.gets`.
	 * @param ctx the parse tree
	 */
	enterGets?: (ctx: GetsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.gets`.
	 * @param ctx the parse tree
	 */
	exitGets?: (ctx: GetsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.controls`.
	 * @param ctx the parse tree
	 */
	enterControls?: (ctx: ControlsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.controls`.
	 * @param ctx the parse tree
	 */
	exitControls?: (ctx: ControlsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.owns`.
	 * @param ctx the parse tree
	 */
	enterOwns?: (ctx: OwnsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.owns`.
	 * @param ctx the parse tree
	 */
	exitOwns?: (ctx: OwnsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.gains`.
	 * @param ctx the parse tree
	 */
	enterGains?: (ctx: GainsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.gains`.
	 * @param ctx the parse tree
	 */
	exitGains?: (ctx: GainsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.numericalCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterNumericalCharacteristic?: (ctx: NumericalCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.numericalCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitNumericalCharacteristic?: (ctx: NumericalCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.untilClause`.
	 * @param ctx the parse tree
	 */
	enterUntilClause?: (ctx: UntilClauseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.untilClause`.
	 * @param ctx the parse tree
	 */
	exitUntilClause?: (ctx: UntilClauseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.untilClauseInner`.
	 * @param ctx the parse tree
	 */
	enterUntilClauseInner?: (ctx: UntilClauseInnerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.untilClauseInner`.
	 * @param ctx the parse tree
	 */
	exitUntilClauseInner?: (ctx: UntilClauseInnerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.damagePreventionAmount`.
	 * @param ctx the parse tree
	 */
	enterDamagePreventionAmount?: (ctx: DamagePreventionAmountContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.damagePreventionAmount`.
	 * @param ctx the parse tree
	 */
	exitDamagePreventionAmount?: (ctx: DamagePreventionAmountContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.damageNoun`.
	 * @param ctx the parse tree
	 */
	enterDamageNoun?: (ctx: DamageNounContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.damageNoun`.
	 * @param ctx the parse tree
	 */
	exitDamageNoun?: (ctx: DamageNounContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.createTokenDescription`.
	 * @param ctx the parse tree
	 */
	enterCreateTokenDescription?: (ctx: CreateTokenDescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.createTokenDescription`.
	 * @param ctx the parse tree
	 */
	exitCreateTokenDescription?: (ctx: CreateTokenDescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.pt`.
	 * @param ctx the parse tree
	 */
	enterPt?: (ctx: PtContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.pt`.
	 * @param ctx the parse tree
	 */
	exitPt?: (ctx: PtContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.ptModification`.
	 * @param ctx the parse tree
	 */
	enterPtModification?: (ctx: PtModificationContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.ptModification`.
	 * @param ctx the parse tree
	 */
	exitPtModification?: (ctx: PtModificationContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.numberDefinition`.
	 * @param ctx the parse tree
	 */
	enterNumberDefinition?: (ctx: NumberDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.numberDefinition`.
	 * @param ctx the parse tree
	 */
	exitNumberDefinition?: (ctx: NumberDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.withClauseInner`.
	 * @param ctx the parse tree
	 */
	enterWithClauseInner?: (ctx: WithClauseInnerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.withClauseInner`.
	 * @param ctx the parse tree
	 */
	exitWithClauseInner?: (ctx: WithClauseInnerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.counterKind`.
	 * @param ctx the parse tree
	 */
	enterCounterKind?: (ctx: CounterKindContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.counterKind`.
	 * @param ctx the parse tree
	 */
	exitCounterKind?: (ctx: CounterKindContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.dealsWhat`.
	 * @param ctx the parse tree
	 */
	enterDealsWhat?: (ctx: DealsWhatContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.dealsWhat`.
	 * @param ctx the parse tree
	 */
	exitDealsWhat?: (ctx: DealsWhatContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.damageRecipient`.
	 * @param ctx the parse tree
	 */
	enterDamageRecipient?: (ctx: DamageRecipientContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.damageRecipient`.
	 * @param ctx the parse tree
	 */
	exitDamageRecipient?: (ctx: DamageRecipientContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.divideAmongDamageTargets`.
	 * @param ctx the parse tree
	 */
	enterDivideAmongDamageTargets?: (ctx: DivideAmongDamageTargetsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.divideAmongDamageTargets`.
	 * @param ctx the parse tree
	 */
	exitDivideAmongDamageTargets?: (ctx: DivideAmongDamageTargetsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.englishNumber`.
	 * @param ctx the parse tree
	 */
	enterEnglishNumber?: (ctx: EnglishNumberContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.englishNumber`.
	 * @param ctx the parse tree
	 */
	exitEnglishNumber?: (ctx: EnglishNumberContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.numericalNumber`.
	 * @param ctx the parse tree
	 */
	enterNumericalNumber?: (ctx: NumericalNumberContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.numericalNumber`.
	 * @param ctx the parse tree
	 */
	exitNumericalNumber?: (ctx: NumericalNumberContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.numericalComparison`.
	 * @param ctx the parse tree
	 */
	enterNumericalComparison?: (ctx: NumericalComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.numericalComparison`.
	 * @param ctx the parse tree
	 */
	exitNumericalComparison?: (ctx: NumericalComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.countableCount`.
	 * @param ctx the parse tree
	 */
	enterCountableCount?: (ctx: CountableCountContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.countableCount`.
	 * @param ctx the parse tree
	 */
	exitCountableCount?: (ctx: CountableCountContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.cantClauseInner`.
	 * @param ctx the parse tree
	 */
	enterCantClauseInner?: (ctx: CantClauseInnerContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.cantClauseInner`.
	 * @param ctx the parse tree
	 */
	exitCantClauseInner?: (ctx: CantClauseInnerContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.zone`.
	 * @param ctx the parse tree
	 */
	enterZone?: (ctx: ZoneContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.zone`.
	 * @param ctx the parse tree
	 */
	exitZone?: (ctx: ZoneContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.actualZone`.
	 * @param ctx the parse tree
	 */
	enterActualZone?: (ctx: ActualZoneContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.actualZone`.
	 * @param ctx the parse tree
	 */
	exitActualZone?: (ctx: ActualZoneContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.intoZone`.
	 * @param ctx the parse tree
	 */
	enterIntoZone?: (ctx: IntoZoneContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.intoZone`.
	 * @param ctx the parse tree
	 */
	exitIntoZone?: (ctx: IntoZoneContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.inZone`.
	 * @param ctx the parse tree
	 */
	enterInZone?: (ctx: InZoneContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.inZone`.
	 * @param ctx the parse tree
	 */
	exitInZone?: (ctx: InZoneContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.fromZone`.
	 * @param ctx the parse tree
	 */
	enterFromZone?: (ctx: FromZoneContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.fromZone`.
	 * @param ctx the parse tree
	 */
	exitFromZone?: (ctx: FromZoneContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.n`.
	 * @param ctx the parse tree
	 */
	enterN?: (ctx: NContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.n`.
	 * @param ctx the parse tree
	 */
	exitN?: (ctx: NContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.permanentType`.
	 * @param ctx the parse tree
	 */
	enterPermanentType?: (ctx: PermanentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.permanentType`.
	 * @param ctx the parse tree
	 */
	exitPermanentType?: (ctx: PermanentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.anyType`.
	 * @param ctx the parse tree
	 */
	enterAnyType?: (ctx: AnyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.anyType`.
	 * @param ctx the parse tree
	 */
	exitAnyType?: (ctx: AnyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.spellType`.
	 * @param ctx the parse tree
	 */
	enterSpellType?: (ctx: SpellTypeContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.spellType`.
	 * @param ctx the parse tree
	 */
	exitSpellType?: (ctx: SpellTypeContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.asLongAsClause`.
	 * @param ctx the parse tree
	 */
	enterAsLongAsClause?: (ctx: AsLongAsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.asLongAsClause`.
	 * @param ctx the parse tree
	 */
	exitAsLongAsClause?: (ctx: AsLongAsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.doSomethingInsteadOfSomethingElse`.
	 * @param ctx the parse tree
	 */
	enterDoSomethingInsteadOfSomethingElse?: (ctx: DoSomethingInsteadOfSomethingElseContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.doSomethingInsteadOfSomethingElse`.
	 * @param ctx the parse tree
	 */
	exitDoSomethingInsteadOfSomethingElse?: (ctx: DoSomethingInsteadOfSomethingElseContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.costs`.
	 * @param ctx the parse tree
	 */
	enterCosts?: (ctx: CostsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.costs`.
	 * @param ctx the parse tree
	 */
	exitCosts?: (ctx: CostsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.cost`.
	 * @param ctx the parse tree
	 */
	enterCost?: (ctx: CostContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.cost`.
	 * @param ctx the parse tree
	 */
	exitCost?: (ctx: CostContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.loyaltyCost`.
	 * @param ctx the parse tree
	 */
	enterLoyaltyCost?: (ctx: LoyaltyCostContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.loyaltyCost`.
	 * @param ctx the parse tree
	 */
	exitLoyaltyCost?: (ctx: LoyaltyCostContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.manacost`.
	 * @param ctx the parse tree
	 */
	enterManacost?: (ctx: ManacostContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.manacost`.
	 * @param ctx the parse tree
	 */
	exitManacost?: (ctx: ManacostContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.manaGroup`.
	 * @param ctx the parse tree
	 */
	enterManaGroup?: (ctx: ManaGroupContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.manaGroup`.
	 * @param ctx the parse tree
	 */
	exitManaGroup?: (ctx: ManaGroupContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.manaSymbols`.
	 * @param ctx the parse tree
	 */
	enterManaSymbols?: (ctx: ManaSymbolsContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.manaSymbols`.
	 * @param ctx the parse tree
	 */
	exitManaSymbols?: (ctx: ManaSymbolsContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.manaSymbol`.
	 * @param ctx the parse tree
	 */
	enterManaSymbol?: (ctx: ManaSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.manaSymbol`.
	 * @param ctx the parse tree
	 */
	exitManaSymbol?: (ctx: ManaSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.manaLetter`.
	 * @param ctx the parse tree
	 */
	enterManaLetter?: (ctx: ManaLetterContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.manaLetter`.
	 * @param ctx the parse tree
	 */
	exitManaLetter?: (ctx: ManaLetterContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.qualifiedPartOfTurn`.
	 * @param ctx the parse tree
	 */
	enterQualifiedPartOfTurn?: (ctx: QualifiedPartOfTurnContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.qualifiedPartOfTurn`.
	 * @param ctx the parse tree
	 */
	exitQualifiedPartOfTurn?: (ctx: QualifiedPartOfTurnContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.turnQualification`.
	 * @param ctx the parse tree
	 */
	enterTurnQualification?: (ctx: TurnQualificationContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.turnQualification`.
	 * @param ctx the parse tree
	 */
	exitTurnQualification?: (ctx: TurnQualificationContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.partOfTurn`.
	 * @param ctx the parse tree
	 */
	enterPartOfTurn?: (ctx: PartOfTurnContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.partOfTurn`.
	 * @param ctx the parse tree
	 */
	exitPartOfTurn?: (ctx: PartOfTurnContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.playersPossessive`.
	 * @param ctx the parse tree
	 */
	enterPlayersPossessive?: (ctx: PlayersPossessiveContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.playersPossessive`.
	 * @param ctx the parse tree
	 */
	exitPlayersPossessive?: (ctx: PlayersPossessiveContext) => void;

	/**
	 * Enter a parse tree produced by `mtgParser.reminderText`.
	 * @param ctx the parse tree
	 */
	enterReminderText?: (ctx: ReminderTextContext) => void;
	/**
	 * Exit a parse tree produced by `mtgParser.reminderText`.
	 * @param ctx the parse tree
	 */
	exitReminderText?: (ctx: ReminderTextContext) => void;
}

