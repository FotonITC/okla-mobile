import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        dishes: state.dishes.plats,
    };
};

export default connect(mapStateToProps, null)(HomeScreen);
