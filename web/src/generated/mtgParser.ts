// Generated from ../mtg.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { mtgListener } from './mtgListener';
import { mtgVisitor } from './mtgVisitor';


export class mtgParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly T__29=30;
	public static readonly T__30=31;
	public static readonly T__31=32;
	public static readonly T__32=33;
	public static readonly T__33=34;
	public static readonly T__34=35;
	public static readonly T__35=36;
	public static readonly T__36=37;
	public static readonly T__37=38;
	public static readonly T__38=39;
	public static readonly T__39=40;
	public static readonly T__40=41;
	public static readonly T__41=42;
	public static readonly T__42=43;
	public static readonly T__43=44;
	public static readonly T__44=45;
	public static readonly T__45=46;
	public static readonly T__46=47;
	public static readonly T__47=48;
	public static readonly T__48=49;
	public static readonly T__49=50;
	public static readonly T__50=51;
	public static readonly T__51=52;
	public static readonly T__52=53;
	public static readonly T__53=54;
	public static readonly T__54=55;
	public static readonly T__55=56;
	public static readonly T__56=57;
	public static readonly T__57=58;
	public static readonly T__58=59;
	public static readonly T__59=60;
	public static readonly T__60=61;
	public static readonly T__61=62;
	public static readonly T__62=63;
	public static readonly T__63=64;
	public static readonly T__64=65;
	public static readonly T__65=66;
	public static readonly T__66=67;
	public static readonly T__67=68;
	public static readonly T__68=69;
	public static readonly T__69=70;
	public static readonly T__70=71;
	public static readonly T__71=72;
	public static readonly T__72=73;
	public static readonly T__73=74;
	public static readonly T__74=75;
	public static readonly T__75=76;
	public static readonly T__76=77;
	public static readonly T__77=78;
	public static readonly T__78=79;
	public static readonly T__79=80;
	public static readonly T__80=81;
	public static readonly T__81=82;
	public static readonly T__82=83;
	public static readonly T__83=84;
	public static readonly T__84=85;
	public static readonly T__85=86;
	public static readonly T__86=87;
	public static readonly T__87=88;
	public static readonly T__88=89;
	public static readonly T__89=90;
	public static readonly T__90=91;
	public static readonly T__91=92;
	public static readonly T__92=93;
	public static readonly T__93=94;
	public static readonly T__94=95;
	public static readonly T__95=96;
	public static readonly T__96=97;
	public static readonly T__97=98;
	public static readonly T__98=99;
	public static readonly T__99=100;
	public static readonly T__100=101;
	public static readonly T__101=102;
	public static readonly T__102=103;
	public static readonly T__103=104;
	public static readonly T__104=105;
	public static readonly T__105=106;
	public static readonly T__106=107;
	public static readonly T__107=108;
	public static readonly T__108=109;
	public static readonly T__109=110;
	public static readonly T__110=111;
	public static readonly T__111=112;
	public static readonly T__112=113;
	public static readonly T__113=114;
	public static readonly T__114=115;
	public static readonly T__115=116;
	public static readonly T__116=117;
	public static readonly T__117=118;
	public static readonly T__118=119;
	public static readonly T__119=120;
	public static readonly T__120=121;
	public static readonly T__121=122;
	public static readonly T__122=123;
	public static readonly T__123=124;
	public static readonly T__124=125;
	public static readonly T__125=126;
	public static readonly T__126=127;
	public static readonly T__127=128;
	public static readonly T__128=129;
	public static readonly T__129=130;
	public static readonly T__130=131;
	public static readonly T__131=132;
	public static readonly T__132=133;
	public static readonly T__133=134;
	public static readonly T__134=135;
	public static readonly T__135=136;
	public static readonly T__136=137;
	public static readonly T__137=138;
	public static readonly T__138=139;
	public static readonly T__139=140;
	public static readonly T__140=141;
	public static readonly T__141=142;
	public static readonly T__142=143;
	public static readonly T__143=144;
	public static readonly T__144=145;
	public static readonly T__145=146;
	public static readonly T__146=147;
	public static readonly T__147=148;
	public static readonly T__148=149;
	public static readonly T__149=150;
	public static readonly T__150=151;
	public static readonly T__151=152;
	public static readonly T__152=153;
	public static readonly T__153=154;
	public static readonly T__154=155;
	public static readonly T__155=156;
	public static readonly T__156=157;
	public static readonly T__157=158;
	public static readonly T__158=159;
	public static readonly T__159=160;
	public static readonly T__160=161;
	public static readonly T__161=162;
	public static readonly T__162=163;
	public static readonly T__163=164;
	public static readonly T__164=165;
	public static readonly T__165=166;
	public static readonly T__166=167;
	public static readonly T__167=168;
	public static readonly T__168=169;
	public static readonly T__169=170;
	public static readonly T__170=171;
	public static readonly T__171=172;
	public static readonly T__172=173;
	public static readonly T__173=174;
	public static readonly T__174=175;
	public static readonly T__175=176;
	public static readonly T__176=177;
	public static readonly T__177=178;
	public static readonly T__178=179;
	public static readonly T__179=180;
	public static readonly T__180=181;
	public static readonly T__181=182;
	public static readonly T__182=183;
	public static readonly T__183=184;
	public static readonly T__184=185;
	public static readonly T__185=186;
	public static readonly T__186=187;
	public static readonly T__187=188;
	public static readonly T__188=189;
	public static readonly T__189=190;
	public static readonly T__190=191;
	public static readonly T__191=192;
	public static readonly T__192=193;
	public static readonly T__193=194;
	public static readonly T__194=195;
	public static readonly T__195=196;
	public static readonly T__196=197;
	public static readonly T__197=198;
	public static readonly T__198=199;
	public static readonly T__199=200;
	public static readonly T__200=201;
	public static readonly T__201=202;
	public static readonly T__202=203;
	public static readonly T__203=204;
	public static readonly T__204=205;
	public static readonly T__205=206;
	public static readonly T__206=207;
	public static readonly T__207=208;
	public static readonly T__208=209;
	public static readonly T__209=210;
	public static readonly T__210=211;
	public static readonly T__211=212;
	public static readonly T__212=213;
	public static readonly T__213=214;
	public static readonly T__214=215;
	public static readonly T__215=216;
	public static readonly T__216=217;
	public static readonly T__217=218;
	public static readonly T__218=219;
	public static readonly T__219=220;
	public static readonly T__220=221;
	public static readonly T__221=222;
	public static readonly T__222=223;
	public static readonly T__223=224;
	public static readonly T__224=225;
	public static readonly T__225=226;
	public static readonly T__226=227;
	public static readonly T__227=228;
	public static readonly T__228=229;
	public static readonly T__229=230;
	public static readonly T__230=231;
	public static readonly T__231=232;
	public static readonly T__232=233;
	public static readonly T__233=234;
	public static readonly T__234=235;
	public static readonly T__235=236;
	public static readonly T__236=237;
	public static readonly T__237=238;
	public static readonly T__238=239;
	public static readonly T__239=240;
	public static readonly T__240=241;
	public static readonly T__241=242;
	public static readonly T__242=243;
	public static readonly T__243=244;
	public static readonly T__244=245;
	public static readonly T__245=246;
	public static readonly T__246=247;
	public static readonly T__247=248;
	public static readonly T__248=249;
	public static readonly T__249=250;
	public static readonly T__250=251;
	public static readonly T__251=252;
	public static readonly T__252=253;
	public static readonly T__253=254;
	public static readonly T__254=255;
	public static readonly T__255=256;
	public static readonly T__256=257;
	public static readonly T__257=258;
	public static readonly T__258=259;
	public static readonly T__259=260;
	public static readonly T__260=261;
	public static readonly T__261=262;
	public static readonly T__262=263;
	public static readonly T__263=264;
	public static readonly T__264=265;
	public static readonly T__265=266;
	public static readonly T__266=267;
	public static readonly T__267=268;
	public static readonly T__268=269;
	public static readonly T__269=270;
	public static readonly T__270=271;
	public static readonly T__271=272;
	public static readonly T__272=273;
	public static readonly T__273=274;
	public static readonly T__274=275;
	public static readonly T__275=276;
	public static readonly T__276=277;
	public static readonly T__277=278;
	public static readonly T__278=279;
	public static readonly T__279=280;
	public static readonly T__280=281;
	public static readonly T__281=282;
	public static readonly T__282=283;
	public static readonly T__283=284;
	public static readonly T__284=285;
	public static readonly T__285=286;
	public static readonly T__286=287;
	public static readonly T__287=288;
	public static readonly T__288=289;
	public static readonly T__289=290;
	public static readonly T__290=291;
	public static readonly T__291=292;
	public static readonly T__292=293;
	public static readonly T__293=294;
	public static readonly T__294=295;
	public static readonly T__295=296;
	public static readonly T__296=297;
	public static readonly T__297=298;
	public static readonly T__298=299;
	public static readonly T__299=300;
	public static readonly T__300=301;
	public static readonly T__301=302;
	public static readonly T__302=303;
	public static readonly T__303=304;
	public static readonly T__304=305;
	public static readonly T__305=306;
	public static readonly T__306=307;
	public static readonly T__307=308;
	public static readonly T__308=309;
	public static readonly T__309=310;
	public static readonly T__310=311;
	public static readonly T__311=312;
	public static readonly T__312=313;
	public static readonly T__313=314;
	public static readonly T__314=315;
	public static readonly XX=316;
	public static readonly PUT=317;
	public static readonly PLUSMINUS=318;
	public static readonly NUMBER=319;
	public static readonly SACRIFICE=320;
	public static readonly DESTROY=321;
	public static readonly FLASH=322;
	public static readonly CREATURE=323;
	public static readonly EXILE=324;
	public static readonly MENTOR=325;
	public static readonly VIGILANCE=326;
	public static readonly TARGET=327;
	public static readonly LEGENDARY=328;
	public static readonly FLYING=329;
	public static readonly LIFELINK=330;
	public static readonly CREATE=331;
	public static readonly TAP=332;
	public static readonly YOU=333;
	public static readonly PAY=334;
	public static readonly SPACE=335;
	public static readonly ANOTHER=336;
	public static readonly ENCHANTED=337;
	public static readonly SURVEIL=338;
	public static readonly COUNTER=339;
	public static readonly JUMPSTART=340;
	public static readonly DEFENDER=341;
	public static readonly SHUFFLE=342;
	public static readonly HASTE=343;
	public static readonly TRAMPLE=344;
	public static readonly DRAW=345;
	public static readonly DEATHTOUCH=346;
	public static readonly RETURN=347;
	public static readonly EACH=348;
	public static readonly ALL=349;
	public static readonly MENACE=350;
	public static readonly FIRSTSTRIKE=351;
	public static readonly DOUBLESTRIKE=352;
	public static readonly REACH=353;
	public static readonly PREVENT=354;
	public static readonly ADD=355;
	public static readonly AS=356;
	public static readonly DISCARD=357;
	public static readonly INSTANT=358;
	public static readonly SORCERY=359;
	public static readonly LOOK=360;
	public static readonly REVEAL=361;
	public static readonly CAN=362;
	public static readonly SCRY=363;
	public static readonly COPY=364;
	public static readonly ATTACH=365;
	public static readonly ACTIVATE=366;
	public static readonly CAST=367;
	public static readonly DOUBLE=368;
	public static readonly EXCHANGE=369;
	public static readonly PLAY=370;
	public static readonly THEBATTLEFIELD=371;
	public static readonly FULLSTOP=372;
	public static readonly EQUIP=373;
	public static readonly HEXPROOF=374;
	public static readonly INDESTRUCTIBLE=375;
	public static readonly AT=376;
	public static readonly WHEN=377;
	public static readonly WHENEVER=378;
	public static readonly IF=379;
	public static readonly THE=380;
	public static readonly IT_S=381;
	public static readonly ITS=382;
	public static readonly THIS=383;
	public static readonly THAT=384;
	public static readonly PERMANENT=385;
	public static readonly SPELL=386;
	public static readonly CARD=387;
	public static readonly INDEFINITE_ARTICLE_A=388;
	public static readonly INDEFINITE_ARTICLE_AN=389;
	public static readonly FOR=390;
	public static readonly CANT=391;
	public static readonly CHOOSE=392;
	public static readonly THESE=393;
	public static readonly THOSE=394;
	public static readonly ACTIVATED=395;
	public static readonly IT=396;
	public static readonly SEARCH=397;
	public static readonly THEM=398;
	public static readonly DASHDASH=399;
	public static readonly REMINDER_TEXT=400;
	public static readonly DOESN_T=401;
	public static readonly DON_T=402;
	public static readonly AP=403;
	public static readonly SAXON=404;
	public static readonly UNTAP=405;
	public static readonly THEY=406;
	public static readonly SWITCH=407;
	public static readonly EQUIPPED=408;
	public static readonly THAT_S=409;
	public static readonly REMOVE=410;
	public static readonly GAINS=411;
	public static readonly GAIN=412;
	public static readonly LAND=413;
	public static readonly SPEND=414;
	public static readonly TAKE=415;
	public static readonly YOU_VE=416;
	public static readonly RULE_card = 0;
	public static readonly RULE_ability = 1;
	public static readonly RULE_modal = 2;
	public static readonly RULE_modalPrompt = 3;
	public static readonly RULE_chooseOneOption = 4;
	public static readonly RULE_keywords = 5;
	public static readonly RULE_keyword = 6;
	public static readonly RULE_abilityWordAbility = 7;
	public static readonly RULE_abilityWord = 8;
	public static readonly RULE_activated = 9;
	public static readonly RULE_activationInstructions = 10;
	public static readonly RULE_activationInstruction = 11;
	public static readonly RULE_activatedAbilities = 12;
	public static readonly RULE_activatedAbilitiesVP = 13;
	public static readonly RULE_triggered = 14;
	public static readonly RULE_triggerCondition = 15;
	public static readonly RULE_triggerConditionInner = 16;
	public static readonly RULE_interveningIfClause = 17;
	public static readonly RULE_additionalCostToCastSpell = 18;
	public static readonly RULE_weirdAbility = 19;
	public static readonly RULE_staticOrSpell = 20;
	public static readonly RULE_effect = 21;
	public static readonly RULE_sdot = 22;
	public static readonly RULE_additionalSentences = 23;
	public static readonly RULE_additionalSentence = 24;
	public static readonly RULE_s = 25;
	public static readonly RULE_ss = 26;
	public static readonly RULE_weirdSentence = 27;
	public static readonly RULE_foreachClause = 28;
	public static readonly RULE_condition = 29;
	public static readonly RULE_entity = 30;
	public static readonly RULE_anyEntity = 31;
	public static readonly RULE_player = 32;
	public static readonly RULE_purePlayer = 33;
	public static readonly RULE_object = 34;
	public static readonly RULE_suffix = 35;
	public static readonly RULE_pureObject = 36;
	public static readonly RULE_referencingObjectPrefix = 37;
	public static readonly RULE_cumulativeReferencingPrefix = 38;
	public static readonly RULE_commonReferencingPrefix = 39;
	public static readonly RULE_prefix = 40;
	public static readonly RULE_imperative = 41;
	public static readonly RULE_playerVerbPhrase = 42;
	public static readonly RULE_objectVerbPhrase = 43;
	public static readonly RULE_objectInfinitive = 44;
	public static readonly RULE_isWhat = 45;
	public static readonly RULE_becomesWhat = 46;
	public static readonly RULE_exceptClauseInCopyEffect = 47;
	public static readonly RULE_copyException = 48;
	public static readonly RULE_itsPossessive = 49;
	public static readonly RULE_acquiredAbility = 50;
	public static readonly RULE_gets = 51;
	public static readonly RULE_controls = 52;
	public static readonly RULE_owns = 53;
	public static readonly RULE_gains = 54;
	public static readonly RULE_duration = 55;
	public static readonly RULE_numericalCharacteristic = 56;
	public static readonly RULE_untilClause = 57;
	public static readonly RULE_untilClauseInner = 58;
	public static readonly RULE_damagePreventionAmount = 59;
	public static readonly RULE_damageNoun = 60;
	public static readonly RULE_createTokenDescription = 61;
	public static readonly RULE_color = 62;
	public static readonly RULE_pt = 63;
	public static readonly RULE_ptModification = 64;
	public static readonly RULE_numberDefinition = 65;
	public static readonly RULE_withClause = 66;
	public static readonly RULE_withClauseInner = 67;
	public static readonly RULE_counterKind = 68;
	public static readonly RULE_dealsWhat = 69;
	public static readonly RULE_damageRecipient = 70;
	public static readonly RULE_divideAmongDamageTargets = 71;
	public static readonly RULE_englishNumber = 72;
	public static readonly RULE_numericalNumber = 73;
	public static readonly RULE_numericalComparison = 74;
	public static readonly RULE_number = 75;
	public static readonly RULE_countableCount = 76;
	public static readonly RULE_cantClauseInner = 77;
	public static readonly RULE_zone = 78;
	public static readonly RULE_actualZone = 79;
	public static readonly RULE_intoZone = 80;
	public static readonly RULE_inZone = 81;
	public static readonly RULE_fromZone = 82;
	public static readonly RULE_n = 83;
	public static readonly RULE_permanentType = 84;
	public static readonly RULE_name = 85;
	public static readonly RULE_anyType = 86;
	public static readonly RULE_spellType = 87;
	public static readonly RULE_asLongAsClause = 88;
	public static readonly RULE_doSomethingInsteadOfSomethingElse = 89;
	public static readonly RULE_costs = 90;
	public static readonly RULE_cost = 91;
	public static readonly RULE_loyaltyCost = 92;
	public static readonly RULE_manacost = 93;
	public static readonly RULE_manaGroup = 94;
	public static readonly RULE_manaSymbols = 95;
	public static readonly RULE_manaSymbol = 96;
	public static readonly RULE_manaLetter = 97;
	public static readonly RULE_qualifiedPartOfTurn = 98;
	public static readonly RULE_turnQualification = 99;
	public static readonly RULE_partOfTurn = 100;
	public static readonly RULE_playersPossessive = 101;
	public static readonly RULE_reminderText = 102;
	public static readonly ruleNames: string[] = [
		"card", "ability", "modal", "modalPrompt", "chooseOneOption", "keywords", 
		"keyword", "abilityWordAbility", "abilityWord", "activated", "activationInstructions", 
		"activationInstruction", "activatedAbilities", "activatedAbilitiesVP", 
		"triggered", "triggerCondition", "triggerConditionInner", "interveningIfClause", 
		"additionalCostToCastSpell", "weirdAbility", "staticOrSpell", "effect", 
		"sdot", "additionalSentences", "additionalSentence", "s", "ss", "weirdSentence", 
		"foreachClause", "condition", "entity", "anyEntity", "player", "purePlayer", 
		"object", "suffix", "pureObject", "referencingObjectPrefix", "cumulativeReferencingPrefix", 
		"commonReferencingPrefix", "prefix", "imperative", "playerVerbPhrase", 
		"objectVerbPhrase", "objectInfinitive", "isWhat", "becomesWhat", "exceptClauseInCopyEffect", 
		"copyException", "itsPossessive", "acquiredAbility", "gets", "controls", 
		"owns", "gains", "duration", "numericalCharacteristic", "untilClause", 
		"untilClauseInner", "damagePreventionAmount", "damageNoun", "createTokenDescription", 
		"color", "pt", "ptModification", "numberDefinition", "withClause", "withClauseInner", 
		"counterKind", "dealsWhat", "damageRecipient", "divideAmongDamageTargets", 
		"englishNumber", "numericalNumber", "numericalComparison", "number", "countableCount", 
		"cantClauseInner", "zone", "actualZone", "intoZone", "inZone", "fromZone", 
		"n", "permanentType", "name", "anyType", "spellType", "asLongAsClause", 
		"doSomethingInsteadOfSomethingElse", "costs", "cost", "loyaltyCost", "manacost", 
		"manaGroup", "manaSymbols", "manaSymbol", "manaLetter", "qualifiedPartOfTurn", 
		"turnQualification", "partOfTurn", "playersPossessive", "reminderText"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'\n'", "'one or both'", "'one'", "'* '", "'• '", "','", "'Enchant'", 
		"'Convoke'", "'Battalion'", "'Bloodrush'", "'Channel'", "'Chroma'", "'Cohort'", 
		"'Constellation'", "'Converge'", "'Council's dilemma'", "'Delirium'", 
		"'Domain'", "'Eminence'", "'Enrage'", "'Fateful hour'", "'Ferocious'", 
		"'Formidable'", "'Grandeur'", "'Hellbent'", "'Heroic'", "'Imprint'", "'Inspired'", 
		"'Join forces'", "'Kinship'", "'Landfall'", "'Lieutenant'", "'Metalcraft'", 
		"'Morbid'", "'Parley'", "'Radiance'", "'Raid'", "'Rally'", "'Revolt'", 
		"'Spell mastery'", "'Strive'", "'Sweep'", "'Tempting offer'", "'Threshold'", 
		"'Undergrowth'", "'Will of the council'", "':'", "'this ability only'", 
		"'Any player may activate this ability.'", "'once each turn'", "'any time you could cast a sorcery'", 
		"'abilities'", "'can't be activated'", "'the beginning of'", "'end of combat'", 
		"'do'", "'life'", "'is dealt damage'", "'As an additional cost to cast this spell,'", 
		"'You may look at an additional '", "' cards each time you surveil.'", 
		"'You may look at the top card of your library any time.'", "'Then'", 
		"'and'", "'then'", "'Otherwise,'", "'where X is'", "'would'", "'instead'", 
		"'is'", "'equal'", "'to'", "'After'", "', there is an additional combat phase followed by an additional main phase'", 
		"'color of mana spent to cast'", "'surveilled'", "'your'", "'turn'", "'has'", 
		"'s'", "'on'", "'that mana is spent on'", "'opponent'", "'opponents'", 
		"'defending player'", "'controller'", "'owner'", "'owners'", "'controllers'", 
		"'who can't'", "'player'", "'players'", "'~'", "'the rest'", "'the other'", 
		"'this emblem'", "'or'", "'and/or'", "'of'", "'top'", "'card of'", "'control'", 
		"'controls'", "'own'", "'owns'", "'in'", "'from'", "'targets only'", "'tapped this way'", 
		"'exiled'", "'this way'", "'type'", "'choice'", "'could target'", "'able to block'", 
		"'convoked'", "'from among them'", "'named'", "'cast before it this turn'", 
		"'copies'", "'without'", "'sacrificed'", "'any of'", "'other'", "'Other'", 
		"'chosen'", "'least'", "'non'", "'non-'", "'token'", "'nontoken'", "'tapped'", 
		"'untapped'", "'attacking'", "'blocking'", "'face down'", "'without paying'", 
		"'mana cost'", "'into'", "'an extra turn after this one'", "'one mana of any color'", 
		"'mana of any one color'", "'that would be dealt'", "'at the top'", "'may'", 
		"'have'", "'unless'", "'new targets for'", "'the power and toughness of'", 
		"'do the same for'", "'mana as though it were mana of any type to cast'", 
		"'name'", "'for the first time each turn'", "'puts'", "'discards'", "'sacrifices'", 
		"'hand'", "'does'", "'loses'", "'lose'", "'the game'", "'an emblem'", 
		"'enters'", "'with'", "'additional'", "'a number of'", "'enter'", "'under'", 
		"'leave'", "'leaves'", "'ETBs'", "'die'", "'dies'", "'deals'", "'attacks'", 
		"'attack'", "'combat if able'", "'untap during'", "'blocks or becomes blocked by'", 
		"'is countered this way'", "'fights'", "'targets'", "'cost'", "'costs'", 
		"'less'", "'as though it didn't have defender'", "'do so'", "'does so'", 
		"'remain'", "'remains'", "'becomes'", "'all abilities'", "'are'", "'created'", 
		"'causes'", "'to discard'", "'be put'", "'be created under your control'", 
		"'fight'", "'deal'", "'in addition to its other types'", "'except'", "'their'", 
		"'\"'", "'“'", "'”'", "'this ability'", "'gets'", "'get'", "'this turn'", 
		"'Until'", "'toughness'", "'power'", "'converted mana cost'", "'until'", 
		"'end of turn'", "'damage'", "'noncombat'", "'combat'", "'blue'", "'red'", 
		"'green'", "'white'", "'black'", "'colorless'", "'monocolored'", "'multicolored'", 
		"'/'", "'total'", "'number of'", "'highest'", "'among'", "'converted mana costs'", 
		"'that name'", "'charge'", "'hit'", "'wish'", "'any'", "'itself'", "'divided as you choose among one, two, or three targets'", 
		"'two'", "'three'", "'four'", "'five'", "'six'", "'seven'", "'that many'", 
		"'that much'", "'greater'", "'less than or equal to'", "'greater than'", 
		"'exactly'", "'or more'", "'fewer than'", "'any number of'", "'one of'", 
		"'up to'", "'block'", "'attack or block'", "'attack or block alone'", 
		"'be blocked'", "'be countered'", "'be blocked by more than'", "'graveyard'", 
		"'library'", "'onto'", "'on top of'", "'on the bottom of'", "'in any order'", 
		"'in a random order'", "'ability'", "'artifact'", "'enchantment'", "'Gate'", 
		"'planeswalker'", "'basic'", "'Soldier'", "'Knight'", "'Elf'", "'Bird'", 
		"'Illusion'", "'Goblin'", "'Insect'", "'Angel'", "'Plains'", "'Forest'", 
		"'Mountain'", "'Swamp'", "'Island'", "'Vraska'", "'Ral'", "'Ral, Caller of Storms'", 
		"'Vraska, Regal Gorgon'", "'['", "']'", "'long'", "'instead of putting'", 
		"'T'", "'{T}'", "'{'", "'W'", "'U'", "'B'", "'R'", "'G'", "'}'", "'C'", 
		"'combat on your turn'", "'next'", "'untap step'", "'upkeep'", "'draw step'", 
		"'precombat main phase'", "'main phase'", "'end step'", "'X'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "' '", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'the battlefield'", "'.'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "XX", "PUT", "PLUSMINUS", "NUMBER", "SACRIFICE", "DESTROY", 
		"FLASH", "CREATURE", "EXILE", "MENTOR", "VIGILANCE", "TARGET", "LEGENDARY", 
		"FLYING", "LIFELINK", "CREATE", "TAP", "YOU", "PAY", "SPACE", "ANOTHER", 
		"ENCHANTED", "SURVEIL", "COUNTER", "JUMPSTART", "DEFENDER", "SHUFFLE", 
		"HASTE", "TRAMPLE", "DRAW", "DEATHTOUCH", "RETURN", "EACH", "ALL", "MENACE", 
		"FIRSTSTRIKE", "DOUBLESTRIKE", "REACH", "PREVENT", "ADD", "AS", "DISCARD", 
		"INSTANT", "SORCERY", "LOOK", "REVEAL", "CAN", "SCRY", "COPY", "ATTACH", 
		"ACTIVATE", "CAST", "DOUBLE", "EXCHANGE", "PLAY", "THEBATTLEFIELD", "FULLSTOP", 
		"EQUIP", "HEXPROOF", "INDESTRUCTIBLE", "AT", "WHEN", "WHENEVER", "IF", 
		"THE", "IT_S", "ITS", "THIS", "THAT", "PERMANENT", "SPELL", "CARD", "INDEFINITE_ARTICLE_A", 
		"INDEFINITE_ARTICLE_AN", "FOR", "CANT", "CHOOSE", "THESE", "THOSE", "ACTIVATED", 
		"IT", "SEARCH", "THEM", "DASHDASH", "REMINDER_TEXT", "DOESN_T", "DON_T", 
		"AP", "SAXON", "UNTAP", "THEY", "SWITCH", "EQUIPPED", "THAT_S", "REMOVE", 
		"GAINS", "GAIN", "LAND", "SPEND", "TAKE", "YOU_VE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mtgParser._LITERAL_NAMES, mtgParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return mtgParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "mtg.g4"; }

	@Override
	public get ruleNames(): string[] { return mtgParser.ruleNames; }

	@Override
	public get serializedATN(): string { return mtgParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mtgParser._ATN, this);
	}
	@RuleVersion(0)
	public card(): CardContext {
		let _localctx: CardContext = new CardContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mtgParser.RULE_card);
		let _la: number;
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__0:
			case mtgParser.T__2:
			case mtgParser.T__6:
			case mtgParser.T__7:
			case mtgParser.T__8:
			case mtgParser.T__9:
			case mtgParser.T__10:
			case mtgParser.T__11:
			case mtgParser.T__12:
			case mtgParser.T__13:
			case mtgParser.T__14:
			case mtgParser.T__15:
			case mtgParser.T__16:
			case mtgParser.T__17:
			case mtgParser.T__18:
			case mtgParser.T__19:
			case mtgParser.T__20:
			case mtgParser.T__21:
			case mtgParser.T__22:
			case mtgParser.T__23:
			case mtgParser.T__24:
			case mtgParser.T__25:
			case mtgParser.T__26:
			case mtgParser.T__27:
			case mtgParser.T__28:
			case mtgParser.T__29:
			case mtgParser.T__30:
			case mtgParser.T__31:
			case mtgParser.T__32:
			case mtgParser.T__33:
			case mtgParser.T__34:
			case mtgParser.T__35:
			case mtgParser.T__36:
			case mtgParser.T__37:
			case mtgParser.T__38:
			case mtgParser.T__39:
			case mtgParser.T__40:
			case mtgParser.T__41:
			case mtgParser.T__42:
			case mtgParser.T__43:
			case mtgParser.T__44:
			case mtgParser.T__45:
			case mtgParser.T__58:
			case mtgParser.T__59:
			case mtgParser.T__61:
			case mtgParser.T__62:
			case mtgParser.T__65:
			case mtgParser.T__72:
			case mtgParser.T__76:
			case mtgParser.T__84:
			case mtgParser.T__92:
			case mtgParser.T__93:
			case mtgParser.T__94:
			case mtgParser.T__95:
			case mtgParser.T__109:
			case mtgParser.T__119:
			case mtgParser.T__122:
			case mtgParser.T__123:
			case mtgParser.T__124:
			case mtgParser.T__127:
			case mtgParser.T__128:
			case mtgParser.T__129:
			case mtgParser.T__130:
			case mtgParser.T__131:
			case mtgParser.T__132:
			case mtgParser.T__133:
			case mtgParser.T__134:
			case mtgParser.T__144:
			case mtgParser.T__145:
			case mtgParser.T__149:
			case mtgParser.T__202:
			case mtgParser.T__209:
			case mtgParser.T__210:
			case mtgParser.T__219:
			case mtgParser.T__220:
			case mtgParser.T__221:
			case mtgParser.T__222:
			case mtgParser.T__223:
			case mtgParser.T__224:
			case mtgParser.T__225:
			case mtgParser.T__226:
			case mtgParser.T__240:
			case mtgParser.T__241:
			case mtgParser.T__242:
			case mtgParser.T__243:
			case mtgParser.T__244:
			case mtgParser.T__245:
			case mtgParser.T__246:
			case mtgParser.T__251:
			case mtgParser.T__253:
			case mtgParser.T__254:
			case mtgParser.T__255:
			case mtgParser.T__256:
			case mtgParser.T__270:
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.T__293:
			case mtgParser.T__297:
			case mtgParser.T__298:
			case mtgParser.T__299:
			case mtgParser.XX:
			case mtgParser.PUT:
			case mtgParser.PLUSMINUS:
			case mtgParser.NUMBER:
			case mtgParser.SACRIFICE:
			case mtgParser.DESTROY:
			case mtgParser.FLASH:
			case mtgParser.CREATURE:
			case mtgParser.EXILE:
			case mtgParser.MENTOR:
			case mtgParser.VIGILANCE:
			case mtgParser.TARGET:
			case mtgParser.LEGENDARY:
			case mtgParser.FLYING:
			case mtgParser.LIFELINK:
			case mtgParser.CREATE:
			case mtgParser.TAP:
			case mtgParser.YOU:
			case mtgParser.PAY:
			case mtgParser.SPACE:
			case mtgParser.ANOTHER:
			case mtgParser.ENCHANTED:
			case mtgParser.SURVEIL:
			case mtgParser.COUNTER:
			case mtgParser.JUMPSTART:
			case mtgParser.DEFENDER:
			case mtgParser.SHUFFLE:
			case mtgParser.HASTE:
			case mtgParser.TRAMPLE:
			case mtgParser.DRAW:
			case mtgParser.DEATHTOUCH:
			case mtgParser.RETURN:
			case mtgParser.EACH:
			case mtgParser.ALL:
			case mtgParser.MENACE:
			case mtgParser.FIRSTSTRIKE:
			case mtgParser.DOUBLESTRIKE:
			case mtgParser.REACH:
			case mtgParser.PREVENT:
			case mtgParser.ADD:
			case mtgParser.AS:
			case mtgParser.DISCARD:
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
			case mtgParser.LOOK:
			case mtgParser.REVEAL:
			case mtgParser.COPY:
			case mtgParser.CAST:
			case mtgParser.PLAY:
			case mtgParser.EQUIP:
			case mtgParser.HEXPROOF:
			case mtgParser.INDESTRUCTIBLE:
			case mtgParser.AT:
			case mtgParser.WHEN:
			case mtgParser.WHENEVER:
			case mtgParser.IF:
			case mtgParser.THE:
			case mtgParser.IT_S:
			case mtgParser.ITS:
			case mtgParser.THIS:
			case mtgParser.THAT:
			case mtgParser.PERMANENT:
			case mtgParser.SPELL:
			case mtgParser.CARD:
			case mtgParser.INDEFINITE_ARTICLE_A:
			case mtgParser.INDEFINITE_ARTICLE_AN:
			case mtgParser.FOR:
			case mtgParser.CHOOSE:
			case mtgParser.THESE:
			case mtgParser.THOSE:
			case mtgParser.ACTIVATED:
			case mtgParser.IT:
			case mtgParser.SEARCH:
			case mtgParser.THEM:
			case mtgParser.UNTAP:
			case mtgParser.THEY:
			case mtgParser.SWITCH:
			case mtgParser.EQUIPPED:
			case mtgParser.REMOVE:
			case mtgParser.GAINS:
			case mtgParser.GAIN:
			case mtgParser.LAND:
			case mtgParser.SPEND:
			case mtgParser.TAKE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__0) {
					{
					{
					this.state = 206;
					this.match(mtgParser.T__0);
					}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 212;
				this.ability();
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__0) {
					{
					{
					this.state = 214; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 213;
						this.match(mtgParser.T__0);
						}
						}
						this.state = 216; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ( _la===mtgParser.T__0 );
					this.state = 218;
					this.ability();
					}
					}
					this.state = 223;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mtgParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ability(): AbilityContext {
		let _localctx: AbilityContext = new AbilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mtgParser.RULE_ability);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
				this.keywords();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.activated();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.staticOrSpell();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.triggered();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 231;
				this.modal();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 232;
				this.abilityWordAbility();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 233;
				this.additionalCostToCastSpell();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 234;
				this.weirdAbility();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modal(): ModalContext {
		let _localctx: ModalContext = new ModalContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mtgParser.RULE_modal);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.modalPrompt();
			this.state = 238;
			this.match(mtgParser.T__0);
			this.state = 239;
			this.chooseOneOption();
			this.state = 244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 240;
					this.match(mtgParser.T__0);
					this.state = 241;
					this.chooseOneOption();
					}
					} 
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modalPrompt(): ModalPromptContext {
		let _localctx: ModalPromptContext = new ModalPromptContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mtgParser.RULE_modalPrompt);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.match(mtgParser.CHOOSE);
				this.state = 248;
				this.match(mtgParser.SPACE);
				this.state = 249;
				this.match(mtgParser.T__1);
				this.state = 250;
				this.match(mtgParser.SPACE);
				this.state = 251;
				this.match(mtgParser.DASHDASH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.match(mtgParser.CHOOSE);
				this.state = 253;
				this.match(mtgParser.SPACE);
				this.state = 254;
				this.match(mtgParser.T__2);
				this.state = 255;
				this.match(mtgParser.SPACE);
				this.state = 256;
				this.match(mtgParser.DASHDASH);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public chooseOneOption(): ChooseOneOptionContext {
		let _localctx: ChooseOneOptionContext = new ChooseOneOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mtgParser.RULE_chooseOneOption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__3 || _la===mtgParser.T__4) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 260;
			this.effect();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keywords(): KeywordsContext {
		let _localctx: KeywordsContext = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mtgParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.keyword();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===mtgParser.T__5) {
				{
				this.state = 263;
				this.match(mtgParser.T__5);
				this.state = 264;
				this.match(mtgParser.SPACE);
				this.state = 265;
				this.keywords();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mtgParser.RULE_keyword);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.MENTOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.match(mtgParser.MENTOR);
				}
				break;
			case mtgParser.VIGILANCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.match(mtgParser.VIGILANCE);
				}
				break;
			case mtgParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 270;
				this.match(mtgParser.T__6);
				this.state = 271;
				this.match(mtgParser.SPACE);
				this.state = 272;
				this.anyEntity();
				}
				break;
			case mtgParser.T__7:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 273;
				this.match(mtgParser.T__7);
				}
				break;
			case mtgParser.LIFELINK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 274;
				this.match(mtgParser.LIFELINK);
				}
				break;
			case mtgParser.FLYING:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 275;
				this.match(mtgParser.FLYING);
				}
				break;
			case mtgParser.FLASH:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 276;
				this.match(mtgParser.FLASH);
				}
				break;
			case mtgParser.JUMPSTART:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 277;
				this.match(mtgParser.JUMPSTART);
				}
				break;
			case mtgParser.DEFENDER:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 278;
				this.match(mtgParser.DEFENDER);
				}
				break;
			case mtgParser.HASTE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 279;
				this.match(mtgParser.HASTE);
				}
				break;
			case mtgParser.TRAMPLE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 280;
				this.match(mtgParser.TRAMPLE);
				}
				break;
			case mtgParser.DEATHTOUCH:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 281;
				this.match(mtgParser.DEATHTOUCH);
				}
				break;
			case mtgParser.MENACE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 282;
				this.match(mtgParser.MENACE);
				}
				break;
			case mtgParser.FIRSTSTRIKE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 283;
				this.match(mtgParser.FIRSTSTRIKE);
				}
				break;
			case mtgParser.REACH:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 284;
				this.match(mtgParser.REACH);
				}
				break;
			case mtgParser.DOUBLESTRIKE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 285;
				this.match(mtgParser.DOUBLESTRIKE);
				}
				break;
			case mtgParser.HEXPROOF:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 286;
				this.match(mtgParser.HEXPROOF);
				}
				break;
			case mtgParser.INDESTRUCTIBLE:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 287;
				this.match(mtgParser.INDESTRUCTIBLE);
				}
				break;
			case mtgParser.EQUIP:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 288;
				this.match(mtgParser.EQUIP);
				this.state = 289;
				this.match(mtgParser.SPACE);
				this.state = 290;
				this.manacost();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public abilityWordAbility(): AbilityWordAbilityContext {
		let _localctx: AbilityWordAbilityContext = new AbilityWordAbilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mtgParser.RULE_abilityWordAbility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.abilityWord();
			this.state = 294;
			this.match(mtgParser.SPACE);
			this.state = 295;
			this.match(mtgParser.DASHDASH);
			this.state = 296;
			this.match(mtgParser.SPACE);
			this.state = 297;
			this.ability();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public abilityWord(): AbilityWordContext {
		let _localctx: AbilityWordContext = new AbilityWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mtgParser.RULE_abilityWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mtgParser.T__8) | (1 << mtgParser.T__9) | (1 << mtgParser.T__10) | (1 << mtgParser.T__11) | (1 << mtgParser.T__12) | (1 << mtgParser.T__13) | (1 << mtgParser.T__14) | (1 << mtgParser.T__15) | (1 << mtgParser.T__16) | (1 << mtgParser.T__17) | (1 << mtgParser.T__18) | (1 << mtgParser.T__19) | (1 << mtgParser.T__20) | (1 << mtgParser.T__21) | (1 << mtgParser.T__22) | (1 << mtgParser.T__23) | (1 << mtgParser.T__24) | (1 << mtgParser.T__25) | (1 << mtgParser.T__26) | (1 << mtgParser.T__27) | (1 << mtgParser.T__28) | (1 << mtgParser.T__29) | (1 << mtgParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (mtgParser.T__31 - 32)) | (1 << (mtgParser.T__32 - 32)) | (1 << (mtgParser.T__33 - 32)) | (1 << (mtgParser.T__34 - 32)) | (1 << (mtgParser.T__35 - 32)) | (1 << (mtgParser.T__36 - 32)) | (1 << (mtgParser.T__37 - 32)) | (1 << (mtgParser.T__38 - 32)) | (1 << (mtgParser.T__39 - 32)) | (1 << (mtgParser.T__40 - 32)) | (1 << (mtgParser.T__41 - 32)) | (1 << (mtgParser.T__42 - 32)) | (1 << (mtgParser.T__43 - 32)) | (1 << (mtgParser.T__44 - 32)) | (1 << (mtgParser.T__45 - 32)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public activated(): ActivatedContext {
		let _localctx: ActivatedContext = new ActivatedContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mtgParser.RULE_activated);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.costs();
			this.state = 302;
			this.match(mtgParser.T__46);
			this.state = 303;
			this.match(mtgParser.SPACE);
			this.state = 304;
			this.effect();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===mtgParser.SPACE) {
				{
				this.state = 305;
				this.match(mtgParser.SPACE);
				this.state = 306;
				this.activationInstructions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public activationInstructions(): ActivationInstructionsContext {
		let _localctx: ActivationInstructionsContext = new ActivationInstructionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mtgParser.RULE_activationInstructions);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.ACTIVATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.match(mtgParser.ACTIVATE);
				this.state = 310;
				this.match(mtgParser.SPACE);
				this.state = 311;
				this.match(mtgParser.T__47);
				this.state = 312;
				this.match(mtgParser.SPACE);
				this.state = 313;
				this.activationInstruction();
				this.state = 314;
				this.match(mtgParser.FULLSTOP);
				}
				break;
			case mtgParser.T__48:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.match(mtgParser.T__48);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public activationInstruction(): ActivationInstructionContext {
		let _localctx: ActivationInstructionContext = new ActivationInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mtgParser.RULE_activationInstruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__49 || _la===mtgParser.T__50) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public activatedAbilities(): ActivatedAbilitiesContext {
		let _localctx: ActivatedAbilitiesContext = new ActivatedAbilitiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mtgParser.RULE_activatedAbilities);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===mtgParser.T__2 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (mtgParser.T__92 - 93)) | (1 << (mtgParser.T__93 - 93)) | (1 << (mtgParser.T__94 - 93)) | (1 << (mtgParser.T__95 - 93)) | (1 << (mtgParser.T__109 - 93)) | (1 << (mtgParser.T__119 - 93)) | (1 << (mtgParser.T__122 - 93)) | (1 << (mtgParser.T__123 - 93)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (mtgParser.T__124 - 125)) | (1 << (mtgParser.T__127 - 125)) | (1 << (mtgParser.T__128 - 125)) | (1 << (mtgParser.T__129 - 125)) | (1 << (mtgParser.T__130 - 125)) | (1 << (mtgParser.T__131 - 125)) | (1 << (mtgParser.T__132 - 125)) | (1 << (mtgParser.T__133 - 125)) | (1 << (mtgParser.T__134 - 125)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (mtgParser.T__202 - 203)) | (1 << (mtgParser.T__219 - 203)) | (1 << (mtgParser.T__220 - 203)) | (1 << (mtgParser.T__221 - 203)) | (1 << (mtgParser.T__222 - 203)) | (1 << (mtgParser.T__223 - 203)) | (1 << (mtgParser.T__224 - 203)) | (1 << (mtgParser.T__225 - 203)) | (1 << (mtgParser.T__226 - 203)))) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (mtgParser.T__240 - 241)) | (1 << (mtgParser.T__241 - 241)) | (1 << (mtgParser.T__242 - 241)) | (1 << (mtgParser.T__243 - 241)) | (1 << (mtgParser.T__244 - 241)) | (1 << (mtgParser.T__245 - 241)) | (1 << (mtgParser.T__246 - 241)) | (1 << (mtgParser.T__251 - 241)) | (1 << (mtgParser.T__253 - 241)) | (1 << (mtgParser.T__254 - 241)) | (1 << (mtgParser.T__255 - 241)) | (1 << (mtgParser.T__256 - 241)) | (1 << (mtgParser.T__270 - 241)) | (1 << (mtgParser.T__271 - 241)))) !== 0) || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & ((1 << (mtgParser.T__272 - 273)) | (1 << (mtgParser.T__273 - 273)) | (1 << (mtgParser.T__274 - 273)) | (1 << (mtgParser.T__275 - 273)) | (1 << (mtgParser.T__276 - 273)) | (1 << (mtgParser.T__277 - 273)) | (1 << (mtgParser.T__278 - 273)) | (1 << (mtgParser.T__279 - 273)) | (1 << (mtgParser.T__280 - 273)) | (1 << (mtgParser.T__281 - 273)) | (1 << (mtgParser.T__282 - 273)) | (1 << (mtgParser.T__283 - 273)) | (1 << (mtgParser.T__284 - 273)) | (1 << (mtgParser.T__285 - 273)) | (1 << (mtgParser.T__286 - 273)) | (1 << (mtgParser.T__287 - 273)) | (1 << (mtgParser.T__288 - 273)) | (1 << (mtgParser.T__289 - 273)) | (1 << (mtgParser.T__290 - 273)) | (1 << (mtgParser.T__293 - 273)))) !== 0) || ((((_la - 316)) & ~0x1F) === 0 && ((1 << (_la - 316)) & ((1 << (mtgParser.XX - 316)) | (1 << (mtgParser.NUMBER - 316)) | (1 << (mtgParser.CREATURE - 316)) | (1 << (mtgParser.TARGET - 316)) | (1 << (mtgParser.LEGENDARY - 316)) | (1 << (mtgParser.SPACE - 316)) | (1 << (mtgParser.ANOTHER - 316)) | (1 << (mtgParser.ENCHANTED - 316)))) !== 0) || ((((_la - 348)) & ~0x1F) === 0 && ((1 << (_la - 348)) & ((1 << (mtgParser.EACH - 348)) | (1 << (mtgParser.ALL - 348)) | (1 << (mtgParser.INSTANT - 348)) | (1 << (mtgParser.SORCERY - 348)) | (1 << (mtgParser.COPY - 348)) | (1 << (mtgParser.AT - 348)))) !== 0) || ((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & ((1 << (mtgParser.THE - 380)) | (1 << (mtgParser.ITS - 380)) | (1 << (mtgParser.THIS - 380)) | (1 << (mtgParser.THAT - 380)) | (1 << (mtgParser.PERMANENT - 380)) | (1 << (mtgParser.SPELL - 380)) | (1 << (mtgParser.CARD - 380)) | (1 << (mtgParser.INDEFINITE_ARTICLE_A - 380)) | (1 << (mtgParser.INDEFINITE_ARTICLE_AN - 380)) | (1 << (mtgParser.THESE - 380)) | (1 << (mtgParser.THOSE - 380)) | (1 << (mtgParser.IT - 380)) | (1 << (mtgParser.THEM - 380)) | (1 << (mtgParser.THEY - 380)) | (1 << (mtgParser.EQUIPPED - 380)))) !== 0) || _la===mtgParser.LAND) {
				{
				this.state = 321;
				this.itsPossessive();
				this.state = 322;
				this.match(mtgParser.SPACE);
				}
			}

			this.state = 326;
			this.match(mtgParser.ACTIVATED);
			this.state = 327;
			this.match(mtgParser.SPACE);
			this.state = 328;
			this.match(mtgParser.T__51);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public activatedAbilitiesVP(): ActivatedAbilitiesVPContext {
		let _localctx: ActivatedAbilitiesVPContext = new ActivatedAbilitiesVPContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mtgParser.RULE_activatedAbilitiesVP);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(mtgParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public triggered(): TriggeredContext {
		let _localctx: TriggeredContext = new TriggeredContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mtgParser.RULE_triggered);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.triggerCondition();
			this.state = 333;
			this.match(mtgParser.T__5);
			this.state = 334;
			this.match(mtgParser.SPACE);
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				{
				this.state = 335;
				this.interveningIfClause();
				}
				break;
			}
			this.state = 338;
			this.effect();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public triggerCondition(): TriggerConditionContext {
		let _localctx: TriggerConditionContext = new TriggerConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mtgParser.RULE_triggerCondition);
		let _la: number;
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.WHEN || _la===mtgParser.WHENEVER) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 341;
				this.match(mtgParser.SPACE);
				this.state = 342;
				this.triggerConditionInner();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(mtgParser.AT);
				this.state = 344;
				this.match(mtgParser.SPACE);
				this.state = 345;
				this.match(mtgParser.T__53);
				this.state = 346;
				this.match(mtgParser.SPACE);
				this.state = 347;
				this.qualifiedPartOfTurn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 348;
				this.match(mtgParser.AT);
				this.state = 349;
				this.match(mtgParser.SPACE);
				this.state = 350;
				this.match(mtgParser.T__54);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public triggerConditionInner(): TriggerConditionInnerContext {
		let _localctx: TriggerConditionInnerContext = new TriggerConditionInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mtgParser.RULE_triggerConditionInner);
		try {
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 353;
				this.ss(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 354;
				this.match(mtgParser.YOU);
				this.state = 355;
				this.match(mtgParser.SPACE);
				this.state = 356;
				this.match(mtgParser.CAST);
				this.state = 357;
				this.match(mtgParser.SPACE);
				this.state = 358;
				this.object(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 359;
				this.match(mtgParser.YOU);
				this.state = 360;
				this.match(mtgParser.SPACE);
				this.state = 361;
				this.match(mtgParser.T__55);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 362;
				this.player(0);
				this.state = 363;
				this.match(mtgParser.SPACE);
				this.state = 364;
				this.gains();
				this.state = 365;
				this.match(mtgParser.SPACE);
				this.state = 366;
				this.match(mtgParser.T__56);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 368;
				this.object(0);
				this.state = 369;
				this.match(mtgParser.SPACE);
				this.state = 370;
				this.match(mtgParser.T__57);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public interveningIfClause(): InterveningIfClauseContext {
		let _localctx: InterveningIfClauseContext = new InterveningIfClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mtgParser.RULE_interveningIfClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(mtgParser.IF);
			this.state = 375;
			this.match(mtgParser.SPACE);
			this.state = 376;
			this.condition();
			this.state = 377;
			this.match(mtgParser.T__5);
			this.state = 378;
			this.match(mtgParser.SPACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public additionalCostToCastSpell(): AdditionalCostToCastSpellContext {
		let _localctx: AdditionalCostToCastSpellContext = new AdditionalCostToCastSpellContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mtgParser.RULE_additionalCostToCastSpell);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(mtgParser.T__58);
			this.state = 381;
			this.match(mtgParser.SPACE);
			this.state = 382;
			this.imperative(0);
			this.state = 383;
			this.match(mtgParser.FULLSTOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public weirdAbility(): WeirdAbilityContext {
		let _localctx: WeirdAbilityContext = new WeirdAbilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mtgParser.RULE_weirdAbility);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__59:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.match(mtgParser.T__59);
				this.state = 386;
				this.englishNumber();
				this.state = 387;
				this.match(mtgParser.T__60);
				}
				break;
			case mtgParser.T__61:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.match(mtgParser.T__61);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public staticOrSpell(): StaticOrSpellContext {
		let _localctx: StaticOrSpellContext = new StaticOrSpellContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, mtgParser.RULE_staticOrSpell);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.s(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this.sdot();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public effect(): EffectContext {
		let _localctx: EffectContext = new EffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, mtgParser.RULE_effect);
		try {
			this.state = 398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.sdot();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.modal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sdot(): SdotContext {
		let _localctx: SdotContext = new SdotContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, mtgParser.RULE_sdot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.s(0);
			this.state = 401;
			this.match(mtgParser.FULLSTOP);
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
			case 1:
				{
				this.state = 402;
				this.match(mtgParser.SPACE);
				this.state = 403;
				this.additionalSentences(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public additionalSentences(): AdditionalSentencesContext;
	public additionalSentences(_p: number): AdditionalSentencesContext;
	@RuleVersion(0)
	public additionalSentences(_p?: number): AdditionalSentencesContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditionalSentencesContext = new AdditionalSentencesContext(this._ctx, _parentState);
		let _prevctx: AdditionalSentencesContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, mtgParser.RULE_additionalSentences, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 407;
			this.additionalSentence();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 414;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AdditionalSentencesContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_additionalSentences);
					this.state = 409;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 410;
					this.match(mtgParser.SPACE);
					this.state = 411;
					this.additionalSentence();
					}
					} 
				}
				this.state = 416;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public additionalSentence(): AdditionalSentenceContext {
		let _localctx: AdditionalSentenceContext = new AdditionalSentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, mtgParser.RULE_additionalSentence);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.s(0);
				this.state = 418;
				this.match(mtgParser.FULLSTOP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 420;
				this.triggered();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public s(): SContext;
	public s(_p: number): SContext;
	@RuleVersion(0)
	public s(_p?: number): SContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SContext = new SContext(this._ctx, _parentState);
		let _prevctx: SContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, mtgParser.RULE_s, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.ss(0);
				}
				break;

			case 2:
				{
				this.state = 425;
				this.match(mtgParser.T__62);
				this.state = 426;
				this.match(mtgParser.SPACE);
				this.state = 427;
				this.s(5);
				}
				break;

			case 3:
				{
				this.state = 428;
				this.ss(0);
				this.state = 438; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 429;
						this.match(mtgParser.T__5);
						this.state = 430;
						this.match(mtgParser.SPACE);
						this.state = 435;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
						case 1:
							{
							this.state = 432;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===mtgParser.T__63 || _la===mtgParser.T__64) {
								{
								this.state = 431;
								_la = this._input.LA(1);
								if ( !(_la===mtgParser.T__63 || _la===mtgParser.T__64) ) {
								this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
								}
							}

							this.state = 434;
							this.match(mtgParser.SPACE);
							}
							break;
						}
						this.state = 437;
						this.s(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 440; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 4:
				{
				this.state = 442;
				this.match(mtgParser.T__65);
				this.state = 443;
				this.match(mtgParser.SPACE);
				this.state = 444;
				this.s(2);
				}
				break;

			case 5:
				{
				this.state = 445;
				this.weirdSentence();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_s);
					this.state = 448;
					if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					this.state = 449;
					this.match(mtgParser.SPACE);
					this.state = 450;
					this.match(mtgParser.T__63);
					this.state = 451;
					this.match(mtgParser.SPACE);
					this.state = 452;
					this.s(5);
					}
					} 
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public ss(): SsContext;
	public ss(_p: number): SsContext;
	@RuleVersion(0)
	public ss(_p?: number): SsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SsContext = new SsContext(this._ctx, _parentState);
		let _prevctx: SsContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, mtgParser.RULE_ss, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				{
				this.state = 459;
				this.imperative(0);
				}
				break;

			case 2:
				{
				this.state = 460;
				this.object(0);
				this.state = 461;
				this.match(mtgParser.SPACE);
				this.state = 462;
				this.objectVerbPhrase(0);
				}
				break;

			case 3:
				{
				this.state = 464;
				this.match(mtgParser.IT_S);
				this.state = 465;
				this.match(mtgParser.SPACE);
				this.state = 466;
				this.isWhat();
				}
				break;

			case 4:
				{
				this.state = 467;
				this.player(0);
				this.state = 468;
				this.match(mtgParser.SPACE);
				this.state = 469;
				this.playerVerbPhrase(0);
				}
				break;

			case 5:
				{
				this.state = 471;
				this.match(mtgParser.IF);
				this.state = 472;
				this.match(mtgParser.SPACE);
				this.state = 473;
				this.s(0);
				this.state = 474;
				this.match(mtgParser.T__5);
				this.state = 475;
				this.match(mtgParser.SPACE);
				this.state = 476;
				this.doSomethingInsteadOfSomethingElse();
				}
				break;

			case 6:
				{
				this.state = 478;
				this.match(mtgParser.IF);
				this.state = 479;
				this.match(mtgParser.SPACE);
				this.state = 480;
				this.condition();
				this.state = 481;
				this.match(mtgParser.T__5);
				this.state = 482;
				this.match(mtgParser.SPACE);
				this.state = 483;
				this.s(0);
				}
				break;

			case 7:
				{
				this.state = 485;
				this.match(mtgParser.IF);
				this.state = 486;
				this.match(mtgParser.SPACE);
				this.state = 487;
				this.object(0);
				this.state = 488;
				this.match(mtgParser.SPACE);
				this.state = 489;
				this.match(mtgParser.T__67);
				this.state = 490;
				this.match(mtgParser.SPACE);
				this.state = 493;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mtgParser.T__69:
				case mtgParser.T__78:
				case mtgParser.T__145:
				case mtgParser.T__158:
				case mtgParser.T__159:
				case mtgParser.T__162:
				case mtgParser.T__166:
				case mtgParser.T__168:
				case mtgParser.T__169:
				case mtgParser.T__170:
				case mtgParser.T__171:
				case mtgParser.T__172:
				case mtgParser.T__173:
				case mtgParser.T__174:
				case mtgParser.T__175:
				case mtgParser.T__178:
				case mtgParser.T__179:
				case mtgParser.T__180:
				case mtgParser.T__181:
				case mtgParser.T__182:
				case mtgParser.T__183:
				case mtgParser.T__186:
				case mtgParser.T__187:
				case mtgParser.T__188:
				case mtgParser.T__189:
				case mtgParser.T__190:
				case mtgParser.T__192:
				case mtgParser.T__194:
				case mtgParser.T__207:
				case mtgParser.T__208:
				case mtgParser.CAN:
				case mtgParser.CANT:
				case mtgParser.DOESN_T:
				case mtgParser.GAINS:
				case mtgParser.GAIN:
					{
					this.state = 491;
					this.objectVerbPhrase(0);
					}
					break;
				case mtgParser.T__196:
				case mtgParser.T__197:
				case mtgParser.T__198:
				case mtgParser.T__199:
					{
					this.state = 492;
					this.objectInfinitive();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 495;
				this.match(mtgParser.T__5);
				this.state = 496;
				this.match(mtgParser.SPACE);
				this.state = 504;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mtgParser.T__2:
				case mtgParser.T__62:
				case mtgParser.T__65:
				case mtgParser.T__72:
				case mtgParser.T__76:
				case mtgParser.T__84:
				case mtgParser.T__92:
				case mtgParser.T__93:
				case mtgParser.T__94:
				case mtgParser.T__95:
				case mtgParser.T__109:
				case mtgParser.T__119:
				case mtgParser.T__122:
				case mtgParser.T__123:
				case mtgParser.T__124:
				case mtgParser.T__127:
				case mtgParser.T__128:
				case mtgParser.T__129:
				case mtgParser.T__130:
				case mtgParser.T__131:
				case mtgParser.T__132:
				case mtgParser.T__133:
				case mtgParser.T__134:
				case mtgParser.T__144:
				case mtgParser.T__145:
				case mtgParser.T__149:
				case mtgParser.T__202:
				case mtgParser.T__209:
				case mtgParser.T__210:
				case mtgParser.T__219:
				case mtgParser.T__220:
				case mtgParser.T__221:
				case mtgParser.T__222:
				case mtgParser.T__223:
				case mtgParser.T__224:
				case mtgParser.T__225:
				case mtgParser.T__226:
				case mtgParser.T__240:
				case mtgParser.T__241:
				case mtgParser.T__242:
				case mtgParser.T__243:
				case mtgParser.T__244:
				case mtgParser.T__245:
				case mtgParser.T__246:
				case mtgParser.T__251:
				case mtgParser.T__253:
				case mtgParser.T__254:
				case mtgParser.T__255:
				case mtgParser.T__256:
				case mtgParser.T__270:
				case mtgParser.T__271:
				case mtgParser.T__272:
				case mtgParser.T__273:
				case mtgParser.T__274:
				case mtgParser.T__275:
				case mtgParser.T__276:
				case mtgParser.T__277:
				case mtgParser.T__278:
				case mtgParser.T__279:
				case mtgParser.T__280:
				case mtgParser.T__281:
				case mtgParser.T__282:
				case mtgParser.T__283:
				case mtgParser.T__284:
				case mtgParser.T__285:
				case mtgParser.T__286:
				case mtgParser.T__287:
				case mtgParser.T__288:
				case mtgParser.T__289:
				case mtgParser.T__290:
				case mtgParser.T__293:
				case mtgParser.XX:
				case mtgParser.PUT:
				case mtgParser.NUMBER:
				case mtgParser.SACRIFICE:
				case mtgParser.DESTROY:
				case mtgParser.CREATURE:
				case mtgParser.EXILE:
				case mtgParser.TARGET:
				case mtgParser.LEGENDARY:
				case mtgParser.CREATE:
				case mtgParser.TAP:
				case mtgParser.YOU:
				case mtgParser.PAY:
				case mtgParser.SPACE:
				case mtgParser.ANOTHER:
				case mtgParser.ENCHANTED:
				case mtgParser.SURVEIL:
				case mtgParser.COUNTER:
				case mtgParser.SHUFFLE:
				case mtgParser.DRAW:
				case mtgParser.RETURN:
				case mtgParser.EACH:
				case mtgParser.ALL:
				case mtgParser.PREVENT:
				case mtgParser.ADD:
				case mtgParser.AS:
				case mtgParser.DISCARD:
				case mtgParser.INSTANT:
				case mtgParser.SORCERY:
				case mtgParser.LOOK:
				case mtgParser.REVEAL:
				case mtgParser.COPY:
				case mtgParser.CAST:
				case mtgParser.PLAY:
				case mtgParser.AT:
				case mtgParser.IF:
				case mtgParser.THE:
				case mtgParser.IT_S:
				case mtgParser.ITS:
				case mtgParser.THIS:
				case mtgParser.THAT:
				case mtgParser.PERMANENT:
				case mtgParser.SPELL:
				case mtgParser.CARD:
				case mtgParser.INDEFINITE_ARTICLE_A:
				case mtgParser.INDEFINITE_ARTICLE_AN:
				case mtgParser.FOR:
				case mtgParser.CHOOSE:
				case mtgParser.THESE:
				case mtgParser.THOSE:
				case mtgParser.ACTIVATED:
				case mtgParser.IT:
				case mtgParser.SEARCH:
				case mtgParser.THEM:
				case mtgParser.UNTAP:
				case mtgParser.THEY:
				case mtgParser.SWITCH:
				case mtgParser.EQUIPPED:
				case mtgParser.REMOVE:
				case mtgParser.GAINS:
				case mtgParser.GAIN:
				case mtgParser.LAND:
				case mtgParser.SPEND:
				case mtgParser.TAKE:
					{
					this.state = 497;
					this.s(0);
					this.state = 498;
					this.match(mtgParser.SPACE);
					this.state = 499;
					this.match(mtgParser.T__68);
					}
					break;
				case mtgParser.T__68:
					{
					this.state = 501;
					this.match(mtgParser.T__68);
					this.state = 502;
					this.match(mtgParser.SPACE);
					this.state = 503;
					this.s(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				{
				this.state = 506;
				this.match(mtgParser.IF);
				this.state = 507;
				this.match(mtgParser.SPACE);
				this.state = 508;
				this.player(0);
				this.state = 509;
				this.match(mtgParser.SPACE);
				this.state = 510;
				this.match(mtgParser.T__67);
				this.state = 511;
				this.match(mtgParser.SPACE);
				this.state = 512;
				this.playerVerbPhrase(0);
				this.state = 513;
				this.match(mtgParser.T__5);
				this.state = 514;
				this.match(mtgParser.SPACE);
				this.state = 522;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mtgParser.T__2:
				case mtgParser.T__62:
				case mtgParser.T__65:
				case mtgParser.T__72:
				case mtgParser.T__76:
				case mtgParser.T__84:
				case mtgParser.T__92:
				case mtgParser.T__93:
				case mtgParser.T__94:
				case mtgParser.T__95:
				case mtgParser.T__109:
				case mtgParser.T__119:
				case mtgParser.T__122:
				case mtgParser.T__123:
				case mtgParser.T__124:
				case mtgParser.T__127:
				case mtgParser.T__128:
				case mtgParser.T__129:
				case mtgParser.T__130:
				case mtgParser.T__131:
				case mtgParser.T__132:
				case mtgParser.T__133:
				case mtgParser.T__134:
				case mtgParser.T__144:
				case mtgParser.T__145:
				case mtgParser.T__149:
				case mtgParser.T__202:
				case mtgParser.T__209:
				case mtgParser.T__210:
				case mtgParser.T__219:
				case mtgParser.T__220:
				case mtgParser.T__221:
				case mtgParser.T__222:
				case mtgParser.T__223:
				case mtgParser.T__224:
				case mtgParser.T__225:
				case mtgParser.T__226:
				case mtgParser.T__240:
				case mtgParser.T__241:
				case mtgParser.T__242:
				case mtgParser.T__243:
				case mtgParser.T__244:
				case mtgParser.T__245:
				case mtgParser.T__246:
				case mtgParser.T__251:
				case mtgParser.T__253:
				case mtgParser.T__254:
				case mtgParser.T__255:
				case mtgParser.T__256:
				case mtgParser.T__270:
				case mtgParser.T__271:
				case mtgParser.T__272:
				case mtgParser.T__273:
				case mtgParser.T__274:
				case mtgParser.T__275:
				case mtgParser.T__276:
				case mtgParser.T__277:
				case mtgParser.T__278:
				case mtgParser.T__279:
				case mtgParser.T__280:
				case mtgParser.T__281:
				case mtgParser.T__282:
				case mtgParser.T__283:
				case mtgParser.T__284:
				case mtgParser.T__285:
				case mtgParser.T__286:
				case mtgParser.T__287:
				case mtgParser.T__288:
				case mtgParser.T__289:
				case mtgParser.T__290:
				case mtgParser.T__293:
				case mtgParser.XX:
				case mtgParser.PUT:
				case mtgParser.NUMBER:
				case mtgParser.SACRIFICE:
				case mtgParser.DESTROY:
				case mtgParser.CREATURE:
				case mtgParser.EXILE:
				case mtgParser.TARGET:
				case mtgParser.LEGENDARY:
				case mtgParser.CREATE:
				case mtgParser.TAP:
				case mtgParser.YOU:
				case mtgParser.PAY:
				case mtgParser.SPACE:
				case mtgParser.ANOTHER:
				case mtgParser.ENCHANTED:
				case mtgParser.SURVEIL:
				case mtgParser.COUNTER:
				case mtgParser.SHUFFLE:
				case mtgParser.DRAW:
				case mtgParser.RETURN:
				case mtgParser.EACH:
				case mtgParser.ALL:
				case mtgParser.PREVENT:
				case mtgParser.ADD:
				case mtgParser.AS:
				case mtgParser.DISCARD:
				case mtgParser.INSTANT:
				case mtgParser.SORCERY:
				case mtgParser.LOOK:
				case mtgParser.REVEAL:
				case mtgParser.COPY:
				case mtgParser.CAST:
				case mtgParser.PLAY:
				case mtgParser.AT:
				case mtgParser.IF:
				case mtgParser.THE:
				case mtgParser.IT_S:
				case mtgParser.ITS:
				case mtgParser.THIS:
				case mtgParser.THAT:
				case mtgParser.PERMANENT:
				case mtgParser.SPELL:
				case mtgParser.CARD:
				case mtgParser.INDEFINITE_ARTICLE_A:
				case mtgParser.INDEFINITE_ARTICLE_AN:
				case mtgParser.FOR:
				case mtgParser.CHOOSE:
				case mtgParser.THESE:
				case mtgParser.THOSE:
				case mtgParser.ACTIVATED:
				case mtgParser.IT:
				case mtgParser.SEARCH:
				case mtgParser.THEM:
				case mtgParser.UNTAP:
				case mtgParser.THEY:
				case mtgParser.SWITCH:
				case mtgParser.EQUIPPED:
				case mtgParser.REMOVE:
				case mtgParser.GAINS:
				case mtgParser.GAIN:
				case mtgParser.LAND:
				case mtgParser.SPEND:
				case mtgParser.TAKE:
					{
					this.state = 515;
					this.s(0);
					this.state = 516;
					this.match(mtgParser.SPACE);
					this.state = 517;
					this.match(mtgParser.T__68);
					}
					break;
				case mtgParser.T__68:
					{
					this.state = 519;
					this.match(mtgParser.T__68);
					this.state = 520;
					this.match(mtgParser.SPACE);
					this.state = 521;
					this.s(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				{
				this.state = 524;
				this.asLongAsClause();
				this.state = 525;
				this.match(mtgParser.T__5);
				this.state = 526;
				this.match(mtgParser.SPACE);
				this.state = 527;
				this.s(0);
				}
				break;

			case 10:
				{
				this.state = 529;
				this.duration();
				this.state = 530;
				this.match(mtgParser.T__5);
				this.state = 531;
				this.match(mtgParser.SPACE);
				this.state = 532;
				this.s(0);
				}
				break;

			case 11:
				{
				this.state = 534;
				this.match(mtgParser.FOR);
				this.state = 535;
				this.match(mtgParser.SPACE);
				this.state = 536;
				this.match(mtgParser.EACH);
				this.state = 537;
				this.match(mtgParser.SPACE);
				this.state = 538;
				this.object(0);
				this.state = 539;
				this.match(mtgParser.T__5);
				this.state = 540;
				this.match(mtgParser.SPACE);
				this.state = 541;
				this.s(0);
				}
				break;

			case 12:
				{
				this.state = 543;
				this.activatedAbilities();
				this.state = 544;
				this.match(mtgParser.SPACE);
				this.state = 545;
				this.activatedAbilitiesVP();
				}
				break;

			case 13:
				{
				this.state = 547;
				this.itsPossessive();
				this.state = 548;
				this.match(mtgParser.SPACE);
				this.state = 549;
				this.numericalCharacteristic();
				this.state = 550;
				this.match(mtgParser.SPACE);
				this.state = 551;
				this.match(mtgParser.T__69);
				this.state = 552;
				this.match(mtgParser.SPACE);
				this.state = 553;
				this.match(mtgParser.T__70);
				this.state = 554;
				this.match(mtgParser.SPACE);
				this.state = 555;
				this.match(mtgParser.T__71);
				this.state = 556;
				this.match(mtgParser.SPACE);
				this.state = 557;
				this.numberDefinition();
				}
				break;

			case 14:
				{
				this.state = 559;
				this.match(mtgParser.AS);
				this.state = 560;
				this.match(mtgParser.SPACE);
				this.state = 561;
				this.s(0);
				this.state = 562;
				this.match(mtgParser.T__5);
				this.state = 563;
				this.match(mtgParser.SPACE);
				this.state = 564;
				this.s(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 581;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,31,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 579;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
					case 1:
						{
						_localctx = new SsContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_ss);
						this.state = 568;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 569;
						this.match(mtgParser.SPACE);
						this.state = 570;
						this.match(mtgParser.T__63);
						this.state = 571;
						this.match(mtgParser.SPACE);
						this.state = 572;
						this.ss(16);
						}
						break;

					case 2:
						{
						_localctx = new SsContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_ss);
						this.state = 573;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 574;
						this.match(mtgParser.T__5);
						this.state = 575;
						this.match(mtgParser.SPACE);
						this.state = 576;
						this.match(mtgParser.T__66);
						this.state = 577;
						this.match(mtgParser.SPACE);
						this.state = 578;
						this.numberDefinition();
						}
						break;
					}
					} 
				}
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,31,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public weirdSentence(): WeirdSentenceContext {
		let _localctx: WeirdSentenceContext = new WeirdSentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, mtgParser.RULE_weirdSentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(mtgParser.T__72);
			this.state = 585;
			this.match(mtgParser.SPACE);
			this.state = 586;
			this.qualifiedPartOfTurn();
			this.state = 587;
			this.match(mtgParser.T__73);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public foreachClause(): ForeachClauseContext {
		let _localctx: ForeachClauseContext = new ForeachClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, mtgParser.RULE_foreachClause);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(mtgParser.FOR);
				this.state = 590;
				this.match(mtgParser.SPACE);
				this.state = 591;
				this.match(mtgParser.EACH);
				this.state = 592;
				this.match(mtgParser.SPACE);
				this.state = 593;
				this.pureObject(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.match(mtgParser.FOR);
				this.state = 595;
				this.match(mtgParser.SPACE);
				this.state = 596;
				this.match(mtgParser.EACH);
				this.state = 597;
				this.match(mtgParser.SPACE);
				this.state = 598;
				this.match(mtgParser.T__74);
				this.state = 599;
				this.match(mtgParser.SPACE);
				this.state = 600;
				this.object(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, mtgParser.RULE_condition);
		let _la: number;
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.s(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.match(mtgParser.YOU_VE);
				this.state = 605;
				this.match(mtgParser.SPACE);
				this.state = 606;
				this.match(mtgParser.CAST);
				this.state = 607;
				this.match(mtgParser.SPACE);
				this.state = 608;
				this.object(0);
				this.state = 609;
				this.match(mtgParser.SPACE);
				this.state = 610;
				this.duration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 612;
				this.match(mtgParser.YOU_VE);
				this.state = 613;
				this.match(mtgParser.SPACE);
				this.state = 614;
				this.match(mtgParser.T__75);
				this.state = 615;
				this.match(mtgParser.SPACE);
				this.state = 616;
				this.duration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 617;
				this.match(mtgParser.IT_S);
				this.state = 618;
				this.match(mtgParser.SPACE);
				this.state = 619;
				this.match(mtgParser.T__76);
				this.state = 620;
				this.match(mtgParser.SPACE);
				this.state = 621;
				this.match(mtgParser.T__77);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 622;
				this.object(0);
				this.state = 623;
				this.match(mtgParser.SPACE);
				this.state = 624;
				this.match(mtgParser.T__78);
				this.state = 625;
				this.match(mtgParser.SPACE);
				this.state = 626;
				this.countableCount();
				this.state = 627;
				this.match(mtgParser.SPACE);
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (mtgParser.T__234 - 235)) | (1 << (mtgParser.T__235 - 235)) | (1 << (mtgParser.T__236 - 235)))) !== 0) || _la===mtgParser.PLUSMINUS) {
					{
					this.state = 628;
					this.counterKind();
					this.state = 629;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 633;
				this.match(mtgParser.COUNTER);
				this.state = 634;
				this.match(mtgParser.T__79);
				this.state = 635;
				this.match(mtgParser.SPACE);
				this.state = 636;
				this.match(mtgParser.T__80);
				this.state = 637;
				this.match(mtgParser.SPACE);
				this.state = 638;
				this.match(mtgParser.IT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 640;
				this.numberDefinition();
				this.state = 641;
				this.match(mtgParser.SPACE);
				this.state = 642;
				this.match(mtgParser.T__69);
				this.state = 643;
				this.match(mtgParser.SPACE);
				this.state = 644;
				this.numericalComparison();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 646;
				this.match(mtgParser.T__81);
				this.state = 647;
				this.match(mtgParser.SPACE);
				this.state = 648;
				this.object(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, mtgParser.RULE_entity);
		try {
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 651;
				this.object(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 652;
				this.player(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public anyEntity(): AnyEntityContext {
		let _localctx: AnyEntityContext = new AnyEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, mtgParser.RULE_anyEntity);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 655;
				this.object(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 656;
				this.pureObject(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 657;
				this.player(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 658;
				this.purePlayer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public player(): PlayerContext;
	public player(_p: number): PlayerContext;
	@RuleVersion(0)
	public player(_p?: number): PlayerContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PlayerContext = new PlayerContext(this._ctx, _parentState);
		let _prevctx: PlayerContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, mtgParser.RULE_player, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
			case 1:
				{
				this.state = 662;
				this.match(mtgParser.YOU);
				}
				break;

			case 2:
				{
				this.state = 663;
				this.match(mtgParser.THEY);
				}
				break;

			case 3:
				{
				this.state = 664;
				this.commonReferencingPrefix();
				this.state = 665;
				this.match(mtgParser.SPACE);
				this.state = 666;
				this.purePlayer();
				}
				break;

			case 4:
				{
				this.state = 668;
				this.match(mtgParser.T__76);
				this.state = 669;
				this.match(mtgParser.SPACE);
				this.state = 670;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__82 || _la===mtgParser.T__83) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 5:
				{
				this.state = 671;
				this.match(mtgParser.T__84);
				}
				break;

			case 6:
				{
				this.state = 672;
				this.itsPossessive();
				this.state = 673;
				this.match(mtgParser.SPACE);
				this.state = 674;
				_la = this._input.LA(1);
				if ( !(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (mtgParser.T__85 - 86)) | (1 << (mtgParser.T__86 - 86)) | (1 << (mtgParser.T__87 - 86)) | (1 << (mtgParser.T__88 - 86)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 683;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,38,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new PlayerContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_player);
					this.state = 678;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 679;
					this.match(mtgParser.SPACE);
					this.state = 680;
					this.match(mtgParser.T__89);
					}
					} 
				}
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,38,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public purePlayer(): PurePlayerContext {
		let _localctx: PurePlayerContext = new PurePlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, mtgParser.RULE_purePlayer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			_la = this._input.LA(1);
			if ( !(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (mtgParser.T__82 - 83)) | (1 << (mtgParser.T__83 - 83)) | (1 << (mtgParser.T__90 - 83)) | (1 << (mtgParser.T__91 - 83)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public object(): ObjectContext;
	public object(_p: number): ObjectContext;
	@RuleVersion(0)
	public object(_p?: number): ObjectContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ObjectContext = new ObjectContext(this._ctx, _parentState);
		let _prevctx: ObjectContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, mtgParser.RULE_object, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				{
				this.state = 689;
				this.match(mtgParser.T__92);
				}
				break;

			case 2:
				{
				this.state = 690;
				this.match(mtgParser.IT);
				}
				break;

			case 3:
				{
				this.state = 691;
				this.match(mtgParser.THEY);
				}
				break;

			case 4:
				{
				this.state = 692;
				this.match(mtgParser.THEM);
				}
				break;

			case 5:
				{
				this.state = 693;
				this.match(mtgParser.T__2);
				}
				break;

			case 6:
				{
				this.state = 694;
				this.match(mtgParser.T__93);
				}
				break;

			case 7:
				{
				this.state = 695;
				this.match(mtgParser.T__94);
				}
				break;

			case 8:
				{
				this.state = 696;
				this.match(mtgParser.T__95);
				}
				break;

			case 9:
				{
				this.state = 697;
				this.referencingObjectPrefix();
				this.state = 698;
				this.match(mtgParser.SPACE);
				this.state = 699;
				this.pureObject(0);
				}
				break;

			case 10:
				{
				this.state = 701;
				this.referencingObjectPrefix();
				this.state = 702;
				this.match(mtgParser.SPACE);
				this.state = 703;
				this.object(12);
				}
				break;

			case 11:
				{
				this.state = 705;
				this.cumulativeReferencingPrefix();
				this.state = 706;
				this.pureObject(0);
				}
				break;

			case 12:
				{
				this.state = 708;
				this.pureObject(0);
				this.state = 709;
				this.match(mtgParser.SPACE);
				this.state = 710;
				this.suffix();
				}
				break;

			case 13:
				{
				this.state = 712;
				this.pureObject(0);
				}
				break;

			case 14:
				{
				this.state = 713;
				this.match(mtgParser.EACH);
				this.state = 714;
				this.match(mtgParser.SPACE);
				this.state = 715;
				this.match(mtgParser.T__98);
				this.state = 716;
				this.match(mtgParser.SPACE);
				this.state = 717;
				this.object(3);
				}
				break;

			case 15:
				{
				this.state = 718;
				this.match(mtgParser.THE);
				this.state = 719;
				this.match(mtgParser.SPACE);
				this.state = 720;
				this.match(mtgParser.T__99);
				this.state = 721;
				this.match(mtgParser.SPACE);
				this.state = 722;
				this.englishNumber();
				this.state = 723;
				this.match(mtgParser.SPACE);
				this.state = 724;
				this.match(mtgParser.CARD);
				this.state = 725;
				this.match(mtgParser.T__79);
				this.state = 726;
				this.match(mtgParser.SPACE);
				this.state = 727;
				this.match(mtgParser.T__98);
				this.state = 728;
				this.match(mtgParser.SPACE);
				this.state = 729;
				this.zone();
				}
				break;

			case 16:
				{
				this.state = 731;
				this.match(mtgParser.THE);
				this.state = 732;
				this.match(mtgParser.SPACE);
				this.state = 733;
				this.match(mtgParser.T__99);
				this.state = 734;
				this.match(mtgParser.SPACE);
				this.state = 735;
				this.match(mtgParser.T__100);
				this.state = 736;
				this.match(mtgParser.SPACE);
				this.state = 737;
				this.zone();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 777;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 775;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,41,this._ctx) ) {
					case 1:
						{
						_localctx = new ObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_object);
						this.state = 740;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 741;
						this.match(mtgParser.SPACE);
						this.state = 742;
						this.match(mtgParser.T__63);
						this.state = 743;
						this.match(mtgParser.SPACE);
						this.state = 744;
						this.object(11);
						}
						break;

					case 2:
						{
						_localctx = new ObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_object);
						this.state = 745;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 746;
						this.match(mtgParser.SPACE);
						this.state = 747;
						this.match(mtgParser.T__96);
						this.state = 748;
						this.match(mtgParser.SPACE);
						this.state = 749;
						this.object(10);
						}
						break;

					case 3:
						{
						_localctx = new ObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_object);
						this.state = 750;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 751;
						this.match(mtgParser.T__5);
						this.state = 752;
						this.match(mtgParser.SPACE);
						this.state = 757; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 753;
							this.object(0);
							this.state = 754;
							this.match(mtgParser.T__5);
							this.state = 755;
							this.match(mtgParser.SPACE);
							}
							}
							this.state = 759; 
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ( _la===mtgParser.T__2 || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (mtgParser.T__92 - 93)) | (1 << (mtgParser.T__93 - 93)) | (1 << (mtgParser.T__94 - 93)) | (1 << (mtgParser.T__95 - 93)) | (1 << (mtgParser.T__109 - 93)) | (1 << (mtgParser.T__119 - 93)) | (1 << (mtgParser.T__122 - 93)) | (1 << (mtgParser.T__123 - 93)))) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (mtgParser.T__124 - 125)) | (1 << (mtgParser.T__127 - 125)) | (1 << (mtgParser.T__128 - 125)) | (1 << (mtgParser.T__129 - 125)) | (1 << (mtgParser.T__130 - 125)) | (1 << (mtgParser.T__131 - 125)) | (1 << (mtgParser.T__132 - 125)) | (1 << (mtgParser.T__133 - 125)) | (1 << (mtgParser.T__134 - 125)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (mtgParser.T__219 - 220)) | (1 << (mtgParser.T__220 - 220)) | (1 << (mtgParser.T__221 - 220)) | (1 << (mtgParser.T__222 - 220)) | (1 << (mtgParser.T__223 - 220)) | (1 << (mtgParser.T__224 - 220)) | (1 << (mtgParser.T__225 - 220)) | (1 << (mtgParser.T__226 - 220)) | (1 << (mtgParser.T__240 - 220)) | (1 << (mtgParser.T__241 - 220)) | (1 << (mtgParser.T__242 - 220)) | (1 << (mtgParser.T__243 - 220)) | (1 << (mtgParser.T__244 - 220)) | (1 << (mtgParser.T__245 - 220)) | (1 << (mtgParser.T__246 - 220)))) !== 0) || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (mtgParser.T__251 - 252)) | (1 << (mtgParser.T__253 - 252)) | (1 << (mtgParser.T__254 - 252)) | (1 << (mtgParser.T__255 - 252)) | (1 << (mtgParser.T__256 - 252)) | (1 << (mtgParser.T__270 - 252)) | (1 << (mtgParser.T__271 - 252)) | (1 << (mtgParser.T__272 - 252)) | (1 << (mtgParser.T__273 - 252)) | (1 << (mtgParser.T__274 - 252)) | (1 << (mtgParser.T__275 - 252)) | (1 << (mtgParser.T__276 - 252)) | (1 << (mtgParser.T__277 - 252)) | (1 << (mtgParser.T__278 - 252)) | (1 << (mtgParser.T__279 - 252)) | (1 << (mtgParser.T__280 - 252)) | (1 << (mtgParser.T__281 - 252)) | (1 << (mtgParser.T__282 - 252)))) !== 0) || ((((_la - 284)) & ~0x1F) === 0 && ((1 << (_la - 284)) & ((1 << (mtgParser.T__283 - 284)) | (1 << (mtgParser.T__284 - 284)) | (1 << (mtgParser.T__285 - 284)) | (1 << (mtgParser.T__286 - 284)) | (1 << (mtgParser.T__287 - 284)) | (1 << (mtgParser.T__288 - 284)) | (1 << (mtgParser.T__289 - 284)) | (1 << (mtgParser.T__290 - 284)) | (1 << (mtgParser.T__293 - 284)))) !== 0) || ((((_la - 316)) & ~0x1F) === 0 && ((1 << (_la - 316)) & ((1 << (mtgParser.XX - 316)) | (1 << (mtgParser.NUMBER - 316)) | (1 << (mtgParser.CREATURE - 316)) | (1 << (mtgParser.TARGET - 316)) | (1 << (mtgParser.LEGENDARY - 316)) | (1 << (mtgParser.SPACE - 316)) | (1 << (mtgParser.ANOTHER - 316)) | (1 << (mtgParser.ENCHANTED - 316)))) !== 0) || ((((_la - 348)) & ~0x1F) === 0 && ((1 << (_la - 348)) & ((1 << (mtgParser.EACH - 348)) | (1 << (mtgParser.ALL - 348)) | (1 << (mtgParser.INSTANT - 348)) | (1 << (mtgParser.SORCERY - 348)) | (1 << (mtgParser.COPY - 348)) | (1 << (mtgParser.AT - 348)))) !== 0) || ((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & ((1 << (mtgParser.THE - 380)) | (1 << (mtgParser.THIS - 380)) | (1 << (mtgParser.THAT - 380)) | (1 << (mtgParser.PERMANENT - 380)) | (1 << (mtgParser.SPELL - 380)) | (1 << (mtgParser.CARD - 380)) | (1 << (mtgParser.INDEFINITE_ARTICLE_A - 380)) | (1 << (mtgParser.INDEFINITE_ARTICLE_AN - 380)) | (1 << (mtgParser.THESE - 380)) | (1 << (mtgParser.THOSE - 380)) | (1 << (mtgParser.IT - 380)) | (1 << (mtgParser.THEM - 380)) | (1 << (mtgParser.THEY - 380)) | (1 << (mtgParser.EQUIPPED - 380)))) !== 0) || _la===mtgParser.LAND );
						this.state = 761;
						this.match(mtgParser.T__96);
						this.state = 762;
						this.match(mtgParser.SPACE);
						this.state = 763;
						this.object(9);
						}
						break;

					case 4:
						{
						_localctx = new ObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_object);
						this.state = 765;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 766;
						this.match(mtgParser.SPACE);
						this.state = 767;
						this.match(mtgParser.T__97);
						this.state = 768;
						this.match(mtgParser.SPACE);
						this.state = 769;
						this.object(5);
						}
						break;

					case 5:
						{
						_localctx = new ObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_object);
						this.state = 770;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 771;
						this.match(mtgParser.SPACE);
						this.state = 772;
						this.match(mtgParser.THAT_S);
						this.state = 773;
						this.match(mtgParser.SPACE);
						this.state = 774;
						this.isWhat();
						}
						break;
					}
					} 
				}
				this.state = 779;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public suffix(): SuffixContext {
		let _localctx: SuffixContext = new SuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, mtgParser.RULE_suffix);
		let _la: number;
		try {
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
				this.player(0);
				this.state = 781;
				this.match(mtgParser.SPACE);
				this.state = 798;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
				case 1:
					{
					this.state = 782;
					this.match(mtgParser.T__101);
					}
					break;

				case 2:
					{
					this.state = 783;
					this.match(mtgParser.T__102);
					}
					break;

				case 3:
					{
					this.state = 784;
					this.match(mtgParser.DON_T);
					this.state = 785;
					this.match(mtgParser.SPACE);
					this.state = 786;
					this.match(mtgParser.T__101);
					}
					break;

				case 4:
					{
					this.state = 787;
					this.match(mtgParser.DOESN_T);
					this.state = 788;
					this.match(mtgParser.SPACE);
					this.state = 789;
					this.match(mtgParser.T__101);
					}
					break;

				case 5:
					{
					this.state = 790;
					this.match(mtgParser.T__103);
					}
					break;

				case 6:
					{
					this.state = 791;
					this.match(mtgParser.T__104);
					}
					break;

				case 7:
					{
					this.state = 792;
					this.match(mtgParser.DON_T);
					this.state = 793;
					this.match(mtgParser.SPACE);
					this.state = 794;
					this.match(mtgParser.T__103);
					}
					break;

				case 8:
					{
					this.state = 795;
					this.match(mtgParser.DOESN_T);
					this.state = 796;
					this.match(mtgParser.SPACE);
					this.state = 797;
					this.match(mtgParser.T__103);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 800;
				this.match(mtgParser.T__105);
				this.state = 801;
				this.match(mtgParser.SPACE);
				this.state = 802;
				this.zone();
				this.state = 809;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
				case 1:
					{
					this.state = 803;
					this.match(mtgParser.SPACE);
					this.state = 804;
					this.match(mtgParser.T__63);
					this.state = 805;
					this.match(mtgParser.SPACE);
					this.state = 806;
					this.match(mtgParser.T__105);
					this.state = 807;
					this.match(mtgParser.SPACE);
					this.state = 808;
					this.zone();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 811;
				this.match(mtgParser.T__106);
				this.state = 812;
				this.match(mtgParser.SPACE);
				this.state = 813;
				this.zone();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 814;
				this.match(mtgParser.YOU);
				this.state = 815;
				this.match(mtgParser.SPACE);
				this.state = 816;
				this.match(mtgParser.CAST);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 817;
				this.match(mtgParser.THAT);
				this.state = 818;
				this.match(mtgParser.SPACE);
				this.state = 819;
				this.match(mtgParser.T__107);
				this.state = 820;
				this.match(mtgParser.SPACE);
				this.state = 821;
				this.object(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 822;
				this.match(mtgParser.T__108);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 823;
				this.match(mtgParser.T__109);
				this.state = 824;
				this.match(mtgParser.SPACE);
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__106) {
					{
					this.state = 825;
					this.fromZone();
					this.state = 826;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 830;
				this.match(mtgParser.T__110);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 831;
				this.match(mtgParser.T__98);
				this.state = 832;
				this.match(mtgParser.SPACE);
				this.state = 833;
				this.match(mtgParser.THE);
				this.state = 834;
				this.match(mtgParser.SPACE);
				this.state = 835;
				this.anyType();
				this.state = 836;
				this.match(mtgParser.SPACE);
				this.state = 837;
				this.match(mtgParser.T__111);
				this.state = 838;
				this.match(mtgParser.SPACE);
				this.state = 839;
				this.match(mtgParser.T__98);
				this.state = 840;
				this.match(mtgParser.SPACE);
				this.state = 841;
				this.playersPossessive();
				this.state = 842;
				this.match(mtgParser.SPACE);
				this.state = 843;
				this.match(mtgParser.T__112);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 845;
				this.object(0);
				this.state = 846;
				this.match(mtgParser.SPACE);
				this.state = 847;
				this.match(mtgParser.T__113);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 849;
				this.match(mtgParser.T__114);
				this.state = 850;
				this.match(mtgParser.SPACE);
				this.state = 851;
				this.object(0);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 852;
				this.match(mtgParser.THAT);
				this.state = 853;
				this.match(mtgParser.SPACE);
				this.state = 854;
				this.match(mtgParser.T__115);
				this.state = 855;
				this.match(mtgParser.SPACE);
				this.state = 856;
				this.object(0);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 857;
				this.match(mtgParser.T__116);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 858;
				this.match(mtgParser.T__117);
				this.state = 859;
				this.match(mtgParser.SPACE);
				this.state = 860;
				this.name();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 861;
				this.match(mtgParser.YOU_VE);
				this.state = 862;
				this.match(mtgParser.SPACE);
				this.state = 863;
				this.match(mtgParser.T__118);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pureObject(): PureObjectContext;
	public pureObject(_p: number): PureObjectContext;
	@RuleVersion(0)
	public pureObject(_p?: number): PureObjectContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PureObjectContext = new PureObjectContext(this._ctx, _parentState);
		let _prevctx: PureObjectContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, mtgParser.RULE_pureObject, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
			case 1:
				{
				this.state = 868; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 867;
					this.prefix();
					}
					}
					this.state = 870; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (mtgParser.T__109 - 110)) | (1 << (mtgParser.T__127 - 110)) | (1 << (mtgParser.T__128 - 110)) | (1 << (mtgParser.T__129 - 110)) | (1 << (mtgParser.T__130 - 110)) | (1 << (mtgParser.T__131 - 110)) | (1 << (mtgParser.T__132 - 110)) | (1 << (mtgParser.T__133 - 110)) | (1 << (mtgParser.T__134 - 110)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (mtgParser.T__219 - 220)) | (1 << (mtgParser.T__220 - 220)) | (1 << (mtgParser.T__221 - 220)) | (1 << (mtgParser.T__222 - 220)) | (1 << (mtgParser.T__223 - 220)) | (1 << (mtgParser.T__224 - 220)) | (1 << (mtgParser.T__225 - 220)) | (1 << (mtgParser.T__226 - 220)))) !== 0) || ((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (mtgParser.T__271 - 272)) | (1 << (mtgParser.T__272 - 272)) | (1 << (mtgParser.T__273 - 272)) | (1 << (mtgParser.T__274 - 272)) | (1 << (mtgParser.T__275 - 272)) | (1 << (mtgParser.T__276 - 272)) | (1 << (mtgParser.T__277 - 272)) | (1 << (mtgParser.T__278 - 272)) | (1 << (mtgParser.T__279 - 272)) | (1 << (mtgParser.T__280 - 272)) | (1 << (mtgParser.T__281 - 272)) | (1 << (mtgParser.T__282 - 272)) | (1 << (mtgParser.T__283 - 272)) | (1 << (mtgParser.T__284 - 272)) | (1 << (mtgParser.T__285 - 272)) | (1 << (mtgParser.T__286 - 272)) | (1 << (mtgParser.T__287 - 272)) | (1 << (mtgParser.T__288 - 272)) | (1 << (mtgParser.T__289 - 272)) | (1 << (mtgParser.T__290 - 272)) | (1 << (mtgParser.T__293 - 272)))) !== 0) || ((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & ((1 << (mtgParser.NUMBER - 319)) | (1 << (mtgParser.CREATURE - 319)) | (1 << (mtgParser.LEGENDARY - 319)) | (1 << (mtgParser.ENCHANTED - 319)))) !== 0) || _la===mtgParser.INSTANT || _la===mtgParser.SORCERY || _la===mtgParser.LAND );
				this.state = 872;
				this.match(mtgParser.SPACE);
				this.state = 873;
				this.pureObject(11);
				}
				break;

			case 2:
				{
				this.state = 875;
				this.match(mtgParser.COPY);
				this.state = 880;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
				case 1:
					{
					this.state = 876;
					this.match(mtgParser.SPACE);
					this.state = 877;
					this.match(mtgParser.T__98);
					this.state = 878;
					this.match(mtgParser.SPACE);
					this.state = 879;
					this.object(0);
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 882;
				this.match(mtgParser.T__119);
				}
				break;

			case 4:
				{
				this.state = 883;
				this.cumulativeReferencingPrefix();
				this.state = 884;
				this.match(mtgParser.SPACE);
				this.state = 885;
				this.pureObject(8);
				}
				break;

			case 5:
				{
				this.state = 887;
				this.n(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 928;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,52,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 926;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
					case 1:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 890;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 891;
						this.match(mtgParser.SPACE);
						this.state = 892;
						this.match(mtgParser.T__96);
						this.state = 893;
						this.match(mtgParser.SPACE);
						this.state = 894;
						this.pureObject(8);
						}
						break;

					case 2:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 895;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 896;
						this.match(mtgParser.T__5);
						this.state = 897;
						this.match(mtgParser.SPACE);
						this.state = 902; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 898;
							this.pureObject(0);
							this.state = 899;
							this.match(mtgParser.T__5);
							this.state = 900;
							this.match(mtgParser.SPACE);
							}
							}
							this.state = 904; 
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ( ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (mtgParser.T__109 - 110)) | (1 << (mtgParser.T__119 - 110)) | (1 << (mtgParser.T__123 - 110)) | (1 << (mtgParser.T__124 - 110)) | (1 << (mtgParser.T__127 - 110)) | (1 << (mtgParser.T__128 - 110)) | (1 << (mtgParser.T__129 - 110)) | (1 << (mtgParser.T__130 - 110)) | (1 << (mtgParser.T__131 - 110)) | (1 << (mtgParser.T__132 - 110)) | (1 << (mtgParser.T__133 - 110)) | (1 << (mtgParser.T__134 - 110)))) !== 0) || ((((_la - 220)) & ~0x1F) === 0 && ((1 << (_la - 220)) & ((1 << (mtgParser.T__219 - 220)) | (1 << (mtgParser.T__220 - 220)) | (1 << (mtgParser.T__221 - 220)) | (1 << (mtgParser.T__222 - 220)) | (1 << (mtgParser.T__223 - 220)) | (1 << (mtgParser.T__224 - 220)) | (1 << (mtgParser.T__225 - 220)) | (1 << (mtgParser.T__226 - 220)))) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & ((1 << (mtgParser.T__270 - 271)) | (1 << (mtgParser.T__271 - 271)) | (1 << (mtgParser.T__272 - 271)) | (1 << (mtgParser.T__273 - 271)) | (1 << (mtgParser.T__274 - 271)) | (1 << (mtgParser.T__275 - 271)) | (1 << (mtgParser.T__276 - 271)) | (1 << (mtgParser.T__277 - 271)) | (1 << (mtgParser.T__278 - 271)) | (1 << (mtgParser.T__279 - 271)) | (1 << (mtgParser.T__280 - 271)) | (1 << (mtgParser.T__281 - 271)) | (1 << (mtgParser.T__282 - 271)) | (1 << (mtgParser.T__283 - 271)) | (1 << (mtgParser.T__284 - 271)) | (1 << (mtgParser.T__285 - 271)) | (1 << (mtgParser.T__286 - 271)) | (1 << (mtgParser.T__287 - 271)) | (1 << (mtgParser.T__288 - 271)) | (1 << (mtgParser.T__289 - 271)) | (1 << (mtgParser.T__290 - 271)) | (1 << (mtgParser.T__293 - 271)))) !== 0) || ((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & ((1 << (mtgParser.NUMBER - 319)) | (1 << (mtgParser.CREATURE - 319)) | (1 << (mtgParser.LEGENDARY - 319)) | (1 << (mtgParser.ENCHANTED - 319)))) !== 0) || ((((_la - 358)) & ~0x1F) === 0 && ((1 << (_la - 358)) & ((1 << (mtgParser.INSTANT - 358)) | (1 << (mtgParser.SORCERY - 358)) | (1 << (mtgParser.COPY - 358)) | (1 << (mtgParser.PERMANENT - 358)) | (1 << (mtgParser.SPELL - 358)) | (1 << (mtgParser.CARD - 358)))) !== 0) || _la===mtgParser.EQUIPPED || _la===mtgParser.LAND );
						this.state = 906;
						this.match(mtgParser.T__96);
						this.state = 907;
						this.match(mtgParser.SPACE);
						this.state = 908;
						this.pureObject(7);
						}
						break;

					case 3:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 910;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 911;
						this.match(mtgParser.SPACE);
						this.state = 912;
						this.match(mtgParser.T__97);
						this.state = 913;
						this.match(mtgParser.SPACE);
						this.state = 914;
						this.pureObject(2);
						}
						break;

					case 4:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 915;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 916;
						this.match(mtgParser.SPACE);
						this.state = 917;
						this.match(mtgParser.T__120);
						this.state = 918;
						this.match(mtgParser.SPACE);
						this.state = 919;
						this.keyword();
						}
						break;

					case 5:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 920;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 921;
						this.match(mtgParser.SPACE);
						this.state = 922;
						this.withClause();
						}
						break;

					case 6:
						{
						_localctx = new PureObjectContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_pureObject);
						this.state = 923;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 924;
						this.match(mtgParser.SPACE);
						this.state = 925;
						this.suffix();
						}
						break;
					}
					} 
				}
				this.state = 930;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,52,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public referencingObjectPrefix(): ReferencingObjectPrefixContext {
		let _localctx: ReferencingObjectPrefixContext = new ReferencingObjectPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, mtgParser.RULE_referencingObjectPrefix);
		try {
			this.state = 941;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 931;
				this.match(mtgParser.THE);
				this.state = 932;
				this.match(mtgParser.SPACE);
				this.state = 933;
				this.match(mtgParser.T__121);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 934;
				this.match(mtgParser.THE);
				this.state = 935;
				this.match(mtgParser.SPACE);
				this.state = 936;
				this.match(mtgParser.T__109);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 937;
				this.match(mtgParser.T__122);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 938;
				this.match(mtgParser.THE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 939;
				this.commonReferencingPrefix();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 940;
				this.countableCount();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cumulativeReferencingPrefix(): CumulativeReferencingPrefixContext {
		let _localctx: CumulativeReferencingPrefixContext = new CumulativeReferencingPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, mtgParser.RULE_cumulativeReferencingPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__123 || _la===mtgParser.T__124 || _la===mtgParser.EQUIPPED) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public commonReferencingPrefix(): CommonReferencingPrefixContext {
		let _localctx: CommonReferencingPrefixContext = new CommonReferencingPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, mtgParser.RULE_commonReferencingPrefix);
		let _la: number;
		try {
			this.state = 983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 946;
				this.match(mtgParser.EACH);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 947;
				this.match(mtgParser.ALL);
				this.state = 950;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
				case 1:
					{
					this.state = 948;
					this.match(mtgParser.SPACE);
					this.state = 949;
					this.match(mtgParser.THE);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 952;
				this.match(mtgParser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 953;
				this.match(mtgParser.ENCHANTED);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 954;
				this.match(mtgParser.THAT);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 955;
				this.match(mtgParser.THESE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 956;
				this.match(mtgParser.THOSE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 957;
				this.match(mtgParser.ANOTHER);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 958;
				this.match(mtgParser.INDEFINITE_ARTICLE_AN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 959;
				this.match(mtgParser.INDEFINITE_ARTICLE_A);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 960;
				this.match(mtgParser.THE);
				this.state = 961;
				this.match(mtgParser.SPACE);
				this.state = 962;
				this.match(mtgParser.T__125);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 963;
				this.match(mtgParser.AT);
				this.state = 964;
				this.match(mtgParser.SPACE);
				this.state = 965;
				this.match(mtgParser.T__126);
				this.state = 966;
				this.match(mtgParser.SPACE);
				this.state = 967;
				this.englishNumber();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 968;
				this.countableCount();
				this.state = 971;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
				case 1:
					{
					this.state = 969;
					this.match(mtgParser.SPACE);
					this.state = 970;
					this.commonReferencingPrefix();
					}
					break;
				}
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.ANOTHER) {
					{
					this.state = 973;
					this.match(mtgParser.ANOTHER);
					this.state = 974;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__2 || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (mtgParser.T__240 - 241)) | (1 << (mtgParser.T__241 - 241)) | (1 << (mtgParser.T__242 - 241)) | (1 << (mtgParser.T__243 - 241)) | (1 << (mtgParser.T__244 - 241)) | (1 << (mtgParser.T__245 - 241)) | (1 << (mtgParser.T__246 - 241)) | (1 << (mtgParser.T__251 - 241)) | (1 << (mtgParser.T__253 - 241)) | (1 << (mtgParser.T__254 - 241)) | (1 << (mtgParser.T__255 - 241)) | (1 << (mtgParser.T__256 - 241)))) !== 0) || _la===mtgParser.XX || _la===mtgParser.INDEFINITE_ARTICLE_A || _la===mtgParser.INDEFINITE_ARTICLE_AN) {
					{
					this.state = 977;
					this.countableCount();
					this.state = 978;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 982;
				this.match(mtgParser.TARGET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefix(): PrefixContext {
		let _localctx: PrefixContext = new PrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, mtgParser.RULE_prefix);
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 985;
				this.match(mtgParser.ENCHANTED);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 986;
				this.match(mtgParser.T__127);
				this.state = 987;
				this.anyType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 988;
				this.match(mtgParser.T__128);
				this.state = 989;
				this.anyType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 990;
				this.match(mtgParser.T__109);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 991;
				this.anyType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 992;
				this.match(mtgParser.T__129);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 993;
				this.match(mtgParser.T__130);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 994;
				this.color(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 995;
				this.match(mtgParser.T__131);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 996;
				this.match(mtgParser.T__132);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 997;
				this.pt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 998;
				this.match(mtgParser.LEGENDARY);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 999;
				this.match(mtgParser.T__133);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1000;
				this.match(mtgParser.T__134);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1001;
				this.match(mtgParser.T__133);
				this.state = 1002;
				this.match(mtgParser.SPACE);
				this.state = 1003;
				this.match(mtgParser.T__96);
				this.state = 1004;
				this.match(mtgParser.SPACE);
				this.state = 1005;
				this.match(mtgParser.T__134);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public imperative(): ImperativeContext;
	public imperative(_p: number): ImperativeContext;
	@RuleVersion(0)
	public imperative(_p?: number): ImperativeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ImperativeContext = new ImperativeContext(this._ctx, _parentState);
		let _prevctx: ImperativeContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, mtgParser.RULE_imperative, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
			case 1:
				{
				this.state = 1009;
				this.match(mtgParser.SACRIFICE);
				this.state = 1010;
				this.match(mtgParser.SPACE);
				this.state = 1011;
				this.object(0);
				}
				break;

			case 2:
				{
				this.state = 1012;
				this.match(mtgParser.DESTROY);
				this.state = 1013;
				this.match(mtgParser.SPACE);
				this.state = 1014;
				this.object(0);
				}
				break;

			case 3:
				{
				this.state = 1015;
				this.match(mtgParser.DISCARD);
				this.state = 1016;
				this.match(mtgParser.SPACE);
				this.state = 1017;
				this.object(0);
				}
				break;

			case 4:
				{
				this.state = 1018;
				this.match(mtgParser.RETURN);
				this.state = 1019;
				this.match(mtgParser.SPACE);
				this.state = 1020;
				this.object(0);
				this.state = 1023;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
				case 1:
					{
					this.state = 1021;
					this.match(mtgParser.SPACE);
					this.state = 1022;
					this.fromZone();
					}
					break;
				}
				this.state = 1025;
				this.match(mtgParser.SPACE);
				this.state = 1026;
				this.match(mtgParser.T__71);
				this.state = 1027;
				this.match(mtgParser.SPACE);
				this.state = 1028;
				this.zone();
				}
				break;

			case 5:
				{
				this.state = 1030;
				this.match(mtgParser.EXILE);
				this.state = 1031;
				this.match(mtgParser.SPACE);
				this.state = 1032;
				this.object(0);
				this.state = 1035;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
				case 1:
					{
					this.state = 1033;
					this.match(mtgParser.SPACE);
					this.state = 1034;
					this.match(mtgParser.T__135);
					}
					break;
				}
				this.state = 1039;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
				case 1:
					{
					this.state = 1037;
					this.match(mtgParser.SPACE);
					this.state = 1038;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 6:
				{
				this.state = 1041;
				this.match(mtgParser.CREATE);
				this.state = 1042;
				this.match(mtgParser.SPACE);
				this.state = 1043;
				this.createTokenDescription();
				}
				break;

			case 7:
				{
				this.state = 1044;
				this.match(mtgParser.CREATE);
				this.state = 1045;
				this.match(mtgParser.SPACE);
				this.state = 1046;
				this.match(mtgParser.INDEFINITE_ARTICLE_A);
				this.state = 1047;
				this.match(mtgParser.SPACE);
				this.state = 1048;
				this.match(mtgParser.T__129);
				this.state = 1049;
				this.match(mtgParser.SPACE);
				this.state = 1050;
				this.match(mtgParser.THAT_S);
				this.state = 1051;
				this.match(mtgParser.SPACE);
				this.state = 1052;
				this.object(0);
				}
				break;

			case 8:
				{
				this.state = 1053;
				this.match(mtgParser.COPY);
				this.state = 1054;
				this.match(mtgParser.SPACE);
				this.state = 1055;
				this.object(0);
				}
				break;

			case 9:
				{
				this.state = 1056;
				this.match(mtgParser.REMOVE);
				this.state = 1057;
				this.match(mtgParser.SPACE);
				this.state = 1058;
				this.countableCount();
				this.state = 1059;
				this.match(mtgParser.SPACE);
				this.state = 1060;
				this.counterKind();
				this.state = 1061;
				this.match(mtgParser.SPACE);
				this.state = 1062;
				this.match(mtgParser.COUNTER);
				this.state = 1063;
				this.match(mtgParser.T__79);
				this.state = 1064;
				this.match(mtgParser.SPACE);
				this.state = 1065;
				this.match(mtgParser.T__106);
				this.state = 1066;
				this.match(mtgParser.SPACE);
				this.state = 1067;
				this.object(0);
				}
				break;

			case 10:
				{
				this.state = 1069;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.CAST || _la===mtgParser.PLAY) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__79) {
					{
					this.state = 1070;
					this.match(mtgParser.T__79);
					}
				}

				this.state = 1073;
				this.match(mtgParser.SPACE);
				this.state = 1074;
				this.object(0);
				this.state = 1081;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
				case 1:
					{
					this.state = 1075;
					this.match(mtgParser.SPACE);
					this.state = 1076;
					this.match(mtgParser.T__136);
					this.state = 1077;
					this.match(mtgParser.SPACE);
					this.state = 1078;
					this.match(mtgParser.ITS);
					this.state = 1079;
					this.match(mtgParser.SPACE);
					this.state = 1080;
					this.match(mtgParser.T__137);
					}
					break;
				}
				this.state = 1085;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
				case 1:
					{
					this.state = 1083;
					this.match(mtgParser.SPACE);
					this.state = 1084;
					this.duration();
					}
					break;
				}
				}
				break;

			case 11:
				{
				this.state = 1087;
				this.match(mtgParser.SURVEIL);
				this.state = 1088;
				this.match(mtgParser.SPACE);
				this.state = 1089;
				this.match(mtgParser.NUMBER);
				}
				break;

			case 12:
				{
				this.state = 1090;
				this.match(mtgParser.SEARCH);
				this.state = 1091;
				this.match(mtgParser.SPACE);
				this.state = 1092;
				this.zone();
				this.state = 1097;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,66,this._ctx) ) {
				case 1:
					{
					this.state = 1093;
					this.match(mtgParser.SPACE);
					this.state = 1094;
					this.match(mtgParser.FOR);
					this.state = 1095;
					this.match(mtgParser.SPACE);
					this.state = 1096;
					this.object(0);
					}
					break;
				}
				}
				break;

			case 13:
				{
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.YOU) {
					{
					this.state = 1099;
					this.match(mtgParser.YOU);
					this.state = 1100;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1103;
				this.match(mtgParser.CHOOSE);
				this.state = 1104;
				this.match(mtgParser.SPACE);
				this.state = 1105;
				this.object(0);
				}
				break;

			case 14:
				{
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.YOU) {
					{
					this.state = 1106;
					this.match(mtgParser.YOU);
					this.state = 1107;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1113;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,69,this._ctx) ) {
				case 1:
					{
					this.state = 1110;
					this.match(mtgParser.DRAW);
					}
					break;

				case 2:
					{
					this.state = 1111;
					this.match(mtgParser.DRAW);
					this.state = 1112;
					this.match(mtgParser.T__79);
					}
					break;
				}
				this.state = 1115;
				this.match(mtgParser.SPACE);
				this.state = 1124;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
				case 1:
					{
					this.state = 1116;
					this.match(mtgParser.INDEFINITE_ARTICLE_A);
					this.state = 1117;
					this.match(mtgParser.SPACE);
					this.state = 1118;
					this.match(mtgParser.CARD);
					}
					break;

				case 2:
					{
					this.state = 1119;
					this.englishNumber();
					this.state = 1120;
					this.match(mtgParser.SPACE);
					this.state = 1121;
					this.match(mtgParser.CARD);
					this.state = 1122;
					this.match(mtgParser.T__79);
					}
					break;
				}
				}
				break;

			case 15:
				{
				this.state = 1126;
				this.match(mtgParser.SHUFFLE);
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__79) {
					{
					this.state = 1127;
					this.match(mtgParser.T__79);
					}
				}

				this.state = 1130;
				this.match(mtgParser.SPACE);
				this.state = 1131;
				this.zone();
				}
				break;

			case 16:
				{
				this.state = 1132;
				this.match(mtgParser.SHUFFLE);
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__79) {
					{
					this.state = 1133;
					this.match(mtgParser.T__79);
					}
				}

				this.state = 1136;
				this.match(mtgParser.SPACE);
				this.state = 1139;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
				case 1:
					{
					this.state = 1137;
					this.object(0);
					}
					break;

				case 2:
					{
					this.state = 1138;
					this.zone();
					}
					break;
				}
				this.state = 1141;
				this.match(mtgParser.SPACE);
				this.state = 1142;
				this.match(mtgParser.T__138);
				this.state = 1143;
				this.match(mtgParser.SPACE);
				this.state = 1144;
				this.zone();
				}
				break;

			case 17:
				{
				this.state = 1146;
				this.match(mtgParser.COUNTER);
				this.state = 1147;
				this.match(mtgParser.SPACE);
				this.state = 1148;
				this.object(0);
				}
				break;

			case 18:
				{
				this.state = 1149;
				this.match(mtgParser.TAP);
				this.state = 1150;
				this.match(mtgParser.SPACE);
				this.state = 1151;
				this.object(0);
				}
				break;

			case 19:
				{
				this.state = 1152;
				this.match(mtgParser.TAKE);
				this.state = 1153;
				this.match(mtgParser.SPACE);
				this.state = 1154;
				this.match(mtgParser.T__139);
				}
				break;

			case 20:
				{
				this.state = 1155;
				this.match(mtgParser.UNTAP);
				this.state = 1156;
				this.match(mtgParser.SPACE);
				this.state = 1157;
				this.object(0);
				}
				break;

			case 21:
				{
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.YOU) {
					{
					this.state = 1158;
					this.match(mtgParser.YOU);
					this.state = 1159;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1162;
				this.match(mtgParser.PAY);
				this.state = 1163;
				this.match(mtgParser.SPACE);
				this.state = 1164;
				this.manacost();
				}
				break;

			case 22:
				{
				this.state = 1165;
				this.match(mtgParser.PAY);
				this.state = 1166;
				this.match(mtgParser.SPACE);
				this.state = 1167;
				this.numericalNumber();
				this.state = 1168;
				this.match(mtgParser.SPACE);
				this.state = 1169;
				this.match(mtgParser.T__56);
				}
				break;

			case 23:
				{
				this.state = 1171;
				this.match(mtgParser.ADD);
				this.state = 1172;
				this.match(mtgParser.SPACE);
				this.state = 1173;
				this.match(mtgParser.T__140);
				}
				break;

			case 24:
				{
				this.state = 1174;
				this.match(mtgParser.ADD);
				this.state = 1175;
				this.match(mtgParser.SPACE);
				this.state = 1176;
				this.englishNumber();
				this.state = 1177;
				this.match(mtgParser.SPACE);
				this.state = 1178;
				this.match(mtgParser.T__141);
				}
				break;

			case 25:
				{
				this.state = 1180;
				this.match(mtgParser.ADD);
				this.state = 1181;
				this.match(mtgParser.SPACE);
				this.state = 1182;
				this.manaSymbols();
				this.state = 1187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,75,this._ctx) ) {
				case 1:
					{
					this.state = 1183;
					this.match(mtgParser.SPACE);
					this.state = 1184;
					this.match(mtgParser.T__96);
					this.state = 1185;
					this.match(mtgParser.SPACE);
					this.state = 1186;
					this.manaSymbols();
					}
					break;
				}
				}
				break;

			case 26:
				{
				this.state = 1189;
				this.match(mtgParser.PREVENT);
				this.state = 1190;
				this.match(mtgParser.SPACE);
				this.state = 1191;
				this.damagePreventionAmount();
				this.state = 1192;
				this.match(mtgParser.SPACE);
				this.state = 1193;
				this.damageNoun();
				this.state = 1194;
				this.match(mtgParser.SPACE);
				this.state = 1195;
				this.match(mtgParser.T__142);
				this.state = 1200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
				case 1:
					{
					this.state = 1196;
					this.match(mtgParser.SPACE);
					this.state = 1197;
					this.match(mtgParser.T__71);
					this.state = 1198;
					this.match(mtgParser.SPACE);
					this.state = 1199;
					this.object(0);
					}
					break;
				}
				this.state = 1204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
				case 1:
					{
					this.state = 1202;
					this.match(mtgParser.SPACE);
					this.state = 1203;
					this.duration();
					}
					break;
				}
				}
				break;

			case 27:
				{
				this.state = 1206;
				this.match(mtgParser.PUT);
				this.state = 1207;
				this.match(mtgParser.SPACE);
				this.state = 1208;
				this.englishNumber();
				this.state = 1209;
				this.match(mtgParser.SPACE);
				this.state = 1210;
				this.counterKind();
				this.state = 1211;
				this.match(mtgParser.SPACE);
				this.state = 1215;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
				case 1:
					{
					this.state = 1212;
					this.match(mtgParser.COUNTER);
					}
					break;

				case 2:
					{
					this.state = 1213;
					this.match(mtgParser.COUNTER);
					this.state = 1214;
					this.match(mtgParser.T__79);
					}
					break;
				}
				this.state = 1217;
				this.match(mtgParser.SPACE);
				this.state = 1218;
				this.match(mtgParser.T__80);
				this.state = 1219;
				this.match(mtgParser.SPACE);
				this.state = 1220;
				this.object(0);
				}
				break;

			case 28:
				{
				this.state = 1222;
				this.match(mtgParser.YOU);
				this.state = 1223;
				this.match(mtgParser.SPACE);
				this.state = 1224;
				this.match(mtgParser.CHOOSE);
				this.state = 1225;
				this.match(mtgParser.SPACE);
				this.state = 1226;
				this.object(0);
				this.state = 1231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,79,this._ctx) ) {
				case 1:
					{
					this.state = 1227;
					this.match(mtgParser.SPACE);
					this.state = 1228;
					this.match(mtgParser.T__106);
					this.state = 1229;
					this.match(mtgParser.SPACE);
					this.state = 1230;
					this.match(mtgParser.IT);
					}
					break;
				}
				}
				break;

			case 29:
				{
				this.state = 1233;
				this.match(mtgParser.LOOK);
				this.state = 1234;
				this.match(mtgParser.SPACE);
				this.state = 1235;
				this.match(mtgParser.T__143);
				this.state = 1236;
				this.match(mtgParser.SPACE);
				this.state = 1237;
				this.englishNumber();
				this.state = 1238;
				this.match(mtgParser.SPACE);
				this.state = 1239;
				this.match(mtgParser.CARD);
				this.state = 1240;
				this.match(mtgParser.T__79);
				this.state = 1241;
				this.match(mtgParser.SPACE);
				this.state = 1242;
				this.match(mtgParser.T__98);
				this.state = 1243;
				this.match(mtgParser.SPACE);
				this.state = 1244;
				this.zone();
				}
				break;

			case 30:
				{
				this.state = 1246;
				this.match(mtgParser.LOOK);
				this.state = 1247;
				this.match(mtgParser.SPACE);
				this.state = 1248;
				this.match(mtgParser.AT);
				this.state = 1249;
				this.match(mtgParser.SPACE);
				this.state = 1250;
				this.object(0);
				}
				break;

			case 31:
				{
				this.state = 1251;
				this.match(mtgParser.REVEAL);
				this.state = 1252;
				this.match(mtgParser.SPACE);
				this.state = 1253;
				this.object(0);
				}
				break;

			case 32:
				{
				this.state = 1254;
				this.match(mtgParser.PUT);
				this.state = 1255;
				this.match(mtgParser.SPACE);
				this.state = 1256;
				this.object(0);
				this.state = 1257;
				this.match(mtgParser.SPACE);
				this.state = 1258;
				this.intoZone();
				this.state = 1261;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,80,this._ctx) ) {
				case 1:
					{
					this.state = 1259;
					this.match(mtgParser.SPACE);
					this.state = 1260;
					this.match(mtgParser.T__131);
					}
					break;
				}
				this.state = 1270;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
				case 1:
					{
					this.state = 1263;
					this.match(mtgParser.SPACE);
					this.state = 1264;
					this.match(mtgParser.T__63);
					this.state = 1265;
					this.match(mtgParser.SPACE);
					this.state = 1266;
					this.object(0);
					this.state = 1267;
					this.match(mtgParser.SPACE);
					this.state = 1268;
					this.intoZone();
					}
					break;
				}
				}
				break;

			case 33:
				{
				this.state = 1272;
				this.gains();
				this.state = 1273;
				this.match(mtgParser.SPACE);
				this.state = 1274;
				this.match(mtgParser.T__101);
				this.state = 1275;
				this.match(mtgParser.SPACE);
				this.state = 1276;
				this.match(mtgParser.T__98);
				this.state = 1277;
				this.match(mtgParser.SPACE);
				this.state = 1278;
				this.object(0);
				}
				break;

			case 34:
				{
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.YOU) {
					{
					this.state = 1280;
					this.match(mtgParser.YOU);
					this.state = 1281;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1284;
				this.match(mtgParser.T__144);
				this.state = 1285;
				this.match(mtgParser.SPACE);
				this.state = 1286;
				this.s(0);
				this.state = 1297;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,83,this._ctx) ) {
				case 1:
					{
					this.state = 1287;
					this.match(mtgParser.FULLSTOP);
					this.state = 1288;
					this.match(mtgParser.SPACE);
					this.state = 1289;
					this.match(mtgParser.IF);
					this.state = 1290;
					this.match(mtgParser.SPACE);
					this.state = 1291;
					this.match(mtgParser.YOU);
					this.state = 1292;
					this.match(mtgParser.SPACE);
					this.state = 1293;
					this.match(mtgParser.T__55);
					this.state = 1294;
					this.match(mtgParser.T__5);
					this.state = 1295;
					this.match(mtgParser.SPACE);
					this.state = 1296;
					this.s(0);
					}
					break;
				}
				}
				break;

			case 35:
				{
				this.state = 1299;
				this.match(mtgParser.T__145);
				this.state = 1300;
				this.match(mtgParser.SPACE);
				this.state = 1301;
				this.object(0);
				this.state = 1302;
				this.match(mtgParser.SPACE);
				this.state = 1303;
				this.objectInfinitive();
				}
				break;

			case 36:
				{
				this.state = 1305;
				this.match(mtgParser.CHOOSE);
				this.state = 1306;
				this.match(mtgParser.SPACE);
				this.state = 1307;
				this.match(mtgParser.T__147);
				this.state = 1308;
				this.match(mtgParser.SPACE);
				this.state = 1309;
				this.object(0);
				}
				break;

			case 37:
				{
				this.state = 1310;
				this.match(mtgParser.SWITCH);
				this.state = 1311;
				this.match(mtgParser.SPACE);
				this.state = 1312;
				this.match(mtgParser.T__148);
				this.state = 1313;
				this.match(mtgParser.SPACE);
				this.state = 1314;
				this.object(0);
				this.state = 1315;
				this.match(mtgParser.SPACE);
				this.state = 1316;
				this.untilClause();
				}
				break;

			case 38:
				{
				this.state = 1318;
				this.match(mtgParser.T__149);
				this.state = 1319;
				this.match(mtgParser.SPACE);
				this.state = 1320;
				this.object(0);
				}
				break;

			case 39:
				{
				this.state = 1321;
				this.match(mtgParser.SPEND);
				this.state = 1322;
				this.match(mtgParser.SPACE);
				this.state = 1323;
				this.match(mtgParser.T__150);
				this.state = 1324;
				this.match(mtgParser.SPACE);
				this.state = 1325;
				this.object(0);
				}
				break;

			case 40:
				{
				this.state = 1326;
				this.match(mtgParser.CHOOSE);
				this.state = 1327;
				this.match(mtgParser.SPACE);
				this.state = 1328;
				this.match(mtgParser.INDEFINITE_ARTICLE_A);
				this.state = 1329;
				this.match(mtgParser.SPACE);
				this.state = 1330;
				this.match(mtgParser.CARD);
				this.state = 1331;
				this.match(mtgParser.SPACE);
				this.state = 1332;
				this.match(mtgParser.T__151);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1354;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1352;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
					case 1:
						{
						_localctx = new ImperativeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_imperative);
						this.state = 1335;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 1336;
						this.match(mtgParser.SPACE);
						this.state = 1337;
						this.match(mtgParser.T__63);
						this.state = 1338;
						this.match(mtgParser.SPACE);
						this.state = 1339;
						this.imperative(8);
						}
						break;

					case 2:
						{
						_localctx = new ImperativeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_imperative);
						this.state = 1340;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 1341;
						this.match(mtgParser.SPACE);
						this.state = 1342;
						this.match(mtgParser.T__146);
						this.state = 1343;
						this.match(mtgParser.SPACE);
						this.state = 1344;
						this.imperative(7);
						}
						break;

					case 3:
						{
						_localctx = new ImperativeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_imperative);
						this.state = 1345;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 1346;
						this.match(mtgParser.SPACE);
						this.state = 1347;
						this.match(mtgParser.FOR);
						this.state = 1348;
						this.match(mtgParser.SPACE);
						this.state = 1349;
						this.match(mtgParser.EACH);
						this.state = 1350;
						this.match(mtgParser.SPACE);
						this.state = 1351;
						this.pureObject(0);
						}
						break;
					}
					} 
				}
				this.state = 1356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public playerVerbPhrase(): PlayerVerbPhraseContext;
	public playerVerbPhrase(_p: number): PlayerVerbPhraseContext;
	@RuleVersion(0)
	public playerVerbPhrase(_p?: number): PlayerVerbPhraseContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PlayerVerbPhraseContext = new PlayerVerbPhraseContext(this._ctx, _parentState);
		let _prevctx: PlayerVerbPhraseContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, mtgParser.RULE_playerVerbPhrase, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				{
				this.state = 1358;
				this.gains();
				this.state = 1359;
				this.match(mtgParser.SPACE);
				this.state = 1360;
				this.number();
				this.state = 1361;
				this.match(mtgParser.SPACE);
				this.state = 1362;
				this.match(mtgParser.T__56);
				}
				break;

			case 2:
				{
				this.state = 1364;
				this.gains();
				this.state = 1365;
				this.match(mtgParser.SPACE);
				this.state = 1366;
				this.match(mtgParser.T__56);
				this.state = 1367;
				this.match(mtgParser.SPACE);
				this.state = 1368;
				this.match(mtgParser.T__70);
				this.state = 1369;
				this.match(mtgParser.SPACE);
				this.state = 1370;
				this.match(mtgParser.T__71);
				this.state = 1371;
				this.match(mtgParser.SPACE);
				this.state = 1372;
				this.itsPossessive();
				this.state = 1373;
				this.match(mtgParser.SPACE);
				this.state = 1374;
				this.numericalCharacteristic();
				}
				break;

			case 3:
				{
				this.state = 1376;
				this.controls();
				this.state = 1377;
				this.match(mtgParser.SPACE);
				this.state = 1378;
				this.object(0);
				}
				break;

			case 4:
				{
				this.state = 1380;
				this.owns();
				this.state = 1381;
				this.match(mtgParser.SPACE);
				this.state = 1382;
				this.object(0);
				}
				break;

			case 5:
				{
				this.state = 1384;
				this.match(mtgParser.T__153);
				this.state = 1385;
				this.match(mtgParser.SPACE);
				this.state = 1386;
				this.object(0);
				this.state = 1387;
				this.match(mtgParser.SPACE);
				this.state = 1388;
				this.intoZone();
				}
				break;

			case 6:
				{
				this.state = 1390;
				this.match(mtgParser.SURVEIL);
				}
				break;

			case 7:
				{
				this.state = 1391;
				this.match(mtgParser.SURVEIL);
				this.state = 1392;
				this.match(mtgParser.T__79);
				}
				break;

			case 8:
				{
				this.state = 1393;
				this.match(mtgParser.T__154);
				this.state = 1394;
				this.match(mtgParser.SPACE);
				this.state = 1395;
				this.object(0);
				}
				break;

			case 9:
				{
				this.state = 1396;
				this.match(mtgParser.T__155);
				this.state = 1397;
				this.match(mtgParser.SPACE);
				this.state = 1398;
				this.object(0);
				}
				break;

			case 10:
				{
				this.state = 1399;
				this.match(mtgParser.REVEAL);
				this.state = 1400;
				this.match(mtgParser.T__79);
				this.state = 1401;
				this.match(mtgParser.SPACE);
				this.state = 1402;
				this.playersPossessive();
				this.state = 1403;
				this.match(mtgParser.SPACE);
				this.state = 1404;
				this.match(mtgParser.T__156);
				}
				break;

			case 11:
				{
				this.state = 1406;
				this.imperative(0);
				}
				break;

			case 12:
				{
				this.state = 1407;
				this.match(mtgParser.CANT);
				this.state = 1408;
				this.match(mtgParser.SPACE);
				this.state = 1409;
				this.imperative(0);
				}
				break;

			case 13:
				{
				this.state = 1410;
				this.match(mtgParser.DOESN_T);
				}
				break;

			case 14:
				{
				this.state = 1411;
				this.match(mtgParser.DON_T);
				}
				break;

			case 15:
				{
				this.state = 1412;
				this.match(mtgParser.T__157);
				}
				break;

			case 16:
				{
				this.state = 1413;
				this.match(mtgParser.T__55);
				}
				break;

			case 17:
				{
				this.state = 1414;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__158 || _la===mtgParser.T__159) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1415;
				this.match(mtgParser.SPACE);
				this.state = 1416;
				this.match(mtgParser.T__160);
				}
				break;

			case 18:
				{
				this.state = 1417;
				this.gets();
				this.state = 1418;
				this.match(mtgParser.SPACE);
				this.state = 1419;
				this.match(mtgParser.T__161);
				this.state = 1420;
				this.match(mtgParser.SPACE);
				this.state = 1421;
				this.withClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1451;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1449;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,88,this._ctx) ) {
					case 1:
						{
						_localctx = new PlayerVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_playerVerbPhrase);
						this.state = 1425;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 1426;
						this.match(mtgParser.T__5);
						this.state = 1427;
						this.match(mtgParser.SPACE);
						this.state = 1428;
						this.match(mtgParser.T__64);
						this.state = 1429;
						this.match(mtgParser.SPACE);
						this.state = 1430;
						this.playerVerbPhrase(11);
						}
						break;

					case 2:
						{
						_localctx = new PlayerVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_playerVerbPhrase);
						this.state = 1431;
						if (!(this.precpred(this._ctx, 21))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						this.state = 1432;
						this.match(mtgParser.SPACE);
						this.state = 1433;
						this.match(mtgParser.FOR);
						this.state = 1434;
						this.match(mtgParser.SPACE);
						this.state = 1435;
						this.match(mtgParser.EACH);
						this.state = 1436;
						this.match(mtgParser.SPACE);
						this.state = 1437;
						this.pureObject(0);
						}
						break;

					case 3:
						{
						_localctx = new PlayerVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_playerVerbPhrase);
						this.state = 1438;
						if (!(this.precpred(this._ctx, 20))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						this.state = 1439;
						this.match(mtgParser.SPACE);
						this.state = 1440;
						this.match(mtgParser.T__152);
						}
						break;

					case 4:
						{
						_localctx = new PlayerVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_playerVerbPhrase);
						this.state = 1441;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1442;
						this.match(mtgParser.SPACE);
						this.state = 1443;
						this.match(mtgParser.IF);
						this.state = 1444;
						this.match(mtgParser.SPACE);
						this.state = 1445;
						this.s(0);
						}
						break;

					case 5:
						{
						_localctx = new PlayerVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_playerVerbPhrase);
						this.state = 1446;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 1447;
						this.match(mtgParser.SPACE);
						this.state = 1448;
						this.match(mtgParser.T__110);
						}
						break;
					}
					} 
				}
				this.state = 1453;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public objectVerbPhrase(): ObjectVerbPhraseContext;
	public objectVerbPhrase(_p: number): ObjectVerbPhraseContext;
	@RuleVersion(0)
	public objectVerbPhrase(_p?: number): ObjectVerbPhraseContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ObjectVerbPhraseContext = new ObjectVerbPhraseContext(this._ctx, _parentState);
		let _prevctx: ObjectVerbPhraseContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, mtgParser.RULE_objectVerbPhrase, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,103,this._ctx) ) {
			case 1:
				{
				this.state = 1455;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__78 || _la===mtgParser.T__145) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1456;
				this.match(mtgParser.SPACE);
				this.state = 1457;
				this.acquiredAbility(0);
				this.state = 1460;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
				case 1:
					{
					this.state = 1458;
					this.match(mtgParser.SPACE);
					this.state = 1459;
					this.asLongAsClause();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1462;
				this.gets();
				this.state = 1463;
				this.match(mtgParser.SPACE);
				this.state = 1464;
				this.ptModification();
				this.state = 1465;
				this.match(mtgParser.SPACE);
				this.state = 1466;
				this.match(mtgParser.T__63);
				this.state = 1467;
				this.match(mtgParser.SPACE);
				this.state = 1468;
				this.gains();
				this.state = 1469;
				this.match(mtgParser.SPACE);
				this.state = 1470;
				this.acquiredAbility(0);
				this.state = 1473;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
				case 1:
					{
					this.state = 1471;
					this.match(mtgParser.SPACE);
					this.state = 1472;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1475;
				this.gains();
				this.state = 1476;
				this.match(mtgParser.SPACE);
				this.state = 1477;
				this.acquiredAbility(0);
				this.state = 1478;
				this.match(mtgParser.SPACE);
				this.state = 1479;
				this.match(mtgParser.T__63);
				this.state = 1480;
				this.match(mtgParser.SPACE);
				this.state = 1481;
				this.gets();
				this.state = 1482;
				this.match(mtgParser.SPACE);
				this.state = 1483;
				this.ptModification();
				this.state = 1486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
				case 1:
					{
					this.state = 1484;
					this.match(mtgParser.SPACE);
					this.state = 1485;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 1488;
				this.gets();
				this.state = 1489;
				this.match(mtgParser.SPACE);
				this.state = 1490;
				this.ptModification();
				this.state = 1493;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,93,this._ctx) ) {
				case 1:
					{
					this.state = 1491;
					this.match(mtgParser.SPACE);
					this.state = 1492;
					this.foreachClause();
					}
					break;
				}
				this.state = 1497;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,94,this._ctx) ) {
				case 1:
					{
					this.state = 1495;
					this.match(mtgParser.SPACE);
					this.state = 1496;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1499;
				this.match(mtgParser.T__162);
				this.state = 1500;
				this.match(mtgParser.SPACE);
				this.state = 1501;
				this.match(mtgParser.THEBATTLEFIELD);
				this.state = 1502;
				this.match(mtgParser.SPACE);
				this.state = 1503;
				this.match(mtgParser.T__163);
				this.state = 1504;
				this.match(mtgParser.SPACE);
				this.state = 1509;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mtgParser.INDEFINITE_ARTICLE_A:
					{
					this.state = 1505;
					this.match(mtgParser.INDEFINITE_ARTICLE_A);
					}
					break;
				case mtgParser.INDEFINITE_ARTICLE_AN:
					{
					this.state = 1506;
					this.match(mtgParser.INDEFINITE_ARTICLE_AN);
					this.state = 1507;
					this.match(mtgParser.SPACE);
					this.state = 1508;
					this.match(mtgParser.T__164);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1511;
				this.match(mtgParser.SPACE);
				this.state = 1512;
				this.counterKind();
				this.state = 1513;
				this.match(mtgParser.SPACE);
				this.state = 1514;
				this.match(mtgParser.COUNTER);
				this.state = 1515;
				this.match(mtgParser.SPACE);
				this.state = 1516;
				this.match(mtgParser.T__80);
				this.state = 1517;
				this.match(mtgParser.SPACE);
				this.state = 1518;
				this.match(mtgParser.IT);
				this.state = 1521;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
				case 1:
					{
					this.state = 1519;
					this.match(mtgParser.SPACE);
					this.state = 1520;
					this.foreachClause();
					}
					break;
				}
				}
				break;

			case 6:
				{
				this.state = 1523;
				this.match(mtgParser.T__162);
				this.state = 1524;
				this.match(mtgParser.SPACE);
				this.state = 1525;
				this.match(mtgParser.THEBATTLEFIELD);
				this.state = 1526;
				this.match(mtgParser.SPACE);
				this.state = 1527;
				this.match(mtgParser.T__163);
				this.state = 1528;
				this.match(mtgParser.SPACE);
				this.state = 1529;
				this.englishNumber();
				this.state = 1530;
				this.match(mtgParser.SPACE);
				this.state = 1531;
				this.counterKind();
				this.state = 1532;
				this.match(mtgParser.SPACE);
				this.state = 1533;
				this.match(mtgParser.COUNTER);
				this.state = 1534;
				this.match(mtgParser.T__79);
				this.state = 1535;
				this.match(mtgParser.SPACE);
				this.state = 1536;
				this.match(mtgParser.T__80);
				this.state = 1537;
				this.match(mtgParser.SPACE);
				this.state = 1538;
				this.match(mtgParser.IT);
				}
				break;

			case 7:
				{
				this.state = 1540;
				this.match(mtgParser.T__162);
				this.state = 1541;
				this.match(mtgParser.SPACE);
				this.state = 1542;
				this.match(mtgParser.THEBATTLEFIELD);
				this.state = 1543;
				this.match(mtgParser.SPACE);
				this.state = 1544;
				this.match(mtgParser.T__163);
				this.state = 1545;
				this.match(mtgParser.SPACE);
				this.state = 1546;
				this.match(mtgParser.T__165);
				this.state = 1547;
				this.match(mtgParser.SPACE);
				this.state = 1548;
				this.counterKind();
				this.state = 1549;
				this.match(mtgParser.SPACE);
				this.state = 1550;
				this.match(mtgParser.COUNTER);
				this.state = 1551;
				this.match(mtgParser.T__79);
				this.state = 1552;
				this.match(mtgParser.SPACE);
				this.state = 1553;
				this.match(mtgParser.T__80);
				this.state = 1554;
				this.match(mtgParser.SPACE);
				this.state = 1555;
				this.match(mtgParser.IT);
				this.state = 1556;
				this.match(mtgParser.SPACE);
				this.state = 1557;
				this.match(mtgParser.T__70);
				this.state = 1558;
				this.match(mtgParser.SPACE);
				this.state = 1559;
				this.match(mtgParser.T__71);
				this.state = 1560;
				this.match(mtgParser.SPACE);
				this.state = 1561;
				this.numberDefinition();
				}
				break;

			case 8:
				{
				this.state = 1563;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__162 || _la===mtgParser.T__166) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1564;
				this.match(mtgParser.SPACE);
				this.state = 1565;
				this.match(mtgParser.THEBATTLEFIELD);
				this.state = 1568;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
				case 1:
					{
					this.state = 1566;
					this.match(mtgParser.SPACE);
					this.state = 1567;
					this.match(mtgParser.T__131);
					}
					break;
				}
				this.state = 1577;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,98,this._ctx) ) {
				case 1:
					{
					this.state = 1570;
					this.match(mtgParser.SPACE);
					this.state = 1571;
					this.match(mtgParser.T__167);
					this.state = 1572;
					this.match(mtgParser.SPACE);
					this.state = 1573;
					this.playersPossessive();
					this.state = 1574;
					this.match(mtgParser.SPACE);
					this.state = 1575;
					this.match(mtgParser.T__101);
					}
					break;
				}
				}
				break;

			case 9:
				{
				this.state = 1579;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__168 || _la===mtgParser.T__169) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1580;
				this.match(mtgParser.SPACE);
				this.state = 1581;
				this.match(mtgParser.THEBATTLEFIELD);
				}
				break;

			case 10:
				{
				this.state = 1582;
				this.match(mtgParser.T__170);
				}
				break;

			case 11:
				{
				this.state = 1583;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__171 || _la===mtgParser.T__172) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 12:
				{
				this.state = 1584;
				this.match(mtgParser.T__69);
				this.state = 1585;
				this.match(mtgParser.SPACE);
				this.state = 1586;
				this.match(mtgParser.PUT);
				this.state = 1587;
				this.match(mtgParser.SPACE);
				this.state = 1588;
				this.intoZone();
				this.state = 1589;
				this.match(mtgParser.SPACE);
				this.state = 1590;
				this.fromZone();
				}
				break;

			case 13:
				{
				this.state = 1592;
				this.match(mtgParser.CANT);
				this.state = 1593;
				this.match(mtgParser.SPACE);
				this.state = 1594;
				this.cantClauseInner();
				this.state = 1597;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,99,this._ctx) ) {
				case 1:
					{
					this.state = 1595;
					this.match(mtgParser.SPACE);
					this.state = 1596;
					this.duration();
					}
					break;
				}
				}
				break;

			case 14:
				{
				this.state = 1599;
				this.match(mtgParser.T__173);
				this.state = 1600;
				this.match(mtgParser.SPACE);
				this.state = 1601;
				this.dealsWhat();
				}
				break;

			case 15:
				{
				this.state = 1602;
				this.match(mtgParser.T__69);
				this.state = 1603;
				this.match(mtgParser.SPACE);
				this.state = 1604;
				this.isWhat();
				}
				break;

			case 16:
				{
				this.state = 1605;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__174 || _la===mtgParser.T__175) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1610;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,100,this._ctx) ) {
				case 1:
					{
					this.state = 1606;
					this.match(mtgParser.SPACE);
					this.state = 1607;
					_la = this._input.LA(1);
					if ( !(_la===mtgParser.EACH || _la===mtgParser.THIS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1608;
					this.match(mtgParser.SPACE);
					this.state = 1609;
					this.match(mtgParser.T__176);
					}
					break;
				}
				}
				break;

			case 17:
				{
				this.state = 1612;
				this.gains();
				this.state = 1613;
				this.match(mtgParser.SPACE);
				this.state = 1614;
				this.acquiredAbility(0);
				this.state = 1617;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,101,this._ctx) ) {
				case 1:
					{
					this.state = 1615;
					this.match(mtgParser.SPACE);
					this.state = 1616;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 18:
				{
				this.state = 1619;
				this.match(mtgParser.DOESN_T);
				this.state = 1620;
				this.match(mtgParser.SPACE);
				this.state = 1621;
				this.match(mtgParser.T__177);
				this.state = 1622;
				this.match(mtgParser.SPACE);
				this.state = 1623;
				this.qualifiedPartOfTurn();
				}
				break;

			case 19:
				{
				this.state = 1624;
				this.match(mtgParser.T__178);
				this.state = 1625;
				this.match(mtgParser.SPACE);
				this.state = 1626;
				this.object(0);
				}
				break;

			case 20:
				{
				this.state = 1627;
				this.match(mtgParser.T__179);
				}
				break;

			case 21:
				{
				this.state = 1628;
				this.match(mtgParser.T__180);
				this.state = 1629;
				this.match(mtgParser.SPACE);
				this.state = 1630;
				this.object(0);
				}
				break;

			case 22:
				{
				this.state = 1631;
				this.match(mtgParser.T__181);
				this.state = 1632;
				this.match(mtgParser.SPACE);
				this.state = 1633;
				this.object(0);
				}
				break;

			case 23:
				{
				this.state = 1634;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__182 || _la===mtgParser.T__183) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1635;
				this.match(mtgParser.SPACE);
				this.state = 1636;
				this.manacost();
				this.state = 1637;
				this.match(mtgParser.SPACE);
				this.state = 1638;
				this.match(mtgParser.T__184);
				this.state = 1639;
				this.match(mtgParser.SPACE);
				this.state = 1640;
				this.match(mtgParser.T__71);
				this.state = 1641;
				this.match(mtgParser.SPACE);
				this.state = 1642;
				this.match(mtgParser.CAST);
				}
				break;

			case 24:
				{
				this.state = 1644;
				this.match(mtgParser.CAN);
				this.state = 1645;
				this.match(mtgParser.SPACE);
				this.state = 1646;
				this.match(mtgParser.T__175);
				this.state = 1647;
				this.match(mtgParser.SPACE);
				this.state = 1648;
				this.match(mtgParser.T__185);
				}
				break;

			case 25:
				{
				this.state = 1649;
				this.match(mtgParser.T__186);
				}
				break;

			case 26:
				{
				this.state = 1650;
				this.match(mtgParser.T__187);
				}
				break;

			case 27:
				{
				this.state = 1651;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__188 || _la===mtgParser.T__189) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1652;
				this.match(mtgParser.SPACE);
				this.state = 1653;
				this.match(mtgParser.T__109);
				}
				break;

			case 28:
				{
				this.state = 1654;
				this.match(mtgParser.T__190);
				this.state = 1655;
				this.match(mtgParser.SPACE);
				this.state = 1656;
				this.becomesWhat();
				}
				break;

			case 29:
				{
				this.state = 1657;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__158 || _la===mtgParser.T__159) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1658;
				this.match(mtgParser.SPACE);
				this.state = 1659;
				this.match(mtgParser.T__191);
				this.state = 1662;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,102,this._ctx) ) {
				case 1:
					{
					this.state = 1660;
					this.match(mtgParser.SPACE);
					this.state = 1661;
					this.untilClause();
					}
					break;
				}
				}
				break;

			case 30:
				{
				this.state = 1664;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__69 || _la===mtgParser.T__192) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1665;
				this.match(mtgParser.SPACE);
				this.state = 1666;
				this.match(mtgParser.T__193);
				}
				break;

			case 31:
				{
				this.state = 1667;
				this.match(mtgParser.T__194);
				this.state = 1668;
				this.match(mtgParser.SPACE);
				this.state = 1669;
				this.player(0);
				this.state = 1670;
				this.match(mtgParser.SPACE);
				this.state = 1671;
				this.match(mtgParser.T__195);
				this.state = 1672;
				this.match(mtgParser.SPACE);
				this.state = 1673;
				this.object(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1711;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,107,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1709;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,106,this._ctx) ) {
					case 1:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1677;
						if (!(this.precpred(this._ctx, 37))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 37)");
						this.state = 1679;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===mtgParser.T__5) {
							{
							this.state = 1678;
							this.match(mtgParser.T__5);
							}
						}

						this.state = 1681;
						this.match(mtgParser.SPACE);
						this.state = 1682;
						this.match(mtgParser.T__63);
						this.state = 1683;
						this.match(mtgParser.SPACE);
						this.state = 1684;
						this.objectVerbPhrase(38);
						}
						break;

					case 2:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1685;
						if (!(this.precpred(this._ctx, 36))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 36)");
						this.state = 1686;
						this.match(mtgParser.SPACE);
						this.state = 1687;
						this.match(mtgParser.T__96);
						this.state = 1688;
						this.match(mtgParser.SPACE);
						this.state = 1689;
						this.objectVerbPhrase(37);
						}
						break;

					case 3:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1690;
						if (!(this.precpred(this._ctx, 35))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 35)");
						this.state = 1691;
						this.match(mtgParser.T__5);
						this.state = 1694;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
						case 1:
							{
							this.state = 1692;
							this.match(mtgParser.SPACE);
							this.state = 1693;
							this.match(mtgParser.T__64);
							}
							break;
						}
						this.state = 1696;
						this.match(mtgParser.SPACE);
						this.state = 1697;
						this.objectVerbPhrase(36);
						}
						break;

					case 4:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1698;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1699;
						this.match(mtgParser.SPACE);
						this.state = 1700;
						this.foreachClause();
						}
						break;

					case 5:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1701;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 1702;
						this.match(mtgParser.SPACE);
						this.state = 1703;
						this.duration();
						}
						break;

					case 6:
						{
						_localctx = new ObjectVerbPhraseContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_objectVerbPhrase);
						this.state = 1704;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 1705;
						this.match(mtgParser.SPACE);
						this.state = 1706;
						this.match(mtgParser.IF);
						this.state = 1707;
						this.match(mtgParser.SPACE);
						this.state = 1708;
						this.s(0);
						}
						break;
					}
					} 
				}
				this.state = 1713;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,107,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectInfinitive(): ObjectInfinitiveContext {
		let _localctx: ObjectInfinitiveContext = new ObjectInfinitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, mtgParser.RULE_objectInfinitive);
		try {
			this.state = 1727;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__196:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1714;
				this.match(mtgParser.T__196);
				this.state = 1715;
				this.match(mtgParser.SPACE);
				this.state = 1716;
				this.intoZone();
				this.state = 1717;
				this.match(mtgParser.SPACE);
				this.state = 1718;
				this.duration();
				}
				break;
			case mtgParser.T__197:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1720;
				this.match(mtgParser.T__197);
				}
				break;
			case mtgParser.T__198:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1721;
				this.match(mtgParser.T__198);
				this.state = 1722;
				this.match(mtgParser.SPACE);
				this.state = 1723;
				this.object(0);
				}
				break;
			case mtgParser.T__199:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1724;
				this.match(mtgParser.T__199);
				this.state = 1725;
				this.match(mtgParser.SPACE);
				this.state = 1726;
				this.dealsWhat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public isWhat(): IsWhatContext {
		let _localctx: IsWhatContext = new IsWhatContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, mtgParser.RULE_isWhat);
		try {
			this.state = 1737;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1729;
				this.color(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1730;
				this.object(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1731;
				this.inZone();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1732;
				this.anyType();
				this.state = 1735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
				case 1:
					{
					this.state = 1733;
					this.match(mtgParser.SPACE);
					this.state = 1734;
					this.match(mtgParser.T__200);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public becomesWhat(): BecomesWhatContext {
		let _localctx: BecomesWhatContext = new BecomesWhatContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, mtgParser.RULE_becomesWhat);
		try {
			this.state = 1753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__131:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1739;
				this.match(mtgParser.T__131);
				}
				break;
			case mtgParser.T__132:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1740;
				this.match(mtgParser.T__132);
				}
				break;
			case mtgParser.INDEFINITE_ARTICLE_A:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1741;
				this.match(mtgParser.INDEFINITE_ARTICLE_A);
				this.state = 1742;
				this.match(mtgParser.SPACE);
				this.state = 1743;
				this.match(mtgParser.COPY);
				this.state = 1744;
				this.match(mtgParser.SPACE);
				this.state = 1745;
				this.match(mtgParser.T__98);
				this.state = 1746;
				this.match(mtgParser.SPACE);
				this.state = 1747;
				this.object(0);
				this.state = 1751;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
				case 1:
					{
					this.state = 1748;
					this.match(mtgParser.T__5);
					this.state = 1749;
					this.match(mtgParser.SPACE);
					this.state = 1750;
					this.exceptClauseInCopyEffect();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exceptClauseInCopyEffect(): ExceptClauseInCopyEffectContext {
		let _localctx: ExceptClauseInCopyEffectContext = new ExceptClauseInCopyEffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, mtgParser.RULE_exceptClauseInCopyEffect);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this.match(mtgParser.T__201);
			this.state = 1756;
			this.match(mtgParser.SPACE);
			this.state = 1757;
			this.copyException();
			this.state = 1767;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,114,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1758;
					this.match(mtgParser.T__5);
					this.state = 1759;
					this.match(mtgParser.SPACE);
					this.state = 1762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===mtgParser.T__63) {
						{
						this.state = 1760;
						this.match(mtgParser.T__63);
						this.state = 1761;
						this.match(mtgParser.SPACE);
						}
					}

					this.state = 1764;
					this.copyException();
					}
					} 
				}
				this.state = 1769;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,114,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public copyException(): CopyExceptionContext {
		let _localctx: CopyExceptionContext = new CopyExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, mtgParser.RULE_copyException);
		try {
			this.state = 1781;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,115,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1770;
				this.match(mtgParser.ITS);
				this.state = 1771;
				this.match(mtgParser.SPACE);
				this.state = 1772;
				this.match(mtgParser.T__151);
				this.state = 1773;
				this.match(mtgParser.SPACE);
				this.state = 1774;
				this.match(mtgParser.T__69);
				this.state = 1775;
				this.match(mtgParser.SPACE);
				this.state = 1776;
				this.name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1777;
				this.match(mtgParser.IT_S);
				this.state = 1778;
				this.match(mtgParser.SPACE);
				this.state = 1779;
				this.isWhat();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1780;
				this.ss(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public itsPossessive(): ItsPossessiveContext {
		let _localctx: ItsPossessiveContext = new ItsPossessiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, mtgParser.RULE_itsPossessive);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__2:
			case mtgParser.T__92:
			case mtgParser.T__93:
			case mtgParser.T__94:
			case mtgParser.T__95:
			case mtgParser.T__109:
			case mtgParser.T__119:
			case mtgParser.T__122:
			case mtgParser.T__123:
			case mtgParser.T__124:
			case mtgParser.T__127:
			case mtgParser.T__128:
			case mtgParser.T__129:
			case mtgParser.T__130:
			case mtgParser.T__131:
			case mtgParser.T__132:
			case mtgParser.T__133:
			case mtgParser.T__134:
			case mtgParser.T__219:
			case mtgParser.T__220:
			case mtgParser.T__221:
			case mtgParser.T__222:
			case mtgParser.T__223:
			case mtgParser.T__224:
			case mtgParser.T__225:
			case mtgParser.T__226:
			case mtgParser.T__240:
			case mtgParser.T__241:
			case mtgParser.T__242:
			case mtgParser.T__243:
			case mtgParser.T__244:
			case mtgParser.T__245:
			case mtgParser.T__246:
			case mtgParser.T__251:
			case mtgParser.T__253:
			case mtgParser.T__254:
			case mtgParser.T__255:
			case mtgParser.T__256:
			case mtgParser.T__270:
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.T__293:
			case mtgParser.XX:
			case mtgParser.NUMBER:
			case mtgParser.CREATURE:
			case mtgParser.TARGET:
			case mtgParser.LEGENDARY:
			case mtgParser.SPACE:
			case mtgParser.ANOTHER:
			case mtgParser.ENCHANTED:
			case mtgParser.EACH:
			case mtgParser.ALL:
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
			case mtgParser.COPY:
			case mtgParser.AT:
			case mtgParser.THE:
			case mtgParser.THIS:
			case mtgParser.THAT:
			case mtgParser.PERMANENT:
			case mtgParser.SPELL:
			case mtgParser.CARD:
			case mtgParser.INDEFINITE_ARTICLE_A:
			case mtgParser.INDEFINITE_ARTICLE_AN:
			case mtgParser.THESE:
			case mtgParser.THOSE:
			case mtgParser.IT:
			case mtgParser.THEM:
			case mtgParser.THEY:
			case mtgParser.EQUIPPED:
			case mtgParser.LAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1783;
				this.object(0);
				this.state = 1784;
				this.match(mtgParser.SAXON);
				}
				break;
			case mtgParser.ITS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1786;
				this.match(mtgParser.ITS);
				}
				break;
			case mtgParser.T__202:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1787;
				this.match(mtgParser.T__202);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public acquiredAbility(): AcquiredAbilityContext;
	public acquiredAbility(_p: number): AcquiredAbilityContext;
	@RuleVersion(0)
	public acquiredAbility(_p?: number): AcquiredAbilityContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AcquiredAbilityContext = new AcquiredAbilityContext(this._ctx, _parentState);
		let _prevctx: AcquiredAbilityContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, mtgParser.RULE_acquiredAbility, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__6:
			case mtgParser.T__7:
			case mtgParser.FLASH:
			case mtgParser.MENTOR:
			case mtgParser.VIGILANCE:
			case mtgParser.FLYING:
			case mtgParser.LIFELINK:
			case mtgParser.JUMPSTART:
			case mtgParser.DEFENDER:
			case mtgParser.HASTE:
			case mtgParser.TRAMPLE:
			case mtgParser.DEATHTOUCH:
			case mtgParser.MENACE:
			case mtgParser.FIRSTSTRIKE:
			case mtgParser.DOUBLESTRIKE:
			case mtgParser.REACH:
			case mtgParser.EQUIP:
			case mtgParser.HEXPROOF:
			case mtgParser.INDESTRUCTIBLE:
				{
				this.state = 1791;
				this.keyword();
				}
				break;
			case mtgParser.T__203:
				{
				this.state = 1792;
				this.match(mtgParser.T__203);
				this.state = 1793;
				this.ability();
				this.state = 1794;
				this.match(mtgParser.T__203);
				}
				break;
			case mtgParser.T__204:
				{
				this.state = 1796;
				this.match(mtgParser.T__204);
				this.state = 1797;
				this.ability();
				this.state = 1798;
				this.match(mtgParser.T__205);
				}
				break;
			case mtgParser.T__206:
				{
				this.state = 1800;
				this.match(mtgParser.T__206);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1810;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,118,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AcquiredAbilityContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_acquiredAbility);
					this.state = 1803;
					if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					this.state = 1804;
					this.match(mtgParser.SPACE);
					this.state = 1805;
					this.match(mtgParser.T__63);
					this.state = 1806;
					this.match(mtgParser.SPACE);
					this.state = 1807;
					this.acquiredAbility(3);
					}
					} 
				}
				this.state = 1812;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,118,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gets(): GetsContext {
		let _localctx: GetsContext = new GetsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, mtgParser.RULE_gets);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__207 || _la===mtgParser.T__208) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public controls(): ControlsContext {
		let _localctx: ControlsContext = new ControlsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, mtgParser.RULE_controls);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1815;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__101 || _la===mtgParser.T__102) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public owns(): OwnsContext {
		let _localctx: OwnsContext = new OwnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, mtgParser.RULE_owns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1817;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__103 || _la===mtgParser.T__104) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gains(): GainsContext {
		let _localctx: GainsContext = new GainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, mtgParser.RULE_gains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1819;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.GAINS || _la===mtgParser.GAIN) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, mtgParser.RULE_duration);
		try {
			this.state = 1828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__209:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1821;
				this.match(mtgParser.T__209);
				}
				break;
			case mtgParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1822;
				this.match(mtgParser.FOR);
				this.state = 1823;
				this.match(mtgParser.SPACE);
				this.state = 1824;
				this.asLongAsClause();
				}
				break;
			case mtgParser.T__210:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1825;
				this.match(mtgParser.T__210);
				this.state = 1826;
				this.match(mtgParser.SPACE);
				this.state = 1827;
				this.untilClauseInner();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numericalCharacteristic(): NumericalCharacteristicContext {
		let _localctx: NumericalCharacteristicContext = new NumericalCharacteristicContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, mtgParser.RULE_numericalCharacteristic);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			_la = this._input.LA(1);
			if ( !(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & ((1 << (mtgParser.T__211 - 212)) | (1 << (mtgParser.T__212 - 212)) | (1 << (mtgParser.T__213 - 212)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public untilClause(): UntilClauseContext {
		let _localctx: UntilClauseContext = new UntilClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, mtgParser.RULE_untilClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1832;
			this.match(mtgParser.T__214);
			this.state = 1833;
			this.match(mtgParser.SPACE);
			this.state = 1834;
			this.untilClauseInner();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public untilClauseInner(): UntilClauseInnerContext {
		let _localctx: UntilClauseInnerContext = new UntilClauseInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, mtgParser.RULE_untilClauseInner);
		try {
			this.state = 1838;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__2:
			case mtgParser.T__62:
			case mtgParser.T__65:
			case mtgParser.T__72:
			case mtgParser.T__76:
			case mtgParser.T__84:
			case mtgParser.T__92:
			case mtgParser.T__93:
			case mtgParser.T__94:
			case mtgParser.T__95:
			case mtgParser.T__109:
			case mtgParser.T__119:
			case mtgParser.T__122:
			case mtgParser.T__123:
			case mtgParser.T__124:
			case mtgParser.T__127:
			case mtgParser.T__128:
			case mtgParser.T__129:
			case mtgParser.T__130:
			case mtgParser.T__131:
			case mtgParser.T__132:
			case mtgParser.T__133:
			case mtgParser.T__134:
			case mtgParser.T__144:
			case mtgParser.T__145:
			case mtgParser.T__149:
			case mtgParser.T__202:
			case mtgParser.T__209:
			case mtgParser.T__210:
			case mtgParser.T__219:
			case mtgParser.T__220:
			case mtgParser.T__221:
			case mtgParser.T__222:
			case mtgParser.T__223:
			case mtgParser.T__224:
			case mtgParser.T__225:
			case mtgParser.T__226:
			case mtgParser.T__240:
			case mtgParser.T__241:
			case mtgParser.T__242:
			case mtgParser.T__243:
			case mtgParser.T__244:
			case mtgParser.T__245:
			case mtgParser.T__246:
			case mtgParser.T__251:
			case mtgParser.T__253:
			case mtgParser.T__254:
			case mtgParser.T__255:
			case mtgParser.T__256:
			case mtgParser.T__270:
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.T__293:
			case mtgParser.XX:
			case mtgParser.PUT:
			case mtgParser.NUMBER:
			case mtgParser.SACRIFICE:
			case mtgParser.DESTROY:
			case mtgParser.CREATURE:
			case mtgParser.EXILE:
			case mtgParser.TARGET:
			case mtgParser.LEGENDARY:
			case mtgParser.CREATE:
			case mtgParser.TAP:
			case mtgParser.YOU:
			case mtgParser.PAY:
			case mtgParser.SPACE:
			case mtgParser.ANOTHER:
			case mtgParser.ENCHANTED:
			case mtgParser.SURVEIL:
			case mtgParser.COUNTER:
			case mtgParser.SHUFFLE:
			case mtgParser.DRAW:
			case mtgParser.RETURN:
			case mtgParser.EACH:
			case mtgParser.ALL:
			case mtgParser.PREVENT:
			case mtgParser.ADD:
			case mtgParser.AS:
			case mtgParser.DISCARD:
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
			case mtgParser.LOOK:
			case mtgParser.REVEAL:
			case mtgParser.COPY:
			case mtgParser.CAST:
			case mtgParser.PLAY:
			case mtgParser.AT:
			case mtgParser.IF:
			case mtgParser.THE:
			case mtgParser.IT_S:
			case mtgParser.ITS:
			case mtgParser.THIS:
			case mtgParser.THAT:
			case mtgParser.PERMANENT:
			case mtgParser.SPELL:
			case mtgParser.CARD:
			case mtgParser.INDEFINITE_ARTICLE_A:
			case mtgParser.INDEFINITE_ARTICLE_AN:
			case mtgParser.FOR:
			case mtgParser.CHOOSE:
			case mtgParser.THESE:
			case mtgParser.THOSE:
			case mtgParser.ACTIVATED:
			case mtgParser.IT:
			case mtgParser.SEARCH:
			case mtgParser.THEM:
			case mtgParser.UNTAP:
			case mtgParser.THEY:
			case mtgParser.SWITCH:
			case mtgParser.EQUIPPED:
			case mtgParser.REMOVE:
			case mtgParser.GAINS:
			case mtgParser.GAIN:
			case mtgParser.LAND:
			case mtgParser.SPEND:
			case mtgParser.TAKE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1836;
				this.s(0);
				}
				break;
			case mtgParser.T__215:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1837;
				this.match(mtgParser.T__215);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public damagePreventionAmount(): DamagePreventionAmountContext {
		let _localctx: DamagePreventionAmountContext = new DamagePreventionAmountContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, mtgParser.RULE_damagePreventionAmount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1840;
			this.match(mtgParser.ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public damageNoun(): DamageNounContext {
		let _localctx: DamageNounContext = new DamageNounContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, mtgParser.RULE_damageNoun);
		let _la: number;
		try {
			this.state = 1846;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__216:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1842;
				this.match(mtgParser.T__216);
				}
				break;
			case mtgParser.T__217:
			case mtgParser.T__218:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1843;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.T__217 || _la===mtgParser.T__218) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1844;
				this.match(mtgParser.SPACE);
				this.state = 1845;
				this.match(mtgParser.T__216);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTokenDescription(): CreateTokenDescriptionContext {
		let _localctx: CreateTokenDescriptionContext = new CreateTokenDescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, mtgParser.RULE_createTokenDescription);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1848;
			this.englishNumber();
			this.state = 1849;
			this.match(mtgParser.SPACE);
			this.state = 1850;
			this.pt();
			this.state = 1851;
			this.match(mtgParser.SPACE);
			this.state = 1852;
			this.color(0);
			this.state = 1853;
			this.match(mtgParser.SPACE);
			this.state = 1854;
			this.permanentType(0);
			this.state = 1855;
			this.match(mtgParser.SPACE);
			{
			this.state = 1856;
			this.match(mtgParser.T__129);
			this.state = 1858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				{
				this.state = 1857;
				this.match(mtgParser.T__79);
				}
				break;
			}
			}
			this.state = 1862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,123,this._ctx) ) {
			case 1:
				{
				this.state = 1860;
				this.match(mtgParser.SPACE);
				this.state = 1861;
				this.withClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public color(): ColorContext;
	public color(_p: number): ColorContext;
	@RuleVersion(0)
	public color(_p?: number): ColorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ColorContext = new ColorContext(this._ctx, _parentState);
		let _prevctx: ColorContext = _localctx;
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, mtgParser.RULE_color, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1873;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__219:
				{
				this.state = 1865;
				this.match(mtgParser.T__219);
				}
				break;
			case mtgParser.T__220:
				{
				this.state = 1866;
				this.match(mtgParser.T__220);
				}
				break;
			case mtgParser.T__221:
				{
				this.state = 1867;
				this.match(mtgParser.T__221);
				}
				break;
			case mtgParser.T__222:
				{
				this.state = 1868;
				this.match(mtgParser.T__222);
				}
				break;
			case mtgParser.T__223:
				{
				this.state = 1869;
				this.match(mtgParser.T__223);
				}
				break;
			case mtgParser.T__224:
				{
				this.state = 1870;
				this.match(mtgParser.T__224);
				}
				break;
			case mtgParser.T__225:
				{
				this.state = 1871;
				this.match(mtgParser.T__225);
				}
				break;
			case mtgParser.T__226:
				{
				this.state = 1872;
				this.match(mtgParser.T__226);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1882;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,125,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ColorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_color);
					this.state = 1875;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1876;
					this.match(mtgParser.SPACE);
					this.state = 1877;
					this.match(mtgParser.T__63);
					this.state = 1878;
					this.match(mtgParser.SPACE);
					this.state = 1879;
					this.color(2);
					}
					} 
				}
				this.state = 1884;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,125,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pt(): PtContext {
		let _localctx: PtContext = new PtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, mtgParser.RULE_pt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1885;
			this.match(mtgParser.NUMBER);
			this.state = 1886;
			this.match(mtgParser.T__227);
			this.state = 1887;
			this.match(mtgParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ptModification(): PtModificationContext {
		let _localctx: PtModificationContext = new PtModificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, mtgParser.RULE_ptModification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1889;
			this.match(mtgParser.PLUSMINUS);
			this.state = 1890;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.XX || _la===mtgParser.NUMBER) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1891;
			this.match(mtgParser.T__227);
			this.state = 1892;
			this.match(mtgParser.PLUSMINUS);
			this.state = 1893;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.XX || _la===mtgParser.NUMBER) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numberDefinition(): NumberDefinitionContext {
		let _localctx: NumberDefinitionContext = new NumberDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, mtgParser.RULE_numberDefinition);
		let _la: number;
		try {
			this.state = 1908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,127,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1895;
				this.itsPossessive();
				this.state = 1896;
				this.match(mtgParser.SPACE);
				this.state = 1897;
				this.numericalCharacteristic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1899;
				this.match(mtgParser.THE);
				this.state = 1900;
				this.match(mtgParser.SPACE);
				this.state = 1903;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__228) {
					{
					this.state = 1901;
					this.match(mtgParser.T__228);
					this.state = 1902;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1905;
				this.match(mtgParser.T__229);
				this.state = 1906;
				this.match(mtgParser.SPACE);
				this.state = 1907;
				this.object(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, mtgParser.RULE_withClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1910;
			this.match(mtgParser.T__163);
			this.state = 1911;
			this.match(mtgParser.SPACE);
			this.state = 1912;
			this.withClauseInner();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withClauseInner(): WithClauseInnerContext {
		let _localctx: WithClauseInnerContext = new WithClauseInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, mtgParser.RULE_withClauseInner);
		let _la: number;
		try {
			this.state = 1947;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__211:
			case mtgParser.T__212:
			case mtgParser.T__213:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1914;
				this.numericalCharacteristic();
				this.state = 1915;
				this.match(mtgParser.SPACE);
				this.state = 1916;
				this.numericalComparison();
				}
				break;
			case mtgParser.THE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1918;
				this.match(mtgParser.THE);
				this.state = 1919;
				this.match(mtgParser.SPACE);
				this.state = 1920;
				this.match(mtgParser.T__230);
				this.state = 1921;
				this.match(mtgParser.SPACE);
				this.state = 1922;
				this.numericalCharacteristic();
				this.state = 1923;
				this.match(mtgParser.SPACE);
				this.state = 1924;
				this.match(mtgParser.T__231);
				this.state = 1925;
				this.match(mtgParser.SPACE);
				this.state = 1926;
				this.object(0);
				}
				break;
			case mtgParser.T__232:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1928;
				this.match(mtgParser.T__232);
				this.state = 1929;
				this.match(mtgParser.SPACE);
				this.state = 1930;
				this.numericalNumber();
				this.state = 1931;
				this.match(mtgParser.SPACE);
				this.state = 1932;
				this.match(mtgParser.T__63);
				this.state = 1933;
				this.match(mtgParser.SPACE);
				this.state = 1934;
				this.numericalNumber();
				}
				break;
			case mtgParser.T__234:
			case mtgParser.T__235:
			case mtgParser.T__236:
			case mtgParser.PLUSMINUS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1936;
				this.counterKind();
				this.state = 1937;
				this.match(mtgParser.SPACE);
				this.state = 1938;
				this.match(mtgParser.COUNTER);
				this.state = 1939;
				this.match(mtgParser.T__79);
				this.state = 1940;
				this.match(mtgParser.SPACE);
				this.state = 1941;
				this.match(mtgParser.T__80);
				this.state = 1942;
				this.match(mtgParser.SPACE);
				this.state = 1943;
				_la = this._input.LA(1);
				if ( !(_la===mtgParser.IT || _la===mtgParser.THEM) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case mtgParser.T__233:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1945;
				this.match(mtgParser.T__233);
				}
				break;
			case mtgParser.T__6:
			case mtgParser.T__7:
			case mtgParser.T__203:
			case mtgParser.T__204:
			case mtgParser.T__206:
			case mtgParser.FLASH:
			case mtgParser.MENTOR:
			case mtgParser.VIGILANCE:
			case mtgParser.FLYING:
			case mtgParser.LIFELINK:
			case mtgParser.JUMPSTART:
			case mtgParser.DEFENDER:
			case mtgParser.HASTE:
			case mtgParser.TRAMPLE:
			case mtgParser.DEATHTOUCH:
			case mtgParser.MENACE:
			case mtgParser.FIRSTSTRIKE:
			case mtgParser.DOUBLESTRIKE:
			case mtgParser.REACH:
			case mtgParser.EQUIP:
			case mtgParser.HEXPROOF:
			case mtgParser.INDESTRUCTIBLE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1946;
				this.acquiredAbility(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public counterKind(): CounterKindContext {
		let _localctx: CounterKindContext = new CounterKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, mtgParser.RULE_counterKind);
		try {
			this.state = 1953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.PLUSMINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1949;
				this.ptModification();
				}
				break;
			case mtgParser.T__234:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1950;
				this.match(mtgParser.T__234);
				}
				break;
			case mtgParser.T__235:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1951;
				this.match(mtgParser.T__235);
				}
				break;
			case mtgParser.T__236:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1952;
				this.match(mtgParser.T__236);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dealsWhat(): DealsWhatContext {
		let _localctx: DealsWhatContext = new DealsWhatContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, mtgParser.RULE_dealsWhat);
		let _la: number;
		try {
			this.state = 2002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===mtgParser.T__218) {
					{
					this.state = 1955;
					this.match(mtgParser.T__218);
					this.state = 1956;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 1959;
				this.match(mtgParser.T__216);
				this.state = 1960;
				this.match(mtgParser.SPACE);
				this.state = 1961;
				this.match(mtgParser.T__71);
				this.state = 1962;
				this.match(mtgParser.SPACE);
				this.state = 1963;
				this.damageRecipient();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1964;
				this.numericalNumber();
				this.state = 1965;
				this.match(mtgParser.SPACE);
				this.state = 1966;
				this.match(mtgParser.T__216);
				this.state = 1967;
				this.match(mtgParser.SPACE);
				this.state = 1968;
				this.match(mtgParser.T__71);
				this.state = 1969;
				this.match(mtgParser.SPACE);
				this.state = 1970;
				this.damageRecipient();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1972;
				this.match(mtgParser.T__216);
				this.state = 1973;
				this.match(mtgParser.SPACE);
				this.state = 1974;
				this.match(mtgParser.T__70);
				this.state = 1975;
				this.match(mtgParser.SPACE);
				this.state = 1976;
				this.match(mtgParser.T__71);
				this.state = 1977;
				this.match(mtgParser.SPACE);
				this.state = 1978;
				this.numberDefinition();
				this.state = 1979;
				this.match(mtgParser.SPACE);
				this.state = 1980;
				this.match(mtgParser.T__71);
				this.state = 1981;
				this.match(mtgParser.SPACE);
				this.state = 1982;
				this.damageRecipient();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1984;
				this.match(mtgParser.T__216);
				this.state = 1985;
				this.match(mtgParser.SPACE);
				this.state = 1986;
				this.match(mtgParser.T__71);
				this.state = 1987;
				this.match(mtgParser.SPACE);
				this.state = 1988;
				this.damageRecipient();
				this.state = 1989;
				this.match(mtgParser.SPACE);
				this.state = 1990;
				this.match(mtgParser.T__70);
				this.state = 1991;
				this.match(mtgParser.SPACE);
				this.state = 1992;
				this.match(mtgParser.T__71);
				this.state = 1993;
				this.match(mtgParser.SPACE);
				this.state = 1994;
				this.numberDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1996;
				this.numericalNumber();
				this.state = 1997;
				this.match(mtgParser.SPACE);
				this.state = 1998;
				this.match(mtgParser.T__216);
				this.state = 1999;
				this.match(mtgParser.SPACE);
				this.state = 2000;
				this.divideAmongDamageTargets();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public damageRecipient(): DamageRecipientContext {
		let _localctx: DamageRecipientContext = new DamageRecipientContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, mtgParser.RULE_damageRecipient);
		try {
			this.state = 2018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2004;
				this.object(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2005;
				this.player(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2006;
				this.match(mtgParser.T__237);
				this.state = 2007;
				this.match(mtgParser.SPACE);
				this.state = 2008;
				this.match(mtgParser.TARGET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2009;
				this.match(mtgParser.TARGET);
				this.state = 2010;
				this.match(mtgParser.SPACE);
				this.state = 2011;
				this.damageRecipient();
				this.state = 2012;
				this.match(mtgParser.SPACE);
				this.state = 2013;
				this.match(mtgParser.T__96);
				this.state = 2014;
				this.match(mtgParser.SPACE);
				this.state = 2015;
				this.damageRecipient();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2017;
				this.match(mtgParser.T__238);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public divideAmongDamageTargets(): DivideAmongDamageTargetsContext {
		let _localctx: DivideAmongDamageTargetsContext = new DivideAmongDamageTargetsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, mtgParser.RULE_divideAmongDamageTargets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this.match(mtgParser.T__239);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public englishNumber(): EnglishNumberContext {
		let _localctx: EnglishNumberContext = new EnglishNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, mtgParser.RULE_englishNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2022;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__2 || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (mtgParser.T__240 - 241)) | (1 << (mtgParser.T__241 - 241)) | (1 << (mtgParser.T__242 - 241)) | (1 << (mtgParser.T__243 - 241)) | (1 << (mtgParser.T__244 - 241)) | (1 << (mtgParser.T__245 - 241)) | (1 << (mtgParser.T__246 - 241)))) !== 0) || _la===mtgParser.XX || _la===mtgParser.INDEFINITE_ARTICLE_A || _la===mtgParser.INDEFINITE_ARTICLE_AN) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numericalNumber(): NumericalNumberContext {
		let _localctx: NumericalNumberContext = new NumericalNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, mtgParser.RULE_numericalNumber);
		try {
			this.state = 2027;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,133,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2024;
				this.match(mtgParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2025;
				this.match(mtgParser.T__247);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2026;
				this.number();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numericalComparison(): NumericalComparisonContext {
		let _localctx: NumericalComparisonContext = new NumericalComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, mtgParser.RULE_numericalComparison);
		try {
			this.state = 2048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,134,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2029;
				this.number();
				this.state = 2030;
				this.match(mtgParser.SPACE);
				this.state = 2031;
				this.match(mtgParser.T__96);
				this.state = 2032;
				this.match(mtgParser.SPACE);
				this.state = 2033;
				this.match(mtgParser.T__248);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2035;
				this.number();
				this.state = 2036;
				this.match(mtgParser.SPACE);
				this.state = 2037;
				this.match(mtgParser.T__96);
				this.state = 2038;
				this.match(mtgParser.SPACE);
				this.state = 2039;
				this.match(mtgParser.T__184);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2041;
				this.match(mtgParser.T__249);
				this.state = 2042;
				this.match(mtgParser.SPACE);
				this.state = 2043;
				this.numberDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2044;
				this.match(mtgParser.T__250);
				this.state = 2045;
				this.match(mtgParser.SPACE);
				this.state = 2046;
				this.numberDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2047;
				this.number();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, mtgParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2050;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.XX || _la===mtgParser.NUMBER) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public countableCount(): CountableCountContext {
		let _localctx: CountableCountContext = new CountableCountContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, mtgParser.RULE_countableCount);
		try {
			this.state = 2068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,135,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2052;
				this.match(mtgParser.T__251);
				this.state = 2053;
				this.match(mtgParser.SPACE);
				this.state = 2054;
				this.englishNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2055;
				this.englishNumber();
				this.state = 2056;
				this.match(mtgParser.SPACE);
				this.state = 2057;
				this.match(mtgParser.T__252);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2059;
				this.match(mtgParser.T__253);
				this.state = 2060;
				this.match(mtgParser.SPACE);
				this.state = 2061;
				this.englishNumber();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2062;
				this.match(mtgParser.T__254);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2063;
				this.match(mtgParser.T__255);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2064;
				this.match(mtgParser.T__256);
				this.state = 2065;
				this.match(mtgParser.SPACE);
				this.state = 2066;
				this.englishNumber();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2067;
				this.englishNumber();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cantClauseInner(): CantClauseInnerContext {
		let _localctx: CantClauseInnerContext = new CantClauseInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, mtgParser.RULE_cantClauseInner);
		try {
			this.state = 2082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__175:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2070;
				this.match(mtgParser.T__175);
				}
				break;
			case mtgParser.T__257:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2071;
				this.match(mtgParser.T__257);
				}
				break;
			case mtgParser.T__258:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2072;
				this.match(mtgParser.T__258);
				}
				break;
			case mtgParser.T__259:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2073;
				this.match(mtgParser.T__259);
				}
				break;
			case mtgParser.T__260:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2074;
				this.match(mtgParser.T__260);
				}
				break;
			case mtgParser.T__261:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2075;
				this.match(mtgParser.T__261);
				}
				break;
			case mtgParser.T__262:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2076;
				this.match(mtgParser.T__262);
				this.state = 2077;
				this.match(mtgParser.SPACE);
				this.state = 2078;
				this.englishNumber();
				this.state = 2079;
				this.match(mtgParser.SPACE);
				this.state = 2080;
				this.match(mtgParser.CREATURE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public zone(): ZoneContext {
		let _localctx: ZoneContext = new ZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, mtgParser.RULE_zone);
		try {
			this.state = 2093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2086;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,137,this._ctx) ) {
				case 1:
					{
					this.state = 2084;
					this.playersPossessive();
					}
					break;

				case 2:
					{
					this.state = 2085;
					this.match(mtgParser.INDEFINITE_ARTICLE_A);
					}
					break;
				}
				this.state = 2088;
				this.match(mtgParser.SPACE);
				this.state = 2089;
				this.actualZone(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2090;
				this.match(mtgParser.EXILE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2091;
				this.match(mtgParser.THEBATTLEFIELD);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2092;
				this.match(mtgParser.IT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public actualZone(): ActualZoneContext;
	public actualZone(_p: number): ActualZoneContext;
	@RuleVersion(0)
	public actualZone(_p?: number): ActualZoneContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ActualZoneContext = new ActualZoneContext(this._ctx, _parentState);
		let _prevctx: ActualZoneContext = _localctx;
		let _startState: number = 158;
		this.enterRecursionRule(_localctx, 158, mtgParser.RULE_actualZone, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2099;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__263:
				{
				this.state = 2096;
				this.match(mtgParser.T__263);
				}
				break;
			case mtgParser.T__264:
				{
				this.state = 2097;
				this.match(mtgParser.T__264);
				}
				break;
			case mtgParser.T__156:
				{
				this.state = 2098;
				this.match(mtgParser.T__156);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2127;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,143,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2125;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
					case 1:
						{
						_localctx = new ActualZoneContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_actualZone);
						this.state = 2101;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 2102;
						this.match(mtgParser.SPACE);
						this.state = 2103;
						this.match(mtgParser.T__96);
						this.state = 2104;
						this.match(mtgParser.SPACE);
						this.state = 2105;
						this.actualZone(4);
						}
						break;

					case 2:
						{
						_localctx = new ActualZoneContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_actualZone);
						this.state = 2106;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2107;
						this.match(mtgParser.SPACE);
						this.state = 2108;
						this.match(mtgParser.T__97);
						this.state = 2109;
						this.match(mtgParser.SPACE);
						this.state = 2110;
						this.actualZone(3);
						}
						break;

					case 3:
						{
						_localctx = new ActualZoneContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_actualZone);
						this.state = 2111;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 2112;
						this.match(mtgParser.T__79);
						}
						break;

					case 4:
						{
						_localctx = new ActualZoneContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_actualZone);
						this.state = 2113;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2121; 
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 2114;
								this.match(mtgParser.T__5);
								this.state = 2115;
								this.match(mtgParser.SPACE);
								this.state = 2118;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===mtgParser.T__63) {
									{
									this.state = 2116;
									this.match(mtgParser.T__63);
									this.state = 2117;
									this.match(mtgParser.SPACE);
									}
								}

								this.state = 2120;
								this.actualZone(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 2123; 
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,141,this._ctx);
						} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
						}
						break;
					}
					} 
				}
				this.state = 2129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,143,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public intoZone(): IntoZoneContext {
		let _localctx: IntoZoneContext = new IntoZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, mtgParser.RULE_intoZone);
		try {
			this.state = 2151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,144,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2130;
				this.match(mtgParser.T__265);
				this.state = 2131;
				this.match(mtgParser.SPACE);
				this.state = 2132;
				this.match(mtgParser.THEBATTLEFIELD);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2133;
				this.match(mtgParser.T__138);
				this.state = 2134;
				this.match(mtgParser.SPACE);
				this.state = 2135;
				this.zone();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2136;
				this.match(mtgParser.T__266);
				this.state = 2137;
				this.match(mtgParser.SPACE);
				this.state = 2138;
				this.zone();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2139;
				this.match(mtgParser.T__267);
				this.state = 2140;
				this.match(mtgParser.SPACE);
				this.state = 2141;
				this.zone();
				this.state = 2142;
				this.match(mtgParser.SPACE);
				this.state = 2143;
				this.match(mtgParser.T__268);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2145;
				this.match(mtgParser.T__267);
				this.state = 2146;
				this.match(mtgParser.SPACE);
				this.state = 2147;
				this.zone();
				this.state = 2148;
				this.match(mtgParser.SPACE);
				this.state = 2149;
				this.match(mtgParser.T__269);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public inZone(): InZoneContext {
		let _localctx: InZoneContext = new InZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, mtgParser.RULE_inZone);
		try {
			this.state = 2159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__80:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2153;
				this.match(mtgParser.T__80);
				this.state = 2154;
				this.match(mtgParser.SPACE);
				this.state = 2155;
				this.match(mtgParser.THEBATTLEFIELD);
				}
				break;
			case mtgParser.T__105:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2156;
				this.match(mtgParser.T__105);
				this.state = 2157;
				this.match(mtgParser.SPACE);
				this.state = 2158;
				this.zone();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fromZone(): FromZoneContext {
		let _localctx: FromZoneContext = new FromZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, mtgParser.RULE_fromZone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2161;
			this.match(mtgParser.T__106);
			this.state = 2162;
			this.match(mtgParser.SPACE);
			this.state = 2163;
			this.zone();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public n(): NContext;
	public n(_p: number): NContext;
	@RuleVersion(0)
	public n(_p?: number): NContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NContext = new NContext(this._ctx, _parentState);
		let _prevctx: NContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, mtgParser.RULE_n, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,148,this._ctx) ) {
			case 1:
				{
				this.state = 2166;
				this.match(mtgParser.PERMANENT);
				}
				break;

			case 2:
				{
				this.state = 2170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (mtgParser.T__271 - 272)) | (1 << (mtgParser.T__272 - 272)) | (1 << (mtgParser.T__273 - 272)) | (1 << (mtgParser.T__274 - 272)) | (1 << (mtgParser.T__275 - 272)) | (1 << (mtgParser.T__276 - 272)) | (1 << (mtgParser.T__277 - 272)) | (1 << (mtgParser.T__278 - 272)) | (1 << (mtgParser.T__279 - 272)) | (1 << (mtgParser.T__280 - 272)) | (1 << (mtgParser.T__281 - 272)) | (1 << (mtgParser.T__282 - 272)) | (1 << (mtgParser.T__283 - 272)) | (1 << (mtgParser.T__284 - 272)) | (1 << (mtgParser.T__285 - 272)) | (1 << (mtgParser.T__286 - 272)) | (1 << (mtgParser.T__287 - 272)) | (1 << (mtgParser.T__288 - 272)) | (1 << (mtgParser.T__289 - 272)) | (1 << (mtgParser.T__290 - 272)) | (1 << (mtgParser.T__293 - 272)))) !== 0) || _la===mtgParser.CREATURE || _la===mtgParser.LEGENDARY || _la===mtgParser.INSTANT || _la===mtgParser.SORCERY || _la===mtgParser.LAND) {
					{
					this.state = 2167;
					this.anyType();
					this.state = 2168;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 2172;
				this.match(mtgParser.SPELL);
				}
				break;

			case 3:
				{
				this.state = 2176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (mtgParser.T__271 - 272)) | (1 << (mtgParser.T__272 - 272)) | (1 << (mtgParser.T__273 - 272)) | (1 << (mtgParser.T__274 - 272)) | (1 << (mtgParser.T__275 - 272)) | (1 << (mtgParser.T__276 - 272)) | (1 << (mtgParser.T__277 - 272)) | (1 << (mtgParser.T__278 - 272)) | (1 << (mtgParser.T__279 - 272)) | (1 << (mtgParser.T__280 - 272)) | (1 << (mtgParser.T__281 - 272)) | (1 << (mtgParser.T__282 - 272)) | (1 << (mtgParser.T__283 - 272)) | (1 << (mtgParser.T__284 - 272)) | (1 << (mtgParser.T__285 - 272)) | (1 << (mtgParser.T__286 - 272)) | (1 << (mtgParser.T__287 - 272)) | (1 << (mtgParser.T__288 - 272)) | (1 << (mtgParser.T__289 - 272)) | (1 << (mtgParser.T__290 - 272)) | (1 << (mtgParser.T__293 - 272)))) !== 0) || _la===mtgParser.CREATURE || _la===mtgParser.LEGENDARY || _la===mtgParser.INSTANT || _la===mtgParser.SORCERY || _la===mtgParser.LAND) {
					{
					this.state = 2173;
					this.anyType();
					this.state = 2174;
					this.match(mtgParser.SPACE);
					}
				}

				this.state = 2178;
				this.match(mtgParser.CARD);
				}
				break;

			case 4:
				{
				this.state = 2179;
				this.permanentType(0);
				}
				break;

			case 5:
				{
				this.state = 2180;
				this.match(mtgParser.PERMANENT);
				this.state = 2181;
				this.match(mtgParser.SPACE);
				this.state = 2182;
				this.match(mtgParser.CARD);
				}
				break;

			case 6:
				{
				this.state = 2183;
				this.match(mtgParser.T__129);
				}
				break;

			case 7:
				{
				this.state = 2184;
				this.match(mtgParser.T__270);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2191;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new NContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_n);
					this.state = 2187;
					if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
					this.state = 2188;
					this.match(mtgParser.T__79);
					}
					} 
				}
				this.state = 2193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public permanentType(): PermanentTypeContext;
	public permanentType(_p: number): PermanentTypeContext;
	@RuleVersion(0)
	public permanentType(_p?: number): PermanentTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PermanentTypeContext = new PermanentTypeContext(this._ctx, _parentState);
		let _prevctx: PermanentTypeContext = _localctx;
		let _startState: number = 168;
		this.enterRecursionRule(_localctx, 168, mtgParser.RULE_permanentType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__271:
				{
				this.state = 2195;
				this.match(mtgParser.T__271);
				}
				break;
			case mtgParser.CREATURE:
				{
				this.state = 2196;
				this.match(mtgParser.CREATURE);
				}
				break;
			case mtgParser.T__272:
				{
				this.state = 2197;
				this.match(mtgParser.T__272);
				}
				break;
			case mtgParser.LAND:
				{
				this.state = 2198;
				this.match(mtgParser.LAND);
				}
				break;
			case mtgParser.T__273:
				{
				this.state = 2199;
				this.match(mtgParser.T__273);
				}
				break;
			case mtgParser.T__274:
				{
				this.state = 2200;
				this.match(mtgParser.T__274);
				}
				break;
			case mtgParser.T__275:
				{
				this.state = 2201;
				this.match(mtgParser.T__275);
				}
				break;
			case mtgParser.T__276:
				{
				this.state = 2202;
				this.match(mtgParser.T__276);
				}
				break;
			case mtgParser.T__277:
				{
				this.state = 2203;
				this.match(mtgParser.T__277);
				}
				break;
			case mtgParser.T__278:
				{
				this.state = 2204;
				this.match(mtgParser.T__278);
				}
				break;
			case mtgParser.T__279:
				{
				this.state = 2205;
				this.match(mtgParser.T__279);
				}
				break;
			case mtgParser.T__280:
				{
				this.state = 2206;
				this.match(mtgParser.T__280);
				}
				break;
			case mtgParser.T__281:
				{
				this.state = 2207;
				this.match(mtgParser.T__281);
				}
				break;
			case mtgParser.T__282:
				{
				this.state = 2208;
				this.match(mtgParser.T__282);
				}
				break;
			case mtgParser.T__283:
				{
				this.state = 2209;
				this.match(mtgParser.T__283);
				}
				break;
			case mtgParser.T__284:
				{
				this.state = 2210;
				this.match(mtgParser.T__284);
				}
				break;
			case mtgParser.T__285:
				{
				this.state = 2211;
				this.match(mtgParser.T__285);
				}
				break;
			case mtgParser.T__286:
				{
				this.state = 2212;
				this.match(mtgParser.T__286);
				}
				break;
			case mtgParser.T__287:
				{
				this.state = 2213;
				this.match(mtgParser.T__287);
				}
				break;
			case mtgParser.T__288:
				{
				this.state = 2214;
				this.match(mtgParser.T__288);
				}
				break;
			case mtgParser.T__289:
				{
				this.state = 2215;
				this.match(mtgParser.T__289);
				}
				break;
			case mtgParser.T__290:
				{
				this.state = 2216;
				this.match(mtgParser.T__290);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,152,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2227;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,151,this._ctx) ) {
					case 1:
						{
						_localctx = new PermanentTypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_permanentType);
						this.state = 2219;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2220;
						this.match(mtgParser.SPACE);
						this.state = 2221;
						this.permanentType(3);
						}
						break;

					case 2:
						{
						_localctx = new PermanentTypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_permanentType);
						this.state = 2222;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2223;
						this.match(mtgParser.SPACE);
						this.state = 2224;
						this.match(mtgParser.T__96);
						this.state = 2225;
						this.match(mtgParser.SPACE);
						this.state = 2226;
						this.permanentType(2);
						}
						break;
					}
					} 
				}
				this.state = 2231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,152,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, mtgParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2232;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__92 || _la===mtgParser.T__291 || _la===mtgParser.T__292) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public anyType(): AnyTypeContext {
		let _localctx: AnyTypeContext = new AnyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, mtgParser.RULE_anyType);
		try {
			this.state = 2241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.CREATURE:
			case mtgParser.LAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2234;
				this.permanentType(0);
				}
				break;
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2235;
				this.spellType(0);
				}
				break;
			case mtgParser.LEGENDARY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2236;
				this.match(mtgParser.LEGENDARY);
				}
				break;
			case mtgParser.T__293:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2237;
				this.match(mtgParser.T__293);
				this.state = 2238;
				this.anyType();
				this.state = 2239;
				this.match(mtgParser.T__294);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public spellType(): SpellTypeContext;
	public spellType(_p: number): SpellTypeContext;
	@RuleVersion(0)
	public spellType(_p?: number): SpellTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SpellTypeContext = new SpellTypeContext(this._ctx, _parentState);
		let _prevctx: SpellTypeContext = _localctx;
		let _startState: number = 174;
		this.enterRecursionRule(_localctx, 174, mtgParser.RULE_spellType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.INSTANT:
				{
				this.state = 2244;
				this.match(mtgParser.INSTANT);
				}
				break;
			case mtgParser.SORCERY:
				{
				this.state = 2245;
				this.match(mtgParser.SORCERY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,156,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 2258;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,155,this._ctx) ) {
					case 1:
						{
						_localctx = new SpellTypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_spellType);
						this.state = 2248;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 2249;
						this.match(mtgParser.SPACE);
						this.state = 2250;
						this.match(mtgParser.T__96);
						this.state = 2251;
						this.match(mtgParser.SPACE);
						this.state = 2252;
						this.spellType(3);
						}
						break;

					case 2:
						{
						_localctx = new SpellTypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, mtgParser.RULE_spellType);
						this.state = 2253;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 2254;
						this.match(mtgParser.SPACE);
						this.state = 2255;
						this.match(mtgParser.T__63);
						this.state = 2256;
						this.match(mtgParser.SPACE);
						this.state = 2257;
						this.spellType(2);
						}
						break;
					}
					} 
				}
				this.state = 2262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,156,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public asLongAsClause(): AsLongAsClauseContext {
		let _localctx: AsLongAsClauseContext = new AsLongAsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, mtgParser.RULE_asLongAsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.match(mtgParser.AS);
			this.state = 2264;
			this.match(mtgParser.SPACE);
			this.state = 2265;
			this.match(mtgParser.T__295);
			this.state = 2266;
			this.match(mtgParser.SPACE);
			this.state = 2267;
			this.match(mtgParser.AS);
			this.state = 2268;
			this.match(mtgParser.SPACE);
			this.state = 2269;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doSomethingInsteadOfSomethingElse(): DoSomethingInsteadOfSomethingElseContext {
		let _localctx: DoSomethingInsteadOfSomethingElseContext = new DoSomethingInsteadOfSomethingElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, mtgParser.RULE_doSomethingInsteadOfSomethingElse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2271;
			this.s(0);
			this.state = 2272;
			this.match(mtgParser.SPACE);
			this.state = 2273;
			this.match(mtgParser.T__296);
			this.state = 2274;
			this.match(mtgParser.SPACE);
			this.state = 2275;
			this.match(mtgParser.IT);
			this.state = 2276;
			this.match(mtgParser.SPACE);
			this.state = 2277;
			this.intoZone();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public costs(): CostsContext {
		let _localctx: CostsContext = new CostsContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, mtgParser.RULE_costs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.cost();
			this.state = 2285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===mtgParser.T__5) {
				{
				{
				this.state = 2280;
				this.match(mtgParser.T__5);
				this.state = 2281;
				this.match(mtgParser.SPACE);
				this.state = 2282;
				this.cost();
				}
				}
				this.state = 2287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cost(): CostContext {
		let _localctx: CostContext = new CostContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, mtgParser.RULE_cost);
		try {
			this.state = 2293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__297:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2288;
				this.match(mtgParser.T__297);
				}
				break;
			case mtgParser.T__298:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2289;
				this.match(mtgParser.T__298);
				}
				break;
			case mtgParser.T__2:
			case mtgParser.T__62:
			case mtgParser.T__65:
			case mtgParser.T__72:
			case mtgParser.T__76:
			case mtgParser.T__84:
			case mtgParser.T__92:
			case mtgParser.T__93:
			case mtgParser.T__94:
			case mtgParser.T__95:
			case mtgParser.T__109:
			case mtgParser.T__119:
			case mtgParser.T__122:
			case mtgParser.T__123:
			case mtgParser.T__124:
			case mtgParser.T__127:
			case mtgParser.T__128:
			case mtgParser.T__129:
			case mtgParser.T__130:
			case mtgParser.T__131:
			case mtgParser.T__132:
			case mtgParser.T__133:
			case mtgParser.T__134:
			case mtgParser.T__144:
			case mtgParser.T__145:
			case mtgParser.T__149:
			case mtgParser.T__202:
			case mtgParser.T__209:
			case mtgParser.T__210:
			case mtgParser.T__219:
			case mtgParser.T__220:
			case mtgParser.T__221:
			case mtgParser.T__222:
			case mtgParser.T__223:
			case mtgParser.T__224:
			case mtgParser.T__225:
			case mtgParser.T__226:
			case mtgParser.T__240:
			case mtgParser.T__241:
			case mtgParser.T__242:
			case mtgParser.T__243:
			case mtgParser.T__244:
			case mtgParser.T__245:
			case mtgParser.T__246:
			case mtgParser.T__251:
			case mtgParser.T__253:
			case mtgParser.T__254:
			case mtgParser.T__255:
			case mtgParser.T__256:
			case mtgParser.T__270:
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.T__293:
			case mtgParser.XX:
			case mtgParser.PUT:
			case mtgParser.NUMBER:
			case mtgParser.SACRIFICE:
			case mtgParser.DESTROY:
			case mtgParser.CREATURE:
			case mtgParser.EXILE:
			case mtgParser.TARGET:
			case mtgParser.LEGENDARY:
			case mtgParser.CREATE:
			case mtgParser.TAP:
			case mtgParser.YOU:
			case mtgParser.PAY:
			case mtgParser.SPACE:
			case mtgParser.ANOTHER:
			case mtgParser.ENCHANTED:
			case mtgParser.SURVEIL:
			case mtgParser.COUNTER:
			case mtgParser.SHUFFLE:
			case mtgParser.DRAW:
			case mtgParser.RETURN:
			case mtgParser.EACH:
			case mtgParser.ALL:
			case mtgParser.PREVENT:
			case mtgParser.ADD:
			case mtgParser.AS:
			case mtgParser.DISCARD:
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
			case mtgParser.LOOK:
			case mtgParser.REVEAL:
			case mtgParser.COPY:
			case mtgParser.CAST:
			case mtgParser.PLAY:
			case mtgParser.AT:
			case mtgParser.IF:
			case mtgParser.THE:
			case mtgParser.IT_S:
			case mtgParser.ITS:
			case mtgParser.THIS:
			case mtgParser.THAT:
			case mtgParser.PERMANENT:
			case mtgParser.SPELL:
			case mtgParser.CARD:
			case mtgParser.INDEFINITE_ARTICLE_A:
			case mtgParser.INDEFINITE_ARTICLE_AN:
			case mtgParser.FOR:
			case mtgParser.CHOOSE:
			case mtgParser.THESE:
			case mtgParser.THOSE:
			case mtgParser.ACTIVATED:
			case mtgParser.IT:
			case mtgParser.SEARCH:
			case mtgParser.THEM:
			case mtgParser.UNTAP:
			case mtgParser.THEY:
			case mtgParser.SWITCH:
			case mtgParser.EQUIPPED:
			case mtgParser.REMOVE:
			case mtgParser.GAINS:
			case mtgParser.GAIN:
			case mtgParser.LAND:
			case mtgParser.SPEND:
			case mtgParser.TAKE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2290;
				this.s(0);
				}
				break;
			case mtgParser.T__299:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2291;
				this.manacost();
				}
				break;
			case mtgParser.PLUSMINUS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2292;
				this.loyaltyCost();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public loyaltyCost(): LoyaltyCostContext {
		let _localctx: LoyaltyCostContext = new LoyaltyCostContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, mtgParser.RULE_loyaltyCost);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.match(mtgParser.PLUSMINUS);
			this.state = 2296;
			this.match(mtgParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public manacost(): ManacostContext {
		let _localctx: ManacostContext = new ManacostContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, mtgParser.RULE_manacost);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2299; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2298;
					this.manaGroup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2301; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,159,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public manaGroup(): ManaGroupContext {
		let _localctx: ManaGroupContext = new ManaGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, mtgParser.RULE_manaGroup);
		let _la: number;
		try {
			this.state = 2340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,166,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2303;
				this.match(mtgParser.T__299);
				this.state = 2306;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
				case 1:
					{
					this.state = 2304;
					this.match(mtgParser.NUMBER);
					}
					break;

				case 2:
					{
					this.state = 2305;
					this.number();
					}
					break;
				}
				this.state = 2311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__300) {
					{
					{
					this.state = 2308;
					this.match(mtgParser.T__300);
					}
					}
					this.state = 2313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__301) {
					{
					{
					this.state = 2314;
					this.match(mtgParser.T__301);
					}
					}
					this.state = 2319;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__302) {
					{
					{
					this.state = 2320;
					this.match(mtgParser.T__302);
					}
					}
					this.state = 2325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__303) {
					{
					{
					this.state = 2326;
					this.match(mtgParser.T__303);
					}
					}
					this.state = 2331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===mtgParser.T__304) {
					{
					{
					this.state = 2332;
					this.match(mtgParser.T__304);
					}
					}
					this.state = 2337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2338;
				this.match(mtgParser.T__305);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2339;
				this.manaSymbol();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public manaSymbols(): ManaSymbolsContext {
		let _localctx: ManaSymbolsContext = new ManaSymbolsContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, mtgParser.RULE_manaSymbols);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2343; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2342;
					this.manaSymbol();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2345; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,167,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public manaSymbol(): ManaSymbolContext {
		let _localctx: ManaSymbolContext = new ManaSymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, mtgParser.RULE_manaSymbol);
		try {
			this.state = 2357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,168,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2347;
				this.match(mtgParser.T__299);
				this.state = 2348;
				this.manaLetter();
				this.state = 2349;
				this.match(mtgParser.T__227);
				this.state = 2350;
				this.manaLetter();
				this.state = 2351;
				this.match(mtgParser.T__305);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2353;
				this.match(mtgParser.T__299);
				this.state = 2354;
				this.manaLetter();
				this.state = 2355;
				this.match(mtgParser.T__305);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public manaLetter(): ManaLetterContext {
		let _localctx: ManaLetterContext = new ManaLetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, mtgParser.RULE_manaLetter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2359;
			_la = this._input.LA(1);
			if ( !(((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (mtgParser.T__300 - 301)) | (1 << (mtgParser.T__301 - 301)) | (1 << (mtgParser.T__302 - 301)) | (1 << (mtgParser.T__303 - 301)) | (1 << (mtgParser.T__304 - 301)) | (1 << (mtgParser.T__306 - 301)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qualifiedPartOfTurn(): QualifiedPartOfTurnContext {
		let _localctx: QualifiedPartOfTurnContext = new QualifiedPartOfTurnContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, mtgParser.RULE_qualifiedPartOfTurn);
		try {
			this.state = 2367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mtgParser.T__2:
			case mtgParser.T__76:
			case mtgParser.T__84:
			case mtgParser.T__92:
			case mtgParser.T__93:
			case mtgParser.T__94:
			case mtgParser.T__95:
			case mtgParser.T__109:
			case mtgParser.T__119:
			case mtgParser.T__122:
			case mtgParser.T__123:
			case mtgParser.T__124:
			case mtgParser.T__127:
			case mtgParser.T__128:
			case mtgParser.T__129:
			case mtgParser.T__130:
			case mtgParser.T__131:
			case mtgParser.T__132:
			case mtgParser.T__133:
			case mtgParser.T__134:
			case mtgParser.T__202:
			case mtgParser.T__219:
			case mtgParser.T__220:
			case mtgParser.T__221:
			case mtgParser.T__222:
			case mtgParser.T__223:
			case mtgParser.T__224:
			case mtgParser.T__225:
			case mtgParser.T__226:
			case mtgParser.T__240:
			case mtgParser.T__241:
			case mtgParser.T__242:
			case mtgParser.T__243:
			case mtgParser.T__244:
			case mtgParser.T__245:
			case mtgParser.T__246:
			case mtgParser.T__251:
			case mtgParser.T__253:
			case mtgParser.T__254:
			case mtgParser.T__255:
			case mtgParser.T__256:
			case mtgParser.T__270:
			case mtgParser.T__271:
			case mtgParser.T__272:
			case mtgParser.T__273:
			case mtgParser.T__274:
			case mtgParser.T__275:
			case mtgParser.T__276:
			case mtgParser.T__277:
			case mtgParser.T__278:
			case mtgParser.T__279:
			case mtgParser.T__280:
			case mtgParser.T__281:
			case mtgParser.T__282:
			case mtgParser.T__283:
			case mtgParser.T__284:
			case mtgParser.T__285:
			case mtgParser.T__286:
			case mtgParser.T__287:
			case mtgParser.T__288:
			case mtgParser.T__289:
			case mtgParser.T__290:
			case mtgParser.T__293:
			case mtgParser.XX:
			case mtgParser.NUMBER:
			case mtgParser.CREATURE:
			case mtgParser.TARGET:
			case mtgParser.LEGENDARY:
			case mtgParser.YOU:
			case mtgParser.SPACE:
			case mtgParser.ANOTHER:
			case mtgParser.ENCHANTED:
			case mtgParser.EACH:
			case mtgParser.ALL:
			case mtgParser.INSTANT:
			case mtgParser.SORCERY:
			case mtgParser.COPY:
			case mtgParser.AT:
			case mtgParser.THE:
			case mtgParser.ITS:
			case mtgParser.THIS:
			case mtgParser.THAT:
			case mtgParser.PERMANENT:
			case mtgParser.SPELL:
			case mtgParser.CARD:
			case mtgParser.INDEFINITE_ARTICLE_A:
			case mtgParser.INDEFINITE_ARTICLE_AN:
			case mtgParser.THESE:
			case mtgParser.THOSE:
			case mtgParser.IT:
			case mtgParser.THEM:
			case mtgParser.THEY:
			case mtgParser.EQUIPPED:
			case mtgParser.LAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2361;
				this.turnQualification();
				this.state = 2362;
				this.match(mtgParser.SPACE);
				this.state = 2363;
				this.partOfTurn();
				}
				break;
			case mtgParser.T__307:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2365;
				this.match(mtgParser.T__307);
				}
				break;
			case mtgParser.T__218:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2366;
				this.match(mtgParser.T__218);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public turnQualification(): TurnQualificationContext {
		let _localctx: TurnQualificationContext = new TurnQualificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, mtgParser.RULE_turnQualification);
		try {
			this.state = 2387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,172,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2371;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,170,this._ctx) ) {
				case 1:
					{
					this.state = 2369;
					this.playersPossessive();
					}
					break;

				case 2:
					{
					this.state = 2370;
					this.match(mtgParser.THE);
					}
					break;
				}
				this.state = 2375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,171,this._ctx) ) {
				case 1:
					{
					this.state = 2373;
					this.match(mtgParser.SPACE);
					this.state = 2374;
					this.match(mtgParser.T__308);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2377;
				this.match(mtgParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2378;
				this.match(mtgParser.EACH);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2379;
				this.match(mtgParser.THIS);
				this.state = 2380;
				this.match(mtgParser.SPACE);
				this.state = 2381;
				this.match(mtgParser.T__77);
				this.state = 2382;
				this.match(mtgParser.SAXON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2383;
				this.match(mtgParser.THAT);
				this.state = 2384;
				this.match(mtgParser.SPACE);
				this.state = 2385;
				this.match(mtgParser.T__77);
				this.state = 2386;
				this.match(mtgParser.SAXON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public partOfTurn(): PartOfTurnContext {
		let _localctx: PartOfTurnContext = new PartOfTurnContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, mtgParser.RULE_partOfTurn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2389;
			_la = this._input.LA(1);
			if ( !(_la===mtgParser.T__77 || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & ((1 << (mtgParser.T__309 - 310)) | (1 << (mtgParser.T__310 - 310)) | (1 << (mtgParser.T__311 - 310)) | (1 << (mtgParser.T__312 - 310)) | (1 << (mtgParser.T__313 - 310)) | (1 << (mtgParser.T__314 - 310)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public playersPossessive(): PlayersPossessiveContext {
		let _localctx: PlayersPossessiveContext = new PlayersPossessiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, mtgParser.RULE_playersPossessive);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2391;
				this.match(mtgParser.T__76);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2392;
				this.match(mtgParser.T__202);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2393;
				this.player(0);
				this.state = 2394;
				this.match(mtgParser.SAXON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2396;
				this.player(0);
				this.state = 2397;
				this.match(mtgParser.AP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public reminderText(): ReminderTextContext {
		let _localctx: ReminderTextContext = new ReminderTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, mtgParser.RULE_reminderText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2401;
			this.match(mtgParser.REMINDER_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 23:
			return this.additionalSentences_sempred(_localctx as AdditionalSentencesContext, predIndex);

		case 25:
			return this.s_sempred(_localctx as SContext, predIndex);

		case 26:
			return this.ss_sempred(_localctx as SsContext, predIndex);

		case 32:
			return this.player_sempred(_localctx as PlayerContext, predIndex);

		case 34:
			return this.object_sempred(_localctx as ObjectContext, predIndex);

		case 36:
			return this.pureObject_sempred(_localctx as PureObjectContext, predIndex);

		case 41:
			return this.imperative_sempred(_localctx as ImperativeContext, predIndex);

		case 42:
			return this.playerVerbPhrase_sempred(_localctx as PlayerVerbPhraseContext, predIndex);

		case 43:
			return this.objectVerbPhrase_sempred(_localctx as ObjectVerbPhraseContext, predIndex);

		case 50:
			return this.acquiredAbility_sempred(_localctx as AcquiredAbilityContext, predIndex);

		case 62:
			return this.color_sempred(_localctx as ColorContext, predIndex);

		case 79:
			return this.actualZone_sempred(_localctx as ActualZoneContext, predIndex);

		case 83:
			return this.n_sempred(_localctx as NContext, predIndex);

		case 84:
			return this.permanentType_sempred(_localctx as PermanentTypeContext, predIndex);

		case 87:
			return this.spellType_sempred(_localctx as SpellTypeContext, predIndex);
		}
		return true;
	}
	private additionalSentences_sempred(_localctx: AdditionalSentencesContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private s_sempred(_localctx: SContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private ss_sempred(_localctx: SsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);
		}
		return true;
	}
	private player_sempred(_localctx: PlayerContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private object_sempred(_localctx: ObjectContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}
	private pureObject_sempred(_localctx: PureObjectContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 7);

		case 11:
			return this.precpred(this._ctx, 6);

		case 12:
			return this.precpred(this._ctx, 1);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private imperative_sempred(_localctx: ImperativeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 7);

		case 17:
			return this.precpred(this._ctx, 6);

		case 18:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}
	private playerVerbPhrase_sempred(_localctx: PlayerVerbPhraseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 10);

		case 20:
			return this.precpred(this._ctx, 21);

		case 21:
			return this.precpred(this._ctx, 20);

		case 22:
			return this.precpred(this._ctx, 3);

		case 23:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private objectVerbPhrase_sempred(_localctx: ObjectVerbPhraseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 37);

		case 25:
			return this.precpred(this._ctx, 36);

		case 26:
			return this.precpred(this._ctx, 35);

		case 27:
			return this.precpred(this._ctx, 3);

		case 28:
			return this.precpred(this._ctx, 2);

		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private acquiredAbility_sempred(_localctx: AcquiredAbilityContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private color_sempred(_localctx: ColorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private actualZone_sempred(_localctx: ActualZoneContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 3);

		case 33:
			return this.precpred(this._ctx, 2);

		case 34:
			return this.precpred(this._ctx, 4);

		case 35:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private n_sempred(_localctx: NContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private permanentType_sempred(_localctx: PermanentTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.precpred(this._ctx, 2);

		case 38:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private spellType_sempred(_localctx: SpellTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.precpred(this._ctx, 2);

		case 40:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\u01A2\u0966\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x03"+
		"\x02\x07\x02\xD2\n\x02\f\x02\x0E\x02\xD5\v\x02\x03\x02\x03\x02\x06\x02"+
		"\xD9\n\x02\r\x02\x0E\x02\xDA\x03\x02\x07\x02\xDE\n\x02\f\x02\x0E\x02\xE1"+
		"\v\x02\x03\x02\x05\x02\xE4\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x05\x03\xEE\n\x03\x03\x04\x03\x04\x03\x04\x03"+
		"\x04\x03\x04\x07\x04\xF5\n\x04\f\x04\x0E\x04\xF8\v\x04\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05"+
		"\u0104\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05"+
		"\x07\u010D\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b"+
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03"+
		"\b\x03\b\x03\b\x05\b\u0126\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0136\n\v\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0140\n\f\x03\r\x03\r\x03"+
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u0147\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E"+
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0153\n\x10\x03"+
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0162\n\x11\x03\x12\x03\x12\x03\x12"+
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12"+
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0177"+
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15"+
		"\u0189\n\x15\x03\x16\x03\x16\x05\x16\u018D\n\x16\x03\x17\x03\x17\x05\x17"+
		"\u0191\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0197\n\x18\x03\x19"+
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u019F\n\x19\f\x19\x0E"+
		"\x19\u01A2\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01A8\n\x1A\x03"+
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05"+
		"\x1B\u01B3\n\x1B\x03\x1B\x05\x1B\u01B6\n\x1B\x03\x1B\x06\x1B\u01B9\n\x1B"+
		"\r\x1B\x0E\x1B\u01BA\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01C1\n\x1B"+
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01C8\n\x1B\f\x1B\x0E"+
		"\x1B\u01CB\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x05\x1C\u01F0\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01FB\n\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u020D\n\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0239\n\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C"+
		"\u0246\n\x1C\f\x1C\x0E\x1C\u0249\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D"+
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u025C\n\x1E\x03\x1F\x03\x1F\x03"+
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03"+
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03"+
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u027A"+
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F"+
		"\u028C\n\x1F\x03 \x03 \x05 \u0290\n \x03!\x03!\x03!\x03!\x05!\u0296\n"+
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03"+
		"\"\x03\"\x03\"\x03\"\x05\"\u02A7\n\"\x03\"\x03\"\x03\"\x07\"\u02AC\n\""+
		"\f\"\x0E\"\u02AF\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x05$\u02E5\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x06$\u02F8\n$\r$\x0E$\u02F9\x03$\x03$"+
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u030A"+
		"\n$\f$\x0E$\u030D\v$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0321\n%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u032C\n%\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u033F"+
		"\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0363\n%\x03&\x03&\x06&\u0367\n&"+
		"\r&\x0E&\u0368\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0373\n&\x03"+
		"&\x03&\x03&\x03&\x03&\x03&\x05&\u037B\n&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x06&\u0389\n&\r&\x0E&\u038A\x03&\x03&"+
		"\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x03&\x03&\x03&\x03&\x07&\u03A1\n&\f&\x0E&\u03A4\v&\x03\'\x03\'\x03\'"+
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03B0\n\'\x03(\x03(\x03"+
		")\x03)\x03)\x03)\x03)\x05)\u03B9\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03"+
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u03CE"+
		"\n)\x03)\x03)\x05)\u03D2\n)\x03)\x03)\x03)\x05)\u03D7\n)\x03)\x05)\u03DA"+
		"\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03"+
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u03F1\n*\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0402\n"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u040E\n+\x03"+
		"+\x03+\x05+\u0412\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0432\n+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x05+\u043C\n+\x03+\x03+\x05+\u0440\n+\x03+\x03+\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u044C\n+\x03+\x03+\x05+\u0450"+
		"\n+\x03+\x03+\x03+\x03+\x03+\x05+\u0457\n+\x03+\x03+\x03+\x05+\u045C\n"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0467\n+\x03+\x03"+
		"+\x05+\u046B\n+\x03+\x03+\x03+\x03+\x05+\u0471\n+\x03+\x03+\x03+\x05+"+
		"\u0476\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u048B\n+\x03+\x03+\x03+\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04A6\n+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04B3\n+\x03+\x03+\x05+\u04B7"+
		"\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04C2\n+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04D2"+
		"\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x05+\u04F0\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04F9\n+\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0505\n+\x03+\x03+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0514\n+"+
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0538\n+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u054B"+
		"\n+\f+\x0E+\u054E\v+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x05,\u0592\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07"+
		",\u05AC\n,\f,\x0E,\u05AF\v,\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u05B7\n"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u05C4\n"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u05D1\n"+
		"-\x03-\x03-\x03-\x03-\x03-\x05-\u05D8\n-\x03-\x03-\x05-\u05DC\n-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u05E8\n-\x03-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u05F4\n-\x03-\x03-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x05-\u0623\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u062C\n-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x05-\u0640\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x05-\u064D\n-\x03-\x03-\x03-\x03-\x03-\x05-\u0654\n-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x05-\u0681\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		"-\x03-\x05-\u068E\n-\x03-\x03-\x05-\u0692\n-\x03-\x03-\x03-\x03-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u06A1\n-\x03-\x03-\x03-"+
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u06B0\n-\f-\x0E"+
		"-\u06B3\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03"+
		".\x03.\x05.\u06C2\n.\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u06CA\n/\x05/"+
		"\u06CC\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030"+
		"\x050\u06DA\n0\x050\u06DC\n0\x031\x031\x031\x031\x031\x031\x031\x051\u06E5"+
		"\n1\x031\x071\u06E8\n1\f1\x0E1\u06EB\v1\x032\x032\x032\x032\x032\x032"+
		"\x032\x032\x032\x032\x032\x052\u06F8\n2\x033\x033\x033\x033\x033\x053"+
		"\u06FF\n3\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054"+
		"\u070C\n4\x034\x034\x034\x034\x034\x074\u0713\n4\f4\x0E4\u0716\v4\x03"+
		"5\x035\x036\x036\x037\x037\x038\x038\x039\x039\x039\x039\x039\x039\x03"+
		"9\x059\u0727\n9\x03:\x03:\x03;\x03;\x03;\x03;\x03<\x03<\x05<\u0731\n<"+
		"\x03=\x03=\x03>\x03>\x03>\x03>\x05>\u0739\n>\x03?\x03?\x03?\x03?\x03?"+
		"\x03?\x03?\x03?\x03?\x03?\x05?\u0745\n?\x03?\x03?\x05?\u0749\n?\x03@\x03"+
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0754\n@\x03@\x03@\x03@\x03"+
		"@\x03@\x07@\u075B\n@\f@\x0E@\u075E\v@\x03A\x03A\x03A\x03A\x03B\x03B\x03"+
		"B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u0772\n"+
		"C\x03C\x03C\x03C\x05C\u0777\nC\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x03E\x05E\u079E\nE\x03F\x03F\x03F\x03F\x05F\u07A4\nF\x03G\x03G\x05G"+
		"\u07A8\nG\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G"+
		"\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03"+
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03"+
		"G\x03G\x03G\x03G\x05G\u07D5\nG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03"+
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u07E5\nH\x03I\x03I\x03J\x03J\x03"+
		"K\x03K\x03K\x05K\u07EE\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03"+
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0803\nL\x03"+
		"M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03"+
		"N\x03N\x03N\x03N\x05N\u0817\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03"+
		"O\x03O\x03O\x03O\x03O\x05O\u0825\nO\x03P\x03P\x05P\u0829\nP\x03P\x03P"+
		"\x03P\x03P\x03P\x05P\u0830\nP\x03Q\x03Q\x03Q\x03Q\x05Q\u0836\nQ\x03Q\x03"+
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03"+
		"Q\x03Q\x05Q\u0849\nQ\x03Q\x06Q\u084C\nQ\rQ\x0EQ\u084D\x07Q\u0850\nQ\f"+
		"Q\x0EQ\u0853\vQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03"+
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u086A\nR\x03"+
		"S\x03S\x03S\x03S\x03S\x03S\x05S\u0872\nS\x03T\x03T\x03T\x03T\x03U\x03"+
		"U\x03U\x03U\x03U\x05U\u087D\nU\x03U\x03U\x03U\x03U\x05U\u0883\nU\x03U"+
		"\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u088C\nU\x03U\x03U\x07U\u0890\nU\f"+
		"U\x0EU\u0893\vU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03"+
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u08AC"+
		"\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u08B6\nV\fV\x0EV\u08B9"+
		"\vV\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u08C4\nX\x03Y\x03"+
		"Y\x03Y\x05Y\u08C9\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03"+
		"Y\x07Y\u08D5\nY\fY\x0EY\u08D8\vY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03"+
		"Z\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x07"+
		"\\\u08EE\n\\\f\\\x0E\\\u08F1\v\\\x03]\x03]\x03]\x03]\x03]\x05]\u08F8\n"+
		"]\x03^\x03^\x03^\x03_\x06_\u08FE\n_\r_\x0E_\u08FF\x03`\x03`\x03`\x05`"+
		"\u0905\n`\x03`\x07`\u0908\n`\f`\x0E`\u090B\v`\x03`\x07`\u090E\n`\f`\x0E"+
		"`\u0911\v`\x03`\x07`\u0914\n`\f`\x0E`\u0917\v`\x03`\x07`\u091A\n`\f`\x0E"+
		"`\u091D\v`\x03`\x07`\u0920\n`\f`\x0E`\u0923\v`\x03`\x03`\x05`\u0927\n"+
		"`\x03a\x06a\u092A\na\ra\x0Ea\u092B\x03b\x03b\x03b\x03b\x03b\x03b\x03b"+
		"\x03b\x03b\x03b\x05b\u0938\nb\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03d"+
		"\x05d\u0942\nd\x03e\x03e\x05e\u0946\ne\x03e\x03e\x05e\u094A\ne\x03e\x03"+
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0956\ne\x03f\x03f\x03"+
		"g\x03g\x03g\x03g\x03";
	private static readonly _serializedATNSegment1: string =
		"g\x03g\x03g\x03g\x05g\u0962\ng\x03h\x03h\x03h\x02\x02\x11046BFJTVXf~\xA0"+
		"\xA8\xAA\xB0i\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02"+
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02"+
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02"+
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02"+
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02"+
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02"+
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02"+
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02"+
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02"+
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\x02\"\x03\x02\x06\x07"+
		"\x03\x02\v0\x03\x0245\x03\x02\u017B\u017C\x03\x02BC\x03\x02UV\x03\x02"+
		"X[\x04\x02UV]^\x04\x02~\x7F\u019A\u019A\x04\x02\u0171\u0171\u0174\u0174"+
		"\x03\x02\xA1\xA2\x04\x02QQ\x94\x94\x04\x02\xA5\xA5\xA9\xA9\x03\x02\xAB"+
		"\xAC\x03\x02\xAE\xAF\x03\x02\xB1\xB2\x04\x02\u015E\u015E\u0181\u0181\x03"+
		"\x02\xB9\xBA\x03\x02\xBF\xC0\x04\x02HH\xC3\xC3\x03\x02\xD2\xD3\x03\x02"+
		"hi\x03\x02jk\x03\x02\u019D\u019E\x03\x02\xD6\xD8\x03\x02\xDC\xDD\x04\x02"+
		"\u013E\u013E\u0141\u0141\x04\x02\u018E\u018E\u0190\u0190\x06\x02\x05\x05"+
		"\xF3\xF9\u013E\u013E\u0186\u0187\x04\x02__\u0126\u0127\x04\x02\u012F\u0133"+
		"\u0135\u0135\x04\x02PP\u0138\u013D\u0ADB\x02\xE3\x03\x02\x02\x02\x04\xED"+
		"\x03\x02\x02\x02\x06\xEF\x03\x02\x02\x02\b\u0103\x03\x02\x02\x02\n\u0105"+
		"\x03\x02\x02\x02\f\u0108\x03\x02\x02\x02\x0E\u0125\x03\x02\x02\x02\x10"+
		"\u0127\x03\x02\x02\x02\x12\u012D\x03\x02\x02\x02\x14\u012F\x03\x02\x02"+
		"\x02\x16\u013F\x03\x02\x02\x02\x18\u0141\x03\x02\x02\x02\x1A\u0146\x03"+
		"\x02\x02\x02\x1C\u014C\x03\x02\x02\x02\x1E\u014E\x03\x02\x02\x02 \u0161"+
		"\x03\x02\x02\x02\"\u0176\x03\x02\x02\x02$\u0178\x03\x02\x02\x02&\u017E"+
		"\x03\x02\x02\x02(\u0188\x03\x02\x02\x02*\u018C\x03\x02\x02\x02,\u0190"+
		"\x03\x02\x02\x02.\u0192\x03\x02\x02\x020\u0198\x03\x02\x02\x022\u01A7"+
		"\x03\x02\x02\x024\u01C0\x03\x02\x02\x026\u0238\x03\x02\x02\x028\u024A"+
		"\x03\x02\x02\x02:\u025B\x03\x02\x02\x02<\u028B\x03\x02\x02\x02>\u028F"+
		"\x03\x02\x02\x02@\u0295\x03\x02\x02\x02B\u02A6\x03\x02\x02\x02D\u02B0"+
		"\x03\x02\x02\x02F\u02E4\x03\x02\x02\x02H\u0362\x03\x02\x02\x02J\u037A"+
		"\x03\x02\x02\x02L\u03AF\x03\x02\x02\x02N\u03B1\x03\x02\x02\x02P\u03D9"+
		"\x03\x02\x02\x02R\u03F0\x03\x02\x02\x02T\u0537\x03\x02\x02\x02V\u0591"+
		"\x03\x02\x02\x02X\u068D\x03\x02\x02\x02Z\u06C1\x03\x02\x02\x02\\\u06CB"+
		"\x03\x02\x02\x02^\u06DB\x03\x02\x02\x02`\u06DD\x03\x02\x02\x02b\u06F7"+
		"\x03\x02\x02\x02d\u06FE\x03\x02\x02\x02f\u070B\x03\x02\x02\x02h\u0717"+
		"\x03\x02\x02\x02j\u0719\x03\x02\x02\x02l\u071B\x03\x02\x02\x02n\u071D"+
		"\x03\x02\x02\x02p\u0726\x03\x02\x02\x02r\u0728\x03\x02\x02\x02t\u072A"+
		"\x03\x02\x02\x02v\u0730\x03\x02\x02\x02x\u0732\x03\x02\x02\x02z\u0738"+
		"\x03\x02\x02\x02|\u073A\x03\x02\x02\x02~\u0753\x03\x02\x02\x02\x80\u075F"+
		"\x03\x02\x02\x02\x82\u0763\x03\x02\x02\x02\x84\u0776\x03\x02\x02\x02\x86"+
		"\u0778\x03\x02\x02\x02\x88\u079D\x03\x02\x02\x02\x8A\u07A3\x03\x02\x02"+
		"\x02\x8C\u07D4\x03\x02\x02\x02\x8E\u07E4\x03\x02\x02\x02\x90\u07E6\x03"+
		"\x02\x02\x02\x92\u07E8\x03\x02\x02\x02\x94\u07ED\x03\x02\x02\x02\x96\u0802"+
		"\x03\x02\x02\x02\x98\u0804\x03\x02\x02\x02\x9A\u0816\x03\x02\x02\x02\x9C"+
		"\u0824\x03\x02\x02\x02\x9E\u082F\x03\x02\x02\x02\xA0\u0835\x03\x02\x02"+
		"\x02\xA2\u0869\x03\x02\x02\x02\xA4\u0871\x03\x02\x02\x02\xA6\u0873\x03"+
		"\x02\x02\x02\xA8\u088B\x03\x02\x02\x02\xAA\u08AB\x03\x02\x02\x02\xAC\u08BA"+
		"\x03\x02\x02\x02\xAE\u08C3\x03\x02\x02\x02\xB0\u08C8\x03\x02\x02\x02\xB2"+
		"\u08D9\x03\x02\x02\x02\xB4\u08E1\x03\x02\x02\x02\xB6\u08E9\x03\x02\x02"+
		"\x02\xB8\u08F7\x03\x02\x02\x02\xBA\u08F9\x03\x02\x02\x02\xBC\u08FD\x03"+
		"\x02\x02\x02\xBE\u0926\x03\x02\x02\x02\xC0\u0929\x03\x02\x02\x02\xC2\u0937"+
		"\x03\x02\x02\x02\xC4\u0939\x03\x02\x02\x02\xC6\u0941\x03\x02\x02\x02\xC8"+
		"\u0955\x03\x02\x02\x02\xCA\u0957\x03\x02\x02\x02\xCC\u0961\x03\x02\x02"+
		"\x02\xCE\u0963\x03\x02\x02\x02\xD0\xD2\x07\x03\x02\x02\xD1\xD0\x03\x02"+
		"\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02"+
		"\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xDF\x05\x04"+
		"\x03\x02\xD7\xD9\x07\x03\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02"+
		"\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02"+
		"\x02\x02\xDC\xDE\x05\x04\x03\x02\xDD\xD8\x03\x02\x02\x02\xDE\xE1\x03\x02"+
		"\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE4\x03\x02"+
		"\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xD3\x03\x02"+
		"\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\x03\x03\x02\x02\x02\xE5\xEE\x05\f"+
		"\x07\x02\xE6\xEE\x05\x14\v\x02\xE7\xEE\x05*\x16\x02\xE8\xEE\x05\x1E\x10"+
		"\x02\xE9\xEE\x05\x06\x04\x02\xEA\xEE\x05\x10\t\x02\xEB\xEE\x05&\x14\x02"+
		"\xEC\xEE\x05(\x15\x02\xED\xE5\x03\x02\x02\x02\xED\xE6\x03\x02\x02\x02"+
		"\xED\xE7\x03\x02\x02\x02\xED\xE8\x03\x02\x02\x02\xED\xE9\x03\x02\x02\x02"+
		"\xED\xEA\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02"+
		"\xEE\x05\x03\x02\x02\x02\xEF\xF0\x05\b\x05\x02\xF0\xF1\x07\x03\x02\x02"+
		"\xF1\xF6\x05\n\x06\x02\xF2\xF3\x07\x03\x02\x02\xF3\xF5\x05\n\x06\x02\xF4"+
		"\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6"+
		"\xF7\x03\x02\x02\x02\xF7\x07\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9"+
		"\xFA\x07\u018A\x02\x02\xFA\xFB\x07\u0151\x02\x02\xFB\xFC\x07\x04\x02\x02"+
		"\xFC\xFD\x07\u0151\x02\x02\xFD\u0104\x07\u0191\x02\x02\xFE\xFF\x07\u018A"+
		"\x02\x02\xFF\u0100\x07\u0151\x02\x02\u0100\u0101\x07\x05\x02\x02\u0101"+
		"\u0102\x07\u0151\x02\x02\u0102\u0104\x07\u0191\x02\x02\u0103\xF9\x03\x02"+
		"\x02\x02\u0103\xFE\x03\x02\x02\x02\u0104\t\x03\x02\x02\x02\u0105\u0106"+
		"\t\x02\x02\x02\u0106\u0107\x05,\x17\x02\u0107\v\x03\x02\x02\x02\u0108"+
		"\u010C\x05\x0E\b\x02\u0109\u010A\x07\b\x02\x02\u010A\u010B\x07\u0151\x02"+
		"\x02\u010B\u010D\x05\f\x07\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010D"+
		"\x03\x02\x02\x02\u010D\r\x03\x02\x02\x02\u010E\u0126\x07\u0147\x02\x02"+
		"\u010F\u0126\x07\u0148\x02\x02\u0110\u0111\x07\t\x02\x02\u0111\u0112\x07"+
		"\u0151\x02\x02\u0112\u0126\x05@!\x02\u0113\u0126\x07\n\x02\x02\u0114\u0126"+
		"\x07\u014C\x02\x02\u0115\u0126\x07\u014B\x02\x02\u0116\u0126\x07\u0144"+
		"\x02\x02\u0117\u0126\x07\u0156\x02\x02\u0118\u0126\x07\u0157\x02\x02\u0119"+
		"\u0126\x07\u0159\x02\x02\u011A\u0126\x07\u015A\x02\x02\u011B\u0126\x07"+
		"\u015C\x02\x02\u011C\u0126\x07\u0160\x02\x02\u011D\u0126\x07\u0161\x02"+
		"\x02\u011E\u0126\x07\u0163\x02\x02\u011F\u0126\x07\u0162\x02\x02\u0120"+
		"\u0126\x07\u0178\x02\x02\u0121\u0126\x07\u0179\x02\x02\u0122\u0123\x07"+
		"\u0177\x02\x02\u0123\u0124\x07\u0151\x02\x02\u0124\u0126\x05\xBC_\x02"+
		"\u0125\u010E\x03\x02\x02\x02\u0125\u010F\x03\x02\x02\x02\u0125\u0110\x03"+
		"\x02\x02\x02\u0125\u0113\x03\x02\x02\x02\u0125\u0114\x03\x02\x02\x02\u0125"+
		"\u0115\x03\x02\x02\x02\u0125\u0116\x03\x02\x02\x02\u0125\u0117\x03\x02"+
		"\x02\x02\u0125\u0118\x03\x02\x02\x02\u0125\u0119\x03\x02\x02\x02\u0125"+
		"\u011A\x03\x02\x02\x02\u0125\u011B\x03\x02\x02\x02\u0125\u011C\x03\x02"+
		"\x02\x02\u0125\u011D\x03\x02\x02\x02\u0125\u011E\x03\x02\x02\x02\u0125"+
		"\u011F\x03\x02\x02\x02\u0125\u0120\x03\x02\x02\x02\u0125\u0121\x03\x02"+
		"\x02\x02\u0125\u0122\x03\x02\x02\x02\u0126\x0F\x03\x02\x02\x02\u0127\u0128"+
		"\x05\x12\n\x02\u0128\u0129\x07\u0151\x02\x02\u0129\u012A\x07\u0191\x02"+
		"\x02\u012A\u012B\x07\u0151\x02\x02\u012B\u012C\x05\x04\x03\x02\u012C\x11"+
		"\x03\x02\x02\x02\u012D\u012E\t\x03\x02\x02\u012E\x13\x03\x02\x02\x02\u012F"+
		"\u0130\x05\xB6\\\x02\u0130\u0131\x071\x02\x02\u0131\u0132\x07\u0151\x02"+
		"\x02\u0132\u0135\x05,\x17\x02\u0133\u0134\x07\u0151\x02\x02\u0134\u0136"+
		"\x05\x16\f\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02"+
		"\u0136\x15\x03\x02\x02\x02\u0137\u0138\x07\u0170\x02\x02\u0138\u0139\x07"+
		"\u0151\x02\x02\u0139\u013A\x072\x02\x02\u013A\u013B\x07\u0151\x02\x02"+
		"\u013B\u013C\x05\x18\r\x02\u013C\u013D\x07\u0176\x02\x02\u013D\u0140\x03"+
		"\x02\x02\x02\u013E\u0140\x073\x02\x02\u013F\u0137\x03\x02\x02\x02\u013F"+
		"\u013E\x03\x02\x02\x02\u0140\x17\x03\x02\x02\x02\u0141\u0142\t\x04\x02"+
		"\x02\u0142\x19\x03\x02\x02\x02\u0143\u0144\x05d3\x02\u0144\u0145\x07\u0151"+
		"\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0143\x03\x02\x02\x02\u0146"+
		"\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x07\u018D"+
		"\x02\x02\u0149\u014A\x07\u0151\x02\x02\u014A\u014B\x076\x02\x02\u014B"+
		"\x1B\x03\x02\x02\x02\u014C\u014D\x077\x02\x02\u014D\x1D\x03\x02\x02\x02"+
		"\u014E\u014F\x05 \x11\x02\u014F\u0150\x07\b\x02\x02\u0150\u0152\x07\u0151"+
		"\x02\x02\u0151\u0153\x05$\x13\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153"+
		"\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x05,\x17\x02"+
		"\u0155\x1F\x03\x02\x02\x02\u0156\u0157\t\x05\x02\x02\u0157\u0158\x07\u0151"+
		"\x02\x02\u0158\u0162\x05\"\x12\x02\u0159\u015A\x07\u017A\x02\x02\u015A"+
		"\u015B\x07\u0151\x02\x02\u015B\u015C\x078\x02\x02\u015C\u015D\x07\u0151"+
		"\x02\x02\u015D\u0162\x05\xC6d\x02\u015E\u015F\x07\u017A\x02\x02\u015F"+
		"\u0160\x07\u0151\x02\x02\u0160\u0162\x079\x02\x02\u0161\u0156\x03\x02"+
		"\x02\x02\u0161\u0159\x03\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0162"+
		"!\x03\x02\x02\x02\u0163\u0177\x056\x1C\x02\u0164\u0165\x07\u014F\x02\x02"+
		"\u0165\u0166\x07\u0151\x02\x02\u0166\u0167\x07\u0171\x02\x02\u0167\u0168"+
		"\x07\u0151\x02\x02\u0168\u0177\x05F$\x02\u0169\u016A\x07\u014F\x02\x02"+
		"\u016A\u016B\x07\u0151\x02\x02\u016B\u0177\x07:\x02\x02\u016C\u016D\x05"+
		"B\"\x02\u016D\u016E\x07\u0151\x02\x02\u016E\u016F\x05n8\x02\u016F\u0170"+
		"\x07\u0151\x02\x02\u0170\u0171\x07;\x02\x02\u0171\u0177\x03\x02\x02\x02"+
		"\u0172\u0173\x05F$\x02\u0173\u0174\x07\u0151\x02\x02\u0174\u0175\x07<"+
		"\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0163\x03\x02\x02\x02\u0176"+
		"\u0164\x03\x02\x02\x02\u0176\u0169\x03\x02\x02\x02\u0176\u016C\x03\x02"+
		"\x02\x02\u0176\u0172\x03\x02\x02\x02\u0177#\x03\x02\x02\x02\u0178\u0179"+
		"\x07\u017D\x02\x02\u0179\u017A\x07\u0151\x02\x02\u017A\u017B\x05<\x1F"+
		"\x02\u017B\u017C\x07\b\x02\x02\u017C\u017D\x07\u0151\x02\x02\u017D%\x03"+
		"\x02\x02\x02\u017E\u017F\x07=\x02\x02\u017F\u0180\x07\u0151\x02\x02\u0180"+
		"\u0181\x05T+\x02\u0181\u0182\x07\u0176\x02\x02\u0182\'\x03\x02\x02\x02"+
		"\u0183\u0184\x07>\x02\x02\u0184\u0185\x05\x92J\x02\u0185\u0186\x07?\x02"+
		"\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0189\x07@\x02\x02\u0188\u0183"+
		"\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189)\x03\x02\x02\x02\u018A"+
		"\u018D\x054\x1B\x02\u018B\u018D\x05.\x18\x02\u018C\u018A\x03\x02\x02\x02"+
		"\u018C\u018B\x03\x02\x02\x02\u018D+\x03\x02\x02\x02\u018E\u0191\x05.\x18"+
		"\x02\u018F\u0191\x05\x06\x04\x02\u0190\u018E\x03\x02\x02\x02\u0190\u018F"+
		"\x03\x02\x02\x02\u0191-\x03\x02\x02\x02\u0192\u0193\x054\x1B\x02\u0193"+
		"\u0196\x07\u0176\x02\x02\u0194\u0195\x07\u0151\x02\x02\u0195\u0197\x05"+
		"0\x19\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197"+
		"/\x03\x02\x02\x02\u0198\u0199\b\x19\x01\x02\u0199\u019A\x052\x1A\x02\u019A"+
		"\u01A0\x03\x02\x02\x02\u019B\u019C\f\x03\x02\x02\u019C\u019D\x07\u0151"+
		"\x02\x02\u019D\u019F\x052\x1A\x02\u019E\u019B\x03\x02\x02\x02\u019F\u01A2"+
		"\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02"+
		"\u01A11\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\x054\x1B"+
		"\x02\u01A4\u01A5\x07\u0176\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A8"+
		"\x05\x1E\x10\x02\u01A7\u01A3\x03\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02"+
		"\u01A83\x03\x02\x02\x02\u01A9\u01AA\b\x1B\x01\x02\u01AA\u01C1\x056\x1C"+
		"\x02\u01AB\u01AC\x07A\x02\x02\u01AC\u01AD\x07\u0151\x02\x02\u01AD\u01C1"+
		"\x054\x1B\x07\u01AE\u01B8\x056\x1C\x02\u01AF\u01B0\x07\b\x02\x02\u01B0"+
		"\u01B5\x07\u0151\x02\x02\u01B1\u01B3\t\x06\x02\x02\u01B2\u01B1\x03\x02"+
		"\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4"+
		"\u01B6\x07\u0151\x02\x02\u01B5\u01B2\x03\x02\x02\x02\u01B5\u01B6\x03\x02"+
		"\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x054\x1B\x02\u01B8\u01AF"+
		"\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02"+
		"\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01C1\x03\x02\x02\x02\u01BC\u01BD\x07"+
		"D\x02\x02\u01BD\u01BE\x07\u0151\x02\x02\u01BE\u01C1\x054\x1B\x04\u01BF"+
		"\u01C1\x058\x1D\x02\u01C0\u01A9\x03\x02\x02\x02\u01C0\u01AB\x03\x02\x02"+
		"\x02\u01C0\u01AE\x03\x02\x02\x02\u01C0\u01BC\x03\x02\x02\x02\u01C0\u01BF"+
		"\x03\x02\x02\x02\u01C1\u01C9\x03\x02\x02\x02\u01C2\u01C3\f\x06\x02\x02"+
		"\u01C3\u01C4\x07\u0151\x02\x02\u01C4\u01C5\x07B\x02\x02\u01C5\u01C6\x07"+
		"\u0151\x02\x02\u01C6\u01C8\x054\x1B\x07\u01C7\u01C2\x03\x02\x02\x02\u01C8"+
		"\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02"+
		"\x02\x02\u01CA5\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CD"+
		"\b\x1C\x01\x02\u01CD\u0239\x05T+\x02\u01CE\u01CF\x05F$\x02\u01CF\u01D0"+
		"\x07\u0151\x02\x02\u01D0\u01D1\x05X-\x02\u01D1\u0239\x03\x02\x02\x02\u01D2"+
		"\u01D3\x07\u017F\x02\x02\u01D3\u01D4\x07\u0151\x02\x02\u01D4\u0239\x05"+
		"\\/\x02\u01D5\u01D6\x05B\"\x02\u01D6\u01D7\x07\u0151\x02\x02\u01D7\u01D8"+
		"\x05V,\x02\u01D8\u0239\x03\x02\x02\x02\u01D9\u01DA\x07\u017D\x02\x02\u01DA"+
		"\u01DB\x07\u0151\x02\x02\u01DB\u01DC\x054\x1B\x02\u01DC\u01DD\x07\b\x02"+
		"\x02\u01DD\u01DE\x07\u0151\x02\x02\u01DE\u01DF\x05\xB4[\x02\u01DF\u0239"+
		"\x03\x02\x02\x02\u01E0\u01E1\x07\u017D\x02\x02\u01E1\u01E2\x07\u0151\x02"+
		"\x02\u01E2\u01E3\x05<\x1F\x02\u01E3\u01E4\x07\b\x02\x02\u01E4\u01E5\x07"+
		"\u0151\x02\x02\u01E5\u01E6\x054\x1B\x02\u01E6\u0239\x03\x02\x02\x02\u01E7"+
		"\u01E8\x07\u017D\x02\x02\u01E8\u01E9\x07\u0151\x02\x02\u01E9\u01EA\x05"+
		"F$\x02\u01EA\u01EB\x07\u0151\x02\x02\u01EB\u01EC\x07F\x02\x02\u01EC\u01EF"+
		"\x07\u0151\x02\x02\u01ED\u01F0\x05X-\x02\u01EE\u01F0\x05Z.\x02\u01EF\u01ED"+
		"\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02"+
		"\u01F1\u01F2\x07\b\x02\x02\u01F2\u01FA\x07\u0151\x02\x02\u01F3\u01F4\x05"+
		"4\x1B\x02\u01F4\u01F5\x07\u0151\x02\x02\u01F5\u01F6\x07G\x02\x02\u01F6"+
		"\u01FB\x03\x02\x02\x02\u01F7\u01F8\x07G\x02\x02\u01F8\u01F9\x07\u0151"+
		"\x02\x02\u01F9\u01FB\x054\x1B\x02\u01FA\u01F3\x03\x02\x02\x02\u01FA\u01F7"+
		"\x03\x02\x02\x02\u01FB\u0239\x03\x02\x02\x02\u01FC\u01FD\x07\u017D\x02"+
		"\x02\u01FD\u01FE\x07\u0151\x02\x02\u01FE\u01FF\x05B\"\x02\u01FF\u0200"+
		"\x07\u0151\x02\x02\u0200\u0201\x07F\x02\x02\u0201\u0202\x07\u0151\x02"+
		"\x02\u0202\u0203\x05V,\x02\u0203\u0204\x07\b\x02\x02\u0204\u020C\x07\u0151"+
		"\x02\x02\u0205\u0206\x054\x1B\x02\u0206\u0207\x07\u0151\x02\x02\u0207"+
		"\u0208\x07G\x02\x02\u0208\u020D\x03\x02\x02\x02\u0209\u020A\x07G\x02\x02"+
		"\u020A\u020B\x07\u0151\x02\x02\u020B\u020D\x054\x1B\x02\u020C\u0205\x03"+
		"\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020D\u0239\x03\x02\x02\x02\u020E"+
		"\u020F\x05\xB2Z\x02\u020F\u0210\x07\b\x02\x02\u0210\u0211\x07\u0151\x02"+
		"\x02\u0211\u0212\x054\x1B\x02\u0212\u0239\x03\x02\x02\x02\u0213\u0214"+
		"\x05p9\x02\u0214\u0215\x07\b\x02\x02\u0215\u0216\x07\u0151\x02\x02\u0216"+
		"\u0217\x054\x1B\x02\u0217\u0239\x03\x02\x02\x02\u0218\u0219\x07\u0188"+
		"\x02\x02\u0219\u021A\x07\u0151\x02\x02\u021A\u021B\x07\u015E\x02\x02\u021B"+
		"\u021C\x07\u0151\x02\x02\u021C\u021D\x05F$\x02\u021D\u021E\x07\b\x02\x02"+
		"\u021E\u021F\x07\u0151\x02\x02\u021F\u0220\x054\x1B\x02\u0220\u0239\x03"+
		"\x02\x02\x02\u0221\u0222\x05\x1A\x0E\x02\u0222\u0223\x07\u0151\x02\x02"+
		"\u0223\u0224\x05\x1C\x0F\x02\u0224\u0239\x03\x02\x02\x02\u0225\u0226\x05"+
		"d3\x02\u0226\u0227\x07\u0151\x02\x02\u0227\u0228\x05r:\x02\u0228\u0229"+
		"\x07\u0151\x02\x02\u0229\u022A\x07H\x02\x02\u022A\u022B\x07\u0151\x02"+
		"\x02\u022B\u022C\x07I\x02\x02\u022C\u022D\x07\u0151\x02\x02\u022D\u022E"+
		"\x07J\x02\x02\u022E\u022F\x07\u0151\x02\x02\u022F\u0230\x05\x84C\x02\u0230"+
		"\u0239\x03\x02\x02\x02\u0231\u0232\x07\u0166\x02\x02\u0232\u0233\x07\u0151"+
		"\x02\x02\u0233\u0234\x054\x1B\x02\u0234\u0235\x07\b\x02\x02\u0235\u0236"+
		"\x07\u0151\x02\x02\u0236\u0237\x054\x1B\x02\u0237\u0239\x03\x02\x02\x02"+
		"\u0238\u01CC\x03\x02\x02\x02\u0238\u01CE\x03\x02\x02\x02\u0238\u01D2\x03"+
		"\x02\x02\x02\u0238\u01D5\x03\x02\x02\x02\u0238\u01D9\x03\x02\x02\x02\u0238"+
		"\u01E0\x03\x02\x02\x02\u0238\u01E7\x03\x02\x02\x02\u0238\u01FC\x03\x02"+
		"\x02\x02\u0238\u020E\x03\x02\x02\x02\u0238\u0213\x03\x02\x02\x02\u0238"+
		"\u0218\x03\x02\x02\x02\u0238\u0221\x03\x02\x02\x02\u0238\u0225\x03\x02"+
		"\x02\x02\u0238\u0231\x03\x02\x02\x02\u0239\u0247\x03\x02\x02\x02\u023A"+
		"\u023B\f\x11\x02\x02\u023B\u023C\x07\u0151\x02\x02\u023C\u023D\x07B\x02"+
		"\x02\u023D\u023E\x07\u0151\x02\x02\u023E\u0246\x056\x1C\x12\u023F\u0240"+
		"\f\x10\x02\x02\u0240\u0241\x07\b\x02\x02\u0241\u0242\x07\u0151\x02\x02"+
		"\u0242\u0243\x07E\x02\x02\u0243\u0244\x07\u0151\x02\x02\u0244\u0246\x05"+
		"\x84C\x02\u0245\u023A\x03\x02\x02\x02\u0245\u023F\x03\x02\x02\x02\u0246"+
		"\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02"+
		"\x02\x02\u02487\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024B"+
		"\x07K\x02\x02\u024B\u024C\x07\u0151\x02\x02\u024C\u024D\x05\xC6d\x02\u024D"+
		"\u024E\x07L\x02\x02\u024E9\x03\x02\x02\x02\u024F\u0250\x07\u0188\x02\x02"+
		"\u0250\u0251\x07\u0151\x02\x02\u0251\u0252\x07\u015E\x02\x02\u0252\u0253"+
		"\x07\u0151\x02\x02\u0253\u025C\x05J&\x02\u0254\u0255\x07\u0188\x02\x02"+
		"\u0255\u0256\x07\u0151\x02\x02\u0256\u0257\x07\u015E\x02\x02\u0257\u0258"+
		"\x07\u0151\x02\x02\u0258\u0259\x07M\x02\x02\u0259\u025A\x07\u0151\x02"+
		"\x02\u025A\u025C\x05F$\x02\u025B\u024F\x03\x02\x02\x02\u025B\u0254\x03"+
		"\x02\x02\x02\u025C;\x03\x02\x02\x02\u025D\u028C\x054\x1B\x02\u025E\u025F"+
		"\x07\u01A2\x02\x02\u025F\u0260\x07\u0151\x02\x02\u0260\u0261\x07\u0171"+
		"\x02\x02\u0261\u0262\x07\u0151\x02\x02\u0262\u0263\x05F$\x02\u0263\u0264"+
		"\x07\u0151\x02\x02\u0264\u0265\x05p9\x02\u0265\u028C\x03\x02\x02\x02\u0266"+
		"\u0267\x07\u01A2\x02\x02\u0267\u0268\x07\u0151\x02\x02\u0268\u0269\x07"+
		"N\x02\x02\u0269\u026A\x07\u0151\x02\x02\u026A\u028C\x05p9\x02\u026B\u026C"+
		"\x07\u017F\x02\x02\u026C\u026D\x07\u0151\x02\x02\u026D\u026E\x07O\x02"+
		"\x02\u026E\u026F\x07\u0151\x02\x02\u026F\u028C\x07P\x02\x02\u0270\u0271"+
		"\x05F$\x02\u0271\u0272\x07\u0151\x02\x02\u0272\u0273\x07Q\x02\x02\u0273"+
		"\u0274\x07\u0151\x02\x02\u0274\u0275\x05\x9AN\x02\u0275\u0279\x07\u0151"+
		"\x02\x02\u0276\u0277\x05\x8AF\x02\u0277\u0278\x07\u0151\x02\x02\u0278"+
		"\u027A\x03\x02\x02\x02\u0279\u0276\x03\x02\x02\x02\u0279\u027A\x03\x02"+
		"\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027C\x07\u0155\x02\x02\u027C"+
		"\u027D\x07R\x02\x02\u027D\u027E\x07\u0151\x02\x02\u027E\u027F\x07S\x02"+
		"\x02\u027F\u0280\x07\u0151\x02\x02\u0280\u0281\x07\u018E\x02\x02\u0281"+
		"\u028C\x03\x02\x02\x02\u0282\u0283\x05\x84C\x02\u0283\u0284\x07\u0151"+
		"\x02\x02\u0284\u0285\x07H\x02\x02\u0285\u0286\x07\u0151\x02\x02\u0286"+
		"\u0287\x05\x96L\x02\u0287\u028C\x03\x02\x02\x02\u0288\u0289\x07T\x02\x02"+
		"\u0289\u028A\x07\u0151\x02\x02\u028A\u028C\x05F$\x02\u028B\u025D\x03\x02"+
		"\x02\x02\u028B\u025E\x03\x02\x02\x02\u028B\u0266\x03\x02\x02\x02\u028B"+
		"\u026B\x03\x02\x02\x02\u028B\u0270\x03\x02\x02\x02\u028B\u0282\x03\x02"+
		"\x02\x02\u028B\u0288\x03\x02\x02\x02\u028C=\x03\x02\x02\x02\u028D\u0290"+
		"\x05F$\x02\u028E\u0290\x05B\"\x02\u028F\u028D\x03\x02\x02\x02\u028F\u028E"+
		"\x03\x02\x02\x02\u0290?\x03\x02\x02\x02\u0291\u0296\x05F$\x02\u0292\u0296"+
		"\x05J&\x02\u0293\u0296\x05B\"\x02\u0294\u0296\x05D#\x02\u0295\u0291\x03"+
		"\x02\x02\x02\u0295\u0292\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0295"+
		"\u0294\x03\x02\x02\x02\u0296A\x03\x02\x02\x02\u0297\u0298\b\"\x01\x02"+
		"\u0298\u02A7\x07\u014F\x02\x02\u0299\u02A7\x07\u0198\x02\x02\u029A\u029B"+
		"\x05P)\x02\u029B\u029C\x07\u0151\x02\x02\u029C\u029D\x05D#\x02\u029D\u02A7"+
		"\x03\x02\x02\x02\u029E\u029F\x07O\x02\x02\u029F\u02A0\x07\u0151\x02\x02"+
		"\u02A0\u02A7\t\x07\x02\x02\u02A1\u02A7\x07W\x02\x02\u02A2\u02A3\x05d3"+
		"\x02\u02A3\u02A4\x07\u0151\x02\x02\u02A4\u02A5\t\b\x02\x02\u02A5\u02A7"+
		"\x03\x02\x02\x02\u02A6\u0297\x03\x02\x02\x02\u02A6\u0299\x03\x02\x02\x02"+
		"\u02A6\u029A\x03\x02\x02\x02\u02A6\u029E\x03\x02\x02\x02\u02A6\u02A1\x03"+
		"\x02\x02\x02\u02A6\u02A2\x03\x02\x02\x02\u02A7\u02AD\x03\x02\x02\x02\u02A8"+
		"\u02A9\f\x03\x02\x02\u02A9\u02AA\x07\u0151\x02\x02\u02AA\u02AC\x07\\\x02"+
		"\x02\u02AB\u02A8\x03\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB"+
		"\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AEC\x03\x02\x02\x02\u02AF"+
		"\u02AD\x03\x02\x02\x02\u02B0\u02B1\t\t\x02\x02\u02B1E\x03\x02\x02\x02"+
		"\u02B2\u02B3\b$\x01\x02\u02B3\u02E5\x07_\x02\x02\u02B4\u02E5\x07\u018E"+
		"\x02\x02\u02B5\u02E5\x07\u0198\x02\x02\u02B6\u02E5\x07\u0190\x02\x02\u02B7"+
		"\u02E5\x07\x05\x02\x02\u02B8\u02E5\x07`\x02\x02\u02B9\u02E5\x07a\x02\x02"+
		"\u02BA\u02E5\x07b\x02\x02\u02BB\u02BC\x05L\'\x02\u02BC\u02BD\x07\u0151"+
		"\x02\x02\u02BD\u02BE\x05J&\x02\u02BE\u02E5\x03\x02\x02\x02\u02BF\u02C0"+
		"\x05L\'\x02\u02C0\u02C1\x07\u0151\x02\x02\u02C1\u02C2\x05F$\x0E\u02C2"+
		"\u02E5\x03\x02\x02\x02\u02C3\u02C4\x05N(\x02\u02C4\u02C5\x05J&\x02\u02C5"+
		"\u02E5\x03\x02\x02\x02\u02C6\u02C7\x05J&\x02\u02C7\u02C8\x07\u0151\x02"+
		"\x02\u02C8\u02C9\x05H%\x02\u02C9\u02E5\x03\x02\x02\x02\u02CA\u02E5\x05"+
		"J&\x02\u02CB\u02CC\x07\u015E\x02\x02\u02CC\u02CD\x07\u0151\x02\x02\u02CD"+
		"\u02CE\x07e\x02\x02\u02CE\u02CF\x07\u0151\x02\x02\u02CF\u02E5\x05F$\x05"+
		"\u02D0\u02D1\x07\u017E\x02\x02\u02D1\u02D2\x07\u0151\x02\x02\u02D2\u02D3"+
		"\x07f\x02\x02\u02D3\u02D4\x07\u0151\x02\x02\u02D4\u02D5\x05\x92J\x02\u02D5"+
		"\u02D6\x07\u0151\x02\x02\u02D6\u02D7\x07\u0185\x02\x02\u02D7\u02D8\x07"+
		"R\x02\x02\u02D8\u02D9\x07\u0151\x02\x02\u02D9\u02DA\x07e\x02\x02\u02DA"+
		"\u02DB\x07\u0151\x02\x02\u02DB\u02DC\x05\x9EP\x02\u02DC\u02E5\x03\x02"+
		"\x02\x02\u02DD\u02DE\x07\u017E\x02\x02\u02DE\u02DF\x07\u0151\x02\x02\u02DF"+
		"\u02E0\x07f\x02\x02\u02E0\u02E1\x07\u0151\x02\x02\u02E1\u02E2\x07g\x02"+
		"\x02\u02E2\u02E3\x07\u0151\x02\x02\u02E3\u02E5\x05\x9EP\x02\u02E4\u02B2"+
		"\x03\x02\x02\x02\u02E4\u02B4\x03\x02\x02\x02\u02E4\u02B5\x03\x02\x02\x02"+
		"\u02E4\u02B6\x03\x02\x02\x02\u02E4\u02B7\x03\x02\x02\x02\u02E4\u02B8\x03"+
		"\x02\x02\x02\u02E4\u02B9\x03\x02\x02\x02\u02E4\u02BA\x03\x02\x02\x02\u02E4"+
		"\u02BB\x03\x02\x02\x02\u02E4\u02BF\x03\x02\x02\x02\u02E4\u02C3\x03\x02"+
		"\x02\x02\u02E4\u02C6\x03\x02\x02\x02\u02E4\u02CA\x03\x02\x02\x02\u02E4"+
		"\u02CB\x03\x02\x02\x02\u02E4\u02D0\x03\x02\x02\x02\u02E4\u02DD\x03\x02"+
		"\x02\x02\u02E5\u030B\x03\x02\x02\x02\u02E6\u02E7\f\f\x02\x02\u02E7\u02E8"+
		"\x07\u0151\x02\x02\u02E8\u02E9\x07B\x02\x02\u02E9\u02EA\x07\u0151\x02"+
		"\x02\u02EA\u030A\x05F$\r\u02EB\u02EC\f\v\x02\x02\u02EC\u02ED\x07\u0151"+
		"\x02\x02\u02ED\u02EE\x07c\x02\x02\u02EE\u02EF\x07\u0151\x02\x02\u02EF"+
		"\u030A\x05F$\f\u02F0\u02F1\f\n\x02\x02\u02F1\u02F2\x07\b\x02\x02\u02F2"+
		"\u02F7\x07\u0151\x02\x02\u02F3\u02F4\x05F$\x02\u02F4\u02F5\x07\b\x02\x02"+
		"\u02F5\u02F6\x07\u0151\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02F3"+
		"\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02"+
		"\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u02FB\u02FC\x07c\x02\x02\u02FC\u02FD\x07\u0151\x02\x02\u02FD\u02FE\x05"+
		"F$\v\u02FE\u030A\x03\x02\x02\x02\u02FF\u0300\f\x06\x02\x02\u0300\u0301"+
		"\x07\u0151\x02\x02\u0301\u0302\x07d\x02\x02\u0302\u0303\x07\u0151\x02"+
		"\x02\u0303\u030A\x05F$\x07\u0304\u0305\f\r\x02\x02\u0305\u0306\x07\u0151"+
		"\x02\x02\u0306\u0307\x07\u019B\x02\x02\u0307\u0308\x07\u0151\x02\x02\u0308"+
		"\u030A\x05\\/\x02\u0309\u02E6\x03\x02\x02\x02\u0309\u02EB\x03\x02\x02"+
		"\x02\u0309\u02F0\x03\x02\x02\x02\u0309\u02FF\x03\x02\x02\x02\u0309\u0304"+
		"\x03\x02\x02\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02"+
		"\u030B\u030C\x03\x02\x02\x02\u030CG\x03\x02\x02\x02\u030D\u030B\x03\x02"+
		"\x02\x02\u030E\u030F\x05B\"\x02\u030F\u0320\x07\u0151\x02\x02\u0310\u0321"+
		"\x07h\x02\x02\u0311\u0321\x07i\x02\x02\u0312\u0313\x07\u0194\x02\x02\u0313"+
		"\u0314\x07\u0151\x02\x02\u0314\u0321\x07h\x02\x02\u0315\u0316\x07\u0193"+
		"\x02\x02\u0316\u0317\x07\u0151\x02\x02\u0317\u0321\x07h\x02\x02\u0318"+
		"\u0321\x07j\x02\x02\u0319\u0321\x07k\x02\x02\u031A\u031B\x07\u0194\x02"+
		"\x02\u031B\u031C\x07\u0151\x02\x02\u031C\u0321\x07j\x02\x02\u031D\u031E"+
		"\x07\u0193\x02\x02\u031E\u031F\x07\u0151\x02\x02\u031F\u0321\x07j\x02"+
		"\x02\u0320\u0310\x03\x02\x02\x02\u0320\u0311\x03\x02\x02\x02\u0320\u0312"+
		"\x03\x02\x02\x02\u0320\u0315\x03\x02\x02\x02\u0320\u0318\x03\x02\x02\x02"+
		"\u0320\u0319\x03\x02\x02\x02\u0320\u031A\x03\x02\x02\x02\u0320\u031D\x03"+
		"\x02\x02\x02\u0321\u0363\x03\x02\x02\x02\u0322\u0323\x07l\x02\x02\u0323"+
		"\u0324\x07\u0151\x02\x02\u0324\u032B\x05\x9EP\x02\u0325\u0326\x07\u0151"+
		"\x02\x02\u0326\u0327\x07B\x02\x02\u0327\u0328\x07\u0151\x02\x02\u0328"+
		"\u0329\x07l\x02\x02\u0329\u032A\x07\u0151\x02\x02\u032A\u032C\x05\x9E"+
		"P\x02\u032B\u0325\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0363"+
		"\x03\x02\x02\x02\u032D\u032E\x07m\x02\x02\u032E\u032F\x07\u0151\x02\x02"+
		"\u032F\u0363\x05\x9EP\x02\u0330\u0331\x07\u014F\x02\x02\u0331\u0332\x07"+
		"\u0151\x02\x02\u0332\u0363\x07\u0171\x02\x02\u0333\u0334\x07\u0182\x02"+
		"\x02\u0334\u0335\x07\u0151\x02\x02\u0335\u0336\x07n\x02\x02\u0336\u0337"+
		"\x07\u0151\x02\x02\u0337\u0363\x05F$\x02\u0338\u0363\x07o\x02\x02\u0339"+
		"\u033A\x07p\x02\x02\u033A\u033E\x07\u0151\x02\x02\u033B\u033C\x05\xA6"+
		"T\x02\u033C\u033D\x07\u0151\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E"+
		"\u033B\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0340\x03\x02"+
		"\x02\x02\u0340\u0363\x07q\x02\x02\u0341\u0342\x07e\x02\x02\u0342\u0343"+
		"\x07\u0151\x02\x02\u0343\u0344\x07\u017E\x02\x02\u0344\u0345\x07\u0151"+
		"\x02\x02\u0345\u0346\x05\xAEX\x02\u0346\u0347\x07\u0151\x02\x02\u0347"+
		"\u0348\x07r\x02\x02\u0348\u0349\x07\u0151\x02\x02\u0349\u034A\x07e\x02"+
		"\x02\u034A\u034B\x07\u0151\x02\x02\u034B\u034C\x05\xCCg\x02\u034C\u034D"+
		"\x07\u0151\x02\x02\u034D\u034E\x07s\x02\x02\u034E\u0363\x03\x02\x02\x02"+
		"\u034F\u0350\x05F$\x02\u0350\u0351\x07\u0151\x02\x02\u0351\u0352\x07t"+
		"\x02\x02\u0352\u0363\x03\x02\x02\x02\u0353\u0354\x07u\x02\x02\u0354\u0355"+
		"\x07\u0151\x02\x02\u0355\u0363\x05F$\x02\u0356\u0357\x07\u0182\x02\x02"+
		"\u0357\u0358\x07\u0151\x02\x02\u0358\u0359\x07v\x02\x02\u0359\u035A\x07"+
		"\u0151\x02\x02\u035A\u0363\x05F$\x02\u035B\u0363\x07w\x02\x02\u035C\u035D"+
		"\x07x\x02\x02\u035D\u035E\x07\u0151\x02\x02\u035E\u0363\x05\xACW\x02\u035F"+
		"\u0360\x07\u01A2\x02\x02\u0360\u0361\x07\u0151\x02\x02\u0361\u0363\x07"+
		"y\x02\x02\u0362\u030E\x03\x02\x02\x02\u0362\u0322\x03\x02\x02\x02\u0362"+
		"\u032D\x03\x02\x02\x02\u0362\u0330\x03\x02\x02\x02\u0362\u0333\x03\x02"+
		"\x02\x02\u0362\u0338\x03\x02\x02\x02\u0362\u0339\x03\x02\x02\x02\u0362"+
		"\u0341\x03\x02\x02\x02\u0362\u034F\x03\x02\x02\x02\u0362\u0353\x03\x02"+
		"\x02\x02\u0362\u0356\x03\x02\x02\x02\u0362\u035B\x03\x02\x02\x02\u0362"+
		"\u035C\x03\x02\x02\x02\u0362\u035F\x03\x02\x02\x02\u0363I\x03\x02\x02"+
		"\x02\u0364\u0366\b&\x01\x02\u0365\u0367\x05R*\x02\u0366\u0365\x03\x02"+
		"\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368"+
		"\u0369\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x07\u0151"+
		"\x02\x02\u036B\u036C\x05J&\r\u036C\u037B\x03\x02\x02\x02\u036D\u0372\x07"+
		"\u016E\x02\x02\u036E\u036F\x07\u0151\x02\x02\u036F\u0370\x07e\x02\x02"+
		"\u0370\u0371\x07\u0151\x02\x02\u0371\u0373\x05F$\x02\u0372\u036E\x03\x02"+
		"\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u037B\x03\x02\x02\x02\u0374"+
		"\u037B\x07z\x02\x02\u0375\u0376\x05N(\x02\u0376\u0377\x07\u0151\x02\x02"+
		"\u0377\u0378\x05J&\n\u0378\u037B\x03\x02\x02\x02\u0379\u037B\x05\xA8U"+
		"\x02\u037A\u0364\x03\x02\x02\x02\u037A\u036D\x03\x02\x02\x02\u037A\u0374"+
		"\x03\x02\x02\x02\u037A\u0375\x03\x02\x02\x02\u037A\u0379\x03\x02\x02\x02"+
		"\u037B\u03A2\x03\x02\x02\x02\u037C\u037D\f\t\x02\x02\u037D\u037E\x07\u0151"+
		"\x02\x02\u037E\u037F\x07c\x02\x02\u037F\u0380\x07\u0151\x02\x02\u0380"+
		"\u03A1\x05J&\n\u0381\u0382\f\b\x02\x02\u0382\u0383\x07\b\x02\x02\u0383"+
		"\u0388\x07\u0151\x02\x02\u0384\u0385\x05J&\x02\u0385\u0386\x07\b\x02\x02"+
		"\u0386\u0387\x07\u0151\x02\x02\u0387\u0389\x03\x02\x02\x02\u0388\u0384"+
		"\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02"+
		"\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038D\x07"+
		"c\x02\x02\u038D\u038E\x07\u0151\x02\x02\u038E\u038F\x05J&\t\u038F\u03A1"+
		"\x03\x02\x02\x02\u0390\u0391\f\x03\x02\x02\u0391\u0392\x07\u0151\x02\x02"+
		"\u0392\u0393\x07d\x02\x02\u0393\u0394\x07\u0151\x02\x02\u0394\u03A1\x05"+
		"J&\x04\u0395\u0396\f\x07\x02\x02\u0396\u0397\x07\u0151\x02\x02\u0397\u0398"+
		"\x07{\x02\x02\u0398\u0399\x07\u0151\x02\x02\u0399\u03A1\x05\x0E\b\x02"+
		"\u039A\u039B\f\x06\x02\x02\u039B\u039C\x07\u0151\x02\x02\u039C\u03A1\x05"+
		"\x86D\x02\u039D\u039E\f\x04\x02\x02\u039E\u039F\x07\u0151\x02\x02\u039F"+
		"\u03A1\x05H%\x02\u03A0\u037C\x03\x02\x02\x02\u03A0\u0381\x03\x02\x02\x02"+
		"\u03A0\u0390\x03\x02\x02\x02\u03A0\u0395\x03\x02\x02\x02\u03A0\u039A\x03"+
		"\x02\x02\x02\u03A0\u039D\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2"+
		"\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3K\x03\x02\x02"+
		"\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\x07\u017E\x02\x02\u03A6\u03A7"+
		"\x07\u0151\x02\x02\u03A7\u03B0\x07|\x02\x02\u03A8\u03A9\x07\u017E\x02"+
		"\x02\u03A9\u03AA\x07\u0151\x02\x02\u03AA\u03B0\x07p\x02\x02\u03AB\u03B0"+
		"\x07}\x02\x02\u03AC\u03B0\x07\u017E\x02\x02\u03AD\u03B0\x05P)\x02\u03AE"+
		"\u03B0\x05\x9AN\x02\u03AF\u03A5\x03\x02\x02\x02\u03AF\u03A8\x03\x02\x02"+
		"\x02\u03AF\u03AB\x03\x02\x02\x02\u03AF\u03AC\x03\x02\x02\x02\u03AF\u03AD"+
		"\x03\x02\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0M\x03\x02\x02\x02\u03B1"+
		"\u03B2\t\n\x02\x02\u03B2O\x03\x02\x02\x02\u03B3\u03DA\x03\x02\x02\x02"+
		"\u03B4\u03DA\x07\u015E\x02\x02\u03B5\u03B8\x07\u015F\x02\x02\u03B6\u03B7"+
		"\x07\u0151\x02\x02\u03B7\u03B9\x07\u017E\x02\x02\u03B8\u03B6\x03\x02\x02"+
		"\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03DA\x03\x02\x02\x02\u03BA\u03DA"+
		"\x07\u0181\x02\x02\u03BB\u03DA\x07\u0153\x02\x02\u03BC\u03DA\x07\u0182"+
		"\x02\x02\u03BD\u03DA\x07\u018B\x02\x02\u03BE\u03DA\x07\u018C\x02\x02\u03BF"+
		"\u03DA\x07\u0152\x02\x02\u03C0\u03DA\x07\u0187\x02\x02\u03C1\u03DA\x07"+
		"\u0186\x02\x02\u03C2\u03C3\x07\u017E\x02\x02\u03C3\u03C4\x07\u0151\x02"+
		"\x02\u03C4\u03DA\x07\x80\x02\x02\u03C5\u03C6\x07\u017A\x02\x02\u03C6\u03C7"+
		"\x07\u0151\x02\x02\u03C7\u03C8\x07\x81\x02\x02\u03C8\u03C9\x07\u0151\x02"+
		"\x02\u03C9\u03DA\x05\x92J\x02\u03CA\u03CD\x05\x9AN\x02\u03CB\u03CC\x07"+
		"\u0151\x02\x02\u03CC\u03CE\x05P)\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD"+
		"\u03CE\x03\x02\x02\x02\u03CE\u03DA\x03\x02\x02\x02\u03CF\u03D0\x07\u0152"+
		"\x02\x02\u03D0\u03D2\x07\u0151\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1"+
		"\u03D2\x03\x02\x02\x02\u03D2\u03D6\x03\x02\x02\x02\u03D3\u03D4\x05\x9A"+
		"N\x02\u03D4\u03D5\x07\u0151\x02\x02\u03D5\u03D7\x03\x02\x02\x02\u03D6"+
		"\u03D3\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D8\x03\x02"+
		"\x02\x02\u03D8\u03DA\x07\u0149\x02\x02\u03D9\u03B3\x03\x02\x02\x02\u03D9"+
		"\u03B4\x03\x02\x02\x02\u03D9\u03B5\x03\x02\x02\x02\u03D9\u03BA\x03\x02"+
		"\x02\x02\u03D9\u03BB\x03\x02\x02\x02\u03D9\u03BC\x03\x02\x02\x02\u03D9"+
		"\u03BD\x03\x02\x02\x02\u03D9\u03BE\x03\x02\x02\x02\u03D9\u03BF\x03\x02"+
		"\x02\x02\u03D9\u03C0\x03\x02\x02\x02\u03D9\u03C1\x03\x02\x02\x02\u03D9"+
		"\u03C2\x03\x02\x02\x02\u03D9\u03C5\x03\x02\x02\x02\u03D9\u03CA\x03\x02"+
		"\x02\x02\u03D9\u03D1\x03\x02\x02\x02\u03DAQ\x03\x02\x02\x02\u03DB\u03F1"+
		"\x07\u0153\x02\x02\u03DC\u03DD\x07\x82\x02\x02\u03DD\u03F1\x05\xAEX\x02"+
		"\u03DE\u03DF\x07\x83\x02\x02\u03DF\u03F1\x05\xAEX\x02\u03E0\u03F1\x07"+
		"p\x02\x02\u03E1\u03F1\x05\xAEX\x02\u03E2\u03F1\x07\x84\x02\x02\u03E3\u03F1"+
		"\x07\x85\x02\x02\u03E4\u03F1\x05~@\x02\u03E5\u03F1\x07\x86\x02\x02\u03E6"+
		"\u03F1\x07\x87\x02\x02\u03E7\u03F1\x05\x80A\x02\u03E8\u03F1\x07\u014A"+
		"\x02\x02\u03E9\u03F1\x07\x88\x02\x02\u03EA\u03F1\x07\x89\x02\x02\u03EB"+
		"\u03EC\x07\x88\x02\x02\u03EC\u03ED\x07\u0151\x02\x02\u03ED\u03EE\x07c"+
		"\x02\x02\u03EE\u03EF\x07\u0151\x02\x02\u03EF\u03F1\x07\x89\x02\x02\u03F0"+
		"\u03DB\x03\x02\x02\x02\u03F0\u03DC\x03\x02\x02\x02\u03F0\u03DE\x03\x02"+
		"\x02\x02\u03F0\u03E0\x03\x02\x02\x02\u03F0\u03E1\x03\x02\x02\x02\u03F0"+
		"\u03E2\x03\x02\x02\x02\u03F0\u03E3\x03\x02\x02\x02\u03F0\u03E4\x03\x02"+
		"\x02\x02\u03F0\u03E5\x03\x02\x02\x02\u03F0\u03E6\x03\x02\x02\x02\u03F0"+
		"\u03E7\x03\x02\x02\x02\u03F0\u03E8\x03\x02\x02\x02\u03F0\u03E9\x03\x02"+
		"\x02\x02\u03F0\u03EA\x03\x02\x02\x02\u03F0\u03EB\x03\x02\x02\x02\u03F1"+
		"S\x03\x02\x02\x02\u03F2\u03F3\b+\x01\x02\u03F3\u03F4\x07\u0142\x02\x02"+
		"\u03F4\u03F5\x07\u0151\x02\x02\u03F5\u0538\x05F$\x02\u03F6\u03F7\x07\u0143"+
		"\x02\x02\u03F7\u03F8\x07\u0151\x02\x02\u03F8\u0538\x05F$\x02\u03F9\u03FA"+
		"\x07\u0167\x02\x02\u03FA\u03FB\x07\u0151\x02\x02\u03FB\u0538\x05F$\x02"+
		"\u03FC\u03FD\x07\u015D\x02\x02\u03FD\u03FE\x07\u0151\x02\x02\u03FE\u0401"+
		"\x05F$\x02\u03FF\u0400\x07\u0151\x02\x02\u0400\u0402\x05\xA6T\x02\u0401"+
		"\u03FF\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03\x02"+
		"\x02\x02\u0403\u0404\x07\u0151\x02\x02\u0404\u0405\x07J\x02\x02\u0405"+
		"\u0406\x07\u0151\x02\x02\u0406\u0407\x05\x9EP\x02\u0407\u0538\x03\x02"+
		"\x02\x02\u0408\u0409\x07\u0146\x02\x02\u0409\u040A\x07\u0151\x02\x02\u040A"+
		"\u040D\x05F$\x02\u040B\u040C\x07\u0151\x02\x02\u040C\u040E\x07\x8A\x02"+
		"\x02\u040D\u040B\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0411"+
		"\x03\x02\x02\x02\u040F\u0410\x07\u0151\x02\x02\u0410\u0412\x05t;\x02\u0411"+
		"\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0538\x03\x02"+
		"\x02\x02\u0413\u0414\x07\u014D\x02\x02\u0414\u0415\x07\u0151\x02\x02\u0415"+
		"\u0538\x05|?\x02\u0416\u0417\x07\u014D\x02\x02\u0417\u0418\x07\u0151\x02"+
		"\x02\u0418\u0419\x07\u0186\x02\x02\u0419\u041A\x07\u0151\x02\x02\u041A"+
		"\u041B\x07\x84\x02\x02\u041B\u041C\x07\u0151\x02\x02\u041C\u041D\x07\u019B"+
		"\x02\x02\u041D\u041E\x07\u0151\x02\x02\u041E\u0538\x05F$\x02\u041F\u0420"+
		"\x07\u016E\x02\x02\u0420\u0421\x07\u0151\x02\x02\u0421\u0538\x05F$\x02"+
		"\u0422\u0423\x07\u019C\x02\x02\u0423\u0424\x07\u0151\x02\x02\u0424\u0425"+
		"\x05\x9AN\x02\u0425\u0426\x07\u0151\x02\x02\u0426\u0427\x05\x8AF\x02\u0427"+
		"\u0428\x07\u0151\x02\x02\u0428\u0429\x07\u0155\x02\x02\u0429\u042A\x07"+
		"R\x02\x02\u042A\u042B\x07\u0151\x02\x02\u042B\u042C\x07m\x02\x02\u042C"+
		"\u042D\x07\u0151\x02\x02\u042D\u042E\x05F$\x02\u042E\u0538\x03\x02\x02"+
		"\x02\u042F\u0431\t\v\x02\x02\u0430\u0432\x07R\x02\x02\u0431\u0430\x03"+
		"\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433"+
		"\u0434\x07\u0151\x02\x02\u0434\u043B\x05F$\x02\u0435\u0436\x07\u0151\x02"+
		"\x02\u0436\u0437\x07\x8B\x02\x02\u0437\u0438\x07\u0151\x02\x02\u0438\u0439"+
		"\x07\u0180\x02\x02\u0439\u043A\x07\u0151\x02\x02\u043A\u043C\x07\x8C\x02"+
		"\x02\u043B\u0435\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043F"+
		"\x03\x02\x02\x02\u043D\u043E\x07\u0151\x02\x02\u043E\u0440\x05p9\x02\u043F"+
		"\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0538\x03\x02"+
		"\x02\x02\u0441\u0442\x07\u0154\x02\x02\u0442\u0443\x07\u0151\x02\x02\u0443"+
		"\u0538\x07\u0141\x02\x02\u0444\u0445\x07\u018F\x02\x02\u0445\u0446\x07"+
		"\u0151\x02\x02\u0446\u044B\x05\x9EP\x02\u0447\u0448\x07\u0151\x02\x02"+
		"\u0448\u0449\x07\u0188\x02\x02\u0449\u044A\x07\u0151\x02\x02\u044A\u044C"+
		"\x05F$\x02\u044B\u0447\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C"+
		"\u0538\x03\x02\x02\x02\u044D\u044E\x07\u014F\x02\x02\u044E\u0450\x07\u0151"+
		"\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450"+
		"\u0451\x03\x02\x02\x02\u0451\u0452\x07\u018A\x02\x02\u0452\u0453\x07\u0151"+
		"\x02\x02\u0453\u0538\x05F$\x02\u0454\u0455\x07\u014F\x02\x02\u0455\u0457"+
		"\x07\u0151\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02\x02"+
		"\x02\u0457\u045B\x03\x02\x02\x02\u0458\u045C\x07\u015B\x02\x02\u0459\u045A"+
		"\x07\u015B\x02\x02\u045A\u045C\x07R\x02\x02\u045B\u0458\x03\x02\x02\x02"+
		"\u045B\u0459\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u0466\x07"+
		"\u0151\x02\x02\u045E\u045F\x07\u0186\x02\x02\u045F\u0460\x07\u0151\x02"+
		"\x02\u0460\u0467\x07\u0185\x02\x02\u0461\u0462\x05\x92J\x02\u0462\u0463"+
		"\x07\u0151\x02\x02\u0463\u0464\x07\u0185\x02\x02\u0464\u0465\x07R\x02"+
		"\x02\u0465\u0467\x03\x02\x02\x02\u0466\u045E\x03\x02\x02\x02\u0466\u0461"+
		"\x03\x02\x02\x02\u0467\u0538\x03\x02\x02\x02\u0468\u046A\x07\u0158\x02"+
		"\x02\u0469\u046B\x07R\x02\x02\u046A\u0469\x03\x02\x02\x02\u046A\u046B"+
		"\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046D\x07\u0151\x02"+
		"\x02\u046D\u0538\x05\x9EP\x02\u046E\u0470\x07\u0158\x02\x02\u046F\u0471"+
		"\x07R\x02\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02"+
		"\u0471\u0472\x03\x02\x02\x02\u0472\u0475\x07\u0151\x02\x02\u0473\u0476"+
		"\x05F$\x02\u0474\u0476\x05\x9EP\x02\u0475\u0473\x03\x02\x02\x02\u0475"+
		"\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0478\x07\u0151"+
		"\x02\x02\u0478\u0479\x07\x8D\x02\x02\u0479\u047A\x07\u0151\x02\x02\u047A"+
		"\u047B\x05\x9EP\x02\u047B\u0538\x03\x02\x02\x02\u047C\u047D\x07\u0155"+
		"\x02\x02\u047D\u047E\x07\u0151\x02\x02\u047E\u0538\x05F$\x02\u047F\u0480"+
		"\x07\u014E\x02\x02\u0480\u0481\x07\u0151\x02\x02\u0481\u0538\x05F$\x02"+
		"\u0482\u0483\x07\u01A1\x02\x02\u0483\u0484\x07\u0151\x02\x02\u0484\u0538"+
		"\x07\x8E\x02\x02\u0485\u0486\x07\u0197\x02\x02\u0486\u0487\x07\u0151\x02"+
		"\x02\u0487\u0538\x05F$\x02\u0488\u0489\x07\u014F\x02\x02\u0489\u048B\x07"+
		"\u0151\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02"+
		"\u048B\u048C\x03\x02\x02\x02\u048C\u048D\x07\u0150\x02\x02\u048D\u048E"+
		"\x07\u0151\x02\x02\u048E\u0538\x05\xBC_\x02\u048F\u0490\x07\u0150\x02"+
		"\x02\u0490\u0491\x07\u0151\x02\x02\u0491\u0492\x05\x94K\x02\u0492\u0493"+
		"\x07\u0151\x02\x02\u0493\u0494\x07;\x02\x02\u0494\u0538\x03\x02\x02\x02"+
		"\u0495\u0496\x07\u0165\x02\x02\u0496\u0497\x07\u0151\x02\x02\u0497\u0538"+
		"\x07\x8F\x02\x02\u0498\u0499\x07\u0165\x02\x02\u0499\u049A\x07\u0151\x02"+
		"\x02\u049A\u049B\x05\x92J\x02\u049B\u049C\x07\u0151\x02\x02\u049C\u049D"+
		"\x07\x90\x02\x02\u049D\u0538\x03\x02\x02\x02\u049E\u049F\x07\u0165\x02"+
		"\x02\u049F\u04A0\x07\u0151\x02\x02\u04A0\u04A5\x05\xC0a\x02\u04A1\u04A2"+
		"\x07\u0151\x02\x02\u04A2\u04A3\x07c\x02\x02\u04A3\u04A4\x07\u0151\x02"+
		"\x02\u04A4\u04A6\x05\xC0a\x02\u04A5\u04A1\x03\x02\x02\x02\u04A5\u04A6"+
		"\x03\x02\x02\x02\u04A6\u0538\x03\x02\x02\x02\u04A7\u04A8\x07\u0164\x02"+
		"\x02\u04A8\u04A9\x07\u0151\x02\x02\u04A9\u04AA\x05x=\x02\u04AA\u04AB\x07"+
		"\u0151\x02\x02\u04AB\u04AC\x05z>\x02\u04AC\u04AD\x07\u0151\x02\x02\u04AD"+
		"\u04B2\x07\x91\x02\x02\u04AE\u04AF\x07\u0151\x02\x02\u04AF\u04B0\x07J"+
		"\x02\x02\u04B0\u04B1\x07\u0151\x02\x02\u04B1\u04B3\x05F$\x02\u04B2\u04AE"+
		"\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B6\x03\x02\x02\x02"+
		"\u04B4\u04B5\x07\u0151\x02\x02\u04B5\u04B7\x05p9\x02\u04B6\u04B4\x03\x02"+
		"\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u0538\x03\x02\x02\x02\u04B8"+
		"\u04B9\x07\u013F\x02\x02\u04B9\u04BA\x07\u0151\x02\x02\u04BA\u04BB\x05"+
		"\x92J\x02\u04BB\u04BC\x07\u0151\x02\x02\u04BC\u04BD\x05\x8AF\x02\u04BD"+
		"\u04C1\x07\u0151\x02\x02\u04BE\u04C2\x07\u0155\x02\x02\u04BF\u04C0\x07"+
		"\u0155\x02\x02\u04C0\u04C2\x07R\x02\x02\u04C1\u04BE\x03\x02\x02\x02\u04C1"+
		"\u04BF\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x07\u0151"+
		"\x02\x02\u04C4\u04C5\x07S\x02\x02\u04C5\u04C6\x07\u0151\x02\x02\u04C6"+
		"\u04C7\x05F$\x02\u04C7\u0538\x03\x02\x02\x02\u04C8\u04C9\x07\u014F\x02"+
		"\x02\u04C9\u04CA\x07\u0151\x02\x02\u04CA\u04CB\x07\u018A\x02\x02\u04CB"+
		"\u04CC\x07\u0151\x02\x02\u04CC\u04D1\x05F$\x02\u04CD\u04CE\x07\u0151\x02"+
		"\x02\u04CE\u04CF\x07m\x02\x02\u04CF\u04D0\x07\u0151\x02\x02\u04D0\u04D2"+
		"\x07\u018E\x02\x02\u04D1\u04CD\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02"+
		"\x02\u04D2\u0538\x03\x02\x02\x02\u04D3\u04D4\x07\u016A\x02\x02\u04D4\u04D5"+
		"\x07\u0151\x02\x02\u04D5\u04D6\x07\x92\x02\x02\u04D6\u04D7\x07\u0151\x02"+
		"\x02\u04D7\u04D8\x05\x92J\x02\u04D8\u04D9\x07\u0151\x02\x02\u04D9\u04DA"+
		"\x07\u0185\x02\x02\u04DA\u04DB\x07R\x02\x02\u04DB\u04DC\x07\u0151\x02"+
		"\x02\u04DC\u04DD\x07e\x02\x02\u04DD\u04DE\x07\u0151\x02\x02\u04DE\u04DF"+
		"\x05\x9EP\x02\u04DF\u0538\x03\x02\x02\x02\u04E0\u04E1\x07\u016A\x02\x02"+
		"\u04E1\u04E2\x07\u0151\x02\x02\u04E2\u04E3\x07\u017A\x02\x02\u04E3\u04E4"+
		"\x07\u0151\x02\x02\u04E4\u0538\x05F$\x02\u04E5\u04E6\x07\u016B\x02\x02"+
		"\u04E6\u04E7\x07\u0151\x02\x02\u04E7\u0538\x05F$\x02\u04E8\u04E9\x07\u013F"+
		"\x02\x02\u04E9\u04EA\x07\u0151\x02\x02\u04EA\u04EB\x05F$\x02\u04EB\u04EC"+
		"\x07\u0151\x02\x02\u04EC\u04EF\x05\xA2R\x02\u04ED\u04EE\x07\u0151\x02"+
		"\x02\u04EE\u04F0\x07\x86\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04EF\u04F0"+
		"\x03\x02\x02\x02\u04F0\u04F8\x03\x02\x02\x02\u04F1\u04F2\x07\u0151\x02"+
		"\x02\u04F2\u04F3\x07B\x02\x02\u04F3\u04F4\x07\u0151\x02\x02\u04F4\u04F5"+
		"\x05F$\x02\u04F5\u04F6\x07\u0151\x02\x02\u04F6\u04F7\x05\xA2R\x02\u04F7"+
		"\u04F9\x03\x02\x02\x02\u04F8\u04F1\x03\x02\x02\x02\u04F8\u04F9\x03\x02"+
		"\x02\x02\u04F9\u0538\x03\x02\x02\x02\u04FA\u04FB\x05n8\x02\u04FB\u04FC"+
		"\x07\u0151\x02\x02\u04FC\u04FD\x07h\x02\x02\u04FD\u04FE\x07\u0151\x02"+
		"\x02\u04FE\u04FF\x07e\x02\x02\u04FF\u0500\x07\u0151\x02\x02\u0500\u0501"+
		"\x05F$\x02\u0501\u0538\x03\x02\x02\x02\u0502\u0503\x07\u014F\x02\x02\u0503"+
		"\u0505\x07\u0151\x02\x02\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02"+
		"\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0507\x07\x93\x02\x02\u0507"+
		"\u0508\x07\u0151\x02\x02\u0508\u0513\x054\x1B\x02\u0509\u050A\x07\u0176"+
		"\x02\x02\u050A\u050B\x07\u0151\x02\x02\u050B\u050C\x07\u017D\x02\x02\u050C"+
		"\u050D\x07\u0151\x02\x02\u050D\u050E\x07\u014F\x02\x02\u050E\u050F\x07"+
		"\u0151\x02\x02\u050F\u0510\x07:\x02\x02\u0510\u0511\x07\b\x02\x02\u0511"+
		"\u0512\x07\u0151\x02\x02\u0512\u0514\x054\x1B\x02\u0513\u0509\x03\x02"+
		"\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0538\x03\x02\x02\x02\u0515"+
		"\u0516\x07\x94\x02\x02\u0516\u0517\x07\u0151\x02\x02\u0517\u0518\x05F"+
		"$\x02\u0518\u0519\x07\u0151\x02\x02\u0519\u051A\x05Z.\x02\u051A\u0538"+
		"\x03\x02\x02\x02\u051B\u051C\x07\u018A\x02\x02\u051C\u051D\x07\u0151\x02"+
		"\x02\u051D\u051E\x07\x96\x02\x02\u051E\u051F\x07\u0151\x02\x02\u051F\u0538"+
		"\x05F$\x02\u0520\u0521\x07\u0199\x02\x02\u0521\u0522\x07\u0151\x02\x02"+
		"\u0522\u0523\x07\x97\x02\x02\u0523\u0524\x07\u0151\x02\x02\u0524\u0525"+
		"\x05F$\x02\u0525\u0526\x07\u0151\x02\x02\u0526\u0527\x05t;\x02\u0527\u0538"+
		"\x03\x02\x02\x02\u0528\u0529\x07\x98\x02\x02\u0529\u052A\x07\u0151\x02"+
		"\x02\u052A\u0538\x05F$\x02\u052B\u052C\x07\u01A0\x02\x02\u052C\u052D\x07"+
		"\u0151\x02\x02\u052D\u052E\x07\x99\x02\x02\u052E\u052F\x07\u0151\x02\x02"+
		"\u052F\u0538\x05F$\x02\u0530\u0531\x07\u018A\x02\x02\u0531\u0532\x07\u0151"+
		"\x02\x02\u0532\u0533\x07\u0186\x02\x02\u0533\u0534\x07\u0151\x02\x02\u0534"+
		"\u0535\x07\u0185\x02\x02\u0535\u0536\x07\u0151\x02\x02\u0536\u0538\x07"+
		"\x9A\x02\x02\u0537\u03F2\x03\x02\x02\x02\u0537\u03F6\x03\x02\x02\x02\u0537"+
		"\u03F9\x03\x02\x02\x02\u0537\u03FC\x03\x02\x02\x02\u0537\u0408\x03\x02"+
		"\x02\x02\u0537\u0413\x03\x02\x02\x02\u0537\u0416\x03\x02\x02\x02\u0537"+
		"\u041F\x03\x02\x02\x02\u0537\u0422\x03\x02\x02\x02\u0537\u042F\x03\x02"+
		"\x02\x02\u0537\u0441\x03\x02\x02\x02\u0537\u0444\x03\x02\x02\x02\u0537"+
		"\u044F\x03\x02\x02\x02\u0537\u0456\x03\x02\x02\x02\u0537\u0468\x03\x02"+
		"\x02\x02\u0537\u046E\x03\x02\x02\x02\u0537\u047C\x03\x02\x02\x02\u0537"+
		"\u047F\x03\x02\x02\x02\u0537\u0482\x03\x02\x02\x02\u0537\u0485\x03\x02"+
		"\x02\x02\u0537\u048A\x03\x02\x02\x02\u0537\u048F\x03\x02\x02\x02\u0537"+
		"\u0495\x03\x02\x02\x02\u0537\u0498\x03\x02\x02\x02\u0537\u049E\x03\x02"+
		"\x02\x02\u0537\u04A7\x03\x02\x02\x02\u0537\u04B8\x03\x02\x02\x02\u0537"+
		"\u04C8\x03\x02\x02\x02\u0537\u04D3\x03\x02\x02\x02\u0537\u04E0\x03\x02"+
		"\x02\x02\u0537\u04E5\x03\x02\x02\x02\u0537\u04E8\x03\x02\x02\x02\u0537"+
		"\u04FA\x03\x02\x02\x02\u0537\u0504\x03\x02\x02\x02\u0537\u0515\x03\x02"+
		"\x02\x02\u0537\u051B\x03\x02\x02\x02\u0537\u0520\x03\x02\x02\x02\u0537"+
		"\u0528\x03\x02\x02\x02\u0537\u052B\x03\x02\x02\x02\u0537\u0530\x03\x02"+
		"\x02\x02\u0538\u054C\x03\x02\x02\x02\u0539\u053A\f\t\x02\x02\u053A\u053B"+
		"\x07\u0151\x02\x02\u053B\u053C\x07B\x02\x02\u053C\u053D\x07\u0151\x02"+
		"\x02\u053D\u054B\x05T+\n\u053E\u053F\f\b\x02\x02\u053F\u0540\x07\u0151"+
		"\x02\x02\u0540\u0541\x07\x95\x02\x02\u0541\u0542\x07\u0151\x02\x02\u0542"+
		"\u054B\x05T+\t\u0543\u0544\f\n\x02\x02\u0544\u0545\x07\u0151\x02\x02\u0545"+
		"\u0546\x07\u0188\x02\x02\u0546\u0547\x07\u0151\x02\x02\u0547\u0548\x07"+
		"\u015E\x02\x02\u0548\u0549\x07\u0151\x02\x02\u0549\u054B\x05J&\x02\u054A"+
		"\u0539\x03\x02\x02\x02\u054A\u053E\x03\x02\x02\x02\u054A\u0543\x03\x02"+
		"\x02\x02\u054B\u054E\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054C"+
		"\u054D\x03\x02\x02\x02\u054DU\x03\x02\x02\x02\u054E\u054C\x03\x02\x02"+
		"\x02\u054F\u0550\b,\x01\x02\u0550\u0551\x05n8\x02\u0551\u0552\x07\u0151"+
		"\x02\x02\u0552\u0553\x05\x98M\x02\u0553\u0554\x07\u0151\x02\x02\u0554"+
		"\u0555\x07;\x02\x02\u0555\u0592\x03\x02\x02\x02\u0556\u0557\x05n8\x02"+
		"\u0557\u0558\x07\u0151\x02\x02\u0558\u0559\x07;\x02\x02\u0559\u055A\x07"+
		"\u0151\x02\x02\u055A\u055B\x07I\x02\x02\u055B\u055C\x07\u0151\x02\x02"+
		"\u055C\u055D\x07J\x02\x02\u055D\u055E\x07\u0151\x02\x02\u055E\u055F\x05"+
		"d3\x02\u055F\u0560\x07\u0151\x02\x02\u0560\u0561\x05r:\x02\u0561\u0592"+
		"\x03\x02\x02\x02\u0562\u0563\x05j6\x02\u0563\u0564\x07\u0151\x02\x02\u0564"+
		"\u0565\x05F$\x02\u0565\u0592\x03\x02\x02\x02\u0566\u0567\x05l7\x02\u0567"+
		"\u0568\x07\u0151\x02\x02\u0568\u0569\x05F$\x02\u0569\u0592\x03\x02\x02"+
		"\x02\u056A\u056B\x07\x9C\x02\x02\u056B\u056C\x07\u0151\x02\x02\u056C\u056D"+
		"\x05F$\x02\u056D\u056E\x07\u0151\x02\x02\u056E\u056F\x05\xA2R\x02\u056F"+
		"\u0592\x03\x02\x02\x02\u0570\u0592\x07\u0154\x02\x02\u0571\u0572\x07\u0154"+
		"\x02\x02\u0572\u0592\x07R\x02\x02\u0573\u0574\x07\x9D\x02\x02\u0574\u0575"+
		"\x07\u0151\x02\x02\u0575\u0592\x05F$\x02\u0576\u0577\x07\x9E\x02\x02\u0577"+
		"\u0578\x07\u0151\x02\x02\u0578\u0592\x05F$\x02\u0579\u057A\x07\u016B\x02"+
		"\x02\u057A\u057B\x07R\x02\x02\u057B\u057C\x07\u0151\x02\x02\u057C\u057D"+
		"\x05\xCCg\x02\u057D\u057E\x07\u0151\x02\x02\u057E\u057F\x07\x9F\x02\x02"+
		"\u057F\u0592\x03\x02\x02\x02\u0580\u0592\x05T+\x02\u0581\u0582\x07\u0189"+
		"\x02\x02\u0582\u0583\x07\u0151\x02\x02\u0583\u0592\x05T+\x02\u0584\u0592"+
		"\x07\u0193\x02\x02\u0585\u0592\x07\u0194\x02\x02\u0586\u0592\x07\xA0\x02"+
		"\x02\u0587\u0592\x07:\x02\x02\u0588\u0589\t\f\x02\x02\u0589\u058A\x07"+
		"\u0151\x02\x02\u058A\u0592\x07\xA3\x02\x02\u058B\u058C\x05h5\x02\u058C"+
		"\u058D\x07\u0151\x02\x02\u058D\u058E\x07\xA4\x02\x02\u058E\u058F\x07\u0151"+
		"\x02\x02\u058F\u0590\x05\x86D\x02\u0590\u0592\x03\x02\x02\x02\u0591\u054F"+
		"\x03\x02\x02\x02\u0591\u0556\x03\x02\x02\x02\u0591\u0562\x03\x02\x02\x02"+
		"\u0591\u0566\x03\x02\x02\x02\u0591\u056A\x03\x02\x02\x02\u0591\u0570\x03"+
		"\x02\x02\x02\u0591\u0571\x03\x02\x02\x02\u0591\u0573\x03\x02\x02\x02\u0591"+
		"\u0576\x03\x02\x02\x02\u0591\u0579\x03\x02\x02\x02\u0591\u0580\x03\x02"+
		"\x02\x02\u0591\u0581\x03\x02\x02\x02\u0591\u0584\x03\x02\x02\x02\u0591"+
		"\u0585\x03\x02\x02\x02\u0591\u0586\x03\x02\x02\x02\u0591\u0587\x03\x02"+
		"\x02\x02\u0591\u0588\x03\x02\x02\x02\u0591\u058B\x03\x02\x02\x02\u0592"+
		"\u05AD\x03\x02\x02\x02\u0593\u0594\f\f\x02\x02\u0594\u0595\x07\b\x02\x02"+
		"\u0595\u0596\x07\u0151\x02\x02\u0596\u0597\x07C\x02\x02\u0597\u0598\x07"+
		"\u0151\x02\x02\u0598\u05AC\x05V,\r\u0599\u059A\f\x17\x02\x02\u059A\u059B"+
		"\x07\u0151\x02\x02\u059B\u059C\x07\u0188\x02\x02\u059C\u059D";
	private static readonly _serializedATNSegment3: string =
		"\x07\u0151\x02\x02\u059D\u059E\x07\u015E\x02\x02\u059E\u059F\x07\u0151"+
		"\x02\x02\u059F\u05AC\x05J&\x02\u05A0\u05A1\f\x16\x02\x02\u05A1\u05A2\x07"+
		"\u0151\x02\x02\u05A2\u05AC\x07\x9B\x02\x02\u05A3\u05A4\f\x05\x02\x02\u05A4"+
		"\u05A5\x07\u0151\x02\x02\u05A5\u05A6\x07\u017D\x02\x02\u05A6\u05A7\x07"+
		"\u0151\x02\x02\u05A7\u05AC\x054\x1B\x02\u05A8\u05A9\f\x04\x02\x02\u05A9"+
		"\u05AA\x07\u0151\x02\x02\u05AA\u05AC\x07q\x02\x02\u05AB\u0593\x03\x02"+
		"\x02\x02\u05AB\u0599\x03\x02\x02\x02\u05AB\u05A0\x03\x02\x02\x02\u05AB"+
		"\u05A3\x03\x02\x02\x02\u05AB\u05A8\x03\x02\x02\x02\u05AC\u05AF\x03\x02"+
		"\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE"+
		"W\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0\u05B1\b-\x01\x02\u05B1"+
		"\u05B2\t\r\x02\x02\u05B2\u05B3\x07\u0151\x02\x02\u05B3\u05B6\x05f4\x02"+
		"\u05B4\u05B5\x07\u0151\x02\x02\u05B5\u05B7\x05\xB2Z\x02\u05B6\u05B4\x03"+
		"\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u068E\x03\x02\x02\x02\u05B8"+
		"\u05B9\x05h5\x02\u05B9\u05BA\x07\u0151\x02\x02\u05BA\u05BB\x05\x82B\x02"+
		"\u05BB\u05BC\x07\u0151\x02\x02\u05BC\u05BD\x07B\x02\x02\u05BD\u05BE\x07"+
		"\u0151\x02\x02\u05BE\u05BF\x05n8\x02\u05BF\u05C0\x07\u0151\x02\x02\u05C0"+
		"\u05C3\x05f4\x02\u05C1\u05C2\x07\u0151\x02\x02\u05C2\u05C4\x05t;\x02\u05C3"+
		"\u05C1\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u068E\x03\x02"+
		"\x02\x02\u05C5\u05C6\x05n8\x02\u05C6\u05C7\x07\u0151\x02\x02\u05C7\u05C8"+
		"\x05f4\x02\u05C8\u05C9\x07\u0151\x02\x02\u05C9\u05CA\x07B\x02\x02\u05CA"+
		"\u05CB\x07\u0151\x02\x02\u05CB\u05CC\x05h5\x02\u05CC\u05CD\x07\u0151\x02"+
		"\x02\u05CD\u05D0\x05\x82B\x02\u05CE\u05CF\x07\u0151\x02\x02\u05CF\u05D1"+
		"\x05t;\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1"+
		"\u068E\x03\x02\x02\x02\u05D2\u05D3\x05h5\x02\u05D3\u05D4\x07\u0151\x02"+
		"\x02\u05D4\u05D7\x05\x82B\x02\u05D5\u05D6\x07\u0151\x02\x02\u05D6\u05D8"+
		"\x05:\x1E\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02"+
		"\u05D8\u05DB\x03\x02\x02\x02\u05D9\u05DA\x07\u0151\x02\x02\u05DA\u05DC"+
		"\x05t;\x02\u05DB\u05D9\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC"+
		"\u068E\x03\x02\x02\x02\u05DD\u05DE\x07\xA5\x02\x02\u05DE\u05DF\x07\u0151"+
		"\x02\x02\u05DF\u05E0\x07\u0175\x02\x02\u05E0\u05E1\x07\u0151\x02\x02\u05E1"+
		"\u05E2\x07\xA6\x02\x02\u05E2\u05E7\x07\u0151\x02\x02\u05E3\u05E8\x07\u0186"+
		"\x02\x02\u05E4\u05E5\x07\u0187\x02\x02\u05E5\u05E6\x07\u0151\x02\x02\u05E6"+
		"\u05E8\x07\xA7\x02\x02\u05E7\u05E3\x03\x02\x02\x02\u05E7\u05E4\x03\x02"+
		"\x02\x02\u05E8\u05E9\x03\x02\x02\x02\u05E9\u05EA\x07\u0151\x02\x02\u05EA"+
		"\u05EB\x05\x8AF\x02\u05EB\u05EC\x07\u0151\x02\x02\u05EC\u05ED\x07\u0155"+
		"\x02\x02\u05ED\u05EE\x07\u0151\x02\x02\u05EE\u05EF\x07S\x02\x02\u05EF"+
		"\u05F0\x07\u0151\x02\x02\u05F0\u05F3\x07\u018E\x02\x02\u05F1\u05F2\x07"+
		"\u0151\x02\x02\u05F2\u05F4\x05:\x1E\x02\u05F3\u05F1\x03\x02\x02\x02\u05F3"+
		"\u05F4\x03\x02\x02\x02\u05F4\u068E\x03\x02\x02\x02\u05F5\u05F6\x07\xA5"+
		"\x02\x02\u05F6\u05F7\x07\u0151\x02\x02\u05F7\u05F8\x07\u0175\x02\x02\u05F8"+
		"\u05F9\x07\u0151\x02\x02\u05F9\u05FA\x07\xA6\x02\x02\u05FA\u05FB\x07\u0151"+
		"\x02\x02\u05FB\u05FC\x05\x92J\x02\u05FC\u05FD\x07\u0151\x02\x02\u05FD"+
		"\u05FE\x05\x8AF\x02\u05FE\u05FF\x07\u0151\x02\x02\u05FF\u0600\x07\u0155"+
		"\x02\x02\u0600\u0601\x07R\x02\x02\u0601\u0602\x07\u0151\x02\x02\u0602"+
		"\u0603\x07S\x02\x02\u0603\u0604\x07\u0151\x02\x02\u0604\u0605\x07\u018E"+
		"\x02\x02\u0605\u068E\x03\x02\x02\x02\u0606\u0607\x07\xA5\x02\x02\u0607"+
		"\u0608\x07\u0151\x02\x02\u0608\u0609\x07\u0175\x02\x02\u0609\u060A\x07"+
		"\u0151\x02\x02\u060A\u060B\x07\xA6\x02\x02\u060B\u060C\x07\u0151\x02\x02"+
		"\u060C\u060D\x07\xA8\x02\x02\u060D\u060E\x07\u0151\x02\x02\u060E\u060F"+
		"\x05\x8AF\x02\u060F\u0610\x07\u0151\x02\x02\u0610\u0611\x07\u0155\x02"+
		"\x02\u0611\u0612\x07R\x02\x02\u0612\u0613\x07\u0151\x02\x02\u0613\u0614"+
		"\x07S\x02\x02\u0614\u0615\x07\u0151\x02\x02\u0615\u0616\x07\u018E\x02"+
		"\x02\u0616\u0617\x07\u0151\x02\x02\u0617\u0618\x07I\x02\x02\u0618\u0619"+
		"\x07\u0151\x02\x02\u0619\u061A\x07J\x02\x02\u061A\u061B\x07\u0151\x02"+
		"\x02\u061B\u061C\x05\x84C\x02\u061C\u068E\x03\x02\x02\x02\u061D\u061E"+
		"\t\x0E\x02\x02\u061E\u061F\x07\u0151\x02\x02\u061F\u0622\x07\u0175\x02"+
		"\x02\u0620\u0621\x07\u0151\x02\x02\u0621\u0623\x07\x86\x02\x02\u0622\u0620"+
		"\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u062B\x03\x02\x02\x02"+
		"\u0624\u0625\x07\u0151\x02\x02\u0625\u0626\x07\xAA\x02\x02\u0626\u0627"+
		"\x07\u0151\x02\x02\u0627\u0628\x05\xCCg\x02\u0628\u0629\x07\u0151\x02"+
		"\x02\u0629\u062A\x07h\x02\x02\u062A\u062C\x03\x02\x02\x02\u062B\u0624"+
		"\x03\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u068E\x03\x02\x02\x02"+
		"\u062D\u062E\t\x0F\x02\x02\u062E\u062F\x07\u0151\x02\x02\u062F\u068E\x07"+
		"\u0175\x02\x02\u0630\u068E\x07\xAD\x02\x02\u0631\u068E\t\x10\x02\x02\u0632"+
		"\u0633\x07H\x02\x02\u0633\u0634\x07\u0151\x02\x02\u0634\u0635\x07\u013F"+
		"\x02\x02\u0635\u0636\x07\u0151\x02\x02\u0636\u0637\x05\xA2R\x02\u0637"+
		"\u0638\x07\u0151\x02\x02\u0638\u0639\x05\xA6T\x02\u0639\u068E\x03\x02"+
		"\x02\x02\u063A\u063B\x07\u0189\x02\x02\u063B\u063C\x07\u0151\x02\x02\u063C"+
		"\u063F\x05\x9CO\x02\u063D\u063E\x07\u0151\x02\x02\u063E\u0640\x05p9\x02"+
		"\u063F\u063D\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u068E\x03"+
		"\x02\x02\x02\u0641\u0642\x07\xB0\x02\x02\u0642\u0643\x07\u0151\x02\x02"+
		"\u0643\u068E\x05\x8CG\x02\u0644\u0645\x07H\x02\x02\u0645\u0646\x07\u0151"+
		"\x02\x02\u0646\u068E\x05\\/\x02\u0647\u064C\t\x11\x02\x02\u0648\u0649"+
		"\x07\u0151\x02\x02\u0649\u064A\t\x12\x02\x02\u064A\u064B\x07\u0151\x02"+
		"\x02\u064B\u064D\x07\xB3\x02\x02\u064C\u0648\x03\x02\x02\x02\u064C\u064D"+
		"\x03\x02\x02\x02\u064D\u068E\x03\x02\x02\x02\u064E\u064F\x05n8\x02\u064F"+
		"\u0650\x07\u0151\x02\x02\u0650\u0653\x05f4\x02\u0651\u0652\x07\u0151\x02"+
		"\x02\u0652\u0654\x05t;\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03"+
		"\x02\x02\x02\u0654\u068E\x03\x02\x02\x02\u0655\u0656\x07\u0193\x02\x02"+
		"\u0656\u0657\x07\u0151\x02\x02\u0657\u0658\x07\xB4\x02\x02\u0658\u0659"+
		"\x07\u0151\x02\x02\u0659\u068E\x05\xC6d\x02\u065A\u065B\x07\xB5\x02\x02"+
		"\u065B\u065C\x07\u0151\x02\x02\u065C\u068E\x05F$\x02\u065D\u068E\x07\xB6"+
		"\x02\x02\u065E\u065F\x07\xB7\x02\x02\u065F\u0660\x07\u0151\x02\x02\u0660"+
		"\u068E\x05F$\x02\u0661\u0662\x07\xB8\x02\x02\u0662\u0663\x07\u0151\x02"+
		"\x02\u0663\u068E\x05F$\x02\u0664\u0665\t\x13\x02\x02\u0665\u0666\x07\u0151"+
		"\x02\x02\u0666\u0667\x05\xBC_\x02\u0667\u0668\x07\u0151\x02\x02\u0668"+
		"\u0669\x07\xBB\x02\x02\u0669\u066A\x07\u0151\x02\x02\u066A\u066B\x07J"+
		"\x02\x02\u066B\u066C\x07\u0151\x02\x02\u066C\u066D\x07\u0171\x02\x02\u066D"+
		"\u068E\x03\x02\x02\x02\u066E\u066F\x07\u016C\x02\x02\u066F\u0670\x07\u0151"+
		"\x02\x02\u0670\u0671\x07\xB2\x02\x02\u0671\u0672\x07\u0151\x02\x02\u0672"+
		"\u068E\x07\xBC\x02\x02\u0673\u068E\x07\xBD\x02\x02\u0674\u068E\x07\xBE"+
		"\x02\x02\u0675\u0676\t\x14\x02\x02\u0676\u0677\x07\u0151\x02\x02\u0677"+
		"\u068E\x07p\x02\x02\u0678\u0679\x07\xC1\x02\x02\u0679\u067A\x07\u0151"+
		"\x02\x02\u067A\u068E\x05^0\x02\u067B\u067C\t\f\x02\x02\u067C\u067D\x07"+
		"\u0151\x02\x02\u067D\u0680\x07\xC2\x02\x02\u067E\u067F\x07\u0151\x02\x02"+
		"\u067F\u0681\x05t;\x02\u0680\u067E\x03\x02\x02\x02\u0680\u0681\x03\x02"+
		"\x02\x02\u0681\u068E\x03\x02\x02\x02\u0682\u0683\t\x15\x02\x02\u0683\u0684"+
		"\x07\u0151\x02\x02\u0684\u068E\x07\xC4\x02\x02\u0685\u0686\x07\xC5\x02"+
		"\x02\u0686\u0687\x07\u0151\x02\x02\u0687\u0688\x05B\"\x02\u0688\u0689"+
		"\x07\u0151\x02\x02\u0689\u068A\x07\xC6\x02\x02\u068A\u068B\x07\u0151\x02"+
		"\x02\u068B\u068C\x05F$\x02\u068C\u068E\x03\x02\x02\x02\u068D\u05B0\x03"+
		"\x02\x02\x02\u068D\u05B8\x03\x02\x02\x02\u068D\u05C5\x03\x02\x02\x02\u068D"+
		"\u05D2\x03\x02\x02\x02\u068D\u05DD\x03\x02\x02\x02\u068D\u05F5\x03\x02"+
		"\x02\x02\u068D\u0606\x03\x02\x02\x02\u068D\u061D\x03\x02\x02\x02\u068D"+
		"\u062D\x03\x02\x02\x02\u068D\u0630\x03\x02\x02\x02\u068D\u0631\x03\x02"+
		"\x02\x02\u068D\u0632\x03\x02\x02\x02\u068D\u063A\x03\x02\x02\x02\u068D"+
		"\u0641\x03\x02\x02\x02\u068D\u0644\x03\x02\x02\x02\u068D\u0647\x03\x02"+
		"\x02\x02\u068D\u064E\x03\x02\x02\x02\u068D\u0655\x03\x02\x02\x02\u068D"+
		"\u065A\x03\x02\x02\x02\u068D\u065D\x03\x02\x02\x02\u068D\u065E\x03\x02"+
		"\x02\x02\u068D\u0661\x03\x02\x02\x02\u068D\u0664\x03\x02\x02\x02\u068D"+
		"\u066E\x03\x02\x02\x02\u068D\u0673\x03\x02\x02\x02\u068D\u0674\x03\x02"+
		"\x02\x02\u068D\u0675\x03\x02\x02\x02\u068D\u0678\x03\x02\x02\x02\u068D"+
		"\u067B\x03\x02\x02\x02\u068D\u0682\x03\x02\x02\x02\u068D\u0685\x03\x02"+
		"\x02\x02\u068E\u06B1\x03\x02\x02\x02\u068F\u0691\f\'\x02\x02\u0690\u0692"+
		"\x07\b\x02\x02\u0691\u0690\x03\x02\x02\x02\u0691\u0692\x03\x02\x02\x02"+
		"\u0692\u0693\x03\x02\x02\x02\u0693\u0694\x07\u0151\x02\x02\u0694\u0695"+
		"\x07B\x02\x02\u0695\u0696\x07\u0151\x02\x02\u0696\u06B0\x05X-(\u0697\u0698"+
		"\f&\x02\x02\u0698\u0699\x07\u0151\x02\x02\u0699\u069A\x07c\x02\x02\u069A"+
		"\u069B\x07\u0151\x02\x02\u069B\u06B0\x05X-\'\u069C\u069D\f%\x02\x02\u069D"+
		"\u06A0\x07\b\x02\x02\u069E\u069F\x07\u0151\x02\x02\u069F\u06A1\x07C\x02"+
		"\x02\u06A0\u069E\x03\x02\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u06A2"+
		"\x03\x02\x02\x02\u06A2\u06A3\x07\u0151\x02\x02\u06A3\u06B0\x05X-&\u06A4"+
		"\u06A5\f\x05\x02\x02\u06A5\u06A6\x07\u0151\x02\x02\u06A6\u06B0\x05:\x1E"+
		"\x02\u06A7\u06A8\f\x04\x02\x02\u06A8\u06A9\x07\u0151\x02\x02\u06A9\u06B0"+
		"\x05p9\x02\u06AA\u06AB\f\x03\x02\x02\u06AB\u06AC\x07\u0151\x02\x02\u06AC"+
		"\u06AD\x07\u017D\x02\x02\u06AD\u06AE\x07\u0151\x02\x02\u06AE\u06B0\x05"+
		"4\x1B\x02\u06AF\u068F\x03\x02\x02\x02\u06AF\u0697\x03\x02\x02\x02\u06AF"+
		"\u069C\x03\x02\x02\x02\u06AF\u06A4\x03\x02\x02\x02\u06AF\u06A7\x03\x02"+
		"\x02\x02\u06AF\u06AA\x03\x02\x02\x02\u06B0\u06B3\x03\x02\x02\x02\u06B1"+
		"\u06AF\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2Y\x03\x02\x02"+
		"\x02\u06B3\u06B1\x03\x02\x02\x02\u06B4\u06B5\x07\xC7\x02\x02\u06B5\u06B6"+
		"\x07\u0151\x02\x02\u06B6\u06B7\x05\xA2R\x02\u06B7\u06B8\x07\u0151\x02"+
		"\x02\u06B8\u06B9\x05p9\x02\u06B9\u06C2\x03\x02\x02\x02\u06BA\u06C2\x07"+
		"\xC8\x02\x02\u06BB\u06BC\x07\xC9\x02\x02\u06BC\u06BD\x07\u0151\x02\x02"+
		"\u06BD\u06C2\x05F$\x02\u06BE\u06BF\x07\xCA\x02\x02\u06BF\u06C0\x07\u0151"+
		"\x02\x02\u06C0\u06C2\x05\x8CG\x02\u06C1\u06B4\x03\x02\x02\x02\u06C1\u06BA"+
		"\x03\x02\x02\x02\u06C1\u06BB\x03\x02\x02\x02\u06C1\u06BE\x03\x02\x02\x02"+
		"\u06C2[\x03\x02\x02\x02\u06C3\u06CC\x05~@\x02\u06C4\u06CC\x05F$\x02\u06C5"+
		"\u06CC\x05\xA4S\x02\u06C6\u06C9\x05\xAEX\x02\u06C7\u06C8\x07\u0151\x02"+
		"\x02\u06C8\u06CA\x07\xCB\x02\x02\u06C9\u06C7\x03\x02\x02\x02\u06C9\u06CA"+
		"\x03\x02\x02\x02\u06CA\u06CC\x03\x02\x02\x02\u06CB\u06C3\x03\x02\x02\x02"+
		"\u06CB\u06C4\x03\x02\x02\x02\u06CB\u06C5\x03\x02\x02\x02\u06CB\u06C6\x03"+
		"\x02\x02\x02\u06CC]\x03\x02\x02\x02\u06CD\u06DC\x07\x86\x02\x02\u06CE"+
		"\u06DC\x07\x87\x02\x02\u06CF\u06D0\x07\u0186\x02\x02\u06D0\u06D1\x07\u0151"+
		"\x02\x02\u06D1\u06D2\x07\u016E\x02\x02\u06D2\u06D3\x07\u0151\x02\x02\u06D3"+
		"\u06D4\x07e\x02\x02\u06D4\u06D5\x07\u0151\x02\x02\u06D5\u06D9\x05F$\x02"+
		"\u06D6\u06D7\x07\b\x02\x02\u06D7\u06D8\x07\u0151\x02\x02\u06D8\u06DA\x05"+
		"`1\x02\u06D9\u06D6\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DC"+
		"\x03\x02\x02\x02\u06DB\u06CD\x03\x02\x02\x02\u06DB\u06CE\x03\x02\x02\x02"+
		"\u06DB\u06CF\x03\x02\x02\x02\u06DC_\x03\x02\x02\x02\u06DD\u06DE\x07\xCC"+
		"\x02\x02\u06DE\u06DF\x07\u0151\x02\x02\u06DF\u06E9\x05b2\x02\u06E0\u06E1"+
		"\x07\b\x02\x02\u06E1\u06E4\x07\u0151\x02\x02\u06E2\u06E3\x07B\x02\x02"+
		"\u06E3\u06E5\x07\u0151\x02\x02\u06E4\u06E2\x03\x02\x02\x02\u06E4\u06E5"+
		"\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E8\x05b2\x02\u06E7"+
		"\u06E0\x03\x02\x02\x02\u06E8\u06EB\x03\x02\x02\x02\u06E9\u06E7\x03\x02"+
		"\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EAa\x03\x02\x02\x02\u06EB\u06E9"+
		"\x03\x02\x02\x02\u06EC\u06ED\x07\u0180\x02\x02\u06ED\u06EE\x07\u0151\x02"+
		"\x02\u06EE\u06EF\x07\x9A\x02\x02\u06EF\u06F0\x07\u0151\x02\x02\u06F0\u06F1"+
		"\x07H\x02\x02\u06F1\u06F2\x07\u0151\x02\x02\u06F2\u06F8\x05\xACW\x02\u06F3"+
		"\u06F4\x07\u017F\x02\x02\u06F4\u06F5\x07\u0151\x02\x02\u06F5\u06F8\x05"+
		"\\/\x02\u06F6\u06F8\x056\x1C\x02\u06F7\u06EC\x03\x02\x02\x02\u06F7\u06F3"+
		"\x03\x02\x02\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8c\x03\x02\x02\x02\u06F9"+
		"\u06FA\x05F$\x02\u06FA\u06FB\x07\u0196\x02\x02\u06FB\u06FF\x03\x02\x02"+
		"\x02\u06FC\u06FF\x07\u0180\x02\x02\u06FD\u06FF\x07\xCD\x02\x02\u06FE\u06F9"+
		"\x03\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FD\x03\x02\x02\x02"+
		"\u06FFe\x03\x02\x02\x02\u0700\u0701\b4\x01\x02\u0701\u070C\x05\x0E\b\x02"+
		"\u0702\u0703\x07\xCE\x02\x02\u0703\u0704\x05\x04\x03\x02\u0704\u0705\x07"+
		"\xCE\x02\x02\u0705\u070C\x03\x02\x02\x02\u0706\u0707\x07\xCF\x02\x02\u0707"+
		"\u0708\x05\x04\x03\x02\u0708\u0709\x07\xD0\x02\x02\u0709\u070C\x03\x02"+
		"\x02\x02\u070A\u070C\x07\xD1\x02\x02\u070B\u0700\x03\x02\x02\x02\u070B"+
		"\u0702\x03\x02\x02\x02\u070B\u0706\x03\x02\x02\x02\u070B\u070A\x03\x02"+
		"\x02\x02\u070C\u0714\x03\x02\x02\x02\u070D\u070E\f\x04\x02\x02\u070E\u070F"+
		"\x07\u0151\x02\x02\u070F\u0710\x07B\x02\x02\u0710\u0711\x07\u0151\x02"+
		"\x02\u0711\u0713\x05f4\x05\u0712\u070D\x03\x02\x02\x02\u0713\u0716\x03"+
		"\x02\x02\x02\u0714\u0712\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715"+
		"g\x03\x02\x02\x02\u0716\u0714\x03\x02\x02\x02\u0717\u0718\t\x16\x02\x02"+
		"\u0718i\x03\x02\x02\x02\u0719\u071A\t\x17\x02\x02\u071Ak\x03\x02\x02\x02"+
		"\u071B\u071C\t\x18\x02\x02\u071Cm\x03\x02\x02\x02\u071D\u071E\t\x19\x02"+
		"\x02\u071Eo\x03\x02\x02\x02\u071F\u0727\x07\xD4\x02\x02\u0720\u0721\x07"+
		"\u0188\x02\x02\u0721\u0722\x07\u0151\x02\x02\u0722\u0727\x05\xB2Z\x02"+
		"\u0723\u0724\x07\xD5\x02\x02\u0724\u0725\x07\u0151\x02\x02\u0725\u0727"+
		"\x05v<\x02\u0726\u071F\x03\x02\x02\x02\u0726\u0720\x03\x02\x02\x02\u0726"+
		"\u0723\x03\x02\x02\x02\u0727q\x03\x02\x02\x02\u0728\u0729\t\x1A\x02\x02"+
		"\u0729s\x03\x02\x02\x02\u072A\u072B\x07\xD9\x02\x02\u072B\u072C\x07\u0151"+
		"\x02\x02\u072C\u072D\x05v<\x02\u072Du\x03\x02\x02\x02\u072E\u0731\x05"+
		"4\x1B\x02\u072F\u0731\x07\xDA\x02\x02\u0730\u072E\x03\x02\x02\x02\u0730"+
		"\u072F\x03\x02\x02\x02\u0731w\x03\x02\x02\x02\u0732\u0733\x07\u015F\x02"+
		"\x02\u0733y\x03\x02\x02\x02\u0734\u0739\x07\xDB\x02\x02\u0735\u0736\t"+
		"\x1B\x02\x02\u0736\u0737\x07\u0151\x02\x02\u0737\u0739\x07\xDB\x02\x02"+
		"\u0738\u0734\x03\x02\x02\x02\u0738\u0735\x03\x02\x02\x02\u0739{\x03\x02"+
		"\x02\x02\u073A\u073B\x05\x92J\x02\u073B\u073C\x07\u0151\x02\x02\u073C"+
		"\u073D\x05\x80A\x02\u073D\u073E\x07\u0151\x02\x02\u073E\u073F\x05~@\x02"+
		"\u073F\u0740\x07\u0151\x02\x02\u0740\u0741\x05\xAAV\x02\u0741\u0742\x07"+
		"\u0151\x02\x02\u0742\u0744\x07\x84\x02\x02\u0743\u0745\x07R\x02\x02\u0744"+
		"\u0743\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0748\x03\x02"+
		"\x02\x02\u0746\u0747\x07\u0151\x02\x02\u0747\u0749\x05\x86D\x02\u0748"+
		"\u0746\x03\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749}\x03\x02\x02"+
		"\x02\u074A\u074B\b@\x01\x02\u074B\u0754\x07\xDE\x02\x02\u074C\u0754\x07"+
		"\xDF\x02\x02\u074D\u0754\x07\xE0\x02\x02\u074E\u0754\x07\xE1\x02\x02\u074F"+
		"\u0754\x07\xE2\x02\x02\u0750\u0754\x07\xE3\x02\x02\u0751\u0754\x07\xE4"+
		"\x02\x02\u0752\u0754\x07\xE5\x02\x02\u0753\u074A\x03\x02\x02\x02\u0753"+
		"\u074C\x03\x02\x02\x02\u0753\u074D\x03\x02\x02\x02\u0753\u074E\x03\x02"+
		"\x02\x02\u0753\u074F\x03\x02\x02\x02\u0753\u0750\x03\x02\x02\x02\u0753"+
		"\u0751\x03\x02\x02\x02\u0753\u0752\x03\x02\x02\x02\u0754\u075C\x03\x02"+
		"\x02\x02\u0755\u0756\f\x03\x02\x02\u0756\u0757\x07\u0151\x02\x02\u0757"+
		"\u0758\x07B\x02\x02\u0758\u0759\x07\u0151\x02\x02\u0759\u075B\x05~@\x04"+
		"\u075A\u0755\x03\x02\x02\x02\u075B\u075E\x03\x02\x02\x02\u075C\u075A\x03"+
		"\x02\x02\x02\u075C\u075D\x03\x02\x02\x02\u075D\x7F\x03\x02\x02\x02\u075E"+
		"\u075C\x03\x02\x02\x02\u075F\u0760\x07\u0141\x02\x02\u0760\u0761\x07\xE6"+
		"\x02\x02\u0761\u0762\x07\u0141\x02\x02\u0762\x81\x03\x02\x02\x02\u0763"+
		"\u0764\x07\u0140\x02\x02\u0764\u0765\t\x1C\x02\x02\u0765\u0766\x07\xE6"+
		"\x02\x02\u0766\u0767\x07\u0140\x02\x02\u0767\u0768\t\x1C\x02\x02\u0768"+
		"\x83\x03\x02\x02\x02\u0769\u076A\x05d3\x02\u076A\u076B\x07\u0151\x02\x02"+
		"\u076B\u076C\x05r:\x02\u076C\u0777\x03\x02\x02\x02\u076D\u076E\x07\u017E"+
		"\x02\x02\u076E\u0771\x07\u0151\x02\x02\u076F\u0770\x07\xE7\x02\x02\u0770"+
		"\u0772\x07\u0151\x02\x02\u0771\u076F\x03\x02\x02\x02\u0771\u0772\x03\x02"+
		"\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773\u0774\x07\xE8\x02\x02\u0774"+
		"\u0775\x07\u0151\x02\x02\u0775\u0777\x05F$\x02\u0776\u0769\x03\x02\x02"+
		"\x02\u0776\u076D\x03\x02\x02\x02\u0777\x85\x03\x02\x02\x02\u0778\u0779"+
		"\x07\xA6\x02\x02\u0779\u077A\x07\u0151\x02\x02\u077A\u077B\x05\x88E\x02"+
		"\u077B\x87\x03\x02\x02\x02\u077C\u077D\x05r:\x02\u077D\u077E\x07\u0151"+
		"\x02\x02\u077E\u077F\x05\x96L\x02\u077F\u079E\x03\x02\x02\x02\u0780\u0781"+
		"\x07\u017E\x02\x02\u0781\u0782\x07\u0151\x02\x02\u0782\u0783\x07\xE9\x02"+
		"\x02\u0783\u0784\x07\u0151\x02\x02\u0784\u0785\x05r:\x02\u0785\u0786\x07"+
		"\u0151\x02\x02\u0786\u0787\x07\xEA\x02\x02\u0787\u0788\x07\u0151\x02\x02"+
		"\u0788\u0789\x05F$\x02\u0789\u079E\x03\x02\x02\x02\u078A\u078B\x07\xEB"+
		"\x02\x02\u078B\u078C\x07\u0151\x02\x02\u078C\u078D\x05\x94K\x02\u078D"+
		"\u078E\x07\u0151\x02\x02\u078E\u078F\x07B\x02\x02\u078F\u0790\x07\u0151"+
		"\x02\x02\u0790\u0791\x05\x94K\x02\u0791\u079E\x03\x02\x02\x02\u0792\u0793"+
		"\x05\x8AF\x02\u0793\u0794\x07\u0151\x02\x02\u0794\u0795\x07\u0155\x02"+
		"\x02\u0795\u0796\x07R\x02\x02\u0796\u0797\x07\u0151\x02\x02\u0797\u0798"+
		"\x07S\x02\x02\u0798\u0799\x07\u0151\x02\x02\u0799\u079A\t\x1D\x02\x02"+
		"\u079A\u079E\x03\x02\x02\x02\u079B\u079E\x07\xEC\x02\x02\u079C\u079E\x05"+
		"f4\x02\u079D\u077C\x03\x02\x02\x02\u079D\u0780\x03\x02\x02\x02\u079D\u078A"+
		"\x03\x02\x02\x02\u079D\u0792\x03\x02\x02\x02\u079D\u079B\x03\x02\x02\x02"+
		"\u079D\u079C\x03\x02\x02\x02\u079E\x89\x03\x02\x02\x02\u079F\u07A4\x05"+
		"\x82B\x02\u07A0\u07A4\x07\xED\x02\x02\u07A1\u07A4\x07\xEE\x02\x02\u07A2"+
		"\u07A4\x07\xEF\x02\x02\u07A3\u079F\x03\x02\x02\x02\u07A3\u07A0\x03\x02"+
		"\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A2\x03\x02\x02\x02\u07A4"+
		"\x8B\x03\x02\x02\x02\u07A5\u07A6\x07\xDD\x02\x02\u07A6\u07A8\x07\u0151"+
		"\x02\x02\u07A7\u07A5\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8"+
		"\u07A9\x03\x02\x02\x02\u07A9\u07AA\x07\xDB\x02\x02\u07AA\u07AB\x07\u0151"+
		"\x02\x02\u07AB\u07AC\x07J\x02\x02\u07AC\u07AD\x07\u0151\x02\x02\u07AD"+
		"\u07D5\x05\x8EH\x02\u07AE\u07AF\x05\x94K\x02\u07AF\u07B0\x07\u0151\x02"+
		"\x02\u07B0\u07B1\x07\xDB\x02\x02\u07B1\u07B2\x07\u0151\x02\x02\u07B2\u07B3"+
		"\x07J\x02\x02\u07B3\u07B4\x07\u0151\x02\x02\u07B4\u07B5\x05\x8EH\x02\u07B5"+
		"\u07D5\x03\x02\x02\x02\u07B6\u07B7\x07\xDB\x02\x02\u07B7\u07B8\x07\u0151"+
		"\x02\x02\u07B8\u07B9\x07I\x02\x02\u07B9\u07BA\x07\u0151\x02\x02\u07BA"+
		"\u07BB\x07J\x02\x02\u07BB\u07BC\x07\u0151\x02\x02\u07BC\u07BD\x05\x84"+
		"C\x02\u07BD\u07BE\x07\u0151\x02\x02\u07BE\u07BF\x07J\x02\x02\u07BF\u07C0"+
		"\x07\u0151\x02\x02\u07C0\u07C1\x05\x8EH\x02\u07C1\u07D5\x03\x02\x02\x02"+
		"\u07C2\u07C3\x07\xDB\x02\x02\u07C3\u07C4\x07\u0151\x02\x02\u07C4\u07C5"+
		"\x07J\x02\x02\u07C5\u07C6\x07\u0151\x02\x02\u07C6\u07C7\x05\x8EH\x02\u07C7"+
		"\u07C8\x07\u0151\x02\x02\u07C8\u07C9\x07I\x02\x02\u07C9\u07CA\x07\u0151"+
		"\x02\x02\u07CA\u07CB\x07J\x02\x02\u07CB\u07CC\x07\u0151\x02\x02\u07CC"+
		"\u07CD\x05\x84C\x02\u07CD\u07D5\x03\x02\x02\x02\u07CE\u07CF\x05\x94K\x02"+
		"\u07CF\u07D0\x07\u0151\x02\x02\u07D0\u07D1\x07\xDB\x02\x02\u07D1\u07D2"+
		"\x07\u0151\x02\x02\u07D2\u07D3\x05\x90I\x02\u07D3\u07D5\x03\x02\x02\x02"+
		"\u07D4\u07A7\x03\x02\x02\x02\u07D4\u07AE\x03\x02\x02\x02\u07D4\u07B6\x03"+
		"\x02\x02\x02\u07D4\u07C2\x03\x02\x02\x02\u07D4\u07CE\x03\x02\x02\x02\u07D5"+
		"\x8D\x03\x02\x02\x02\u07D6\u07E5\x05F$\x02\u07D7\u07E5\x05B\"\x02\u07D8"+
		"\u07D9\x07\xF0\x02\x02\u07D9\u07DA\x07\u0151\x02\x02\u07DA\u07E5\x07\u0149"+
		"\x02\x02\u07DB\u07DC\x07\u0149\x02\x02\u07DC\u07DD\x07\u0151\x02\x02\u07DD"+
		"\u07DE\x05\x8EH\x02\u07DE\u07DF\x07\u0151\x02\x02\u07DF\u07E0\x07c\x02"+
		"\x02\u07E0\u07E1\x07\u0151\x02\x02\u07E1\u07E2\x05\x8EH\x02\u07E2\u07E5"+
		"\x03\x02\x02\x02\u07E3\u07E5\x07\xF1\x02\x02\u07E4\u07D6\x03\x02\x02\x02"+
		"\u07E4\u07D7\x03\x02\x02\x02\u07E4\u07D8\x03\x02\x02\x02\u07E4\u07DB\x03"+
		"\x02\x02\x02\u07E4\u07E3\x03\x02\x02\x02\u07E5\x8F\x03\x02\x02\x02\u07E6"+
		"\u07E7\x07\xF2\x02\x02\u07E7\x91\x03\x02\x02\x02\u07E8\u07E9\t\x1E\x02"+
		"\x02\u07E9\x93\x03\x02\x02\x02\u07EA\u07EE\x07\u0141\x02\x02\u07EB\u07EE"+
		"\x07\xFA\x02\x02\u07EC\u07EE\x05\x98M\x02\u07ED\u07EA\x03\x02\x02\x02"+
		"\u07ED\u07EB\x03\x02\x02\x02\u07ED\u07EC\x03\x02\x02\x02\u07EE\x95\x03"+
		"\x02\x02\x02\u07EF\u07F0\x05\x98M\x02\u07F0\u07F1\x07\u0151\x02\x02\u07F1"+
		"\u07F2\x07c\x02\x02\u07F2\u07F3\x07\u0151\x02\x02\u07F3\u07F4\x07\xFB"+
		"\x02\x02\u07F4\u0803\x03\x02\x02\x02\u07F5\u07F6\x05\x98M\x02\u07F6\u07F7"+
		"\x07\u0151\x02\x02\u07F7\u07F8\x07c\x02\x02\u07F8\u07F9\x07\u0151\x02"+
		"\x02\u07F9\u07FA\x07\xBB\x02\x02\u07FA\u0803\x03\x02\x02\x02\u07FB\u07FC"+
		"\x07\xFC\x02\x02\u07FC\u07FD\x07\u0151\x02\x02\u07FD\u0803\x05\x84C\x02"+
		"\u07FE\u07FF\x07\xFD\x02\x02\u07FF\u0800\x07\u0151\x02\x02\u0800\u0803"+
		"\x05\x84C\x02\u0801\u0803\x05\x98M\x02\u0802\u07EF\x03\x02\x02\x02\u0802"+
		"\u07F5\x03\x02\x02\x02\u0802\u07FB\x03\x02\x02\x02\u0802\u07FE\x03\x02"+
		"\x02\x02\u0802\u0801\x03\x02\x02\x02\u0803\x97\x03\x02\x02\x02\u0804\u0805"+
		"\t\x1C\x02\x02\u0805\x99\x03\x02\x02\x02\u0806\u0807\x07\xFE\x02\x02\u0807"+
		"\u0808\x07\u0151\x02\x02\u0808\u0817\x05\x92J\x02\u0809\u080A\x05\x92"+
		"J\x02\u080A\u080B\x07\u0151\x02\x02\u080B\u080C\x07\xFF\x02\x02\u080C"+
		"\u0817\x03\x02\x02\x02\u080D\u080E\x07\u0100\x02\x02\u080E\u080F\x07\u0151"+
		"\x02\x02\u080F\u0817\x05\x92J\x02\u0810\u0817\x07\u0101\x02\x02\u0811"+
		"\u0817\x07\u0102\x02\x02\u0812\u0813\x07\u0103\x02\x02\u0813\u0814\x07"+
		"\u0151\x02\x02\u0814\u0817\x05\x92J\x02\u0815\u0817\x05\x92J\x02\u0816"+
		"\u0806\x03\x02\x02\x02\u0816\u0809\x03\x02\x02\x02\u0816\u080D\x03\x02"+
		"\x02\x02\u0816\u0810\x03\x02\x02\x02\u0816\u0811\x03\x02\x02\x02\u0816"+
		"\u0812\x03\x02\x02\x02\u0816\u0815\x03\x02\x02\x02\u0817\x9B\x03\x02\x02"+
		"\x02\u0818\u0825\x07\xB2\x02\x02\u0819\u0825\x07\u0104\x02\x02\u081A\u0825"+
		"\x07\u0105\x02\x02\u081B\u0825\x07\u0106\x02\x02\u081C\u0825\x07\u0107"+
		"\x02\x02\u081D\u0825\x07\u0108\x02\x02\u081E\u081F\x07\u0109\x02\x02\u081F"+
		"\u0820\x07\u0151\x02\x02\u0820\u0821\x05\x92J\x02\u0821\u0822\x07\u0151"+
		"\x02\x02\u0822\u0823\x07\u0145\x02\x02\u0823\u0825\x03\x02\x02\x02\u0824"+
		"\u0818\x03\x02\x02\x02\u0824\u0819\x03\x02\x02\x02\u0824\u081A\x03\x02"+
		"\x02\x02\u0824\u081B\x03\x02\x02\x02\u0824\u081C\x03\x02\x02\x02\u0824"+
		"\u081D\x03\x02\x02\x02\u0824\u081E\x03\x02\x02\x02\u0825\x9D\x03\x02\x02"+
		"\x02\u0826\u0829\x05\xCCg\x02\u0827\u0829\x07\u0186\x02\x02\u0828\u0826"+
		"\x03\x02\x02\x02\u0828\u0827\x03\x02\x02\x02\u0829\u082A\x03\x02\x02\x02"+
		"\u082A\u082B\x07\u0151\x02\x02\u082B\u0830\x05\xA0Q\x02\u082C\u0830\x07"+
		"\u0146\x02\x02\u082D\u0830\x07\u0175\x02\x02\u082E\u0830\x07\u018E\x02"+
		"\x02\u082F\u0828\x03\x02\x02\x02\u082F\u082C\x03\x02\x02\x02\u082F\u082D"+
		"\x03\x02\x02\x02\u082F\u082E\x03\x02\x02\x02\u0830\x9F\x03\x02\x02\x02"+
		"\u0831\u0832\bQ\x01\x02\u0832\u0836\x07\u010A\x02\x02\u0833\u0836\x07"+
		"\u010B\x02\x02\u0834\u0836\x07\x9F\x02\x02\u0835\u0831\x03\x02\x02\x02"+
		"\u0835\u0833\x03\x02\x02\x02\u0835\u0834\x03\x02\x02\x02\u0836\u0851\x03"+
		"\x02\x02\x02\u0837\u0838\f\x05\x02\x02\u0838\u0839\x07\u0151\x02\x02\u0839"+
		"\u083A\x07c\x02\x02\u083A\u083B\x07\u0151\x02\x02\u083B\u0850\x05\xA0"+
		"Q\x06\u083C\u083D\f\x04\x02\x02\u083D\u083E\x07\u0151\x02\x02\u083E\u083F"+
		"\x07d\x02\x02\u083F\u0840\x07\u0151\x02\x02\u0840\u0850\x05\xA0Q\x05\u0841"+
		"\u0842\f\x06\x02\x02\u0842\u0850\x07R\x02\x02\u0843\u084B\f\x03\x02\x02"+
		"\u0844\u0845\x07\b\x02\x02\u0845\u0848\x07\u0151\x02\x02\u0846\u0847\x07"+
		"B\x02\x02\u0847\u0849\x07\u0151\x02\x02\u0848\u0846\x03\x02\x02\x02\u0848"+
		"\u0849\x03\x02\x02\x02\u0849\u084A\x03\x02\x02\x02\u084A\u084C\x05\xA0"+
		"Q\x02\u084B\u0844\x03\x02\x02\x02\u084C\u084D\x03\x02\x02\x02\u084D\u084B"+
		"\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u0850\x03\x02\x02\x02"+
		"\u084F\u0837\x03\x02\x02\x02\u084F\u083C\x03\x02\x02\x02\u084F\u0841\x03"+
		"\x02\x02\x02\u084F\u0843\x03\x02\x02\x02\u0850\u0853\x03\x02\x02\x02\u0851"+
		"\u084F\x03\x02\x02\x02\u0851\u0852\x03\x02\x02\x02\u0852\xA1\x03\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u0853\u0851\x03\x02\x02\x02\u0854\u0855\x07\u010C\x02\x02\u0855"+
		"\u0856\x07\u0151\x02\x02\u0856\u086A\x07\u0175\x02\x02\u0857\u0858\x07"+
		"\x8D\x02\x02\u0858\u0859\x07\u0151\x02\x02\u0859\u086A\x05\x9EP\x02\u085A"+
		"\u085B\x07\u010D\x02\x02\u085B\u085C\x07\u0151\x02\x02\u085C\u086A\x05"+
		"\x9EP\x02\u085D\u085E\x07\u010E\x02\x02\u085E\u085F\x07\u0151\x02\x02"+
		"\u085F\u0860\x05\x9EP\x02\u0860\u0861\x07\u0151\x02\x02\u0861\u0862\x07"+
		"\u010F\x02\x02\u0862\u086A\x03\x02\x02\x02\u0863\u0864\x07\u010E\x02\x02"+
		"\u0864\u0865\x07\u0151\x02\x02\u0865\u0866\x05\x9EP\x02\u0866\u0867\x07"+
		"\u0151\x02\x02\u0867\u0868\x07\u0110\x02\x02\u0868\u086A\x03\x02\x02\x02"+
		"\u0869\u0854\x03\x02\x02\x02\u0869\u0857\x03\x02\x02\x02\u0869\u085A\x03"+
		"\x02\x02\x02\u0869\u085D\x03\x02\x02\x02\u0869\u0863\x03\x02\x02\x02\u086A"+
		"\xA3\x03\x02\x02\x02\u086B\u086C\x07S\x02\x02\u086C\u086D\x07\u0151\x02"+
		"\x02\u086D\u0872\x07\u0175\x02\x02\u086E\u086F\x07l\x02\x02\u086F\u0870"+
		"\x07\u0151\x02\x02\u0870\u0872\x05\x9EP\x02\u0871\u086B\x03\x02\x02\x02"+
		"\u0871\u086E\x03\x02\x02\x02\u0872\xA5\x03\x02\x02\x02\u0873\u0874\x07"+
		"m\x02\x02\u0874\u0875\x07\u0151\x02\x02\u0875\u0876\x05\x9EP\x02\u0876"+
		"\xA7\x03\x02\x02\x02\u0877\u0878\bU\x01\x02\u0878\u088C\x07\u0183\x02"+
		"\x02\u0879\u087A\x05\xAEX\x02\u087A\u087B\x07\u0151\x02\x02\u087B\u087D"+
		"\x03\x02\x02\x02\u087C\u0879\x03\x02\x02\x02\u087C\u087D\x03\x02\x02\x02"+
		"\u087D\u087E\x03\x02\x02\x02\u087E\u088C\x07\u0184\x02\x02\u087F\u0880"+
		"\x05\xAEX\x02\u0880\u0881\x07\u0151\x02\x02\u0881\u0883\x03\x02\x02\x02"+
		"\u0882\u087F\x03\x02\x02\x02\u0882\u0883\x03\x02\x02\x02\u0883\u0884\x03"+
		"\x02\x02\x02\u0884\u088C\x07\u0185\x02\x02\u0885\u088C\x05\xAAV\x02\u0886"+
		"\u0887\x07\u0183\x02\x02\u0887\u0888\x07\u0151\x02\x02\u0888\u088C\x07"+
		"\u0185\x02\x02\u0889\u088C\x07\x84\x02\x02\u088A\u088C\x07\u0111\x02\x02"+
		"\u088B\u0877\x03\x02\x02\x02\u088B\u087C\x03\x02\x02\x02\u088B\u0882\x03"+
		"\x02\x02\x02\u088B\u0885\x03\x02\x02\x02\u088B\u0886\x03\x02\x02\x02\u088B"+
		"\u0889\x03\x02\x02\x02\u088B\u088A\x03\x02\x02\x02\u088C\u0891\x03\x02"+
		"\x02\x02\u088D\u088E\f\t\x02\x02\u088E\u0890\x07R\x02\x02\u088F\u088D"+
		"\x03\x02\x02\x02\u0890\u0893\x03\x02\x02\x02\u0891\u088F\x03\x02\x02\x02"+
		"\u0891\u0892\x03\x02\x02\x02\u0892\xA9\x03\x02\x02\x02\u0893\u0891\x03"+
		"\x02\x02\x02\u0894\u0895\bV\x01\x02\u0895\u08AC\x07\u0112\x02\x02\u0896"+
		"\u08AC\x07\u0145\x02\x02\u0897\u08AC\x07\u0113\x02\x02\u0898\u08AC\x07"+
		"\u019F\x02\x02\u0899\u08AC\x07\u0114\x02\x02\u089A\u08AC\x07\u0115\x02"+
		"\x02\u089B\u08AC\x07\u0116\x02\x02\u089C\u08AC\x07\u0117\x02\x02\u089D"+
		"\u08AC\x07\u0118\x02\x02\u089E\u08AC\x07\u0119\x02\x02\u089F\u08AC\x07"+
		"\u011A\x02\x02\u08A0\u08AC\x07\u011B\x02\x02\u08A1\u08AC\x07\u011C\x02"+
		"\x02\u08A2\u08AC\x07\u011D\x02\x02\u08A3\u08AC\x07\u011E\x02\x02\u08A4"+
		"\u08AC\x07\u011F\x02\x02\u08A5\u08AC\x07\u0120\x02\x02\u08A6\u08AC\x07"+
		"\u0121\x02\x02\u08A7\u08AC\x07\u0122\x02\x02\u08A8\u08AC\x07\u0123\x02"+
		"\x02\u08A9\u08AC\x07\u0124\x02\x02\u08AA\u08AC\x07\u0125\x02\x02\u08AB"+
		"\u0894\x03\x02\x02\x02\u08AB\u0896\x03\x02\x02\x02\u08AB\u0897\x03\x02"+
		"\x02\x02\u08AB\u0898\x03\x02\x02\x02\u08AB\u0899\x03\x02\x02\x02\u08AB"+
		"\u089A\x03\x02\x02\x02\u08AB\u089B\x03\x02\x02\x02\u08AB\u089C\x03\x02"+
		"\x02\x02\u08AB\u089D\x03\x02\x02\x02\u08AB\u089E\x03\x02\x02\x02\u08AB"+
		"\u089F\x03\x02\x02\x02\u08AB\u08A0\x03\x02\x02\x02\u08AB\u08A1\x03\x02"+
		"\x02\x02\u08AB\u08A2\x03\x02\x02\x02\u08AB\u08A3\x03\x02\x02\x02\u08AB"+
		"\u08A4\x03\x02\x02\x02\u08AB\u08A5\x03\x02\x02\x02\u08AB\u08A6\x03\x02"+
		"\x02\x02\u08AB\u08A7\x03\x02\x02\x02\u08AB\u08A8\x03\x02\x02\x02\u08AB"+
		"\u08A9\x03\x02\x02\x02\u08AB\u08AA\x03\x02\x02\x02\u08AC\u08B7\x03\x02"+
		"\x02\x02\u08AD\u08AE\f\x04\x02\x02\u08AE\u08AF\x07\u0151\x02\x02\u08AF"+
		"\u08B6\x05\xAAV\x05\u08B0\u08B1\f\x03\x02\x02\u08B1\u08B2\x07\u0151\x02"+
		"\x02\u08B2\u08B3\x07c\x02\x02\u08B3\u08B4\x07\u0151\x02\x02\u08B4\u08B6"+
		"\x05\xAAV\x04\u08B5\u08AD\x03\x02\x02\x02\u08B5\u08B0\x03\x02\x02\x02"+
		"\u08B6\u08B9\x03\x02\x02\x02\u08B7\u08B5\x03\x02\x02\x02\u08B7\u08B8\x03"+
		"\x02\x02\x02\u08B8\xAB\x03\x02\x02\x02\u08B9\u08B7\x03\x02\x02\x02\u08BA"+
		"\u08BB\t\x1F\x02\x02\u08BB\xAD\x03\x02\x02\x02\u08BC\u08C4\x05\xAAV\x02"+
		"\u08BD\u08C4\x05\xB0Y\x02\u08BE\u08C4\x07\u014A\x02\x02\u08BF\u08C0\x07"+
		"\u0128\x02\x02\u08C0\u08C1\x05\xAEX\x02\u08C1\u08C2\x07\u0129\x02\x02"+
		"\u08C2\u08C4\x03\x02\x02\x02\u08C3\u08BC\x03\x02\x02\x02\u08C3\u08BD\x03"+
		"\x02\x02\x02\u08C3\u08BE\x03\x02\x02\x02\u08C3\u08BF\x03\x02\x02\x02\u08C4"+
		"\xAF\x03\x02\x02\x02\u08C5\u08C6\bY\x01\x02\u08C6\u08C9\x07\u0168\x02"+
		"\x02\u08C7\u08C9\x07\u0169\x02\x02\u08C8\u08C5\x03\x02\x02\x02\u08C8\u08C7"+
		"\x03\x02\x02\x02\u08C9\u08D6\x03\x02\x02\x02\u08CA\u08CB\f\x04\x02\x02"+
		"\u08CB\u08CC\x07\u0151\x02\x02\u08CC\u08CD\x07c\x02\x02\u08CD\u08CE\x07"+
		"\u0151\x02\x02\u08CE\u08D5\x05\xB0Y\x05\u08CF\u08D0\f\x03\x02\x02\u08D0"+
		"\u08D1\x07\u0151\x02\x02\u08D1\u08D2\x07B\x02\x02\u08D2\u08D3\x07\u0151"+
		"\x02\x02\u08D3\u08D5\x05\xB0Y\x04\u08D4\u08CA\x03\x02\x02\x02\u08D4\u08CF"+
		"\x03\x02\x02\x02\u08D5\u08D8\x03\x02\x02\x02\u08D6\u08D4\x03\x02\x02\x02"+
		"\u08D6\u08D7\x03\x02\x02\x02\u08D7\xB1\x03\x02\x02\x02\u08D8\u08D6\x03"+
		"\x02\x02\x02\u08D9\u08DA\x07\u0166\x02\x02\u08DA\u08DB\x07\u0151\x02\x02"+
		"\u08DB\u08DC\x07\u012A\x02\x02\u08DC\u08DD\x07\u0151\x02\x02\u08DD\u08DE"+
		"\x07\u0166\x02\x02\u08DE\u08DF\x07\u0151\x02\x02\u08DF\u08E0\x05<\x1F"+
		"\x02\u08E0\xB3\x03\x02\x02\x02\u08E1\u08E2\x054\x1B\x02\u08E2\u08E3\x07"+
		"\u0151\x02\x02\u08E3\u08E4\x07\u012B\x02\x02\u08E4\u08E5\x07\u0151\x02"+
		"\x02\u08E5\u08E6\x07\u018E\x02\x02\u08E6\u08E7\x07\u0151\x02\x02\u08E7"+
		"\u08E8\x05\xA2R\x02\u08E8\xB5\x03\x02\x02\x02\u08E9\u08EF\x05\xB8]\x02"+
		"\u08EA\u08EB\x07\b\x02\x02\u08EB\u08EC\x07\u0151\x02\x02\u08EC\u08EE\x05"+
		"\xB8]\x02\u08ED\u08EA\x03\x02\x02\x02\u08EE\u08F1\x03\x02\x02\x02\u08EF"+
		"\u08ED\x03\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\xB7\x03\x02\x02"+
		"\x02\u08F1\u08EF\x03\x02\x02\x02\u08F2\u08F8\x07\u012C\x02\x02\u08F3\u08F8"+
		"\x07\u012D\x02\x02\u08F4\u08F8\x054\x1B\x02\u08F5\u08F8\x05\xBC_\x02\u08F6"+
		"\u08F8\x05\xBA^\x02\u08F7\u08F2\x03\x02\x02\x02\u08F7\u08F3\x03\x02\x02"+
		"\x02\u08F7\u08F4\x03\x02\x02\x02\u08F7\u08F5\x03\x02\x02\x02\u08F7\u08F6"+
		"\x03\x02\x02\x02\u08F8\xB9\x03\x02\x02\x02\u08F9\u08FA\x07\u0140\x02\x02"+
		"\u08FA\u08FB\x07\u0141\x02\x02\u08FB\xBB\x03\x02\x02\x02\u08FC\u08FE\x05"+
		"\xBE`\x02\u08FD\u08FC\x03\x02\x02\x02\u08FE\u08FF\x03\x02\x02\x02\u08FF"+
		"\u08FD\x03\x02\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900\xBD\x03\x02\x02"+
		"\x02\u0901\u0904\x07\u012E\x02\x02\u0902\u0905\x07\u0141\x02\x02\u0903"+
		"\u0905\x05\x98M\x02\u0904\u0902\x03\x02\x02\x02\u0904\u0903\x03\x02\x02"+
		"\x02\u0904\u0905\x03\x02\x02\x02\u0905\u0909\x03\x02\x02\x02\u0906\u0908"+
		"\x07\u012F\x02\x02\u0907\u0906\x03\x02\x02\x02\u0908\u090B\x03\x02\x02"+
		"\x02\u0909\u0907\x03\x02\x02\x02\u0909\u090A\x03\x02\x02\x02\u090A\u090F"+
		"\x03\x02\x02\x02\u090B\u0909\x03\x02\x02\x02\u090C\u090E\x07\u0130\x02"+
		"\x02\u090D\u090C\x03\x02\x02\x02\u090E\u0911\x03\x02\x02\x02\u090F\u090D"+
		"\x03\x02\x02\x02\u090F\u0910\x03\x02\x02\x02\u0910\u0915\x03\x02\x02\x02"+
		"\u0911\u090F\x03\x02\x02\x02\u0912\u0914\x07\u0131\x02\x02\u0913\u0912"+
		"\x03\x02\x02\x02\u0914\u0917\x03\x02\x02\x02\u0915\u0913\x03\x02\x02\x02"+
		"\u0915\u0916\x03\x02\x02\x02\u0916\u091B\x03\x02\x02\x02\u0917\u0915\x03"+
		"\x02\x02\x02\u0918\u091A\x07\u0132\x02\x02\u0919\u0918\x03\x02\x02\x02"+
		"\u091A\u091D\x03\x02\x02\x02\u091B\u0919\x03\x02\x02\x02\u091B\u091C\x03"+
		"\x02\x02\x02\u091C\u0921\x03\x02\x02\x02\u091D\u091B\x03\x02\x02\x02\u091E"+
		"\u0920\x07\u0133\x02\x02\u091F\u091E\x03\x02\x02\x02\u0920\u0923\x03\x02"+
		"\x02\x02\u0921\u091F\x03\x02\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922"+
		"\u0924\x03\x02\x02\x02\u0923\u0921\x03\x02\x02\x02\u0924\u0927\x07\u0134"+
		"\x02\x02\u0925\u0927\x05\xC2b\x02\u0926\u0901\x03\x02\x02\x02\u0926\u0925"+
		"\x03\x02\x02\x02\u0927\xBF\x03\x02\x02\x02\u0928\u092A\x05\xC2b\x02\u0929"+
		"\u0928\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u0929\x03\x02"+
		"\x02\x02\u092B\u092C\x03\x02\x02\x02\u092C\xC1\x03\x02\x02\x02\u092D\u092E"+
		"\x07\u012E\x02\x02\u092E\u092F\x05\xC4c\x02\u092F\u0930\x07\xE6\x02\x02"+
		"\u0930\u0931\x05\xC4c\x02\u0931\u0932\x07\u0134\x02\x02\u0932\u0938\x03"+
		"\x02\x02\x02\u0933\u0934\x07\u012E\x02\x02\u0934\u0935\x05\xC4c\x02\u0935"+
		"\u0936\x07\u0134\x02\x02\u0936\u0938\x03\x02\x02\x02\u0937\u092D\x03\x02"+
		"\x02\x02\u0937\u0933\x03\x02\x02\x02\u0938\xC3\x03\x02\x02\x02\u0939\u093A"+
		"\t \x02\x02\u093A\xC5\x03\x02\x02\x02\u093B\u093C\x05\xC8e\x02\u093C\u093D"+
		"\x07\u0151\x02\x02\u093D\u093E\x05\xCAf\x02\u093E\u0942\x03\x02\x02\x02"+
		"\u093F\u0942\x07\u0136\x02\x02\u0940\u0942\x07\xDD\x02\x02\u0941\u093B"+
		"\x03\x02\x02\x02\u0941\u093F\x03\x02\x02\x02\u0941\u0940\x03\x02\x02\x02"+
		"\u0942\xC7\x03\x02\x02\x02\u0943\u0946\x05\xCCg\x02\u0944\u0946\x07\u017E"+
		"\x02\x02\u0945\u0943\x03\x02\x02\x02\u0945\u0944\x03\x02\x02\x02\u0946"+
		"\u0949\x03\x02\x02\x02\u0947\u0948\x07\u0151\x02\x02\u0948\u094A\x07\u0137"+
		"\x02\x02\u0949\u0947\x03\x02\x02\x02\u0949\u094A\x03\x02\x02\x02\u094A"+
		"\u0956\x03\x02\x02\x02\u094B\u0956\x07\u0181\x02\x02\u094C\u0956\x07\u015E"+
		"\x02\x02\u094D\u094E\x07\u0181\x02\x02\u094E\u094F\x07\u0151\x02\x02\u094F"+
		"\u0950\x07P\x02\x02\u0950\u0956\x07\u0196\x02\x02\u0951\u0952\x07\u0182"+
		"\x02\x02\u0952\u0953\x07\u0151\x02\x02\u0953\u0954\x07P\x02\x02\u0954"+
		"\u0956\x07\u0196\x02\x02\u0955\u0945\x03\x02\x02\x02\u0955\u094B\x03\x02"+
		"\x02\x02\u0955\u094C\x03\x02\x02\x02\u0955\u094D\x03\x02\x02\x02\u0955"+
		"\u0951\x03\x02\x02\x02\u0956\xC9\x03\x02\x02\x02\u0957\u0958\t!\x02\x02"+
		"\u0958\xCB\x03\x02\x02\x02\u0959\u0962\x07O\x02\x02\u095A\u0962\x07\xCD"+
		"\x02\x02\u095B\u095C\x05B\"\x02\u095C\u095D\x07\u0196\x02\x02\u095D\u0962"+
		"\x03\x02\x02\x02\u095E\u095F\x05B\"\x02\u095F\u0960\x07\u0195\x02\x02"+
		"\u0960\u0962\x03\x02\x02\x02\u0961\u0959\x03\x02\x02\x02\u0961\u095A\x03"+
		"\x02\x02\x02\u0961\u095B\x03\x02\x02\x02\u0961\u095E\x03\x02\x02\x02\u0962"+
		"\xCD\x03\x02\x02\x02\u0963\u0964\x07\u0192\x02\x02\u0964\xCF\x03\x02\x02"+
		"\x02\xB0\xD3\xDA\xDF\xE3\xED\xF6\u0103\u010C\u0125\u0135\u013F\u0146\u0152"+
		"\u0161\u0176\u0188\u018C\u0190\u0196\u01A0\u01A7\u01B2\u01B5\u01BA\u01C0"+
		"\u01C9\u01EF\u01FA\u020C\u0238\u0245\u0247\u025B\u0279\u028B\u028F\u0295"+
		"\u02A6\u02AD\u02E4\u02F9\u0309\u030B\u0320\u032B\u033E\u0362\u0368\u0372"+
		"\u037A\u038A\u03A0\u03A2\u03AF\u03B8\u03CD\u03D1\u03D6\u03D9\u03F0\u0401"+
		"\u040D\u0411\u0431\u043B\u043F\u044B\u044F\u0456\u045B\u0466\u046A\u0470"+
		"\u0475\u048A\u04A5\u04B2\u04B6\u04C1\u04D1\u04EF\u04F8\u0504\u0513\u0537"+
		"\u054A\u054C\u0591\u05AB\u05AD\u05B6\u05C3\u05D0\u05D7\u05DB\u05E7\u05F3"+
		"\u0622\u062B\u063F\u064C\u0653\u0680\u068D\u0691\u06A0\u06AF\u06B1\u06C1"+
		"\u06C9\u06CB\u06D9\u06DB\u06E4\u06E9\u06F7\u06FE\u070B\u0714\u0726\u0730"+
		"\u0738\u0744\u0748\u0753\u075C\u0771\u0776\u079D\u07A3\u07A7\u07D4\u07E4"+
		"\u07ED\u0802\u0816\u0824\u0828\u082F\u0835\u0848\u084D\u084F\u0851\u0869"+
		"\u0871\u087C\u0882\u088B\u0891\u08AB\u08B5\u08B7\u08C3\u08C8\u08D4\u08D6"+
		"\u08EF\u08F7\u08FF\u0904\u0909\u090F\u0915\u091B\u0921\u0926\u092B\u0937"+
		"\u0941\u0945\u0949\u0955\u0961";
	public static readonly _serializedATN: string = Utils.join(
		[
			mtgParser._serializedATNSegment0,
			mtgParser._serializedATNSegment1,
			mtgParser._serializedATNSegment2,
			mtgParser._serializedATNSegment3,
			mtgParser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mtgParser.__ATN) {
			mtgParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mtgParser._serializedATN));
		}

		return mtgParser.__ATN;
	}

}

export class CardContext extends ParserRuleContext {
	public ability(): AbilityContext[];
	public ability(i: number): AbilityContext;
	public ability(i?: number): AbilityContext | AbilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AbilityContext);
		} else {
			return this.getRuleContext(i, AbilityContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_card; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCard) listener.enterCard(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCard) listener.exitCard(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCard) return visitor.visitCard(this);
		else return visitor.visitChildren(this);
	}
}


export class AbilityContext extends ParserRuleContext {
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	public activated(): ActivatedContext | undefined {
		return this.tryGetRuleContext(0, ActivatedContext);
	}
	public staticOrSpell(): StaticOrSpellContext | undefined {
		return this.tryGetRuleContext(0, StaticOrSpellContext);
	}
	public triggered(): TriggeredContext | undefined {
		return this.tryGetRuleContext(0, TriggeredContext);
	}
	public modal(): ModalContext | undefined {
		return this.tryGetRuleContext(0, ModalContext);
	}
	public abilityWordAbility(): AbilityWordAbilityContext | undefined {
		return this.tryGetRuleContext(0, AbilityWordAbilityContext);
	}
	public additionalCostToCastSpell(): AdditionalCostToCastSpellContext | undefined {
		return this.tryGetRuleContext(0, AdditionalCostToCastSpellContext);
	}
	public weirdAbility(): WeirdAbilityContext | undefined {
		return this.tryGetRuleContext(0, WeirdAbilityContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_ability; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAbility) listener.enterAbility(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAbility) listener.exitAbility(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAbility) return visitor.visitAbility(this);
		else return visitor.visitChildren(this);
	}
}


export class ModalContext extends ParserRuleContext {
	public modalPrompt(): ModalPromptContext {
		return this.getRuleContext(0, ModalPromptContext);
	}
	public chooseOneOption(): ChooseOneOptionContext[];
	public chooseOneOption(i: number): ChooseOneOptionContext;
	public chooseOneOption(i?: number): ChooseOneOptionContext | ChooseOneOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChooseOneOptionContext);
		} else {
			return this.getRuleContext(i, ChooseOneOptionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_modal; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterModal) listener.enterModal(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitModal) listener.exitModal(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitModal) return visitor.visitModal(this);
		else return visitor.visitChildren(this);
	}
}


export class ModalPromptContext extends ParserRuleContext {
	public CHOOSE(): TerminalNode { return this.getToken(mtgParser.CHOOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public DASHDASH(): TerminalNode { return this.getToken(mtgParser.DASHDASH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_modalPrompt; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterModalPrompt) listener.enterModalPrompt(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitModalPrompt) listener.exitModalPrompt(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitModalPrompt) return visitor.visitModalPrompt(this);
		else return visitor.visitChildren(this);
	}
}


export class ChooseOneOptionContext extends ParserRuleContext {
	public effect(): EffectContext {
		return this.getRuleContext(0, EffectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_chooseOneOption; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterChooseOneOption) listener.enterChooseOneOption(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitChooseOneOption) listener.exitChooseOneOption(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitChooseOneOption) return visitor.visitChooseOneOption(this);
		else return visitor.visitChildren(this);
	}
}


export class KeywordsContext extends ParserRuleContext {
	public keyword(): KeywordContext {
		return this.getRuleContext(0, KeywordContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public keywords(): KeywordsContext | undefined {
		return this.tryGetRuleContext(0, KeywordsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_keywords; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterKeywords) listener.enterKeywords(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitKeywords) listener.exitKeywords(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitKeywords) return visitor.visitKeywords(this);
		else return visitor.visitChildren(this);
	}
}


export class KeywordContext extends ParserRuleContext {
	public MENTOR(): TerminalNode | undefined { return this.tryGetToken(mtgParser.MENTOR, 0); }
	public VIGILANCE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.VIGILANCE, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public anyEntity(): AnyEntityContext | undefined {
		return this.tryGetRuleContext(0, AnyEntityContext);
	}
	public LIFELINK(): TerminalNode | undefined { return this.tryGetToken(mtgParser.LIFELINK, 0); }
	public FLYING(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FLYING, 0); }
	public FLASH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FLASH, 0); }
	public JUMPSTART(): TerminalNode | undefined { return this.tryGetToken(mtgParser.JUMPSTART, 0); }
	public DEFENDER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DEFENDER, 0); }
	public HASTE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.HASTE, 0); }
	public TRAMPLE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.TRAMPLE, 0); }
	public DEATHTOUCH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DEATHTOUCH, 0); }
	public MENACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.MENACE, 0); }
	public FIRSTSTRIKE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FIRSTSTRIKE, 0); }
	public REACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.REACH, 0); }
	public DOUBLESTRIKE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DOUBLESTRIKE, 0); }
	public HEXPROOF(): TerminalNode | undefined { return this.tryGetToken(mtgParser.HEXPROOF, 0); }
	public INDESTRUCTIBLE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDESTRUCTIBLE, 0); }
	public EQUIP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EQUIP, 0); }
	public manacost(): ManacostContext | undefined {
		return this.tryGetRuleContext(0, ManacostContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_keyword; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterKeyword) listener.enterKeyword(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitKeyword) listener.exitKeyword(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitKeyword) return visitor.visitKeyword(this);
		else return visitor.visitChildren(this);
	}
}


export class AbilityWordAbilityContext extends ParserRuleContext {
	public abilityWord(): AbilityWordContext {
		return this.getRuleContext(0, AbilityWordContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public DASHDASH(): TerminalNode { return this.getToken(mtgParser.DASHDASH, 0); }
	public ability(): AbilityContext {
		return this.getRuleContext(0, AbilityContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_abilityWordAbility; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAbilityWordAbility) listener.enterAbilityWordAbility(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAbilityWordAbility) listener.exitAbilityWordAbility(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAbilityWordAbility) return visitor.visitAbilityWordAbility(this);
		else return visitor.visitChildren(this);
	}
}


export class AbilityWordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_abilityWord; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAbilityWord) listener.enterAbilityWord(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAbilityWord) listener.exitAbilityWord(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAbilityWord) return visitor.visitAbilityWord(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivatedContext extends ParserRuleContext {
	public costs(): CostsContext {
		return this.getRuleContext(0, CostsContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public effect(): EffectContext {
		return this.getRuleContext(0, EffectContext);
	}
	public activationInstructions(): ActivationInstructionsContext | undefined {
		return this.tryGetRuleContext(0, ActivationInstructionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_activated; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActivated) listener.enterActivated(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActivated) listener.exitActivated(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActivated) return visitor.visitActivated(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivationInstructionsContext extends ParserRuleContext {
	public ACTIVATE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ACTIVATE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public activationInstruction(): ActivationInstructionContext | undefined {
		return this.tryGetRuleContext(0, ActivationInstructionContext);
	}
	public FULLSTOP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FULLSTOP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_activationInstructions; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActivationInstructions) listener.enterActivationInstructions(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActivationInstructions) listener.exitActivationInstructions(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActivationInstructions) return visitor.visitActivationInstructions(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivationInstructionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_activationInstruction; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActivationInstruction) listener.enterActivationInstruction(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActivationInstruction) listener.exitActivationInstruction(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActivationInstruction) return visitor.visitActivationInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivatedAbilitiesContext extends ParserRuleContext {
	public ACTIVATED(): TerminalNode { return this.getToken(mtgParser.ACTIVATED, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public itsPossessive(): ItsPossessiveContext | undefined {
		return this.tryGetRuleContext(0, ItsPossessiveContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_activatedAbilities; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActivatedAbilities) listener.enterActivatedAbilities(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActivatedAbilities) listener.exitActivatedAbilities(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActivatedAbilities) return visitor.visitActivatedAbilities(this);
		else return visitor.visitChildren(this);
	}
}


export class ActivatedAbilitiesVPContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_activatedAbilitiesVP; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActivatedAbilitiesVP) listener.enterActivatedAbilitiesVP(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActivatedAbilitiesVP) listener.exitActivatedAbilitiesVP(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActivatedAbilitiesVP) return visitor.visitActivatedAbilitiesVP(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggeredContext extends ParserRuleContext {
	public triggerCondition(): TriggerConditionContext {
		return this.getRuleContext(0, TriggerConditionContext);
	}
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public effect(): EffectContext {
		return this.getRuleContext(0, EffectContext);
	}
	public interveningIfClause(): InterveningIfClauseContext | undefined {
		return this.tryGetRuleContext(0, InterveningIfClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_triggered; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterTriggered) listener.enterTriggered(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitTriggered) listener.exitTriggered(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitTriggered) return visitor.visitTriggered(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerConditionContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public triggerConditionInner(): TriggerConditionInnerContext | undefined {
		return this.tryGetRuleContext(0, TriggerConditionInnerContext);
	}
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.WHEN, 0); }
	public WHENEVER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.WHENEVER, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.AT, 0); }
	public qualifiedPartOfTurn(): QualifiedPartOfTurnContext | undefined {
		return this.tryGetRuleContext(0, QualifiedPartOfTurnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_triggerCondition; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterTriggerCondition) listener.enterTriggerCondition(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitTriggerCondition) listener.exitTriggerCondition(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitTriggerCondition) return visitor.visitTriggerCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerConditionInnerContext extends ParserRuleContext {
	public ss(): SsContext | undefined {
		return this.tryGetRuleContext(0, SsContext);
	}
	public YOU(): TerminalNode | undefined { return this.tryGetToken(mtgParser.YOU, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public CAST(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAST, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public gains(): GainsContext | undefined {
		return this.tryGetRuleContext(0, GainsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_triggerConditionInner; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterTriggerConditionInner) listener.enterTriggerConditionInner(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitTriggerConditionInner) listener.exitTriggerConditionInner(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitTriggerConditionInner) return visitor.visitTriggerConditionInner(this);
		else return visitor.visitChildren(this);
	}
}


export class InterveningIfClauseContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(mtgParser.IF, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_interveningIfClause; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterInterveningIfClause) listener.enterInterveningIfClause(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitInterveningIfClause) listener.exitInterveningIfClause(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitInterveningIfClause) return visitor.visitInterveningIfClause(this);
		else return visitor.visitChildren(this);
	}
}


export class AdditionalCostToCastSpellContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public imperative(): ImperativeContext {
		return this.getRuleContext(0, ImperativeContext);
	}
	public FULLSTOP(): TerminalNode { return this.getToken(mtgParser.FULLSTOP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_additionalCostToCastSpell; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAdditionalCostToCastSpell) listener.enterAdditionalCostToCastSpell(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAdditionalCostToCastSpell) listener.exitAdditionalCostToCastSpell(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAdditionalCostToCastSpell) return visitor.visitAdditionalCostToCastSpell(this);
		else return visitor.visitChildren(this);
	}
}


export class WeirdAbilityContext extends ParserRuleContext {
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_weirdAbility; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterWeirdAbility) listener.enterWeirdAbility(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitWeirdAbility) listener.exitWeirdAbility(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitWeirdAbility) return visitor.visitWeirdAbility(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticOrSpellContext extends ParserRuleContext {
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public sdot(): SdotContext | undefined {
		return this.tryGetRuleContext(0, SdotContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_staticOrSpell; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterStaticOrSpell) listener.enterStaticOrSpell(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitStaticOrSpell) listener.exitStaticOrSpell(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitStaticOrSpell) return visitor.visitStaticOrSpell(this);
		else return visitor.visitChildren(this);
	}
}


export class EffectContext extends ParserRuleContext {
	public sdot(): SdotContext | undefined {
		return this.tryGetRuleContext(0, SdotContext);
	}
	public modal(): ModalContext | undefined {
		return this.tryGetRuleContext(0, ModalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_effect; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterEffect) listener.enterEffect(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitEffect) listener.exitEffect(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitEffect) return visitor.visitEffect(this);
		else return visitor.visitChildren(this);
	}
}


export class SdotContext extends ParserRuleContext {
	public s(): SContext {
		return this.getRuleContext(0, SContext);
	}
	public FULLSTOP(): TerminalNode { return this.getToken(mtgParser.FULLSTOP, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public additionalSentences(): AdditionalSentencesContext | undefined {
		return this.tryGetRuleContext(0, AdditionalSentencesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_sdot; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterSdot) listener.enterSdot(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitSdot) listener.exitSdot(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitSdot) return visitor.visitSdot(this);
		else return visitor.visitChildren(this);
	}
}


export class AdditionalSentencesContext extends ParserRuleContext {
	public additionalSentence(): AdditionalSentenceContext {
		return this.getRuleContext(0, AdditionalSentenceContext);
	}
	public additionalSentences(): AdditionalSentencesContext | undefined {
		return this.tryGetRuleContext(0, AdditionalSentencesContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_additionalSentences; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAdditionalSentences) listener.enterAdditionalSentences(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAdditionalSentences) listener.exitAdditionalSentences(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAdditionalSentences) return visitor.visitAdditionalSentences(this);
		else return visitor.visitChildren(this);
	}
}


export class AdditionalSentenceContext extends ParserRuleContext {
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public FULLSTOP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FULLSTOP, 0); }
	public triggered(): TriggeredContext | undefined {
		return this.tryGetRuleContext(0, TriggeredContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_additionalSentence; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAdditionalSentence) listener.enterAdditionalSentence(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAdditionalSentence) listener.exitAdditionalSentence(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAdditionalSentence) return visitor.visitAdditionalSentence(this);
		else return visitor.visitChildren(this);
	}
}


export class SContext extends ParserRuleContext {
	public ss(): SsContext | undefined {
		return this.tryGetRuleContext(0, SsContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public s(): SContext[];
	public s(i: number): SContext;
	public s(i?: number): SContext | SContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SContext);
		} else {
			return this.getRuleContext(i, SContext);
		}
	}
	public weirdSentence(): WeirdSentenceContext | undefined {
		return this.tryGetRuleContext(0, WeirdSentenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_s; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterS) listener.enterS(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitS) listener.exitS(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitS) return visitor.visitS(this);
		else return visitor.visitChildren(this);
	}
}


export class SsContext extends ParserRuleContext {
	public imperative(): ImperativeContext | undefined {
		return this.tryGetRuleContext(0, ImperativeContext);
	}
	public ss(): SsContext[];
	public ss(i: number): SsContext;
	public ss(i?: number): SsContext | SsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SsContext);
		} else {
			return this.getRuleContext(i, SsContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public numberDefinition(): NumberDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NumberDefinitionContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectVerbPhrase(): ObjectVerbPhraseContext | undefined {
		return this.tryGetRuleContext(0, ObjectVerbPhraseContext);
	}
	public IT_S(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT_S, 0); }
	public isWhat(): IsWhatContext | undefined {
		return this.tryGetRuleContext(0, IsWhatContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public playerVerbPhrase(): PlayerVerbPhraseContext | undefined {
		return this.tryGetRuleContext(0, PlayerVerbPhraseContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IF, 0); }
	public s(): SContext[];
	public s(i: number): SContext;
	public s(i?: number): SContext | SContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SContext);
		} else {
			return this.getRuleContext(i, SContext);
		}
	}
	public doSomethingInsteadOfSomethingElse(): DoSomethingInsteadOfSomethingElseContext | undefined {
		return this.tryGetRuleContext(0, DoSomethingInsteadOfSomethingElseContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public objectInfinitive(): ObjectInfinitiveContext | undefined {
		return this.tryGetRuleContext(0, ObjectInfinitiveContext);
	}
	public asLongAsClause(): AsLongAsClauseContext | undefined {
		return this.tryGetRuleContext(0, AsLongAsClauseContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FOR, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public activatedAbilities(): ActivatedAbilitiesContext | undefined {
		return this.tryGetRuleContext(0, ActivatedAbilitiesContext);
	}
	public activatedAbilitiesVP(): ActivatedAbilitiesVPContext | undefined {
		return this.tryGetRuleContext(0, ActivatedAbilitiesVPContext);
	}
	public itsPossessive(): ItsPossessiveContext | undefined {
		return this.tryGetRuleContext(0, ItsPossessiveContext);
	}
	public numericalCharacteristic(): NumericalCharacteristicContext | undefined {
		return this.tryGetRuleContext(0, NumericalCharacteristicContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_ss; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterSs) listener.enterSs(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitSs) listener.exitSs(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitSs) return visitor.visitSs(this);
		else return visitor.visitChildren(this);
	}
}


export class WeirdSentenceContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public qualifiedPartOfTurn(): QualifiedPartOfTurnContext {
		return this.getRuleContext(0, QualifiedPartOfTurnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_weirdSentence; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterWeirdSentence) listener.enterWeirdSentence(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitWeirdSentence) listener.exitWeirdSentence(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitWeirdSentence) return visitor.visitWeirdSentence(this);
		else return visitor.visitChildren(this);
	}
}


export class ForeachClauseContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(mtgParser.FOR, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public EACH(): TerminalNode { return this.getToken(mtgParser.EACH, 0); }
	public pureObject(): PureObjectContext | undefined {
		return this.tryGetRuleContext(0, PureObjectContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_foreachClause; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterForeachClause) listener.enterForeachClause(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitForeachClause) listener.exitForeachClause(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitForeachClause) return visitor.visitForeachClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public YOU_VE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.YOU_VE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public CAST(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAST, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public IT_S(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT_S, 0); }
	public countableCount(): CountableCountContext | undefined {
		return this.tryGetRuleContext(0, CountableCountContext);
	}
	public COUNTER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COUNTER, 0); }
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	public counterKind(): CounterKindContext | undefined {
		return this.tryGetRuleContext(0, CounterKindContext);
	}
	public numberDefinition(): NumberDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NumberDefinitionContext);
	}
	public numericalComparison(): NumericalComparisonContext | undefined {
		return this.tryGetRuleContext(0, NumericalComparisonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_condition; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCondition) listener.enterCondition(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCondition) listener.exitCondition(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class EntityContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_entity; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterEntity) listener.enterEntity(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitEntity) listener.exitEntity(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitEntity) return visitor.visitEntity(this);
		else return visitor.visitChildren(this);
	}
}


export class AnyEntityContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public pureObject(): PureObjectContext | undefined {
		return this.tryGetRuleContext(0, PureObjectContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public purePlayer(): PurePlayerContext | undefined {
		return this.tryGetRuleContext(0, PurePlayerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_anyEntity; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAnyEntity) listener.enterAnyEntity(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAnyEntity) listener.exitAnyEntity(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAnyEntity) return visitor.visitAnyEntity(this);
		else return visitor.visitChildren(this);
	}
}


export class PlayerContext extends ParserRuleContext {
	public YOU(): TerminalNode | undefined { return this.tryGetToken(mtgParser.YOU, 0); }
	public THEY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEY, 0); }
	public commonReferencingPrefix(): CommonReferencingPrefixContext | undefined {
		return this.tryGetRuleContext(0, CommonReferencingPrefixContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public purePlayer(): PurePlayerContext | undefined {
		return this.tryGetRuleContext(0, PurePlayerContext);
	}
	public itsPossessive(): ItsPossessiveContext | undefined {
		return this.tryGetRuleContext(0, ItsPossessiveContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_player; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPlayer) listener.enterPlayer(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPlayer) listener.exitPlayer(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPlayer) return visitor.visitPlayer(this);
		else return visitor.visitChildren(this);
	}
}


export class PurePlayerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_purePlayer; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPurePlayer) listener.enterPurePlayer(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPurePlayer) listener.exitPurePlayer(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPurePlayer) return visitor.visitPurePlayer(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectContext extends ParserRuleContext {
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	public THEY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEY, 0); }
	public THEM(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEM, 0); }
	public referencingObjectPrefix(): ReferencingObjectPrefixContext | undefined {
		return this.tryGetRuleContext(0, ReferencingObjectPrefixContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public pureObject(): PureObjectContext | undefined {
		return this.tryGetRuleContext(0, PureObjectContext);
	}
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public THAT_S(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THAT_S, 0); }
	public isWhat(): IsWhatContext | undefined {
		return this.tryGetRuleContext(0, IsWhatContext);
	}
	public cumulativeReferencingPrefix(): CumulativeReferencingPrefixContext | undefined {
		return this.tryGetRuleContext(0, CumulativeReferencingPrefixContext);
	}
	public suffix(): SuffixContext | undefined {
		return this.tryGetRuleContext(0, SuffixContext);
	}
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	public CARD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CARD, 0); }
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_object; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterObject) listener.enterObject(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitObject) listener.exitObject(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitObject) return visitor.visitObject(this);
		else return visitor.visitChildren(this);
	}
}


export class SuffixContext extends ParserRuleContext {
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public DON_T(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DON_T, 0); }
	public DOESN_T(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DOESN_T, 0); }
	public zone(): ZoneContext[];
	public zone(i: number): ZoneContext;
	public zone(i?: number): ZoneContext | ZoneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZoneContext);
		} else {
			return this.getRuleContext(i, ZoneContext);
		}
	}
	public YOU(): TerminalNode | undefined { return this.tryGetToken(mtgParser.YOU, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAST, 0); }
	public THAT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THAT, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public fromZone(): FromZoneContext | undefined {
		return this.tryGetRuleContext(0, FromZoneContext);
	}
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public anyType(): AnyTypeContext | undefined {
		return this.tryGetRuleContext(0, AnyTypeContext);
	}
	public playersPossessive(): PlayersPossessiveContext | undefined {
		return this.tryGetRuleContext(0, PlayersPossessiveContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public YOU_VE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.YOU_VE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_suffix; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterSuffix) listener.enterSuffix(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitSuffix) listener.exitSuffix(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitSuffix) return visitor.visitSuffix(this);
		else return visitor.visitChildren(this);
	}
}


export class PureObjectContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public pureObject(): PureObjectContext[];
	public pureObject(i: number): PureObjectContext;
	public pureObject(i?: number): PureObjectContext | PureObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PureObjectContext);
		} else {
			return this.getRuleContext(i, PureObjectContext);
		}
	}
	public prefix(): PrefixContext[];
	public prefix(i: number): PrefixContext;
	public prefix(i?: number): PrefixContext | PrefixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrefixContext);
		} else {
			return this.getRuleContext(i, PrefixContext);
		}
	}
	public COPY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COPY, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public cumulativeReferencingPrefix(): CumulativeReferencingPrefixContext | undefined {
		return this.tryGetRuleContext(0, CumulativeReferencingPrefixContext);
	}
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public n(): NContext | undefined {
		return this.tryGetRuleContext(0, NContext);
	}
	public suffix(): SuffixContext | undefined {
		return this.tryGetRuleContext(0, SuffixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_pureObject; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPureObject) listener.enterPureObject(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPureObject) listener.exitPureObject(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPureObject) return visitor.visitPureObject(this);
		else return visitor.visitChildren(this);
	}
}


export class ReferencingObjectPrefixContext extends ParserRuleContext {
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public commonReferencingPrefix(): CommonReferencingPrefixContext | undefined {
		return this.tryGetRuleContext(0, CommonReferencingPrefixContext);
	}
	public countableCount(): CountableCountContext | undefined {
		return this.tryGetRuleContext(0, CountableCountContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_referencingObjectPrefix; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterReferencingObjectPrefix) listener.enterReferencingObjectPrefix(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitReferencingObjectPrefix) listener.exitReferencingObjectPrefix(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitReferencingObjectPrefix) return visitor.visitReferencingObjectPrefix(this);
		else return visitor.visitChildren(this);
	}
}


export class CumulativeReferencingPrefixContext extends ParserRuleContext {
	public EQUIPPED(): TerminalNode { return this.getToken(mtgParser.EQUIPPED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_cumulativeReferencingPrefix; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCumulativeReferencingPrefix) listener.enterCumulativeReferencingPrefix(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCumulativeReferencingPrefix) listener.exitCumulativeReferencingPrefix(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCumulativeReferencingPrefix) return visitor.visitCumulativeReferencingPrefix(this);
		else return visitor.visitChildren(this);
	}
}


export class CommonReferencingPrefixContext extends ParserRuleContext {
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ALL, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THIS, 0); }
	public ENCHANTED(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ENCHANTED, 0); }
	public THAT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THAT, 0); }
	public THESE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THESE, 0); }
	public THOSE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THOSE, 0); }
	public ANOTHER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ANOTHER, 0); }
	public INDEFINITE_ARTICLE_AN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_AN, 0); }
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.AT, 0); }
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	public countableCount(): CountableCountContext | undefined {
		return this.tryGetRuleContext(0, CountableCountContext);
	}
	public commonReferencingPrefix(): CommonReferencingPrefixContext | undefined {
		return this.tryGetRuleContext(0, CommonReferencingPrefixContext);
	}
	public TARGET(): TerminalNode | undefined { return this.tryGetToken(mtgParser.TARGET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_commonReferencingPrefix; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCommonReferencingPrefix) listener.enterCommonReferencingPrefix(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCommonReferencingPrefix) listener.exitCommonReferencingPrefix(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCommonReferencingPrefix) return visitor.visitCommonReferencingPrefix(this);
		else return visitor.visitChildren(this);
	}
}


export class PrefixContext extends ParserRuleContext {
	public ENCHANTED(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ENCHANTED, 0); }
	public anyType(): AnyTypeContext | undefined {
		return this.tryGetRuleContext(0, AnyTypeContext);
	}
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	public pt(): PtContext | undefined {
		return this.tryGetRuleContext(0, PtContext);
	}
	public LEGENDARY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.LEGENDARY, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_prefix; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPrefix) listener.enterPrefix(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPrefix) listener.exitPrefix(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPrefix) return visitor.visitPrefix(this);
		else return visitor.visitChildren(this);
	}
}


export class ImperativeContext extends ParserRuleContext {
	public SACRIFICE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SACRIFICE, 0); }
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public DESTROY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DESTROY, 0); }
	public DISCARD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DISCARD, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.RETURN, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public zone(): ZoneContext[];
	public zone(i: number): ZoneContext;
	public zone(i?: number): ZoneContext | ZoneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZoneContext);
		} else {
			return this.getRuleContext(i, ZoneContext);
		}
	}
	public fromZone(): FromZoneContext | undefined {
		return this.tryGetRuleContext(0, FromZoneContext);
	}
	public EXILE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EXILE, 0); }
	public untilClause(): UntilClauseContext | undefined {
		return this.tryGetRuleContext(0, UntilClauseContext);
	}
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CREATE, 0); }
	public createTokenDescription(): CreateTokenDescriptionContext | undefined {
		return this.tryGetRuleContext(0, CreateTokenDescriptionContext);
	}
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public THAT_S(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THAT_S, 0); }
	public COPY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COPY, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.REMOVE, 0); }
	public countableCount(): CountableCountContext | undefined {
		return this.tryGetRuleContext(0, CountableCountContext);
	}
	public counterKind(): CounterKindContext | undefined {
		return this.tryGetRuleContext(0, CounterKindContext);
	}
	public COUNTER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COUNTER, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAST, 0); }
	public PLAY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PLAY, 0); }
	public ITS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ITS, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public SURVEIL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SURVEIL, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.NUMBER, 0); }
	public SEARCH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SEARCH, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FOR, 0); }
	public CHOOSE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CHOOSE, 0); }
	public YOU(): TerminalNode[];
	public YOU(i: number): TerminalNode;
	public YOU(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.YOU);
		} else {
			return this.getToken(mtgParser.YOU, i);
		}
	}
	public DRAW(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DRAW, 0); }
	public CARD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CARD, 0); }
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	public SHUFFLE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SHUFFLE, 0); }
	public TAP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.TAP, 0); }
	public TAKE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.TAKE, 0); }
	public UNTAP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.UNTAP, 0); }
	public PAY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PAY, 0); }
	public manacost(): ManacostContext | undefined {
		return this.tryGetRuleContext(0, ManacostContext);
	}
	public numericalNumber(): NumericalNumberContext | undefined {
		return this.tryGetRuleContext(0, NumericalNumberContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ADD, 0); }
	public manaSymbols(): ManaSymbolsContext[];
	public manaSymbols(i: number): ManaSymbolsContext;
	public manaSymbols(i?: number): ManaSymbolsContext | ManaSymbolsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ManaSymbolsContext);
		} else {
			return this.getRuleContext(i, ManaSymbolsContext);
		}
	}
	public PREVENT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PREVENT, 0); }
	public damagePreventionAmount(): DamagePreventionAmountContext | undefined {
		return this.tryGetRuleContext(0, DamagePreventionAmountContext);
	}
	public damageNoun(): DamageNounContext | undefined {
		return this.tryGetRuleContext(0, DamageNounContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PUT, 0); }
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	public LOOK(): TerminalNode | undefined { return this.tryGetToken(mtgParser.LOOK, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.AT, 0); }
	public REVEAL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.REVEAL, 0); }
	public intoZone(): IntoZoneContext[];
	public intoZone(i: number): IntoZoneContext;
	public intoZone(i?: number): IntoZoneContext | IntoZoneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntoZoneContext);
		} else {
			return this.getRuleContext(i, IntoZoneContext);
		}
	}
	public gains(): GainsContext | undefined {
		return this.tryGetRuleContext(0, GainsContext);
	}
	public s(): SContext[];
	public s(i: number): SContext;
	public s(i?: number): SContext | SContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SContext);
		} else {
			return this.getRuleContext(i, SContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IF, 0); }
	public objectInfinitive(): ObjectInfinitiveContext | undefined {
		return this.tryGetRuleContext(0, ObjectInfinitiveContext);
	}
	public imperative(): ImperativeContext[];
	public imperative(i: number): ImperativeContext;
	public imperative(i?: number): ImperativeContext | ImperativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImperativeContext);
		} else {
			return this.getRuleContext(i, ImperativeContext);
		}
	}
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public pureObject(): PureObjectContext | undefined {
		return this.tryGetRuleContext(0, PureObjectContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SWITCH, 0); }
	public SPEND(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPEND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_imperative; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterImperative) listener.enterImperative(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitImperative) listener.exitImperative(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitImperative) return visitor.visitImperative(this);
		else return visitor.visitChildren(this);
	}
}


export class PlayerVerbPhraseContext extends ParserRuleContext {
	public gains(): GainsContext | undefined {
		return this.tryGetRuleContext(0, GainsContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public itsPossessive(): ItsPossessiveContext | undefined {
		return this.tryGetRuleContext(0, ItsPossessiveContext);
	}
	public numericalCharacteristic(): NumericalCharacteristicContext | undefined {
		return this.tryGetRuleContext(0, NumericalCharacteristicContext);
	}
	public playerVerbPhrase(): PlayerVerbPhraseContext[];
	public playerVerbPhrase(i: number): PlayerVerbPhraseContext;
	public playerVerbPhrase(i?: number): PlayerVerbPhraseContext | PlayerVerbPhraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PlayerVerbPhraseContext);
		} else {
			return this.getRuleContext(i, PlayerVerbPhraseContext);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FOR, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public pureObject(): PureObjectContext | undefined {
		return this.tryGetRuleContext(0, PureObjectContext);
	}
	public controls(): ControlsContext | undefined {
		return this.tryGetRuleContext(0, ControlsContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public owns(): OwnsContext | undefined {
		return this.tryGetRuleContext(0, OwnsContext);
	}
	public intoZone(): IntoZoneContext | undefined {
		return this.tryGetRuleContext(0, IntoZoneContext);
	}
	public SURVEIL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SURVEIL, 0); }
	public REVEAL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.REVEAL, 0); }
	public playersPossessive(): PlayersPossessiveContext | undefined {
		return this.tryGetRuleContext(0, PlayersPossessiveContext);
	}
	public imperative(): ImperativeContext | undefined {
		return this.tryGetRuleContext(0, ImperativeContext);
	}
	public CANT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CANT, 0); }
	public DOESN_T(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DOESN_T, 0); }
	public DON_T(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DON_T, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IF, 0); }
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public gets(): GetsContext | undefined {
		return this.tryGetRuleContext(0, GetsContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_playerVerbPhrase; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPlayerVerbPhrase) listener.enterPlayerVerbPhrase(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPlayerVerbPhrase) listener.exitPlayerVerbPhrase(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPlayerVerbPhrase) return visitor.visitPlayerVerbPhrase(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectVerbPhraseContext extends ParserRuleContext {
	public objectVerbPhrase(): ObjectVerbPhraseContext[];
	public objectVerbPhrase(i: number): ObjectVerbPhraseContext;
	public objectVerbPhrase(i?: number): ObjectVerbPhraseContext | ObjectVerbPhraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectVerbPhraseContext);
		} else {
			return this.getRuleContext(i, ObjectVerbPhraseContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public acquiredAbility(): AcquiredAbilityContext | undefined {
		return this.tryGetRuleContext(0, AcquiredAbilityContext);
	}
	public asLongAsClause(): AsLongAsClauseContext | undefined {
		return this.tryGetRuleContext(0, AsLongAsClauseContext);
	}
	public gets(): GetsContext | undefined {
		return this.tryGetRuleContext(0, GetsContext);
	}
	public ptModification(): PtModificationContext | undefined {
		return this.tryGetRuleContext(0, PtModificationContext);
	}
	public gains(): GainsContext | undefined {
		return this.tryGetRuleContext(0, GainsContext);
	}
	public untilClause(): UntilClauseContext | undefined {
		return this.tryGetRuleContext(0, UntilClauseContext);
	}
	public foreachClause(): ForeachClauseContext | undefined {
		return this.tryGetRuleContext(0, ForeachClauseContext);
	}
	public THEBATTLEFIELD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEBATTLEFIELD, 0); }
	public counterKind(): CounterKindContext | undefined {
		return this.tryGetRuleContext(0, CounterKindContext);
	}
	public COUNTER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COUNTER, 0); }
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public INDEFINITE_ARTICLE_AN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_AN, 0); }
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	public numberDefinition(): NumberDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NumberDefinitionContext);
	}
	public playersPossessive(): PlayersPossessiveContext | undefined {
		return this.tryGetRuleContext(0, PlayersPossessiveContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PUT, 0); }
	public intoZone(): IntoZoneContext | undefined {
		return this.tryGetRuleContext(0, IntoZoneContext);
	}
	public fromZone(): FromZoneContext | undefined {
		return this.tryGetRuleContext(0, FromZoneContext);
	}
	public CANT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CANT, 0); }
	public cantClauseInner(): CantClauseInnerContext | undefined {
		return this.tryGetRuleContext(0, CantClauseInnerContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public dealsWhat(): DealsWhatContext | undefined {
		return this.tryGetRuleContext(0, DealsWhatContext);
	}
	public isWhat(): IsWhatContext | undefined {
		return this.tryGetRuleContext(0, IsWhatContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THIS, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public DOESN_T(): TerminalNode | undefined { return this.tryGetToken(mtgParser.DOESN_T, 0); }
	public qualifiedPartOfTurn(): QualifiedPartOfTurnContext | undefined {
		return this.tryGetRuleContext(0, QualifiedPartOfTurnContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public manacost(): ManacostContext | undefined {
		return this.tryGetRuleContext(0, ManacostContext);
	}
	public CAST(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAST, 0); }
	public CAN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CAN, 0); }
	public becomesWhat(): BecomesWhatContext | undefined {
		return this.tryGetRuleContext(0, BecomesWhatContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IF, 0); }
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_objectVerbPhrase; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterObjectVerbPhrase) listener.enterObjectVerbPhrase(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitObjectVerbPhrase) listener.exitObjectVerbPhrase(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitObjectVerbPhrase) return visitor.visitObjectVerbPhrase(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectInfinitiveContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public intoZone(): IntoZoneContext | undefined {
		return this.tryGetRuleContext(0, IntoZoneContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public dealsWhat(): DealsWhatContext | undefined {
		return this.tryGetRuleContext(0, DealsWhatContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_objectInfinitive; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterObjectInfinitive) listener.enterObjectInfinitive(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitObjectInfinitive) listener.exitObjectInfinitive(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitObjectInfinitive) return visitor.visitObjectInfinitive(this);
		else return visitor.visitChildren(this);
	}
}


export class IsWhatContext extends ParserRuleContext {
	public color(): ColorContext | undefined {
		return this.tryGetRuleContext(0, ColorContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public inZone(): InZoneContext | undefined {
		return this.tryGetRuleContext(0, InZoneContext);
	}
	public anyType(): AnyTypeContext | undefined {
		return this.tryGetRuleContext(0, AnyTypeContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_isWhat; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterIsWhat) listener.enterIsWhat(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitIsWhat) listener.exitIsWhat(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitIsWhat) return visitor.visitIsWhat(this);
		else return visitor.visitChildren(this);
	}
}


export class BecomesWhatContext extends ParserRuleContext {
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public COPY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COPY, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public exceptClauseInCopyEffect(): ExceptClauseInCopyEffectContext | undefined {
		return this.tryGetRuleContext(0, ExceptClauseInCopyEffectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_becomesWhat; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterBecomesWhat) listener.enterBecomesWhat(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitBecomesWhat) listener.exitBecomesWhat(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitBecomesWhat) return visitor.visitBecomesWhat(this);
		else return visitor.visitChildren(this);
	}
}


export class ExceptClauseInCopyEffectContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public copyException(): CopyExceptionContext[];
	public copyException(i: number): CopyExceptionContext;
	public copyException(i?: number): CopyExceptionContext | CopyExceptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CopyExceptionContext);
		} else {
			return this.getRuleContext(i, CopyExceptionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_exceptClauseInCopyEffect; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterExceptClauseInCopyEffect) listener.enterExceptClauseInCopyEffect(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitExceptClauseInCopyEffect) listener.exitExceptClauseInCopyEffect(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitExceptClauseInCopyEffect) return visitor.visitExceptClauseInCopyEffect(this);
		else return visitor.visitChildren(this);
	}
}


export class CopyExceptionContext extends ParserRuleContext {
	public ITS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ITS, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public IT_S(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT_S, 0); }
	public isWhat(): IsWhatContext | undefined {
		return this.tryGetRuleContext(0, IsWhatContext);
	}
	public ss(): SsContext | undefined {
		return this.tryGetRuleContext(0, SsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_copyException; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCopyException) listener.enterCopyException(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCopyException) listener.exitCopyException(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCopyException) return visitor.visitCopyException(this);
		else return visitor.visitChildren(this);
	}
}


export class ItsPossessiveContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public SAXON(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SAXON, 0); }
	public ITS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.ITS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_itsPossessive; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterItsPossessive) listener.enterItsPossessive(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitItsPossessive) listener.exitItsPossessive(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitItsPossessive) return visitor.visitItsPossessive(this);
		else return visitor.visitChildren(this);
	}
}


export class AcquiredAbilityContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public ability(): AbilityContext | undefined {
		return this.tryGetRuleContext(0, AbilityContext);
	}
	public acquiredAbility(): AcquiredAbilityContext[];
	public acquiredAbility(i: number): AcquiredAbilityContext;
	public acquiredAbility(i?: number): AcquiredAbilityContext | AcquiredAbilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AcquiredAbilityContext);
		} else {
			return this.getRuleContext(i, AcquiredAbilityContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_acquiredAbility; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAcquiredAbility) listener.enterAcquiredAbility(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAcquiredAbility) listener.exitAcquiredAbility(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAcquiredAbility) return visitor.visitAcquiredAbility(this);
		else return visitor.visitChildren(this);
	}
}


export class GetsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_gets; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterGets) listener.enterGets(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitGets) listener.exitGets(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitGets) return visitor.visitGets(this);
		else return visitor.visitChildren(this);
	}
}


export class ControlsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_controls; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterControls) listener.enterControls(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitControls) listener.exitControls(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitControls) return visitor.visitControls(this);
		else return visitor.visitChildren(this);
	}
}


export class OwnsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_owns; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterOwns) listener.enterOwns(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitOwns) listener.exitOwns(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitOwns) return visitor.visitOwns(this);
		else return visitor.visitChildren(this);
	}
}


export class GainsContext extends ParserRuleContext {
	public GAINS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.GAINS, 0); }
	public GAIN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.GAIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_gains; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterGains) listener.enterGains(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitGains) listener.exitGains(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitGains) return visitor.visitGains(this);
		else return visitor.visitChildren(this);
	}
}


export class DurationContext extends ParserRuleContext {
	public FOR(): TerminalNode | undefined { return this.tryGetToken(mtgParser.FOR, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public asLongAsClause(): AsLongAsClauseContext | undefined {
		return this.tryGetRuleContext(0, AsLongAsClauseContext);
	}
	public untilClauseInner(): UntilClauseInnerContext | undefined {
		return this.tryGetRuleContext(0, UntilClauseInnerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_duration; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDuration) listener.enterDuration(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDuration) listener.exitDuration(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDuration) return visitor.visitDuration(this);
		else return visitor.visitChildren(this);
	}
}


export class NumericalCharacteristicContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_numericalCharacteristic; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterNumericalCharacteristic) listener.enterNumericalCharacteristic(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitNumericalCharacteristic) listener.exitNumericalCharacteristic(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitNumericalCharacteristic) return visitor.visitNumericalCharacteristic(this);
		else return visitor.visitChildren(this);
	}
}


export class UntilClauseContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public untilClauseInner(): UntilClauseInnerContext {
		return this.getRuleContext(0, UntilClauseInnerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_untilClause; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterUntilClause) listener.enterUntilClause(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitUntilClause) listener.exitUntilClause(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitUntilClause) return visitor.visitUntilClause(this);
		else return visitor.visitChildren(this);
	}
}


export class UntilClauseInnerContext extends ParserRuleContext {
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_untilClauseInner; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterUntilClauseInner) listener.enterUntilClauseInner(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitUntilClauseInner) listener.exitUntilClauseInner(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitUntilClauseInner) return visitor.visitUntilClauseInner(this);
		else return visitor.visitChildren(this);
	}
}


export class DamagePreventionAmountContext extends ParserRuleContext {
	public ALL(): TerminalNode { return this.getToken(mtgParser.ALL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_damagePreventionAmount; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDamagePreventionAmount) listener.enterDamagePreventionAmount(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDamagePreventionAmount) listener.exitDamagePreventionAmount(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDamagePreventionAmount) return visitor.visitDamagePreventionAmount(this);
		else return visitor.visitChildren(this);
	}
}


export class DamageNounContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_damageNoun; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDamageNoun) listener.enterDamageNoun(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDamageNoun) listener.exitDamageNoun(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDamageNoun) return visitor.visitDamageNoun(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTokenDescriptionContext extends ParserRuleContext {
	public englishNumber(): EnglishNumberContext {
		return this.getRuleContext(0, EnglishNumberContext);
	}
	public pt(): PtContext {
		return this.getRuleContext(0, PtContext);
	}
	public color(): ColorContext {
		return this.getRuleContext(0, ColorContext);
	}
	public permanentType(): PermanentTypeContext {
		return this.getRuleContext(0, PermanentTypeContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_createTokenDescription; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCreateTokenDescription) listener.enterCreateTokenDescription(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCreateTokenDescription) listener.exitCreateTokenDescription(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCreateTokenDescription) return visitor.visitCreateTokenDescription(this);
		else return visitor.visitChildren(this);
	}
}


export class ColorContext extends ParserRuleContext {
	public color(): ColorContext[];
	public color(i: number): ColorContext;
	public color(i?: number): ColorContext | ColorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColorContext);
		} else {
			return this.getRuleContext(i, ColorContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_color; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterColor) listener.enterColor(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitColor) listener.exitColor(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitColor) return visitor.visitColor(this);
		else return visitor.visitChildren(this);
	}
}


export class PtContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.NUMBER);
		} else {
			return this.getToken(mtgParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_pt; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPt) listener.enterPt(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPt) listener.exitPt(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPt) return visitor.visitPt(this);
		else return visitor.visitChildren(this);
	}
}


export class PtModificationContext extends ParserRuleContext {
	public PLUSMINUS(): TerminalNode[];
	public PLUSMINUS(i: number): TerminalNode;
	public PLUSMINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.PLUSMINUS);
		} else {
			return this.getToken(mtgParser.PLUSMINUS, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.NUMBER);
		} else {
			return this.getToken(mtgParser.NUMBER, i);
		}
	}
	public XX(): TerminalNode[];
	public XX(i: number): TerminalNode;
	public XX(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.XX);
		} else {
			return this.getToken(mtgParser.XX, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_ptModification; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPtModification) listener.enterPtModification(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPtModification) listener.exitPtModification(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPtModification) return visitor.visitPtModification(this);
		else return visitor.visitChildren(this);
	}
}


export class NumberDefinitionContext extends ParserRuleContext {
	public itsPossessive(): ItsPossessiveContext | undefined {
		return this.tryGetRuleContext(0, ItsPossessiveContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public numericalCharacteristic(): NumericalCharacteristicContext | undefined {
		return this.tryGetRuleContext(0, NumericalCharacteristicContext);
	}
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_numberDefinition; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterNumberDefinition) listener.enterNumberDefinition(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitNumberDefinition) listener.exitNumberDefinition(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitNumberDefinition) return visitor.visitNumberDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class WithClauseContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public withClauseInner(): WithClauseInnerContext {
		return this.getRuleContext(0, WithClauseInnerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_withClause; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterWithClause) listener.enterWithClause(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitWithClause) listener.exitWithClause(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitWithClause) return visitor.visitWithClause(this);
		else return visitor.visitChildren(this);
	}
}


export class WithClauseInnerContext extends ParserRuleContext {
	public numericalCharacteristic(): NumericalCharacteristicContext | undefined {
		return this.tryGetRuleContext(0, NumericalCharacteristicContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public numericalComparison(): NumericalComparisonContext | undefined {
		return this.tryGetRuleContext(0, NumericalComparisonContext);
	}
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public numericalNumber(): NumericalNumberContext[];
	public numericalNumber(i: number): NumericalNumberContext;
	public numericalNumber(i?: number): NumericalNumberContext | NumericalNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericalNumberContext);
		} else {
			return this.getRuleContext(i, NumericalNumberContext);
		}
	}
	public counterKind(): CounterKindContext | undefined {
		return this.tryGetRuleContext(0, CounterKindContext);
	}
	public COUNTER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.COUNTER, 0); }
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	public THEM(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEM, 0); }
	public acquiredAbility(): AcquiredAbilityContext | undefined {
		return this.tryGetRuleContext(0, AcquiredAbilityContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_withClauseInner; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterWithClauseInner) listener.enterWithClauseInner(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitWithClauseInner) listener.exitWithClauseInner(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitWithClauseInner) return visitor.visitWithClauseInner(this);
		else return visitor.visitChildren(this);
	}
}


export class CounterKindContext extends ParserRuleContext {
	public ptModification(): PtModificationContext | undefined {
		return this.tryGetRuleContext(0, PtModificationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_counterKind; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCounterKind) listener.enterCounterKind(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCounterKind) listener.exitCounterKind(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCounterKind) return visitor.visitCounterKind(this);
		else return visitor.visitChildren(this);
	}
}


export class DealsWhatContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public damageRecipient(): DamageRecipientContext | undefined {
		return this.tryGetRuleContext(0, DamageRecipientContext);
	}
	public numericalNumber(): NumericalNumberContext | undefined {
		return this.tryGetRuleContext(0, NumericalNumberContext);
	}
	public numberDefinition(): NumberDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NumberDefinitionContext);
	}
	public divideAmongDamageTargets(): DivideAmongDamageTargetsContext | undefined {
		return this.tryGetRuleContext(0, DivideAmongDamageTargetsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_dealsWhat; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDealsWhat) listener.enterDealsWhat(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDealsWhat) listener.exitDealsWhat(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDealsWhat) return visitor.visitDealsWhat(this);
		else return visitor.visitChildren(this);
	}
}


export class DamageRecipientContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public TARGET(): TerminalNode | undefined { return this.tryGetToken(mtgParser.TARGET, 0); }
	public damageRecipient(): DamageRecipientContext[];
	public damageRecipient(i: number): DamageRecipientContext;
	public damageRecipient(i?: number): DamageRecipientContext | DamageRecipientContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DamageRecipientContext);
		} else {
			return this.getRuleContext(i, DamageRecipientContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_damageRecipient; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDamageRecipient) listener.enterDamageRecipient(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDamageRecipient) listener.exitDamageRecipient(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDamageRecipient) return visitor.visitDamageRecipient(this);
		else return visitor.visitChildren(this);
	}
}


export class DivideAmongDamageTargetsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_divideAmongDamageTargets; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDivideAmongDamageTargets) listener.enterDivideAmongDamageTargets(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDivideAmongDamageTargets) listener.exitDivideAmongDamageTargets(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDivideAmongDamageTargets) return visitor.visitDivideAmongDamageTargets(this);
		else return visitor.visitChildren(this);
	}
}


export class EnglishNumberContext extends ParserRuleContext {
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public INDEFINITE_ARTICLE_AN(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_AN, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(mtgParser.XX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_englishNumber; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterEnglishNumber) listener.enterEnglishNumber(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitEnglishNumber) listener.exitEnglishNumber(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitEnglishNumber) return visitor.visitEnglishNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class NumericalNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.NUMBER, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_numericalNumber; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterNumericalNumber) listener.enterNumericalNumber(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitNumericalNumber) listener.exitNumericalNumber(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitNumericalNumber) return visitor.visitNumericalNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class NumericalComparisonContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public numberDefinition(): NumberDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NumberDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_numericalComparison; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterNumericalComparison) listener.enterNumericalComparison(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitNumericalComparison) listener.exitNumericalComparison(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitNumericalComparison) return visitor.visitNumericalComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.NUMBER, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(mtgParser.XX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_number; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterNumber) listener.enterNumber(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitNumber) listener.exitNumber(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitNumber) return visitor.visitNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class CountableCountContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_countableCount; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCountableCount) listener.enterCountableCount(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCountableCount) listener.exitCountableCount(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCountableCount) return visitor.visitCountableCount(this);
		else return visitor.visitChildren(this);
	}
}


export class CantClauseInnerContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public englishNumber(): EnglishNumberContext | undefined {
		return this.tryGetRuleContext(0, EnglishNumberContext);
	}
	public CREATURE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CREATURE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_cantClauseInner; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCantClauseInner) listener.enterCantClauseInner(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCantClauseInner) listener.exitCantClauseInner(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCantClauseInner) return visitor.visitCantClauseInner(this);
		else return visitor.visitChildren(this);
	}
}


export class ZoneContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public actualZone(): ActualZoneContext | undefined {
		return this.tryGetRuleContext(0, ActualZoneContext);
	}
	public playersPossessive(): PlayersPossessiveContext | undefined {
		return this.tryGetRuleContext(0, PlayersPossessiveContext);
	}
	public INDEFINITE_ARTICLE_A(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INDEFINITE_ARTICLE_A, 0); }
	public EXILE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EXILE, 0); }
	public THEBATTLEFIELD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEBATTLEFIELD, 0); }
	public IT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.IT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_zone; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterZone) listener.enterZone(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitZone) listener.exitZone(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitZone) return visitor.visitZone(this);
		else return visitor.visitChildren(this);
	}
}


export class ActualZoneContext extends ParserRuleContext {
	public actualZone(): ActualZoneContext[];
	public actualZone(i: number): ActualZoneContext;
	public actualZone(i?: number): ActualZoneContext | ActualZoneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualZoneContext);
		} else {
			return this.getRuleContext(i, ActualZoneContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_actualZone; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterActualZone) listener.enterActualZone(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitActualZone) listener.exitActualZone(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitActualZone) return visitor.visitActualZone(this);
		else return visitor.visitChildren(this);
	}
}


export class IntoZoneContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public THEBATTLEFIELD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEBATTLEFIELD, 0); }
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_intoZone; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterIntoZone) listener.enterIntoZone(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitIntoZone) listener.exitIntoZone(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitIntoZone) return visitor.visitIntoZone(this);
		else return visitor.visitChildren(this);
	}
}


export class InZoneContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public THEBATTLEFIELD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THEBATTLEFIELD, 0); }
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_inZone; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterInZone) listener.enterInZone(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitInZone) listener.exitInZone(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitInZone) return visitor.visitInZone(this);
		else return visitor.visitChildren(this);
	}
}


export class FromZoneContext extends ParserRuleContext {
	public SPACE(): TerminalNode { return this.getToken(mtgParser.SPACE, 0); }
	public zone(): ZoneContext {
		return this.getRuleContext(0, ZoneContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_fromZone; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterFromZone) listener.enterFromZone(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitFromZone) listener.exitFromZone(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitFromZone) return visitor.visitFromZone(this);
		else return visitor.visitChildren(this);
	}
}


export class NContext extends ParserRuleContext {
	public PERMANENT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.PERMANENT, 0); }
	public n(): NContext | undefined {
		return this.tryGetRuleContext(0, NContext);
	}
	public SPELL(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPELL, 0); }
	public anyType(): AnyTypeContext | undefined {
		return this.tryGetRuleContext(0, AnyTypeContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public CARD(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CARD, 0); }
	public permanentType(): PermanentTypeContext | undefined {
		return this.tryGetRuleContext(0, PermanentTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_n; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterN) listener.enterN(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitN) listener.exitN(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitN) return visitor.visitN(this);
		else return visitor.visitChildren(this);
	}
}


export class PermanentTypeContext extends ParserRuleContext {
	public CREATURE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.CREATURE, 0); }
	public LAND(): TerminalNode | undefined { return this.tryGetToken(mtgParser.LAND, 0); }
	public permanentType(): PermanentTypeContext[];
	public permanentType(i: number): PermanentTypeContext;
	public permanentType(i?: number): PermanentTypeContext | PermanentTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PermanentTypeContext);
		} else {
			return this.getRuleContext(i, PermanentTypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_permanentType; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPermanentType) listener.enterPermanentType(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPermanentType) listener.exitPermanentType(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPermanentType) return visitor.visitPermanentType(this);
		else return visitor.visitChildren(this);
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_name; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterName) listener.enterName(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitName) listener.exitName(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitName) return visitor.visitName(this);
		else return visitor.visitChildren(this);
	}
}


export class AnyTypeContext extends ParserRuleContext {
	public permanentType(): PermanentTypeContext | undefined {
		return this.tryGetRuleContext(0, PermanentTypeContext);
	}
	public spellType(): SpellTypeContext | undefined {
		return this.tryGetRuleContext(0, SpellTypeContext);
	}
	public LEGENDARY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.LEGENDARY, 0); }
	public anyType(): AnyTypeContext | undefined {
		return this.tryGetRuleContext(0, AnyTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_anyType; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAnyType) listener.enterAnyType(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAnyType) listener.exitAnyType(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAnyType) return visitor.visitAnyType(this);
		else return visitor.visitChildren(this);
	}
}


export class SpellTypeContext extends ParserRuleContext {
	public INSTANT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.INSTANT, 0); }
	public SORCERY(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SORCERY, 0); }
	public spellType(): SpellTypeContext[];
	public spellType(i: number): SpellTypeContext;
	public spellType(i?: number): SpellTypeContext | SpellTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpellTypeContext);
		} else {
			return this.getRuleContext(i, SpellTypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_spellType; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterSpellType) listener.enterSpellType(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitSpellType) listener.exitSpellType(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitSpellType) return visitor.visitSpellType(this);
		else return visitor.visitChildren(this);
	}
}


export class AsLongAsClauseContext extends ParserRuleContext {
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.AS);
		} else {
			return this.getToken(mtgParser.AS, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_asLongAsClause; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterAsLongAsClause) listener.enterAsLongAsClause(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitAsLongAsClause) listener.exitAsLongAsClause(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitAsLongAsClause) return visitor.visitAsLongAsClause(this);
		else return visitor.visitChildren(this);
	}
}


export class DoSomethingInsteadOfSomethingElseContext extends ParserRuleContext {
	public s(): SContext {
		return this.getRuleContext(0, SContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	public IT(): TerminalNode { return this.getToken(mtgParser.IT, 0); }
	public intoZone(): IntoZoneContext {
		return this.getRuleContext(0, IntoZoneContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_doSomethingInsteadOfSomethingElse; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterDoSomethingInsteadOfSomethingElse) listener.enterDoSomethingInsteadOfSomethingElse(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitDoSomethingInsteadOfSomethingElse) listener.exitDoSomethingInsteadOfSomethingElse(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitDoSomethingInsteadOfSomethingElse) return visitor.visitDoSomethingInsteadOfSomethingElse(this);
		else return visitor.visitChildren(this);
	}
}


export class CostsContext extends ParserRuleContext {
	public cost(): CostContext[];
	public cost(i: number): CostContext;
	public cost(i?: number): CostContext | CostContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CostContext);
		} else {
			return this.getRuleContext(i, CostContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mtgParser.SPACE);
		} else {
			return this.getToken(mtgParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_costs; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCosts) listener.enterCosts(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCosts) listener.exitCosts(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCosts) return visitor.visitCosts(this);
		else return visitor.visitChildren(this);
	}
}


export class CostContext extends ParserRuleContext {
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public manacost(): ManacostContext | undefined {
		return this.tryGetRuleContext(0, ManacostContext);
	}
	public loyaltyCost(): LoyaltyCostContext | undefined {
		return this.tryGetRuleContext(0, LoyaltyCostContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_cost; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterCost) listener.enterCost(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitCost) listener.exitCost(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitCost) return visitor.visitCost(this);
		else return visitor.visitChildren(this);
	}
}


export class LoyaltyCostContext extends ParserRuleContext {
	public PLUSMINUS(): TerminalNode { return this.getToken(mtgParser.PLUSMINUS, 0); }
	public NUMBER(): TerminalNode { return this.getToken(mtgParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_loyaltyCost; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterLoyaltyCost) listener.enterLoyaltyCost(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitLoyaltyCost) listener.exitLoyaltyCost(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitLoyaltyCost) return visitor.visitLoyaltyCost(this);
		else return visitor.visitChildren(this);
	}
}


export class ManacostContext extends ParserRuleContext {
	public manaGroup(): ManaGroupContext[];
	public manaGroup(i: number): ManaGroupContext;
	public manaGroup(i?: number): ManaGroupContext | ManaGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ManaGroupContext);
		} else {
			return this.getRuleContext(i, ManaGroupContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_manacost; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterManacost) listener.enterManacost(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitManacost) listener.exitManacost(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitManacost) return visitor.visitManacost(this);
		else return visitor.visitChildren(this);
	}
}


export class ManaGroupContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mtgParser.NUMBER, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public manaSymbol(): ManaSymbolContext | undefined {
		return this.tryGetRuleContext(0, ManaSymbolContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_manaGroup; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterManaGroup) listener.enterManaGroup(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitManaGroup) listener.exitManaGroup(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitManaGroup) return visitor.visitManaGroup(this);
		else return visitor.visitChildren(this);
	}
}


export class ManaSymbolsContext extends ParserRuleContext {
	public manaSymbol(): ManaSymbolContext[];
	public manaSymbol(i: number): ManaSymbolContext;
	public manaSymbol(i?: number): ManaSymbolContext | ManaSymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ManaSymbolContext);
		} else {
			return this.getRuleContext(i, ManaSymbolContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_manaSymbols; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterManaSymbols) listener.enterManaSymbols(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitManaSymbols) listener.exitManaSymbols(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitManaSymbols) return visitor.visitManaSymbols(this);
		else return visitor.visitChildren(this);
	}
}


export class ManaSymbolContext extends ParserRuleContext {
	public manaLetter(): ManaLetterContext[];
	public manaLetter(i: number): ManaLetterContext;
	public manaLetter(i?: number): ManaLetterContext | ManaLetterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ManaLetterContext);
		} else {
			return this.getRuleContext(i, ManaLetterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_manaSymbol; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterManaSymbol) listener.enterManaSymbol(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitManaSymbol) listener.exitManaSymbol(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitManaSymbol) return visitor.visitManaSymbol(this);
		else return visitor.visitChildren(this);
	}
}


export class ManaLetterContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_manaLetter; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterManaLetter) listener.enterManaLetter(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitManaLetter) listener.exitManaLetter(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitManaLetter) return visitor.visitManaLetter(this);
		else return visitor.visitChildren(this);
	}
}


export class QualifiedPartOfTurnContext extends ParserRuleContext {
	public turnQualification(): TurnQualificationContext | undefined {
		return this.tryGetRuleContext(0, TurnQualificationContext);
	}
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public partOfTurn(): PartOfTurnContext | undefined {
		return this.tryGetRuleContext(0, PartOfTurnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_qualifiedPartOfTurn; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterQualifiedPartOfTurn) listener.enterQualifiedPartOfTurn(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitQualifiedPartOfTurn) listener.exitQualifiedPartOfTurn(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitQualifiedPartOfTurn) return visitor.visitQualifiedPartOfTurn(this);
		else return visitor.visitChildren(this);
	}
}


export class TurnQualificationContext extends ParserRuleContext {
	public playersPossessive(): PlayersPossessiveContext | undefined {
		return this.tryGetRuleContext(0, PlayersPossessiveContext);
	}
	public THE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THE, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SPACE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THIS, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(mtgParser.EACH, 0); }
	public SAXON(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SAXON, 0); }
	public THAT(): TerminalNode | undefined { return this.tryGetToken(mtgParser.THAT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_turnQualification; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterTurnQualification) listener.enterTurnQualification(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitTurnQualification) listener.exitTurnQualification(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitTurnQualification) return visitor.visitTurnQualification(this);
		else return visitor.visitChildren(this);
	}
}


export class PartOfTurnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_partOfTurn; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPartOfTurn) listener.enterPartOfTurn(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPartOfTurn) listener.exitPartOfTurn(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPartOfTurn) return visitor.visitPartOfTurn(this);
		else return visitor.visitChildren(this);
	}
}


export class PlayersPossessiveContext extends ParserRuleContext {
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public SAXON(): TerminalNode | undefined { return this.tryGetToken(mtgParser.SAXON, 0); }
	public AP(): TerminalNode | undefined { return this.tryGetToken(mtgParser.AP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_playersPossessive; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterPlayersPossessive) listener.enterPlayersPossessive(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitPlayersPossessive) listener.exitPlayersPossessive(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitPlayersPossessive) return visitor.visitPlayersPossessive(this);
		else return visitor.visitChildren(this);
	}
}


export class ReminderTextContext extends ParserRuleContext {
	public REMINDER_TEXT(): TerminalNode { return this.getToken(mtgParser.REMINDER_TEXT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mtgParser.RULE_reminderText; }
	@Override
	public enterRule(listener: mtgListener): void {
		if (listener.enterReminderText) listener.enterReminderText(this);
	}
	@Override
	public exitRule(listener: mtgListener): void {
		if (listener.exitReminderText) listener.exitReminderText(this);
	}
	@Override
	public accept<Result>(visitor: mtgVisitor<Result>): Result {
		if (visitor.visitReminderText) return visitor.visitReminderText(this);
		else return visitor.visitChildren(this);
	}
}


