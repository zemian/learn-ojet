// // import Translations = require("ojs/ojtranslation");
import * as Translations from "ojs/ojtranslation";

function useString(s : string) {
    console.log("foo s", s);
}

// Error
// useString(Translations.applyParameters("test {foo}", {foo: "hello"}));

// We need to null check result first
const s =  Translations.applyParameters("test {foo}", {foo: "hello"});
if (s !== null)
    useString(s);

// Or force it
useString(Translations.applyParameters("test {foo}", {foo: "hello"}) as string);
useString(Translations.applyParameters("test {foo}", {foo: "hello"})!);
useString(<string>Translations.applyParameters("test {foo}", {foo: "hello"}));
