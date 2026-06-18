import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
import messages from './content/messages/en.json';

// The site is English-only. next-intl is kept solely as the translation layer
// (the `t()` helpers reading from en.json); there is no locale routing.
export default getRequestConfig(async () => {
  return {
    locale: 'en',
    messages: messages as unknown as AbstractIntlMessages,
  };
});
