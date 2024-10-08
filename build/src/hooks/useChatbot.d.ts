import React from 'react';
import WidgetRegistry from '../components/WidgetRegistry/WidgetRegistry';
import IConfig from '../interfaces/IConfig';
import { IMessage } from '../interfaces/IMessages';
interface IUseChatbotParams {
    config: IConfig | null;
    actionProvider: any;
    messageParser: any;
    messageHistory: IMessage[] | string;
    saveMessages: (messages: IMessage[], html: string) => any | null;
    runInitialMessagesWithHistory?: Boolean;
    discard?: Boolean;
    newConversation?: Boolean;
}
declare const useChatbot: ({ config, actionProvider, messageParser, messageHistory, runInitialMessagesWithHistory, saveMessages, discard, newConversation, ...rest }: IUseChatbotParams) => {
    configurationError: string;
    invalidPropsError?: undefined;
    widgetRegistry?: undefined;
    actionProv?: undefined;
    messagePars?: undefined;
    state?: undefined;
    setState?: undefined;
    messageContainerRef?: undefined;
    ActionProvider?: undefined;
    MessageParser?: undefined;
} | {
    invalidPropsError: string;
    configurationError?: undefined;
    widgetRegistry?: undefined;
    actionProv?: undefined;
    messagePars?: undefined;
    state?: undefined;
    setState?: undefined;
    messageContainerRef?: undefined;
    ActionProvider?: undefined;
    MessageParser?: undefined;
} | {
    widgetRegistry: WidgetRegistry;
    actionProv: any;
    messagePars: any;
    configurationError: string;
    invalidPropsError: string;
    state: any;
    setState: React.Dispatch<any>;
    messageContainerRef: React.MutableRefObject<HTMLDivElement>;
    ActionProvider: any;
    MessageParser: any;
};
export default useChatbot;
