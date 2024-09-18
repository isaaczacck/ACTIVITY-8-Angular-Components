import { RouterModule, Routes } from "@angular/router";
import { DisplayhelloworldComponent } from "./50-components/displayhelloworld/displayhelloworld.component";
import { ShowhellobuttonComponent } from "./50-components/showhellobutton/showhellobutton.component";
import { DisplaynameComponent } from "./50-components/displayname/displayname.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./50-components/counter/counter.component";
import { SimpleformComponent } from "./50-components/simpleform/simpleform.component";
import { UserageComponent } from "./50-components/userage/userage.component";
import { UsergreetingComponent } from "./50-components/usergreeting/usergreeting.component";
import { CalculatorComponent } from "./50-components/calculator/calculator.component";
import { TextlengthComponent } from "./50-components/textlength/textlength.component";
import { CurrencyconverterComponent } from "./50-components/currencyconverter/currencyconverter.component";
import { EvenoddcheckerComponent } from "./50-components/evenoddchecker/evenoddchecker.component";
import { WordreverserComponent } from "./50-components/wordreverser/wordreverser.component";
import { ShowdateComponent } from "./50-components/showdate/showdate.component";
import { ShowusernameComponent } from "./50-components/showusername/showusername.component";
import { MultiplicationtableComponent } from "./50-components/multiplicationtable/multiplicationtable.component";
import { SimpleloginComponent } from "./50-components/simplelogin/simplelogin.component";
import { FahrenheittocelsiusComponent } from "./50-components/fahrenheittocelsius/fahrenheittocelsius.component";
import { BookmarklistComponent } from "./50-components/bookmarklist/bookmarklist.component";
import { CharactercounterComponent } from "./50-components/charactercounter/charactercounter.component";
import { PalindromecheckerComponent } from "./50-components/palindromechecker/palindromechecker.component";
import { TemperatureconverterComponent } from "./50-components/temperatureconverter/temperatureconverter.component";
import { ShoppinglistComponent } from "./50-components/shoppinglist/shoppinglist.component";
import { FactorialcalculatorComponent } from "./50-components/factorialcalculator/factorialcalculator.component";
import { TodomanagerComponent } from "./50-components/todomanager/todomanager.component";
import { GuessnumbergameComponent } from "./50-components/guessnumbergame/guessnumbergame.component";
import { WordcounterComponent } from "./50-components/wordcounter/wordcounter.component";
import { RandomnumbergeneratorComponent } from "./50-components/randomnumbergenerator/randomnumbergenerator.component";
import { MultiplicationcheckerComponent } from "./50-components/multiplicationchecker/multiplicationchecker.component";
import { UppercaseconverterComponent } from "./50-components/uppercaseconverter/uppercaseconverter.component";
import { WordshufflerComponent } from "./50-components/wordshuffler/wordshuffler.component";
import { BmisolverComponent } from "./50-components/bmisolver/bmisolver.component";
import { InterestcalculatorComponent } from "./50-components/interestcalculator/interestcalculator.component";
import { CompoundinterestcalculatorComponent } from "./50-components/compoundinterestcalculator/compoundinterestcalculator.component";
import { OddsumcalculatorComponent } from "./50-components/oddsumcalculator/oddsumcalculator.component";
import { FibonaccigeneratorComponent } from "./50-components/fibonaccigenerator/fibonaccigenerator.component";
import { CurrencyformatterComponent } from "./50-components/currencyformatter/currencyformatter.component";
import { RandomquotedisplayComponent } from "./50-components/randomquotedisplay/randomquotedisplay.component";
import { UppercasegreetingComponent } from "./50-components/uppercasegreeting/uppercasegreeting.component";
import { DivisiblecheckerComponent } from "./50-components/divisiblechecker/divisiblechecker.component";
import { PrimenumbercheckerComponent } from "./50-components/primenumberchecker/primenumberchecker.component";
import { ColorselectorComponent } from "./50-components/colorselector/colorselector.component";
import { ShapeselectorComponent } from "./50-components/shapeselector/shapeselector.component";
import { LeapyearcheckerComponent } from "./50-components/leapyearchecker/leapyearchecker.component";
import { VowelcounterComponent } from "./50-components/vowelcounter/vowelcounter.component";
import { SimplestopwatchComponent } from "./50-components/simplestopwatch/simplestopwatch.component";
import { ArrayreverserComponent } from "./50-components/arrayreverser/arrayreverser.component";
import { AnagramcheckerComponent } from "./50-components/anagramchecker/anagramchecker.component";
import { PasswordstrengthcheckerComponent } from "./50-components/passwordstrengthchecker/passwordstrengthchecker.component";
import { AgecalculatorComponent } from "./50-components/agecalculator/agecalculator.component";
import { FormsModule } from "@angular/forms";
import { ValidateusernameComponent } from "./50-components/validateusername/validateusername.component";




const routes: Routes = [
    {path: "", component: DisplayhelloworldComponent},
    {path: "showhellobutton", component: ShowhellobuttonComponent},
    {path: "displayname", component: DisplaynameComponent},
    {path: "counter", component: CounterComponent},
    {path: "simpleform", component: SimpleformComponent},
    {path: "userage", component: UserageComponent},
    {path: "usergreeting", component: UsergreetingComponent},
    {path: "calculator", component: CalculatorComponent},
    {path: "textlength", component: TextlengthComponent},
    {path: "currencyconverter", component: CurrencyconverterComponent},
    {path: "evenoddchecker", component: EvenoddcheckerComponent},
    {path: "wordreverser", component: WordreverserComponent},
    {path: "showdate", component: ShowdateComponent},
    {path: "showusername", component: ShowusernameComponent},
    {path: "multiplicationtable", component: MultiplicationtableComponent},
    {path: "simplelogin", component: SimpleloginComponent },
    {path: "fahrenheittocelsius", component: FahrenheittocelsiusComponent },
    {path: "bookmarklist", component: BookmarklistComponent },
    {path: "charactercounter", component: CharactercounterComponent },
    {path: "palindromechecker", component: PalindromecheckerComponent },
    {path: "temperatureconverter", component: TemperatureconverterComponent },
    {path: "shoppinglist", component: ShoppinglistComponent },
    {path: "factorialcalculator", component: FactorialcalculatorComponent },
    {path: "todomanager", component: TodomanagerComponent },
    {path: "guessnumbergame", component: GuessnumbergameComponent },
    {path: "wordcounter", component: WordcounterComponent },
    {path: "randomnumbergenerator", component: RandomnumbergeneratorComponent },
    {path: "multiplicationchecker", component: MultiplicationcheckerComponent },
    {path: "uppercaseconverter", component: UppercaseconverterComponent },
    {path: "wordshuffler", component: WordshufflerComponent },
    {path: "bmisolver", component: BmisolverComponent },
    {path: 'validateusername', component: ValidateusernameComponent },    
    {path: "interestcalculator", component: InterestcalculatorComponent },
    {path: "compoundinterestcalculator", component: CompoundinterestcalculatorComponent },
    {path: "fibonaccigenerator", component: FibonaccigeneratorComponent },
    {path: "oddsumcalculator", component: OddsumcalculatorComponent },
    {path: "currencyformatter", component: CurrencyformatterComponent },
    {path: "randomquotedisplay", component: RandomquotedisplayComponent },
    {path: "uppercasegreeting", component: UppercasegreetingComponent },
    {path: "divisiblechecker", component: DivisiblecheckerComponent },
    {path: "shapeselector", component: ShapeselectorComponent },
    {path: "colorselector", component: ColorselectorComponent },
    {path: "PrimeNumberChecker", component: PrimenumbercheckerComponent },
    {path: "VowelCounter", component: VowelcounterComponent },
    {path: "LeapYearChecker", component: LeapyearcheckerComponent },
    {path: "PasswordStrengthChecker", component: PasswordstrengthcheckerComponent },
    {path: "AgeCalculator", component: AgecalculatorComponent },
    {path: "ArrayReverser", component: ArrayreverserComponent },
    {path: "AnagramChecker", component: AnagramcheckerComponent },
    {path: "SimpleStopwatch", component: SimplestopwatchComponent }

    
]

@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        
        RouterModule.forRoot(routes, {enableTracing:true}),
        
    ],

    declarations:[
        AppComponent,
        DisplayhelloworldComponent,
        ShowhellobuttonComponent,
        DisplaynameComponent,
        CounterComponent,
        SimpleformComponent,
        UserageComponent,
        UsergreetingComponent,
        CalculatorComponent,
        TextlengthComponent,
        CurrencyconverterComponent,
        EvenoddcheckerComponent,
        WordreverserComponent,
        ShowdateComponent,
        ShowusernameComponent,
        MultiplicationtableComponent,
        SimpleloginComponent,
        FahrenheittocelsiusComponent,
        BookmarklistComponent,
        CharactercounterComponent,
        PalindromecheckerComponent,
        TemperatureconverterComponent,
        ShoppinglistComponent,
        FactorialcalculatorComponent,
        TodomanagerComponent,
        GuessnumbergameComponent,
        WordcounterComponent,
        RandomnumbergeneratorComponent,
        MultiplicationcheckerComponent,
        UppercaseconverterComponent,
        WordshufflerComponent,
        BmisolverComponent,
        InterestcalculatorComponent,
        CompoundinterestcalculatorComponent,
        FibonaccigeneratorComponent,
        OddsumcalculatorComponent,
        CurrencyformatterComponent,
        RandomquotedisplayComponent,
        UppercasegreetingComponent,
        DivisiblecheckerComponent,
        ShapeselectorComponent,
        ColorselectorComponent,
        PrimenumbercheckerComponent,
        VowelcounterComponent,
        LeapyearcheckerComponent,
        PasswordstrengthcheckerComponent,
        AgecalculatorComponent,
        ArrayreverserComponent,
        AnagramcheckerComponent,
        SimplestopwatchComponent,
        ValidateusernameComponent






    ],
    providers:[

    ],

    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}