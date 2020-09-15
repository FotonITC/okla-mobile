import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchDishes} from '../store/actions/dishes';
import DishItem from '../components/DishItem';

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
            <FlatList
                data={dishes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <DishItem
                    title={item.label}
                    description={item.description}
                    image={item.images[0]}
                    onSelect={() => navigation.navigate('Details')}
                />}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dishes: state.dishes.plats,
    };
};

export default connect(mapStateToProps, {fetchDishes})(HomeScreen);
