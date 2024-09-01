import React from 'react';
import { Text } from 'react-native';
import * as Global from '../../components/Global';
import { useTheme } from '../../context/useTheme';


export function HomeScreen(): React.JSX.Element {
    const theme = useTheme();

    return (
        <Global.MainScreenContainer>
            <Global.Header />
            <Text style={{ color: theme.textColor }}>HOME SCREEN</Text>
        </Global.MainScreenContainer>
    );
}
