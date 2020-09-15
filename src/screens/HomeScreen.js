import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchDishes} from '../store/actions/dishes';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const {navigation, dishes} = this.props;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>

                <FlatList
                    data={dishes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Text>{item.label}</Text>}
                />

                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dishes: state.dishes.plats,
    };
};

export default connect(mapStateToProps, {fetchDishes})(HomeScreen);
