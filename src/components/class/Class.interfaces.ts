export interface IClassComponentProps {
    title: string;
    isShow?: boolean;
    numberArray: number[];
    stringArray: string[];
    testObject: ITestObject;
    testObjectArray: ITestObject[];
    testFunc: (value: string) => string;
}

export interface ITestObject {
    varString: string;
    varNumber: number;
    varBoolean: boolean;
}

export interface IClassComponentState {
    counter: number;
    textValue: string;
}