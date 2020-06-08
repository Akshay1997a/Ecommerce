import FontAwsome from 'react-native-vector-icons/FontAwesome'
import styed from 'styled-components'
import styled from 'styled-components'
import { colors } from '../Style'

export const AppIcon = styled(FontAwsome).attrs({
    name: 'shopping-basket',
    color: colors.secondary
})`
font-size: ${props => props.size || 30}
`