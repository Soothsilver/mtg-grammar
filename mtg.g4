// Commons done.
// Rares: TODO Gruesome Menagerie; Etrata, the Silencer; Thief of Sanity; Unmoored Ego
// Parens: Flower
// Modification: Pelt Collector (added 'power')
grammar mtg;
fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];

card : ability ('\n'+ ability)* |;
ability : keywords | activated | staticOrSpell | triggered | modal | abilityWordAbility | additionalCostToCastSpell | weirdAbility;
//    | ability SPACE reminderText;


// Modal abilities
modal : modalPrompt '\n' chooseOneOption ('\n' chooseOneOption)*;
modalPrompt :
    CHOOSE SPACE 'one or both' SPACE DASHDASH |
    CHOOSE SPACE 'one' SPACE DASHDASH
    ;
chooseOneOption: '* ' effect;

// Keyword abilities
keywords: keyword (',' SPACE keywords)?;
keyword : MENTOR | VIGILANCE | 'Enchant' SPACE anyEntity | 'Convoke' | LIFELINK | FLYING | FLASH | JUMPSTART | DEFENDER | HASTE  | TRAMPLE | DEATHTOUCH | MENACE | FIRSTSTRIKE | REACH | DOUBLESTRIKE
   | HEXPROOF | INDESTRUCTIBLE | EQUIP SPACE manacost;
abilityWordAbility: abilityWord SPACE DASHDASH SPACE ability;
abilityWord: 'Battalion' | 'Bloodrush' | 'Channel' | 'Chroma' | 'Cohort' | 'Constellation' | 'Converge' | 'Council\'s dilemma' | 'Delirium' | 'Domain' | 'Eminence' | 'Enrage' | 'Fateful hour' | 'Ferocious' | 'Formidable' | 'Grandeur' | 'Hellbent' | 'Heroic' | 'Imprint' | 'Inspired' | 'Join forces' | 'Kinship' | 'Landfall' | 'Lieutenant' | 'Metalcraft' | 'Morbid' | 'Parley' | 'Radiance' | 'Raid' | 'Rally' | 'Revolt' | 'Spell mastery' | 'Strive' | 'Sweep' | 'Tempting offer' | 'Threshold' | 'Undergrowth' | 'Will of the council';

// Activated abilities
activated : costs ':' SPACE effect (SPACE activationInstructions)?;
activationInstructions: ACTIVATE SPACE 'this ability only' SPACE activationInstruction FULLSTOP;
activationInstruction: 'once each turn' | 'any time you could cast a sorcery';
activatedAbilities:
    (itsPossessive SPACE)? ACTIVATED SPACE 'abilities';
activatedAbilitiesVP:
    'can\'t be activated';


// Triggered abilities
triggered : triggerCondition ',' SPACE interveningIfClause? effect;
triggerCondition :
    (WHEN | WHENEVER) SPACE triggerConditionInner |
    AT SPACE 'the beginning of' SPACE qualifiedPartOfTurn |
    AT SPACE 'end of combat';
triggerConditionInner:
    ss
  | YOU SPACE CAST SPACE object
  | YOU SPACE 'do'
  | player SPACE GAINS SPACE 'life'
  | object SPACE 'is dealt damage'
  | object SPACE 'becomes' SPACE becomesWhat
  ;
interveningIfClause: IF SPACE condition ',' SPACE;

// Weird abilities
additionalCostToCastSpell: 'As an additional cost to cast this spell,' SPACE imperative FULLSTOP;
weirdAbility:
      'You may look at an additional ' englishNumber ' cards each time you surveil.'
   |  'You may look at the top card of your library any time.'
    ;

// Actual grammar
staticOrSpell : s /*here just for ease of debugging*/ | sdot;
effect : sdot | modal;
sdot : s FULLSTOP (SPACE additionalSentences)?;
additionalSentences: additionalSentence | additionalSentences SPACE additionalSentence;
additionalSentence: s FULLSTOP | triggered;

// Sentence
s:  ss
   | 'Then' SPACE s
   | s SPACE 'and' SPACE s
   | ss (',' SPACE (('then' | 'and')? SPACE)? s)+
   | 'Otherwise,' SPACE s
    ;
// Single sentence
ss: imperative
    | ss SPACE 'and' SPACE ss
    | ss ',' SPACE 'where X is' SPACE numberDefinition
    | object SPACE objectVerbPhrase
    | player SPACE playerVerbPhrase
    | IF SPACE s ',' SPACE doSomethingInsteadOfSomethingElse
    | IF SPACE s ',' SPACE s
    | IF SPACE object SPACE 'would' SPACE (objectVerbPhrase | objectInfinitive) ',' SPACE (s SPACE 'instead' | 'instead' SPACE s)
    | asLongAsClause ',' SPACE s
    | activatedAbilities SPACE activatedAbilitiesVP
    | itsPossessive SPACE numericalCharacteristic SPACE 'is' SPACE 'equal' SPACE 'to' SPACE numberDefinition
     ;

// Condition
condition:
    s
  | 'you\'ve cast' SPACE object SPACE thisTurn
  | 'you\'ve surveilled' SPACE thisTurn
  | IT_S SPACE 'your' SPACE 'turn'
  | object SPACE 'has' SPACE countableCount SPACE (counterKind SPACE)? COUNTER 's' SPACE 'on' SPACE IT
  | numberDefinition SPACE 'is' SPACE numericalComparison
  ;

// Subject
entity: object | player;
anyEntity: object | nakedObject | player | nakedPlayer;
player:
  YOU
  | THEY
  | commonReferencingPrefix SPACE nakedPlayer
  | 'your' SPACE ('opponent' | 'opponents')
  | 'defending player'
  | itsPossessive SPACE ('controller' | 'owner')
  | player SPACE 'who can\'t'
  ;
nakedPlayer:
    'opponent'
  | 'player'
  | 'players'
  | 'opponents'
  ;
object :
   '~'
 | IT
 | THEY
 | THEM
 | 'the rest'
 | referencingObjectPrefix SPACE nakedObject
 | object SPACE THAT_S SPACE isWhat
 | object SPACE 'and' SPACE object
 | object SPACE 'or' SPACE object
 | object ',' SPACE (object ',' SPACE )+ 'or' SPACE object
 | cumulativeReferencingPrefix nakedObject
 | nakedObject SPACE suffix
 | nakedObject // because of plurals...
 | object SPACE 'and/or' SPACE object
 | EACH SPACE 'of' SPACE object
 | THE SPACE 'top' SPACE englishNumber SPACE 'cards of' SPACE zone
 | THE SPACE 'top' SPACE 'card of' SPACE zone
 ;
suffix:
 player SPACE ('control' | 'controls' | DON_T SPACE 'control' | DOESN_T SPACE 'control' | 'own' | 'owns' | DON_T SPACE 'own' | DOESN_T SPACE 'own')
 | 'in' SPACE zone (SPACE 'and' SPACE 'in' SPACE zone)?
 | 'from' SPACE zone
 | YOU SPACE CAST
 | THAT SPACE 'targets only' SPACE object
 | 'tapped this way'
 | 'of' SPACE THE SPACE anyType SPACE 'type' SPACE 'of' SPACE playersPossessive SPACE 'choice'
 | object SPACE 'could target'
 | 'able to block' SPACE object
 | THAT SPACE 'convoked' SPACE object
 | 'from among them'
 ;
nakedObject:
   prefix SPACE nakedObject
 | COPY (SPACE 'of' SPACE object)?
 | cumulativeReferencingPrefix SPACE nakedObject
 | nakedObject SPACE 'or' SPACE nakedObject
 | nakedObject ',' SPACE (nakedObject ',' SPACE )+ 'or' SPACE nakedObject
 | nakedObject SPACE withClause
 | n
 | nakedObject SPACE suffix
 | nakedObject SPACE 'and/or' SPACE nakedObject
 ;
referencingObjectPrefix:
    THE SPACE 'sacrificed'
  | THE SPACE 'exiled'
  | THE
  | commonReferencingPrefix
  | countableCount
  ;
cumulativeReferencingPrefix:
    'other' |
    EQUIPPED
    ;

commonReferencingPrefix:
  | EACH
  | ALL (SPACE THE)?
  | THIS
  | ENCHANTED
  | THAT
  | THESE
  | THOSE
  | ANOTHER
  | INDEFINITE_ARTICLE_AN
  | INDEFINITE_ARTICLE_A
  | THE SPACE 'chosen'
  | AT SPACE 'least' SPACE englishNumber
  | countableCount (SPACE commonReferencingPrefix)?
  | (ANOTHER SPACE)? (countableCount SPACE)? TARGET
  ;
prefix :
    ENCHANTED
  | 'non' anyType
  | 'non-' anyType
  | anyType
  | 'token' | 'nontoken'
  | color
  | 'tapped' | 'untapped'
  | LEGENDARY
  | 'attacking'
  | 'blocking'
  | 'attacking' SPACE 'or' SPACE 'blocking'
  ;

// Verb
imperative:
    SACRIFICE ' ' object
  | DESTROY ' ' object
  | DISCARD ' ' object
  | RETURN ' ' object (SPACE fromZone)? SPACE 'to' SPACE zone
  | EXILE ' ' object (SPACE untilClause)?
  | CREATE ' ' createTokenDescription
  | CREATE ' ' INDEFINITE_ARTICLE_A SPACE 'token' SPACE THAT_S SPACE object
  | COPY ' ' object
  | REMOVE ' ' countableCount SPACE counterKind SPACE COUNTER 's' SPACE 'from' SPACE object
  | (CAST | PLAY) 's'? ' ' object (SPACE 'without paying' SPACE ITS SPACE 'mana cost')? (SPACE thisTurn)?
  | SURVEIL SPACE NUMBER
  | SEARCH SPACE zone SPACE FOR SPACE object
  | (YOU SPACE)? CHOOSE SPACE object
  | (YOU SPACE)? DRAW SPACE (INDEFINITE_ARTICLE_A SPACE CARD | englishNumber SPACE CARD 's')
  | SHUFFLE SPACE zone
  | SHUFFLE SPACE (object | zone) SPACE 'into' SPACE zone
  | COUNTER SPACE object
  | TAP ' ' object
  | UNTAP ' ' object
  | (YOU SPACE)? PAY SPACE manacost
  | PAY SPACE numericalNumber SPACE 'life'
  | ADD SPACE 'one mana of any color'
  | ADD SPACE englishNumber SPACE 'mana of any one color'
  | ADD SPACE manaSymbols (SPACE 'or' SPACE manaSymbols)?
  | PREVENT SPACE damagePreventionAmount SPACE damageNoun SPACE 'that would be dealt' (SPACE 'to' SPACE object)? (SPACE thisTurn)?
  | PUT SPACE englishNumber SPACE counterKind SPACE (COUNTER | COUNTER 's') SPACE 'on' SPACE object
  | YOU SPACE CHOOSE SPACE object (SPACE 'from' SPACE IT)?
  | LOOK SPACE 'at the top' SPACE englishNumber SPACE CARD 's' SPACE 'of' SPACE zone
  | REVEAL SPACE object
  | PUT SPACE object SPACE intoZone (SPACE 'tapped')?
  | gains SPACE 'control' SPACE 'of' SPACE object
  | (YOU SPACE)? 'may' SPACE s ('.' SPACE IF SPACE YOU SPACE 'do' ',' SPACE s)?
  | 'have' SPACE object SPACE objectInfinitive
  | imperative SPACE FOR SPACE EACH SPACE nakedObject
  | imperative SPACE 'and' SPACE imperative
  | imperative SPACE 'unless' SPACE imperative
  | CHOOSE SPACE 'new targets for' SPACE object
  | SWITCH SPACE 'the power and toughness of' SPACE object SPACE untilClause
  ;

playerVerbPhrase:
   gains SPACE number SPACE 'life'
 | gains SPACE 'life' SPACE 'equal' SPACE 'to' SPACE itsPossessive SPACE numericalCharacteristic
 | playerVerbPhrase SPACE FOR SPACE EACH SPACE nakedObject
 | playerVerbPhrase SPACE 'for the first time each turn'
 | controls SPACE object
 | 'puts' SPACE object SPACE intoZone
 | 'surveil' | 'surveils'
 | 'discards' SPACE object
 | 'sacrifices' SPACE object
 | REVEAL 's' SPACE 'their hand'
 | imperative
 | playerVerbPhrase ',' SPACE 'then' SPACE playerVerbPhrase
 | CANT SPACE imperative
 | DOESN_T | DON_T | 'does' | 'do'
 ;

objectVerbPhrase:
   objectVerbPhrase SPACE 'and' SPACE objectVerbPhrase
 | objectVerbPhrase SPACE 'or' SPACE objectVerbPhrase
 | objectVerbPhrase ',' SPACE 'then' SPACE objectVerbPhrase
 | ('has' | 'have') SPACE acquiredAbility (SPACE asLongAsClause)?
 | gets SPACE ptModification SPACE 'and' SPACE gains SPACE acquiredAbility SPACE untilClause
 | gains SPACE acquiredAbility SPACE 'and' SPACE gets SPACE ptModification SPACE untilClause
 | gets SPACE ptModification (SPACE FOR SPACE EACH SPACE nakedObject)? (SPACE untilClause)?
 | 'enters' SPACE THEBATTLEFIELD SPACE 'with' SPACE INDEFINITE_ARTICLE_A SPACE counterKind SPACE 'counter on it'
 | 'enters' SPACE THEBATTLEFIELD SPACE 'with' SPACE englishNumber SPACE counterKind SPACE COUNTER 's' SPACE 'on' SPACE IT
 | 'enters' SPACE THEBATTLEFIELD SPACE 'with' SPACE 'a number of' SPACE counterKind SPACE COUNTER 's' SPACE 'on' SPACE IT 'equal' SPACE 'to' SPACE numberDefinition
 | ('enter' | 'enters') SPACE THEBATTLEFIELD (SPACE 'tapped')? (SPACE 'under' SPACE playersPossessive SPACE 'control')?
 | ('leave' | 'leaves') SPACE THEBATTLEFIELD
 | 'ETBs'
 | ('die' | 'dies')
 | 'is' SPACE PUT SPACE intoZone SPACE fromZone
 | CANT SPACE cantClauseInner (SPACE thisTurn)?
 | 'deals' SPACE dealsWhat
 | 'is' SPACE isWhat
 | ('attacks' | 'attack') (SPACE (THIS | EACH) SPACE 'combat if able')?
 | gains SPACE acquiredAbility (SPACE untilClause)?
 | DOESN_T SPACE 'untap during' SPACE qualifiedPartOfTurn
 | 'blocks or becomes blocked by' SPACE object
 | 'is countered this way'
 | 'fights' SPACE object
 | 'targets' SPACE object
 | ('cost' | 'costs') SPACE manacost SPACE 'less' SPACE 'to' SPACE CAST
 | CAN SPACE 'attack' SPACE 'as though it didn\'t have defender'
 | 'do so'
 | 'does so'
 | objectVerbPhrase SPACE FOR SPACE EACH SPACE nakedObject
 | objectVerbPhrase SPACE thisTurn
 | objectVerbPhrase SPACE IF SPACE s
 ;
objectInfinitive:
   'be put' SPACE intoZone SPACE thisTurn
 | 'fight' SPACE object
 | 'deal' SPACE dealsWhat
   ;

isWhat: color | object | inZone;
becomesWhat: 'tapped' | 'untapped';
itsPossessive:
    object SAXON |
    ITS
    ;
acquiredAbility:
    keyword
    | '"' ability '"'
    | acquiredAbility SPACE 'and' SPACE acquiredAbility
    ;
gets: 'gets' | 'get';
controls: 'controls' | 'control';
gains: GAINS | GAIN;
thisTurn: 'this turn';
numericalCharacteristic: 'toughness' | 'power' | 'converted mana cost';
untilClause: 'until' SPACE untilClauseInner;
untilClauseInner:  s |
    'end of turn'
    ;



damagePreventionAmount: ALL;
damageNoun: 'damage' | ('noncombat' | 'combat') SPACE 'damage';

createTokenDescription : englishNumber ' ' pt ' ' color ' ' permanentType ' ' ('token' | 'tokens') (SPACE withClause)?;
color : 'blue' | 'red' | 'green' | 'white' | 'black' | 'colorless' | 'monocolored' | 'multicolored' |  color SPACE 'and' SPACE color;
pt: NUMBER '/' NUMBER;
ptModification: PLUSMINUS (NUMBER | XX) '/' PLUSMINUS (NUMBER | XX);
numberDefinition:
     itsPossessive SPACE numericalCharacteristic
   | THE SPACE ('total' SPACE)? 'number of' SPACE object
   ;

withClause : 'with' SPACE withClauseInner;
withClauseInner :
   numericalCharacteristic SPACE numericalComparison
 | THE SPACE 'highest' SPACE numericalCharacteristic SPACE 'among' SPACE object
 | keyword;
counterKind: ptModification | 'charge' | 'hit' | 'wish';

// Deals damage
dealsWhat:
 ('combat' SPACE)? 'damage' SPACE 'to' SPACE damageRecipient
 | numericalNumber SPACE 'damage' SPACE 'to' SPACE damageRecipient
 | 'damage' SPACE 'equal' SPACE 'to' SPACE numberDefinition SPACE 'to' SPACE damageRecipient
 | 'damage' SPACE 'to' SPACE damageRecipient SPACE 'equal' SPACE 'to' SPACE numberDefinition
 ;

damageRecipient:
    object | player |
    'any' SPACE TARGET
   | TARGET SPACE damageRecipient SPACE 'or' SPACE damageRecipient
   | 'itself'
   ;

// Numbers
englishNumber: INDEFINITE_ARTICLE_A | INDEFINITE_ARTICLE_AN | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | XX | 'that many';
numericalNumber: NUMBER | 'that much' | number;
numericalComparison :
    number SPACE 'or' SPACE 'greater'
  | number SPACE 'or' SPACE 'less'
  | 'less than or equal to' SPACE numberDefinition
  | 'greater than' SPACE numberDefinition
  | number
  ;
number: NUMBER | XX;
countableCount:
    'exactly' SPACE englishNumber
   | englishNumber SPACE 'or more'
   | 'fewer than' SPACE englishNumber
   | 'any number of'
   | 'one of'
   | 'up to' SPACE englishNumber
   | englishNumber
   ;

// Can't clause effects
cantClauseInner:
    'attack'
  | 'block'
  | 'attack or block'
  | 'attack or block alone'
  | 'be blocked'
  | 'be countered'
  | 'be blocked by more than' SPACE englishNumber SPACE CREATURE
  ;

// Zone
zone: (playersPossessive | INDEFINITE_ARTICLE_A) SPACE actualZone | EXILE | THEBATTLEFIELD;
actualZone: 'graveyard' | 'library' | 'hand' | actualZone SPACE 'or' SPACE actualZone;
intoZone:
   'onto' SPACE THEBATTLEFIELD
 | 'into' SPACE zone
 | 'on top of' SPACE zone
 | 'on the bottom of' SPACE zone SPACE 'in any order'
 | 'on the bottom of' SPACE zone SPACE 'in a random order'
 ;
inZone:
    'on' SPACE THEBATTLEFIELD
  | 'in' SPACE zone
  ;
fromZone:
   'from' SPACE zone
   ;

// Permanent, spell, or card -- basic typing, without determiners
n: PERMANENT | n 's' | (anyType SPACE)? SPELL | (anyType SPACE)? CARD | permanentType | PERMANENT SPACE CARD | 'token';
permanentType : 'artifact' | CREATURE | 'enchantment' | 'land' | 'Gate' | 'planeswalker'
 | 'basic'
 | 'Soldier' | 'Knight' | 'Elf' | 'Bird' | 'Illusion' | 'Goblin' | 'Insect'
 | 'Plains' | 'Forest' | 'Mountain' | 'Swamp' | 'Island'
 | 'Vraska' | 'Ral'
 | permanentType ' ' permanentType | permanentType SPACE 'or' SPACE permanentType;
anyType : permanentType | spellType | '[' anyType ']';
spellType:
    INSTANT | SORCERY | spellType SPACE 'or' SPACE spellType
    | spellType SPACE 'and' SPACE spellType
    ;

// Special wordings in sentences
asLongAsClause: AS SPACE 'long' SPACE AS SPACE condition;
doSomethingInsteadOfSomethingElse:
    s SPACE 'instead of putting' SPACE IT SPACE 'into its owner\'s graveyard'
    ;


// Costs
costs : cost (',' SPACE cost)*;
cost: 'T' | '{T}' | s | manacost;
manacost: manaGroup+;
manaGroup: '{' (NUMBER | number)? 'W'* 'U'* 'B'* 'R'* 'G'* '}' | manaSymbol;
manaSymbols: manaSymbol+;
manaSymbol: '{' manaLetter '/' manaLetter '}' | '{' manaLetter '}';
manaLetter: 'W' | 'U' | 'B' | 'R' | 'G' | 'C';

// Parts of a turn
qualifiedPartOfTurn: turnQualification SPACE partOfTurn
    | 'combat on your turn' | 'combat';
turnQualification:
   (playersPossessive | THE) (SPACE 'next')?
   | EACH
   ;
partOfTurn: 'turn'
    | 'untap step'
    | 'upkeep'
    | 'draw step'
    | 'precombat main phase'
    | 'end step'
    ;

// Common qualifiers
playersPossessive:
    'your'
  | 'their'
  | player SAXON
  ;

// Miscellaneous
reminderText: REMINDER_TEXT;

// Terminals
XX : 'X';
PUT : P 'ut';
PLUSMINUS : '+' | '-';
NUMBER: XX | [0-9][0-9]?;
SACRIFICE : S 'acrifice';
DESTROY : D 'estroy';
FLASH : F 'lash';
CREATURE : C 'reature';
EXILE : E 'xile';
MENTOR : M 'entor';
VIGILANCE : V 'igilance';
TARGET : T 'arget';
LEGENDARY : L 'egendary';
FLYING : F 'lying';
LIFELINK : L 'ifelink';
CREATE : C 'reate';
TAP : T 'ap';
YOU : Y 'ou';
PAY : P 'ay';
SPACE : ' ';
ANOTHER : A 'nother';
ENCHANTED : E 'nchanted';
SURVEIL : S 'urveil';
COUNTER : C 'ounter';
JUMPSTART : J 'ump-start';
DEFENDER : D 'efender';
SHUFFLE : S 'huffle';
HASTE : H 'aste';
TRAMPLE : T 'rample';
DRAW : D 'raw';
DEATHTOUCH : D 'eathtouch';
RETURN : R 'eturn' | R 'eturns';
EACH: E 'ach';
ALL : A 'll';
MENACE : M 'enace';
FIRSTSTRIKE: F'irst strike';
DOUBLESTRIKE: D'ouble strike';
REACH : R 'each';
PREVENT : P 'revent';
ADD : A 'dd';
AS: A 's';
DISCARD: D 'iscard';
INSTANT: I 'nstant';
SORCERY: S 'orcery';
LOOK: L 'ook';
REVEAL: R 'eveal';
CAN : C 'an';
SCRY : S 'cry';
COPY : C 'opy';
ATTACH : A 'ttach';
ACTIVATE : A 'ctivate';
CAST : C 'ast';
DOUBLE : D 'ouble';
EXCHANGE : E 'xchange';
PLAY : P 'lay';
THEBATTLEFIELD : 'the battlefield';
FULLSTOP : '.';
EQUIP : E 'quip';
HEXPROOF : H 'exproof';
INDESTRUCTIBLE : I 'ndestructible';
AT : A 't';
WHEN : W 'hen';
WHENEVER : W 'henever';
IF : I 'f';
THE : T 'he';
IT_S : I 't\'s';
ITS :  I 'ts';
THIS:  T 'his';
THAT:  T 'hat';
PERMANENT : P 'ermanent';
SPELL : S 'pell';
CARD : C 'ard';
INDEFINITE_ARTICLE_A : A;
INDEFINITE_ARTICLE_AN : A 'n';
FOR: F 'or';
CANT : 'can' AP 't';
CHOOSE : C 'hoose';
THESE : T 'hese';
THOSE : T 'hose';
ACTIVATED : A 'ctivated';
IT : I 't';
SEARCH: S 'earch';
THEM : T 'hem';
DASHDASH: '--' | '—';
REMINDER_TEXT: SPACE '(' .*? ')' -> skip;
DOESN_T: 'doesn' AP 't';
DON_T: 'don' AP 't';
AP: '\'' | '’';
SAXON: AP 's';
UNTAP: U 'ntap';
THEY: T 'hey';
SWITCH: S 'witch';
EQUIPPED: E 'quipped';
THAT_S: 'that' AP 's';
REMOVE: R 'emove';
GAINS: G 'ains';
GAIN : G 'ain';