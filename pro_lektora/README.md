# Informace pro lektora akademie

Tento dokument popisuje obsah a zamýšlenou výuku akademie. Neobsahuje žádné vyloženě tajné informace, které by
účastníci kurzu nesměli vědět, ale pokud toto čteš právě jako účastník, je možné, že se zbytečně připravíš o řadu
doplňujících informací, které v rámci výuky právě lektor dodá. :-)

## Struktura akademie

Akademie se aktuálně skládá ze sedmi lekcí:

1. _React a komponenty._ Představení Reactu a konceptu komponent.
1. _Předávání dat komponentám._ Parametrizace komponent pomocí _props_.
1. _Stav komponent._ Udržování stavu pomocí hooku _useState_.
1. _React Router._ Rozdělení aplikace do více stránek s použitím React Routeru.
1. _Formuláře a efekty._ Formulářové prvky v Reactu. Použití hooku _useEffect_ pro načtení dat při vykreslení
  komponenty.
1. _Kontext a vícejazyčnost._ Globální stav s použitím React Contextu. Tvorba vícejazyčných aplikací.
1. _Aplikace pro správu studentů školy._ Implementace jednoduché aplikace charakteru CRUD.

## Použité ukázky a jejich předpokládané využití

Ukázky jednotlivých lekcí jsou rozděleny do samostatných adresářů, _lecture\_1_ až _lecture\_7_.

Celková myšlenka je taková, že lektor na začátku každé lekce vytvoří v kořenovém adresáři repository (tj. adresáři o
jeden nadřazeném tomuto) adresář odpovídající dané lekci (tedy postupně _lecture\_1_ až _lecture\_7_), a v něm během
lekce buduje takový obsah, aby na konci lekce odpovídal odpovídajícímu obsahu v tomto adresáři. Ukázky pochopitelně
nemusejí být shodné doslova, ale svojí myšlenkou by se měly těm zde přítomným podobat.

Předpokládá se, že po skončení lekce vyučující vždy do své repository přidá aktuální obsah tvořeného adresáře
_lecture\_x_, ať už svůj vlastní, nebo klidně právě zkopírovaný ze souborů v tomto adresáři, a tento obsah následně
účastníkům zpřístupní. Jinými slovy po skončení všech lekcí by budované soubory měly mít obsah obdobný jako soubory v
tomto adresáři (případně zcela stejný).

## Popis lekcí

### React a komponenty

Obsahem lekce je vytvoření první aplikace v Reactu:

- Vytvoření prázdné aplikace (aktuálně pomocí [Create React App](https://create-react-app.dev/)) a stručné představení
  jednotlivých druhů souborů, ze kterých se aplikace skládá.
- Představení konceptu komponenty a tvorba prvních komponent.
- Představení JSX a jeho používání při tvorbě komponent.

### Předávání dat komponentám

V první části lekce se opakují iterační funkce nad polem, a to především _filter_ a _map_, a jejich použití v rámci
vykreslování pole dat v komponentě.

Následuje představení podmíněného vykreslování pomocí podmínkového operátoru a operátoru _&&_.

Druhá část lekce představuje předávání dat komponentám pomocí _props_, včetně použití _children_ a včetně předávání
funkcí pomocí _props_. Součástí je i vysvětlení destrukturalizace objektů.

### Stav komponent

První část lekce je věnována opakování náročnějších prvků z předchozí lekce (_children_, předávání funkcí pomocí
_props_).

Hlavním obsahem je potom představení stavu komponent za použití hooku _useState_.

### React Router

Lekce se skládá z následujících částí:

- Opakování obsahu předcházejících lekcí.
- Základní použití nástroje _npm_.
- Použití deklarace _import_ pro načtení javascriptových funkcí, stylů a obrázků.
- Rozdělení aplikace do více samostatných stránek. Úvodní ukázka se nachází uvnitř aplikace _react-router-example_ a
  skládá se ze dvou částí:
  * Nejprve je ve vygenerované aplikaci v _App.js_ ukázáno, jak je možné „ručně“ s použitím stavu řídit při kliknutí na
    „odkaz“ překreslení části obrazovky jinou komponentou.
  * Poté je do aplikace přidána závislost na [React Routeru](https://reactrouter.com/en/main). Jsou vytvořeny
    komponenty _Introduction_, _Academies_ a _ReactAcademy_ a poté je v souboru _index.js_ zavedeno skutečné routování.
  * Na závěr je představena komponenta _Link_ pro vytváření odkazů mezi jednotlivými stránkami.
- Samostatné cvičení na zavedení routování do nové aplikace, jehož výsledkem je aplikace _seasons_. _Poznámka:_
  neočekává se, že účastníci přijdou s řešením, kdy si úlohu usnadní společnou komponentou _Season_, ale je vhodném
  jim na závěr ukázat, že něco takového je možné.
- Představení práce s parametry v cestě a na ně navazující samostatné cvičení, jehož výsledkem je aplikace _employees_.
  Cílem je vytvořit stránku se seznamem zaměstnanců, z něhož vedou odkazy na detaily jednotlivých zaměstnanců. Soubory
   _employees.json_ a _departments.json_ je potřeba účastníkům poskytnout přes Google Drive (neočekáváme u nich větší
  znalost ani Gitu, ani GitHubu).
- Představení práce s komponentou _Outlet_, jehož výsledkem je obsah aplikace _outlet-example_.

### Formuláře a efekty

V této lekci je použito externí API, jehož chování nemáme pod kontrolou. **S vhodným předstihem před výukou lekce je
nezbytné ověřit, že se rozhraní nezměnilo, že nezavedlo restrikce z hlediska CORS nebo že nebylo třeba zcela
odstraněno.** V případě, že by něco takového nastalo, je potřeba najít jiné rozhraní pro podobnou dostatečně
jednoduchou ukázku.

Lekce se opět skládá z několika samostatných částí, ale díky znalosti routování se vše odehrává již pouze na
samostatných stránkách jediné aplikace _forms-and-effects_:

- Práce s formulářovými prvky a svázání jejich stavu se stavem komponenty (adresář _Forms_).
- Představení hooku _useEffect_ pro načtení dat při vykreslení komponenty (adresář _PublicHolidays_, komponenta
  _PublicHolidays_). Součástí ukázky je i vytvoření komponenty _Loader_, nicméně je vhodné nejprve ve stavu úvodního
  načítání dat pouze zobrazit obyčejný text (např. „načítání dat“ či podobně) a teprve následně vytvořit vizuálně
  přitažlivější vzhled komponenty _Loader_.
- Samostatné cvičení na načítání dat při vykreslení komponenty (adresář _Employees_). Soubory _employees.json_ a
  _departments.json_ je potřeba účastníkům poskytnout přes Google Drive.
- Vylepšení ukázky s načítáním státních svátků o výběr roku, kdy tedy dochází k načtení dat nejen při prvním vykreslení
  komponenty, ale rovněž i vždy v okamžiku, kdy uživatel vybere jiný rok (adresář _PublicHolidays_, komponenta
  _PublicHolidaysImproved_).

### Kontext a vícejazyčnost

První část lekce spočívá ve vysvětlení problematiky globálního stavu a potíží řešení pomocí tzv. _prop drilling_. Z
časových důvodů není úvodní ukázka (aplikace _global-state_) tvořena v rámci lekce, nýbrž pouze představena jako
hotová. Ukázku je zároveň potřeba účastníkům poskytnout v zazipované podobě přes Google Drive. Následně je ukázka
změněna na použití React Contextu. Výsledek je obsažen v aplikaci _react-context-example_ (nicméně na hodině modifikace
probíhají přímo v původní aplikaci _global-state_).

Ve druhé části lekce jsou představeny principy tvorby vícejazyčných aplikací za pomoci knihovny [react-intl](https://formatjs.io/docs/react-intl/). Výsledkem je minimalistická aplikace _i18n-example_.

Závěrečná část lekce spočívá v samostatné (ale rozsáhlejší) práci na aplikaci, která propojuje použití React Contextu
(obsahujícího uživatelem vybraný jazyk) s vícejazyčností. Jednotlivé konkrétní kroky cvičení jsou rozebrány v
prezentaci, nicméně je potřeba je s účastníky podrobně projít a zdůraznit největší možná úskalí. Výsledkem je aplikace
_draci-doupe_. U tohoto cvičení je potřeba počítat, že v něm bude potřeba účastníkům pomáhat s řadou potíží, protože
málokterý to zvládne hned napoprvé bezchybně.

### Aplikace pro správu studentů školy

Poslední, celodenní lekce je věnována procvičování, a to v podobě aplikace charakteru _CRUD_, konkrétně pracující s
databází studentů přes REST API.

Před lekcí je potřeba vzít celý adresář _lecture\_7_, v něm odstranit adresář _students-client_ a následně vše
účastníkům poskytnout v zazipované podobě přes Google Drive.

Význam jednotlivých adresářů:

- _students-server-restapi-node:_ obsahuje server poskytující REST API.
- _vzor:_ obsahuje statické HTML soubory sloužící jako ukázky jednotlivých obrazovek aplikace.

Cílem je tedy přetvořit statické ukázky z adresáře vzor ve funkční SPA pracující s daty ze serveru.

V ideálním případě by účastníci aplikaci tvořili samostatně. V praxi to obvykle možné není. Jako vysloveně samostatnou
práci lze zadat úvodní seznam všech studentů, protože to je vlastně zcela shodná úloha, jako se dělala na předchozích
lekcích. I zde je ale potřeba hlídat hodiny, aby se tímto samostatný úvodem nestrávilo příliš mnoho času. Podobně
jednoduchá je ještě obrazovka detailu studenta.

Obrazovky pro vytváření a aktualizaci dat studentů bývají pro účastníky náročnější, a to především kvůli tomu, že si
musejí připomenout, jak se pracuje s formuláři. Je proto pak lepší už tyto obrazovky vytvářet s účastníky společně, než
je to nechat tvořit vyloženě samostatně (hlavně z časových důvodů).

Výsledkem je aplikace _students-client_. Oproti původnímu vzoru byla v předchozím běhu rozšířena ještě o vícejazyčnost,
a tedy možnost přepínání mezi anglickou a českou verzí.
