import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBr from '@/lang/pt-br'

const resources = {
    ptBr,
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'ptBr',
    interpolation: {
        escapeValue: false
    }
})

export default i18n;