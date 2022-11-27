import { EN, ES } from '@/constants/lang';
import { useLangContext } from '@/context/lang.context';

import { Icon } from './Icon';

export const LangSelector = () => {
  const { setLangContextValue } = useLangContext();
  return (
    <div className='flex'>
      <button className='  m-1' onClick={() => setLangContextValue(EN)}>
        <Icon size='l' src='/EN-Icon.svg' className='bg-cyan-300' />
      </button>
      <button className=' m-1' onClick={() => setLangContextValue(ES)}>
        <Icon size='md' src='/ES-Icon.svg' className='bg-cyan-300' />
      </button>
    </div>
  );
};
