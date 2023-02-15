import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../splash/Splash';
import Home from '../home/Home';
import ViewAuditores from '../generalContent/viewsMenu/viewAuditores/ViewAuditores';
import ViewDependencias from '../generalContent/viewsMenu/viewDependencias/ViewDependencias';
import ViewManualesFunciones from '../generalContent/viewsMenu/viewManualesFunciones/ViewManualesFunciones';
import ViewManualesObligaciones from '../generalContent/viewsMenu/viewManualesObligaciones/ViewManualesObligaciones';
import ViewMiMunicipio from '../generalContent/viewsMenu/viewMiMunicipio/ViewMiMunicipio';
import ViewOrganismos from '../generalContent/viewsMenu/viewOrganismos/ViewOrganismos';
import ViewReportantes from '../generalContent/viewsMenu/viewReportantes/ViewReportantes';
import ButtomFloating from '../home/generalContainer/components/ButtomFloating';
import NuevoReporte from '../generalContent/reportes/NuevoReporte';
import NuevaTarea from '../generalContent/tareas/NuevaTarea';
import NuevoUsuarioRep from '../generalContent/usuarios/NuevoUsuario';



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
            <Stack.Screen name="ButtomFloating" component={ButtomFloating} />
            <Stack.Screen name="NuevoReporte" component={NuevoReporte} />
            <Stack.Screen name="NuevaTarea" component={NuevaTarea} />
            <Stack.Screen name="NuevoUsuarioRep" component={NuevoUsuarioRep} />
        </Stack.Navigator>
    );

}
export default CoinsStack;