import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'apps-bizix', undefined> {
  return useTranslationBase('apps-bizix');
}