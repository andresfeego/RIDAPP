import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../splash/Splash';
import Home from '../home/Home';
import ViewAuditores from '../viewsMenu/viewAuditores/ViewAuditores';
import ViewDependencias from '../viewsMenu/viewDependencias/ViewDependencias';
import ViewManualesFunciones from '../viewsMenu/viewManualesFunciones/ViewManualesFunciones';
import ViewManualesObligaciones from '../viewsMenu/viewManualesObligaciones/ViewManualesObligaciones';
import ViewMiMunicipio from '../viewsMenu/viewMiMunicipio/ViewMiMunicipio';
import ViewOrganismos from '../viewsMenu/viewOrganismos/ViewOrganismos';
import ViewReportantes from '../viewsMenu/viewReportantes/ViewReportantes';

const Stack = createStackNavigator();

const CoinsStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ViewAuditores" component={ViewAuditores} />
            <Stack.Screen name="ViewDependencias" component={ViewDependencias} />
            <Stack.Screen name="ViewManualesFunciones" component={ViewManualesFunciones} />
            <Stack.Screen name="ViewManualesObligaciones" component={ViewManualesObligaciones} />
            <Stack.Screen name="ViewMiMunicipio" component={ViewMiMunicipio} />
            <Stack.Screen name="ViewOrganismos" component={ViewOrganismos} />
            <Stack.Screen name="ViewReportantes" component={ViewReportantes} />
        </Stack.Navigator>
    );

}
export default CoinsStack;