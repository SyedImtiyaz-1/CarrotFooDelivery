import { Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSettings } from '@/contexts/use-settings'
import { CustomSwitch } from './TopNav.style'
const getValues = (settings) => ({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
})

const ThemeSwitches = ({ noText }) => {
    return null
}

export default ThemeSwitches
