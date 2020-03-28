import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingHorizontal:24,
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
    },

    incident: {
        marginTop: 48,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        padding: 24,
    },  

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        lineHeight: 24,
    },

    contactBox: {
        borderRadius: 8,
        backgroundColor: "#fff",
        padding: 24,
    },  

    heroTitle : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize:15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        padding: 18,
        borderRadius: 8,
        height: 50,
        width: '48%',
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15, 
        fontWeight: 'bold',
    },
    
});