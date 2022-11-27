import EN from '@/data/lang/en.json';
import ES from '@/data/lang/es.json';
import { createContext, useContext, useEffect, useState } from 'react';
import { ILangData } from './types';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}
interface IContext {
  setLangContextValue: (lang: string) => void;
  langContextData: ILangData;
}

export const LangContext = createContext<IContext | null>(null);

export const LangProvider = ({ children }: IProps) => {
  const lang = localStorage.getItem('lang') || 'ES';
  const [langContextValue, setLangContextValue] = useState(lang);
  const [langContextData, setLangContextData] = useState(lang === 'ES' ? ES : EN);

  useEffect(() => {
    setLangContextData(langContextValue === 'ES' ? ES : EN);
    localStorage.setItem('lang', langContextValue);
  }, [langContextValue]);

  return (
    <LangContext.Provider value={{ setLangContextValue, langContextData }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === undefined)
    throw new Error('LangContext must be used within a LangProvider');
  return context as IContext;
};
