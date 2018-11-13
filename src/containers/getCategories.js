import { connect } from 'react-redux';

import Categories from '../components/categories';

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};


export default  connect(
    mapStateToProps
)(Categories);
