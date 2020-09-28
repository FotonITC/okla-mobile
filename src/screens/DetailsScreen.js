import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Text, View, ActivityIndicator} from 'react-native';

import {getDishDetails} from '../store/actions/dishes';
import {createStructuredSelector} from 'reselect';
import {selectDishDetails} from '../store/actions/dish.selectors';

function DetailsScreen(props) {

    const {dishId} = props.route.params;

    useEffect(() => {
        props.getDishDetails(dishId);
    }, []);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {!props.dish ? <ActivityIndicator size="large"/> : <Text>{props.dish.label}</Text>}
        </View>
    );
}

const mapStateToProps = createStructuredSelector({
    dish: selectDishDetails,
});

export default connect(mapStateToProps, {getDishDetails})(DetailsScreen);
